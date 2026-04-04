import type { Metadata } from "next";
import { cookies } from "next/headers";
import { getAllPosts, Language } from "@/lib/blog";
import { BlogPage } from "@/components/pages/BlogPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — Muebly",
  description: "Insights, tutorials, and news about AI interior design and virtual staging.",
  alternates: { canonical: "https://muebly.app/blog" },
};

export default function Blog() {
  const lang = (cookies().get("muebly-lang")?.value ?? "en") as Language;
  const posts = getAllPosts(lang);
  return <BlogPage posts={posts} />;
}
