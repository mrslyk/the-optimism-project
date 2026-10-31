import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../site-chrome";
import { DonateButton } from "./donate-button";

export const metadata: Metadata = { title: "Donate", description: "Support independent research, public education, and development of The Optimism Project." };

const presets = [
  ["$25", process.env.NEXT_PUBLIC_DONATE_25_URL], ["$100", process.env.NEXT_PUBLIC_DONATE_100_URL],
  ["$1,000", process.env.NEXT_PUBLIC_DONATE_1000_URL], ["$5,000", process.env.NEXT_PUBLIC_DONATE_5000_URL],
] as const;

export default function DonatePage(){ const custom=process.env.NEXT_PUBLIC_DONATE_URL; const live=Boolean(custom||presets.some(([,url])=>url)); return <><Header/><main className="donate-page">
  <section className="donate-hero"><div className="wrap"><p className="eyebrow">Give · keep the science public</p><h1>Fund a more rigorous kind of hope.</h1><p>Your support helps build an open evidence library, publish careful journalism, create practical tools, and develop a credible research program around the biology and psychology of pessimism.</p></div></section>
  <section className="wrap donate-layout"><div className="donate-copy"><p className="kicker">Why give</p><h2>Fund the question, not a promised answer.</h2><p>The project’s long-term thesis is ambitious: investigate whether metabolic, reward, and stress pathways—including GLP-1 signaling—can illuminate persistent pessimism. Donations support research synthesis, scientific collaboration, public education, and responsible study design.</p><p>They do not purchase a treatment, participation in a clinical trial, equity, medical advice, or a guaranteed research outcome.</p></div>
    <div className="donate-card"><p className="kicker">Give securely</p><h2>Pick an amount</h2><p>Checkout follows the Cuba New model: the site sends you to a Stripe-hosted Payment Link. No card or wallet details touch this website.</p><div className="donate-options">{presets.map(([label,href])=><DonateButton href={href} key={label}>{label}</DonateButton>)}<DonateButton href={custom} primary>Any amount →</DonateButton></div><div className={`checkout-status ${live?"live":""}`}><span>{live?"●":"○"}</span>{live?"Stripe checkout configured":"Checkout awaiting Optimism Project Stripe links"}</div></div>
  </section>
  <section className="wrap funds-section"><p className="kicker">What support builds</p><div className="funds-grid"><article><span>01</span><h3>Evidence library</h3><p>Primary-source reviews with confidence labels, limitations, corrections, and scheduled re-review.</p></article><article><span>02</span><h3>Research program</h3><p>Phenotype definition, target validation, study design, ethics planning, and independent collaboration.</p></article><article><span>03</span><h3>Public tools</h3><p>Accessible educational resources and non-clinical practices grounded in evidence rather than hype.</p></article></div></section>
  <section className="donation-terms"><div className="wrap"><h2>Transparency before transactions.</h2><p>Before checkout goes live, the organization must publish its legal entity, tax-deductibility status, refund policy, privacy terms, allocation policy, and financial reporting cadence. Until then, donation links remain disabled.</p><Link href="/about">About the project →</Link></div></section>
  </main><Footer/></>}
