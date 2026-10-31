"use client";

export function DonateButton({ href, children, primary=false }:{href?:string;children:React.ReactNode;primary?:boolean}) {
  if (!href) return <span className={`donate-button ${primary?"primary":""} disabled`} aria-disabled="true" title="Donation checkout is not configured">{children}</span>;
  return <a className={`donate-button ${primary?"primary":""}`} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}
