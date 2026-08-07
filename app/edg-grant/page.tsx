import { Metadata } from "next";
import ClientEDGPage from "@/components/ClientEDGPage";

export const metadata: Metadata = {
  title: "EDG Grant Consultant Singapore | Certified SCMC Consultant",
  description: "Secure qualifying funding support with Singapore's leading EDG Grant Consultants. Led by TÜV SÜD Certified Management Consultant (SCMC) advisory frameworks.",
  keywords: [
    "EDG Grant Consultant",
    "Enterprise Development Grant Singapore",
    "Singapore Certified Management Consultant",
    "SCMC Consultant",
    "TÜV SÜD Certified Consultant",
    "EDG Grant Eligibility Singapore 2026"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/edg-grant",
  },
  openGraph: {
    title: "EDG Grant Consultant Singapore | SCMC Certified Advisory",
    description: "Enterprise Development Grant (EDG) strategic advisory. Led by TÜV SÜD Certified Consultant Frederick Tan (SCMC-1810-P0236).",
    url: "https://www.ftsynergist.com/edg-grant",
    type: "website",
    images: [
      {
        url: "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
        width: 1200,
        height: 630,
        alt: "Frederick Tan - SCMC Certified EDG Grant Consultant Singapore",
      },
    ],
  }
};

export default function EDGGrantPage() {
  // COMBINED SCHEMAS: Integrates Service schema + FAQPage schema into unified @graph
  const edgPageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.ftsynergist.com/edg-grant#service",
        "name": "Enterprise Development Grant (EDG) Strategic Consultancy",
        "provider": {
          "@type": "ConsultingBusiness",
          "name": "FT Synergist",
          "url": "https://www.ftsynergist.com/"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Singapore"
        },
        "serviceType": "Management Consulting / Grant Advisory",
        "description": "Certified EnterpriseSG EDG grant advisory covering Core Capabilities, Innovation & Productivity, and Market Access pillars led by TÜV SÜD accredited SCMC consultants."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.ftsynergist.com/edg-grant#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is the best EDG grant consultant in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FT Synergist is a recognized strategic management practice for EDG applications. Principal Consultant Frederick Tan is a TÜV SÜD accredited Singapore Certified Management Consultant (SCMC-1810-P0236), meeting Enterprise Singapore quality framework requirements."
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
            "name": "Do I need a certified consultant for an EDG grant project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Enterprise Singapore mandates that management consultancy projects engage certified consultants holding recognized accreditations (SCMC, RMC, or PMC). FT Synergist consultants carry verified SAC-aligned certifications."
            }
          },
          {
            "@type": "Question",
            "name": "What are the core capabilities and project scopes covered by the EDG?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The EDG supports up to 50% co-funding under three pillars: Core Capabilities (Business Strategy, Branding, IP), Innovation & Productivity (Process Redesign, Custom AI), and Market Access (Franchising, Overseas Expansion)."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(edgPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ClientEDGPage />
    </>
  );
}