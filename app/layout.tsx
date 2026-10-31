import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://the-optimism-project.parsaverse.chatgpt.site";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "The Optimism Project", url: siteUrl, description: "A research initiative exploring the causes of persistent pessimism and the possibility of developing interventions to change it." },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "The Optimism Project", url: siteUrl, inLanguage: "en", publisher: { "@id": `${siteUrl}/#organization` } },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "The Optimism Project", template: "%s — The Optimism Project" },
  description: "The search for an Ozempic for pessimism. Explore the science, people, and research questions behind changing a persistently negative outlook.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "The Optimism Project", description: "The search for an Ozempic for pessimism.", url: siteUrl, siteName: "The Optimism Project", images: ["/og.png"], type: "website" },
  twitter: { card: "summary_large_image", title: "The Optimism Project", description: "The science of changing outlook.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteSchema)}}/>{children}</body></html>;
}
