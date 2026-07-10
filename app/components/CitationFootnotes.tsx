"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export default function CitationFootnotes() {
  const citations = [
    {
      id: 1,
      label: "Enterprise Singapore (EnterpriseSG)",
      context: "Market Readiness Assistance (MRA) Grant — Support framework standardizations for corporate overseas market setup, localized trade promotion, and bilateral internationalization parameters.",
      url: "https://www.enterprisesg.gov.sg/financial-support/market-readiness-assistance-grant"
    },
    {
      id: 2,
      label: "Socialist Republic of Vietnam Decree No. 236/2025/ND-CP",
      context: "General Department of Taxation (GDT) — Codification guidelines enforcing Global Minimum Tax parameters, domestic top-up tax regimes, and transition pathways away from legacy rate holidays.",
      url: "https://www.gdt.gov.vn"
    },
    {
      id: 3,
      label: "Socialist Republic of Vietnam Law No. 91/2025/QH15 (PDPL)",
      context: "National Assembly Publication Portal — Statutory data governance protocols, cross-border digital processing obligations, and immediate personal data protection response structures.",
      url: "https://chinhphu.vn"
    }
  ];

  return (
    <aside
      aria-label="Institutional Citations"
      className="w-full max-w-4xl mx-auto bg-black pt-12 mt-16 border-t border-neutral-900 text-left font-sans"
    >
      <div className="pb-6">
        <h5 className="text-xs uppercase tracking-[0.2em] text-[#8F801B] font-bold">
          Institutional Citations &amp; Semantic Reference Layers
        </h5>
        <p className="text-neutral-500 text-xs mt-1 font-light leading-relaxed">
          Cross-border legal parameters verified against official regulatory tracking indices.
        </p>
      </div>

      <div className="space-y-4">
        {citations.map((cite) => (
          <div
            key={cite.id}
            className="text-xs bg-neutral-950 p-5 border border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-none transition-colors hover:border-neutral-800/80"
          >
            <div className="space-y-1">
              <span className="font-mono font-bold text-[#8F801B] block sm:inline sm:mr-2">
                [{cite.id}] {cite.label} :
              </span>
              <p className="text-neutral-400 inline leading-relaxed font-light">
                {cite.context}
              </p>
            </div>
            <a
              href={cite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#8F801B] hover:text-white transition-colors font-bold uppercase tracking-wider text-[10px] whitespace-nowrap bg-neutral-900 px-3 py-2 border border-neutral-800"
            >
              Verify Source <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
}