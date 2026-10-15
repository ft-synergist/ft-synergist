import React from 'react';
import { ExternalLink } from "lucide-react";

export interface CitationItem {
  id: number;
  label: string;
  context: string;
  url: string;
}

interface CitationFootnotesProps {
  citations?: CitationItem[];
  items?: CitationItem[];
  title?: string;
  subtitle?: string;
}

export default function CitationFootnotes({
  citations,
  items,
  title = "Institutional Citations & Statutory Reference Layers",
  subtitle = "Cross-border legal and statutory parameters verified against official regulatory tracking indices."
}: CitationFootnotesProps) {
  const displayItems = citations || items;

  return (
    <section className="py-12 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
            Institutional Governance & Statutory Framework Alignment
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-sm text-foreground/80 font-medium">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              TÜV SÜD Certified SCMC (SCMC-1810-P0236)
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              IPOS GoBusiness Accredited
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              EnterpriseSG EDG & MRA Aligned
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              IMDA IDP Frameworks
            </span>
          </div>
        </div>

        {displayItems && displayItems.length > 0 && (
          <aside aria-label="Institutional Citations" className="max-w-4xl mx-auto pt-8 border-t border-border/40 text-left font-sans">
            <div className="pb-4">
              <h5 className="text-xs uppercase tracking-[0.2em] text-[#8F801B] font-bold">
                {title}
              </h5>
              {subtitle && (
                <p className="text-muted-foreground text-xs mt-1 font-light leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="space-y-3">
              {displayItems.map((cite) => (
                <div
                  key={cite.id}
                  className="text-xs bg-muted/30 p-4 border border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="font-mono font-bold text-[#8F801B] block sm:inline sm:mr-2">
                      [{cite.id}] {cite.label} :
                    </span>
                    <p className="text-muted-foreground inline leading-relaxed font-light">
                      {cite.context}
                    </p>
                  </div>
                  <a
                    href={cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#8F801B] hover:text-foreground transition-colors font-bold uppercase tracking-wider text-[10px] whitespace-nowrap bg-background px-3 py-1.5 border border-border/60"
                  >
                    Verify Source <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>
    </section>
  );
}