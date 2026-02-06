import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Insights | FT Synergist",
  description: "Market-defining research and actionable roadmaps for Singaporean entrepreneurs.",
};

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      
      {/* 1. HERO SECTION - PURE BLACK BACKGROUND */}
      <section className="bg-black pt-40 pb-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#8F801B] font-bold tracking-widest uppercase text-xs mb-6 block">
            FT Synergist Intelligence
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Strategic Intelligence for <br/>
            <span className="text-[#8F801B]">Scaling Enterprises</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We strip away the academic theory. These are the actionable roadmaps, grant frameworks, and expansion playbooks we use to scale our own ventures.
          </p>
        </div>
      </section>

      {/* 2. LATEST FEATURED REPORT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-12 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[450px]">
          
          {/* Left: Content */}
          <div className="p-10 lg:p-14 lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center space-x-2 text-[#8F801B] font-bold text-xs uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8F801B]"></span>
              <span>Latest Case Study</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              The "Wang Lao Ji" Pivot: A Blueprint for Global Expansion
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              How a 197-year-old heritage brand grew profits by 15.87% by reinventing itself for the West. A masterclass in localization for Singapore SMEs.
            </p>
            
            <div>
              <Link 
                href="/insights/wang-lao-ji-global-expansion-strategy"
                className="inline-flex items-center px-8 py-4 bg-[#8F801B] text-white font-bold rounded-md hover:bg-[#7a6d17] transition-all shadow-lg"
              >
                Read the Case Study
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right: HERO IMAGE (Replaced the boring icon) */}
          <div className="relative lg:w-1/2 min-h-[300px] lg:min-h-full bg-gray-100">
             <Image 
               src="/walovi-hero.jpg" 
               alt="Wang Lao Ji Red Can vs Blue Can Strategy" 
               fill
               className="object-cover"
               priority={true}
             />
             {/* Optional: Subtle Overlay to ensure it blends nicely */}
             <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* 3. INSIGHTS GRID */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Card 1 */}
            <div className="group">
              <div className="border-b-2 border-gray-100 pb-4 mb-6 group-hover:border-[#8F801B] transition-colors">
                <h3 className="text-lg font-bold text-gray-900">Global Strategy</h3>
              </div>
              <Link href="/insights/wang-lao-ji-global-expansion-strategy" className="block group-hover:translate-x-1 transition-transform">
                <h4 className="text-xl font-bold text-gray-900 mb-3">5 Scaling Lessons from Wang Lao Ji</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Why localization beats translation. The PCBC Framework explained.
                </p>
                <span className="text-sm font-bold text-[#8F801B] flex items-center">
                  READ ARTICLE <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="border-b-2 border-gray-100 pb-4 mb-6 group-hover:border-[#8F801B] transition-colors">
                <h3 className="text-lg font-bold text-gray-900">Grants & Funding</h3>
              </div>
              <Link href="/edg-grant" className="block group-hover:translate-x-1 transition-transform">
                <h4 className="text-xl font-bold text-gray-900 mb-3">EDG Grant Eligibility Guide (2026)</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  How to structure your branding project to qualify for 50% support.
                </p>
                <span className="text-sm font-bold text-[#8F801B] flex items-center">
                  CHECK ELIGIBILITY <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="border-b-2 border-gray-100 pb-4 mb-6 group-hover:border-[#8F801B] transition-colors">
                <h3 className="text-lg font-bold text-gray-900">Innovation & AI</h3>
              </div>
              <Link href="/insights/state-of-ai-2026" className="block group-hover:translate-x-1 transition-transform">
                <h4 className="text-xl font-bold text-gray-900 mb-3">State of AI in Southeast Asia</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Market report on adoption trends in Indonesia and Vietnam.
                </p>
                <span className="text-sm font-bold text-[#8
