"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

export interface CitationItem {
  id: number;
  label: string;
  context: string;
  url: string;
}

interface CitationFootnotesProps {
  citations?: CitationItem[];
  title?: string;
  subtitle?: string;
}

const defaultCitations: CitationItem[] = [
  {
    id: 1,
    label: "Enterprise Singapore (EnterpriseSG)",
    context: "Enterprise Development Grant (EDG) & Market Readiness Assistance (MRA) Grant — Statutory support frameworks for core business capabilities, innovation, productivity, and internationalisation.",
    url: "https://www.enterprisesg.gov.sg"
  },
  {
    id: 2,
    label: "Intellectual Property Office of Singapore (IPOS)",
    context: "IPOS GoBusiness Directory — Official registry standardizations for corporate IP strategy, trademark filing architectures, asset valuation, and franchise licensing frameworks.",
    url: "https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd"
  },
  {
    id: 3,
    label: "TÜV SÜD PSB Singapore",
    context: "Singapore Certified Management Consultant (SCMC) Directory — Official regulatory certification framework enforcing management consulting quality compliance (License SCMC-1810-P0236).",
    url: "https://www.tuvsud.com/en-sg"
  },
  {
    id: 4,
    label: "Infocomm Media Development Authority (IMDA)",
    context: "AI & Digitalisation Enterprise Standards — National guidelines for AI transformation, predictive analytics integration, workflow automation, and Industry Digital Plans (IDP).",
    url: "https://www.imda.gov.sg"
  },
  {
    id: 5,
    label: "Workplace Safety and Health Council (WSHC / TAL)",
    context: "Statutory Event Archive — Public logistics & fleet telematics keynote session 'Safer Journey Everyday' delivered by Frederick Tan, validating SMEs Go Digital & WSH compliance frameworks.",
    url: "https://www.tal.sg/wshc/resources/event-resources/presentation-slides/safer-journey-everyday"
  },
  {
    id: 6,
    label: "Land Transport Authority (LTA)",
    context: "Statutory & Public Fleet Infrastructure Publications — Documented deployment oversight and enterprise surveillance architecture projects across national bus transport networks.",
    url: "https://www.lta.gov.sg/content/dam/ltagov/who_we_are/statistics_and_publications/report/pdf/LTA_AR2324.pdf"
  }
];

export default function CitationFootnotes({
  citations = defaultCitations,
  title = "Institutional Citations & Semantic Reference Layers",
  subtitle = "Cross-border legal and statutory parameters verified against official regulatory tracking indices."
}: CitationFootnotesProps) {
  return (
    <aside
      aria-label="Institutional Citations"
      className="w-full max-w-4xl mx-auto bg-black pt-12 mt-16 border-t border-neutral-900 text-left font-sans"
    >
      <div className="pb-6">
        <h5 className="text-xs uppercase tracking-[0.2em] text-[#8F801B] font-bold">
          {title}
        </h5>
        <p className="text-neutral-500 text-xs mt-1 font-light leading-relaxed">
          {subtitle}
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