"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import {
  PILLAR_H1,
  PILLAR_H1_ACCENT,
  PILLAR_PRIMARY_BTN,
  PILLAR_SECONDARY_BTN,
} from "./tokens";

interface PillarHeroProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  h1Main: string;
  h1Accent: string;
  subheader: string;
  expertBoxLabel?: string;
  expertBoxContent: React.ReactNode;
  ctaHeading: string;
  ctaSubheading: string;
  primaryCtaLabel: string;
  onOpenSprintModal: () => void;
  policyNotice?: React.ReactNode;
}

export function PillarHero({
  badge,
  badgeIcon,
  h1Main,
  h1Accent,
  subheader,
  expertBoxLabel = "Verified Advisory Overview",
  expertBoxContent,
  ctaHeading,
  ctaSubheading,
  primaryCtaLabel,
  onOpenSprintModal,
  policyNotice,
}: PillarHeroProps) {
  return (
    <header className="relative pt-36 pb-20 px-4 text-center max-w-5xl mx-auto space-y-8">
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8F801B]/15 border border-[#8F801B]/40 text-[#C5A017] text-xs font-bold uppercase tracking-wider">
          {badgeIcon}
          <span>{badge}</span>
        </div>
      )}

      <h1 className={PILLAR_H1}>
        {h1Main} <br className="hidden sm:inline" />
        <span className={PILLAR_H1_ACCENT}>{h1Accent}</span>
      </h1>

      <p className="max-w-3xl mx-auto font-sans text-base sm:text-xl text-gray-300 leading-relaxed font-normal">
        {subheader}
      </p>

      <div className="p-6 md:p-8 bg-black/60 border border-[#8F801B]/50 rounded-xl max-w-3xl mx-auto text-left shadow-[0_0_30px_rgba(143,128,27,0.15)] backdrop-blur-md">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#8F801B] mb-2">
          {expertBoxLabel}
        </h2>
        <div className="font-sans text-base md:text-lg leading-relaxed text-gray-200 font-medium">
          {expertBoxContent}
        </div>
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 pt-4">
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
          {ctaHeading}
        </h2>
        <p className="max-w-2xl mx-auto font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
          {ctaSubheading}
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <button onClick={onOpenSprintModal} className={PILLAR_PRIMARY_BTN}>
            {primaryCtaLabel}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          <Link href="/contact" className={PILLAR_SECONDARY_BTN}>
            Quick Sprint Booking
            <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100" />
          </Link>
        </div>

        {policyNotice && (
          <div className="mt-8 p-4 rounded-xl bg-white/5 border border-[#8F801B]/40 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm backdrop-blur-sm max-w-3xl mx-auto">
            {policyNotice}
          </div>
        )}
      </div>
    </header>
  );
}

