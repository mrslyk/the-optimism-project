import Link from "next/link";

export const nav = [
  ["The Idea", "/what-optimism-is"], ["Evidence", "/science-evidence"], ["Practices", "/practices-tools"],
  ["People", "/experts"], ["Dispatches", "/news-research"], ["Community", "/community"], ["Projects", "/projects-funding"],
];

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><span className="brand-sun">✦</span><span>THE OPTIMISM<br/>PROJECT</span></Link><nav>{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav><Link className="about-link" href="/about">About <span>↗</span></Link></header>;
}

export function Footer() {
  return <footer><div className="wrap footer-grid"><div><Link className="brand footer-brand" href="/"><span className="brand-sun">✦</span><span>THE OPTIMISM<br/>PROJECT</span></Link><p>For people who believe hope deserves rigor.</p></div><div><b>EXPLORE</b>{nav.slice(0,4).map(([l,h])=><Link href={h} key={h}>{l}</Link>)}</div><div><b>PARTICIPATE</b>{nav.slice(4).map(([l,h])=><Link href={h} key={h}>{l}</Link>)}<Link href="/about">About & contact</Link></div><div><b>IMPORTANT</b><p>Educational and general wellbeing content only. Not medical or mental health advice.</p></div></div><div className="wrap footer-bottom"><span>© 2026 The Optimism Project</span><span>Built in the open, with care.</span></div></footer>;
}
