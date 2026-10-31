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
      <p className="eyebrow">The science of outlook</p>
      <h1>Why do we expect things to turn out the way we do?</h1>
      <p>Research approaches that question through memory, learning, stress, reward, and experience. This library brings those findings together and asks what they could mean for changing outlook.</p>
    </div></section>

    <section className="wrap science-intro">
      <div><p className="kicker">The question behind the project</p><h2>Which parts of an outlook can change?</h2></div>
      <div><p>The studies below examine different parts of the problem: how we imagine future events, how new information changes our beliefs, and how experience and bodily state relate to expectations. The project’s next question is whether any of these findings can lead to a useful, lasting intervention.</p><p className="research-note">The library includes laboratory studies, observational research, and reviews. Each entry explains the finding and its limits. A result about one task or population may not generalize to everyday life.</p></div>
    </section>

    <section className="pathway-section"><div className="wrap">
      <div className="section-heading"><p className="kicker">Areas of investigation</p><h2>Six ways into the question.</h2></div>
      <div className="mechanism-grid">{pathwaySummary.map(([n,title,body,systems])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p><small>{systems}</small></article>)}</div>
    </div></section>

    <section className="wrap source-section" id="library">
      <div className="section-heading split"><div><p className="kicker">The source library</p><h2>Read the research behind the idea.</h2></div><p>Study summaries, publication details, and direct links to the research.</p></div>
      <div className="source-list">{researchSources.map(source=><article className="source-card" key={source.id}>
        <div className="source-meta"><span className={`signal-pill ${source.signal.toLowerCase().replace(" ","-")}`}>{source.signal}</span><span>{source.year}</span><span>{source.kind}</span></div>
        <div className="source-content"><div><p className="pathway-label">{source.pathway}</p><h3>{source.title}</h3><p className="citation">{source.authors} · <em>{source.journal}</em></p></div><div><p><strong>What it found.</strong> {source.finding}</p><p className="caution"><strong>Limitations.</strong> {source.caution}</p><a href={source.href} target="_blank" rel="noopener noreferrer">Open source ↗</a></div></div>
      </article>)}</div>
    </section>

    <section className="glp-callout"><div className="wrap glp-callout-inner"><div><p className="kicker coral">The GLP-1 question</p><h2>Could metabolism offer a useful lead?</h2></div><div><p>The GLP-1 literature is one part of the research agenda. The question is whether findings about appetite and reward can help us identify a mechanism relevant to persistent pessimism.</p><Link className="button button-dark" href="/research-program">Explore the research agenda <span>→</span></Link></div></div></section>
  </main><Footer/></>;
}
