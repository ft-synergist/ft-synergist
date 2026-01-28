import React from "react";
import Link from "next/link";

export default function ClientImpact() {
  return (
    <section className="py-20 bg-gray-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Proven Track Record
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Singapore enterprises to dominate Asian markets. 
            Recognized by <span className="font-semibold text-amber-600">IPOS & Enterprise Singapore</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Sundat */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-full">
                M&A & IP Strategy
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sundat (S)</h3>
            <p className="text-gray-600 mb-6 flex-grow italic">
              "FT Synergist helped us prioritize expansion and monetization of our IP, securing a premium valuation."
            </p>
            <Link href="/sustainability" className="text-amber-600 font-semibold hover:text-amber-700 flex items-center">
              View M&A Strategy <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Card 2: Branwood */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-full">
                Franchise Growth
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Branwood Holdings</h3>
            <p className="text-gray-600 mb-6 flex-grow italic">
              "Within two years, our outlets grew from 4 to over 30... effectively scaling our footprint across the region."
            </p>
            <Link href="/edg-grant" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
              See Franchise Roadmap <span className="ml-2">→</span>
            </Link>
          </div>

           {/* Card 3: Mei Le */}
           <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col hover:shadow-lg transition-shadow duration-300">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider rounded-full">
                Data-Driven Expansion
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mei Le</h3>
            <p className="text-gray-600 mb-6 flex-grow italic">
              "Shifted us from reactive to proactive decision-making. Positioned our brand for sustainable, multi-market growth."
            </p>
            <Link href="/about" className="text-green-600 font-semibold hover:text-green-700 flex items-center">
              Explore Strategic Planning <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
