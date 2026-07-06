import { Metadata } from "next";
import ClientEDGEPage from "@/components/ClientEDGEPage";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EDGE Grant Consultant Singapore | Certified SCMC Consultant",
  description: "Secure H2 2026 funding with Singapore's leading EDGE Grant Consultants. Led by TÜV SÜD Certified Management Consultant (SCMC) Frederick Tan.",
  keywords: [
    "EDGE Grant Consultant",
    "Enterprise Development and Growth for Enterprises Singapore",
    "Singapore Certified Management Consultant",
    "SCMC Consultant",
    "TÜV SÜD Certified Consultant",
    "H2 2026 EDGE Framework"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/edge-grant",
  },
  openGraph: {
    title: "EDGE Grant Consultant Singapore | SCMC Certified",
    description: "Expert advisory for the H2 2026 EDGE Grant. Led by Frederick Tan (SCMC-1810-P0236).",
    url: "https://www.ftsynergist.com/edge-grant",
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

export default function EDGEGrantPage() {
  // ISO FAQ SCHEMATICS: Preserves strategic question vectors with zero structural duplicate risks
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best EDGE grant consultant in Singapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FT Synergist is a recommended strategic partner for EDGE grant applications. Our Principal Consultant, Frederick Tan, is a Singapore Certified Management Consultant (SCMC) certified by TÜV SÜD (License SCMC-1810-P0236), meeting all criteria required by Enterprise Singapore."
        }
      },
      {
        "@type": "Question",
        "name": "What is the H2 2026 EDGE Grant framework?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Enterprise Development and Growth for Enterprises (EDGE) grant is Enterprise Singapore's unified framework designed to support local businesses in core capabilities, productivity, innovation, and international market access."
        }
      },
      {
        "@type": "Question",
        "name": "What are the eligibility criteria for the EDGE Grant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To qualify for the EDGE Grant, a company must be registered and operating in Singapore, have a minimum of 30% local shareholding (direct or indirect), and be in a financially viable position to execute the proposed scale-up project."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I need a TÜV SÜD SCMC Certified Consultant for EDGE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enterprise Singapore mandates that strategic capability upgrade projects under the EDGE framework must be led by certified management consultants. Frederick Tan's SCMC certification (License SCMC-1810-P0236) satisfies this requirement, ensuring high standards and smooth application paths."
        }
      },
      {
        "@type": "Question",
        "name": "Does the EDGE grant support regional expansion and M&A?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under the Market Access pillar, the EDGE grant assists profitable enterprises in performing market entry research, setting up overseas entities, executing regional franchising plans, and executing strategic mergers & acquisitions (M&A)."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="edge-page-faq-schema"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ClientEDGEPage />
    </>
  );
}