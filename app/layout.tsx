import type { Metadata } from "next";
import { Jost, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";
import { ConsentProvider } from "@/components/providers/ConsentProvider";
import { ConsentBanner } from "@/components/cmp/ConsentBanner";
import { PreferenceCenter } from "@/components/cmp/PreferenceCenter";
import { FloatingConsentButton } from "@/components/cmp/FloatingConsentButton";




const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ftsynergist.com'),
  title: {
    default: "FT Synergist | Strategic Scale-Up & IP Consultancy Singapore",
    template: "%s | FT Synergist"
  },
  description: "Specializing in Business Strategy, IP Monetization, and Market Expansion for scaling enterprises. We help profitable SMEs build competitive moats and valuation.",
  keywords: ["SME Consultant Singapore", "EDG Grant", "Enterprise Strategy", "IP Monetization", "Market Expansion", "Frederick Tan", "Franchise Development"],
  openGraph: {
    title: "FT Synergist | Strategic Scale-Up & IP Consultancy Singapore",
    description: "Specializing in Business Strategy, IP Monetization, and Market Expansion for scaling enterprises. We help profitable SMEs build competitive moats and valuation.",
    url: 'https://www.ftsynergist.com',
    siteName: 'FT Synergist',
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FT Synergist | Strategic Scale-Up & IP Consultancy Singapore",
    description: "Specializing in Business Strategy, IP Monetization, and Market Expansion for scaling enterprises.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jost.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        <ConsentProvider>

          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ChatWidget />
          <ConsentBanner />
          <PreferenceCenter />
          <FloatingConsentButton />
          <JsonLd />

        </ConsentProvider>
      </body>
    </html>
  );
}
