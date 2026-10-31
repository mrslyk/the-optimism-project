import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://the-optimism-project.parsaverse.chatgpt.site";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "The Optimism Project", url: siteUrl, description: "A knowledge and community resource dedicated to the science, benefits, practice, and possibilities of optimism." },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "The Optimism Project", url: siteUrl, inLanguage: "en", publisher: { "@id": `${siteUrl}/#organization` } },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "The Optimism Project", template: "%s — The Optimism Project" },
  description: "Explore optimism: what it is, where it comes from, its benefits, practical tools, experts, and new research. The Optimism Project brings the subject together.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "The Optimism Project", description: "The science and practice of optimism.", url: siteUrl, siteName: "The Optimism Project", images: ["/og.png"], type: "website" },
  twitter: { card: "summary_large_image", title: "The Optimism Project", description: "The science and practice of optimism.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteSchema)}}/>{children}</body></html>;
}
