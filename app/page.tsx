import Link from "next/link";
import { Footer, Header } from "./site-chrome";

const pillars = [
  ["01", "Understand it", "Why pursue an intervention for pessimism, and what would success look like?", "/what-optimism-is"],
  ["02", "Examine the evidence", "Read the studies on expectations, learning, stress, and reward that inform the project.", "/science-evidence"],
  ["03", "Try a practice", "Explore simple exercises for examining expectations and deciding what to do next.", "/practices-tools"],
];

const pathways = [
  ["⌁", "Expert directory", "Start with the researchers whose published work informs the project.", "/experts"],
  ["↗", "News & research", "Follow research on outlook, motivation, and the biology of change.", "/news-research"],
  ["◎", "Community", "Help shape the questions this project should be asking.", "/community"],
  ["◇", "Projects & funding", "See the research and public resources we want to develop.", "/projects-funding"],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy wrap">
            <p className="eyebrow">The search for</p>
            <h1>An Ozempic<br/>for <em>pessimism.</em></h1>
            <p className="hero-dek">What if expecting the worst didn’t have to be someone’s default? Our ambition is to understand persistent pessimism well enough to develop better ways to change it.</p>
            <div className="hero-actions">
              <Link className="button button-light" href="/what-optimism-is">Explore the mission <span>→</span></Link>
              <Link className="text-link light" href="/science-evidence">Explore the evidence <span>↗</span></Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="sun" />
            <p>UNDERSTAND<br/>THE MIND.<br/><strong>CHANGE<br/>THE OUTLOOK.</strong></p>
          </div>
          <div className="hero-ticker"><span>SCIENCE</span><i>•</i><span>PRACTICE</span><i>•</i><span>COMMUNITY</span><i>•</i><span>ACTION</span><i>•</i><span>SCIENCE</span></div>
        </section>

        <section className="definition wrap section">
          <div>
            <p className="kicker">The thesis</p>
            <h2>Can we change the mechanisms<br/>behind pessimism?</h2>
          </div>
          <div className="definition-copy">
            <p>GLP-1 medicines showed what becomes possible when we understand and act on the biology of appetite. We want to bring that ambition to pessimism: investigate the mechanisms behind a persistently negative outlook, and find out which of them can be changed.</p>
            <p className="note">“Ozempic for pessimism” describes the goal. The project is at the research-agenda stage; it has no treatment available and does not recommend Ozempic for pessimism.</p>
          </div>
        </section>

        <section className="signal-band">
          <div className="wrap signal-grid">
            <div>
              <p className="kicker coral">Why this is worth studying</p>
              <h2>How do expectations change?</h2>
              <p>Researchers have studied how we imagine the future, respond to good and bad news, and revise our expectations. Those findings give us questions to test: what makes pessimism persist, and what could help it shift?</p>
              <Link className="text-link" href="/science-evidence">Explore the science <span>→</span></Link>
            </div>
            <div className="signal-card">
              <p className="mini">THREE QUESTIONS TO PURSUE</p>
              <div><b className="dot strong" /> <span><strong>What drives it?</strong> The biology, experience, and circumstances behind a negative outlook.</span></div>
              <div><b className="dot developing" /> <span><strong>What changes it?</strong> The effects of learning, practice, environment, and biological interventions.</span></div>
              <div><b className="dot open" /> <span><strong>Does it last?</strong> Whether a change in outlook improves everyday life over time.</span></div>
            </div>
          </div>
        </section>

        <section className="research-feature"><div className="wrap research-feature-inner"><div><p className="kicker coral">Our research ambition</p><h2>What would an intervention for pessimism actually do?</h2><p>It would help someone form a more flexible view of their future while keeping their judgment intact. Getting there means understanding the mechanisms, finding a useful target, and testing whether a change is safe, meaningful, and lasting.</p><div><Link className="button button-light" href="/research-program">Read the research agenda <span>→</span></Link><Link className="text-link light" href="/science-evidence">Read the papers <span>↗</span></Link></div></div><div className="research-mark" aria-hidden="true"><span>What</span><b>if?</b><small>THE RESEARCH<br/>STARTS HERE</small></div></div></section>

        <section className="wrap section">
          <div className="section-heading">
            <p className="kicker">Three ways in</p>
            <h2>Understand the idea. Follow the science.</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map(([n, title, body, href]) => (
              <Link href={href} className="pillar" key={title}>
                <span className="pillar-no">{n}</span><h3>{title}</h3><p>{body}</p><span className="circle-arrow">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="practice-feature">
          <div className="wrap practice-grid">
            <div className="practice-art" aria-hidden="true"><span>3</span><p>GOOD<br/>POSSIBILITIES</p></div>
            <div>
              <p className="kicker">Something to try today</p>
              <h2>The possibility scan</h2>
              <p>Choose one situation that feels stuck. Write three plausible ways it could improve—then name one small action that makes any of them more likely.</p>
              <Link className="button button-dark" href="/practices-tools">Open the practice <span>→</span></Link>
              <p className="fineprint">A short reflection exercise. Find the research on related practices in our science library.</p>
            </div>
          </div>
        </section>

        <section className="wrap section">
          <div className="section-heading split">
            <div><p className="kicker">The wider project</p><h2>A home for the whole subject.</h2></div>
            <p>The ambition goes beyond a single intervention: make the science of optimism easier to find, understand, and build on.</p>
          </div>
          <div className="path-grid">
            {pathways.map(([icon, title, body, href]) => (
              <Link href={href} className="path-card" key={title}><span className="path-icon">{icon}</span><h3>{title}</h3><p>{body}</p><span className="text-link">Explore <b>→</b></span></Link>
            ))}
          </div>
        </section>

        <section className="newsletter">
          <div className="wrap newsletter-inner">
            <div><p className="kicker coral">The founding idea</p><h2>Why we’re asking the question.</h2><p>Read the project’s starting argument, explore the evidence behind it, and see which questions remain open.</p><p><Link className="text-link light" href="/what-optimism-is">Read the mission <span>→</span></Link></p></div>
            <div className="dispatch-links"><p className="kicker">Keep exploring</p><Link className="text-link light" href="/research-program">The research agenda <span>→</span></Link><Link className="text-link light" href="/science-evidence">The source library <span>→</span></Link><Link className="text-link light" href="/about">About the project <span>→</span></Link></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
