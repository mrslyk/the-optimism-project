import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-chrome";
import { DonateButton } from "./donate-button";

export const metadata: Metadata = { title: "Support the Project", description: "Help develop the evidence library, research agenda, and collaborations behind The Optimism Project." };

const presets = [
  ["$25", process.env.NEXT_PUBLIC_DONATE_25_URL], ["$100", process.env.NEXT_PUBLIC_DONATE_100_URL],
  ["$1,000", process.env.NEXT_PUBLIC_DONATE_1000_URL], ["$5,000", process.env.NEXT_PUBLIC_DONATE_5000_URL],
] as const;

export default function DonatePage(){ const custom=process.env.NEXT_PUBLIC_DONATE_URL; const live=Boolean(custom||presets.some(([,url])=>url)); return <><Header/><main className="donate-page">
  <section className="donate-hero"><div className="wrap"><p className="eyebrow">Support the project</p><h1>Help make the question answerable.</h1><p>Developing better ways to change persistent pessimism starts with careful research: understanding the evidence, defining the problem, and designing studies that could move the field forward.</p></div></section>
  <section className="wrap donate-layout"><div className="donate-copy"><p className="kicker">The work ahead</p><h2>Build the foundation for a breakthrough.</h2><p>We want to make the science of optimism accessible and turn the project’s ambition into a research program that can be tested. That means reviewing studies, bringing the right expertise together, and identifying the most useful next questions.</p><p>Future funding would support that work. There is no project treatment available, and support would not buy access to a therapy or a clinical trial.</p></div>
    <div className="donate-card"><p className="kicker">{live ? "Give securely" : "Where things stand"}</p><h2>{live ? "Choose an amount" : "Donations are not open yet."}</h2><p>{live ? "Choose an amount below to continue to secure checkout." : "We are preparing the project’s funding arrangements. In the meantime, explore the research agenda and the work we want to support."}</p>{live ? <div className="donate-options">{presets.filter(([,href])=>href).map(([label,href])=><DonateButton href={href} key={label}>{label}</DonateButton>)}{custom && <DonateButton href={custom} primary>Choose an amount →</DonateButton>}</div> : <Link className="button button-dark" href="/research-program">Read the research agenda <span>→</span></Link>}</div>
  </section>
  <section className="wrap funds-section"><p className="kicker">What support could make possible</p><div className="funds-grid"><article><span>01</span><h3>A useful evidence library</h3><p>Clear explanations of the research, with direct sources and regular updates as the field develops.</p></article><article><span>02</span><h3>Better research questions</h3><p>A precise account of what needs to change and how a study could measure a meaningful result.</p></article><article><span>03</span><h3>Scientific collaboration</h3><p>The expertise and institutional partnerships needed to design and carry out future studies.</p></article></div></section>
  <section className="donation-terms"><div className="wrap"><h2>Know what you would be supporting.</h2><p>When donations open, this page will identify the organization receiving funds, explain how they will be used, and state the applicable donation terms and tax status.</p><Link href="/about">About the project →</Link></div></section>
  </main><Footer/></>}
