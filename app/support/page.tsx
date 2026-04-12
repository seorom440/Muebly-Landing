import type { Metadata } from "next";
import { SupportPage } from "@/components/pages/SupportPage";

export const metadata: Metadata = {
  title: "Centro de Ayuda | Help Center — Muebly",
  description:
    "¿Tienes dudas sobre Muebly? Consulta las preguntas frecuentes o escríbenos a hola@muebly.es. Respondemos en menos de 24 horas.",
  alternates: { canonical: "https://muebly.es/support" },
  openGraph: {
    title: "Centro de Ayuda — Muebly",
    description: "Resolvemos tus dudas sobre la plataforma de diseño de interiores con IA.",
    url: "https://muebly.es/support",
  },
};

export default function Page() {
  return <SupportPage />;
}
