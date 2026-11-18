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
  Download,
  Lock,
  X,
  FileText,
  Quote,
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
      reportName: "The Continuity Paradox: 20-Slide SME BCP & ERM Executive Report",
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
          event_label: "The Continuity Paradox: 20-Slide SME BCP & ERM Executive Report",
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
            Enter your business details to download Frederick Tan&apos;s 20-slide executive deck: <em>The Continuity Paradox</em>, the 4-Vector Ambush Matrix, and the 50% EDGE Grant ERM Playbook.
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
                Download 20-Slide Executive PDF <Download className="ml-2 h-4 w-4" />
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
    vector: "The Cloud Trap: Why Microsoft Going Down Paralyses Your Lean SME",
    incidents: "Microsoft 365 / Outlook Global Outage (74 countries incl. Singapore) · CrowdStrike Falcon Sensor Outage (19 Jul 2024, ~8.5M Windows devices)",
    smeImpact:
      "SMEs consolidate email, Teams, SharePoint, and OneDrive onto one login to save money. When shared routing or authentication fails, your sales team cannot send urgent quotations, approve purchase orders, or receive RFQs—even if last week's files are backed up.",
    mitigation:
      "Out-of-band communication lifeboats, offline PO/quotation templates, and a scripted first-12-hour post-recovery backlog triage protocol.",
  },
  {
    icon: ZapOff,
    vector: "When the Chillers Fail: How a Data Centre Took Down Saturday's Cash Register",
    incidents: "Equinix SG3 Data Centre Chilled-Water Cooling Failure (14 Oct 2023, Singapore) · Northern Vietnam Industrial Grid Blackouts (May–Jun 2023)",
    smeImpact:
      "It wasn't a cyberattack. On 14 October 2023, a chilled-water cooling malfunction at Equinix SG3 forced server shutdowns that knocked out DBS and Citibank digital banking, ATMs, and PayNow/card rails for 12–24 hours—leaving Singapore retail and F&B SMEs with a single payment acquirer unable to collect weekend walk-in revenue.",
    mitigation:
      "Secondary bank acquirer QR/terminal rails at checkout, offline POS fallback SOPs, and supplier facility power redundancy audits.",
  },
  {
    icon: Globe,
    vector: "Midnight Border Bans: When Neighbours Shut the Supply Tap Overnight",
    incidents: "Malaysia Live Chicken Export Ban (1 Jun – Oct 2022, 34% of Singapore supply / ~3.6M chickens/month) · Indonesia Palm Oil Export Ban (Apr–May 2022)",
    smeImpact:
      "Saving 5% by buying 100% of a critical input from one cross-border source looks smart on a spreadsheet—until a foreign ministry bans exports overnight. Single-source F&B operators, central kitchens, and food manufacturers were forced to shut stalls or swallow spot-market margin compression.",
    mitigation:
      "The 70/30 Dual-Origin Supplier Rule (keeping 20%–30% warm with Thailand, Brazil, or Australia) and pre-tested recipe/spec agility.",
  },
  {
    icon: Ship,
    vector: "Tariff Walls & The PCBC 'Factory-in-Market' Escape Hatch",
    incidents: "Red Sea / Suez Canal Rerouting (200%–300% spot container spikes, +10–14 days transit) · US–China & Regional Tariff Shifts",
    smeImpact:
      "SMEs shipping finished goods from a single home factory bear 100% of sudden freight spikes and tariff walls on fixed-price B2B contracts.",
    mitigation:
      "FT Synergist's PCBC 'Factory-in-Market' and regional licensing architecture—localising ASEAN production and channel partnerships (CAFTA 3.0) to insulate margins.",
  },
];

