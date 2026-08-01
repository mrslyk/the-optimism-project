import type { MetadataRoute } from "next";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://the-optimism-project.parsaverse.chatgpt.site";
export default function robots():MetadataRoute.Robots { return {rules:{userAgent:"*",allow:"/",disallow:["/api/"]},sitemap:`${base}/sitemap.xml`,host:base}; }
