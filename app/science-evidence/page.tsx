import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-chrome";
import { pathwaySummary, researchSources } from "../../lib/research";

export const metadata: Metadata = {
  title: "Science & Evidence",
  description: "Published research on the brain, body, development, and learning pathways associated with optimism and pessimism.",
};

export default function SciencePage() {
  return <><Header/><main className="science-page">
    <section className="page-hero science-hero"><div className="wrap">
      <p className="eyebrow">Science & evidence · source library</p>
      <h1>What creates optimism—or pessimism?</h1>
      <p>There is no single switch. The evidence points to a dynamic system of future simulation, belief updating, reward learning, stress biology, development, environment, and action.</p>
    </div></section>

    <section className="wrap science-intro">
      <div><p className="kicker">The short answer</p><h2>Outlook emerges from a loop between brain, body, and world.</h2></div>
      <div><p>Temperament and biology matter, but they do not act alone. Brains learn statistical regularities from experience. Bodies signal safety, energy, and stress. Social and material conditions determine which possibilities are actually available. Behavior then generates new evidence—sometimes reinforcing agency, sometimes reinforcing helplessness.</p><p className="research-note"><strong>Important:</strong> most human evidence is correlational, task-specific, or based on small neuroimaging samples. A pathway associated with optimism is not necessarily its cause, and a biomarker is not a diagnosis.</p></div>
    </section>

    <section className="pathway-section"><div className="wrap">
      <div className="section-heading"><p className="kicker">The working model</p><h2>Six interacting pathways.</h2></div>
      <div className="mechanism-grid">{pathwaySummary.map(([n,title,body,systems])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p><small>{systems}</small></article>)}</div>
    </div></section>

    <section className="wrap source-section" id="library">
      <div className="section-heading split"><div><p className="kicker">Curated source library</p><h2>Claims linked to papers.</h2></div><p>Every card states what the paper can support—and what it cannot. Links lead to the journal, PubMed, or free full text.</p></div>
      <div className="source-list">{researchSources.map(source=><article className="source-card" key={source.id}>
        <div className="source-meta"><span className={`signal-pill ${source.signal.toLowerCase().replace(" ","-")}`}>{source.signal}</span><span>{source.year}</span><span>{source.kind}</span></div>
        <div className="source-content"><div><p className="pathway-label">{source.pathway}</p><h3>{source.title}</h3><p className="citation">{source.authors} · <em>{source.journal}</em></p></div><div><p><strong>What it found.</strong> {source.finding}</p><p className="caution"><strong>What it does not prove.</strong> {source.caution}</p><a href={source.href} target="_blank" rel="noopener noreferrer">Open source ↗</a></div></div>
      </article>)}</div>
    </section>

    <section className="glp-callout"><div className="wrap glp-callout-inner"><div><p className="kicker coral">The GLP-1 question</p><h2>Compelling research direction. Unproven pessimism treatment.</h2></div><div><p>GLP-1 signaling connects metabolism, satiety, appetite, and parts of reward processing. Human evidence does not currently show that a GLP-1 drug treats pessimism or reliably changes future-oriented belief updating.</p><Link className="button button-dark" href="/research-program">See the research program <span>→</span></Link></div></div></section>
  </main><Footer/></>;
}
