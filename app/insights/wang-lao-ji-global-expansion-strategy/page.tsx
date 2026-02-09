"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Lock, CheckCircle2, X, TrendingUp, Factory, Zap } from "lucide-react";

// --- 1. LEAD CAPTURE MODAL COMPONENT ---
const DownloadGate = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    // Redirect to Google Drive
    window.open(
      "https://drive.google.com/file/d/1WeQBqm6pvTYqfdIT3EAwwUX8UOf7CIFb/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-none shadow-2xl overflow-hidden border-t-4 border-[#8F801B]">
        
        {/* Modal Header - PURE BLACK */}
        <div className="bg-black p-8 text-center border-b border-neutral-800">
          <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#8F801B]/10 border border-[#8F801B]/20">
            <Lock className="w-8 h-8 text-[#8F801B]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Unlock Strategic Report</h3>
          <p className="text-neutral-400 text-sm">
            Enter your details to access the full 20-page market analysis.
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-white">
          <div>
            <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Full Name</label>
            <input 
              required 
              type="text" 
              placeholder="e.g. Frederick Tan"
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-black focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-sm"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Work Email</label>
            <input 
              required 
              type="email" 
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-black focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-black uppercase tracking-widest mb-2">Company Name</label>
            <input 
              required 
              type="text" 
              placeholder="e.g. FT Synergist"
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-black focus:outline-none focus:border-[#8F801B] focus:ring-1 focus:ring-[#8F801B] transition-all rounded-sm"
            />
          </div>

          <button 
            type="submit" 
            className="w-full mt-4 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold uppercase tracking-wider hover:bg-[#7a6d17] transition-all shadow-lg rounded-sm"
          >
            Unlock Full Report
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          
          <p className="text-center text-xs text-neutral-400 mt-4">
            Available to Singapore Registered Businesses.
          </p>
        </form>
      </div>
    </div>
  );
};

