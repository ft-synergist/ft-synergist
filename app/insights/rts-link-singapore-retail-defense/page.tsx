"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Lock, X, TrendingUp, ShieldCheck, Zap, AlertTriangle, Building2, Landmark, CheckCircle2, ChevronRight } from "lucide-react";
import { ScrollDwellTrigger } from "@/components/ScrollDwellTrigger";

// --- 1. LEAD CAPTURE MODAL COMPONENT ---
const DownloadGate = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "New Lead: RTS Link Singapore Retail Defense Report Download",
          _captcha: "false",
          ...data
        })
      });

      // Dispatch GA4 Custom Key Event
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "lead_form_submit", {
          event_category: "lead_generation",
          event_label: "RTS Link Singapore Retail Defense Report",
          lead_type: "pdf_download",
          page_path: "/insights/rts-link-singapore-retail-defense"
        });
      }

      window.open("/ft-synergist-rts-link-singapore-retail-defense-report.pdf", "_blank");
      onClose();
    } catch (error) {
      console.error("Form submission error", error);
      window.open("/ft-synergist-rts-link-singapore-retail-defense-report.pdf", "_blank");
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
          <h3 className="text-2xl font-bold text-white mb-2">Unlock Executive RTS Report</h3>
          <p className="text-neutral-400 text-sm">
            Enter your credentials to download the full 20-slide strategic defense presentation (PDF).
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
              placeholder="e.g. FT Synergist"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600 shadow-none text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-none disabled:opacity-70 disabled:cursor-not-allowed text-xs"
          >
            {isSubmitting ? "Unlocking Report..." : (
              <>
                Download 20-Slide PDF Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-neutral-500 mt-4">
            Available exclusively to C-Suite & Enterprise Directors.
          </p>
        </form>
      </div>
    </div>
  );
};

// --- 2. MAIN PAGE COMPONENT ---
export default function RTSLinkRetailDefensePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The RTS Link & The Structural Transformation of Singaporean Retail: Revenue Leakage, Sectoral Vulnerability, and Strategic Defense Frameworks",
    "description": "How the 2027 Johor Bahru–Singapore RTS Link triggers up to S$2.1B in annual retail revenue leakage, and the operational defense playbooks Singaporean enterprises must deploy.",
    "image": "https://www.ftsynergist.com/hero-bg.jpg",
    "author": {
      "@type": "Organization",
      "name": "FT Synergist"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FT Synergist",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ftsynergist.com/logo.png"
      }
    },
    "datePublished": "2026-09-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.ftsynergist.com/insights/rts-link-singapore-retail-defense"
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
        storageKey="rts_report_lead_prompt"
      />

      {/* 1. HERO SECTION */}
      <header className="relative pt-40 pb-20 px-6 text-center max-w-5xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#8F801B] font-extrabold">
          Macroeconomic Intelligence &bull; Strategic Retail Defense
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
          The RTS Link Paradox: <br />
          <span className="text-[#8F801B]">S$2.1B Revenue Leakage &amp; The Singapore Retail Defense Strategy</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto leading-relaxed">
          The January 2027 inauguration of the 5-minute Johor Bahru–Singapore RTS Link permanently eradicates border transit friction. Here is how domestic retail and F&amp;B enterprises can counter structural revenue outflow through product de-commoditization, landlord REIT defenses, and JS-SEZ twinning operations.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/10 w-full sm:w-auto"
          >
            <Download className="mr-2 h-4 w-4" />
            Download 20-Slide Presentation PDF
          </button>
          <Link
            href="/mra-grant"
            className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 hover:text-white transition-all w-full sm:w-auto"
          >
            Explore MRA Grant Support
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
                January 2027 Infrastructure Horizon
              </span>
            </div>
            <p className="text-xl md:text-2xl font-light text-neutral-100 leading-relaxed italic">
              &quot;Framing the RTS Link purely as a net negative for Singaporean enterprises severely oversimplifies the bilateral economic ecosystem. It forces domestic retail away from pure price competition—a battle it structurally cannot win—toward premiumization, hyper-convenience, and cross-border operational integration.&quot;
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              A landmark joint study commissioned by the Singapore Business Federation (SBF), the Restaurant Association of Singapore (RAS), and the Singapore Retailers Association (SRA) projects that the RTS Link will drive a <strong>51% surge in outbound trips by Singapore consumers</strong>, translating to an incremental <strong>S$1.05 billion to S$2.1 billion</strong> in gross annual outbound spend. This creates a net structural revenue leakage representing up to <strong>4.0% of total domestic retail sales</strong>.
            </p>
          </div>
        </section>

        {/* 3. MACRO METRIC SNAPSHOT GRID */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-[#8F801B] mb-1">+51%</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Outbound Trip Surge</span>
          </div>
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-white mb-1">S$2.1B</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Max Gross Outflow</span>
          </div>
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-[#8F801B] mb-1">5 Mins</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Station-to-Station Transit</span>
          </div>
          <div className="p-6 bg-neutral-950 border border-neutral-800 text-center">
            <span className="block text-3xl md:text-4xl font-extrabold text-white mb-1">5% CIT</span>
            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">JS-SEZ Tax Incentive</span>
          </div>
        </section>

        {/* 4. HISTORICAL CONTEXT & TEMPORAL FRICTION */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Historical Context</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">The Rise, Fall, and Resurgence of Cross-Border Commerce</h2>

          <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
            Cross-border capital flow across the Causeway is non-linear; it moves in macroeconomic cycles dictated by currency valuation, transit bottlenecks, and infrastructure upgrades. Understanding how Singaporean retailers survived past currency shocks provides the blueprint for navigating the 2027 paradigm shift.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 bg-neutral-950 border border-neutral-900">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8F801B]" /> The Historical Temporal Friction Cap
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                During previous exchange rate spikes (such as the ringgit breaching RM3.55 per S$1.00), total retail leakage was naturally capped by physical border friction. Vehicular traffic jams costing 1 to 3 hours per crossing converted potential weekly shoppers into occasional weekend day-trippers. Domestic merchants survived because transit inconvenience protected routine daily revenues.
              </p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-900">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#8F801B]" /> The RTS Eradication of Transit Friction
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                The RTS Link permanently destroys this temporal buffer. Spanning 4km from Woodlands North to Bukit Chagar with co-located immigration facilities, passengers clear Singaporean and Malaysian customs simultaneously. Operating at 3.6-minute peak intervals, an occasional weekend excursion morphs into a routine mid-week grocery run.
              </p>
            </div>
          </div>
        </section>

        {/* 5. INFRASTRUCTURE & QUANTITATIVE DATA TABLE */}
        <section className="space-y-8">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Quantitative Modeling</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Macroeconomic Baseline &amp; Projected Revenue Leakage</h2>
            <p className="text-neutral-400 text-sm">Synthesized data comparing the SBF / RAS / SRA joint trade study against institutional bank equity research (DBS Equity Research).</p>
          </div>

          <div className="overflow-x-auto border border-neutral-800">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-neutral-900 text-[#8F801B] uppercase tracking-wider font-bold border-b border-neutral-800">
                <tr>
                  <th className="p-4">Economic Metric</th>
                  <th className="p-4">SBF / RAS / SRA Study Projections</th>
                  <th className="p-4">Institutional Bank Projections (DBS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 bg-neutral-950/60 text-neutral-300">
                <tr>
                  <td className="p-4 font-semibold text-white">Current Outbound Spend (SG to JB)</td>
                  <td className="p-4">S$1.70 Billion / year</td>
                  <td className="p-4">S$1.70 Billion / year</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Projected Incremental Outbound Spend</td>
                  <td className="p-4 text-[#8F801B] font-bold">+ S$1.05 Billion / year (+51% trips)</td>
                  <td className="p-4 text-white font-bold">+ S$2.10 Billion / year (Aggressive)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Current Inbound Spend (JB to SG)</td>
                  <td className="p-4">S$1.30 Billion / year</td>
                  <td className="p-4">S$1.30 Billion / year</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Projected Incremental Inbound Spend</td>
                  <td className="p-4 text-emerald-400">+ S$756 Million / year (+57% trips)</td>
                  <td className="p-4 text-emerald-400">+ S$756 Million / year</td>
                </tr>
                <tr className="bg-neutral-900/80">
                  <td className="p-4 font-bold text-white uppercase">Net Structural Outflow (Annually)</td>
                  <td className="p-4 font-bold text-red-400">- S$290 Million / year</td>
                  <td className="p-4 font-bold text-red-500">- S$1.35B to - S$1.80B / year</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Percentage of Total SG Retail/F&amp;B Sales</td>
                  <td className="p-4">0.4% contraction</td>
                  <td className="p-4 font-bold text-red-400">3.0% to 4.0% total retail contraction</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-800">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#8F801B] mb-2">Macro Equilibrium Model: The Shenzhen Parallel</h4>
            <p className="text-xs text-neutral-400 leading-relaxed m-0">
              Longitudinal analysis of the Hong Kong–Shenzhen border proves retail leakage is not infinite. As capital flows into border cities, commercial real estate rents, retail wages, and local prices surge, narrowing the arbitrage gap over time. The shopping shock will gradually transition into an equilibrium focused on experiential leisure rather than commoditized price arbitrage.
            </p>
          </div>
        </section>

        {/* 6. SECTOR VULNERABILITY MATRIX */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Sectoral Analysis</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Vulnerability vs. Insulation Matrix</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vulnerable */}
            <div className="p-6 bg-neutral-950 border border-red-900/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400" /> High-Risk Arbitrage Victims
              </span>
              <h4 className="text-white font-bold text-base">Mass Groceries, FMCG &amp; Routine Personal Care</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Staple supermarket goods (rice, infant formula, diapers, laundry detergent) can be 30% to 40% cheaper in JB. Routine labor-intensive services—hair salons, basic manicures, dental checkups, and mid-tier casual dining—face severe contraction because Singapore merchants cannot match JB wage floors under the Progressive Wage Model (PWM).
              </p>
            </div>

            {/* Insulated */}
            <div className="p-6 bg-neutral-950 border border-emerald-900/40 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Insulated &amp; High-Growth Defenders
              </span>
              <h4 className="text-white font-bold text-base">Urgent Services, Luxury &amp; Heavy Bulk Retail</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Time-sensitive daily needs (morning coffee, quick workday lunches, tuition centers, express repairs) are anchored by immediate physical proximity. High-end luxury fashion, Michelin dining, specialized medical aesthetics, and complex electronics remain protected due to global supply routing, warranty assurances, and inbound Malaysian wealth flows.
              </p>
            </div>
          </div>
        </section>

        {/* 7. STATE REGULATORY MOATS */}
        <section className="space-y-6">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Statutory Defense</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">The State Regulatory Moat: Customs &amp; Import Restraints</h2>
            <p className="text-neutral-400 text-sm">Regulatory barriers maintained by ICA, Singapore Customs, and the Singapore Food Agency (SFA) place a hard ceiling on individual consumer arbitrage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2 text-left">
              <span className="text-xs font-bold uppercase text-[#8F801B]">GST 9% Import Relief</span>
              <h4 className="text-sm font-bold text-white">S$100 Cap (&lt;48h Travel)</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">Travelers abroad &lt;48h receive only S$100 GST relief. Purchases exceeding S$100 incur 9% GST, cutting directly into arbitrage savings for bulk items.</p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2 text-left">
              <span className="text-xs font-bold uppercase text-[#8F801B]">Zero Concession</span>
              <h4 className="text-sm font-bold text-white">Alcohol &amp; Tobacco</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">Singapore Customs grants zero duty-free allowance for liquor or cigarettes from Malaysia. Full excise duties and GST apply, insulating domestic liquor markets.</p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2 text-left">
              <span className="text-xs font-bold uppercase text-[#8F801B]">SFA Food Quotas</span>
              <h4 className="text-sm font-bold text-white">15kg Personal Import Limit</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">The Food Safety &amp; Security Bill caps personal food imports at 15kg. Strict bans remain on bak kwa, raw pork, and unapproved meat sources.</p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-2 text-left">
              <span className="text-xs font-bold uppercase text-[#8F801B]">HSA Restrictions</span>
              <h4 className="text-sm font-bold text-white">3-Month Rx Supply Cap</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">Prescription drugs are restricted to 3 months personal supply. Controlled substances are strictly banned, preserving captive specialized pharmacy markets.</p>
            </div>
          </div>
        </section>

        {/* 8. GEOGRAPHIC HEATMAP & SUBURBAN REIT DEFENSE */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Real Estate Advisory</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Regional Squeeze vs. REIT Portfolio Resilience</h2>

          <p className="text-neutral-400 leading-relaxed text-base">
            Suburban corridors face contrasting financial dynamics. The West region projects a net outflow of <strong>-S$103 million</strong>, while the North region projects a <strong>-S$82 million</strong> net outflow. Conversely, the Central region (Orchard / Marina Bay) gains <strong>+S$25 million</strong> from high-net-worth inbound JB visitors.
          </p>

          {/* FCT REIT Case Study Box */}
          <div className="bg-neutral-950 border border-neutral-800 p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#8F801B] flex items-center gap-2">
                <Building2 className="w-4 h-4" /> Real Estate Masterclass: Frasers Centrepoint Trust (FCT) Defense
              </h4>
              <span className="text-xs text-neutral-500 font-mono">SGX: J69U</span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed m-0">
              Despite owning northern flagship malls (Causeway Point, Northpoint City) adjacent to the border, FCT reported <strong>99.6% portfolio occupancy</strong> and average positive rental reversions of <strong>+6.5%</strong>. The secret lies in active tenant curation: <strong>54% of FCT&apos;s portfolio consists of essential trades</strong> (supermarkets, clinics, tuition centers, banking). A commuter will not haul 10kg of rice and 5L of detergent on an international train. Heavy bulk essentials anchor suburban retail strength.
            </p>
          </div>
        </section>

        {/* 9. COST STRUCTURE ASYMMETRY GRID */}
        <section className="space-y-6">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Cost Structure Analysis</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Operating Cost Asymmetries: SG vs. JB</h2>
            <p className="text-neutral-400 text-sm">Why Singaporean merchants cannot win price wars, making operational adaptation imperative.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-neutral-950 border border-neutral-900 space-y-3 text-left">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Leasing Rent PSF Disparity</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Singapore Outside Central Region (OCR) retail space averages <strong>S$15.00 psf/month</strong> (strata purchase up to S$2,154 psf). In JB City Centre, prime retail rents hover at <strong>RM3 to RM10 psf</strong> (~S$3.00 psf/month). Singapore real estate is 5x more expensive per square foot.
              </p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-900 space-y-3 text-left">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Labor &amp; Progressive Wage Mandates</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Singapore&apos;s Progressive Wage Model (PWM) mandates a minimum gross wage of <strong>S$2,435/month</strong> for entry retail assistants by September 2026. In Malaysia, standard retail wages hover at <strong>RM1,700/month</strong> (~S$480/month). Domestic labor inputs are 5x higher.
              </p>
            </div>
          </div>
        </section>

        {/* 10. THE JS-SEZ RELOCATION PLAYBOOK */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">The Relocation Playbook</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">JS-SEZ Twinning &amp; Dual-Node Supply Chains</h2>

          <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
            Establishing a physical presence in the Johor-Singapore Special Economic Zone (JS-SEZ) allows Singaporean enterprises to capture escaped revenue by &quot;twinning&quot; operations—combining Singapore HQ capital and global access with Johor&apos;s low cost of production.
          </p>

          {/* JS-SEZ Fiscal Incentives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 bg-neutral-950 border border-neutral-900">
              <span className="text-xs font-bold uppercase text-[#8F801B]">5% Corporate Tax</span>
              <h4 className="text-white font-bold text-sm my-2">15-Year CIT Relief</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">Eligible sectors operating in designated JS-SEZ flagship zones enjoy CIT rates as low as 5% for up to 15 years.</p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-900">
              <span className="text-xs font-bold uppercase text-[#8F801B]">100% Tax Allowance</span>
              <h4 className="text-white font-bold text-sm my-2">ITA Capex Offset</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">100% Investment Tax Allowance on qualifying capital expenditure for facility fit-outs and equipment setups.</p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-900">
              <span className="text-xs font-bold uppercase text-[#8F801B]">Enterprise SG Grants</span>
              <h4 className="text-white font-bold text-sm my-2">MRA Grant Pipeline</h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Tap into the official <Link href="/mra-grant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">MRA grant</Link> to subsidize up to 50–70% of overseas expansion and market setup costs.
              </p>
            </div>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed max-w-4xl pt-2">
            To execute cross-border master licensing and franchise node setups without operational friction, engage a verified <strong><Link href="/franchise-consultant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">top franchise consultant in Singapore</Link></strong> to audit your territory boundaries. To safeguard brand marks across ASEAN, consult a certified <strong><Link href="/ip-consultant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">top IP consultant in Singapore</Link></strong>. Additionally, review our cross-border logistics framework: <strong><Link href="/insights/vietnam-expansion-blueprint" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">Singapore-Vietnam Expansion Blueprint</Link></strong> and asset-light scaling guide: <strong><Link href="/insights/wang-lao-ji-global-expansion-strategy" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">Wang Lao Ji Global Expansion Strategy</Link></strong>.
          </p>
        </section>

        {/* 11. CROSS-BORDER DIGITAL PAYMENTS */}
        <section className="space-y-6">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Fintech Integration</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">PayNow-DuitNow &amp; Unified Loyalty Ecosystems</h2>
            <p className="text-neutral-400 text-sm">Transforming cross-border leakage into a captive digital ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-neutral-950 border border-neutral-900 space-y-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8F801B]" /> Bilateral QR Payment Infrastructure
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                The PayNow-DuitNow integration allows near real-time QR payments across SGD and MYR accounts. Singaporean merchants operating dual-node outlets in JB can accept SGD via dynamic SGQR codes, removing foreign exchange friction for consumers while maintaining cash flow visibility and reducing transaction fees.
              </p>
            </div>
            <div className="p-6 bg-neutral-950 border border-neutral-900 space-y-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8F801B]" /> Border-Agnostic Loyalty Engines
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed m-0">
                Retail conglomerates with footprints in both countries can deploy unified loyalty programs. Earning points at a JB storefront and restricting redemption exclusively to domestic Singapore outlets keeps consumers locked inside the brand ecosystem regardless of physical location.
              </p>
            </div>
          </div>
        </section>

        {/* 12. STRATEGIC IMPERATIVES FOR C-SUITE & SMES */}
        <section className="space-y-6 text-left border-l-2 border-[#8F801B] pl-6 md:pl-8">
          <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Strategic Playbook</span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Executive Action Framework for Retail &amp; F&amp;B Leaders</h2>

          <div className="space-y-4 max-w-4xl">
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex gap-4 items-start">
              <span className="text-[#8F801B] font-bold text-base">01</span>
              <div>
                <h4 className="text-white font-bold text-sm">Concede Pure Price Arbitrage</h4>
                <p className="text-xs text-neutral-400 m-0">Cease engaging in price wars for mass-market FMCG. Pivot heavily into product exclusivity, localized curation, and high-touch service environments.</p>
              </div>
            </div>
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex gap-4 items-start">
              <span className="text-[#8F801B] font-bold text-base">02</span>
              <div>
                <h4 className="text-white font-bold text-sm">Structure Inventory Around Regulatory Barriers</h4>
                <p className="text-xs text-neutral-400 m-0">Align marketing around goods heavily restricted from cross-border import: alcohol, tobacco, items &gt;S$100 GST limit, raw agricultural goods, and specialized healthcare.</p>
              </div>
            </div>
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex gap-4 items-start">
              <span className="text-[#8F801B] font-bold text-base">03</span>
              <div>
                <h4 className="text-white font-bold text-sm">Anchor Suburban Real Estate in Essential Trades</h4>
                <p className="text-xs text-neutral-400 m-0">Emulate resilient REIT blueprints by populating floor space with high-frequency, heavy-bulk, or essential services (medical clinics, enrichment, local banking).</p>
              </div>
            </div>
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex gap-4 items-start">
              <span className="text-[#8F801B] font-bold text-base">04</span>
              <div>
                <h4 className="text-white font-bold text-sm">Migrate Backend Supply Chains to JS-SEZ</h4>
                <p className="text-xs text-neutral-400 m-0">Relocate central prep kitchens and warehousing to JB under 5% CIT incentives. Lower cost of goods sold while retaining premium Singapore storefronts.</p>
              </div>
            </div>
            <div className="p-4 bg-neutral-950 border border-neutral-900 flex gap-4 items-start">
              <span className="text-[#8F801B] font-bold text-base">05</span>
              <div>
                <h4 className="text-white font-bold text-sm">Target Inbound Malaysian Wealth</h4>
                <p className="text-xs text-neutral-400 m-0">Central region retailers must aggressively market luxury, exclusive event bundles, and high-end hospitality to the projected +57% inbound JB visitor base.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. HIGH-INTENSITY CONVERSION MAGNET */}
        <section className="py-16 bg-neutral-950 border border-neutral-900 text-center space-y-6 max-w-4xl mx-auto">
          <Lock className="w-8 h-8 text-[#8F801B] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Download the Complete 20-Slide Executive Report</h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
            Access complete financial models, REIT defense benchmarks, and JS-SEZ tax incentive playbooks presented in an executive slide format.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/20"
            >
              Download Full 20-Slide PDF Report
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <p className="text-[10px] text-neutral-600 tracking-wide uppercase pt-4">
            Available exclusively to Singapore Registered Businesses. Corporate verification applied.
          </p>
        </section>

      </main>
    </div>
  );
}
