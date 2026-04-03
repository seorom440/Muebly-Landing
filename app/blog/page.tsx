import type { Metadata } from "next";
import { BlogPage } from "@/components/pages/BlogPage";

export const metadata: Metadata = {
  title: "Blog — Muebly",
  description: "Insights, tutorials, and news about AI interior design and virtual staging.",
  alternates: { canonical: "https://muebly.app/blog" },
};

export default function Blog() {
  return <BlogPage />;
}
