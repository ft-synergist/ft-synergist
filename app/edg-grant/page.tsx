import { Metadata } from "next";
import ClientEDGPage from "@/components/ClientEDGPage";

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

// THE "ALL OUT" SCHEMA (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Consultant",
      "@id": "https://www.ftsynergist.com/edg-grant/#consultant",
      "name": "FT Synergist",
      "url": "https://www.ftsynergist.com",
      "logo": "https://www.ftsynergist.com/logo.png",
      "image": "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
      "description": "Singapore's premier strategic growth consultancy specializing in Enterprise Singapore (ESG) grant applications. Led by Frederick Tan, a TÜV SÜD Singapore Certified Management Consultant (SCMC).",
      "priceRange": "$$$",
      "telephone": "+65 9862 8906", 
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6 Eu Tong Sen St, #10-20 The Central",
        "addressLocality": "Singapore",
        "postalCode": "059817",
        "addressCountry": "SG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "1.2887",
        "longitude": "103.8475"
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
        "Enterprise Development Grant (EDG)",
        "Business Strategy Development",
        "Strategic Brand and Marketing Development",
        "Innovation and Productivity",
        "Market Readiness Assistance (MRA)",
        "Overseas Market Promotion"
      ],
      "employee": {
        "@type": "Person",
        "@id": "https://www.ftsynergist.com/edg-grant/#frederick-tan",
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
      "@id": "https://www.ftsynergist.com/edg-grant/#service",
      "serviceType": "EDG Grant Consultancy",
      "provider": {
        "@id": "https://www.ftsynergist.com/edg-grant/#consultant"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Singapore"
      },
      "description": "Comprehensive support for Singapore SMEs to secure funding. Projects led by SCMC-certified consultants as required by Enterprise Singapore.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Government Grant Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "EDG: Business Strategy Development",
              "description": "Strategic roadmap planning to improve operational efficiency and business models."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "EDG: Strategic Brand & Marketing Development",
              "description": "Differentiation strategies, brand audits, and marketing roadmaps."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "MRA: Market Readiness Assistance",
              "description": "Funding for overseas market setup, business matching, and market promotion."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.ftsynergist.com/edg-grant/#faq-page",
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
    }
  ]
};

export default function EDGGrantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientEDGPage />
    </>
  );
}
