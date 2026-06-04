import React from "react";
import QuantitativeSuccessTable from "@/app/components/QuantitativeSuccessTable";

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

        <div className="overflow-x-auto mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <QuantitativeSuccessTable />
        </div>
      </div>
    </section>
  );
}
