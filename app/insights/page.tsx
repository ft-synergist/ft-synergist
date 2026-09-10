import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Insights | FT Synergist",
  description: "Market-defining research, grant frameworks, and operational roadmaps for Singaporean enterprises.",
};

export default function InsightsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Strategic Insights | FT Synergist",
    "description": "Market-defining research, grant frameworks, and operational roadmaps for Singaporean enterprises.",
    "url": "https://www.ftsynergist.com/insights",
    "publisher": {
      "@type": "Organization",
      "name": "FT Synergist"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://www.ftsynergist.com/insights/petale-tea-ip-growth-case-study",
          "name": "Unlocking Intangible Assets: How to Leverage Your IP to Grow Your Business by 400%"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://www.ftsynergist.com/insights/wang-lao-ji-global-expansion-strategy",
          "name": "Wang Lao Ji Global Expansion Strategy"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://www.ftsynergist.com/insights/edg-grant-eligibility-guide",
          "name": "EDG Grant Eligibility Guide"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "url": "https://www.ftsynergist.com/insights/state-of-ai-2026",
          "name": "State of AI in Southeast Asia"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "url": "https://www.ftsynergist.com/insights/vietnam-expansion-blueprint",
          "name": "Strategic Blueprint: Navigating the Singapore-Vietnam Expansion"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "url": "https://www.ftsynergist.com/insights/rts-link-singapore-retail-defense",
          "name": "The RTS Link & Singapore Retail Defense Framework"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "url": "https://www.ftsynergist.com/insights/what-happens-to-psg-after-september-2026",
          "name": "What Happens to PSG After September 2026? Singapore SME Transition Guide"
        }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased w-full overflow-x-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION — Expansive McKinsey Title */}
      <section className="pt-16 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="border-b border-gray-900 pb-8">
          <span className="text-[#8F801B] font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
            FT Synergist Intelligence & Executive Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Our Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed font-normal">
            Market-defining research, IP commercialisation frameworks, grant roadmaps, and global expansion case studies for scaling Asian enterprises.
          </p>
        </div>
      </section>

      {/* 2. FEATURED INSIGHT — IPOS IP Week 2026 Showcase */}
      <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest text-gray-900 uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8F801B] animate-pulse"></span>
            Featured Case Study — IPOS IP Week 2026
          </span>
          <span className="text-xs font-semibold text-[#8F801B] uppercase tracking-wider bg-[#8F801B]/10 px-2.5 py-1 rounded">
            Presented by IP Grow
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-7 relative aspect-[16/10] bg-gray-900 overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/insights/ipos-ip-week-2026/frederick-tan-rosemary-kwa-ip-week-panel.jpg"
              alt="Frederick Tan and Rosemary Kwa speaking on stage at IPOS IP Week 2026 Marina Bay Sands"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority={true}
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 text-left">
            <span className="text-xs font-semibold text-[#8F801B] uppercase tracking-wider font-mono">
              Intangible Asset (IA) & IP Commercialisation
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight hover:text-[#8F801B] transition-colors">
              <Link href="/insights/petale-tea-ip-growth-case-study">
                Unlocking Intangible Assets: How to Leverage Your IP to Grow Your Business by 400% <ArrowRight className="inline-block ml-1 h-5 w-5 text-[#8F801B]" />
              </Link>
            </h2>

            <p className="text-sm font-serif italic text-gray-500">
              August 2026 — Presented at Marina Bay Sands by IPOS & GoBusiness IP Grow
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              Inside Pétale Tea’s journey: How Frederick Tan (FT Synergist) and Rosemary Kwa unbundled intangible assets, integrated predictive AI algorithms, and deployed an asset-light licensing framework to unlock global blue-chips and multi-market ASEAN scale.
            </p>

            <div className="pt-2">
              <Link
                href="/insights/petale-tea-ip-growth-case-study"
                className="inline-flex items-center text-sm font-bold text-[#8F801B] hover:text-gray-900 transition-colors uppercase tracking-wider"
              >
                Read Case Study Breakdown <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-200 mt-16"></div>
      </section>

      {/* 3. MORE INSIGHTS GRID — Borderless Expansive Grid */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto w-full flex-grow">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-widest text-gray-900 uppercase">
            More Executive Insights & Strategic Reports
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

          {/* Item 1 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[16/9] bg-gray-100 mb-4 overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/report-wlj-cover.png"
                alt="Wang Lao Ji 5 Scaling Lessons"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Global Strategy
            </span>
            <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#8F801B] transition-colors leading-snug mb-2">
              <Link href="/insights/wang-lao-ji-global-expansion-strategy">
                5 Scaling Lessons from Wang Lao Ji
              </Link>
            </h3>
            <p className="text-xs font-serif italic text-gray-400 mb-2">
              October 2025
            </p>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              Why localization beats translation. The PCBC Framework explained natively for fast-moving cross-border operations.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[16/9] bg-gray-100 mb-4 overflow-hidden rounded-lg shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-[#8F801B] flex items-center justify-center p-6 text-white text-center font-serif text-lg font-bold">
                EDG Grant Framework 2026
              </div>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Grants & Funding
            </span>
            <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#8F801B] transition-colors leading-snug mb-2">
              <Link href="/insights/edg-grant-eligibility-guide">
                EDG Grant Eligibility Guide
              </Link>
            </h3>
            <p className="text-xs font-serif italic text-gray-400 mb-2">
              January 2026
            </p>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              How to structure your branding and core transformation scopes to cleanly qualify for Enterprise Singapore co-funding support.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[16/9] bg-gray-100 mb-4 overflow-hidden rounded-lg shadow-sm">
              <Image
                src="/report-ai-cover.png"
                alt="State of AI in Southeast Asia"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Innovation & AI
            </span>
            <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#8F801B] transition-colors leading-snug mb-2">
              <Link href="/insights/state-of-ai-2026">
                State of AI in Southeast Asia
              </Link>
            </h3>
            <p className="text-xs font-serif italic text-gray-400 mb-2">
              September 2025
            </p>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              Deep regional intelligence report outlining proprietary data automation and machine learning workflows within ASEAN enterprise silos.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[16/9] bg-gray-900 mb-4 overflow-hidden rounded-lg shadow-sm border border-neutral-800">
              <Image
                src="/report-rts-cover.png"
                alt="The RTS Link & Singapore Retail Defense"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Macroeconomic Strategy
            </span>
            <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#8F801B] transition-colors leading-snug mb-2">
              <Link href="/insights/rts-link-singapore-retail-defense">
                The RTS Link &amp; Singapore Retail Defense
              </Link>
            </h3>
            <p className="text-xs font-serif italic text-gray-400 mb-2">
              September 2026
            </p>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              Countering S$2.1B revenue leakage, optimizing suburban REIT portfolios, and executing JS-SEZ operational twinning frameworks.
            </p>
          </div>

          {/* Item 5 - Vietnam Expansion Blueprint */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[16/9] bg-gray-900 mb-4 overflow-hidden rounded-lg shadow-sm border border-neutral-800">
              <Image
                src="/report-vietnam-cover.png"
                alt="Navigating the Singapore-Vietnam Expansion"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={false}
              />
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Cross-Border Expansion & MRA
            </span>
            <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#8F801B] transition-colors leading-snug mb-2">
              <Link href="/insights/vietnam-expansion-blueprint">
                Navigating the Singapore-Vietnam Expansion
              </Link>
            </h3>
            <p className="text-xs font-serif italic text-gray-400 mb-2">
              July 2026
            </p>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              Dismantling regulatory complexities via PCBC and DVF frameworks—from Global Minimum Tax down to localized data sovereignty compliance.
            </p>
          </div>

          {/* Item 6 - PSG After September 2026 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[16/9] bg-neutral-900 mb-4 overflow-hidden rounded-lg shadow-sm border border-neutral-800">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-red-950/60 to-[#8F801B]/40 flex flex-col items-center justify-center p-6 text-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 border border-red-800/60 px-2 py-0.5">
                  Scheme Closure · 29 Sept 2026
                </span>
                <span className="text-white font-serif font-bold text-lg leading-snug">PSG Transition Guide</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Grants &amp; Funding
            </span>
            <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#8F801B] transition-colors leading-snug mb-2">
              <Link href="/insights/what-happens-to-psg-after-september-2026">
                What Happens to PSG After September 2026?
              </Link>
            </h3>
            <p className="text-xs font-serif italic text-gray-400 mb-2">
              September 2026
            </p>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              PSG ceases 29 September 2026. How the Productivity Solutions Grant folds into EDGE, what the S$30,000 sub-cap means, and what happens to existing PSG projects.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}