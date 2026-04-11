import type { Metadata } from "next";
import { CookiesPage } from "@/components/pages/CookiesPage";

export const metadata: Metadata = {
  title: "Política de Cookies | Muebly",
  description: "Política de cookies de Muebly — WeApp Bcn S.L.",
  alternates: { canonical: "https://muebly.app/legal/cookies" },
  robots: { index: false },
};

export default function Page() {
  return <CookiesPage />;
}
