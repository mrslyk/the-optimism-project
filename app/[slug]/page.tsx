import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../site-chrome";

type PageData = { eyebrow: string; title: string; dek: string; tone: string; sections: { title: string; body: string; items?: string[] }[] };

const pages: Record<string, PageData> = {
  "what-optimism-is": {
    eyebrow: "The idea", title: "Optimism, without the rose-colored glasses.", dek: "A practical orientation toward possibility—grounded in reality, compatible with grief and uncertainty, and linked to useful action.", tone: "coral-page",
    sections: [
      { title: "A working definition", body: "Optimism is the tendency or deliberate practice of expecting, noticing, or working toward favorable possibilities. Different traditions measure and define it differently; this project will make those distinctions explicit rather than treating optimism as one universal trait." },
      { title: "What it is not", body: "Realistic optimism does not require certainty, cheerfulness, denial, or blaming people for difficult circumstances.", items: ["Not pretending every outcome will be good", "Not suppressing anger, fear, or grief", "Not ignoring structural barriers or risk", "Not a moral test or personality requirement"] },
      { title: "Our central question", body: "When does an orientation toward possibility help people interpret events, persist toward goals, cooperate, or recover—and when might it mislead? The useful answer depends on context, measurement, and evidence." },
    ],
  },
  "science-evidence": {
    eyebrow: "Science & evidence", title: "Claims should come with signal, not sparkle.", dek: "A future research library designed to show what is known, how it is known, and where uncertainty remains.", tone: "green-page",
    sections: [
      { title: "The evidence standard", body: "Research summaries will identify the study type, population, measures, relevant limitations, and whether findings are correlational, experimental, replicated, or contested. We will link primary sources and corrections when the editorial system is active." },
      { title: "Four visible labels", body: "Labels describe our confidence in a claim, not whether it sounds appealing.", items: ["Supported — converging, higher-quality evidence", "Developing — promising, mixed, or early evidence", "Open question — hypothesis or active debate", "Perspective — expert interpretation or opinion"] },
      { title: "Reference library placeholder", body: "No studies are listed in this prototype because sources have not yet been independently selected and verified. Future entries will include full citations, DOI or stable links, plain-language summaries, conflicts of interest, and review dates." },
    ],
  },
  "practices-tools": {
    eyebrow: "Practices & tools", title: "Make possibility a repeatable practice.", dek: "Short reflection and planning exercises for widening attention and turning plausible hope into action.", tone: "yellow-page",
    sections: [
      { title: "The possibility scan", body: "Name one situation that feels stuck. List three plausible ways it could improve. Circle the one you can influence, then choose an action small enough to begin in ten minutes." },
      { title: "The balanced forecast", body: "Write the outcome you fear, the outcome you hope for, and the outcome you think is most likely. Then list what evidence would change your estimate. The point is flexibility, not forced reassurance." },
      { title: "Use with care", body: "These are educational reflection tools, not validated clinical interventions. Adapt or stop any practice that feels unhelpful. If distress is persistent or intense, consider seeking support from a qualified professional." },
    ],
  },
  experts: {
    eyebrow: "Expert directory", title: "Meet the people studying possibility.", dek: "A transparent directory framework for researchers, educators, writers, and practitioners—coming after identity and credential verification.", tone: "blue-page",
    sections: [
      { title: "No invented experts", body: "The live directory will launch only after profiles, affiliations, relevant work, and consent to list are verified. This prototype intentionally contains no fictional people or implied endorsements." },
      { title: "How profiles will work", body: "Each profile will distinguish academic research, professional practice, lived experience, and commentary.", items: ["Verified name and current affiliation", "Relevant publications or public work", "Area of expertise and declared conflicts", "Links controlled by the person or institution", "Last-reviewed date and correction path"] },
      { title: "Suggest an expert", body: "The nomination form will open with the contact system. Inclusion will not imply endorsement, and paid placement will not be offered." },
    ],
  },
  "news-research": {
    eyebrow: "News & research", title: "What’s new. What it means. What it doesn’t.", dek: "A planned editorial desk for careful summaries of recent research, public debate, and optimism in action.", tone: "coral-page",
    sections: [
      { title: "Current news placeholder", body: "No live headlines appear here yet. A future feed will be edited and dated, link to original reporting or primary sources, disclose sponsorship, and distinguish publication date from event date." },
      { title: "The briefing format", body: "Every item will answer four questions.", items: ["What happened or was published?", "What evidence supports the central claim?", "What are the limits or credible counterpoints?", "What is worth watching next?"] },
      { title: "Editorial independence", body: "Funders, members, and partners will not receive favorable coverage. Corrections and meaningful updates will be attached to the original item." },
    ],
  },
  community: {
    eyebrow: "Community", title: "Hope grows more useful when it is shared.", dek: "A future network of thoughtful people testing practices, learning in public, and supporting constructive action.", tone: "green-page",
    sections: [
      { title: "Ways to participate", body: "Community spaces will begin small and moderated.", items: ["Host a local discussion circle", "Share a carefully framed story of change", "Test a practice and report what you notice", "Volunteer research or editorial expertise", "Nominate an initiative worth learning from"] },
      { title: "Community commitments", body: "No forced positivity. No medical advice. No certainty theater. We will welcome disagreement, protect privacy, credit contributions, and take lived experience seriously without presenting anecdotes as universal evidence." },
      { title: "Participation placeholder", body: "Applications and submissions are not yet open. The contact route will be enabled once moderation, consent, data retention, and safeguarding processes are documented." },
    ],
  },
  "projects-funding": {
    eyebrow: "Projects & funding", title: "Back work that makes possibility tangible.", dek: "A future home for initiatives, transparent grants, membership, and donations—built with safeguards before transactions begin.", tone: "yellow-page",
    sections: [
      { title: "What this could fund", body: "Public research explainers, community pilots, practical tools, editorial reporting, convenings, and small grants to aligned projects. Selection criteria and decision-makers will be published before funding opens." },
      { title: "Payments are not live", body: "Membership and donation checkout are intentionally disabled in this prototype. Stripe Checkout can be enabled only after account ownership, prices, tax and legal requirements, privacy terms, webhook verification, and a server-side checkout endpoint are configured." },
      { title: "Transparency by default", body: "The live site should disclose funding sources, material conflicts, grant criteria, fees, and periodic allocation reports. Donors will not control scientific or editorial conclusions." },
    ],
  },
  about: {
    eyebrow: "About & contact", title: "A public home for rigorous hope.", dek: "The Optimism Project is being built as an educational and civic resource—connecting careful science with practical, collective agency.", tone: "blue-page",
    sections: [
      { title: "Why now", body: "Human attention is sensitive to threat, and modern information environments can amplify it. We want to build a credible counterweight: not a promise that everything works out, but better infrastructure for seeing and creating possible futures." },
      { title: "Contact is not live yet", body: "The production contact form will require a server-side delivery provider, spam protection, consent language, data retention policy, and monitored inbox. Until those are configured, this page does not collect or transmit personal information." },
      { title: "Important framing", body: "The project’s “agonist for pessimism” and “Ozempic for pessimism” phrases are strictly creative metaphors for cultural counterweight. They do not imply a medicine, treatment, diagnosis, efficacy, clinical outcome, or medical equivalence." },
    ],
  },
};

export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const page = pages[slug]; return page ? { title: page.title } : {};
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const page = pages[slug]; if (!page) notFound();
  return <><Header/><main className={`inner-page ${page.tone}`}>
    <section className="page-hero"><div className="wrap"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.dek}</p></div></section>
    <section className="wrap content-layout">
      <aside><span>ON THIS PAGE</span>{page.sections.map((s,i)=><a href={`#section-${i+1}`} key={s.title}>{String(i+1).padStart(2,"0")} {s.title}</a>)}</aside>
      <div className="article-sections">{page.sections.map((s,i)=><article id={`section-${i+1}`} key={s.title}><span className="section-number">{String(i+1).padStart(2,"0")}</span><h2>{s.title}</h2><p>{s.body}</p>{s.items && <ul>{s.items.map(x=><li key={x}>{x}</li>)}</ul>}</article>)}
        <div className="next-card"><p>KEEP EXPLORING</p><h3>{slug === "about" ? "Begin with the idea." : "See how the whole project fits together."}</h3><Link href={slug === "about" ? "/what-optimism-is" : "/"}>Continue <span>→</span></Link></div>
      </div>
    </section>
  </main><Footer/></>;
}
