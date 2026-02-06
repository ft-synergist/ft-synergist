import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, Cpu, Globe, FileText, ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Insights for Singapore SMEs | FT Synergist",
  description: "Data-driven case studies, market reports, and grant guides to help Singapore enterprises scale up, innovate, and expand globally.",
};

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-gray-900 font-sans">
      
      {/* 1. HERO SECTION: COMMAND CENTER */}
      <section className="bg-[#003366] text-white pt-32 pb-20 px-4 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Strategic Intelligence for <span className="text-[#8F801B]">Scaling</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Market-defining research and actionable case studies for Singaporean leaders.
            From <strong>Global Expansion</strong> to <strong>AI Integration</strong>.
          </p>
        </div>
      </section>

      {/* 2. FEATURED CASE STUDY (WANG LAO JI) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: Content */}
          <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-[#8F801B] font-bold text-xs uppercase tracking-wider mb-4">
              <span className="bg-[#8F801B]/10 px-3 py-1 rounded-full">Latest Strategic Release</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wang Lao Ji (WALOVI): The Global Expansion Blueprint
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              How a 197-year-old brand grew profits by 15.87% by reinventing itself for the West. A masterclass in localization for Singapore SMEs.
            </p>
            
            <div>
              <Link 
                href="/insights/wang-lao-ji-global-expansion-strategy"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-white bg-[#003366] hover:bg-[#002244] transition-all"
              >
                Read the Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Visual/Decor */}
          <div className="bg-gray-100 md:w-1/3 min-h-[250px] relative flex items-center justify-center border-l border-gray-200">
             {/* Abstract visual representation */}
             <div className="text-center p-6">
                <Globe className="w-16 h-16 text-[#003366] mx-auto mb-4 opacity-80" />
                <p className="text-sm font-bold text-gray-500 uppercase">Global Strategy Series</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. TOPIC CLUSTER GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Intelligence by Category</h2>
            <p className="mt-4 text-gray-600">Navigate our research based on your current growth bottleneck.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Cluster 1: Innovation & AI */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Innovation & AI</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/insights/state-of-ai-2026" className="group/link block">
                    <span className="font-bold text-gray-900 group-hover/link:text-blue-600 transition-colors block mb-1">State of AI in SE Asia 2026</span>
                    <span className="text-sm text-gray-500 line-clamp-2">Analysis of AI adoption trends in Singapore, Indonesia, and Vietnam.</span>
                  </Link>
                </li>
                {/* Add more items here later */}
              </ul>
            </div>

            {/* Cluster 2: Government Grants */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6 text-[#8F801B] group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Government Grants</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/edg-grant" className="group/link block">
                    <span className="font-bold text-gray-900 group-hover/link:text-[#8F801B] transition-colors block mb-1">The EDG Eligibility Guide</span>
                    <span className="text-sm text-gray-500 line-clamp-2">How to offset 50% of your strategic branding and expansion costs.</span>
                  </Link>
                </li>
                 <li className="pt-4 border-t border-gray-100">
                  <Link href="/contact" className="group/link block">
                    <span className="font-bold text-gray-900 group-hover/link:text-[#8F801B] transition-colors block mb-1">Eligibility Health Check</span>
                    <span className="text-sm text-gray-500">Book a slot to verify your grant standing.</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cluster 3: Strategy & Scaling */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Strategy & Scaling</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/insights/wang-lao-ji-global-expansion-strategy" className="group/link block">
                    <span className="font-bold text-gray-900 group-hover/link:text-green-600 transition-colors block mb-1">5 Lessons from Wang Lao Ji</span>
                    <span className="text-sm text-gray-500 line-clamp-2">Why localization beats translation in global markets.</span>
                  </Link>
                </li>
                {/* Placeholder for future content */}
                <li className="pt-4 border-t border-gray-100">
                   <span className="text-sm text-gray-400 italic">More case studies coming soon...</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NEWSLETTER BANNER */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get Strategy Alerts Before Your Competitors</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join 2,000+ Singaporean Founders receiving our monthly market briefings.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="flex-grow px-5 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#8F801B]"
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-[#8F801B] hover:bg-[#7a6d17] text-white font-bold rounded-md transition-colors shadow-lg"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

    </div>
  );
}
