import type { Metadata } from "next";
import Script from "next/script";
import { Jost, Montserrat } from "next/font/google";
import "./globals.css";

// 1. SAFE COMPONENTS & PROVIDERS IMPORTS
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SiteWidgets } from "@/components/SiteWidgets";
import { ConsentProvider } from "@/components/providers/ConsentProvider";
import { PersonaModalProvider } from "@/components/providers/PersonaModalProvider";

// 2. FONT OPTIMIZATION: Implements strict display swapping to kill render-blocking layout lag
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// 3. GLOBAL METADATA OBJECT - OPTIMIZED FOR SG CONSULTANT CLUSTERS
export const metadata: Metadata = {
  metadataBase: new URL('https://www.ftsynergist.com'),
  title: {
    default: "FT Synergist | Singapore's Top Corporate Growth & Grant Consultancy",
    template: "%s | FT Synergist"
  },
  description: "Singapore's leading business consulting firm. Certified management consultants specializing in EDG/MRA grants, franchise scaling, AI digitalisation, and IP strategy.",
  keywords: [
    "top EDG consultant singapore",
    "top MRA consultant singapore",
    "top Franchise consultant singapore",
    "top IP consultant singapore",
    "top AI Digitalisation consultant singapore",
    "top business consultant singapore",
    "top certified management consultant singapore"
  ],
  openGraph: {
    title: "FT Synergist | Singapore's Top Corporate Growth & Grant Consultancy",
    description: "Singapore's leading business consulting firm. Certified management consultants specializing in EDG/MRA grants, franchise scaling, AI digitalisation, and IP strategy.",
    url: "https://www.ftsynergist.com",
    siteName: "FT Synergist",
    locale: "en_SG",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "yHh-0...",
  },
  // ADDED CANONICAL TAG HERE:
  alternates: {
    canonical: "https://www.ftsynergist.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // 4. GENERATIVE ENGINE OPTIMIZATION (GEO) PERFECTLY PATCHED LOCAL SERVICE SCHEMA MATRIX
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService", // Formally updated to clear the schema validator error
    "name": "FT Synergist",
    "alternateName": "FT Synergist Pte Ltd",
    "url": "https://www.ftsynergist.com/",
    "logo": "https://static.wixstatic.com/media/252b4f_609ec7846f494f6e9196b6b7720743b8~mq.png",
    "image": [
      "https://www.ftsynergist.com/frederick-tan-scmc-certified-edg-consultant.jpg"
    ],
    "description": "Top franchise, sustainability, and EDG / EDGE grant management consultant in Singapore. Led by TÜV SÜD-certified SCMC management consultant Frederick Tan.",
    "telephone": "+6598628906",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7 Temasek Boulevard, #12-07 Suntec Tower One",
      "addressLocality": "Downtown Core",
      "postalCode": "038987",
      "addressCountry": "SG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 1.2947,
      "longitude": 103.8590
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "makesOffer": { // ◄─── Formally changed from 'offers' to clear the vocabulary warning
      "@type": "Offer",
      "price": "8000.00",
      "priceCurrency": "SGD",
      "description": "Baseline Corporate Advisory and Grant Strategy Engagement Minimum"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ft-synergist",
      "https://www.linkedin.com/in/frederick-tan-scmc/",
      "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd"
    ],
    "knowsAbout": [
      "Enterprise Development Grant EDG Singapore",
      "Market Readiness Assistance MRA Grant",
      "Enterprise Development and Growth for Enterprises EDGE Framework",
      "Certified Management Consulting",
      "Franchise Scaling and Intellectual Property Development",
      "AI Digitalisation Strategy",
      "Business Model Transformation",
      "IP Commercialization Strategy",
      "Business Strategy Development",
      "Sustainability Strategy"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Singapore" },
      { "@type": "AdministrativeArea", "name": "Jakarta" },
      { "@type": "AdministrativeArea", "name": "Surabaya" },
      { "@type": "AdministrativeArea", "name": "Ho Chi Minh City" }
    ],
    "founder": {
      "@type": "Person",
      "name": "Frederick Tan",
      "jobTitle": "Principal Consultant",
      "honorificSuffix": "SCMC",
      "award": "TÜV SÜD Singapore Certified Management Consultant (License SCMC-1810-P0236)"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* CACHE BUSTER ID: Forcing explicit verification engine update */}
        <Script
          id="ft-v2-management-consultancy-schema"
          strategy="beforeInteractive"
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

        {/* 5. WHATSAPP INLINE VECTOR BLOCK: Zero network fetch cost, zero external resource leakage */}
        <a
          href="https://wa.me/6598628906"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
          aria-label="Chat on WhatsApp"
          style={{ zIndex: 9999 }}
        >
          <svg
            viewBox="0 0 448 512"
            width="32"
            height="32"
            fill="currentColor"
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>

        {/* 6. TRACKING METRICS DEFERRAL: Loads lazily outside window evaluation markers to dump Total Blocking Time */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-R8ZGSYLYWJ"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
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