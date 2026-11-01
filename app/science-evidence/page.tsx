import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-chrome";
import { ResearchLibrary } from "../../components/ResearchLibrary";
import { pathwaySummary, optimismSources } from "../../lib/research";

export const metadata: Metadata = {
  title: "Science & Evidence",
  description: "The curated science of optimism and pessimism: annotated papers, measurement, mechanisms, interventions, books, research hubs, and data.",
  alternates: { canonical: "/science-evidence" },
};

export default function SciencePage() {
  return <><Header/><main id="main-content" className="science-page">
    <section className="page-hero science-hero"><div className="wrap">
      <p className="eyebrow">Science & evidence</p>
      <h1>Optimism. Pessimism.<br/>The evidence.</h1>
      <p>The papers, theories, experiments, and data behind our understanding of outlook. Start with a question, inspect the evidence, and follow the original source.</p>
      <div className="article-source-links"><a href="#library">Browse the annotated papers ↓</a><Link href="/reading-room">Books, research sites & data ↗</Link></div>
    </div></section>

    <section className="wrap science-intro">
      <div><p className="kicker">A guide to the field</p><h2>Understand the finding. Follow the source.</h2></div>
      <div><p>The library follows favorable and unfavorable expectations, explanatory style, controllability, preparation, health, and cultivation. Optimism and pessimism are related, but measuring more of one is not always the same as measuring less of the other.</p><p className="research-note">Curated collection · reviewed October 31, 2026. Each entry names its design, finding, limits, and original source. This is a selected research collection, not an exhaustive systematic review. Publication years are shown; source access may range from an abstract to full text.</p></div>
    </section>

    <section className="wrap research-routes" aria-label="Explore the research collection">{[["01","Understand pessimism","Negative expectations, explanatory style, helplessness, and useful preparation.","/pessimism"],["02","Books, sites & data","A reading room connecting the arguments with papers and original datasets.","/reading-room"],["03","The Rational Optimist","Matt Ridley’s central ideas, later work, and how to test claims about progress.","/rational-optimist"],["04","Mind Memome","A sourced curriculum for an optimism game built on the Naval/Decalog model.","/mind-memome"]].map(([n,t,b,h])=><Link href={h} key={h}><span className="kicker">{n}</span><h2>{t}</h2><p>{b}</p><span className="text-link">Explore →</span></Link>)}</section>

    <section className="wrap source-section" id="library">
      <div className="section-heading split"><div><p className="kicker">The source library</p><h2>{optimismSources.length} annotated sources.</h2></div><p>Foundations, mechanisms, measurement, and recent experiments. Search, filter, and build a reading list.</p></div>
      <ResearchLibrary sources={optimismSources}/>
    </section>

    <section className="pathway-section"><div className="wrap">
      <div className="section-heading"><p className="kicker">Areas of investigation</p><h2>Six ways into the question.</h2></div>
      <div className="mechanism-grid">{pathwaySummary.map(([n,title,body,systems])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p><small>{systems}</small></article>)}</div>
    </div></section>

    <section className="glp-callout"><div className="wrap glp-callout-inner"><div><p className="kicker">Keep exploring</p><h2>From the evidence to everyday life.</h2></div><div><p>Explore what research says about the benefits of optimism, or try a reflection from the practice guide. The research frontiers page looks at questions still being investigated.</p><div className="article-source-links"><Link href="/benefits">Benefits of optimism ↗</Link><Link href="/practices-tools">Practices & tools ↗</Link><Link href="/research-program">Research frontiers ↗</Link></div></div></div></section>
  </main><Footer/></>;
}
