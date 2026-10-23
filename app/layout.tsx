import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"], // headline widths: condensed hero, chapter names that widen as they arrive
  variable: "--font-archivo",
  display: "swap",
  preload: false, // the hero photo is the first-screen bottleneck; let it take the bandwidth first
});

export const metadata: Metadata = {
  title: "The Focus Room | Private training in East Austin",
  description:
    "A private, coach-led training room on East 5th Street. Muscle, mindset and mission, trained together. Thirty members. Apply to join.",
  metadataBase: new URL("https://www.thefocusroomatx.com"),
  openGraph: { type: "website", siteName: "The Focus Room", locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#ede7da" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        {/* Reveal styles only apply once JS has run, so nothing stays hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
