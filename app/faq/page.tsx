import type { Metadata } from "next";
import { FAQPage } from "@/components/pages/FAQPage";

export const metadata: Metadata = {
  title: "FAQ — Muebly",
  description: "Everything you need to know about AI interior design, virtual staging, and how Muebly works.",
  alternates: { canonical: "https://muebly.app/faq" },
};

export default function FAQ() {
  return <FAQPage />;
}
