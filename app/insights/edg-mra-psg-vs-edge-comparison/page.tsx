"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  X,
  Lock,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowUpRight,
  Layers,
  Cpu,
  Globe,
  FileText,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
  Building2,
  TrendingUp,
  Sparkles,
  ExternalLink,
  Check,
  MinusCircle,
  AlertCircle
} from "lucide-react";

// --- LEAD CAPTURE MODAL ---
const LeadModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      await fetch("https://formsubmit.co/ajax/2d67f037ef63481e387483f17259598c", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New Lead: EDG/MRA/PSG vs EDGE Comparison Guide Advisory Enquiry",
          _captcha: "false",
          ...data,
        }),
      });
    } catch {}
    window.location.href = "/edge-grant";
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-neutral-900 shadow-2xl overflow-hidden border border-neutral-800 border-t-4 border-[#8F801B]">
        <div className="bg-black p-8 text-center border-b border-neutral-800">
          <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#8F801B]/10 border border-[#8F801B]/20">
            <Lock className="w-8 h-8 text-[#8F801B]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Assess Your EDGE Grant Strategy</h3>
          <p className="text-neutral-400 text-sm">
            Speak directly with a TÜV SÜD Accredited SCMC Consultant on whether to apply under legacy EDG/MRA/PSG before 29 Sept 2026 or transition to EDGE on 30 Sept 2026.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-black">
          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Full Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="e.g. Frederick Tan"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Work Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Company Name</label>
            <input
              required
              name="company"
              type="text"
              placeholder="e.g. My Company Pte Ltd"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 text-sm"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-none disabled:opacity-70 disabled:cursor-not-allowed text-xs"
          >
            {isSubmitting ? "Submitting…" : (
              <>Request Strategic Grant Roadmap Assessment <ArrowRight className="ml-2 h-4 w-4" /></>
            )}
          </button>
          <p className="text-center text-xs text-neutral-500 mt-4">
            Certified SCMC Management Consultancy (SCMC-1810-P0236). No obligation.
          </p>
        </form>
      </div>
    </div>
  );
};

