import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Globe, TrendingUp, ShieldCheck, Factory, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wang Lao Ji (WALOVI) Case Study: 5 Global Expansion Lessons for Singapore SMEs",
  description: "How did a 197-year-old herbal tea brand grow profits by 15.87% in 2025? We break down the 'WALOVI' localization strategy for Singapore business owners.",
  openGraph: {
    title: "SME Global Expansion Roadmap: 5 Lessons from Wang Lao Ji",
    description: "From 'Medicine' to 'Lifestyle': A strategic breakdown of how heritage brands can crack the global market.",
    type: "article",
  },
};

export default function WangLaoJiCaseStudy() {
  return (
    <div className="bg-background min-h-screen text-gray-900 font-sans selection:bg-[#8F801B]/20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#8F801B]/10 text-[#8F801B] px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              <Globe size={16} />
              <span>Global Expansion Strategy</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              From "Medicine" to "Lifestyle": <span className="text-[#8F801B] block mt-2">How Wang Lao Ji Cracked the Global Market</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              What Singapore SMEs can learn from the "WALOVI" pivot to grow profits by 15.87% in a saturated market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#strategic-deep-dive" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-md text-white bg-[#8F801B] hover:bg-[#7a6d17] transition-all shadow-lg hover:shadow-[#8F801B]/30">
                <Download className="mr-2 h-5 w-5" />
                Download Strategic Report
              </Link>
            </div>
          </div>

          {/* Visual Side: Abstract Representation of Transformation */}
          <div className="relative h-[400px] w-full rounded-2xl bg-gray-50 border border-gray-200 shadow-xl overflow-hidden flex items-center justify-center">
            {/* Note: In a real scenario, you'd place the 'Red Can vs Blue Can' image here */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-blue-50 opacity-50"></div>
            <div className="text-center p-8 relative z-10">
              <div className="flex gap-8 justify-center items-end mb-6">
                <div className="w-24 h-40 bg-red-700 rounded-lg shadow-md flex items-center justify-center text-white font-bold opacity-90">
                  <span className="transform -rotate-90 text-xl tracking-widest">TRADITION</span>
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm z-10 -ml-4 -mr-4 border border-gray-100">
                  <ArrowRight className="text-gray-400" />
                </div>
                <div className="w-24 h-40 bg-blue-600 rounded-lg shadow-md flex items-center justify-center text-white font-bold transform scale-110">
                   <span className="transform -rotate-90 text-xl tracking-widest">LIFESTYLE</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">The "WALOVI" Transformation</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION - THE HOOK */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-100">
        <div className="prose prose-lg prose-gray mx-auto">
          <p className="text-xl font-medium text-gray-800 leading-relaxed">
            Most Singaporean brands fail overseas because they try to export their product exactly as it is. They refuse to adapt.
          </p>
          <p>
            In 2025, Wang Lao Ji—a 197-year-old brand synonymous with "traditional medicine"—did the unthinkable. To break into the Western and Southeast Asian markets, they didn't just translate their name; they reinvented their identity to <strong>"WALOVI."</strong>
          </p>
          <p>
            The result? A <strong>15.87% increase in net profit</strong> in H1 2025 and successful entry into Costco and Amazon US.
          </p>
          <p>
            At FT Synergist, we analyzed their entire "Internationalization Roadmap." Here are the 3 strategic pivots that Singaporean SMEs must copy to scale beyond our borders.
          </p>
        </div>
      </section>

      {/* 3. LESSONS CONTENT */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Lesson 1 */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Lesson 01</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">The "Localization Paradox"</h2>
            </div>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                For decades, Wang Lao Ji’s selling point was "curing internal heat" (<em>shanghuo</em>). This works in China and Singapore. It fails in Europe, where consumers don't understand TCM concepts.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">The Pivot:</h3>
              <p>
                Instead of educating the West on "internal heat," they rebranded to "WALOVI" and positioned the drink as a <strong>"Natural Plant-Based Functional Beverage."</strong> They aligned with the global wellness trend (like Kombucha) rather than the medical trend.
              </p>
              <div className="bg-blue-50 border border-blue-100 p-6 mt-6 rounded-lg">
                <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> The Takeaway for SMEs
                </h4>
                <p className="text-blue-800 m-0 text-base">
                  Don't force your Singaporean context on a foreign market. If your "Unique Selling Point" requires a 10-minute explanation, it will fail. Pivot to a universal value proposition.
                </p>
              </div>
            </div>
          </div>

          {/* Lesson 2 */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#8F801B]"></div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Lesson 02</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Supply Chain as a Weapon</h2>
            </div>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                Exporting heavy liquid from China (or Singapore) is a margin-killer due to logistics and tariffs.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">The Pivot:</h3>
              <p>
                Wang Lao Ji established local production bases in Thailand and Vietnam. By sourcing ingredients and manufacturing locally (the "PCBC Model"), they:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Reduced logistics costs by 30%.</li>
                <li>Bypassed protective tariffs.</li>
                <li>Gained "Local Brand" status in Southeast Asia.</li>
              </ul>
              <div className="bg-amber-50 border border-amber-100 p-6 mt-6 rounded-lg">
                <h4 className="font-bold text-amber-900 text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> The Takeaway for SMEs
                </h4>
                <p className="text-amber-800 m-0 text-base">
                  You cannot scale physical products globally by shipping from Tuas forever. You need a Decentralized <Link href="/" className="text-[#8F801B] font-bold hover:underline decoration-[#8F801B]/30 underline-offset-4">Strategic Roadmap</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Lesson 3 */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Lesson 03</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Innovation via "Occasion Architecture"</h2>
            </div>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                Traditional herbal tea is heavy and sweet. It doesn't fit the "casual Friday" or "nightlife" vibe.
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">The Pivot:</h3>
              <p>
                They launched "Sparkling Herbal Tea" and "Sugar-Free" variants. This allowed them to enter:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Fine Dining:</strong> Paired with spicy food (replacing wine/Coke).</li>
                <li><strong>Nightlife:</strong> Used as a mixer in cocktails.</li>
              </ul>
              <div className="bg-indigo-50 border border-indigo-100 p-6 mt-6 rounded-lg">
                <h4 className="font-bold text-indigo-900 text-sm uppercase tracking-wide mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> The Takeaway for SMEs
                </h4>
                <p className="text-indigo-800 m-0 text-base">
                   Is your product format limiting your usage occasions? Changing the form factor (e.g. from liquid to sparkling) can unlock entirely new markets. This is key to unlocking new <Link href="/" className="text-[#8F801B] font-bold hover:underline decoration-[#8F801B]/30 underline-offset-4">Intellectual Property</Link> value.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE LEAD MAGNET (STRATEGIC DEEP DIVE) */}
      <section id="strategic-deep-dive" className="py-20 bg-gray-900 text-white relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8F801B_1px,transparent_1px)] [background-size:20px_20px]"></div>

         <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-block bg-[#8F801B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              Free Strategic Resource
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Strategic Deep Dive: The Full Data</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We have compiled the complete "Project WALOVI Strategic Market Report", featuring the International Can Matrix and financial trajectories (2024-2026).
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-2xl mx-auto text-left">
              <ul className="space-y-4 mb-8 text-gray-300">
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-[#8F801B] w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>Financial Growth Models:</strong> How brand plasticity impacts EBITDA.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Factory className="text-[#8F801B] w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>The PCBC Framework:</strong> Product, Channel, Brand, Culture detailed breakdown.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="text-[#8F801B] w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>The "Museum Diplomacy" Model:</strong> Using soft power for market entry.</span>
                </li>
              </ul>
              
              <div className="text-center">
                {/* NOTE: Ensure your PDF is named exactly this in your public folder */}
                <a 
                  href="/Global Expansion Roadmap_ 5 Lessons from Wang Lao Ji.pdf" 
                  download="WangLaoJi_Strategic_Roadmap_FTSynergist.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-gray-900 bg-[#8F801B] hover:bg-[#A08F25] transition-all transform hover:scale-105 shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Report (PDF)
                </a>
                <p className="text-xs text-gray-400 mt-4">No email required. Instant access.</p>
              </div>
            </div>
         </div>
      </section>

      {/* 5. HARD SELL - EDG GRANT */}
      <section className="py-20 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-sm text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Your Brand Trapped in a "Local Niche"?</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Wang Lao Ji proved that even a 197-year-old "traditional" brand can dominate the world with the right roadmap. 
            At FT Synergist, we help Singaporean SMEs build this exact <strong>Global Expansion Roadmap</strong>—and we help you get the funding to pay for it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             {/* Primary CTA - Scrolls to Contact or Booking */}
             <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-gray-800">
               Book a 30-Min Strategy Call
               <ArrowRight className="ml-2 h-4 w-4" />
             </Link>
             
             {/* Secondary CTA */}
             <Link 
               href="/edg-grant"
               className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-[#8F801B] hover:text-[#8F801B]/80 transition-colors group"
             >
               <ShieldCheck className="mr-2 h-5 w-5" />
               Check My EDG Eligibility
             </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
