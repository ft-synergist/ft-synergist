import React from 'react';

export default function CitationFootnotes() {
  return (
    <footer className="mt-12 border-t pt-6 text-sm text-gray-600">
      <h3>Institutional Citations & Regulatory Alignment</h3>
      <ol className="list-decimal pl-5">
        <li id="cite-esg-edg">
          Enterprise Singapore. "Enterprise Development Grant (EDG)." Parameters for Core Capabilities, Innovation, and Market Access. 
          <a href="https://www.enterprisesg.gov.sg/financial-support/enterprise-development-grant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            [Official ESG Directive]
          </a>
        </li>
        <li id="cite-esg-mra">
          Enterprise Singapore. "Market Readiness Assistance (MRA) Grant." Guidelines for overseas market promotion and set-up.
          <a href="https://www.enterprisesg.gov.sg/financial-support/market-readiness-assistance-grant" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            [Official MRA Directive]
          </a>
        </li>
      </ol>
    </footer>
  );
}
