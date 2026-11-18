"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Script from "next/script";
import {
  ShieldCheck,
  ServerCrash,
  ZapOff,
  Globe,
  Ship,
  ArrowRight,
  Download,
  Lock,
  X,
  FileText,
} from "lucide-react";
import type { CitationItem } from "@/app/components/CitationFootnotes";
import { ScrollDwellTrigger } from "@/components/ScrollDwellTrigger";
import { PillarHero } from "@/components/pillar/PillarHero";
import { PillarFAQSection, PillarFAQItem } from "@/components/pillar/PillarFAQSection";
import { PillarConversionBanner } from "@/components/pillar/PillarConversionBanner";
import { SprintBookingModal } from "@/components/pillar/SprintBookingModal";
import { SprintKey } from "@/components/pillar/sprintConfig";
import {
  PILLAR_PAGE_SHELL,
  PILLAR_MAIN,
  PILLAR_H2,
  PILLAR_BODY,
  PILLAR_CARD,
  PILLAR_GOVERNANCE_CARD,
} from "@/components/pillar/tokens";

const CitationFootnotes = dynamic(() => import("@/app/components/CitationFootnotes"), { ssr: false });
const GeoSemanticAnchors = dynamic(() => import("@/app/components/GeoSemanticAnchors"), { ssr: false });

const PDF_DOWNLOAD_URL = "/ft-synergist-sme-bcp-erm-resilience-roadmap-2026.pdf";

