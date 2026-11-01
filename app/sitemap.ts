import type { MetadataRoute } from "next";
import { blogPosts } from "../lib/blog";
import { pages } from "../lib/topics";
const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://optimism-project.netlify.app").replace(/\/$/, "");
const paths = [...new Set(["", ...Object.keys(pages).map(slug => `/${slug}`), "/reading-room", "/rational-optimist", "/mind-memome", "/mind-and-body", "/science-evidence", "/research-program", "/protocol", "/practice-workbook", "/explore", "/experts", "/contact", "/faq", "/blog", "/donate"])];
export default function sitemap(): MetadataRoute.Sitemap {
  return [...paths.map(path => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : path === "/protocol" || path === "/science-evidence" ? 0.9 : 0.7 })), ...blogPosts.map(post => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.published), changeFrequency: "yearly" as const, priority: 0.8 }))];
}
