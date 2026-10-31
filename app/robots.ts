import type { MetadataRoute } from "next";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://optimism-project.netlify.app";
export default function robots():MetadataRoute.Robots { return {rules:{userAgent:"*",allow:"/",disallow:["/api/"]},sitemap:`${base}/sitemap.xml`,host:base}; }
