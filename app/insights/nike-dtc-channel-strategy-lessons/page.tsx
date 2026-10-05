"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Lock, X, TrendingUp, ShieldCheck, Zap, AlertTriangle, Building2, Landmark, CheckCircle2, ChevronRight, BarChart3, RefreshCw } from "lucide-react";
import { ScrollDwellTrigger } from "@/components/ScrollDwellTrigger";

// --- 1. LEAD CAPTURE MODAL COMPONENT (PDPA Compliant + Internal API Route) ---
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
      reportName: "Nike DTC Channel Strategy Executive Report",
      consent: true,
      pagePath: "/insights/nike-dtc-channel-strategy-lessons"
    };

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        throw new Error("Failed to capture lead");
      }

      // Dispatch GA4 Custom Key Event
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "lead_form_submit", {
          event_category: "lead_generation",
          event_label: "Nike DTC Channel Strategy Executive Report",
          lead_type: "pdf_download",
          page_path: "/insights/nike-dtc-channel-strategy-lessons"
        });
      }

      window.open("/ft-synergist-nike-dtc-channel-strategy-report.pdf", "_blank");
      onClose();
    } catch (error) {
      console.error("Lead submission error:", error);
      // Fallback open if offline/mock
      window.open("/ft-synergist-nike-dtc-channel-strategy-report.pdf", "_blank");
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-neutral-900 rounded-none shadow-2xl overflow-hidden border border-neutral-800 border-t-4 border-[#8F801B]">

        <div className="bg-black p-8 text-center border-b border-neutral-800">
          <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#8F801B]/10 border border-[#8F801B]/20">
            <Lock className="w-8 h-8 text-[#8F801B]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Unlock Executive Strategy Report</h3>
          <p className="text-neutral-400 text-sm">
            Enter your details to download the complete 15-slide C-Suite analysis and Omnichannel Brand Moat framework (PDF).
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4 bg-black">
          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Full Name</label>
            <input
              required
              name="name"
              type="text"
              placeholder="e.g. Frederick Tan"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Work Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Company Name</label>
            <input
              required
              name="company"
              type="text"
              placeholder="e.g. Enterprise Pte Ltd"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          {/* PDPA Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer text-xs text-neutral-400 leading-relaxed">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded-none bg-neutral-900 border-neutral-700 text-[#8F801B] focus:ring-0 focus:ring-offset-0 accent-[#8F801B]"
              />
              <span>
                I consent to FT Synergist collecting my details to provide strategic reports and business updates in accordance with the <Link href="/privacy-policy" target="_blank" className="text-[#8F801B] underline hover:text-white">Privacy Policy</Link>.
              </span>
            </label>
            {errorMsg && <p className="text-red-400 text-xs mt-1">{errorMsg}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-none disabled:opacity-70 disabled:cursor-not-allowed text-xs"
          >
            {isSubmitting ? "Unlocking Report..." : (
              <>
                Download 15-Slide PDF Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-neutral-500 mt-2">
            Available exclusively to Singapore Enterprise Leaders &amp; C-Suite Executives.
          </p>
        </form>
      </div>
    </div>
  );
};

// --- 2. MAIN PAGE COMPONENT ---
export default function NikeDTCChannelStrategyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Direct-to-Consumer Paradox: Why Nike Lost Its S&P 100 Position & The Omnichannel Moat for Singapore Enterprises",
    "description": "An empirical diagnostic on Nike's Consumer Direct Acceleration over-pivot, the collapse of wholesale discovery engines, and how Singapore enterprises can build resilient omnichannel brand moats under Enterprise Singapore's unified EDGE Grant framework.",
    "image": "https://www.ftsynergist.com/hero-bg.jpg",
    "author": {
      "@type": "Person",
      "name": "Frederick Tan",
      "jobTitle": "Principal Management Consultant",
      "url": "https://www.ftsynergist.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FT Synergist",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ftsynergist.com/logo.png"
      }
    },
    "datePublished": "2026-09-29",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.ftsynergist.com/insights/nike-dtc-channel-strategy-lessons"
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <DownloadGate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ScrollDwellTrigger
        onTrigger={() => setIsModalOpen(true)}
        dwellSeconds={50}
        scrollPercent={60}
        storageKey="nike_dtc_report_lead_prompt"
      />

      {/* 1. HERO SECTION */}
      <header className="relative pt-40 pb-20 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8F801B] font-extrabold">
          Corporate Strategy &bull; Channel Distribution &bull; Brand Architecture
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
          The Direct-to-Consumer Paradox: <br />
          <span className="text-[#8F801B]">Why Nike Lost Its S&amp;P 100 Position &amp; The Omnichannel Moat for Singapore Enterprises</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          On 21 September 2026, Nike was removed from the S&amp;P 100 index after a 78% market cap drop from its 2021 peak. Here is an empirical autopsy of the &quot;Consumer Direct Acceleration&quot; failure, the destruction of wholesale discovery engines, and how Singapore SMEs can build defensible hybrid distribution channels backed by Enterprise Singapore&apos;s unified EDGE Grant.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/10 w-full sm:w-auto"
          >
            <Download className="mr-2 h-4 w-4" />
            Download 15-Slide Presentation PDF
          </button>
          <Link
            href="/edge-grant"
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 hover:text-white transition-all w-full sm:w-auto"
          >
            Explore EDGE Grant Support
            <ChevronRight className="ml-1 h-4 w-4 text-[#8F801B]" />
          </Link>
        </div>
      </header>

      {/* 2. DUAL BLOCK LAYOUT: EXECUTIVE SYNTHESIS */}
      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-20">

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-neutral-800 p-8 md:p-12 bg-neutral-950/60 backdrop-blur-sm">
          <div className="lg:col-span-12 space-y-6 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Executive Synthesis</h3>
              <span className="text-[10px] uppercase font-bold tracking-wider bg-[#8F801B]/10 text-[#8F801B] border border-[#8F801B]/30 px-3 py-1">
                S&amp;P 100 Index Case Study
              </span>
            </div>
            <p className="text-xl md:text-2xl font-light text-neutral-100 leading-relaxed italic">
              &quot;Treating wholesale retail merely as an expensive middleman rather than a crucial partner in discovery, marketing, and inventory de-risking created a multi-billion dollar blind spot. Pure DTC is not a replacement for wholesale—it is a complement.&quot;
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Nike&apos;s fiscal 2026 closed with revenue flatlining at <strong>$46.4 billion</strong> and net income dropping to <strong>$3.11 billion</strong>, down precipitously from its $51.36 billion revenue and $5.70 billion net income peak in FY2024. The company&apos;s market valuation collapsed from roughly <strong>$264 billion (late 2021 peak) to $57 billion</strong>, prompting S&amp;P Dow Jones Indices to replace Nike in the S&amp;P 100 index with higher-growth enterprise firms.
            </p>
          </div>
        </section>

        {/* 3. MACRO METRIC SNAPSHOT GRID */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-red-500 mb-1">-78%</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Market Cap Contraction</span>
          </div>
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-[#8F801B] mb-1">$46.4B</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">FY2026 Flatline Revenue</span>
          </div>
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-white mb-1">-20%</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Single-Day June &apos;24 Drop</span>
          </div>
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-emerald-400 mb-1">Up to 70%</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">EDGE Grant Co-Funding</span>
          </div>
        </section>

        {/* 4. HISTORICAL CONTEXT: 30-YEAR TRAJECTORY */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Historical Foundation</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">From Waffle Soles to the Consumer Direct Acceleration Trap</h2>

          <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
            Nike was founded on 25 January 1964 as Blue Ribbon Sports (BRS) by University of Oregon track coach Bill Bowerman and Philip Knight, initially distributing Japanese Onitsuka Tiger shoes before rebranding to Nike, Inc. in 1971 with Carolyn Davidson&apos;s $35 Swoosh. Over three decades, Nike transitioned from a $4.8 billion US-centric brand in FY1994 to a $51.36 billion global behemoth in FY2024 before its direct-to-consumer strategy unraveled.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-neutral-950 border border-neutral-900">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8F801B]" /> The 1994–2019 Growth Engine
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Driven by Jordan Brand scaling ($6.6B+ standalone revenue), relentless footwear R&amp;D (Air Max, ZoomX), supply chain offshoring across Vietnam and Indonesia (expanding gross margins to 44.8%), and deep wholesale partner networks globally.
              </p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-900">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" /> The 2020–2026 DTC Over-Pivot
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Under former CEO John Donahoe, Nike pulled products from thousands of independent running specialty doors and Foot Locker accounts to force downloads of the Nike App and SNKRS, creating an organic discovery vacuum on retail shelves.
              </p>
            </div>
          </div>
        </section>

        {/* 5. MULTI-YEAR FINANCIAL AUDIT TABLE */}
        <section className="space-y-8">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Quantitative Modeling</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Historical Financial Trajectory &amp; Index Displacement</h2>
            <p className="text-neutral-400 text-sm">Synthesized from Nike, Inc. public SEC Form 10-K disclosures (FY1994–FY2026) and S&amp;P Dow Jones Indices corporate action announcements.</p>
          </div>

          <div className="overflow-x-auto border border-neutral-800">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-neutral-900 text-[#8F801B] uppercase tracking-wider font-bold border-b border-neutral-800">
                <tr>
                  <th className="p-4">Financial Metric</th>
                  <th className="p-4">FY1994</th>
                  <th className="p-4">FY2014</th>
                  <th className="p-4">FY2021 (Valuation / China Peak)</th>
                  <th className="p-4">FY2024 (Revenue Peak)</th>
                  <th className="p-4">FY2026 (Correction)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 bg-neutral-950/60 text-neutral-300">
                <tr>
                  <td className="p-4 font-semibold text-white">Total Global Revenue</td>
                  <td className="p-4">$4.79 Billion</td>
                  <td className="p-4">$27.80 Billion</td>
                  <td className="p-4">$44.54 Billion</td>
                  <td className="p-4 text-white font-bold">$51.36 Billion (Peak)</td>
                  <td className="p-4 text-[#8F801B] font-bold">$46.40 Billion</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Gross Margin %</td>
                  <td className="p-4">~39.3%</td>
                  <td className="p-4">44.8%</td>
                  <td className="p-4">44.8%</td>
                  <td className="p-4">44.7%</td>
                  <td className="p-4 text-red-400">41.8% (Heavy Promo)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Net Income</td>
                  <td className="p-4">$298 Million</td>
                  <td className="p-4">$2.69 Billion</td>
                  <td className="p-4">$5.73 Billion</td>
                  <td className="p-4 text-white font-bold">$5.70 Billion</td>
                  <td className="p-4 text-red-400 font-bold">$3.11 Billion (-45%)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Greater China Revenue</td>
                  <td className="p-4">—</td>
                  <td className="p-4">$2.60 Billion</td>
                  <td className="p-4 text-emerald-400 font-bold">$8.29 Billion (Peak)</td>
                  <td className="p-4">$7.50 Billion</td>
                  <td className="p-4 text-red-400">$5.85 Billion</td>
                </tr>
                <tr className="bg-neutral-900/80">
                  <td className="p-4 font-bold text-white uppercase">Market Capitalization</td>
                  <td className="p-4">~$3.5 Billion</td>
                  <td className="p-4">~$70 Billion</td>
                  <td className="p-4 text-emerald-400 font-bold">~$264B–$270B (Peak)</td>
                  <td className="p-4 font-bold text-white">~$110 Billion</td>
                  <td className="p-4 font-bold text-red-500">$57 Billion (S&amp;P 100 Exit)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-800">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#8F801B] mb-2">The June 2024 Earnings Shock</h4>
            <p className="text-xs text-neutral-400 leading-relaxed m-0">
              In June 2024, Nike reported its Q4 FY2024 earnings and slashed FY2025 guidance, triggering a single-day 20% stock collapse that erased $28 billion in market cap. On 21 September 2026, following a 78% multi-year valuation contraction from its late-2021 peak, S&amp;P Dow Jones Indices removed Nike from the S&amp;P 100 index during rebalancing.
            </p>
          </div>
        </section>

        {/* 6. THE 3 OVERLAPPING STRUCTURAL CRISES */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Diagnostic Breakdown</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">The 3 Structural Flaws of Pure Direct-to-Consumer</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-neutral-950 border border-red-900/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" /> 1. Retailers Are Discovery Engines
              </span>
              <h4 className="text-white font-bold text-sm">Customer Acquisition (CAC) Inflation</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Wholesale stores act as zero-cost physical billboards. When Nike vacated running stores, shoppers did not install the app; they bought Hoka and On Running. Pure DTC forced Nike to fund 100% of customer acquisition via rising digital ad spend.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-red-900/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" /> 2. The 1st-Party Data Echo Chamber
              </span>
              <h4 className="text-white font-bold text-sm">Algorithmic Category Blindness</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                First-party SNKRS data only reflected existing retro fans wanting more Dunks and Air Force 1s. Absent from running stores, Nike was completely blind to consumer migration toward maximalist cushioning and outdoor utility.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-red-900/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" /> 3. 100% Inventory Risk Absorption
              </span>
              <h4 className="text-white font-bold text-sm">Destructive Digital Discounting</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                In wholesale, retailers share inventory risk. In DTC, Nike held all unsold inventory. When lifestyle sneaker demand cooled, billions in excess stock forced sitewide digital discounts, permanently impairing brand equity.
              </p>
            </div>
          </div>
        </section>

        {/* 7. COMPETITIVE DISRUPTION MATRIX */}
        <section className="space-y-6">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Market Dynamics</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Competitive Vacuum: The Rise of Specialized Disruptors</h2>
            <p className="text-neutral-400 text-sm">How specialized challenger brands capitalized on vacated shelf space across global retail doors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2 text-left">
              <span className="text-xs font-bold uppercase text-[#8F801B]">Performance Running</span>
              <h4 className="text-sm font-bold text-white">Hoka &amp; On Running</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Captured premium running store shelf space with maximalist cushioning and CloudTec soles, scaling brand awareness without Nike-level marketing budgets.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2 text-left">
              <span className="text-xs font-bold uppercase text-[#8F801B]">Casual &amp; Streetwear</span>
              <h4 className="text-sm font-bold text-white">New Balance &amp; Adidas</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Eroded Nike&apos;s casual dominance through vintage terrace models (Sambas, Gazelles, NB 550s/1906s) while Nike over-saturated retro Dunks and AF1s.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2 text-left">
              <span className="text-xs font-bold uppercase text-[#8F801B]">Athleisure &amp; Apparel</span>
              <h4 className="text-sm font-bold text-white">Lululemon &amp; Alo Yoga</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Dominated the high-margin women&apos;s activewear segment through premium fabric engineering, an area Nike repeatedly struggled to conquer directly.
              </p>
            </div>
          </div>
        </section>

        {/* 8. ENTERPRISE SINGAPORE EDGE GRANT ALIGNMENT */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Government Funding Architecture</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">De-Risking Distribution Architecture via the EDGE Grant</h2>

          <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
            As Enterprise Singapore transitions on 30 September 2026 to the unified <strong><Link href="/edge-grant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">EDGE Grant</Link></strong>, Singapore enterprises can defray up to <strong>70% of qualifying third-party consultancy costs</strong> to build resilient omnichannel networks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 bg-neutral-950 border border-neutral-900">
              <span className="text-xs font-bold uppercase text-[#8F801B]">Core Capability</span>
              <h4 className="text-white font-bold text-sm my-2">Strategic Brand Marketing</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Develop differentiated positioning, pricing power, and brand architectures that prevent commodity discounting.
              </p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-900">
              <span className="text-xs font-bold uppercase text-[#8F801B]">Market Access</span>
              <h4 className="text-white font-bold text-sm my-2">Regional Distribution Setup</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Identify, qualify, and establish overseas wholesale and distributor agreements across ASEAN and global territories.
              </p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-900">
              <span className="text-xs font-bold uppercase text-[#8F801B]">Innovation</span>
              <h4 className="text-white font-bold text-sm my-2">Business Model Redesign</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Transition from single-channel dependency to balanced hybrid operations with shared inventory risk structures.
              </p>
            </div>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed max-w-4xl pt-2">
            To structure compliant grant proposals and distribution audits, engage a certified <strong><Link href="/strategic-brand-marketing-development" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">brand consultant in Singapore</Link></strong> or an <strong><Link href="/franchise-consultant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">EnterpriseSG-recognized franchise consultant</Link></strong>. To safeguard your proprietary product assets, consult a certified <strong><Link href="/ip-consultant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">IP consultant in Singapore</Link></strong>.
          </p>
        </section>

        {/* 9. EXECUTIVE PLAYBOOK: 5 STRATEGIC IMPERATIVES */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Strategic Playbook</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">5 Rules of Omnichannel Resilience for C-Suite Leaders</h2>

          <div className="space-y-4 max-w-4xl">
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex gap-4 items-start">
              <span className="text-[#8F801B] font-bold text-base">01</span>
              <div>
                <h4 className="text-white font-bold text-sm">Treat Wholesale as Customer Acquisition Media</h4>
                <p className="text-xs text-neutral-400 m-0">Do not view wholesale purely as a margin concession. Wholesale shelf space is ambient, zero-marginal-cost customer acquisition.</p>
              </div>
            </div>
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex gap-4 items-start">
              <span className="text-[#8F801B] font-bold text-base">02</span>
              <div>
                <h4 className="text-white font-bold text-sm">Reserve DTC for High-LTV Community Retention</h4>
                <p className="text-xs text-neutral-400 m-0">Use direct channels for brand loyalty, limited-edition drops, and premium experiential service rather than mass transaction volume.</p>
              </div>
            </div>
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex gap-4 items-start">
              <span className="text-[#8F801B] font-bold text-base">03</span>
              <div>
                <h4 className="text-white font-bold text-sm">Never Substitute Financial Optimization for Product IP</h4>
                <p className="text-xs text-neutral-400 m-0">Efficiency and supply chain streamlining can maximize current product margins, but only continuous R&amp;D creates defensible pricing power.</p>
              </div>
            </div>
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex gap-4 items-start">
              <span className="text-[#8F801B] font-bold text-base">04</span>
              <div>
                <h4 className="text-white font-bold text-sm">Maintain Strict Franchise Scarcity</h4>
                <p className="text-xs text-neutral-400 m-0">Flooding digital channels with core heritage products to meet short-term quarterly targets permanently destroys brand equity.</p>
              </div>
            </div>
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex gap-4 items-start">
              <span className="text-[#8F801B] font-bold text-base">05</span>
              <div>
                <h4 className="text-white font-bold text-sm">Co-Fund Channel Evolution with EnterpriseSG EDGE Grants</h4>
                <p className="text-xs text-neutral-400 m-0">De-risk brand positioning and international distributor recruitment with up to 70% government grant co-funding.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. HIGH-INTENSITY CONVERSION MAGNET */}
        <section className="py-16 bg-neutral-950 border border-neutral-900 text-center space-y-6 max-w-4xl mx-auto">
          <Lock className="w-8 h-8 text-[#8F801B] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Download the Complete 15-Slide Executive Strategy Report</h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
            Access the full financial models, the Omnichannel Brand Moat Matrix (OBMM), and the 2026 Executive Readiness Scorecard in presentation format.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/20"
            >
              Download Full 15-Slide PDF Report
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <p className="text-[10px] text-neutral-600 tracking-wide uppercase pt-4">
            Available exclusively to Singapore Registered Businesses. Inquiries: <a href="mailto:fredtan@ftsynergist.com" className="text-[#8F801B] underline">fredtan@ftsynergist.com</a>
          </p>
        </section>

      </main>
    </div>
  );
}
