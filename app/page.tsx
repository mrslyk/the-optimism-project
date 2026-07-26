import Link from "next/link";
import { Footer, Header } from "./site-chrome";

const pillars = [
  ["01", "Understand it", "A plain-language guide to optimism: what it is, what it isn’t, and how it differs from denial.", "/what-optimism-is"],
  ["02", "Examine the evidence", "Research organized by question and clearly labeled by strength, limitations, and open debates.", "/science-evidence"],
  ["03", "Put it to work", "Small, repeatable practices for attention, interpretation, goals, and collective agency.", "/practices-tools"],
];

const pathways = [
  ["⌁", "Expert directory", "A responsible framework for discovering researchers, educators, and practitioners.", "/experts"],
  ["↗", "News & research", "A curated briefing model that separates new findings from interpretation and hype.", "/news-research"],
  ["◎", "Community", "Prompts, local circles, stories, and ways to learn in public without forced positivity.", "/community"],
  ["◇", "Projects & funding", "A future home for aligned initiatives, grants, membership, and transparent support.", "/projects-funding"],
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy wrap">
            <p className="eyebrow">A public project for realistic hope</p>
            <h1>A clearer way to face <em>what’s next.</em></h1>
            <p className="hero-dek">Pessimism gets a head start. The Optimism Project gathers the science, practices, people, and projects that help us see more possibilities—and act on the ones that are real.</p>
            <div className="hero-actions">
              <Link className="button button-light" href="/what-optimism-is">Start with the idea <span>→</span></Link>
              <Link className="text-link light" href="/science-evidence">Explore the evidence <span>↗</span></Link>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="sun" />
            <p>NOT BLIND<br/>POSITIVITY.<br/><strong>BETTER<br/>POSSIBILITY.</strong></p>
          </div>
          <div className="hero-ticker"><span>SCIENCE</span><i>•</i><span>PRACTICE</span><i>•</i><span>COMMUNITY</span><i>•</i><span>ACTION</span><i>•</i><span>SCIENCE</span></div>
        </section>

        <section className="definition wrap section">
          <div>
            <p className="kicker">The thesis</p>
            <h2>Optimism is not a forecast.<br/>It’s a way of engaging.</h2>
          </div>
          <div className="definition-copy">
            <p>We use <strong>optimism</strong> to mean a reasoned orientation toward possibility: noticing what could improve, identifying what can be influenced, and choosing useful action without ignoring risk or pain.</p>
            <p className="note">Our “counterweight to pessimism” language is a creative metaphor, not a medical claim. This project is for education and general wellbeing—not diagnosis, treatment, or a substitute for professional care.</p>
          </div>
        </section>

        <section className="signal-band">
          <div className="wrap signal-grid">
            <div>
              <p className="kicker coral">Our evidence promise</p>
              <h2>Confidence should be visible.</h2>
              <p>Every future research summary will show what kind of evidence it reflects, what it can’t establish, and where interpretation begins.</p>
              <Link className="text-link" href="/science-evidence">Read the evidence standard <span>→</span></Link>
            </div>
            <div className="signal-card">
              <p className="mini">THE SIGNAL KEY</p>
              <div><b className="dot strong" /> <span><strong>Supported</strong> Converging, higher-quality evidence</span></div>
              <div><b className="dot developing" /> <span><strong>Developing</strong> Promising, mixed, or early evidence</span></div>
              <div><b className="dot open" /> <span><strong>Open question</strong> Hypothesis or active debate</span></div>
              <div><b className="dot perspective" /> <span><strong>Perspective</strong> Expert interpretation or opinion</span></div>
            </div>
          </div>
        </section>

        <section className="wrap section">
          <div className="section-heading">
            <p className="kicker">Three ways in</p>
            <h2>From idea to evidence to action.</h2>
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
              <p className="kicker">Try one now · 4 minutes</p>
              <h2>The possibility scan</h2>
              <p>Choose one situation that feels stuck. Write three plausible ways it could improve—then name one small action that makes any of them more likely.</p>
              <Link className="button button-dark" href="/practices-tools">Open the practice <span>→</span></Link>
              <p className="fineprint">A reflective exercise, not a clinical intervention. Stop if it feels unhelpful.</p>
            </div>
          </div>
        </section>

        <section className="wrap section">
          <div className="section-heading split">
            <div><p className="kicker">The wider project</p><h2>Learn, connect, and build.</h2></div>
            <p>An evolving public commons for people who want rigor and hope in the same room.</p>
          </div>
          <div className="path-grid">
            {pathways.map(([icon, title, body, href]) => (
              <Link href={href} className="path-card" key={title}><span className="path-icon">{icon}</span><h3>{title}</h3><p>{body}</p><span className="text-link">Explore <b>→</b></span></Link>
            ))}
          </div>
        </section>

        <section className="newsletter">
          <div className="wrap newsletter-inner">
            <div><p className="kicker coral">The Bright Side, without the spin</p><h2>A future briefing for rigorous hope.</h2><p>Research notes, useful practices, and projects worth watching. Sign-up will open when our mailing system is configured.</p></div>
            <form className="signup" aria-label="Newsletter interest form"><label htmlFor="email">EMAIL ADDRESS</label><div><input id="email" type="email" placeholder="you@example.com" disabled/><button disabled>Coming soon</button></div><small>No list is active yet. We won’t collect your address until the system is ready.</small></form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
