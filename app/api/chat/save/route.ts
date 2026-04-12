import { NextRequest, NextResponse } from "next/server";
import { JWT } from "google-auth-library";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface SavePayload {
  session_id: string;
  timestamp_inicio: string;
  timestamp_fin: string;
  idioma: "es" | "en";
  email_usuario: string | null;
  mensajes: ChatMessage[];
  resuelto: boolean;
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}/${d.getFullYear()} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
  } catch { return iso; }
}

function formatConversation(msgs: ChatMessage[]): string {
  return msgs.map(m => `${m.role === "user" ? "Usuario" : "Bot"}: ${m.content}`).join(" | ");
}

async function ensureHeaders(token: string, sheetId: string): Promise<void> {
  const check = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  const data = await check.json();
  if (data.values?.length) return;

  await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:I1?valueInputOption=USER_ENTERED`,
    {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [["Fecha y hora inicio","Fecha y hora fin","Idioma","Email usuario","Resuelto (Sí/No)","Nº de mensajes","Primer mensaje del usuario","Conversación completa","Session ID"]] }),
    }
  );
  console.log("[Muebly Chat] Sheet headers created ✓");
}

async function appendToSheet(payload: SavePayload): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEETS_ID;
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!sheetId || !email || !key) {
    console.warn("[Muebly Chat] Google Sheets env vars missing — skipping");
    return;
  }

  const jwt = new JWT({ email, key, scopes: ["https://www.googleapis.com/auth/spreadsheets"] });
  const { access_token } = await jwt.authorize();
  if (!access_token) throw new Error("No access token");

  await ensureHeaders(access_token, sheetId);

  const firstUser = payload.mensajes.find(m => m.role === "user")?.content ?? "";
  const row = [
    formatDate(payload.timestamp_inicio),
    formatDate(payload.timestamp_fin),
    payload.idioma === "es" ? "Español" : "English",
    payload.email_usuario ?? "",
    payload.resuelto ? "Sí" : "No",
    String(payload.mensajes.length),
    firstUser,
    formatConversation(payload.mensajes),
    payload.session_id,
  ];

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A:I:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ values: [row] }),
  });

  if (!res.ok) throw new Error(`Sheets API ${res.status}: ${await res.text()}`);
  console.log("[Muebly Chat] Row appended to Google Sheets ✓");
}

export async function POST(req: NextRequest) {
  let payload: SavePayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  console.log("[Muebly Chat] Session received:", {
    session_id: payload.session_id,
    idioma: payload.idioma,
    email: payload.email_usuario,
    mensajes: payload.mensajes.length,
    resuelto: payload.resuelto,
  });

  try {
    await appendToSheet(payload);
  } catch (err) {
    console.error("[Muebly Chat] Sheets write failed (non-fatal):", err);
  }

  return NextResponse.json({ ok: true });
}
