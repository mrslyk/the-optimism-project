import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../site-chrome";

import { pages } from "../../lib/topics";
import { ReadingTools } from "../../components/ReadingTools";


export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = pages[slug]; return page ? { title: page.title, description: page.dek, alternates: { canonical: `/${slug}` } } : {};
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pages[slug]; if (!page) notFound();
  return <><Header/><main id="main-content" className={`inner-page ${page.tone}`}>
    <section className="page-hero"><div className="wrap"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>{page.eyebrow}</span></div><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.dek}</p><ReadingTools /></div></section>
    <section className="wrap content-layout">
      <aside><span>ON THIS PAGE</span>{page.sections.map((s,i)=><a href={`#section-${i+1}`} key={s.title}>{String(i+1).padStart(2,"0")} {s.title}</a>)}</aside>
      <div className="article-sections">{page.sections.map((s,i)=><article id={`section-${i+1}`} key={s.title}><span className="section-number">{String(i+1).padStart(2,"0")}</span><h2>{s.title}</h2><p>{s.body}</p>{s.items && <ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul>}{s.links && <div className="article-source-links">{s.links.map(link=><a href={link.href} key={link.href}>{link.label} <span aria-hidden="true">↗</span></a>)}</div>}</article>)}
        <div className="next-card"><p>KEEP EXPLORING</p><h3>{page.next.label}</h3><Link href={page.next.href}>Explore <span>→</span></Link></div>
      </div>
    </section>
  </main><Footer/></>;
}
