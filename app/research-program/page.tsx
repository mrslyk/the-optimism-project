import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-chrome";
import { frontierSources } from "../../lib/research";

export const metadata: Metadata = { title: "Research Frontiers", description: "Open questions about optimism: how it develops, what it changes, how to cultivate it, and what new approaches might offer." };
const questions = [
  ["01", "How does optimism develop?", "What do temperament, learning, relationships, culture, and life circumstances contribute? How do those influences interact across a lifetime?"],
  ["02", "When does optimism help?", "Which benefits reflect optimism itself, and which reflect the resources or experiences that accompany it? When can confidence lead someone to underestimate a risk?"],
  ["03", "Can we strengthen it?", "Which practices or interventions lead to meaningful changes? Who benefits, how long do changes last, and do they carry over into everyday choices?"],
  ["04", "How should we measure progress?", "Can a questionnaire, a belief-updating task, and a person’s lived experience tell us different things? Which measures best answer the question a study is asking?"],
];

export default function ResearchProgram() { return <><Header/><main className="research-program">
  <section className="program-hero"><div className="wrap"><p className="eyebrow">Research frontiers</p><h1>What can we learn about optimism next?</h1><p>From everyday practices to the biology of expectation, there is more to understand about how optimism develops and how people might cultivate it.</p></div></section>
  <section className="wrap program-thesis"><div><p className="kicker">The wider agenda</p><h2>Many questions.<br/>Many ways to investigate.</h2></div><div><p>Optimism brings together work in psychology, neuroscience, health, and social science. An exercise study, a long-term population study, and a laboratory experiment each contribute a different kind of evidence.</p><p>The questions below are directions for future work. They sit alongside the existing research in the library and the practical guides available today.</p><Link className="text-link" href="/science-evidence">Explore the current evidence <span>→</span></Link></div></section>
  <section className="program-stages"><div className="wrap"><p className="kicker">Open questions</p><h2>Where the research can go next.</h2><div className="stage-list">{questions.map(([n,t,b])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>)}</div></div></section>
  <section className="wrap program-thesis" id="biological-interventions"><div><p className="kicker">One research ambition</p><h2>An “Ozempic for pessimism”?</h2></div><div><p>Could a better understanding of biology eventually offer new ways to influence outlook? The comparison with appetite medicines expresses the scale of that possibility. It is one idea within the broader study of optimism.</p><p>Work on reward, belief updating, and metabolism gives researchers mechanisms to investigate. It does not establish a medicine for optimism or pessimism. The project has no treatment in development or clinical trial underway.</p><div className="article-source-links"><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3424419/">Dopamine and belief updating ↗</a>{frontierSources.map(source=><a href={source.href} key={source.id}>{source.title} ↗</a>)}</div><p className="note">These are research questions, not recommendations to use GLP-1 medicines or other drugs to change outlook.</p></div></section>
  <section className="program-close"><div className="wrap"><h2>Follow a question further.</h2><p>Read a study, explore a practical approach, or learn about the people working on optimism.</p><div><Link className="button button-light" href="/news-research">Read the research notes <span>→</span></Link><Link className="text-link light" href="/experts">Explore the researchers <span>↗</span></Link></div></div></section>
  </main><Footer/></> }
