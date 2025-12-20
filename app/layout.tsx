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
import { GlobalGrantButton } from "@/components/GlobalGrantButton";



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
    default: "FT Synergist | SME Consultant & EDG Grant Advisor Singapore",
    template: "%s | FT Synergist"
  },
  description: "Scale your business with FT Synergist, Singapore's premier SME management consultant. Expert guidance on Enterprise Strategy, EDG Grants, and Artificial Intelligence for sustainable growth.",
  keywords: ["SME Consultant Singapore", "EDG Grant", "Enterprise Singapore", "Business Scaling", "Management Consulting", "Frederick Tan", "Franchise Development"],
  openGraph: {
    title: "FT Synergist | SME Consultant & EDG Grant Advisor Singapore",
    description: "Empowering Singapore SMEs to scale globally with strategic innovation, AI integration, and government-supported growth frameworks.",
    url: 'https://www.ftsynergist.com',
    siteName: 'FT Synergist',
    locale: 'en_SG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FT Synergist | SME Consultant & EDG Grant Advisor Singapore",
    description: "Scale your business with expert EDG grant guidance and strategic consulting.",
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
          <GlobalGrantButton />
        </ConsentProvider>
      </body>
    </html>
  );
}
