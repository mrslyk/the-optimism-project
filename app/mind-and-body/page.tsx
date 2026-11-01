import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "../../components/PageFrame";
import { CadooConnection } from "../../components/CadooConnection";

export const metadata:Metadata={title:"Mind, Body & Cadoo",description:"Optimism as a mind-and-body practice: sourced ideas, movement, recovery, and a planned Cadoo-to-Optimism reward connection.",alternates:{canonical:"/mind-and-body"}};

export default function MindAndBody(){return <PageFrame eyebrow="Mind and body" title="One person. Mind and body." description="The Optimism Project brings ideas, physical experience, and action into the same practice." tone="yellow-page">
  <section className="wrap content-layout">
    <aside><span>IN THIS GUIDE</span><a href="#whole-person">The whole person</a><a href="#evidence">What the research shows</a><a href="#cadoo">The Cadoo connection</a><a href="#example">An example mission</a><Link href="/mind-memome">The Mind Memome →</Link></aside>
    <div className="protocol-content">
      <section id="whole-person"><p className="kicker">The design principle</p><h2>Think it. Live it. Learn from it.</h2><p>For this project, mind and body are inseparable parts of the person cultivating optimism. A useful idea needs room to become an experience: making a plan, moving, recovering, acting with others, and discovering what you can influence.</p><p>The Mind Memome collects ideas worth carrying into life. The physical side gives those ideas something to work with. Together they form a learning loop: understand a possibility, take an achievable action, notice what happened, and revise your expectations.</p><p>That also means respecting physical limits and changing circumstances. An accessible challenge, an adapted activity, or recovery can belong in the program. Participation should never depend on pushing through pain or pretending to feel positive.</p></section>
      <section id="evidence"><p className="kicker">Three questions, different evidence</p><h2>Outlook, movement, and recovery.</h2>
        <article className="protocol-component"><h3>Do activity and outlook change together?</h3><p>A 15-year cohort study found associations in both directions between activity and aspects of outlook. It motivates testing a connected program; it does not establish its effects.</p><Link className="text-link" href="/science-evidence#karhu-2025">Read the activity and pessimism study →</Link></article>
        <article className="protocol-component"><h3>Can movement change how we feel?</h3><p>Walking experiments found improvements in immediate positive emotion. A better feeling after movement and a lasting change in expectations are separate outcomes.</p><Link className="text-link" href="/science-evidence#miller-2016">Read the walking experiments →</Link></article>
        <article className="protocol-component"><h3>Where does recovery fit?</h3><p>Sleep research links optimism with reported sleep quality, while objective sleep recordings did not show the same association. Recovery belongs in the design, with its effects on outlook still to be tested.</p><Link className="text-link" href="/science-evidence#hernandez-2020">Read the sleep study →</Link></article>
        <p className="note">Changing an outlook score does not automatically change behavior: two experiments that induced short-term optimism found limited effects on activity and stress responses. We will assess learning, physical participation, mood, and optimism separately. <Link href="/science-evidence#chen-2023">See the experiments ↗</Link></p>
      </section>
      <CadooConnection/>
      <section id="example"><p className="kicker">A proposed mission</p><h2>“Action can come before motivation.”</h2><p>Start with the idea and its source. Choose an achievable Cadoo movement challenge, record what you expect privately, and complete it. In the planned connection, Cadoo's confirmation triggers the Optimism reward.</p><p>Afterward, compare your expectation with your experience. You can earn for completing the agreed challenge even if your mood did not improve. That honest observation is part of learning.</p><p className="note">This is an original mission concept. Challenge availability, accessible alternatives, and the connection between accounts and rewards remain to be designed.</p><Link className="button button-dark" href="/mind-memome#move-before-motivation">Explore this idea and its source →</Link></section>
    </div>
  </section>
</PageFrame>}
