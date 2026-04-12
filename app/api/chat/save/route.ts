import { NextRequest, NextResponse } from "next/server";
import { appendFileSync, mkdirSync } from "fs";
import { join } from "path";

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
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  } catch {
    return iso;
  }
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
    const dataDir = join(process.cwd(), "data");
    mkdirSync(dataDir, { recursive: true });

    const lines: string[] = [
      "=====================================",
      `FECHA: ${formatDate(payload.timestamp_inicio)}`,
      `EMAIL: ${payload.email_usuario ?? "No proporcionado"}`,
      "-------------------------------------",
    ];

    for (const msg of payload.mensajes) {
      const role = msg.role === "user" ? "Usuario" : "Bot";
      lines.push(`${role}: ${msg.content}`);
    }

    lines.push("=====================================\n");

    appendFileSync(join(dataDir, "conversaciones.txt"), lines.join("\n"), "utf8");
    console.log("[Muebly Chat] Conversation saved to /data/conversaciones.txt ✓");
  } catch (err) {
    console.error("[Muebly Chat] File write failed (non-fatal):", err);
  }

  return NextResponse.json({ ok: true });
}
