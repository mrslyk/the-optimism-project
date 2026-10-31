import Link from "next/link";

export const nav = [
  ["The Idea", "/what-optimism-is"], ["Evidence", "/science-evidence"], ["Practices", "/practices-tools"],
  ["Research", "/research-program"], ["Blog", "/blog"], ["People", "/experts"], ["Community", "/community"],
];

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><span className="brand-sun">✦</span><span>THE OPTIMISM<br/>PROJECT</span></Link><nav>{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav><Link className="header-donate" href="/donate">Donate</Link><Link className="about-link" href="/about">About <span>↗</span></Link></header>;
}

export function Footer() {
  return <footer><div className="wrap footer-grid"><div><Link className="brand footer-brand" href="/"><span className="brand-sun">✦</span><span>THE OPTIMISM<br/>PROJECT</span></Link><p>For people who believe hope deserves rigor.</p></div><div><b>EXPLORE</b>{nav.slice(0,4).map(([l,h])=><Link href={h} key={h}>{l}</Link>)}<Link href="/news-research">News & research</Link></div><div><b>PARTICIPATE</b>{nav.slice(4).map(([l,h])=><Link href={h} key={h}>{l}</Link>)}<Link href="/donate">Donate</Link><Link href="/about">About & contact</Link></div><div><b>IMPORTANT</b><p>Educational and research-planning content only. Not medical or mental health advice. No GLP-1 product or pessimism treatment is offered.</p></div></div><div className="wrap footer-bottom"><span>© 2026 The Optimism Project</span><span>Evidence updated August 1, 2026</span></div></footer>;
}
