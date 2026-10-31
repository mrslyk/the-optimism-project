import type { Metadata } from "next";
import Link from "next/link";
import { ReadingTools } from "../../../components/ReadingTools";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../site-chrome";
import { blogPosts, getBlogPost } from "../../../lib/blog";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://optimism-project.netlify.app").replace(/\/$/, "");

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `${siteUrl}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.dek,
    alternates: { canonical: url },
    openGraph: { type: "article", title: post.title, description: post.dek, url, publishedTime: post.published, authors: [post.author] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const dateLabel = new Date(`${post.published}T12:00:00Z`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.dek,
    datePublished: post.published,
    author: { "@type": "Organization", name: post.author, url: siteUrl },
    publisher: { "@type": "Organization", name: "The Optimism Project", url: siteUrl },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    articleSection: post.category,
    inLanguage: "en",
    citation: post.sources.map(source => source.href),
  };

  return <><Header /><main id="main-content" className="article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
    <header><div className="article-wrap">
      <Link href="/blog" className="text-link">← All writing</Link>
      <p className="eyebrow">{post.category}</p>
      <h1>{post.title}</h1>
      <p className="article-dek">{post.dek}</p><ReadingTools/>
      <div className="byline"><span>{post.author}</span><time dateTime={post.published}>{dateLabel}</time><span>{post.readMinutes} minute read</span></div>
    </div></header>
    <article className="article-wrap">
      {post.body.map((section, i) => <section key={i}>
        {section.heading && <h2 id={`section-${i}`}>{section.heading}</h2>}
        {section.paragraphs.map((paragraph, j) => <p key={j}>{paragraph}</p>)}
        {section.sourceIds?.length ? <div className="article-source-links" aria-label="Sources for this section">
          {section.sourceIds.map(id => {
            const source = post.sources.find(item => item.id === id);
            return source ? <a key={id} href={source.href} target="_blank" rel="noopener noreferrer">{source.label} ↗</a> : null;
          })}
        </div> : null}
      </section>)}
      <section aria-labelledby="article-sources">
        <h2 id="article-sources">Sources &amp; further reading</h2>
        {post.sources.map(source => <div key={source.id} style={{ marginBottom: 24 }}>
          <div className="article-source-links"><a href={source.href} target="_blank" rel="noopener noreferrer">{source.label} ↗</a></div>
          <small>{source.note}</small>
        </div>)}
      </section>
      <aside aria-labelledby="article-related">
        <h2 id="article-related">Keep exploring</h2>
        <div className="article-source-links">{post.related.map(link => <Link href={link.href} key={link.href}>{link.label} →</Link>)}</div>
      </aside>
    </article>
  </main><Footer /></>;
}
