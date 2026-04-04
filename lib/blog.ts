import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export type Language = "en" | "es";

const enDir = path.join(process.cwd(), "content/blog");
const esDir = path.join(process.cwd(), "content/blog/es");

function postsDir(lang: Language) {
  return lang === "es" ? esDir : enDir;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  coverImage: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

function readMeta(slug: string, lang: Language): PostMeta | null {
  const dir = postsDir(lang);
  const fullPath = path.join(dir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const { data } = matter(fs.readFileSync(fullPath, "utf8"));
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    readingTime: data.readingTime,
    category: data.category,
    coverImage: data.coverImage,
  };
}

export function getAllPosts(lang: Language = "en"): PostMeta[] {
  // Always use EN slugs as the canonical slug list
  const fileNames = fs.readdirSync(enDir).filter((f) => f.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    // Try requested language first, fall back to EN
    return readMeta(slug, lang) ?? readMeta(slug, "en")!;
  });

  return posts
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(
  slug: string,
  lang: Language = "en"
): Promise<Post | null> {
  // Try requested language first, fall back to EN
  let fullPath = path.join(postsDir(lang), `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(enDir, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    readingTime: data.readingTime,
    category: data.category,
    coverImage: data.coverImage,
    contentHtml: processedContent.toString(),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(enDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