const faqItems: PillarFAQItem[] = [
  {
    q: "Why is cloud backup not the same as a Business Continuity Plan (BCP)?",
    a: "A cloud backup saves your history; it does nothing to save your Friday afternoon revenue. As highlighted during the Microsoft Outlook and 365 outage analysed by Channel NewsAsia and NTU researchers, backups protect old files against deletion, but when a live platform goes dark, staff cannot send or receive new quotations, approvals, or customer orders—nor clear the 48-hour backlog traffic jam the morning after systems return.",
  },
  {
    q: "Isn't Business Continuity Planning (BCP) only for large MNCs with big budgets?",
    a: "No—that is the Continuity Paradox. Big MNCs have the balance sheet to survive a 48-hour operational freeze; a lean SME running on a 30-to-60-day working-capital cycle only has next month's payroll. Furthermore, MNCs, REITs, and Singapore government agencies now use ERM and BCP readiness as a mandatory Gate 1 filter before awarding tenders to SME vendors.",
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
                "The Continuity Paradox: Why Lean SMEs Break First When Cloud, Power & Borders Shut Down (And How to Turn BCP into a S$55M Tender Weapon)",
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
        badge="Executive Insight · The Continuity Paradox (20-Slide Boardroom Briefing)"
        badgeIcon={<ShieldCheck className="h-3.5 w-3.5" />}
        h1Main="The Continuity Paradox: Why 'Lean' SMEs Break First"
        h1Accent="When Cloud, Chillers & Borders Shut Down"
        subheader="Every founder loves talking about top-line growth when the sun is shining. Nobody wants to talk about plumbing until the basement floods. Here is why assuming Business Continuity Planning (BCP) is 'only for big boys' is a fatal trap—and how smart SMEs turn ERM into a multimillion-dollar tender weapon."
        expertBoxLabel="The Hard Truth — Frederick Tan, Principal Management Consultant, FT Synergist (SCMC-1810-P0236)"
        expertBoxContent={
          <>
            &ldquo;Big MNCs have balance sheets to survive a 48-hour blackout. Lean SMEs on 30-to-60-day working-capital cycles only have next month&apos;s payroll. While <strong>74% to 77%</strong> of Singapore SMEs worry about business interruption killing their income (QBE Survey), only <strong>22% to 23%</strong> hold active protection and <strong>19%</strong> fly completely blind without digital safeguards. Hope is not a continuity strategy.&rdquo;
          </>
        }
        ctaHeading="Don't Wait for the Next Blackout to Test Your Plumbing"
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
                Get Frederick Tan&apos;s 20-slide deck—<strong>The Continuity Paradox</strong>—featuring the 4-Vector Ambush Matrix, 5 Boardroom Rules, and the <strong>50% EDGE Grant</strong> ERM playbook.
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
        {/* SECTION 1: THE BACKUP DELUSION */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className={PILLAR_H2}>
              1. The Backup Delusion: Saving History vs. Saving Friday&apos;s Revenue
            </h2>
            <p className={PILLAR_BODY}>
              When the global Microsoft 365 and Outlook outage knocked out workflows across 74 countries—including major banks and enterprises in Singapore—thousands of SME owners discovered a painful lesson. As <a href="https://www.channelnewsasia.com/singapore/microsoft-outlook-outage-risks-limitations-gaps-6549346" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline hover:text-[#8F801B]">Channel NewsAsia reported with commentary from Nanyang Technological University (NTU) Professor Boh Wai Fong</a>, three blind spots ambushed businesses that thought they were &ldquo;backed up&rdquo;:
            </p>
          </div>

          {/* THE HARD TRUTH CALLOUT 1 */}
          <blockquote className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-red-950/50 via-slate-900 to-black border-l-4 border-red-600 shadow-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A017] font-bold">
              <Quote className="h-4 w-4 text-red-500" />
              <span>The Hard Truth · Frederick Tan</span>
            </div>
            <p className="font-heading text-xl md:text-2xl font-bold text-white leading-snug">
              &ldquo;A cloud backup saves your history. It does absolutely nothing to save your Friday afternoon revenue.&rdquo;
            </p>
            <p className="font-sans text-xs sm:text-sm text-gray-300">
              If your team&apos;s only backup plan when Outlook dies is &lsquo;wait and refresh the browser,&rsquo; you don&apos;t have a Business Continuity Plan. You have a spectator pass to your own revenue outage.
            </p>
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={PILLAR_CARD}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A017] block mb-2">
                Blind Spot 01
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                One Plug, Four Blackouts
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                You think Outlook, Teams, SharePoint, and OneDrive are four separate tools. They aren&apos;t. They share underlying routing and login pipes. When one core pipe bursts, your internal coordination and external client communication go mute at the exact same moment.
              </p>
            </div>

            <div className={PILLAR_CARD}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A017] block mb-2">
                Blind Spot 02
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Cached Mail $\neq$ Cash Flow
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                Desktop caching lets your sales team read last week&apos;s emails. It does nothing to help them receive today&apos;s time-sensitive RFQ, issue a quotation, approve a purchase order, or dispatch an invoice during a live platform blackout.
              </p>
            </div>

            <div className={PILLAR_CARD}>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5A017] block mb-2">
                Blind Spot 03
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                The Monday-Morning Traffic Jam
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                Most IT recovery plans stop the second the server comes back online. They completely ignore the post-recovery flood: how a lean 15-person SME clears 48 hours of jammed approvals, delayed dispatches, and angry client queues without breaching SLAs.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE 4-VECTOR AMBUSH */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className={PILLAR_H2}>
              2. The 4-Vector Ambush: When Chillers, Power Grids &amp; Borders Shut Down
            </h2>
            <p className={PILLAR_BODY}>
              Stop thinking Business Continuity is an IT department problem. Over the past four years, the hardest shocks that froze Singapore and ASEAN SMEs came from four completely different directions—<strong>Cloud Monoculture</strong>, <strong>Overheating Data Centres &amp; Power Grids</strong>, <strong>Midnight Export Bans</strong>, and <strong>Tariff Chokepoints</strong>:
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
                        <strong className="text-white">How SMEs Got Caught Cold:</strong> {item.smeImpact}
                      </p>
                      <p className="font-sans text-xs text-gray-400 border-t border-white/10 pt-2 leading-relaxed">
                        <strong className="text-gray-200">FT Synergist Countermeasure:</strong> {item.mitigation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* THE HARD TRUTH CALLOUT 2 */}
          <blockquote className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-red-950/50 via-slate-900 to-black border-l-4 border-red-600 shadow-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A017] font-bold">
              <Quote className="h-4 w-4 text-red-500" />
              <span>The Hard Truth · Frederick Tan</span>
            </div>
            <p className="font-heading text-xl md:text-2xl font-bold text-white leading-snug">
              &ldquo;Saving 5% by buying 100% of your raw materials from one cross-border supplier looks smart on a spreadsheet—right up until a foreign ministry signs an export ban on a Tuesday night.&rdquo;
            </p>
          </blockquote>
        </section>

        {/* SECTION 3: THE TENDER PARADOX */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className={PILLAR_H2}>
              3. The Tender Paradox: Why &ldquo;Boring&rdquo; ERM Manuals Win S$55M Contracts
            </h2>
            <p className={PILLAR_BODY}>
              Typical SME founders ask: <em>&ldquo;Why spend money writing Risk Registers and BCP Manuals when I could hire another salesperson?&rdquo;</em> Because when that salesperson brings back a major MNC, airport, or government tender, institutional procurement will disqualify you at Gate 1 if you cannot prove operational continuity. Look at three real engagements from FT Synergist&apos;s portfolio:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={PILLAR_CARD}>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold block mb-2">
                S$55M Tender Qualification
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                TNT Surveillance Pte Ltd
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                TNT didn&apos;t build a Business Continuity Plan because they loved paperwork. By architecting their BCP and guiding them to Enterprise Singapore&apos;s <strong>Singapore Quality Class (SQC)</strong>, FT Synergist helped qualify them to win a <strong>S$55 million</strong> new enterprise sales channel.
              </p>
            </div>

            <div className={PILLAR_CARD}>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold block mb-2">
                Multi-Market Supply Shield
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Sundat (S) Pte Ltd
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                Transformed an opportunistic cross-border trading model into a structured 5-year multi-market roadmap across Australia, Vietnam, and Taiwan—insulating supply chains and revenue from single-territory climate and regulatory shocks.
              </p>
            </div>

            <div className={PILLAR_CARD}>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#C5A017] font-bold block mb-2">
                PCBC &ldquo;Factory-in-Market&rdquo;
              </span>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                Wang Lao Ji / Project WALOVI
              </h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                As detailed in our <Link href="/insights/wang-lao-ji-global-expansion-strategy" className="text-white underline hover:text-[#8F801B]">Wang Lao Ji Global Expansion study</Link>, partnering with Baosteel Packaging to run production lines inside Malaysia and Vietnam captures CAFTA 3.0 tariff efficiency and insulates ASEAN supply from shipping chokepoints.
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
                  Download &ldquo;The Continuity Paradox&rdquo; (20-Slide Executive Report)
                </h3>
                <p className="font-sans text-sm text-gray-300">
                  Includes FT Synergist&apos;s 5 Continuity Rules for SMEs, the 4-Vector Ambush Matrix, and Enterprise Singapore EDGE Grant ERM co-funding parameters.
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
            4. Don&apos;t Pay 100% Out of Pocket: Let EnterpriseSG Co-Fund Your ERM Shield
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed">
            You do not need a multinational budget to build institutional-grade risk and continuity systems. Under Enterprise Singapore&apos;s unified <Link href="/edge-grant" className="text-white font-semibold underline hover:text-[#8F801B]">EDGE Grant</Link> (shared <strong>S$100,000 annual company cap</strong> refreshed 1 April), three prescribed pathways co-fund resilience and diversification when you engage an <strong>SAC-accredited SS 680 certified management consultant</strong>:
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
              heading="Build Your ERM & Continuity Shield with Up to 50% EDGE Support"
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
          heading="Is Your Business One Outage, One Chiller Failure, or One Export Ban Away from a Crisis?"
          subheading="Make hay while the sun shines. Structure an EDGE Grant-supported Enterprise Risk Management (ERM) and Business Continuity roadmap with Principal Management Consultant Frederick Tan (SCMC-1810-P0236)."
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
