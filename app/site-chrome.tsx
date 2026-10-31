import Link from "next/link";

export const nav = [
  ["The Mission", "/what-optimism-is"], ["Science", "/science-evidence"], ["Practices", "/practices-tools"],
  ["Research Agenda", "/research-program"], ["Blog", "/blog"], ["People", "/experts"], ["Community", "/community"],
];

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><span className="brand-sun">✦</span><span>THE OPTIMISM<br/>PROJECT</span></Link><nav>{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav><Link className="header-donate" href="/donate">Support</Link><Link className="about-link" href="/about">About <span>↗</span></Link></header>;
}

export function Footer() {
  return <footer><div className="wrap footer-grid"><div><Link className="brand footer-brand" href="/"><span className="brand-sun">✦</span><span>THE OPTIMISM<br/>PROJECT</span></Link><p>Understanding pessimism. Exploring how to change it.</p></div><div><b>EXPLORE</b>{nav.slice(0,4).map(([l,h])=><Link href={h} key={h}>{l}</Link>)}<Link href="/news-research">News & research</Link></div><div><b>PARTICIPATE</b>{nav.slice(4).map(([l,h])=><Link href={h} key={h}>{l}</Link>)}<Link href="/donate">Support</Link><Link href="/about">About & contact</Link></div><div><b>THE PROJECT TODAY</b><p>An early research initiative. No treatment or clinical trial is currently offered. This site provides information, not medical advice.</p></div></div><div className="wrap footer-bottom"><span>© 2026 The Optimism Project</span><span>The science of changing outlook</span></div></footer>;
}
