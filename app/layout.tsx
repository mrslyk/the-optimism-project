import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://the-optimism-project.example"),
  title: { default: "The Optimism Project", template: "%s — The Optimism Project" },
  description: "A public project for the science and practice of realistic optimism.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "The Optimism Project", description: "A clearer way to face what’s next.", images: ["/og.png"], type: "website" },
  twitter: { card: "summary_large_image", title: "The Optimism Project", description: "A clearer way to face what’s next.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
