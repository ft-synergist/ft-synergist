import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Globe, Zap, TrendingUp, Download, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Insights for Singapore SMEs | FT Synergist",
  description: "Market-defining research, EDG grant guides, and scaling case studies for Singapore enterprises. From Global Expansion to AI Integration.",
  openGraph: {
    title: "Strategic Insights for Singapore SMEs | FT Synergist",
    description: "Data-driven case studies and grant guides to help Singapore enterprises scale up.",
    type: "website",
    url: "https://www.ftsynergist.com/insights",
  },
};

export default function InsightsHub() {
  // Google Schema (JSON-LD) for Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Strategic Insights for Singapore SMEs",
    "description": "Market-defining research, EDG grant guides, and scaling case studies.",
    "url": "https://www.ftsynergist.com/insights/",
    "publisher": { "@type": "Organization", "name": "FT Synergist" },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "url": "https://www.ftsynergist.com/insights/wang-lao-ji-expansion-case-study", "name": "Wang Lao Ji Global Expansion Strategy" },
        { "@type": "ListItem", "position": 2, "url": "https://www.ftsynergist.com/insights/state-of-ai-2026", "name": "State of AI in Southeast Asia 2026" },
        { "@type": "ListItem", "position": 3, "url": "https://www.ftsynergist.com/edg-grant", "name": "EDG Grant Eligibility Guide" }
      ]
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-[#8F801B]/20">
      
      {/* 1. INJECT SCHEMA FOR GOOGLE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 2. HERO SECTION (Dark Mode + Gold) - Matches Case Study Page */}
      <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#8F801B]/20 text-[#8F801B] px-3 py-1 text-xs font-bold uppercase tracking-widest border border-[#8F801B]/30 rounded-full mb-6">
            <Globe size={14} />
            <span>Knowledge Hub</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium tracking-tight leading-tight mb-6">
            Strategic <span className="text-[#8F801B] italic">Intelligence.</span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Stop guessing. Start scaling. Data-backed roadmaps and grant strategies for Singapore's market leaders.
          </p>
        </div>
      </section>

      {/* 3. FEATURED "EDITOR'S PICK" (Floating Card) */}
      <section className="relative -mt-20 max-w-5xl mx-auto px-4 sm:px-6 relative z-20">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-t-8 border-[#8F801B]">
          <div className="grid md:grid-cols-12 gap-0">
            {/* Content Side */}
            <div className="md:col-span-12 p-10 md:p-12">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-[#8F801B] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">
                  New Case Study
                </span>
                <span className="text-slate-500 text-sm font-medium">6 Min Read</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4 leading-tight">
                The "Wang Lao Ji" Pivot: A Blueprint for Global Expansion
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Most Singaporean SMEs fail overseas because they refuse to adapt. We broke down how a 197-year-old brand grew profits by 15.87% by reinventing itself for the West.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/insights/wang-lao-ji-expansion-case-study"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-bold rounded-sm hover:bg-gray-800 transition-all shadow-lg group"
                >
                  Read the Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact?subject=Request+Wang+Lao+Ji+Full+Report"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border border-slate-300 text-slate-700 font-bold rounded-sm hover:bg-slate-50 transition-all"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Request PDF Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOPIC CLUSTERS GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Cluster A: Strategy */}
          <div className="group">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200">
              <Globe className="w-6 h-6 text-[#8F801B]" />
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Global Expansion</h3>
            </div>
            <ul className="space-y-6">
              <li>
                <Link href="/insights/wang-lao-ji-expansion-case-study" className="block group-hover:opacity-100 transition-opacity">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#8F801B] transition-colors mb-1">
                    5 Scaling Lessons from Wang Lao Ji
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Why localization beats translation in global markets.
                  </p>
                </Link>
              </li>
              {/* Placeholder for next article */}
              <li>
                <div className="opacity-50 cursor-not-allowed">
                  <h4 className="text-lg font-bold text-slate-400 mb-1">Vietnam Market Entry Guide</h4>
                  <p className="text-slate-400 text-sm">Coming Soon - Q2 2026</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Cluster B: Grants (The Money) */}
          <div className="group">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200">
              <TrendingUp className="w-6 h-6 text-[#8F801B]" />
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Grants & Funding</h3>
            </div>
            <ul className="space-y-6">
              <li>
                <Link href="/edg-grant" className="block">
                  <h4 className="text-lg font-bold text-slate-900 hover:text-[#8F801B] transition-colors mb-1">
                    EDG Grant Eligibility Checklist (2026)
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    How to offset up to 50% of your strategic branding costs.
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Cluster C: Innovation */}
          <div className="group">
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-200">
              <Zap className="w-6 h-6 text-[#8F801B]" />
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">Innovation & AI</h3>
            </div>
            <ul className="space-y-6">
              <li>
                <Link href="/insights/state-of-ai-2026" className="block">
                  <h4 className="text-lg font-bold text-slate-900 hover:text-[#8F801B] transition-colors mb-1">
                    State of AI in Southeast Asia 2026
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Analysis of adoption trends across Singapore, Indonesia, and Vietnam.
                  </p>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 5. FINAL CTA (Dark Mode Footer) */}
      <section className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif">Stop Reading, Start Executing.</h2>
          <p className="text-xl text-slate-300">
            Join 200+ Market Leaders who use FT Synergist to secure grants, protect IP, and scale globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
             <Link
               href="/contact"
               className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold rounded-sm hover:bg-[#7a6d17] transition-all shadow-lg hover:shadow-[#8F801B]/50"
             >
               Book a 30-Min Strategy Call
               <ArrowRight className="ml-2 h-5 w-5" />
             </Link>
          </div>
          <p className="text-sm text-slate-500 pt-4">
            Complimentary session for Singapore Registered Businesses.
          </p>
        </div>
      </section>

    </div>
  );
}
