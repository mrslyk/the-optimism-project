import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-chrome";
import { DonateButton } from "./donate-button";

export const metadata: Metadata = { title: "Support the Project", description: "Support accessible knowledge, practical tools, and community around optimism." };

const presets = [
  ["$25", process.env.NEXT_PUBLIC_DONATE_25_URL], ["$100", process.env.NEXT_PUBLIC_DONATE_100_URL],
  ["$1,000", process.env.NEXT_PUBLIC_DONATE_1000_URL], ["$5,000", process.env.NEXT_PUBLIC_DONATE_5000_URL],
] as const;

export default function DonatePage(){ const custom=process.env.NEXT_PUBLIC_DONATE_URL; const live=Boolean(custom||presets.some(([,url])=>url)); return <><Header/><main className="donate-page">
  <section className="donate-hero"><div className="wrap"><p className="eyebrow">Support the project</p><h1>Help optimism reach more people.</h1><p>Support a place to learn about optimism, explore the evidence, discover useful practices, and connect with the people advancing the subject.</p></div></section>
  <section className="wrap donate-layout"><div className="donate-copy"><p className="kicker">The work ahead</p><h2>Make the subject easier to explore.</h2><p>The work begins with useful public resources: clear guides, a source library, research updates, practical tools, and a directory of people whose work helps us understand optimism.</p><p>Future funding would help expand these resources and develop community features, so more people can learn from the science and from one another.</p></div>
    <div className="donate-card"><p className="kicker">{live ? "Give securely" : "Where things stand"}</p><h2>{live ? "Choose an amount" : "Donations are not open yet."}</h2><p>{live ? "Choose an amount below to continue to secure checkout." : "Funding arrangements are still being developed. Explore the resources and projects we want to support."}</p>{live ? <div className="donate-options">{presets.filter(([,href])=>href).map(([label,href])=><DonateButton href={href} key={label}>{label}</DonateButton>)}{custom && <DonateButton href={custom} primary>Choose an amount →</DonateButton>}</div> : <Link className="button button-dark" href="/projects-funding">Explore the planned work <span>→</span></Link>}</div>
  </section>
  <section className="wrap funds-section"><p className="kicker">What support could make possible</p><div className="funds-grid"><article><span>01</span><h3>A useful evidence library</h3><p>Clear explanations of the research, with direct sources and regular updates as the field develops.</p></article><article><span>02</span><h3>Practical guides and tools</h3><p>Exercises, reading guides, and tools that connect research with everyday questions.</p></article><article><span>03</span><h3>People and community</h3><p>An expanded directory, thoughtful discussions, and a place to share experiences of optimism.</p></article></div></section>
  <section className="donation-terms"><div className="wrap"><h2>Know what you would be supporting.</h2><p>When donations open, this page will identify the organization receiving funds, explain how they will be used, and state the applicable donation terms and tax status.</p><Link href="/about">About the project →</Link></div></section>
  </main><Footer/></>}
