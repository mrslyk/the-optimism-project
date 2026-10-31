import Link from "next/link";

export const nav = [
  ["Learn", "/what-optimism-is"], ["Science", "/science-evidence"], ["Benefits", "/benefits"],
  ["Practices", "/practices-tools"], ["Experts", "/experts"], ["News", "/news-research"], ["Community", "/community"],
];

export function Header() {
  return <header className="site-header"><Link className="brand" href="/"><span className="brand-sun">✦</span><span>THE OPTIMISM<br/>PROJECT</span></Link><nav aria-label="Main navigation">{nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</nav><Link className="header-donate" href="/donate">Support</Link><Link className="about-link" href="/about">About <span>↗</span></Link><details className="mobile-menu"><summary>Menu</summary><nav aria-label="Mobile navigation">{[...nav,["Origins of optimism","/causes-of-optimism"],["Research frontiers","/research-program"],["Blog","/blog"],["About","/about"]].map(([label,href])=><a href={href} key={href}>{label}</a>)}</nav></details></header>;
}

export function Footer() {
  return <footer><div className="wrap footer-grid"><div><Link className="brand footer-brand" href="/"><span className="brand-sun">✦</span><span>THE OPTIMISM<br/>PROJECT</span></Link><p>The science, practice, and possibilities of optimism.</p></div><div><b>UNDERSTAND</b><Link href="/what-optimism-is">What is optimism?</Link><Link href="/causes-of-optimism">Where it comes from</Link><Link href="/benefits">Benefits</Link><Link href="/science-evidence">Science & evidence</Link><Link href="/practices-tools">Practices & tools</Link></div><div><b>EXPLORE</b><Link href="/experts">Experts & thinkers</Link><Link href="/news-research">News & research</Link><Link href="/community">Community</Link><Link href="/blog">Blog</Link><Link href="/research-program">Research frontiers</Link></div><div><b>THE PROJECT</b><Link href="/about">About</Link><Link href="/projects-funding">Projects & funding</Link><Link href="/donate">Support</Link><p>An independent resource for learning about optimism. Educational information, with links to the research behind it.</p></div></div><div className="wrap footer-bottom"><span>© 2026 The Optimism Project</span><span>Learn · Explore · Practice · Connect</span></div></footer>;
}
