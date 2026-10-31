import Link from "next/link";
import { Footer, Header } from "./site-chrome";

const topics = [
  ["01", "What is optimism?", "The meaning of optimism, the different ways researchers study it, and what it means in everyday life.", "/what-optimism-is"],
  ["02", "Where does it come from?", "What biology, experience, learning, and our surroundings contribute to the way we see the future.", "/causes-of-optimism"],
  ["03", "Why does it matter?", "Explore the evidence on optimism, coping, wellbeing, health, and the choices we make.", "/benefits"],
];
const pathways = [
  ["⌁", "Experts & thinkers", "Meet the researchers behind the ideas and follow their work to its source.", "/experts"],
  ["↗", "News & research", "New studies and useful findings, explained with dates, context, and links.", "/news-research"],
  ["◎", "Community", "Optimism in everyday life: the experiences and questions worth sharing.", "/community"],
  ["◇", "Research frontiers", "What we still want to learn about developing and sustaining optimism.", "/research-program"],
];

export default function Home() {
  return <><Header /><main id="main-content">
    <section className="hero optimism-hero">
      <div className="hero-copy wrap">
        <p className="eyebrow">The Optimism Project</p>
        <h1>The science<br/>and practice<br/>of <em>optimism.</em></h1>
        <p className="hero-dek">What optimism is, where it comes from, why it matters, and how to cultivate it. Explore the research, practical tools, and people advancing our understanding—all in one place.</p>
        <div className="hero-actions"><Link className="button button-light" href="/what-optimism-is">Start with optimism <span>→</span></Link><Link className="text-link light" href="/protocol">The new protocol <span>↗</span></Link></div>
      </div>
      <div className="hero-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="sun"/></div>
      <div className="hero-ticker"><span>UNDERSTAND</span><i>•</i><span>EXPLORE</span><i>•</i><span>PRACTICE</span><i>•</i><span>CONNECT</span></div>
    </section>

    <section className="wrap section">
      <div className="section-heading"><p className="kicker">Start here</p><h2>Get to know optimism.</h2><p>A guide to the subject, from the basic concepts to the questions researchers are still working to answer.</p></div>
      <div className="pillar-grid">{topics.map(([n,title,body,href])=><Link href={href} className="pillar" key={href}><span className="pillar-no">{n}</span><h3>{title}</h3><p>{body}</p><span className="circle-arrow">↗</span></Link>)}</div>
    </section>

    <section className="protocol-home"><div className="wrap"><div><div><p className="kicker">A new program of development</p><h2>The Optimism Protocol.</h2></div><div><p>Bring the science into a defined, testable approach to cultivating optimism. Explore the candidate practices, the research behind them, and the steps toward evaluation.</p><Link className="button button-dark" href="/protocol">Explore development draft 0.1 <span>→</span></Link></div></div><ol className="journey-map"><li><Link href="/what-optimism-is">01 / Understand optimism</Link></li><li><Link href="/science-evidence">02 / Examine the evidence</Link></li><li><Link href="/practice-workbook">03 / Try a reflection</Link></li><li><Link href="/protocol#roadmap">04 / Develop and evaluate</Link></li><li><Link href="/contact">05 / Contribute to the work</Link></li></ol></div></section>
    <section className="signal-band"><div className="wrap signal-grid">
      <div><p className="kicker">The science</p><h2>How do we come to expect good things?</h2><p>Psychology, neuroscience, and health research each offer part of the picture. Start with how optimism is defined and measured, then explore the studies on its origins, effects, and capacity to change.</p><Link className="text-link" href="/science-evidence">Open the research library <span>→</span></Link></div>
      <div className="signal-card"><p className="mini">THREE WAYS TO STUDY OPTIMISM</p><div><b className="dot strong"/><span><strong>Expectations.</strong> What do people think will happen in their future?</span></div><div><b className="dot developing"/><span><strong>Explanations.</strong> How do people make sense of successes and setbacks?</span></div><div><b className="dot open"/><span><strong>Beliefs and decisions.</strong> How do expectations respond to new information?</span></div><p className="source-inline"><Link href="/science-evidence#library">Read the sources ↗</Link></p></div>
    </div></section>

    <section className="wrap section benefits-feature"><div className="section-heading"><p className="kicker">Why it matters</p><h2>What can optimism bring to our lives?</h2><p>Research connects optimism with the way people cope, pursue goals, and experience wellbeing. Health studies add another important set of questions.</p></div><div className="benefit-grid">
      <article><span>01 / COPING</span><h3>Responding to difficulty</h3><p>How expectations relate to facing problems, seeking support, and adapting when circumstances change.</p></article>
      <article><span>02 / MOTIVATION</span><h3>Working toward a future</h3><p>Why believing a worthwhile outcome is possible can matter for effort and persistence.</p></article>
      <article><span>03 / HEALTH</span><h3>Understanding the connection</h3><p>What studies of optimism, cardiovascular health, and longevity show—and which questions they leave open.</p></article>
    </div><Link className="text-link" href="/benefits">Explore the benefits and evidence <span>→</span></Link></section>

    <section className="practice-feature"><div className="wrap practice-grid"><div className="practice-art" aria-hidden="true"><span>3</span><p>POSSIBILITIES<br/>TO CONSIDER</p></div><div><p className="kicker">Put it into practice</p><h2>Make room for a better outcome.</h2><p>Choose one situation that feels stuck. Write three plausible ways it could improve. Then choose one small action that could help bring a possibility closer.</p><Link className="button button-dark" href="/practice-workbook">Open the practice workbook <span>→</span></Link><p className="fineprint">A reflection to try today. The practice guide also introduces Best Possible Self and links to the research behind it.</p></div></div></section>

    <section className="wrap section"><div className="section-heading split"><div><p className="kicker">Explore the subject</p><h2>The people, ideas,<br/>and work behind optimism.</h2></div><p>Find a researcher, catch up on a study, or explore a question you want to understand better.</p></div><div className="path-grid">{pathways.map(([icon,title,body,href])=><Link href={href} className="path-card" key={href}><span className="path-icon">{icon}</span><h3>{title}</h3><p>{body}</p><span className="text-link">Explore <b>→</b></span></Link>)}</div></section>

    <section className="newsletter"><div className="wrap newsletter-inner"><div><p className="kicker">In the research</p><h2>Can optimism change over time?</h2><p>A 2025 study followed changes in optimism among nearly 13,000 older adults and examined later health and wellbeing. It adds to the evidence on how outlook develops across a lifetime.</p><Link className="text-link light" href="/news-research">Read the research notes <span>→</span></Link></div><div className="dispatch-links"><p className="kicker">Keep exploring</p><Link className="text-link light" href="/practices-tools">Practices & tools <span>→</span></Link><Link className="text-link light" href="/blog">The Optimism Dispatch <span>→</span></Link><Link className="text-link light" href="/contact">Contribute or get updates <span>→</span></Link><Link className="text-link light" href="/about">About the project <span>→</span></Link></div></div></section>
  </main><Footer/></>;
}
