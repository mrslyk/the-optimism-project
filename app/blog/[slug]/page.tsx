import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../site-chrome";
import { blogPosts, getBlogPost } from "../../../lib/blog";

export function generateStaticParams() { return blogPosts.map(post => ({ slug: post.slug })); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{ const {slug}=await params; const post=getBlogPost(slug); return post?{title:post.title,description:post.dek}:{}; }

export default async function BlogPostPage({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const post=getBlogPost(slug); if(!post) notFound(); return <><Header/><main className="article-page">
  <header><div className="article-wrap"><p className="eyebrow">{post.category}</p><h1>{post.title}</h1><p className="article-dek">{post.dek}</p><div className="byline"><span>{post.author}</span><span>{post.published}</span><span>{post.readMinutes} minute read</span></div></div></header>
  <article className="article-wrap">{post.body.map((section,i)=><section key={i}>{section.heading&&<h2>{section.heading}</h2>}{section.paragraphs.map((p,j)=><p key={j}>{p}</p>)}</section>)}<div className="article-disclosure">Essays represent the author’s analysis. Scientific statements should link to primary sources; opinion is not presented as clinical guidance.</div></article>
  </main><Footer/></> }
