import type { Metadata } from "next";
import { RealEstatePage } from "@/components/pages/RealEstatePage";

export const metadata: Metadata = {
  title: "For Real Estate — Muebly",
  description: "AI virtual staging for real estate agents and property developers. Stage any property in seconds and sell it faster.",
  alternates: { canonical: "https://muebly.app/real-estate" },
};

export default function RealEstate() {
  return <RealEstatePage />;
}