const DownloadGate = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      setErrorMsg("Please accept the PDPA consent statement to proceed.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      reportName: "SME Business Continuity Plan (BCP) & ERM Roadmap (20-Slide Executive Report)",
      consent: true,
      pagePath: "/insights/sme-business-continuity-plan-singapore",
    };

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to capture lead");
      }

      if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "lead_form_submit", {
          event_category: "lead_generation",
          event_label: "SME Business Continuity Plan (BCP) & ERM Roadmap",
          lead_type: "pdf_download",
          page_path: "/insights/sme-business-continuity-plan-singapore",
        });
      }

      window.open(PDF_DOWNLOAD_URL, "_blank");
      onClose();
    } catch (error) {
      console.error("Lead submission error:", error);
      window.open(PDF_DOWNLOAD_URL, "_blank");
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-neutral-900 rounded-none shadow-2xl overflow-hidden border border-neutral-800 border-t-4 border-[#8F801B]">
        <div className="bg-black p-8 text-center border-b border-neutral-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            aria-label="Close download modal"
          >
            <X size={24} />
          </button>
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#8F801B]/10 border border-[#8F801B]/20">
            <Lock className="w-8 h-8 text-[#8F801B]" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-white mb-2">
            Unlock 20-Slide Executive Report (PDF)
          </h3>
          <p className="text-neutral-400 text-sm">
            Enter your business details to download the complete 20-slide SME Business Continuity Plan (BCP), 4-Vector Disruption Matrix, and 50% EDGE Grant ERM Roadmap.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4 bg-black">
          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
              Full Name
            </label>
            <input
              required
              name="name"
              type="text"
              placeholder="e.g. Frederick Tan"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
              Work Email
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
              Company Name
            </label>
            <input
              required
              name="company"
              type="text"
              placeholder="e.g. Enterprise Pte Ltd"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer text-xs text-neutral-400 leading-relaxed">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded-none bg-neutral-900 border-neutral-700 text-[#8F801B] focus:ring-0 focus:ring-offset-0 accent-[#8F801B]"
              />
              <span>
                I consent to FT Synergist collecting my details to provide strategic reports and business updates in accordance with the{" "}
                <Link href="/privacy-policy" target="_blank" className="text-[#8F801B] underline hover:text-white">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errorMsg && <p className="text-red-400 text-xs mt-1">{errorMsg}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-none disabled:opacity-70 disabled:cursor-not-allowed text-xs cursor-pointer"
          >
            {isSubmitting ? (
              "Unlocking PDF..."
            ) : (
              <>
                Download Executive PDF <Download className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const citationsData: CitationItem[] = [
  {
    id: 1,
    label: "Channel NewsAsia (CNA) — Microsoft Outlook Outage: Risks, Limitations & BCP Gaps",
    context: "Analysis of the global Microsoft 365 and Outlook outage across 74 countries (including Singapore banks and enterprises), featuring commentary by Prof. Boh Wai Fong (NTU) on shared cloud infrastructure risks, backup vs. live availability limitations, and post-recovery backlog blind spots.",
    url: "https://www.channelnewsasia.com/singapore/microsoft-outlook-outage-risks-limitations-gaps-6549346",
  },
  {
    id: 2,
    label: "QBE Singapore SME Survey — Business Interruption & Cyber Preparedness",
    context: "Empirical survey of Singapore SMEs showing 74%–77% express moderate-to-high concern over business interruption income loss while only 22%–23% hold active protection, and 19% lack formal processes against digital disruption.",
    url: "https://www.qbe.com/sg",
  },
  {
    id: 3,
    label: "Singapore Business Federation (SBF) — National Business Survey",
    context: "Annual benchmark of Singapore enterprise priorities tracking cash-flow resilience, operational continuity, and supply-chain diversification across volatile macroeconomic cycles.",
    url: "https://www.sbf.org.sg",
  },
  {
    id: 4,
    label: "Channel NewsAsia — Equinix SG3 Data Centre Chilled-Water Cooling Incident (14 Oct 2023)",
    context: "Documented physical facility cooling failure in Singapore that disrupted DBS and Citibank digital banking, ATMs, and cashless payment rails for 12 to 24 hours.",
    url: "https://www.channelnewsasia.com/singapore/dbs-citibank-outage-equinix-data-centre-cooling-system-3846231",
  },
  {
    id: 5,
    label: "Enterprise Singapore — EDGE Grant: Financial Management & Business Strategy",
    context: "Official post-30 Sep 2026 EDGE Grant activities: 'Enterprise Risk Management and Internal Controls' and 'Business Strategic Planning' (both up to 50% SME / 30% non-SME support, 10-week outcome, SS 680 certification required).",
    url: "https://cp.enterprisesg.gov.sg/financial-support/edge-grant#tab=Financial+Management",
  },
  {
    id: 6,
    label: "IPOS GoBusiness IP Grow Directory — FT Synergist Pte Ltd",
    context: "Official directory listing for FT Synergist Pte Ltd across Branding Strategy, Innovation Consultancy, IP Brokerage and Licensing, and IP Strategy Consulting.",
    url: "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd",
  },
];

const disruptionMatrix = [
  {
    icon: ServerCrash,
    vector: "Vector 1: Cloud & SaaS Monoculture Outages",
    incidents: "Microsoft 365 / Outlook Global Outage (74 countries incl. Singapore) · CrowdStrike Falcon Sensor Outage (19 Jul 2024, ~8.5M Windows devices)",
    smeImpact:
      "SMEs rely heavily on single-vendor cloud suites (Outlook, Teams, SharePoint, OneDrive) for cost efficiency. When shared routing or authentication fails, live quotations, purchase orders, and client communications halt simultaneously—even if historical file backups exist.",
    mitigation:
      "Out-of-band communication protocols, secondary communication continuity gateways, and post-outage backlog triage playbooks.",
  },
  {
    icon: ZapOff,
    vector: "Vector 2: Energy, Cooling & Physical Facility Failures",
    incidents: "Equinix SG3 Data Centre Chilled-Water Cooling Failure (14 Oct 2023, Singapore) · Northern Vietnam Industrial Grid Rolling Blackouts (May–Jun 2023)",
    smeImpact:
      "During the October 2023 Equinix SG3 cooling failure, rising data-hall temperatures forced hardware shutdowns that disrupted DBS and Citibank digital banking, ATMs, and PayNow/card rails for 12–24 hours—leaving Singapore retail and F&B SMEs unable to process cashless payments on a Saturday. In regional manufacturing hubs, heatwave grid cuts halted factory lines.",
    mitigation:
      "Multi-acquirer payment rail redundancy (independent QR/terminal acquirers), offline POS fallback SOPs, and multi-site production tolerances.",
  },
  {
    icon: Globe,
    vector: "Vector 3: Sudden Political Export Bans & Resource Nationalism",
    incidents: "Malaysia Live Chicken Export Ban (1 Jun – Oct 2022, 34% of Singapore supply / ~3.6M chickens/month) · Indonesia Palm Oil Export Ban (Apr–May 2022)",
    smeImpact:
      "Overnight export prohibitions caught single-source F&B operators, central kitchens, and food manufacturers unprepared—forcing temporary closures or emergency margin compression while scrambling for alternative supply.",
    mitigation:
      "Pre-qualified dual-origin supplier matrices (e.g., ASEAN + Brazil/Thailand/Australia), formulation flexibility, and inventory buffer triggers.",
  },
  {
    icon: Ship,
    vector: "Vector 4: Tariff Walls & Maritime Chokepoints",
    incidents: "Red Sea / Suez Canal Rerouting (200%–300% spot container spikes, +10–14 days transit) · US–China & Regional Tariff Shifts",
    smeImpact:
      "Wholesale, engineering, and product SMEs reliant on single-country export manufacturing or fixed-price delivery contracts face severe working-capital strain when duties or transit lead times spike.",
    mitigation:
      "FT Synergist's PCBC 'Factory-in-Market' and regional licensing architecture—localising production and channel partnerships inside ASEAN (CAFTA 3.0) to insulate margins.",
  },
];

const faqItems: PillarFAQItem[] = [
  {
    q: "Why is cloud backup not the same as a Business Continuity Plan (BCP)?",
    a: "As highlighted during the Microsoft Outlook and 365 outage analysed by Channel NewsAsia and NTU researchers, cloud backups protect historical data against deletion or corruption, but do not provide live service availability. When a primary cloud suite goes down, staff may view old cached files but cannot send or receive new quotations, approvals, or customer orders, nor clear the post-recovery backlog without pre-tested out-of-band workflows.",
  },
  {
    q: "Isn't Business Continuity Planning (BCP) only for large MNCs with big budgets?",
    a: "No. In fact, large corporations have the balance-sheet buffers to absorb a 48-hour operational freeze or a single-market supply ban, whereas an SME operating on 30-to-60-day working capital cycles can face immediate cash-flow distress or lose a key enterprise contract. Furthermore, MNCs and Singapore government agencies increasingly require SME suppliers to demonstrate formal BCP and Enterprise Risk Management (ERM) readiness during tender qualification.",
  },
  {
    q: "How does Enterprise Singapore's EDGE Grant co-fund BCP and Enterprise Risk Management for SMEs?",
    a: "Under Enterprise Singapore's unified EDGE Grant (effective 30 September 2026), the 'Enterprise Risk Management and Internal Controls' activity under the Financial Management business area provides up to 50% support for SMEs and up to 30% support for non-SMEs (10-week application outcome, 12-month completion window, subject to the S$100,000 annual company cap). Eligible deliverables include a formal Risk Report, Reporting Template, ERM Manuals, and Control Self-Assessment. Engaging an SAC-accredited SS 680 certified management consultant is mandatory.",
  },
  {
    q: "How does BCP connect to supply-chain diversification and FT Synergist's PCBC Model?",
    a: "Operational resilience extends beyond IT recovery into supply-chain and market diversification. Through our proprietary PCBC Model (Product, Channel, Brand, Culture) and EDGE Business Strategic Planning / Internationalisation pathways, FT Synergist helps SMEs move from single-market dependency to multi-market supplier and channel networks across ASEAN.",
  },
];

export default function SMEBusinessContinuityPlanInsightPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<SprintKey>("business-strategy");

  const trackLead = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "generate_lead", {
        event_category: "engagement",
        event_label: "bcp_insight_sprint_booking_click",
        value: 1,
      });
    }
  };

  const handleOpenSprintModal = (preset?: SprintKey) => {
    setSelectedService(preset || "business-strategy");
    setIsModalOpen(true);
    trackLead();
  };

  return (
    <div className={PILLAR_PAGE_SHELL}>
      {/* JSON-LD ARTICLE & FAQPAGE SCHEMA */}
      <Script id="sme-bcp-insight-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline:
                "Why Business Continuity Planning (BCP) Is Not Just for Big Corporations: Lessons from Singapore's Cloud, Energy, and Supply-Chain Shocks",
              datePublished: "2026-11-18",
              dateModified: "2026-11-18",
              author: {
                "@type": "Person",
                name: "Frederick Tan",
                jobTitle: "Principal Management Consultant, FT Synergist",
              },
              publisher: {
                "@type": "Organization",
                name: "FT Synergist Pte Ltd",
                url: "https://www.ftsynergist.com",
              },
              mainEntityOfPage:
                "https://www.ftsynergist.com/insights/sme-business-continuity-plan-singapore",
            },
            {
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
          ],
        })}
      </Script>

      {/* LEAD-GATED EXECUTIVE PDF DOWNLOAD MODAL */}
      <DownloadGate isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
      <ScrollDwellTrigger onTrigger={() => setIsDownloadOpen(true)} />

      {/* UNIFIED PILLAR HERO */}
      <PillarHero
        badge="Executive Insight · Enterprise Risk Management & Operational Resilience"
        badgeIcon={<ShieldCheck className="h-3.5 w-3.5" />}
        h1Main="Why Business Continuity Planning (BCP) Is Not Only for Big Corporations"
        h1Accent="Lessons from Cloud, Energy & Geopolitical Shocks"
        subheader="From the global Microsoft Outlook outage and Singapore's Equinix SG3 data-centre cooling failure to overnight ASEAN export bans and tariff shifts—why lean SMEs face the sharpest concentration risk, and how to structure an EDGE Grant-supported continuity architecture."
        expertBoxLabel="Executive Summary — Frederick Tan, Principal Management Consultant, FT Synergist (SCMC-1810-P0236)"
        expertBoxContent={
          <>
            While <strong>74% to 77%</strong> of Singapore SMEs express moderate-to-high concern over income loss from business interruptions (QBE SME Survey), only <strong>22% to 23%</strong> hold active business interruption protection and <strong>19%</strong> operate without formal disruption safeguards. Treating Business Continuity Planning (BCP) as a big-budget MNC exercise leaves SMEs exposed to single-point failures across cloud software, payment rails, utility infrastructure, and cross-border supply chains—while disqualifying them from high-value enterprise and public-sector tenders.
          </>
        }
        ctaHeading="Audit Your Enterprise Risk & Continuity Gaps"
        ctaSubheading="Book a 60-minute Strategy Sprint with Principal Management Consultant Frederick Tan (SS 680 SCMC) or download the 20-slide Executive Report PDF."
        primaryCtaLabel="Book ERM & Continuity Sprint"
        onOpenSprintModal={() => handleOpenSprintModal("business-strategy")}
        policyNotice={
          <>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                  Downloadable 20-Slide Executive Report (PDF)
                </span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                Get the complete 20-slide <strong>SME Business Continuity &amp; ERM Roadmap PDF</strong>—including the 4-Vector Disruption Matrix, 5-Point Board Self-Audit, and <strong>50% EDGE Grant</strong> co-funding guide.
              </p>
            </div>
            <button
              onClick={() => setIsDownloadOpen(true)}
              className="shrink-0 bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold px-4 py-2 rounded-lg inline-flex items-center text-xs sm:text-sm cursor-pointer transition-all"
            >
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Download 20-Slide PDF
            </button>
          </>
        }
      />

      {/* MAIN EDITORIAL HOUSING */}
      <main className={PILLAR_MAIN}>
        {/* SECTION 1: THE MICROSOFT OUTLOOK OUTAGE & THE SME CLOUD ILLUSION */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className={PILLAR_H2}>
              1. What the Microsoft Outlook Outage Exposed About SME Continuity
            </h2>
            <p className={PILLAR_BODY}>
              When the global Microsoft 365 and Outlook outage disrupted organisations across 74 countries—including major banks and enterprises in Singapore—it exposed a structural flaw in how businesses think about continuity. As <a href="https://www.channelnewsasia.com/singapore/microsoft-outlook-outage-risks-limitations-gaps-6549346" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline hover:text-[#8F801B]">Channel NewsAsia reported with commentary from Nanyang Technological University (NTU) Professor Boh Wai Fong</a>, three critical blind spots caught organisations off guard:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={PILLAR_CARD}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A017] block mb-2">
                Blind Spot 01
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                The Cloud Monoculture Trap
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                SMEs consolidate email, chat, file storage, and workflows onto a single cloud suite for cost and administrative efficiency. Because these tools share underlying routing and authentication infrastructure, a single core failure disables internal coordination and external client communication simultaneously.
              </p>
            </div>

            <div className={PILLAR_CARD}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A017] block mb-2">
                Blind Spot 02
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                &ldquo;Backup&rdquo; Does Not Equal Live Continuity
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                Many SME owners assume cloud backups protect them from outages. Standard backups protect <em>historical files</em> against deletion or ransomware, but do nothing to keep <em>live incoming and outgoing quotations, purchase orders, or invoices</em> moving during a platform blackout.
              </p>
            </div>

            <div className={PILLAR_CARD}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A017] block mb-2">
                Blind Spot 03
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                The Post-Recovery Backlog Bottleneck
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                Traditional IT recovery plans stop once the server comes back online. They rarely define how a lean SME team will triage and clear 24 to 48 hours of stalled approvals, delayed dispatches, and customer service queues after restoration.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE 4-VECTOR DISRUPTION CHRONOLOGY (BEYOND IT) */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className={PILLAR_H2}>
              2. Beyond IT: 4 Vectors Where Singapore &amp; ASEAN Companies Were Caught Cold
            </h2>
            <p className={PILLAR_BODY}>
              Business continuity is not solely an IT department responsibility. Over the past four years, Singapore and regional SMEs have faced sudden operational halts across four distinct vectors—<strong>Cloud/IT</strong>, <strong>Energy &amp; Cooling Infrastructure</strong>, <strong>Political Export Bans</strong>, and <strong>Tariffs &amp; Maritime Chokepoints</strong>:
            </p>
          </div>

          <div className="space-y-4">
            {disruptionMatrix.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.vector} className={PILLAR_CARD}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#8F801B]/15 border border-[#8F801B]/40 text-[#C5A017] shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2.5">
                      <h3 className="font-heading font-bold text-white text-lg">
                        {item.vector}
                      </h3>
                      <p className="text-xs font-mono text-[#C5A017]">
                        Verified Incidents: {item.incidents}
                      </p>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed">
                        <strong className="text-white">Operational Impact:</strong> {item.smeImpact}
                      </p>
                      <p className="font-sans text-xs text-gray-400 border-t border-white/10 pt-2 leading-relaxed">
                        <strong className="text-gray-200">Continuity Countermeasure:</strong> {item.mitigation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: COMMERCIAL UPSIDE — BCP AS A TENDER & GROWTH ENGINE */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className={PILLAR_H2}>
              3. Why BCP Is a Revenue Enabler (Not Sunk Compliance Overhead)
            </h2>
            <p className={PILLAR_BODY}>
              SME founders often postpone Business Continuity Planning because they view it as defensive paperwork. In practice, documented continuity and risk governance directly unlock enterprise revenue and protect valuation across three real-world engagements from FT Synergist&apos;s portfolio:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={PILLAR_CARD}>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold block mb-2">
                B2B &amp; Public Tender Qualification
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                TNT Surveillance Pte Ltd
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                By designing structured business continuity plans, operational processes, and guiding the company to attain Enterprise Singapore&apos;s <strong>Singapore Quality Class (SQC)</strong> under the Business Excellence framework, FT Synergist helped position the company to secure a <strong>S$55 million</strong> new enterprise sales channel.
              </p>
            </div>

            <div className={PILLAR_CARD}>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold block mb-2">
                Multi-Market Supply &amp; Climate Resilience
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Sundat (S) Pte Ltd
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                Transformed an opportunistic cross-border trading posture into a structured 5-year multi-market roadmap across Australia, Vietnam, and Taiwan—diversifying supply chains and market exposure against regional regulatory and climate disruptions.
              </p>
            </div>

            <div className={PILLAR_CARD}>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold block mb-2">
                PCBC &ldquo;Factory-in-Market&rdquo; Tariff Insulation
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Wang Lao Ji / Project WALOVI
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                As analysed in our <Link href="/insights/wang-lao-ji-global-expansion-strategy" className="text-white underline hover:text-[#8F801B]">Wang Lao Ji Global Expansion study</Link>, establishing localised ASEAN production lines in Malaysia and Vietnam via strategic packaging alliances leverages CAFTA 3.0 tariff efficiency and insulates regional supply chains from shipping disruptions.
              </p>
            </div>
          </div>

          {/* DEDICATED PDF DOWNLOAD CALLOUT CARD */}
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-[#8F801B]/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#8F801B]/20 border border-[#8F801B]/40 text-[#C5A017] shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold">
                  Complimentary Boardroom Deck (20-Slide PDF)
                </span>
                <h3 className="font-heading text-xl font-bold text-white">
                  Download the 20-Slide SME Business Continuity &amp; ERM Roadmap
                </h3>
                <p className="font-sans text-sm text-gray-300">
                  Includes the 5 Resilience Lessons, 4-Vector Disruption Matrix, Portfolio Case Studies, and Enterprise Singapore EDGE Grant ERM co-funding parameters.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsDownloadOpen(true)}
              className="shrink-0 bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download 20-Slide PDF
            </button>
          </div>
        </section>

        {/* SECTION 4: EDGE GRANT CO-FUNDING FOR ERM, BCP & STRATEGIC DIVERSIFICATION */}
        <section className={PILLAR_GOVERNANCE_CARD}>
          <div className="flex flex-wrap items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#C5A017]" />
            <span className="text-xs uppercase tracking-wider font-bold text-[#C5A017]">
              Enterprise Singapore EDGE Grant Pathways (Effective 30 September 2026)
            </span>
          </div>
          <h2 className={PILLAR_H2}>
            4. How Singapore SMEs Co-Fund Continuity &amp; Risk Architecture Under EDGE
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed">
            Singapore SMEs do not need a multinational budget to build institutional-grade risk and continuity systems. Under Enterprise Singapore&apos;s unified <Link href="/edge-grant" className="text-white font-semibold underline hover:text-[#8F801B]">EDGE Grant</Link> (shared <strong>S$100,000 annual company cap</strong> refreshed 1 April), three prescribed pathways support resilience and diversification when engaging an <strong>SAC-accredited SS 680 certified management consultant</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-black/60 p-5 rounded-xl border border-white/10 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase text-[#C5A017]">
                Financial Management · Up to 50% SME / 30% Non-SME
              </span>
              <h3 className="font-heading font-bold text-white text-base">
                Enterprise Risk Management &amp; Internal Controls
              </h3>
              <p className="font-sans text-xs text-gray-300 leading-relaxed">
                10-week application outcome; 12-month completion; SS 680 required. Prescribed deliverables: <strong>Risk Report, Reporting Template, ERM Manuals, and Control Self-Assessment</strong> (excludes follow-up audits).
              </p>
            </div>

            <div className="bg-black/60 p-5 rounded-xl border border-white/10 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase text-[#C5A017]">
                Business Strategy · Up to 50% SME / 30% Non-SME
              </span>
              <h3 className="font-heading font-bold text-white text-base">
                <Link href="/business-strategic-planning" className="hover:text-[#C5A017] underline">
                  Business Strategic Planning
                </Link>
              </h3>
              <p className="font-sans text-xs text-gray-300 leading-relaxed">
                10-week application outcome; 12-month completion; SS 680 required. Formulates corporate growth strategies, operating model optimisation, and intellectual property asset management roadmaps (excludes routine regulatory compliance and SOP updates).
              </p>
            </div>

            <div className="bg-black/60 p-5 rounded-xl border border-white/10 space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase text-[#C5A017]">
                Internationalisation · Up to 70% SME / 50% Non-SME
              </span>
              <h3 className="font-heading font-bold text-white text-base">
                <Link href="/internationalisation" className="hover:text-[#C5A017] underline">
                  Overseas Partnerships &amp; Market Entry Setup
                </Link>
              </h3>
              <p className="font-sans text-xs text-gray-300 leading-relaxed">
                6-week application outcome. Supports cross-border supplier, distributor, licensee, and JV partner matching plus overseas entity and IP registration across multiple concurrent target markets.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <PillarConversionBanner
              variant="mid"
              heading="Build Your ERM & Continuity Roadmap with Up to 50% EDGE Support"
              subheading="Work directly with Frederick Tan, Principal Management Consultant, FT Synergist (TÜV SÜD License SCMC-1810-P0236)."
              primaryCtaLabel="Book 60-Min ERM & Strategy Sprint"
              onOpenSprintModal={() => handleOpenSprintModal("business-strategy")}
            />
          </div>
        </section>

        {/* SECTION 5: FAQ */}
        <PillarFAQSection
          heading="Frequently Asked Questions: SME Business Continuity & EDGE ERM"
          items={faqItems}
        />

        {/* SECTION 6: BOTTOM CONVERSION BANNER */}
        <PillarConversionBanner
          variant="bottom"
          heading="Don't Wait for the Next Outage or Export Ban to Test Your Resilience."
          subheading="Structure a practical, EDGE Grant-compliant Enterprise Risk Management (ERM) and Business Continuity roadmap with Principal Management Consultant Frederick Tan (SCMC-1810-P0236)."
          primaryCtaLabel="Book ERM & Continuity Sprint"
          onOpenSprintModal={() => handleOpenSprintModal("business-strategy")}
        />
      </main>

      {/* UNIFIED 5-SPRINT GOOGLE CALENDAR MODAL & STICKY BAR */}
      <SprintBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
        onSelectService={setSelectedService}
        stickyLabel="ERM & BCP Sprint"
        onOpenFromSticky={() => handleOpenSprintModal("business-strategy")}
      />

      {/* FOOTER INFRASTRUCTURE */}
      <footer className="w-full border-t border-neutral-800 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <CitationFootnotes citations={citationsData} />
        </div>
        <div className="w-full border-t border-neutral-800/40 py-6">
          <GeoSemanticAnchors
            primaryHeading="How do Singapore SMEs build Business Continuity Plans (BCP) and Enterprise Risk Management under the EDGE Grant?"
            primaryDescription="FT Synergist advises Singapore and regional SMEs on multi-vector operational resilience—spanning cloud/IT continuity, payment rail redundancy, supply-chain diversification, and Enterprise Risk Management (ERM) co-funded under Enterprise Singapore's EDGE Grant."
          />
        </div>
      </footer>
    </div>
  );
}
