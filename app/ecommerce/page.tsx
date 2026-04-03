import type { Metadata } from "next";
import { EcommercePage } from "@/components/pages/EcommercePage";

export const metadata: Metadata = {
  title: "For E-commerce — Muebly",
  description: "Your furniture catalog in an AI-powered app. Let customers visualize your products in their homes and increase conversions.",
  alternates: { canonical: "https://muebly.app/ecommerce" },
};

export default function Ecommerce() {
  return <EcommercePage />;
}
