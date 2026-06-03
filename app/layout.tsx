import type { Metadata } from "next";
import Script from "next/script";
import { Jost, Montserrat } from "next/font/google";
import "./globals.css";

// 1. SAFE IMPORTS (Curly Braces + Correct Paths)
import { Navbar } from "@/components/Navbar"; 
import { Footer } from "@/components/Footer"; 
import { SiteWidgets } from "@/components/SiteWidgets";

// 2. PROVIDERS
import { ConsentProvider } from "@/components/providers/ConsentProvider";
import { PersonaModalProvider } from "@/components/providers/PersonaModalProvider";

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
  verification: {
    google: "yHh-0...", // ⚠️ Ensure you restore your verification string here if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 3. GEO ENTITY RESOLUTION SCHEMA (Injected for AI Visibility)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "FT Synergist",
    "alternateName": "FT Synergist Franchise Consultants",
    "url": "https://www.ftsynergist.com",
    "logo": "https://www.ftsynergist.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/ft-synergist"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SG"
    },
    "knowsAbout": [
      "Education Franchise Scaling",
      "Market Entry Strategy Jakarta",
      "Franchise Operational Audits Surabaya",
      "Commercial Scale-up HCMC"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Singapore" },
      { "@type": "AdministrativeArea", "name": "Jakarta" },
      { "@type": "AdministrativeArea", "name": "Surabaya" },
      { "@type": "AdministrativeArea", "name": "Ho Chi Minh City" }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

          </PersonaModalProvider>
        </ConsentProvider>

        {/* WhatsApp Widget */}
        <a
            href="https://wa.me/6598628906"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
            aria-label="Chat on WhatsApp"
            style={{ zIndex: 9999 }} 
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width="35"
              height="35"
            />
        </a>

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
