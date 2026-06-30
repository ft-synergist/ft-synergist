import React from 'react';

export default function CitationFootnotes() {
  return (
    <aside
      aria-label="Institutional Citations"
      className="bg-neutral-900 border-t border-b border-amber-500/20 py-10 text-neutral-400"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="font-semibold text-amber-500 uppercase tracking-widest mb-6 text-xs">
          Institutional Citations &amp; Regulatory Alignment
        </p>
        <ol className="space-y-4 list-decimal list-inside leading-relaxed text-sm text-neutral-400">
          <li className="pl-2 border-l border-neutral-800">
            Enterprise Singapore. &quot;Enterprise Development and Growth for Enterprises (EDGE) Grant.&quot; Streamlining the EDG, PSG, and MRA frameworks into a unified enterprise support architecture (effective H2 2026).{' '}
            <a 
              href="https://www.enterprisesg.gov.sg/campaigns/budget-2026" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:underline font-medium ml-1 inline-block"
            >
              [Official ESG Budget 2026 Campaign]
            </a>
          </li>
          <li className="pl-2 border-l border-neutral-800">
            Enterprise Singapore. &quot;Enterprise Development Grant (EDG).&quot; Capability development parameters across Core Capabilities, Innovation &amp; Productivity, and Market Access (transitioning H2 2026).{' '}
            <a 
              href="https://www.enterprisesg.gov.sg/financial-support/enterprise-development-grant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:underline font-medium ml-1 inline-block"
            >
              [Official EDG Support Parameters]
            </a>
          </li>
          <li className="pl-2 border-l border-neutral-800">
            Enterprise Singapore. &quot;Market Readiness Assistance (MRA) Grant.&quot; Support parameters for overseas market set-up, business development, and market promotion (transitioning H2 2026).{' '}
            <a 
              href="https://www.enterprisesg.gov.sg/financial-support/market-readiness-assistance-grant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-500 hover:underline font-medium ml-1 inline-block"
            >
              [Official MRA Support Parameters]
            </a>
          </li>
        </ol>
      </div>
    </aside>
  );
}