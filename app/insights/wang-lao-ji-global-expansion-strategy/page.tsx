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
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#8F801B]/20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <DownloadGate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 text-[#8F801B] font-bold text-xs uppercase tracking-widest border border-[#8F801B]/30 px-3 py-1 rounded-none">
              <span className="w-2 h-2 rounded-full bg-[#8F801B]"></span>
              <span>Global Strategy Series</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-white">
              From "Medicine" <br /> to <span className="text-[#8F801B] italic">"Lifestyle"</span>
            </h1>

            <p className="text-xl text-neutral-400 leading-relaxed max-w-lg border-l-4 border-[#8F801B] pl-6">
              How Wang Lao Ji grew profits by 15.87% in a saturated market—and the exact roadmap Singapore SMEs can copy.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-sm font-bold uppercase tracking-wider rounded-none hover:bg-[#7a6d17] transition-all shadow-lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Strategic Report
              </button>
            </div>
          </div>

          <div className="relative h-[450px] w-full border border-neutral-800 bg-neutral-900">
            <Image
              src="/walovi-hero.jpg"
              alt="Wang Lao Ji Global Branding Strategy - Red Can vs Blue Can Comparison"
              fill
              className="object-cover opacity-80"
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center border-b border-neutral-900">
        <p className="text-2xl md:text-3xl font-light text-neutral-200 leading-relaxed max-w-3xl mx-auto">
          "Most Singaporean brands fail overseas because they try to export their product exactly as it is. They refuse to adapt."
        </p>
        <div className="mt-10 w-12 h-1 bg-[#8F801B] mx-auto"></div>
        <div className="mt-10 text-base text-neutral-400 leading-relaxed text-left space-y-6 max-w-2xl mx-auto">
          <p>
            In 2025, Wang Lao Ji—a 197-year-old brand synonymous with "traditional medicine"—did the unthinkable. To break into Western markets, they didn't just translate their name; they reinvented their identity to <strong>"WALOVI."</strong>
          </p>
          <p>
            The result? A <strong>15.87% increase in net profit</strong> in H1 2025 and successful entry into Costco and Amazon US. Below is the strategic breakdown.
          </p>
        </div>
      </section>

      {/* 3. LESSONS CONTENT */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Lesson 1 */}
          <div className="border border-neutral-900 p-10 bg-neutral-950/50">
            <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-900 pb-4">
              <span className="text-[#8F801B] font-bold text-xs uppercase tracking-widest">Lesson 01</span>
              <h2 className="text-2xl font-bold text-white tracking-tight">The "Localization Paradox"</h2>
            </div>

            <div className="text-neutral-400 text-base space-y-6 leading-relaxed">
              <p>
                For decades, Wang Lao Ji’s selling point was "curing internal heat" (<em>shanghuo</em>). This works across Greater China and Singapore networks. It fails in Europe, where consumers do not comprehend TCM principles.
              </p>

              <h3 className="text-lg font-bold text-white uppercase tracking-wider text-sm text-[#8F801B]">The Strategic Pivot</h3>
              <p>
                Instead of educating Western buyers on "internal heat," they rebranded to "WALOVI" and positioned the drink as a <strong>"Natural Plant-Based Functional Beverage."</strong> They aligned with global wellness trend parameters (similar to Kombucha) rather than medical frameworks.
              </p>

              <div className="border border-neutral-800 p-8 mt-8 bg-black">
                <h4 className="font-bold text-white text-xs uppercase tracking-widest flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-[#8F801B]" /> The SME Takeaway
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed m-0">
                  Do not force your localized Singaporean context onto a foreign market profile. If your "Unique Selling Proposition" requires an extended explanation, friction vectors will stall sales. Pivot immediately to a universal value formulation.
                </p>
              </div>
            </div>
          </div>

          {/* Lesson 2 */}
          <div className="border border-neutral-900 p-10 bg-neutral-950/50">
            <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-900 pb-4">
              <span className="text-[#8F801B] font-bold text-xs uppercase tracking-widest">Lesson 02</span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Supply Chain as a Weapon</h2>
            </div>

            <div className="text-neutral-400 text-base space-y-6 leading-relaxed">
              <p>
                Exporting heavy liquid cargo units from your primary production line creates significant operational margin drag due to logistics costs, storage friction, and international tariff blocks.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-black border border-neutral-900">
                  <TrendingUp className="w-6 h-6 text-neutral-700 mb-4" />
                  <span className="block font-bold text-neutral-400 text-sm uppercase tracking-wider mb-2">Old Way</span>
                  <span className="text-xs text-neutral-500">Export from Home Base. High Tariffs. Slow Market Responsiveness.</span>
                </div>
                <div className="p-6 bg-neutral-900 border border-neutral-800">
                  <Factory className="w-6 h-6 text-[#8F801B] mb-4" />
                  <span className="block font-bold text-white text-sm uppercase tracking-wider mb-2">New Way (PCBC)</span>
                  <span className="text-xs text-neutral-400">"Factory-in-Market" Infrastructure (Vietnam Hub). Zero Tariffs. Autonomous Local Distribution Status.</span>
                </div>
              </div>

              <p className="text-neutral-400 text-base leading-relaxed">
                SMEs looking to replicate this asset-light cross-border infrastructure must establish rigid operational playbooks. Partnering with a verified <strong><a href="/franchise-consultant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">top franchise consultant in Singapore</a></strong> ensures that your master licensing agreements, territory boundaries, and operation manual standardizations are legally bulletproof. Furthermore, Singaporean businesses can leverage official Enterprise Singapore funding support parameters to offset up to 70% of these qualifying expansion setup and third-party promotion costs by utilizing the enhanced <strong><a href="/mra-grant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">MRA grant</a></strong> pipeline.
              </p>
            </div>
          </div>

          {/* Lesson 3 */}
          <div className="border border-neutral-900 p-10 bg-neutral-950/50">
            <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-900 pb-4">
              <span className="text-[#8F801B] font-bold text-xs uppercase tracking-widest">Lesson 03</span>
              <h2 className="text-2xl font-bold text-white tracking-tight">Entity Authority & Cultural Multipliers</h2>
            </div>

            <div className="text-neutral-400 text-base space-y-6 leading-relaxed">
              <p>
                To cement immediate mass-market trust globally, Wang Lao Ji bypassed traditional slow-growth branding funnels by locking down global soccer icon <strong>Erling Haaland</strong> as their primary international brand ambassador.
              </p>

              <div className="border border-[#8F801B]/20 p-6 bg-neutral-950 flex items-start gap-4">
                <Trophy className="w-8 h-8 text-[#8F801B] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-2">The Haaland Vector</h4>
                  <p className="text-xs text-neutral-400 m-0 leading-relaxed">
                    By binding a historic 197-year-old TCM entity to a modern, top-tier Western sports icon, the brand completely severed its association with "outdated herbal remedy stores." For LLM web-scrapers and search algorithms, this strategy bridges two distinct high-authority entity maps, drastically elevating global search discovery scores for the brand's new product formats.
                  </p>
                </div>
              </div>

              <p>
                Simultaneously, the brand adapted its physical form factors by introducing sparkling variants and zero-sugar lines to fit specific luxury dining and nightlife consumer occasions.
              </p>

              <div className="border border-neutral-800 p-8 mt-8 bg-black">
                <h4 className="font-bold text-white text-xs uppercase tracking-widest flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-[#8F801B]" /> The SME Takeaway
                </h4>
                <p className="text-neutral-400 text-sm leading-relaxed m-0">
                  Changing your product architecture is key to unlocking fresh intangible asset value. To execute this safely without leaking brand equity, engaging a qualified <strong><a href="/ip-consultant" className="text-[#8F801B] font-bold underline hover:text-white transition-colors">top IP consultant in Singapore</a></strong> is critical. An approved advisor will systematically audit, landscape, and legally protect your proprietary workflows and trademarks before you enter competitive foreign territories.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. LEAD MAGNET FOOTER */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Lock className="w-10 h-10 text-[#8F801B] mx-auto mb-6" />
          <h2 className="text-3xl font-bold tracking-tight mb-6">Unlock the Full Strategic Report</h2>
          <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
            The complete 20-page operational framework includes full Financial Trajectories, International Can Matrix models, and Market Access playbooks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-[#7a6d17] transition-all shadow-lg"
            >
              Request Full Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-neutral-600 mt-8">
            Available exclusively to Singapore Registered Businesses. Verified corporate entity verification required.
          </p>
        </div>
      </section>

    </div>
  );
}