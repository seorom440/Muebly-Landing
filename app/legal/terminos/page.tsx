import type { Metadata } from "next";
import { TerminosPage } from "@/components/pages/TerminosPage";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Muebly",
  description: "Términos y condiciones del servicio de Muebly — WeApp Bcn S.L.",
  alternates: { canonical: "https://muebly.app/legal/terminos" },
  robots: { index: false },
};

export default function Page() {
  return <TerminosPage />;
}
