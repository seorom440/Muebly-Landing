import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const blogUrls = slugs.map((slug) => ({
    url: `https://muebly.app/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    { url: "https://muebly.app", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: "https://muebly.app/blog", lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: "https://muebly.app/faq", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "https://muebly.app/real-estate", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://muebly.app/ecommerce", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    ...blogUrls,
  ];
}
