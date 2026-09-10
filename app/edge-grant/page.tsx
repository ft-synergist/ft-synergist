import { Metadata } from "next";
import ClientEDGEPage from "@/components/ClientEDGEPage";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EDGE Grant Singapore 2026 | EDG, MRA & PSG Consolidation",
  description: "EDG, MRA and PSG cease 29 Sept 2026. Learn what the new EDGE Grant covers, support levels, and how to prepare — from FT Synergist.",
  keywords: [
    "EDGE Grant Singapore 2026",
    "EDGE Grant Singapore",
    "EDG MRA PSG replacement",
    "Productivity Solutions Grant PSG EDGE",
    "Enterprise Singapore EDGE Grant",
    "EDGE Grant eligibility",
    "EDGE Grant support levels",
    "EDGE Grant cap",
    "SCMC Consultant"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/edge-grant",
  },
  openGraph: {
    title: "EDGE Grant Singapore 2026 | EDG, MRA & PSG Consolidation",
    description: "EDG, MRA and PSG cease 29 Sept 2026. Learn what the new EDGE Grant covers, support levels, and how to prepare — from FT Synergist.",
    url: "https://www.ftsynergist.com/edge-grant",
    type: "website",
    images: [
      {
        url: "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
        width: 1200,
        height: 630,
        alt: "Frederick Tan - Certified Management Consultant",
      },
    ],
  },
};

export default function EDGEGrantPage() {
  // Official Enterprise Singapore FAQ structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are the EDG, MRA and PSG schemes still available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, EDG, MRA, and PSG remain available for applications until 29 September 2026. Applications submitted before 30 September 2026 will continue to be assessed based on the requirements of the relevant scheme. Ongoing projects under these three schemes will not be affected and will be supported until project completion and claim disbursement. After 30 September 2026, no new application will be accepted under these schemes, and the EDGE Grant becomes the sole application pathway."
        }
      },
      {
        "@type": "Question",
        "name": "What is the EDGE Grant and what does it replace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The EDGE Grant is Enterprise Singapore's unified grant framework launching on 30 September 2026. It streamlines and consolidates the Enterprise Development Grant (EDG), Market Readiness Assistance (MRA), and Productivity Solutions Grant (PSG) into a single, simplified application pathway."
        }
      },
      {
        "@type": "Question",
        "name": "What does EDGE stand for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EDGE is not an acronym. Enterprise Singapore chose the name EDGE to convey the intent of the support: enabling Singapore enterprises to have a competitive edge over their competitors."
        }
      },
      {
        "@type": "Question",
        "name": "What are the funding support levels and grant caps under the EDGE Grant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The EDGE Grant provides up to 70% of qualifying costs for SMEs and up to 50% for non-SMEs, disbursed on a reimbursement basis. Each company has an annual grant cap of up to S$100,000 in total grant support per company per year across all activities combined, which resets annually. Within this S$100,000 cap, up to S$30,000 can be used for single-function digital solutions, integrated enterprise systems, and selected automation activities."
        }
      },
      {
        "@type": "Question",
        "name": "How is the Productivity Solutions Grant (PSG) folded into EDGE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PSG ceases on 29 September 2026 and is folded into the EDGE Grant alongside EDG and MRA. Pre-scoped IT solutions and automation equipment previously supported under PSG will now be accessed within the Automation and Digitalisation business areas of EDGE, subject to an allocation of up to S$30,000 within the overall S$100,000 annual grant cap."
        }
      },
      {
        "@type": "Question",
        "name": "What business areas and activities does EDGE cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EDGE covers 8 business areas across 100+ activities: Automation, Digitalisation, Business Strategy, Financial Management, Innovation, Internationalisation, Standards, and Sustainability."
        }
      },
      {
        "@type": "Question",
        "name": "Who is eligible to apply for the EDGE Grant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Applicants must be business entities registered and operating in Singapore with at least 30% local shareholding held by Singaporean(s) and/or Singapore PR(s). Other requirements may apply depending on the specific supportable activity."
        }
      },
      {
        "@type": "Question",
        "name": "Can a business apply for EDGE if it has previously applied for or received funding under EDG, MRA, or PSG?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, businesses that have previously applied for or received funding under EDG, MRA, or PSG can apply for EDGE."
        }
      },
      {
        "@type": "Question",
        "name": "Can vendors be changed after an EDGE application is submitted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Change requests are only allowed for changes to project end date and claim due date. Should businesses wish to make any other changes to the project, they must terminate the existing project on the Business Grants Portal (BGP) and submit a new application."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="edge-page-faq-schema"
        strategy="afterInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ClientEDGEPage />
    </>
  );
}