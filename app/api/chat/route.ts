import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `Eres el asistente de soporte de Muebly, una app de diseño de interiores con IA que permite ver muebles reales de tiendas españolas en tu hogar antes de comprarlos. Responde de forma breve, amigable y útil. Si el usuario tiene un problema técnico que no puedes resolver, indícale que escriba a hola@muebly.es. Responde siempre en el idioma del usuario.`;

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response("ANTHROPIC_API_KEY not configured", { status: 500 });
  }

  let messages: Anthropic.MessageParam[];
  try {
    const body = await req.json();
    messages = body.messages;
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  try {
    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const stream = await client.messages.stream({
      model: "claude-haiku-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(chunk.delta.text));
            }
          }
        } catch (err) {
          console.error("[Muebly Chat] Stream error:", err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("[Muebly Chat] Anthropic API error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to connect to AI service" }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
}
