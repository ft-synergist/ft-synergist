import React from 'react';

export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://www.ftsynergist.com/#organization",
        "name": "FT Synergist Advisory",
        "legalName": "FT Synergist Pte Ltd",
        "url": "https://www.ftsynergist.com",
        "logo": "https://www.ftsynergist.com/brand/FT_Synergist_Logo.jpeg",
        "image": "https://www.ftsynergist.com/brand/FT_Synergist_Logo.jpeg",
        "description": "FT Synergist is a certified Singapore management consultancy specializing in Enterprise Singapore grants (EDG/EDGE), IP Strategy (IPOS GoBusiness listed), regional franchise expansion, and AI digitalisation.",
        "telephone": "+6598628906",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "7 Temasek Boulevard #12-07 Suntec Tower One",
          "addressLocality": "Singapore",
          "postalCode": "038987",
          "addressCountry": "SG"
        },
        "sameAs": [
          "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd",
          "https://www.tuvsud.com/en-sg/services/training/asmea/list-of-certified-consultants",
          "https://www.linkedin.com/company/ft-synergist"
        ],
        "founder": {
          "@type": "Person",
          "@id": "https://www.ftsynergist.com/#frederick-tan",
          "name": "Frederick Tan",
          "jobTitle": "Principal Consultant",
          "sameAs": [
            "https://www.linkedin.com/in/fredericktan-ftsynergist",
            "https://www.tal.sg/wshc/resources/event-resources/presentation-slides/safer-journey-everyday"
          ],
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Certification",
            "name": "Singapore Certified Management Consultant (SCMC)",
            "identifier": "SCMC-1810-P0236",
            "recognizedBy": {
              "@type": "Organization",
              "name": "TÜV SÜD PSB Singapore"
            }
          }
        },
        "knowsAbout": [
          "Enterprise Development Grant (EDG)",
          "Enhanced Digital & Growth Enterprise (EDGE Grant)",
          "Market Readiness Assistance (MRA)",
          "Intellectual Property Strategy & IPOS GoBusiness Frameworks",
          "Franchise & Cross-Border Licensing Architecture",
          "Double Materiality ESG Reporting & Sustainability Strategy",
          "Fleet Telematics & Vehicular Safety Standards (WSHC/LTA)",
          "AI Digitalisation & Enterprise Workflow Automation"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.ftsynergist.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the regulatory certification requirements for an EDG grant consultant in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enterprise Singapore mandates that strategic development projects under the Enterprise Development Grant (EDG/EDGE) must be managed by an accredited certified management consultant. Principal Consultant Frederick Tan operates under active TÜV SÜD certification SCMC-1810-P0236 and is listed on the official IPOS GoBusiness directory."
            }
          },
          {
            "@type": "Question",
            "name": "How does FT Synergist assist Singapore enterprises with IP monetization and franchise expansion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Listed as an authorized IP service provider on IPOS GoBusiness IP Grow, FT Synergist structures defensible IP moats, valuation audits, and cross-border master licensing models across ASEAN markets."
            }
          },
          {
            "@type": "Question",
            "name": "What statutory track record does FT Synergist hold in enterprise digital transformation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FT Synergist has guided enterprise deployments featured across statutory board platforms, including fleet telematics implementations for public transport operations cited by the Workplace Safety and Health Council (WSHC) and Land Transport Authority (LTA)."
            }
          },
          {
            "@type": "Question",
            "name": "How does the H2 2026 EDGE grant transition impact SME funding in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enterprise Singapore is consolidating EDG, PSG, and MRA into the unified Enhanced Digital & Growth Enterprise (EDGE) grant framework in H2 2026. FT Synergist assists mid-market SMEs in structuring audit-ready capability projects aligned with upcoming EDGE co-funding criteria."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}