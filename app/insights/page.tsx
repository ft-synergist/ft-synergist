import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, Cpu, Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Insights for Singapore SMEs | FT Synergist",
  description: "Data-driven case studies, market reports, and grant guides to help Singapore enterprises scale up, innovate, and expand globally.",
};

export default function InsightsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Strategic Insights for Singapore SMEs",
    "description": "Market-defining research, EDG grant guides, and scaling case studies.",
    "url": "https://www.ftsynergist.com/insights/",
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
          "url": "https://www.ftsynergist.com/insights/state-of-ai-2026",
          "name": "State of AI in Southeast Asia 2026"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://www.ftsynergist.com/edg-grant",
          "name": "EDG Grant Eligibility Guide"
        }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION - MATCHING HOME PAGE BLACK */}
      <section className="bg-gray-900 text-white pt-32 pb-24 px-4 text-center relative overflow-hidden">
        {/* Subtle Gold Gradient for Premium Feel */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8F801B]/20 via-gray-900 to-gray-900 opacity-60"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Strategic Intelligence
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Market-defining research and actionable roadmaps for Singaporean leaders.
          </p>
        </div>
      </section>

      {/* 2. FEATURED CASE STUDY - THE "CARD" */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto -mt-16 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row transition-transform hover:-translate-y-1 duration-500">
          
          <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
            <div className="flex items-center space-x-2 text-[#8F801B] font-bold text-xs uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#8F801B]"></span>
              <span>Latest Release</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              The "Wang Lao Ji" Pivot: A Blueprint for Global Expansion
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              How a 197-year-old brand grew profits by 15.87% by reinventing itself for the West. A masterclass in localization for Singapore SMEs.
            </p>
            
            <div>
              <Link 
                href="/insights/wang-lao-ji-global-expansion-strategy"
                className="inline-flex items-center group text-[#8F801B] font-bold hover:text-[#7a6d17] transition-colors"
              >
                Read the Case Study
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Side: Abstract Pattern instead of Icons */}
          <div className="bg-gray-50 md:w-1/3 min-h-[250px] relative flex items-center justify-center border-l border-gray-100">
             <Globe className="w-24 h-24 text-gray-200 stroke-1" />
          </div>
        </div>
      </section>

      {/* 3. TOPIC CLUSTER - MINIMALIST ICONS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Intelligence by Category</h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            
            {/* Cluster 1 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-[#8F801B]" />
                <h3 className="text-xl font-bold text-gray-900">Global Expansion</h3>
              </div>
              <ul className="space-y-6 border-l-2 border-gray-100 pl-6">
                <li>
                  <Link href="/insights/wang-lao-ji-global-expansion-strategy" className="group/link block">
                    <span className="font-bold text-gray-900 group-hover/link:text-[#8F801B] transition-colors block mb-1">5 Lessons from Wang Lao Ji</span>
                    <span className="text-sm text-gray-500">Case Study • 6 min read</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cluster 2 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-[#8F801B]" />
                <h3 className="text-xl font-bold text-gray-900">Grants & Funding</h3>
              </div>
              <ul className="space-y-6 border-l-2 border-gray-100 pl-6">
                <li>
                  <Link href="/edg-grant" className="group/link block">
                    <span className="font-bold text-gray-900 group-hover/link:text-[#8F801B] transition-colors block mb-1">EDG Grant Eligibility Guide</span>
                    <span className="text-sm text-gray-500">Funding Guide • 3 min read</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cluster 3 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-6 h-6 text-[#8F801B]" />
                <h3 className="text-xl font-bold text-gray-900">Innovation & AI</h3>
              </div>
              <ul className="space-y-6 border-l-2 border-gray-100 pl-6">
                <li>
                  <Link href="/insights/state-of-ai-2026" className="group/link block">
                    <span className="font-bold text-gray-900 group-hover/link:text-[#8F801B] transition-colors block mb-1">State of AI in SE Asia 2026</span>
                    <span className="text-sm text-gray-500">Market Report • PDF</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER - DARK FOOTER STYLE */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center border-t border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Stop Reading, Start Executing.</h2>
          <p className="text-gray-400 mb-8">
            Join 200+ Market Leaders using FT Synergist to scale globally.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-[#8F801B] hover:bg-[#7a6d17] text-white font-bold rounded-md transition-all shadow-lg"
          >
            Book a 30-Min Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
