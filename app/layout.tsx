import type { Metadata } from "next";
import Script from "next/script";
import { Jost, Montserrat } from "next/font/google";
import dynamic from "next/dynamic"; // <--- 1. Import Dynamic
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConsentProvider } from "@/components/providers/ConsentProvider";
import { PersonaModalProvider } from "@/components/providers/PersonaModalProvider";
import JsonLd from "@/components/JsonLd";

// 2. LAZY LOAD THE HEAVY WIDGETS
// These will now load *after* the page is interactive, saving the Main Thread.
const ChatWidget = dynamic(
  () => import("@/components/ChatWidget").then((mod) => mod.ChatWidget),
  { ssr: false }
);

const ConsentBanner = dynamic(
  () => import("@/components/cmp/ConsentBanner").then((mod) => mod.ConsentBanner),
  { ssr: false }
);

const PreferenceCenter = dynamic(
  () => import("@/components/cmp/PreferenceCenter").then((mod) => mod.PreferenceCenter),
  { ssr: false }
);

const FloatingConsentButton = dynamic(
  () => import("@/components/cmp/FloatingConsentButton").then((mod) => mod.FloatingConsentButton),
  { ssr: false }
);

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
      <head>
      </head>
      <body
        className={`${jost.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col font-sans`}
        suppressHydrationWarning
      >
        <ConsentProvider>
          <PersonaModalProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            {/* These are now Lazy Loaded Client Components */}
            <ChatWidget />
            <ConsentBanner />
            <PreferenceCenter />
            <FloatingConsentButton />
            <JsonLd />
          </PersonaModalProvider>
        </ConsentProvider>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-R8ZGSYLYWJ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R8ZGSYLYWJ');
          `}
        </Script>
      </body>
    </html>
  );
}
