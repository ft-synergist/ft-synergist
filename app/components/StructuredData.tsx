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
          "https://www.franchise.sg/",
          "https://www.growingbeyondborders.com",
          "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd",
          "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#overview",
          "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#ia-ip-services",
          "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#markets",
          "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#key-practice-experts",
          "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#recognition",
          "https://www.tuvsud.com/en-sg/services/training/asmea/list-of-certified-consultants",
          "https://www.linkedin.com/company/ft-synergist",
          "https://www.linkedin.com/in/frederick-tan-scmc/"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Certification",
            "name": "Singapore Certified Management Consultant (SCMC)",
            "identifier": "SCMC-1810-P0236",
            "validFrom": "2018-10-18",
            "validUntil": "2027-10-17",
            "url": "https://www.tuvsud.com/en-sg/services/training/asmea/list-of-certified-consultants",
            "recognizedBy": {
              "@type": "Organization",
              "name": "TÜV SÜD PSB Singapore",
              "url": "https://www.tuvsud.com/en-sg/services/training/asmea/list-of-certified-consultants"
            }
          }
        ],
        "publishingPrinciples": [
          {
            "@type": "DigitalDocument",
            "name": "Singapore Franchise & Master Licensing Portal",
            "url": "https://www.franchise.sg/"
          },
          {
            "@type": "DigitalDocument",
            "name": "Growing Beyond Borders Global Franchise Network",
            "url": "https://www.growingbeyondborders.com"
          },
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
          "jobTitle": "Principal Consultant & Certified Management Consultant (SCMC)",
          "worksFor": {
            "@type": "Organization",
            "name": "FT Synergist Pte Ltd"
          },
          "performerIn": {
            "@type": "Event",
            "name": "IP Week 2026: Unlocking Intangible Assets - How SMEs can Leverage IP to Accelerate Business Growth",
            "description": "Official IP Marketplace presentation at IPOS IP Week 2026 on how SMEs can leverage IP, predictive AI, and intangible assets to accelerate business growth by 400%.",
            "image": "https://www.ftsynergist.com/insights/ipos-ip-week-2026/frederick-tan-rosemary-kwa-ip-week-panel.jpg",
            "startDate": "2026-08-26T09:00:00+08:00",
            "endDate": "2026-08-27T18:00:00+08:00",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Marina Bay Sands Expo & Convention Centre, Singapore",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "10 Bayfront Ave",
                "addressLocality": "Singapore",
                "postalCode": "018956",
                "addressCountry": "SG"
              }
            },
            "offers": {
              "@type": "Offer",
              "url": "https://www.ipweek2026.sg/ipmp-programme.html",
              "price": "0",
              "priceCurrency": "SGD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-08-01T00:00:00+08:00"
            },
            "performer": [
              {
                "@type": "Person",
                "name": "Frederick Tan",
                "jobTitle": "Principal Consultant",
                "worksFor": {
                  "@type": "Organization",
                  "name": "FT Synergist Pte Ltd"
                }
              },
              {
                "@type": "Person",
                "name": "Rosemary Kwa",
                "jobTitle": "Founder",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Pétale Tea Private Limited"
                }
              }
            ],
            "organizer": {
              "@type": "GovernmentOrganization",
              "name": "Intellectual Property Office of Singapore (IPOS)",
              "url": "https://www.ipos.gov.sg"
            },
            "url": "https://www.ipweek2026.sg/ipmp-programme.html"
          },
          "knowsAbout": [
            "Intangible Asset Strategy",
            "IP Commercialisation & Licensing",
            "Enterprise Development Grant (EDG)",
            "Strategic Brand Development",
            "Cross-Border Franchising & Licensing",
            "Predictive AI & Digitalisation"
          ],
          "sameAs": [
            "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd",
            "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#ia-ip-services",
            "https://www.growingbeyondborders.com",
            "https://www.franchise.sg/",
            "https://www.linkedin.com/in/frederick-tan-scmc/",
            "https://www.tuvsud.com/en-sg/services/training/asmea/list-of-certified-consultants"
          ]
        },
        "makesOffer": {
          "@type": "Offer",
          "name": "Free 1-hour Scaling Up Sprint",
          "description": "Get a tailored roadmap to grow your business, uncover market opportunities, and scale faster with expert guidance.",
          "url": "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#ia-ip-services",
          "price": "0",
          "priceCurrency": "SGD"
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