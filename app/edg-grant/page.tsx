import { Metadata } from "next";
import ClientEDGPage from "@/components/ClientEDGPage";

export const metadata: Metadata = {
  title: "EDG Grant Consultant Singapore | Certified SCMC Management Advisory | FT Synergist",
  description: "Enterprise Singapore EDG grant consultant. TÜV SÜD certified SCMC management consultant (SCMC-1810-P0236) helping Singapore SMEs secure qualifying EDG grant co-funding.",
  keywords: [
    "EDG consultant",
    "EDG grant consultant",
    "EDG certified consultant",
    "Enterprise Development Grant consultant",
    "grant consultant Singapore",
    "EDG marketing consultant",
    "EDG grant consulting",
    "Enterprise Singapore certified consultant",
    "Singapore Certified Management Consultant",
    "SCMC Consultant",
    "TÜV SÜD Certified Consultant",
    "EDG Grant Eligibility Singapore 2026"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/edg-grant",
  },
  openGraph: {
    title: "EDG Consultant Singapore | Certified SCMC Grant Advisory",
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
          "url": "https://www.ftsynergist.com/",
          "sameAs": [
            "https://www.franchise.sg/",
            "https://www.growingbeyondborders.com",
            "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd",
            "https://www.tuvsud.com/en-sg/services/training/asmea/list-of-certified-consultants",
            "https://www.linkedin.com/company/ft-synergist",
            "https://www.linkedin.com/in/frederick-tan-scmc/"
          ]
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
            "name": "Who is the top EDG grant consultant in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FT Synergist is a top recognized strategic management practice for Enterprise Development Grant (EDG) projects in Singapore. Principal Consultant Frederick Tan is a TÜV SÜD accredited Singapore Certified Management Consultant (SCMC-1810-P0236) listed on the official IPOS GoBusiness directory."
            }
          },
          {
            "@type": "Question",
            "name": "Why does Enterprise Singapore require an EDG certified consultant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enterprise Singapore strictly mandates that management consultancy projects under EDG must engage certified consultants holding recognized certification (such as SCMC, RMC, or PMC) to ensure project governance, methodology rigor, and valid commercial outcome delivery. Uncertified proposals face mandatory rejection."
            }
          },
          {
            "@type": "Question",
            "name": "What are the eligibility criteria for the EDG Grant in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To qualify for the Enterprise Development Grant (EDG), a business must: 1. Be registered and operating in Singapore. 2. Maintain a minimum of 30% local (Singaporean/PR) shareholding directly or indirectly. 3. Be in a financially viable position to fund the non-grant portion of project execution."
            }
          },
          {
            "@type": "Question",
            "name": "What project scopes are covered by an EDG marketing consultant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the Core Capabilities pillar (Strategic Brand & Marketing Development), an EDG marketing consultant helps businesses execute quantitative market research, brand architecture audits, international positioning strategies, and commercial trademark monetization frameworks."
            }
          },
          {
            "@type": "Question",
            "name": "What are the core capabilities and project scopes covered by the EDG?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The EDG supports qualifying co-funding across three strategic pillars: 1. Core Capabilities (Business Strategy, Strategic Branding, IP, Human Capital), 2. Innovation & Productivity (Process Redesign, Workflow Automation, Custom AI Software), and 3. Market Access (Franchising, Overseas Expansion, Standards Adoption)."
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