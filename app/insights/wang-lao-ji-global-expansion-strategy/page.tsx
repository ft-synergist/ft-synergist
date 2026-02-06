"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Lock, CheckCircle2, X, TrendingUp, Factory } from "lucide-react";

// --- COMPONENTS ---

// 1. THE LEAD CAPTURE MODAL (The Gatekeeper)
const DownloadGate = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // OPTIONAL: Here you would ideally send this data to your CRM/Email (e.g. via API)
    // For now, we simulate success and redirect to the Drive link.
    
    // 1. Close Modal
    onClose();
    
    // 2. Open PDF in New Tab
    window.open(
      "https://drive.google.com/file/d/1WeQBqm6pvTYqfdIT3EAwwUX8UOf7CIFb/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-gray-900 p-6 text-center border-b border-gray-800">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#8F801B]/20">
            <Lock className="w-6 h-6 text-[#8F801B]" />
          </div>
          <h3 className="text-xl font-bold text-white">Unlock Strategic Report</h3>
          <p className="text-gray-400 text-sm mt-2">
            Enter your details to access the full 20-page market analysis.
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Full Name</label>
            <input 
              required 
              type="text" 
              placeholder="e.g. Frederick Tan"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F801B] focus:border-transparent transition-all"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Work Email</label>
            <input 
              required 
              type="email" 
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F801B] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Company Name</label>
            <input 
              required 
              type="text" 
              placeholder="e.g. FT Synergist"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8F801B] focus:border-transparent transition-all"
            />
          </div>

          <button 
            type="submit" 
            className="w-full mt-2 inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold rounded-md hover:bg-[#7a6d17] transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
          >
            Unlock Full Report
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-4">
            We respect your privacy. Zero spam.
          </p>
        </form>
      </div>
    </div>
  );
};

export default function WangLaoJiCaseStudy() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-[#8F801B]/20">
      
      {/* Inject Modal */}
      <DownloadGate isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 1. HERO SECTION - BLACK & GOLD BRANDING */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 text-[#8F801B] font-bold text-xs uppercase tracking-widest border border-[#8F801B]/30 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#8F801B]"></span>
              <span>Global Strategy Series</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
              From "Medicine" <br/> to <span className="text-[#8F801B] italic">"Lifestyle"</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#8F801B] pl-6">
              How Wang Lao Ji grew profits by 15.87% in a saturated market—and the exact roadmap Singapore SMEs can copy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* BUTTON TRIGGERING MODAL */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white text-base font-bold rounded-md hover:bg-[#7a6d17] transition-all shadow-lg hover:shadow-[#8F801B]/50"
              >
                <Download className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                Download Strategic Report
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-800">
             <Image 
                src="/walovi-hero.jpg" 
                alt="Wang Lao Ji Product Matrix" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority={true}
             />
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed">
          "Most Singaporean brands fail overseas because they try to export their product exactly as it is. They refuse to adapt."
        </p>
        <div className="mt-10 w-12 h-1 bg-[#8F801B] mx-auto"></div>
        <div className="mt-10 text-lg text-gray-600 leading-loose text-left">
          <p className="mb-6">
            In 2025, Wang Lao Ji—a 197-year-old brand synonymous with "traditional medicine"—did the unthinkable. To break into Western markets, they didn't just translate their name; they reinvented their identity to <strong>"WALOVI."</strong> 
          </p>
          <p>
            The result? A <strong>15.87% increase in net profit</strong> in H1 2025 and successful entry into Costco and Amazon US. Below is the strategic breakdown of their move.
          </p>
        </div>
      </section>

      {/* 3. LESSONS CONTENT */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Lesson 1 */}
          <div>
            <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-4">
               <span className="text-[#8F801B] font-bold text-sm uppercase tracking-widest">Lesson 01</span>
               <h2 className="text-3xl font-bold text-gray-900">The "Localization Paradox"</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 max-w-none leading-loose">
              <p>
                For decades, Wang Lao Ji’s selling point was "curing internal heat" (<em>shanghuo</em>). This works in China and Singapore. It fails in Europe, where consumers don't understand TCM concepts.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">The Strategic Pivot</h3>
              <p>
                Instead of educating the West on "internal heat," they rebranded to "WALOVI" and positioned the drink as a <strong>"Natural Plant-Based Functional Beverage."</strong> They aligned with the global wellness trend (like Kombucha) rather than the medical trend.
              </p>
              
              <div className="bg-white p-8 mt-10 border-l-4 border-[#8F801B] shadow-sm">
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8F801B]" /> The SME Takeaway
                </h4>
                <p className="text-gray-600 text-base m-0 leading-relaxed">
                  Don't force your Singaporean context on a foreign market. If your "Unique Selling Point" requires a 10-minute explanation, it will fail. Pivot to a universal value proposition.
                </p>
              </div>
            </div>
          </div>

          {/* Lesson 2 */}
          <div>
            <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-4">
               <span className="text-[#8F801B] font-bold text-sm uppercase tracking-widest">Lesson 02</span>
               <h2 className="text-3xl font-bold text-gray-900">Supply Chain as a Weapon</h2>
            </div>
            
            <div className="prose prose-lg text-gray-600 max-w-none leading-loose">
              <p>
                Exporting heavy liquid from China (or Singapore) is a margin-killer due to logistics and tariffs.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-white border border-gray-200 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-gray-300 mb-4" />
                  <span className="block font-bold text-gray-900 mb-2">Old Way</span>
                  <span className="text-sm text-gray-500">Export from Home Base. High Tariffs. Slow Speed.</span>
                </div>
                <div className="p-6 bg-gray-900 border border-gray-900 rounded-lg text-white">
                  <Factory className="w-8 h-8 text-[#8F801B] mb-4" />
                  <span className="block font-bold text-white mb-2">New Way (PCBC)</span>
                  <span className="text-sm text-gray-400">"Factory-in-Market" (Vietnam). Zero Tariffs. Local Status.</span>
                </div>
              </div>
              
              <div className="bg-white p-8 mt-10 border-l-4 border-[#8F801B] shadow-sm">
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8F801B]" /> The SME Takeaway
                </h4>
                <p className="text-gray-600 text-base m-0 leading-relaxed">
                  You cannot scale physical products globally by shipping from Tuas forever. You need a Decentralized Strategic Roadmap.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. LEAD MAGNET SECTION - BLACK BACKGROUND */}
      <section className="py-24 bg-gray-900 text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <Lock className="w-12 h-12 text-[#8F801B] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Unlock the Full Strategic Report</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              The complete 20-page document includes the Financial Trajectories, International Can Matrix, and Museum Diplomacy Model.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* BUTTON TRIGGERING MODAL */}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#8F801B] text-white font-bold rounded-md hover:bg-[#7a6d17] transition-all shadow-lg hover:shadow-[#8F801B]/30"
                >
                  Request Full Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              Available exclusively to Singapore Registered Businesses.
            </p>
         </div>
      </section>

    </div>
  );
}
