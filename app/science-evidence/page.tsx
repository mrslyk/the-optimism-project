import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-chrome";
import { ResearchLibrary } from "../../components/ResearchLibrary";
import { pathwaySummary, optimismSources } from "../../lib/research";

export const metadata: Metadata = {
  title: "Science & Evidence",
  description: "A guide to optimism research: definitions, origins, benefits, neuroscience, health, and practices, with summaries and original sources.",
};

export default function SciencePage() {
  return <><Header/><main id="main-content" className="science-page">
    <section className="page-hero science-hero"><div className="wrap">
      <p className="eyebrow">Science & evidence</p>
      <h1>The science of optimism.</h1>
      <p>How is optimism measured? Where does it come from? What does it change in our lives? Explore the studies behind the subject, from foundational psychology to recent findings.</p>
    </div></section>

    <section className="wrap science-intro">
      <div><p className="kicker">A guide to the field</p><h2>Understand the finding. Follow the source.</h2></div>
      <div><p>The library covers optimism as a personality trait, a way of forming beliefs, and a subject of health and intervention research. Different studies answer different questions. Start with the overview, then follow the areas that interest you.</p><p className="research-note">Each entry identifies the study design, specific finding, and limits. Search by topic or author, filter the evidence, and save a personal reading list.</p></div>
    </section>

    <section className="pathway-section"><div className="wrap">
      <div className="section-heading"><p className="kicker">Areas of investigation</p><h2>Six ways into the question.</h2></div>
      <div className="mechanism-grid">{pathwaySummary.map(([n,title,body,systems])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p><small>{systems}</small></article>)}</div>
    </div></section>

    <section className="wrap source-section" id="library">
      <div className="section-heading split"><div><p className="kicker">The source library</p><h2>Explore the source library.</h2></div><p>Study summaries, publication details, and direct links to the research.</p></div>
      <ResearchLibrary sources={optimismSources}/>
    </section>

    <section className="glp-callout"><div className="wrap glp-callout-inner"><div><p className="kicker">Keep exploring</p><h2>From the evidence to everyday life.</h2></div><div><p>Explore what research says about the benefits of optimism, or try a reflection from the practice guide. The research frontiers page looks at questions still being investigated.</p><div className="article-source-links"><Link href="/benefits">Benefits of optimism ↗</Link><Link href="/practices-tools">Practices & tools ↗</Link><Link href="/research-program">Research frontiers ↗</Link></div></div></div></section>
  </main><Footer/></>;
}
