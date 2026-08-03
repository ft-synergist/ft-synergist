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
          "url": "https://www.ftsynergist.com/insights/wang-lao-ji-global-expansion-strategy",
          "name": "Wang Lao Ji Global Expansion Strategy"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://www.ftsynergist.com/insights/edg-grant-eligibility-guide",
          "name": "EDG Grant Eligibility Guide"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://www.ftsynergist.com/insights/state-of-ai-2026",
          "name": "State of AI in Southeast Asia"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "url": "https://www.ftsynergist.com/insights/vietnam-expansion-blueprint",
          "name": "Strategic Blueprint: Navigating the Singapore-Vietnam Expansion"
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
            FT Synergist Intelligence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Our Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed font-normal">
            Market-defining research, grant frameworks, and operational roadmaps for scaling Asian enterprises.
          </p>
        </div>
      </section>

      {/* 2. FEATURED INSIGHT — Expansive Layout */}
      <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest text-gray-900 uppercase">
            Featured Insight
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-7 relative aspect-[16/9] bg-gray-100 overflow-hidden">
            <Image
              src="/walovi-hero.jpg"
              alt="Wang Lao Ji Global Branding Strategy"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority={true}
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 text-left">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Case Study
            </span>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-snug tracking-tight hover:text-[#8F801B] transition-colors">
              <Link href="/insights/wang-lao-ji-global-expansion-strategy">
                Singapore's Smart Leap: The "Wang Lao Ji" Blueprint for Global Expansion <ArrowRight className="inline-block ml-1 h-6 w-6 text-[#8F801B]" />
              </Link>
            </h2>

            <p className="text-sm font-serif italic text-gray-500">
              February 2026 — Executive Roadmap
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              How a 197-year-old heritage brand grew profits by 15.87% by reinventing itself for global markets. A masterclass in brand localization, cross-border IP defensibility, and market entry for Asian SMEs.
            </p>

            <div className="pt-2">
              <Link
                href="/insights/wang-lao-ji-global-expansion-strategy"
                className="inline-flex items-center text-sm font-bold text-[#8F801B] hover:text-gray-900 transition-colors uppercase tracking-wider"
              >
                Read Full Insight <ArrowRight className="ml-2 h-4 w-4" />
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
            More Insights
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

          {/* Item 1 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[16/9] bg-gray-100 mb-4 overflow-hidden">
              <Image
                src="/report-wlj-cover.png"
                alt="Wang Lao Ji 5 Scaling Lessons"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
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
            <div className="relative aspect-[16/9] bg-gray-100 mb-4 overflow-hidden">
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
            <div className="relative aspect-[16/9] bg-gray-100 mb-4 overflow-hidden">
              <Image
                src="/report-ai-cover.png"
                alt="State of AI in Southeast Asia"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
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
            <div className="relative aspect-[16/9] bg-gray-100 mb-4 overflow-hidden">
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center p-6 text-white text-center font-serif text-lg font-bold">
                Singapore-Vietnam Corridor
              </div>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              Market Access
            </span>
            <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#8F801B] transition-colors leading-snug mb-2">
              <Link href="/insights/vietnam-expansion-blueprint">
                Singapore-Vietnam Expansion Blueprint
              </Link>
            </h3>
            <p className="text-xs font-serif italic text-gray-400 mb-2">
              June 2025
            </p>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              Dismantling macro complexities, Global Minimum Tax liabilities, and PDPL cross-border localization tracking vectors across ASEAN corridors.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}