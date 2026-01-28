import React from "react";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function ClientImpact() {
  return (
    <section className="py-24 bg-secondary/5 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
            Proven Track Record
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Singapore enterprises to dominate Asian markets.
            <br className="hidden md:block" />
            Recognized by <span className="font-semibold text-[#8F801B]">IPOS & Enterprise Singapore</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Sundat - M&A */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#8F801B]/30 transition-all duration-300 relative flex flex-col">
            <div className="absolute top-8 right-8 text-gray-100 group-hover:text-[#8F801B]/10 transition-colors">
              <Quote size={48} />
            </div>
            
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-[#8F801B]/10 text-[#8F801B] text-xs font-bold uppercase tracking-wider">
                M&A & IP Strategy
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Sundat (S)</h3>
            
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed relative z-10">
              "FT Synergist helped us prioritize expansion and monetization of our IP, securing a <span className="font-semibold text-gray-900">premium valuation</span> for our acquisition."
            </p>
            
            <div className="pt-6 border-t border-gray-100 mt-auto">
              <Link href="/sustainability" className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-[#8F801B] transition-colors">
                View M&A Strategy <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Branwood - Franchise */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#8F801B]/30 transition-all duration-300 relative flex flex-col">
            <div className="absolute top-8 right-8 text-gray-100 group-hover:text-[#8F801B]/10 transition-colors">
              <Quote size={48} />
            </div>

            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-[#8F801B]/10 text-[#8F801B] text-xs font-bold uppercase tracking-wider">
                Franchise Growth
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Branwood Holdings</h3>
            
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed relative z-10">
              "Within two years, our outlets <span className="font-semibold text-gray-900">grew from 4 to over 30</span>... effectively scaling our footprint across the region."
            </p>
            
            <div className="pt-6 border-t border-gray-100 mt-auto">
              <Link href="/edg-grant" className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-[#8F801B] transition-colors">
                See Franchise Roadmap <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

           {/* Card 3: Mei Le - Data */}
           <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#8F801B]/30 transition-all duration-300 relative flex flex-col">
            <div className="absolute top-8 right-8 text-gray-100 group-hover:text-[#8F801B]/10 transition-colors">
              <Quote size={48} />
            </div>

            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-[#8F801B]/10 text-[#8F801B] text-xs font-bold uppercase tracking-wider">
                Data-Driven Expansion
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Mei Le</h3>
            
            <p className="text-gray-600 mb-8 flex-grow leading-relaxed relative z-10">
              "Shifted us from reactive to proactive decision-making. Positioned our brand for <span className="font-semibold text-gray-900">sustainable, multi-market growth</span>."
            </p>
            
            <div className="pt-6 border-t border-gray-100 mt-auto">
              <Link href="/about" className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-[#8F801B] transition-colors">
                Explore Strategic Planning <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