// --- 2. MAIN PAGE COMPONENT ---
export default function WangLaoJiCaseStudy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // SEO Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Wang Lao Ji (WALOVI) Case Study: 5 Global Expansion Lessons",
    "description": "How a 197-year-old herbal tea brand grew profits by 15.87% in 2025. A strategic breakdown for Singapore SMEs.",
    "image": "https://www.ftsynergist.com/walovi-hero.jpg",
    "author": {
      "@type": "Organization",
      "name": "FT Synergist"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FT Synergist",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.ftsynergist.com/logo.png"
      }
    },
    "datePublished": "2025-10-01"
  };

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-[#8F801B]/20">
      
      {/* Inject Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Inject Modal */}
      <DownloadGate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 1. HERO SECTION - PURE BLACK (#000000) */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 text-[#8F801B] font-bold text-xs uppercase tracking-widest border border-[#8F801B]/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#8F801B]"></span>
              <span>Global Strategy Series</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
              From "Medicine" <br/> to <span className="text-[#8F801B] italic">"Lifestyle"</span>
            </h1>
            
            <p className="text-xl text-neutral-300 leading-relaxed max-w-lg border-l-4 border-[#8F801B] pl-6">
              How Wang Lao Ji grew profits by 15.87% in a saturated market—and the exact roadmap Singapore SMEs can copy.
            </p>

            <div className="pt-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-base font-bold rounded-md hover:bg-[#7a6d17] transition-all shadow-lg hover:shadow-[#8F801B]/50"
              >
                <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                Download Strategic Report
              </button>
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900">
             <Image 
                src="/walovi-hero.jpg" 
                alt="Wang Lao Ji Global Branding Strategy - Red Can vs Blue Can Comparison" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
             />
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-medium text-black leading-relaxed">
          "Most Singaporean brands fail overseas because they try to export their product exactly as it is. They refuse to adapt."
        </p>
        <div className="mt-10 w-12 h-1 bg-[#8F801B] mx-auto"></div>
        <div className="mt-10 text-lg text-neutral-600 leading-loose text-left">
          <p className="mb-6">
            In 2025, Wang Lao Ji—a 197-year-old brand synonymous with "traditional medicine"—did the unthinkable. To break into Western markets, they didn't just translate their name; they reinvented their identity to <strong>"WALOVI."</strong> 
          </p>
          <p>
            The result? A <strong>15.87% increase in net profit</strong> in H1 2025 and successful entry into Costco and Amazon US. Below is the strategic breakdown.
          </p>
        </div>
      </section>

      {/* 3. LESSONS CONTENT */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Lesson 1 */}
          <div>
            <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-200 pb-4">
               <span className="text-[#8F801B] font-bold text-sm uppercase tracking-widest">Lesson 01</span>
               <h2 className="text-3xl font-bold text-black">The "Localization Paradox"</h2>
            </div>
            
            <div className="prose prose-lg text-neutral-600 max-w-none leading-loose">
              <p>
                For decades, Wang Lao Ji’s selling point was "curing internal heat" (<em>shanghuo</em>). This works in China and Singapore. It fails in Europe, where consumers don't understand TCM concepts.
              </p>
              
              <h3 className="text-xl font-bold text-black mt-8 mb-4">The Strategic Pivot</h3>
              <p>
                Instead of educating the West on "internal heat," they rebranded to "WALOVI" and positioned the drink as a <strong>"Natural Plant-Based Functional Beverage."</strong> They aligned with the global wellness trend (like Kombucha) rather than the medical trend.
              </p>
              
              <div className="bg-white p-8 mt-10 border-l-4 border-[#8F801B] shadow-sm">
                <h4 className="font-bold text-black text-sm uppercase tracking-wide flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8F801B]" /> The SME Takeaway
                </h4>
                <p className="text-neutral-600 text-base m-0 leading-relaxed">
                  Don't force your Singaporean context on a foreign market. If your "Unique Selling Point" requires a 10-minute explanation, it will fail. Pivot to a universal value proposition.
                </p>
              </div>
            </div>
          </div>

          {/* Lesson 2 */}
          <div>
            <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-200 pb-4">
               <span className="text-[#8F801B] font-bold text-sm uppercase tracking-widest">Lesson 02</span>
               <h2 className="text-3xl font-bold text-black">Supply Chain as a Weapon</h2>
            </div>
            
            <div className="prose prose-lg text-neutral-600 max-w-none leading-loose">
              <p>
                Exporting heavy liquid from China (or Singapore) is a margin-killer due to logistics and tariffs.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 my-8">
                {/* OLD WAY CARD */}
                <div className="p-6 bg-white border border-neutral-200 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-neutral-300 mb-4" />
                  <span className="block font-bold text-black mb-2">Old Way</span>
                  <span className="text-sm text-neutral-500">Export from Home Base. High Tariffs. Slow Speed.</span>
                </div>
                {/* NEW WAY CARD - PURE BLACK */}
                <div className="p-6 bg-black border border-black rounded-lg text-white">
                  <Factory className="w-8 h-8 text-[#8F801B] mb-4" />
                  <span className="block font-bold text-white mb-2">New Way (PCBC)</span>
                  <span className="text-sm text-neutral-400">"Factory-in-Market" (Vietnam). Zero Tariffs. Local Status.</span>
                </div>
              </div>
              
              <div className="bg-white p-8 mt-10 border-l-4 border-[#8F801B] shadow-sm">
                <h4 className="font-bold text-black text-sm uppercase tracking-wide flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8F801B]" /> The SME Takeaway
                </h4>
                <p className="text-neutral-600 text-base m-0 leading-relaxed">
                  You cannot scale physical products globally by shipping from Tuas forever. You need a <Link href="/services" className="text-[#8F801B] hover:underline font-bold">Decentralized Strategic Roadmap</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Lesson 3 */}
          <div>
            <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-200 pb-4">
               <span className="text-[#8F801B] font-bold text-sm uppercase tracking-widest">Lesson 03</span>
               <h2 className="text-3xl font-bold text-black">Innovation via Occasion</h2>
            </div>
            
            <div className="prose prose-lg text-neutral-600 max-w-none leading-loose">
              <p>
                Traditional herbal tea is heavy and sweet. It doesn't fit the "casual Friday" or "nightlife" vibe.
              </p>
              
              <h3 className="text-xl font-bold text-black mt-8 mb-4">The Pivot:</h3>
              <p>
                They launched "Sparkling Herbal Tea" and "Sugar-Free" variants. This allowed them to enter:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Fine Dining:</strong> Paired with spicy food (replacing wine/Coke).</li>
                <li><strong>Nightlife:</strong> Used as a mixer in cocktails.</li>
              </ul>
              
              <div className="bg-white p-8 mt-10 border-l-4 border-[#8F801B] shadow-sm">
                <h4 className="font-bold text-black text-sm uppercase tracking-wide flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-[#8F801B]" /> The SME Takeaway
                </h4>
                <p className="text-neutral-600 text-base m-0 leading-relaxed">
                   Is your product format limiting your usage occasions? Changing the form factor (e.g. from liquid to sparkling) can unlock entirely new markets. This is key to unlocking new Intellectual Property value.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. LEAD MAGNET FOOTER - PURE BLACK */}
      <section className="py-24 bg-black text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <Lock className="w-12 h-12 text-[#8F801B] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Unlock the Full Strategic Report</h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              The complete 20-page document includes the Financial Trajectories, International Can Matrix, and Museum Diplomacy Model.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold rounded-md hover:bg-[#7a6d17] transition-all shadow-lg hover:shadow-[#8F801B]/30"
                >
                  Request Full Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
            </div>
            <p className="text-sm text-neutral-500 mt-8">
              Available exclusively to Singapore Registered Businesses.
            </p>
         </div>
      </section>

    </div>
  );
}
