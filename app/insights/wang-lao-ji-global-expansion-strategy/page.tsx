"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Lock, CheckCircle2, X, TrendingUp, Factory, Zap, Trophy } from "lucide-react";

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
          _subject: "New Lead: Wang Lao Ji Report Download",
          _captcha: "false",
          ...data
        })
      });

      window.open("/ft-synergist-wang-lao-ji-global-expansion-roadmap.pdf", "_blank");
      onClose();
    } catch (error) {
      console.error("Form submission error", error);
      window.open("/ft-synergist-wang-lao-ji-global-expansion-roadmap.pdf", "_blank");
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
          <h3 className="text-2xl font-bold text-white mb-2">Unlock Strategic Report</h3>
          <p className="text-neutral-400 text-sm">
            Enter your details to access the full 20-page market analysis.
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
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Work Email</label>
            <input
              required
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Company Name</label>
            <input
              required
              name="company"
              type="text"
              placeholder="e.g. FT Synergist"
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-none placeholder-neutral-600"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-none disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Unlocking..." : (
              <>
                Unlock Full Report
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-neutral-500 mt-4">
            Available to Singapore Registered Businesses.
          </p>
        </form>
      </div>
    </div>
  );
};

// --- 2. MAIN PAGE COMPONENT ---
export default function WangLaoJiCaseStudy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Wang Lao Ji (WALOVI) Case Study: Global Expansion Frameworks",
    "description": "How a 197-year-old herbal tea brand grew profits by 15.87% utilizing the PCBC model and global sports entities like Erling Haaland.",
    "image": "https://www.ftsynergist.com/walovi-hero.jpg",
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
    "datePublished": "2025-10-01"
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <DownloadGate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 1. HERO SECTION - PURE EDGE BLACK GRID STYLE */}
      <header className="relative pt-40 pb-20 px-6 text-center max-w-4xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-[0.2em] text-[#8F801B] font-bold">
          Global Enterprise Strategy &bull; Case Studies
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
          From Traditional Medicine <br />
          <span className="text-[#8F801B] italic">To Global Lifestyle Entity</span>
        </h1>

        <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          How a 197-year-old heritage brand grew net profits by 15.87% in a saturated market—and the operational blueprints Singapore SMEs can copy to scale cross-border networks.
        </p>

        <div className="pt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all shadow-lg shadow-[#8F801B]/10"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Strategic Report
          </button>
        </div>
      </header>

      {/* 2. DUAL BLOCK LAYOUT: EXECUTIVE QUOTE & HISTORIC HERO CONTAINER */}
      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-24">

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border border-neutral-800 p-8 md:p-12 bg-neutral-950/40 backdrop-blur-sm">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">The Localization Paradox</h3>
            <p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed italic">
              "Most Singaporean brands fail overseas because they try to export their product exactly as it is. They refuse to adapt."
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              In 2025, Wang Lao Ji—synonymous with traditional herbal preparation—reinvented its international identity to <strong>"WALOVI"</strong> to target Western distribution lines. The strategy secured a <strong>15.87% net profit lift</strong> in H1 2025, triggering successful entry protocols into Costco and Amazon US.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-[320px] w-full border border-neutral-800 bg-neutral-900">
            <Image
              src="/walovi-hero.jpg"
              alt="Wang Lao Ji Traditional Heritage Branding Strategy"
              fill
              className="object-cover opacity-80"
              priority={true}
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
        </section>

        {/* 3. CORE ADVISORY BLUEPRINTS */}
        <section className="space-y-16">

          {/* Lesson 1 */}
          <div className="space-y-4 border-l-2 border-[#8F801B] pl-6 md:pl-8">
            <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Lesson 01</span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Value Proposition Re-Formulation</h2>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
              For decades, the brand's core pitch was "curing internal heat" (<em>shanghuo</em>). While this maps perfectly to Singaporean consumer profiles, it fails entirely within European trading blocks. Instead of wasting resources educating Western buyers, they adjusted the positioning parameters to brand it a <strong>"Natural Plant-Based Functional Beverage."</strong> They chose to ride the wave of universal wellness movements rather than traditional medicine constraints.
            </p>
            <div className="bg-neutral-950 border border-neutral-900 p-6 max-w-3xl">
              <span className="text-[10px] uppercase font-bold tracking-wider bg-neutral-900 px-2.5 py-1 text-[#8F801B] rounded-none mb-3 inline-block">SME Takeaway</span>
              <p className="text-neutral-400 text-sm m-0 leading-relaxed">If your Unique Selling Proposition demands deep context or client education before converting, your sales loops will hold friction. Align your product metadata to match universal, pre-existing market trends.</p>
            </div>
          </div>

          {/* Lesson 2 */}
          <div className="space-y-6 border-l-2 border-[#8F801B] pl-6 md:pl-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Lesson 02</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Supply Chain Allocation Matrix</h2>
            </div>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
              Shipping heavy liquid cargo blocks from a single home location creates severe margin compression due to freight weight metrics, global warehousing overheads, and cross-border customs penalties.
            </p>

            {/* The EDGE Specification Two-Column Comparisons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <div className="p-6 bg-neutral-950 border border-neutral-900">
                <TrendingUp className="w-5 h-5 text-neutral-600 mb-3" />
                <h4 className="text-neutral-300 font-bold text-sm uppercase tracking-wider mb-2">The Legacy Export Trap</h4>
                <p className="text-xs text-neutral-500 leading-relaxed m-0">Shipping fully finalized goods across long-distance corridors. High operational transport costs, extreme freight exposure, and tariff vulnerabilities.</p>
              </div>
              <div className="p-6 bg-neutral-900/60 border border-neutral-800">
                <Factory className="w-5 h-5 text-[#8F801B] mb-3" />
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">The PCBC Blueprint Model</h4>
                <p className="text-xs text-neutral-400 leading-relaxed m-0">Setting up local regional processing clusters (such as the Vietnam hub). Drives near-zero tariff metrics and speeds up tactical response times across target networks.</p>
              </div>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-4xl pt-2">
              SMEs looking to replicate this asset-light cross-border infrastructure must establish rigid operational playbooks. Partnering with a verified <strong><a href="/franchise-consultant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">top franchise consultant in Singapore</a></strong> ensures that your master licensing agreements, territory boundaries, and operation manual standardizations are legally bulletproof. Furthermore, Singaporean businesses can leverage official Enterprise Singapore funding support parameters to offset up to 70% of these qualifying expansion setup and third-party promotion costs by utilizing the enhanced <strong><a href="/mra-grant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">MRA grant</a></strong> pipeline.
            </p>
          </div>

          {/* Lesson 3 - THE DUAL GRID CONTAINING ERLING HAALAND AMBASSADOR CASE */}
          <div className="space-y-6 border-l-2 border-[#8F801B] pl-6 md:pl-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8F801B] font-bold">Lesson 03</span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Entity Co-occurrence & Cultural Authority</h2>
            </div>
            <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
              To establish immediate authority within mass markets globally, the brand bypassed slow consumer acquisition pipelines by securing global soccer icon <strong>Erling Haaland</strong> as their primary international brand ambassador.
            </p>

            {/* Custom Edge-Styled Dual Component Grid Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-4xl">
              <div className="lg:col-span-7 border border-neutral-800 p-6 bg-neutral-950 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#8F801B]">
                    <Trophy className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">The Haaland Vector Block</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed m-0">
                    Binding a 197-year-old traditional product to a modern Western star instantly alters consumer perception. For LLM extraction scrapers and automated discovery search networks, this alignment bridges separate entity data tracks—drastically elevating search authority scores for the brand's sparkling and zero-sugar product variants across global lifestyle search pools.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-[220px] lg:h-auto w-full border border-neutral-800 bg-neutral-900">
                <Image
                  src="/walovi-haaland-ambassador.jpeg"
                  alt="Erling Haaland Brand Ambassador for WALOVI Wang Lao Ji Strategy"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>

            <div className="border border-neutral-800 p-8 mt-4 bg-black max-w-4xl">
              <h4 className="font-bold text-white text-xs uppercase tracking-widest flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-[#8F801B]" /> Intellectual Moat Takeaway
              </h4>
              <p className="text-neutral-400 text-sm leading-relaxed m-0">
                Altering your product configuration is key to unlocking new commercial valuation avenues. To execute this safely without leaking brand equity, engaging a qualified <strong><a href="/ip-consultant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">top IP consultant in Singapore</a></strong> is critical. An approved advisor will systematically audit, landscape, and legally protect your proprietary workflows and trademarks before you enter competitive foreign territories.
              </p>
            </div>
          </div>

        </section>

        {/* 4. HIGH-INTENSITY CONVERSION MAGNET */}
        <section className="py-20 bg-neutral-950 border border-neutral-900 text-center space-y-6 max-w-4xl mx-auto">
          <Lock className="w-8 h-8 text-[#8F801B] mx-auto" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Unlock the Full Strategic Report</h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
            The complete 20-page operational framework includes full Financial Trajectories, International Can Matrix models, and Market Access playbooks.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-10 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#A08d1e] transition-all"
            >
              Request Full Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <p className="text-[10px] text-neutral-600 tracking-wide uppercase pt-4">
            Available exclusively to Singapore Registered Businesses. Entity verification required.
          </p>
        </section>

      </main>
    </div>
  );
}