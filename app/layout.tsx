import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  preload: false, // the hero photo is the first-screen bottleneck; let it take the bandwidth first
});
// Accent italic for one word per heading, and a mono for readouts (coordinates, counters, captions).
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: "italic", variable: "--font-serif", display: "swap", preload: false });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap", preload: false });

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
    <html lang="en" className={`${archivo.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
