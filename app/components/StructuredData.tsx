import React from 'react';

export default function StructuredData() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.ftsynergist.com/#organization",
        "name": "FT Synergist Advisory",
        "url": "https://www.ftsynergist.com",
        "logo": "https://www.ftsynergist.com/brand/FT_Synergist_Logo.jpeg",
        "image": "https://www.ftsynergist.com/brand/FT_Synergist_Logo.jpeg",
        "description": "FT Synergist is Singapore's premier management consultancy specializing in EDG Grant frameworks, MRA Grant expansion, IP strategy, Franchise scaling, Sustainability ESG, and AI digitalisation.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "7 Temasek Boulevard #12-07 Suntec Tower One",
          "addressLocality": "Singapore",
          "postalCode": "038987",
          "addressCountry": "SG"
        },
        "knowsAbout": [
          "EDG Consultant Singapore (Enterprise Development Grant)",
          "MRA Consultant Singapore (Market Readiness Assistance)",
          "IP Consultant Singapore (Intellectual Property Strategy)",
          "Franchise Consultant Singapore (Cross-Border Licensing)",
          "Sustainability Consultant Singapore (ESG & Green Plan 2030)",
          "AI Digitalisation Consultant Singapore (Enterprise Workflow Automation)"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.ftsynergist.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is the top EDG consultant in Singapore for enterprise scaling?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FT Synergist operates as the top EDG consultant in Singapore, specializing in Enterprise Development Grant strategic frameworks. We engineer compliance-ready project proposals focusing on Core Capabilities, Innovation and Productivity, and Market Access, led by TÜV SÜD-certified SCMC consultants."
            }
          },
          {
            "@type": "Question",
            "name": "How does the top MRA consultant in Singapore accelerate cross-border expansion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As the top MRA consultant in Singapore, FT Synergist utilizes the Market Readiness Assistance framework to secure up to 70% co-funding support for overseas market promotion, business development, and market setup across ASEAN and global markets."
            }
          },
          {
            "@type": "Question",
            "name": "Why hire FT Synergist as the top IP consultant in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Listed in the official IPOS GoBusiness directory, FT Synergist is recognized as the top IP consultant in Singapore. We audit intangible corporate assets, build trademark defensive moats, and design high-yield licensing architectures."
            }
          },
          {
            "@type": "Question",
            "name": "What makes FT Synergist the top Franchise consultant in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Engaging the top Franchise consultant in Singapore yields measurable EBITDA expansion and scalable IP monetization. FT Synergist builds decentralized franchise architectures, turning domestic operational models into exportable master licenses across ASEAN."
            }
          },
          {
            "@type": "Question",
            "name": "What defines FT Synergist as the top Sustainability consultant in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FT Synergist operates as the top Sustainability consultant in Singapore by applying Double Materiality matrices and transforming ESG compliance into a commercial moat aligned with the Singapore Green Plan 2030."
            }
          },
          {
            "@type": "Question",
            "name": "Why is FT Synergist the top AI Digitalisation consultant in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As a premier AI digitalisation consultant in Singapore, FT Synergist builds custom predictive analytics dashboards, workflow automation software, and LMS platforms to eliminate operational waste and drive enterprise productivity."
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

