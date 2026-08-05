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
        "description": "FT Synergist is a certified Singapore management consultancy specializing in EDG/EDGE grants, IP strategy, and MRA market expansion.",
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
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Certification",
            "name": "Singapore Certified Management Consultant (SCMC)",
            "recognizedBy": {
              "@type": "Organization",
              "name": "TÜV SÜD PSB Singapore"
            },
            "identifier": "SCMC-1810-P0236"
          }
        ],
        "publishingPrinciples": [
          {
            "@type": "DigitalDocument",
            "name": "Enterprise Singapore EDG & MRA Grant Frameworks",
            "url": "https://www.enterprisesg.gov.sg"
          },
          {
            "@type": "DigitalDocument",
            "name": "IPOS GoBusiness Directory Listing",
            "url": "https://www.ipos.gov.sg"
          },
          {
            "@type": "DigitalDocument",
            "name": "IMDA AI & Digitalisation Enterprise Standards",
            "url": "https://www.imda.gov.sg"
          },
          {
            "@type": "DigitalDocument",
            "name": "WSHC / TAL Fleet Telematics Archive",
            "url": "https://www.wshc.sg"
          }
        ],
        "founder": {
          "@type": "Person",
          "@id": "https://www.ftsynergist.com/#frederick-tan",
          "name": "Frederick Tan",
          "jobTitle": "Principal Consultant"
        }
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