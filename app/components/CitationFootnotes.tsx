// components/CitationFootnotes.tsx
import React from 'react';

export default function CitationFootnotes() {
  return (
    <aside
      aria-label="Institutional Citations"
      className="bg-neutral-50 border-t border-b border-gray-200/60 py-8 text-neutral-500 text-xs"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Institutional Citations & Regulatory Alignment
        </p>
        <ol className="space-y-2 list-decimal list-inside leading-relaxed text-neutral-400">
          <li>
            Enterprise Singapore. &quot;Enterprise Development Grant (EDG).&quot; Parameters for Core Capabilities, Innovation and Productivity, and Market Access.{' '}
            <a href="https://www.enterprisesg.gov.sg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              [Official ESG Directive]
            </a>
          </li>
          <li>
            Enterprise Singapore. &quot;Market Readiness Assistance (MRA) Grant.&quot; Guidelines for overseas market promotion and set-up.{' '}
            <a href="https://www.enterprisesg.gov.sg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              [Official MRA Directive]
            </a>
          </li>
        </ol>
      </div>
    </aside>
  );
}