import type { MetadataRoute } from "next";
import { blogPosts } from "../lib/blog";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://the-optimism-project.parsaverse.chatgpt.site";
const paths = ["", "/what-optimism-is", "/causes-of-optimism", "/benefits", "/science-evidence", "/research-program", "/practices-tools", "/experts", "/news-research", "/community", "/projects-funding", "/blog", "/donate", "/about"];

export default function sitemap():MetadataRoute.Sitemap { const now=new Date(); return [...paths.map((path,i)=>({url:`${base}${path}`,lastModified:now,changeFrequency:(path==="/blog"?"weekly":"monthly") as "weekly"|"monthly",priority:i===0?1:path==="/science-evidence"||path==="/what-optimism-is"?0.9:0.7})),...blogPosts.map(post=>({url:`${base}/blog/${post.slug}`,lastModified:new Date(post.published),changeFrequency:"yearly" as const,priority:0.8}))]; }
