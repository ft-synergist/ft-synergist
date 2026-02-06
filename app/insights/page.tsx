import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, Cpu, Globe, FileText, ChevronRight } from "lucide-react";
import { Metadata } from "next";

// 1. LINKEDIN / SEO TAGS (The "LinkedIn Invisible" Fix)
export const metadata: Metadata = {
  title: "Strategic Insights for Singapore SMEs | FT Synergist",
  description: "Data-driven case studies, market reports, and grant guides to help Singapore enterprises scale up, innovate, and expand globally.",
  openGraph: {
    title: "Strategic Insights for Singapore SMEs",
    description: "Read our latest case study: How Wang Lao Ji grew profits 15.87% via localization. Download the 2026 AI Report.",
    url: "https://www.ftsynergist.com/insights/",
    type: "website",
    // Note: Ensure you actually have an image at this path, or remove this line
    images: [{ url: "https://www.ftsynergist.com/assets/images/walovi-hero.jpg" }],
  },
};

export default function InsightsPage() {
  // 2. SCHEMA MARKUP (The "Rich Snippet" Fix)
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
    <div className="flex flex-col min-h-screen bg-background text-gray-900 font-sans">
      {/* Inject Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#003366] to-[#001f3f] text-white pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Strategic Intelligence
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed opacity-90">
            Stop guessing. Start scaling. <br/>
            Data-backed roadmaps for Singapore's market leaders.
          </p>
        </div>
      </section>

      {/* FEATURED CASE STUDY (WANG LAO JI) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto -mt-10 relative z-20">
        <div className="bg-white rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] border-t-4 border-[#d9534f] p-8 md:p-12 relative">
          
          <span className="inline-block bg-[#d9534f] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            New Case Study
          </span>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            The "Wang Lao Ji" Pivot: A Blueprint for Global Expansion
          </h2>
          
          <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-2">
            <p><strong className="text-gray-900">The Problem:</strong> A 197-year-old brand trapped in a local niche.</p>
            <p><strong className="text-gray-900">The Fix:</strong> A radical "Localization" strategy that grew profits by 15.87%.</p>
            <p><strong className="text-gray-900">The Lesson:</strong> Why Singaporean SMEs fail overseas when they don't adapt.</p>
          </div>
          
          {/* 3. HOVER STATE BUTTON (The "Ghost Button" Fix) */}
          <div>
            <Link 
              href="/insights/wang-lao-ji-global-expansion-strategy"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#003366] text-white text-base font-bold rounded-md hover:bg-[#002244] transition-colors shadow-sm"
            >
              Read the Full Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TOPIC CLUSTER GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            
            {/* Cluster 1: Global Expansion */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-bold text-[#003366] mb-6 border-b-2 border-gray-100 pb-2">🌏 Global Expansion</h3>
              <ul className="space-y-6">
                <li>
                  <Link href="/insights/wang-lao-ji-global-expansion-strategy" className="group block">
                    <span className="font-bold text-gray-900 group-hover:text-[#d9534f] transition-colors text-lg block mb-1">
                      5 Scaling Lessons from Wang Lao Ji
                    </span>
                    <span className="text-sm text-gray-500">Case Study • 6 min read</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cluster 2: Grants & Funding */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-bold text-[#003366] mb-6 border-b-2 border-gray-100 pb-2">💰 Grants & Funding</h3>
              <ul className="space-y-6">
                <li>
                  <Link href="/edg-grant" className="group block">
                    <span className="font-bold text-gray-900 group-hover:text-[#d9534f] transition-colors text-lg block mb-1">
                      EDG Grant Eligibility Checklist (2026)
                    </span>
                    <span className="text-sm text-gray-500">Funding Guide • 3 min read</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cluster 3: Innovation & AI */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 h-full">
              <h3 className="text-xl font-bold text-[#003366] mb-6 border-b-2 border-gray-100 pb-2">🤖 Innovation & AI</h3>
              <ul className="space-y-6">
                <li>
                  <Link href="/insights/state-of-ai-2026" className="group block">
                    <span className="font-bold text-gray-900 group-hover:text-[#d9534f] transition-colors text-lg block mb-1">
                      State of AI in SE Asia 2026
                    </span>
                    <span className="text-sm text-gray-500">Market Report • PDF Download</span>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="bg-gray-50 border-t border-gray-200 py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Stop Reading, Start Executing.</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join 200+ Market Leaders who use FT Synergist to secure grants, protect IP, and scale globally.
          </p>
          
          <Link 
            href="/contact"
            className="inline-block px-8 py-4 bg-[#d9534f] text-white font-bold rounded-md transition-transform hover:-translate-y-1 hover:shadow-lg text-lg"
          >
            Book a 30-Min Strategy Call
          </Link>
        </div>
      </section>

    </div>
  );
}
