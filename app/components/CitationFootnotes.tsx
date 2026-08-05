import React from 'react';

export default function CitationFootnotes() {
  return (
    <section className="py-12 bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
    </section>
  );
}