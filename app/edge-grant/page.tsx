import { Metadata } from "next";
import ClientEDGEPage from "@/components/ClientEDGEPage";

// protected-keywords (AGENTS.md §6): literal terms to diff before any title/description change.
// Approved 3 Nov 2026: "Enterprise Singapore's EDGE Grant" phrase removed from description.
const protectedKeywords = ["EDGE Grant Singapore", "EDGE Grant eligibility", "EDG", "MRA", "PSG", "70%", "S$100,000", "SCMC"];

export const metadata: Metadata = {
  title: "EDGE Grant Singapore: Eligibility & 50%–70% Support", // layout template appends " | FT Synergist"
  description: "EDGE Grant eligibility, support levels (50%–70%, S$100,000/yr cap) & how to apply on BGP. Replaced EDG, MRA & PSG. SCMC (SS 680) consultant: SCMC-1810-P0236.",
  keywords: [
    "EDGE Grant Singapore 2026",
    "EDGE Grant Singapore",
    "EDGE Grant eligibility",
    "EDGE Grant support level",
    "EDGE Grant requirements",
    "how to apply for EDGE Grant",
    "EDGE Grant approved activities",
    "EDGE Grant qualifying costs",
    "EDG MRA PSG replacement",
    "Enterprise Singapore EDGE Grant",
    "SCMC Consultant"
  ],
  alternates: {
    canonical: "https://www.ftsynergist.com/edge-grant",
  },
  openGraph: {
    title: "EDGE Grant Singapore: Eligibility & 50%–70% Support | FT Synergist",
    description: "EDGE Grant eligibility, support levels (50%–70%, S$100,000/yr cap) & how to apply on BGP. Replaced EDG, MRA & PSG. SCMC (SS 680) consultant: SCMC-1810-P0236.",
    url: "https://www.ftsynergist.com/edge-grant",
    type: "website",
    images: [
      {
        url: "https://www.ftsynergist.com/Fred_Corp_Pic_Official.jpeg",
        width: 1200,
        height: 630,
        alt: "Frederick Tan - Principal Management Consultant, FT Synergist (SCMC-1810-P0236)",
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
          "text": "PSG ceased on 29 September 2026 and is folded into the EDGE Grant alongside EDG and MRA. Pre-scoped IT solutions and automation equipment previously supported under PSG are accessed within the Automation and Digitalisation business areas of EDGE, subject to an allocation of up to S$30,000 within the overall S$100,000 annual grant cap."
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
          "text": "To qualify for the EDGE Grant, a business entity must: (1) be registered and operating in Singapore on a for-profit basis, (2) have at least 30% ownership (direct or indirect) by Singaporean(s) and/or Singapore PR(s), determined by the ultimate individual ownership, and (3) not have started work or made any payment or deposit to a supplier, vendor, or third party prior to application submission. SMEs are defined as companies with group annual sales turnover of not more than S$100 million or group employment of not more than 200 workers."
        }
      },
      {
        "@type": "Question",
        "name": "How do I apply for the EDGE Grant on the Business Grants Portal (BGP)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official EDGE Grant application follows 8 steps: (1) Prepare your documents (including vendor proposal, quotation, and SS 680 certification where required), (2) Identify a suitable vendor, (3) Apply directly on the Business Grants Portal (BGP) via your company's Corppass account (third-party companies are not permitted to apply for or manage the grant on behalf of the applicant), (4) Receive and accept your Letter of Offer (LOF), (5) Complete your project deliverables, (6) Prepare your claim submission and payment method, (7) Submit your claim on BGP, and (8) Receive reimbursement via PayNow Corporate (14 working days after claim approval) or GIRO (up to eight weeks after claim approval)."
        }
      },
      {
        "@type": "Question",
        "name": "What are the qualifying and non-supported costs under the EDGE Grant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For consultancy-led activities such as Business Strategic Planning and International Branding, supported costs cover professional service costs (requiring an SAC-accredited SS 680 management consultant). Non-supported costs include Goods and Services Tax (GST), expenses relating to regulatory compliance and updates to Standard Operating Procedures, and—for International Branding—activities aimed at generating domestic business opportunities as well as operational expenditure such as collateral production, website development, social media management, and marketing campaigns."
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
      <script
        id="edge-page-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ClientEDGEPage />
    </>
  );
}