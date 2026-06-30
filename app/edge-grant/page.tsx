import { Metadata } from "next";
import ClientEDGEPage from "@/components/ClientEDGEPage";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Consultant",
      "@id": "https://www.ftsynergist.com/edge-grant/#consultant",
      "name": "FT Synergist",
      "url": "https://www.ftsynergist.com",
      "logo": "https://www.ftsynergist.com/logo.png",
      "image": "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
      "description": "Singapore's premier strategic growth consultancy specializing in Enterprise Singapore (ESG) grant applications under the H2 2026 EDGE framework. Led by Frederick Tan, a TÜV SÜD Singapore Certified Management Consultant (SCMC).",
      "priceRange": "$$$",
      "telephone": "+65 9862 8906", 
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7 Temasek Boulevard, #12-07 Suntec Tower One",
        "addressLocality": "Singapore",
        "postalCode": "038987",
        "addressCountry": "SG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "1.2936",
        "longitude": "103.8584"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ft-synergist",
        "https://www.facebook.com/ftsynergist" 
      ],
      "knowsAbout": [
        "Enterprise Development and Growth for Enterprises (EDGE)",
        "Enterprise Development Grant (EDG)",
        "Business Strategy Development",
        "Strategic Brand and Marketing Development",
        "Innovation and Productivity",
        "Market Readiness Assistance (MRA)",
        "Overseas Market Promotion"
      ],
      "employee": {
        "@type": "Person",
        "@id": "https://www.ftsynergist.com/edge-grant/#frederick-tan",
        "name": "Frederick Tan",
        "jobTitle": "Principal Consultant",
        "honorificSuffix": "SCMC",
        "image": "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
        "sameAs": [
          "https://www.linkedin.com/in/tanfrederick/"
        ],
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "Singapore Certified Management Consultant (SCMC)",
            "recognizedBy": {
              "@type": "Organization",
              "name": "TÜV SÜD PSB"
            },
            "identifier": "SCMC-1810-P0236"
        }
      },
      "memberOf": {
        "@type": "Organization",
        "name": "TÜV SÜD PSB",
        "description": "Singapore Certified Management Consultant (SCMC) Registry"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.ftsynergist.com/edge-grant/#service",
      "serviceType": "EDGE Grant Consultancy",
      "provider": {
        "@id": "https://www.ftsynergist.com/edge-grant/#consultant"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Singapore"
      },
      "description": "Comprehensive support for Singapore SMEs to secure H2 2026 EDGE grant funding. Projects directed by certified management consultants as mandated by Enterprise Singapore.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Government Grant Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "EDGE: Core Capabilities Development",
              "description": "Business model transformation, operational strategy, and brand expansion."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "EDGE: Innovation & Productivity",
              "description": "Process optimization, smart automation, product development, and R&D."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "EDGE: Market Access Expansion",
              "description": "Regional setup, mergers & acquisitions (M&A) strategy, and international licensing/franchising."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.ftsynergist.com/edge-grant/#faq-page",
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
    }
  ]
};

export default function EDGEGrantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientEDGEPage />
    </>
  );
}
