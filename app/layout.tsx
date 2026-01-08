import type { Metadata } from "next";
import Script from "next/script";
import { Jost, Montserrat } from "next/font/google";
import "./globals.css";

// --- FIX 1: REMOVED CURLY BRACES (Default Imports) ---
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import SiteWidgets from "@/components/SiteWidgets";
// ----------------------------------------------------

import { ConsentProvider } from "@/components/providers/ConsentProvider";
import { PersonaModalProvider } from "@/components/providers/PersonaModalProvider";
import { Toaster } from "@/components/ui/toaster"; // Added back in case you use Toast notifications

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
  description: "Specializing in Business Strategy, IP Monetization, and Market Expansion for scaling enterprises. We help profitable SMEs secure EDG and MRA grants.",
  keywords: ["SME Consultant Singapore", "EDG Grant", "Enterprise Strategy", "IP Monetization", "Frederick Tan"],
  openGraph: {
    title: "FT Synergist | Strategic Scale-Up & IP Consultancy Singapore",
    description: "Specializing in Business Strategy, IP Monetization, and Market Expansion for scaling enterprises.",
    url: "https://www.ftsynergist.com",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  // ⚠️ CHECK: Ensure this code is your REAL verification string
  verification: {
    google: "yHh-0w...", 
  },
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
      >
        <ConsentProvider>
          <PersonaModalProvider>
            
            <Navbar />
            
            <main className="flex-grow">
              {children}
            </main>
            
            <Footer />
            
            <SiteWidgets />
            <Toaster />

            {/* DELETED: <JsonLd /> is gone. The Ghost is dead. */}

          </PersonaModalProvider>
        </ConsentProvider>

        {/* Google Analytics (Verified ID: G-R8ZGSYLYWJ) */}
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
