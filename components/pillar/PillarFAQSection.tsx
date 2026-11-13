"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PILLAR_H2_CENTER } from "./tokens";

export interface PillarFAQItem {
  q: string;
  a: string;
  renderAnswer?: React.ReactNode;
}

interface PillarFAQSectionProps {
  heading?: string;
  items: PillarFAQItem[];
}

export function PillarFAQSection({
  heading = "Frequently Asked Questions",
  items,
}: PillarFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="space-y-8 pt-6">
      <h2 className={PILLAR_H2_CENTER}>{heading}</h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#8F801B]/50"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
            >
              <span className="font-heading text-white font-semibold text-base md:text-lg pr-4 leading-snug">
                {item.q}
              </span>
              {openIndex === index ? (
                <Minus className="h-5 w-5 flex-shrink-0 text-[#8F801B]" />
              ) : (
                <Plus className="h-5 w-5 flex-shrink-0 text-gray-400" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-6 font-sans text-sm md:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                {item.renderAnswer ?? item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

