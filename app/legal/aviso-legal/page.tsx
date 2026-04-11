import type { Metadata } from "next";
import { AvisoLegalPage } from "@/components/pages/AvisoLegalPage";

export const metadata: Metadata = {
  title: "Aviso Legal | Muebly",
  description: "Información legal de Muebly — WeApp Bcn S.L.",
  alternates: { canonical: "https://muebly.app/legal/aviso-legal" },
  robots: { index: false },
};

export default function Page() {
  return <AvisoLegalPage />;
}
