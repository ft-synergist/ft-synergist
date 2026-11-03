import { Metadata } from "next";
import ClientEDGEPage from "@/components/ClientEDGEPage";
import Script from "next/script";

// protected-keywords (AGENTS.md §6): literal terms to diff before any title/description change.
// Approved 3 Nov 2026: "Enterprise Singapore's EDGE Grant" phrase removed from description.
const protectedKeywords = ["EDGE Grant Singapore", "EDGE Grant eligibility", "EDG", "MRA", "PSG", "70%", "S$100,000", "SCMC"];

export const metadata: Metadata = {
  title: "EDGE Grant Singapore 2026: Eligibility & 70% Funding", // layout template appends " | FT Synergist"
  description: "Check EDGE Grant eligibility: up to 70% support and S$100,000 annual cap. Replaces EDG, MRA & PSG from 30 Sept 2026. Speak to a certified SCMC consultant.",
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
    title: "EDGE Grant Singapore 2026: Eligibility & 70% Funding | FT Synergist",
    description: "Check EDGE Grant eligibility: up to 70% support and S$100,000 annual cap. Replaces EDG, MRA & PSG from 30 Sept 2026. Speak to a certified SCMC consultant.",
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
          "text": "EDG, MRA, and PSG officially ceased on 29 September 2026. From 30 September 2026 onwards, the new EDGE Grant is the sole application pathway for business grant support. Ongoing applications and approved projects under EDG, MRA, and PSG will continue to be processed and supported through project completion and claim disbursement. After 30 September 2026, no new applications are accepted under legacy schemes."
        }
      },
      {
        "@type": "Question",
        "name": "What is the EDGE Grant and what does it replace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The EDGE Grant is Enterprise Singapore's unified grant framework launched on 30 September 2026. It streamlines and consolidates the Enterprise Development Grant (EDG), Market Readiness Assistance (MRA), and Productivity Solutions Grant (PSG) into a single application pathway covering 8 business areas and over 150 activities."
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
          "text": "The EDGE Grant provides up to 50% co-funding support for SMEs and up to 30% for non-SMEs on general capability activities, and up to 70% support for SMEs and up to 50% for non-SMEs on internationalisation and sustainability activities, disbursed on a reimbursement basis. Each company has an annual grant cap of up to S$100,000 across all activities combined, refreshed on 1 April each year. Within this S$100,000 cap, up to S$30,000 can be used for single-function digital solutions, integrated enterprise systems, and pre-scoped equipment."
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
          "text": "EDGE covers 8 business areas across over 150 activities: Automation, Digitalisation, Business Strategy, Financial Management, Innovation, Internationalisation, Standards, and Sustainability."
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
          "text": "Yes, businesses that have previously applied for or received funding under EDG, MRA, or PSG can apply for EDGE. The grant caps under EDGE do not take into account previous grant utilisation under legacy schemes. However, EDGE support is intended strictly for new projects; businesses cannot seek grant support for the same project already supported under legacy schemes."
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