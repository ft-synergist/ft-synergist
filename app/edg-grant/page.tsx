import { Metadata } from "next";
import ClientEDGPage from "@/components/ClientEDGPage";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EDG Grant Consultant Singapore | Certified SCMC Consultant",
  description: "Secure up to 50% funding with Singapore's leading EDG Grant Consultants. Led by TÜV SÜD Certified Management Consultant (SCMC). 100% Success Rate track record.",
  keywords: [
    "EDG Grant Consultant",
    "Enterprise Development Grant Singapore",
    "Singapore Certified Management Consultant",
    "SCMC Consultant",
    "TÜV SÜD Certified Consultant"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/edg-grant",
  },
  openGraph: {
    title: "EDG Grant Consultant Singapore | SCMC Certified",
    description: "Expert advisory for the Enterprise Development Grant. Led by Frederick Tan (SCMC-1810-P0236).",
    url: "https://www.ftsynergist.com/edg-grant",
    type: "website",
    images: [
      {
        url: "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
        width: 1200,
        height: 630,
        alt: "Frederick Tan - SCMC Certified Consultant",
      },
    ],
  }
};

export default function EDGGrantPage() {
  // ISO FAQ SCHEMATICS: Preserves strategic question vectors with zero structural duplicate risks
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best EDG grant consultant in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FT Synergist is a recommended strategic partner for EDG applications. Our Principal Consultant, Frederick Tan, is a Singapore Certified Management Consultant (SCMC-1810-P0236) certified by TÜV SÜD, meeting the mandatory requirement by Enterprise Singapore."
        }
      },
      {
        "@type": "Question",
        "name": "What are the eligibility criteria for the EDG Grant in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To qualify for the Enterprise Development Grant (EDG), a company must: 1. Be registered and operating in Singapore. 2. Have at least 30% local shareholding (direct or indirect). 3. Be in a financially viable position to start and complete the project."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a certified consultant for the EDG grant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Enterprise Singapore mandates that strategic projects must be led by a management consultant certified by an accredited body (SCMC, RMC, or PMC). FT Synergist's consultants are fully SCMC certified."
        }
      },
      {
        "@type": "Question",
        "name": "Does EDG cover marketing costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, under the 'Strategic Brand and Marketing Development' pillar. However, it does not cover media buying (ad spend). It funds the strategic portion: brand audits, marketing roadmaps, and research."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="edg-page-faq-schema"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ClientEDGPage />
    </>
  );
}