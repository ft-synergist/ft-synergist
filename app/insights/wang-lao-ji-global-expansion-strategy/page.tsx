import React from "react";
import Link from "next/link";
import { ArrowRight, Download, Globe, CheckCircle2, TrendingUp, Factory } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wang Lao Ji (WALOVI) Case Study: 5 Global Expansion Lessons for Singapore SMEs",
  description: "How did a 197-year-old herbal tea brand grow profits by 15.87% in 2025? We break down the 'WALOVI' localization strategy for Singapore business owners.",
  openGraph: {
    title: "SME Global Expansion Roadmap: 5 Lessons from Wang Lao Ji",
    description: "From 'Medicine' to 'Lifestyle': A strategic breakdown of how heritage brands can crack the global market.",
    type: "article",
    images: [{ url: "/walovi-hero.jpg" }],
  },
};

export default function WangLaoJiCaseStudy() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans selection:bg-[#8F801B]/20">
      
      {/* 1. HERO SECTION - NOW BRAND CONSISTENT (Rich Black instead of Navy) */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text Side */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#8F801B]/20 text-[#8F801B] px-3 py-1 text-xs font-bold uppercase tracking-widest border border-[#8F801B]/30 rounded-full">
              <Globe size={14} />
              <span>Global Strategy Series</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium tracking-tight leading-tight">
              From "Medicine" <br/> to <span className="text-[#8F801B] italic">Lifestyle.</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg border-l-2 border-[#8F801B] pl-6">
              How Wang Lao Ji grew profits by 15.87% in a saturated market—and the exact roadmap Singapore SMEs can copy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="/Global Expansion Roadmap_ 5 Lessons from Wang Lao Ji.pdf" 
                download
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-base font-bold rounded-sm hover:bg-[#7a6d17] transition-all shadow-lg hover:shadow-[#8F801B]/50"
              >
                <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                Download Strategic Report
              </a>
            </div>
          </div>

          {/* Visual Side: The "Hero Shot" */}
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl border border-white/10 group bg-gray-800">
             {/* PLACEHOLDER: Ensure you have uploaded 'walovi-hero.jpg' */}
             <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="text-center p-8 bg-black/30 backdrop-blur-md rounded-xl border border-white/10">
                    <p className="text-white/50 text-xs font-mono mb-2 uppercase tracking-widest">Image Placeholder</p>
                    <p className="text-white font-serif text-2xl">Red Can vs. Blue Can</p>
                    <p className="text-white/70 text-sm mt-2">(Upload 'walovi-hero.jpg' to public folder)</p>
                </div>
             </div>
             {/* UNCOMMENT AFTER UPLOAD */}
             {/* <Image src="/walovi-hero.jpg" alt="Wang Lao Ji Product Matrix" fill className="object-cover" /> */}
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-serif text-slate-800 leading-relaxed">
          "Most Singaporean brands fail overseas because they try to export their product exactly as it is. They refuse to adapt."
        </p>
        <div className="mt-8 w-24 h-1 bg-[#8F801B] mx-auto"></div>
        <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          In 2025, Wang Lao Ji did the unthinkable. To break into Western markets, they didn't just translate their name; they reinvented their identity to <strong>"WALOVI."</strong> The result? Successful entry into Costco and Amazon US. Here is the roadmap.
        </p>
      </section>

      {/* 3. LESSONS CONTENT */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Lesson 1 - Gold Sidebar */}
          <div className="grid md:grid-cols-12 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <div className="md:col-span-1 bg-[#8F801B] flex items-center justify-center p-4">
                <span className="text-white font-bold text-xl writing-vertical-lr rotate-180 md:rotate-0">LESSON 01</span>
            </div>
            <div className="md:col-span-11 p-10 md:p-12">
                <h2 className="text-3xl font-serif text-slate-900 mb-6">The "Localization Paradox"</h2>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p>
                    For decades, Wang Lao Ji’s selling point was "curing internal heat" (<em>shanghuo</em>). This works in China and Singapore. It fails in Europe, where consumers don't understand TCM concepts.
                  </p>
                  <p className="text-slate-900 font-medium mt-4">
                    The Pivot: Instead of educating the West on "internal heat," they rebranded to "WALOVI" and positioned the drink as a "Natural Plant-Based Functional Beverage."
                  </p>
                </div>
                <div className="mt-8 bg-[#8F801B]/5 p-6 rounded-lg border-l-4 border-[#8F801B]">
                    <h4 className="font-bold text-[#8F801B] text-sm uppercase tracking-wide flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> The SME Takeaway
                    </h4>
                    <p className="text-slate-700 mt-2 text-base">
                      Don't force your Singaporean context on a foreign market. If your "Unique Selling Point" requires a 10-minute explanation, it will fail.
                    </p>
                </div>
            </div>
          </div>

          {/* Lesson 2 - Black Sidebar (Brand Consistent) */}
          <div className="grid md:grid-cols-12 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
            <div className="md:col-span-1 bg-gray-900 flex items-center justify-center p-4">
                <span className="text-white font-bold text-xl writing-vertical-lr rotate-180 md:rotate-0">LESSON 02</span>
            </div>
            <div className="md:col-span-11 p-10 md:p-12">
                <h2 className="text-3xl font-serif text-slate-900 mb-6">Supply Chain as a Weapon</h2>
                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p>
                    Exporting heavy liquid from China (or Singapore) is a margin-killer due to logistics and tariffs.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6 my-6">
                      <div className="bg-slate-50 p-4 rounded border border-slate-200">
                          <Factory className="w-6 h-6 text-[#8F801B] mb-2" />
                          <span className="font-bold text-slate-900 block mb-1">Old Way</span>
                          <span className="text-sm">Export from Home Base (High Tariffs)</span>
                      </div>
                      <div className="bg-slate-50 p-4 rounded border border-slate-200">
                          <TrendingUp className="w-6 h-6 text-[#8F801B] mb-2" />
                          <span className="font-bold text-slate-900 block mb-1">New Way</span>
                          <span className="text-sm">"Factory-in-Market" (Vietnam/Thailand)</span>
                      </div>
                  </div>
                  <p>
                    By sourcing ingredients locally (the "PCBC Model"), they reduced logistics costs by 30% and bypassed protective tariffs.
                  </p>
                </div>
                <div className="mt-8 bg-gray-50 p-6 rounded-lg border-l-4 border-gray-900">
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> The SME Takeaway
                    </h4>
                    <p className="text-slate-700 mt-2 text-base">
                      You cannot scale physical products globally by shipping from Tuas forever. You need a Decentralized <Link href="/services" className="underline font-bold hover:text-[#8F801B]">Strategic Roadmap</Link>.
                    </p>
                </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE LEAD MAGNET (Deep Dive - Brand Consistent Black) */}
      <section id="strategic-deep-dive" className="py-24 bg-gray-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-[#8F801B] text-white px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-wider mb-6">
                  Available for Download
                </div>
                <h2 className="text-3xl md:text-4xl font-serif mb-6">Get the Full Data Set</h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  The full 20-page "Project WALOVI Strategic Market Report" includes financial trajectories, the International Can Matrix, and the Museum Diplomacy model.
                </p>
                
                <ul className="space-y-4 mb-8 text-slate-300">
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#8F801B] rounded-full"></div>
                        <span>Financial Growth Models & EBITDA Impacts</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#8F801B] rounded-full"></div>
                        <span>The Full PCBC Framework Breakdown</span>
                    </li>
                </ul>

                <a 
                  href="/Global Expansion Roadmap_ 5 Lessons from Wang Lao Ji.pdf" 
                  download
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold rounded-sm hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Report
                </a>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-serif mb-4 text-white">Implementation Support</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Applying the "PCBC Model" to a Singaporean SME requires navigating EDG grants and local IP laws. We can help you structure this.
                </p>
                <Link 
                  href="/contact"
                  className="flex items-center justify-center w-full py-4 bg-[#8F801B] hover:bg-[#7a6d17] text-white font-bold rounded-sm transition-all shadow-md"
                >
                  Schedule Strategy Briefing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-xs text-center text-slate-400 mt-4">
                  Complimentary 30-min session for Singapore Registered Businesses.
                </p>
              </div>
            </div>
         </div>
      </section>

    </div>
  );
}
