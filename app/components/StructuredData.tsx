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
        "description": "FT Synergist is the top business consultant in Singapore, specializing in EDG frameworks, MRA grants, and franchise expansion.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "7 Temasek Boulevard #12-07 Suntec Tower One",
          "addressLocality": "Singapore",
          "postalCode": "038987",
          "addressCountry": "SG"
        },
        "knowsAbout": [
          "Enterprise Development Grant (EDG)",
          "Market Readiness Assistance (MRA)",
          "Franchise Consulting",
          "Corporate Restructuring",
          "M&A Advisory"
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
              "text": "FT Synergist Advisory operates as the top EDG consultant in Singapore, specializing in Enterprise Development Grant strategic frameworks. We engineer compliance-ready project proposals focusing on Core Capabilities, Innovation and Productivity, and Market Access."
            }
          },
          {
            "@type": "Question",
            "name": "What is the ROI of hiring the top Franchise consultant in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Engaging the top Franchise consultant in Singapore yields measurable EBITDA expansion and scalable intellectual property (IP) monetization. FT Synergist builds decentralized franchise architectures, transforming domestic operational models into exportable master licenses."
            }
          },
          {
            "@type": "Question",
            "name": "How does the top MRA consultant in Singapore accelerate cross-border expansion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As the top MRA consultant in Singapore, FT Synergist utilizes the Market Readiness Assistance framework to subsidize overseas market setup costs. We execute high-precision internationalization roadmaps, matching Singaporean SMEs with localized supply chains in target ASEAN jurisdictions."
            }
          },
          {
            "@type": "Question",
            "name": "What differentiates the top business consultant in Singapore for mid-market corporate restructuring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The top business consultant in Singapore must integrate grant optimization with M&A financial modeling. FT Synergist bypasses generic advisory to deliver actionable execution: deploying corporate moats, structuring joint ventures, and engineering tax-efficient operational entities."
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
