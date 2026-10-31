import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-chrome";
import { blogPosts } from "../../lib/blog";

export const metadata: Metadata = { title: "Dispatches", description: "Essays, research notes, and field reports from The Optimism Project." };

export default function BlogIndex() { return <><Header/><main className="blog-page">
  <section className="blog-hero"><div className="wrap"><p className="eyebrow">The Optimism Dispatch</p><h1>Ideas for a future worth entering.</h1><p>Original essays, research notes, interviews, and field reports. Clear about evidence. Open about uncertainty. Allergic to empty positivity.</p></div></section>
  <section className="wrap blog-index">
    <div className="blog-index-head"><div><p className="kicker">Latest writing</p><h2>From the project</h2></div><div className="blog-filters"><span className="active">All</span><span>Research</span><span>Practice</span><span>Field notes</span></div></div>
    {blogPosts.length ? <div className="post-grid">{blogPosts.map((post,i)=><Link href={`/blog/${post.slug}`} className={`post-card ${i===0?"featured":""}`} key={post.slug}><div className="post-art"><span>{String(i+1).padStart(2,"0")}</span></div><div><p className="post-meta">{post.category} · {post.readMinutes} min</p><h3>{post.title}</h3><p>{post.dek}</p><small>{post.author} · {post.published}</small></div></Link>)}</div> : <div className="empty-editorial"><div aria-hidden="true">✎</div><p className="kicker">The first dispatch</p><h2>Your opening essay belongs here.</h2><p>The publication system is ready. We have intentionally not generated a placeholder article in your voice. Send the title, byline, summary, and essay text and it can be published as the first signed piece.</p></div>}
  </section>
  <section className="blog-standard"><div className="wrap"><p className="kicker">Editorial standard</p><div><h2>Argument is welcome. Ambiguity is labeled.</h2><p>Essays may advance a thesis. Research notes must link sources and distinguish observed results, interpretation, hypothesis, and opinion. Material corrections remain attached to the piece.</p></div></div></section>
  </main><Footer/></> }
