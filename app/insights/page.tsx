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
        }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans antialiased selection:bg-[#8F801B]/20 w-full overflow-x-hidden">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION - PREMIUM NOIR ALIGNMENT */}
      <section className="bg-black pt-40 pb-20 px-6 text-center border-b border-neutral-900">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-[#8F801B] font-bold tracking-[0.2em] uppercase text-xs block">
            FT Synergist Intelligence
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Strategic Intelligence for <br />
            <span className="text-[#8F801B] italic">Scaling Enterprises</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            We strip away the academic theory. These are the actionable roadmaps, grant frameworks, and expansion playbooks we use to scale our own ventures.
          </p>
        </div>
      </section>

      {/* 2. LATEST FEATURED REPORT */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <div className="bg-neutral-950 border border-neutral-800 overflow-hidden flex flex-col lg:flex-row items-stretch">

          {/* Left: Content */}
          <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center space-y-6 text-left">
            <div className="flex items-center space-x-2 text-[#8F801B] font-bold text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8F801B]"></span>
              <span>Latest Case Study</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">
              The "Wang Lao Ji" Pivot: A Blueprint for Global Expansion
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              How a 197-year-old heritage brand grew profits by 15.87% by reinventing itself for the West. A masterclass in localization for Singapore SMEs.
            </p>

            <div className="pt-2">
              <Link
                href="/insights/wang-lao-ji-global-expansion-strategy"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#8F801B] text-white font-bold text-xs uppercase tracking-wider rounded-none hover:bg-[#A08d1e] transition-all"
              >
                Read Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: IMAGE */}
          <div className="relative lg:w-1/2 min-h-[280px] lg:min-h-full bg-neutral-900 border-t lg:border-t-0 lg:border-l border-neutral-800">
            <Image
              src="/walovi-hero.jpg"
              alt="Wang Lao Ji Global Branding Strategy Heritage Cans Layout"
              fill
              className="object-cover opacity-80"
              priority={true}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* 3. INSIGHTS GRID */}
      <section className="py-16 border-t border-neutral-900 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Global Strategy */}
            <div className="border border-neutral-900 p-8 bg-neutral-950/40 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-3">
                <span className="text-[#8F801B] font-bold text-[10px] uppercase tracking-widest block">Global Strategy</span>
                <h4 className="text-lg font-bold text-white tracking-tight">5 Scaling Lessons from Wang Lao Ji</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Why localization beats translation. The PCBC Framework explained natively for fast-moving cross-border operations.
                </p>
              </div>
              <Link href="/insights/wang-lao-ji-global-expansion-strategy" className="text-xs font-bold text-[#8F801B] hover:text-white flex items-center gap-1 transition-colors uppercase tracking-wider">
                Read Article <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Card 2: Grants & Funding */}
            <div className="border border-neutral-900 p-8 bg-neutral-950/40 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-3">
                <span className="text-[#8F801B] font-bold text-[10px] uppercase tracking-widest block">Grants & Funding</span>
                <h4 className="text-lg font-bold text-white tracking-tight">EDG Grant Eligibility Guide</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  How to structure your branding and core transformation scopes to cleanly qualify for Enterprise Singapore co-funding support.
                </p>
              </div>
              <Link href="/insights/edg-grant-eligibility-guide" className="text-xs font-bold text-[#8F801B] hover:text-white flex items-center gap-1 transition-colors uppercase tracking-wider">
                Read Article <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Card 3: Innovation & AI */}
            <div className="border border-neutral-900 p-8 bg-neutral-950/40 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-3">
                <span className="text-[#8F801B] font-bold text-[10px] uppercase tracking-widest block">Innovation & AI</span>
                <h4 className="text-lg font-bold text-white tracking-tight">State of AI in Southeast Asia</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Deep regional intelligence report outlining proprietary data automation and machine learning workflows within ASEAN enterprise silos.
                </p>
              </div>
              <Link href="/insights/state-of-ai-2026" className="text-xs font-bold text-[#8F801B] hover:text-white flex items-center gap-1 transition-colors uppercase tracking-wider">
                Read Article <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}