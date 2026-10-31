import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://the-optimism-project.parsaverse.chatgpt.site";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "The Optimism Project", url: siteUrl, description: "Independent public education and research on the brain, body, science, and practice of realistic optimism." },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, name: "The Optimism Project", url: siteUrl, inLanguage: "en", publisher: { "@id": `${siteUrl}/#organization` } },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "The Optimism Project", template: "%s — The Optimism Project" },
  description: "The brain, body, science, and practice of realistic optimism—and a rigorous research agenda for pessimism.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "The Optimism Project", description: "The science of what makes the future feel possible.", url: siteUrl, siteName: "The Optimism Project", images: ["/og.png"], type: "website" },
  twitter: { card: "summary_large_image", title: "The Optimism Project", description: "A clearer way to face what’s next.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(siteSchema)}}/>{children}</body></html>;
}
