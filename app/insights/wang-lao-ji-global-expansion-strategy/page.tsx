import React from "react";
import Link from "next/link";
import { ArrowRight, Download, Globe, CheckCircle2 } from "lucide-react";
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
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-[#8F801B]/20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-3 py-1 text-xs font-bold uppercase tracking-widest border border-gray-200 rounded-md">
              <Globe size={14} />
              <span>Global Expansion Strategy</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              From "Medicine" <br/> to <span className="text-[#8F801B]">"Lifestyle"</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg border-l-4 border-[#8F801B] pl-6">
              How Wang Lao Ji grew profits by 15.87% in a saturated market—and what Singapore SMEs can learn from the "WALOVI" pivot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-base font-bold text-white hover:bg-[#7a6d17] transition-all shadow-lg rounded-md"
              >
                Book Strategy Briefing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="/Global Expansion Roadmap_ 5 Lessons from Wang Lao Ji.pdf" 
                download
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-base font-bold text-gray-900 hover:bg-gray-50 transition-all rounded-md"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Report (PDF)
              </a>
            </div>
          </div>

          {/* Visual Side: Clean Placeholder for Real Image */}
          <div className="relative h-[400px] w-full bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-2xl flex items-center justify-center">
             <div className="text-center p-8">
                <span className="text-gray-400 text-sm font-mono block mb-2">
                  [IMAGE PLACEHOLDER]
                </span>
                <p className="text-gray-500 text-sm">
                  Please upload <strong>walovi-hero.jpg</strong> to your public folder.<br/>
                  (Screenshot of Red Can vs Blue Can from Page 7 of Report)
                </p>
             </div>
             {/* UNCOMMENT THE LINE BELOW ONCE IMAGE IS UPLOADED */}
             {/* <Image src="/walovi-hero.jpg" alt="Wang Lao Ji Product Matrix" fill className="object-cover" /> */}
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose prose-lg prose-gray mx-auto text-gray-600">
          <p className="text-2xl font-bold text-gray-900 leading-relaxed">
            Most Singaporean brands fail overseas because they try to export their product exactly as it is. They refuse to adapt.
          </p>
          <p>
            In 2025, Wang Lao Ji—a 197-year-old brand synonymous with "traditional medicine"—did the unthinkable. To break into the Western and Southeast Asian markets, they didn't just translate their name; they reinvented their identity to <strong>"WALOVI."</strong>
          </p>
          <p>
            The result? A <strong>15.87% increase in net profit</strong> in H1 2025 and successful entry into Costco and Amazon US. Here is the roadmap.
          </p>
        </div>
      </section>

      {/* 3. LESSONS CONTENT (Aligned to Home Page Card Style) */}
      <section className="py-20 bg-secondary/5 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Lesson 1 */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-10 h-10 rounded-full bg-[#8F801B]/10 flex items-center justify-center text-[#8F801B] font-bold">01</div>
               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">The "Localization Paradox"</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                For decades, Wang Lao Ji’s selling point was "curing internal heat" (<em>shanghuo</em>). This works in China and Singapore. It fails in Europe, where consumers don't understand TCM concepts.
              </p>
              <div className="pl-6 border-l-4 border-[#8F801B] my-6">
                <p className="font-bold text-gray-900 italic">
                  The Pivot: Instead of educating the West on "internal heat," they rebranded to "WALOVI" and positioned the drink as a "Natural Plant-Based Functional Beverage."
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-8 flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-[#8F801B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">The SME Takeaway</h4>
                  <p className="text-gray-600 text-base m-0">
                    Don't force your Singaporean context on a foreign market. If your "Unique Selling Point" requires a 10-minute explanation, it will fail.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson 2 */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-10 h-10 rounded-full bg-[#8F801B]/10 flex items-center justify-center text-[#8F801B] font-bold">02</div>
               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Supply Chain as a Weapon</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                Exporting heavy liquid from China (or Singapore) is a margin-killer due to logistics and tariffs.
              </p>
              <div className="pl-6 border-l-4 border-[#8F801B] my-6">
                <p className="font-bold text-gray-900 italic">
                   The Pivot: Wang Lao Ji established local production bases in Thailand and Vietnam. By sourcing ingredients locally (the "PCBC Model"), they reduced logistics costs by 30%.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-8 flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-[#8F801B] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">The SME Takeaway</h4>
                  <p className="text-gray-600 text-base m-0">
                    You cannot scale physical products globally by shipping from Tuas forever. You need a Decentralized <Link href="/services" className="text-[#8F801B] font-bold hover:underline">Strategic Roadmap</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE LEAD MAGNET (Aligned to Dark Footer Style) */}
      <section id="strategic-deep-dive" className="py-24 bg-gray-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-[#8F801B] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Available for Download
                </div>
                <h2 className="text-3xl font-bold mb-6">Get the Full Data Set</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  The full 20-page "Project WALOVI Strategic Market Report" includes financial trajectories, the International Can Matrix, and the Museum Diplomacy model.
                </p>
                <a 
                  href="/Global Expansion Roadmap_ 5 Lessons from Wang Lao Ji.pdf" 
                  download
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold rounded-md hover:bg-gray-100 transition-all"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Report
                </a>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-white">Implementation Support</h3>
                <p className="text-gray-300 mb-6">
                  Applying the "PCBC Model" to a Singaporean SME requires navigating EDG grants and local IP laws. 
                </p>
                <Link 
                  href="/contact"
                  className="flex items-center justify-center w-full py-4 bg-[#8F801B] hover:bg-[#7a6d17] text-white font-bold rounded-md transition-all shadow-md"
                >
                  Schedule an Implementation Call
                </Link>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Free 30-min consultation for Singapore Registered Businesses.
                </p>
              </div>
            </div>
         </div>
      </section>

    </div>
  );
}
