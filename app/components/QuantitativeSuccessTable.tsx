// app/components/QuantitativeSuccessTable.tsx

// Temporarily bypass Drizzle DB connection due to credit exhaustion
// import { db } from '@/db'; 

// Hardcoded static fallback mirroring the Drizzle relational schema
const fallbackDataset = [
  {
    id: 1,
    name: "TNT Surveillance Pte Ltd",
    grantServices: [{ parameterDetails: "Business Strategic Planning, IP Co-Creation & Singapore Quality Class (SQC)" }],
    quantitativeOutcomes: [{ outcomeMetric: "85% drop in driver hazard alerts in 1 month; 72% cut in per-bus installation manpower costs (24 ➔ 9 man-hrs); 97% SBST, 100% SMRT & 100% PSA prime mover fleet share (10,000+ vehicles); awarded EnterpriseSG SQC", timelineMonths: 18 }]
  },
  {
    id: 2,
    name: "Branwood Holdings",
    grantServices: [{ parameterDetails: "Franchise Growth & Regional Licensing" }],
    quantitativeOutcomes: [{ outcomeMetric: "Scaled from 4 to 30+ regional outlets (650% network growth across ASEAN)", timelineMonths: 24 }]
  },
  {
    id: 3,
    name: "Sundat (S) Pte Ltd",
    grantServices: [{ parameterDetails: "Business Strategic Planning & 5-Market AI Portfolio Strategy (Project Scaling Up)" }],
    quantitativeOutcomes: [{ outcomeMetric: "Quantified ~USD 5.65B Australian agrochemical market & bypassed APVMA organic registration hurdle via acquisition-led M&A entry; structured 3-Tier global roadmap (Australia, Bangladesh, Brazil, Vietnam, Taiwan) & 5Cs Playbook", timelineMonths: 12 }]
  }
];

export default async function QuantitativeSuccessTable() {
  // Swap this back to `await db.query.clients.findMany()` when billing resets
  const dataset = fallbackDataset;

  if (!dataset || dataset.length === 0) {
    return <p className="text-sm text-gray-500">Metrics baseline currently calibrating.</p>;
  }

  return (
    <div className="overflow-x-auto mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <table className="min-w-full border-collapse border border-gray-300">
        <caption className="sr-only">FT Synergist EDGE Grant, EDG, and MRA Consulting Performance Metrics</caption>
        {/* Table Headers */}
        <thead>
          <tr className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
            <th className="border border-gray-300 p-3">Client Entity</th>
            <th className="border border-gray-300 p-3">Grant / Advisory Parameter</th>
            <th className="border border-gray-300 p-3">Quantitative Strategic Outcome</th>
            <th className="border border-gray-300 p-3">Execution Timeline</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody className="divide-y divide-gray-200 text-sm text-gray-600">
          {dataset.map((client) => {
            const service = client.grantServices[0]?.parameterDetails || 'Enterprise Strategy';
            const outcome = client.quantitativeOutcomes[0]?.outcomeMetric || 'Strategy Deployed';
            const timeline = client.quantitativeOutcomes[0]?.timelineMonths
              ? `${client.quantitativeOutcomes[0].timelineMonths} Months`
              : 'N/A';

            return (
              <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                <td className="border border-gray-300 p-3 font-medium text-gray-900">{client.name}</td>
                <td className="border border-gray-300 p-3">{service}</td>
                <td className="border border-gray-300 p-3 leading-relaxed">{outcome}</td>
                <td className="border border-gray-300 p-3">{timeline}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}