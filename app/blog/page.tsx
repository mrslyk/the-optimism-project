import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-chrome";
import { blogPosts } from "../../lib/blog";

export const metadata: Metadata = { title: "Dispatches", description: "Essays, research notes, and field reports from The Optimism Project." };

export default function BlogIndex() { return <><Header/><main className="blog-page">
  <section className="blog-hero"><div className="wrap"><p className="eyebrow">The Optimism Dispatch</p><h1>The questions behind the project.</h1><p>Essays and research notes on why outlook matters, how it changes, and what it would take to develop an intervention for persistent pessimism.</p></div></section>
  <section className="wrap blog-index">
    <div className="blog-index-head"><div><p className="kicker">Latest writing</p><h2>From the project</h2></div></div>
    {blogPosts.length ? <div className="post-grid">{blogPosts.map((post,i)=><Link href={`/blog/${post.slug}`} className={`post-card ${i===0?"featured":""}`} key={post.slug}><div className="post-art"><span>{String(i+1).padStart(2,"0")}</span></div><div><p className="post-meta">{post.category} · {post.readMinutes} min</p><h3>{post.title}</h3><p>{post.dek}</p><small>{post.author} · {post.published}</small></div></Link>)}</div> : <div className="empty-editorial"><div aria-hidden="true">✎</div><p className="kicker">The first dispatch</p><h2>The first dispatch is still to come.</h2><p>Start with the mission and the research agenda: why we are pursuing an “Ozempic for pessimism,” what informs the idea, and which questions we need to answer.</p><div className="article-source-links"><Link href="/what-optimism-is">Read the mission ↗</Link><Link href="/research-program">Explore the research agenda ↗</Link></div></div>}
  </section>
  <section className="blog-standard"><div className="wrap"><p className="kicker">How we will write</p><div><h2>Show the reasoning. Link the evidence.</h2><p>The writing will explain why a finding matters, where the argument comes from, and what would change it. Research notes will link to original papers. Essays will identify their authors and make the case in their own words.</p></div></div></section>
  </main><Footer/></> }
