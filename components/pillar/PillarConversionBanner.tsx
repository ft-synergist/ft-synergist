"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

interface PillarConversionBannerProps {
  variant?: "mid" | "bottom";
  heading: string;
  subheading: string;
  primaryCtaLabel: string;
  onOpenSprintModal: () => void;
}

export function PillarConversionBanner({
  variant = "bottom",
  heading,
  subheading,
  primaryCtaLabel,
  onOpenSprintModal,
}: PillarConversionBannerProps) {
  if (variant === "mid") {
    return (
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#8F801B]/20 border border-[#8F801B]/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-heading text-xl font-extrabold text-white">
            {heading}
          </h3>
          <p className="font-sans text-sm text-gray-300">{subheading}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={onOpenSprintModal}
            className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center"
          >
            {primaryCtaLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <Link
            href="/contact"
            className="border border-[#8F801B] text-[#8F801B] hover:bg-[#8F801B] hover:text-white font-bold py-3.5 px-5 rounded-lg text-sm transition-all cursor-pointer inline-flex items-center justify-center group"
          >
            Quick Sprint Booking
            <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-slate-900 border-t border-b border-[#8F801B]/30 py-16 px-6 rounded-2xl text-center space-y-6">
      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
        {heading}
      </h2>
      <p className="max-w-2xl mx-auto font-sans text-gray-300 text-base sm:text-lg">
        {subheading}
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onOpenSprintModal}
          className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
        >
          {primaryCtaLabel}
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
        <Link
          href="/contact"
          className="border border-[#8F801B] text-[#8F801B] hover:bg-[#8F801B] hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all cursor-pointer inline-flex items-center justify-center group"
        >
          Quick Sprint Booking
          <ExternalLink className="ml-2 h-5 w-5 opacity-70 group-hover:opacity-100" />
        </Link>
      </div>
    </section>
  );
}

