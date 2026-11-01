import Link from "next/link";
import { cadooConnection as connection } from "../lib/mind-body";

export function CadooConnection() {
  return <section className="cadoo-connection" id="cadoo">
    <p className="kicker">The play-to-earn connection</p>
    <h2>Complete it in Cadoo.<br/>Earn in Optimism.</h2>
    <p>Learning and physical action belong in the same game. The planned connection carries a completed Cadoo challenge into the Optimism reward system.</p>
    <span className="status-tag">{connection.status}</span>
    <ol className="cadoo-steps">{connection.steps.map((step,index)=><li key={step.title}><span>0{index+1}</span><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol>
    <p className="note">{connection.deferred}</p>
    <div className="article-source-links"><a href="https://www.cadoo.io/" target="_blank" rel="noopener noreferrer">Explore Cadoo ↗</a><Link href="/mind-memome">Explore the learning curriculum →</Link></div>
  </section>;
}