export default function EDGMRAMPSGvsEDGEComparisonPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const comparisonData = [
    {
      dimension: "Primary Objective",
      edg: "Deep business transformation across Core Capabilities, Innovation & Productivity, and Market Access.",
      mra: "Overseas market expansion for Singapore SMEs entering new geographical markets.",
      psg: "Adoption of pre-scoped IT solutions, software, and equipment to boost operational productivity.",
      edge: "Unified enterprise capability building, innovation, digitalisation, and global scaling under one consolidated framework.",
    },
    {
      dimension: "Status from 30 Sept 2026",
      edg: "Ceases 29 Sept 2026. Absorbed into EDGE (Strategy, Innovation, Standards, Sustainability).",
      mra: "Ceases 29 Sept 2026. Absorbed into EDGE (Internationalisation business area).",
      psg: "Ceases 29 Sept 2026. Absorbed into EDGE (Automation & Digitalisation business areas).",
      edge: "Active sole application mechanism from 30 September 2026 onwards.",
    },
    {
      dimension: "Target Applicant Eligibility",
      edg: "Singapore-registered SMEs (≥30% local shareholding, group revenue ≤S$100M or ≤200 staff).",
      mra: "Singapore-registered SMEs (≥30% local shareholding, group revenue ≤S$100M or ≤200 staff).",
      psg: "Singapore-registered SMEs (≥30% local shareholding, group revenue ≤S$100M or ≤200 staff).",
      edge: "All Singapore-registered businesses with ≥30% local shareholding — open to both SMEs AND Non-SMEs.",
    },
    {
      dimension: "Support Levels (Co-Funding)",
      edg: "Up to 50% for standard projects (up to 70% for sustainability projects).",
      mra: "Up to 50% of eligible costs.",
      psg: "Up to 50% of qualifying costs.",
      edge: "Up to 70% for SMEs; Up to 50% for Non-SMEs (reimbursement basis).",
    },
    {
      dimension: "Grant Caps & Allocation",
      edg: "Project-based caps, typically evaluated on individual project merit and scope.",
      mra: "Capped at S$100,000 per overseas market per company.",
      psg: "Annual cap of S$30,000 per company (resetting annually).",
      edge: "S$100,000 annual cap per company across all 8 business areas (resets 1 April). S$30,000 sub-cap for Digitalisation/Automation.",
    },
    {
      dimension: "Overseas Expansion Rules",
      edg: "Market Access pillar covered overseas pilot and setup projects.",
      mra: "Strict 'new market' rule: overseas sales must not exceed S$100,000 in past 3 years in that country.",
      psg: "N/A — domestic productivity focus.",
      edge: "No 'new market' restriction. Companies can deepen presence in existing markets. Overseas support elevated to 70% for SMEs.",
    },
    {
      dimension: "Tax Incentives Alignment",
      edg: "Separate from IRAS tax deduction mechanisms.",
      mra: "MRA and DTDi could be paired sequentially.",
      psg: "Separate from IRAS deductions.",
      edge: "Fully aligned with DTDi — automatic expenditure cap raised from S$150k to S$400k (Budget 2026).",
    },
    {
      dimension: "Vendor & Consultant Rules",
      edg: "Requires EnterpriseSG-recognised Certified Management Consultants (SCMC / TR 43 / SS 680).",
      mra: "Appointed third-party market expansion consultants / service providers.",
      psg: "Strictly pre-approved vendors from GoBusiness Gov-approved list.",
      edge: "Pre-approved vendors for standard digital/automation tools; Certified SCMC Consultants for strategic areas. No vendor changes permitted post-submission.",
    },
    {
      dimension: "Application & Claim System",
      edg: "Business Grants Portal (BGP).",
      mra: "Business Grants Portal (BGP).",
      psg: "Business Grants Portal (BGP) / GoBusiness.",
      edge: "Unified EDGE portal workflow on grants.sg / Business Grants Portal from 30 Sept 2026.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "EDG vs MRA vs PSG vs EDGE Grant: Full Side-by-Side Comparison (Singapore 2026)",
        description:
          "Complete comparative analysis of EDG, MRA, PSG and the new EDGE Grant launching 30 September 2026. Understand support levels, grant caps, eligibility differences, and transition strategy.",
        image: "https://www.ftsynergist.com/hero-bg.jpg",
        author: { "@type": "Organization", name: "FT Synergist" },
        publisher: {
          "@type": "Organization",
          name: "FT Synergist",
          logo: { "@type": "ImageObject", url: "https://www.ftsynergist.com/logo.png" },
        },
        datePublished: "2026-09-10",
        dateModified: "2026-09-10",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.ftsynergist.com/insights/edg-mra-psg-vs-edge-comparison",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does the EDGE Grant compare to EDG, MRA, and PSG?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The EDGE Grant consolidates EDG, MRA, and PSG into a unified annual framework with a S$100,000 company cap (resetting 1 April), covering 8 business areas and 100+ activities. It raises support levels to 70% for SMEs, includes non-SMEs at 50%, removes MRA's 'new market' restriction, and introduces a S$30,000 sub-cap for PSG-style digital solutions.",
            },
          },
          {
            "@type": "Question",
            name: "What happens to EDG, MRA, and PSG on 29 September 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EDG, MRA, and PSG cease permanently for new applications on 29 September 2026. Applications submitted prior to 30 September 2026 will continue to be assessed and supported under their respective legacy rules until project completion and final disbursement.",
            },
          },
          {
            "@type": "Question",
            name: "Is the EDGE Grant cap higher or lower than EDG, MRA, and PSG?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EDGE introduces an annual cap of S$100,000 per company that resets each year on 1 April across all activities combined. Within this, up to S$30,000 can be used for digital solutions (replacing PSG). Because the EDGE cap refreshes every year, companies with ongoing innovation and expansion pipelines can tap recurring funding across consecutive years.",
            },
          },
          {
            "@type": "Question",
            name: "Can non-SMEs apply for EDGE even though they were excluded from MRA and PSG?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Unlike EDG, MRA, and PSG which were strictly restricted to SMEs, the EDGE Grant is open to all Singapore-registered businesses with at least 30% local shareholding, with non-SMEs receiving up to 50% co-funding support.",
            },
          },
          {
            "@type": "Question",
            name: "How does overseas expansion support change under EDGE compared to MRA?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under EDGE, the MRA 'new market' restriction (which required overseas revenue to be under S$100k) is removed. Singapore enterprises can now receive grant support to expand or deepen presence in existing overseas markets, with SME support increased from 50% under MRA to up to 70% under EDGE.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ── HERO ── */}
      <header className="relative pt-40 pb-16 px-6 text-center max-w-5xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-950/60 border border-amber-800/60 text-amber-400 text-xs font-bold uppercase tracking-widest">
          <Clock className="w-3.5 h-3.5" />
          Transition Deadline: 29 September 2026 · Launch: 30 September 2026
        </div>

        <span className="block text-xs uppercase tracking-[0.25em] text-[#8F801B] font-extrabold">
          Comparative Policy Analysis · Enterprise Singapore 2026
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
          EDG vs MRA vs PSG{" "}
          <span className="text-[#8F801B]">vs&nbsp;EDGE&nbsp;Grant</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          The ultimate side-by-side comparative guide: How Enterprise Singapore&apos;s three legacy schemes differ from the unified EDGE Grant framework launching 30 September 2026, and how business leaders should position their grant strategy.
        </p>

        <p className="text-xs text-neutral-500 max-w-xl mx-auto">
          Source:{" "}
          <a
            href="https://www.enterprisesg.gov.sg/resources/all-faqs/edge-grant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8F801B] underline hover:text-white transition-colors"
          >
            Enterprise Singapore — EDGE Grant FAQ (enterprisesg.gov.sg)
          </a>
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/edge-grant"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/10 w-full sm:w-auto"
          >
            Explore EDGE Grant Hub
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 hover:text-white transition-all w-full sm:w-auto"
          >
            Assess My Grant Readiness
            <ShieldCheck className="ml-2 h-4 w-4 text-[#8F801B]" />
          </button>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="max-w-6xl mx-auto px-6 pb-32 space-y-24">

        {/* 1. EXECUTIVE SUMMARY CALLOUT */}
        <section className="border border-neutral-800 p-8 md:p-12 bg-neutral-950/80 space-y-6">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
            <Sparkles className="w-5 h-5 text-[#8F801B] shrink-0" />
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              Executive Summary: The Great 2026 Consolidation
            </h2>
          </div>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            On <strong>29 September 2026</strong>, Singapore&apos;s three most widely utilised business grants—the <strong>Enterprise Development Grant (EDG)</strong>, <strong>Market Readiness Assistance (MRA)</strong>, and <strong>Productivity Solutions Grant (PSG)</strong>—will officially cease accepting new applications. On <strong>30 September 2026</strong>, they will be replaced by the <strong>EDGE Grant</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-neutral-900 border border-neutral-800">
              <span className="text-xs font-mono text-red-400 font-bold uppercase block mb-1">Legacy Paradigm</span>
              <h3 className="text-lg font-bold text-white mb-2">3 Fragmented Schemes</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Separate portals, conflicting cap timelines, restrictive &quot;new market&quot; clauses, and strict SME-only criteria.
              </p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800">
              <span className="text-xs font-mono text-[#8F801B] font-bold uppercase block mb-1">New Framework</span>
              <h3 className="text-lg font-bold text-white mb-2">1 Unified S$100k Cap</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Single application pathway across 8 business areas and 100+ activities, refreshing annually on 1 April.
              </p>
            </div>
            <div className="p-6 bg-neutral-900 border border-neutral-800">
              <span className="text-xs font-mono text-green-400 font-bold uppercase block mb-1">Expanded Eligibility</span>
              <h3 className="text-lg font-bold text-white mb-2">Non-SMEs + 70% Support</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Up to 70% for SMEs and 50% for non-SMEs. Overseas expansion can now deepen in existing markets.
              </p>
            </div>
          </div>
        </section>

        {/* 2. THE COMPREHENSIVE COMPARISON MATRIX */}
        <section className="space-y-6">
          <div className="text-center sm:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Direct Scheme Benchmark</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Full Side-by-Side Comparison Matrix
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              Compare key operational and funding parameters across EDG, MRA, PSG, and the consolidated EDGE Grant framework.
            </p>
          </div>

          <div className="overflow-x-auto border border-neutral-800 bg-neutral-950">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/90 text-neutral-200">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider w-1/4">Dimension</th>
                  <th className="p-4 sm:p-5 font-semibold text-neutral-300 w-1/6 border-l border-neutral-800">EDG (Legacy)</th>
                  <th className="p-4 sm:p-5 font-semibold text-neutral-300 w-1/6 border-l border-neutral-800">MRA (Legacy)</th>
                  <th className="p-4 sm:p-5 font-semibold text-neutral-300 w-1/6 border-l border-neutral-800">PSG (Legacy)</th>
                  <th className="p-4 sm:p-5 font-bold text-[#8F801B] bg-[#8F801B]/10 w-1/4 border-l border-neutral-800">
                    EDGE Grant (2026+)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-900/40 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white align-top bg-neutral-950">
                      {row.dimension}
                    </td>
                    <td className="p-4 sm:p-5 text-neutral-400 align-top border-l border-neutral-800/60 leading-relaxed">
                      {row.edg}
                    </td>
                    <td className="p-4 sm:p-5 text-neutral-400 align-top border-l border-neutral-800/60 leading-relaxed">
                      {row.mra}
                    </td>
                    <td className="p-4 sm:p-5 text-neutral-400 align-top border-l border-neutral-800/60 leading-relaxed">
                      {row.psg}
                    </td>
                    <td className="p-4 sm:p-5 text-neutral-100 font-medium align-top border-l border-neutral-800/60 bg-[#8F801B]/5 leading-relaxed">
                      {row.edge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-neutral-900/50 border border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
            <span>*All figures verified per EnterpriseSG EDGE Grant FAQ as of September 2026.</span>
            <Link href="/edge-grant" className="text-[#8F801B] hover:underline inline-flex items-center gap-1 font-semibold">
              View full EDGE specifications <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* 3. THE 5 CORE PARADIGM SHIFTS */}
        <section className="space-y-8">
          <div className="text-center sm:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Strategic Transformation</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The 5 Paradigm Shifts: What EDGE Does Differently
            </h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              EDGE is not merely a name change; it re-engineers the rules of government co-funding for Singapore enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Shift 1 */}
            <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8F801B]/20 text-[#8F801B] font-mono font-bold text-sm">1</span>
                <h3 className="text-lg font-bold text-white">From Disjointed Caps to an Annual Refreshing Cap</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Under the legacy model, a business had to navigate lifetime caps (MRA S$100k per market), ad-hoc project evaluations (EDG), and annual software limits (PSG S$30k). Under EDGE, every enterprise receives an <strong>annual grant cap of S$100,000</strong> that <strong>resets every 1 April</strong> across all 8 business areas combined.
              </p>
            </div>

            {/* Shift 2 */}
            <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8F801B]/20 text-[#8F801B] font-mono font-bold text-sm">2</span>
                <h3 className="text-lg font-bold text-white">Non-SMEs Are Officially Brought In</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Mid-tier enterprises and corporate scale-ups with group revenue over S$100M or headcount exceeding 200 staff were largely locked out of standard SME grant support. EDGE democratises access by extending <strong>up to 50% co-funding to non-SMEs</strong>, retaining up to 70% for SMEs.
              </p>
            </div>

            {/* Shift 3 */}
            <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8F801B]/20 text-[#8F801B] font-mono font-bold text-sm">3</span>
                <h3 className="text-lg font-bold text-white">Abolition of the MRA &quot;New Market&quot; Restriction</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                MRA strictly penalised enterprises that had prior sales exceeding S$100,000 in a target market over the preceding 3 years. Under EDGE Internationalisation, this restriction is eliminated: businesses can deploy grant capital to <strong>deepen and defend established foreign presence</strong>, supported by up to 70% SME co-funding.
              </p>
            </div>

            {/* Shift 4 */}
            <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8F801B]/20 text-[#8F801B] font-mono font-bold text-sm">4</span>
                <h3 className="text-lg font-bold text-white">DTDi Automatic Cap Doubled to S$400,000</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Announced in Budget 2026, the <strong>Double Tax Deduction for Internationalisation (DTDi)</strong> automatic expenditure cap is elevated from S$150,000 to <strong>S$400,000 per Year of Assessment</strong>. This pairs directly with EDGE Internationalisation for aggressive cross-border expansion.
              </p>
            </div>

            {/* Shift 5 */}
            <div className="p-8 bg-neutral-950 border border-neutral-800 space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8F801B]/20 text-[#8F801B] font-mono font-bold text-sm">5</span>
                <h3 className="text-lg font-bold text-white">Strict Vendor Lock: No Post-Submission Vendor Changes</h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Unlike previous schemes where vendor substitutions or scope adjustments could be negotiated during project execution, EDGE introduces a strict compliance rule: <strong>Vendor change requests after submission are not permitted</strong>. If a vendor or consultant must be replaced, the project must be terminated and reapplied from scratch. This makes upfront consultant selection and SCMC certification vetting mission-critical.
              </p>
            </div>

          </div>
        </section>

        {/* 4. STRATEGIC DECISION MATRIX: APPLY NOW VS WAIT */}
        <section className="p-8 md:p-12 bg-neutral-950 border border-neutral-800 space-y-8">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
            <ShieldCheck className="w-6 h-6 text-[#8F801B]" />
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider">
                Strategic Playbook: Apply Before 29 Sept or Wait for EDGE?
              </h2>
              <p className="text-xs text-neutral-400">
                Decision framework for Managing Directors, CFOs, and Transformation Heads.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-neutral-900/70 border border-neutral-800 space-y-3">
              <div className="inline-block px-2.5 py-1 bg-green-950/60 border border-green-800 text-green-400 text-[10px] font-bold uppercase tracking-wider">
                Scenario A: Apply EDG/MRA Now
              </div>
              <h3 className="text-base font-bold text-white">Large Transformation Projects</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                If your project budget significantly exceeds S$150,000 in qualifying consultancy (e.g. multi-pillar brand restructuring, IP valuation, or major regional franchise rollouts), submit under EDG before 29 Sept to evaluate project-based grant support beyond the EDGE S$100k annual cap.
              </p>
            </div>

            <div className="p-6 bg-neutral-900/70 border border-neutral-800 space-y-3">
              <div className="inline-block px-2.5 py-1 bg-[#8F801B]/20 border border-[#8F801B] text-[#C5A017] text-[10px] font-bold uppercase tracking-wider">
                Scenario B: Wait for EDGE (30 Sept)
              </div>
              <h3 className="text-base font-bold text-white">Deepening Existing Overseas Markets</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                If you were blocked by MRA&apos;s S$100k past sales rule in markets like Malaysia, Vietnam, or Indonesia, wait for EDGE on 30 Sept to unlock 70% support without new market eligibility barriers.
              </p>
            </div>

            <div className="p-6 bg-neutral-900/70 border border-neutral-800 space-y-3">
              <div className="inline-block px-2.5 py-1 bg-blue-950/60 border border-blue-800 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                Scenario C: Non-SMEs & Mid-Caps
              </div>
              <h3 className="text-base font-bold text-white">Corporate Scale-Ups (&gt;S$100M)</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Non-SMEs excluded under legacy EDG/MRA should prepare scopes immediately to submit on 30 September 2026 under the new 50% non-SME EDGE co-funding track.
              </p>
            </div>
          </div>
        </section>

        {/* 5. CONSULTANT ACCREDITATION DIFFERENTIATOR */}
        <section className="p-8 md:p-12 bg-neutral-900/40 border border-neutral-800 space-y-6">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
            <Building2 className="w-5 h-5 text-[#8F801B]" />
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              The SCMC Advantage in the EDGE Era
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              <p>
                Because EDGE strictly prohibits vendor changes after application submission, choosing the wrong consultant creates irreversible project rejection and funding forfeit.
              </p>
              <p>
                Enterprise Singapore requires that management consultants engaged for capability upgrade areas (Business Strategy, Innovation, Internationalisation, Standards, Sustainability) hold valid certifications recognised by EnterpriseSG (such as TÜV SÜD Certified SCMC).
              </p>
              <p className="text-neutral-400 font-mono text-xs">
                FT Synergist is led by Frederick Tan, Senior Certified Management Consultant (SCMC-1810-P0236, TÜV SÜD PSB Singapore), ensuring end-to-end EnterpriseSG compliance across all 8 EDGE business areas.
              </p>
            </div>
            <div className="lg:col-span-4 p-6 bg-black border border-neutral-800 text-center space-y-3">
              <span className="text-[10px] font-mono text-[#8F801B] uppercase tracking-widest block font-bold">
                Accreditation Benchmark
              </span>
              <div className="text-xl font-bold text-white">SCMC-1810-P0236</div>
              <div className="text-xs text-neutral-400">TÜV SÜD PSB Singapore</div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-2 py-3 px-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all"
              >
                Schedule SCMC Consultation
              </button>
            </div>
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <section className="space-y-6">
          <div className="text-center sm:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Clear Clarifications</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Frequently Asked Questions on the Transition
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#8F801B]" />
                What happens to our existing EDG, MRA, or PSG project if it finishes in 2027?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-6">
                Existing approved projects are fully protected. Enterprise Singapore will continue to support approved projects under EDG, MRA, and PSG until project completion and final claim disbursement, even after the schemes cease on 29 September 2026.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#8F801B]" />
                Can a business apply for EDGE if it previously maxed out MRA in a specific country?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-6">
                Yes. Prior grant usage under EDG, MRA, or PSG does not disqualify a company from applying for EDGE. Furthermore, EDGE removes MRA&apos;s lifetime S$100k per market limit, enabling companies to tap EDGE funding for ongoing expansion in that market.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#8F801B]" />
                How is the S$30,000 Digitalisation sub-cap enforced within the S$100,000 EDGE cap?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-6">
                Within each financial year&apos;s S$100,000 cap, up to S$30,000 can be claimed for single-function digital solutions, pre-scoped IT tools, and basic automation (the legacy PSG scope). The remaining S$70,000 can be deployed across higher-order business areas such as Strategy, Innovation, Internationalisation, Standards, and Sustainability.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#8F801B]" />
                Can we change our management consultant or vendor after submitting an EDGE application?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-6">
                No. Enterprise Singapore policy states that vendor change requests after submission are not permitted under EDGE. If a vendor or consultant must be changed, the project must be withdrawn/terminated and a fresh application submitted.
              </p>
            </div>
          </div>
        </section>

        {/* 7. BOTTOM CTA */}
        <section className="py-16 bg-neutral-950 border border-neutral-900 text-center space-y-6 max-w-4xl mx-auto">
          <Lock className="w-8 h-8 text-[#8F801B] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Align Your Grant Strategy with the 2026 Policy Landscape
          </h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
            FT Synergist provides end-to-end strategic advisory for Singapore enterprises navigating the EDG/MRA/PSG sunset and EDGE Grant rollout.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/20"
            >
              Request Strategic EDGE Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <Link
              href="/edge-grant"
              className="inline-flex items-center justify-center px-10 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest rounded-none hover:bg-neutral-800 hover:text-white transition-all"
            >
              Read Full EDGE Grant Hub
            </Link>
          </div>
          <p className="text-xs text-neutral-600">
            Certified SCMC Management Consultancy (SCMC-1810-P0236, TÜV SÜD).
          </p>
        </section>

      </main>
    </div>
  );
}
