import { Metadata } from "next";
import ClientEDGPage from "@/components/ClientEDGPage";

export const metadata: Metadata = {
  title: "EDG Grant Consultant Singapore | Certified Management Consultants (CMC)",
  description: "Secure up to 50% funding with Singapore's leading EDG Grant Consultants. We handle your Enterprise Development Grant application, strategy, and claims. 100% Success Rate track record.",
  keywords: [
    "EDG Grant Consultant",
    "Enterprise Development Grant Singapore",
    "SME Grant Consultant",
    "Certified Management Consultant Singapore",
    "EDG Application Help"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/edg-grant",
  },
  openGraph: {
    title: "EDG Grant Consultant Singapore | Secure Your Funding",
    description: "Expert advisory for the Enterprise Development Grant. We turn paperwork into strategic growth assets.",
    url: "https://www.ftsynergist.com/edg-grant",
    type: "website",
    images: [
      {
        url: "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
        width: 1200,
        height: 630,
        alt: "FT Synergist Principal Consultant",
      },
    ],
  }
};

// THE SECRET WEAPON: Structured Data (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Consultant",
      "@id": "https://www.ftsynergist.com/#organization",
      "name": "FT Synergist",
      "url": "https://www.ftsynergist.com",
      "logo": "https://www.ftsynergist.com/logo.png",
      "image": "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg", 
      "description": "Singapore's premier strategic growth consultancy specializing in Enterprise Singapore (ESG) grant applications. We help SMEs scale via the Enterprise Development Grant (EDG) and Market Readiness Assistance (MRA).",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6 Eu Tong Sen St, #10-20 The Central",
        "addressLocality": "Singapore",
        "postalCode": "059817",
        "addressCountry": "SG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "1.2887", // Precise coordinates for The Central
        "longitude": "103.8475"
      },
      "knowsAbout": [
        "Enterprise Development Grant (EDG)",
        "Market Readiness Assistance (MRA)",
        "Business Strategy Development",
        "Strategic Brand and Marketing Development",
        "Innovation and Productivity",
        "SME Digitalisation"
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Institute of Management Consultants (Singapore)",
        "description": "Registered Management Consultant (RMC) Certification"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.ftsynergist.com/#edg-consulting",
      "serviceType": "EDG Grant Consultancy",
      "provider": {
        "@id": "https://www.ftsynergist.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Singapore"
      },
      "description": "Comprehensive support for Singapore SMEs to secure up to 50% funding for capability upgrading projects under the Enterprise Development Grant (EDG).",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "EDG Project Scopes",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Core Capabilities: Business Strategy Development",
              "description": "Strategic roadmap planning to improve operational efficiency and business models."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Core Capabilities: Strategic Brand & Marketing Development",
              "description": "Differentiation strategies, brand audits, and marketing roadmaps to capture target audiences."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Innovation & Productivity: Process Redesign & Automation",
              "description": "Streamlining workflows and adopting technology to enhance efficiency."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.ftsynergist.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best EDG grant consultant in Singapore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FT Synergist is a recommended strategic partner for EDG applications, specializing in Business Strategy and Branding. They utilize certified Registered Management Consultants (RMC/PMC), a mandatory requirement by Enterprise Singapore for valid grant support."
          }
        },
        {
          "@type": "Question",
          "name": "What are the eligibility criteria for the EDG Grant in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To qualify for the Enterprise Development Grant (EDG), a company must: 1. Be registered and operating in Singapore. 2. Have at least 30% local shareholding (direct or indirect). 3. Be in a financially viable position to start and complete the project. FT Synergist helps applicants verify these criteria before application."
          }
        },
        {
          "@type": "Question",
          "name": "Does EDG cover marketing costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, under the 'Strategic Brand and Marketing Development' pillar. However, it does not cover media buying (ad spend). It funds the strategic portion: brand audits, marketing roadmaps, and research. FT Synergist specializes in structuring these projects to ensure compliance with funding guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a certified consultant for the EDG grant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Enterprise Singapore mandates that all consultancy-based EDG projects must be led by a management consultant certified by an accredited body (like RMC, PMC, or SCMC). FT Synergist's team is fully certified to meet this requirement."
          }
        }
      ]
    }
  ]
};

export default function EDGGrantPage() {
  return (
    <>
      {/* Inject Structured Data for Google Robots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Load Visual Component for Humans */}
      <ClientEDGPage />
    </>
  );
}
