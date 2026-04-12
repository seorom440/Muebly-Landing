import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  console.log("[Muebly Chat] Conversation saved:", JSON.stringify(payload, null, 2));
  return NextResponse.json({ ok: true });
}
