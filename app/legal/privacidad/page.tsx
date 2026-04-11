import type { Metadata } from "next";
import { PrivacidadPage } from "@/components/pages/PrivacidadPage";

export const metadata: Metadata = {
  title: "Política de Privacidad | Muebly",
  description: "Política de privacidad de Muebly — WeApp Bcn S.L.",
  alternates: { canonical: "https://muebly.app/legal/privacidad" },
  robots: { index: false },
};

export default function Page() {
  return <PrivacidadPage />;
}
