import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @page {
    size: 16in 9in;
    margin: 0;
  }
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #050505;
    color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }
  .slide {
    width: 16in;
    height: 9in;
    page-break-after: always;
    padding: 0.5in 0.7in;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #09090b;
    border: 1px solid #1f1f23;
    position: relative;
    overflow: hidden;
  }

  /* Header */
  .slide-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-b: 1px solid #27272a;
    padding-bottom: 12px;
  }
  .badge {
    background: rgba(143, 128, 27, 0.15);
    border: 1px solid rgba(143, 128, 27, 0.4);
    color: #8F801B;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    padding: 4px 10px;
    border-radius: 2px;
  }
  .slide-category {
    font-size: 11px;
    color: #a1a1aa;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  /* Footer */
  .slide-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-t: 1px solid #27272a;
    padding-top: 12px;
    font-size: 11px;
    color: #71717a;
    font-weight: 600;
  }
  .brand-tag {
    color: #8F801B;
    font-weight: 800;
    letter-spacing: 0.1em;
  }

  /* Body Content */
  .slide-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 16px 0;
  }
  
  h1.title {
    font-size: 42px;
    font-weight: 900;
    line-height: 1.15;
    color: #ffffff;
    margin: 0 0 16px 0;
    letter-spacing: -0.02em;
  }
  h2.subtitle {
    font-size: 26px;
    font-weight: 700;
    color: #8F801B;
    margin: 0 0 16px 0;
  }
  p.lead {
    font-size: 16px;
    color: #d4d4d8;
    line-height: 1.6;
    margin: 0 0 20px 0;
  }

  /* Grid Layouts */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
  .grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
  }

  /* Cards & Blocks */
  .card {
    background: #121215;
    border: 1px solid #27272a;
    padding: 20px;
    border-radius: 4px;
  }
  .card-gold {
    background: rgba(143, 128, 27, 0.08);
    border: 1px solid rgba(143, 128, 27, 0.4);
    padding: 20px;
    border-radius: 4px;
  }
  .card-header {
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #8F801B;
    margin-bottom: 10px;
  }
  .card-title {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 8px;
  }
  .card-body {
    font-size: 13px;
    color: #a1a1aa;
    line-height: 1.5;
  }

  /* Metrics Big Stat */
  .stat-box {
    text-align: center;
    background: #121215;
    border: 1px solid #27272a;
    padding: 20px 12px;
  }
  .stat-number {
    font-size: 40px;
    font-weight: 900;
    color: #8F801B;
    line-height: 1;
    margin-bottom: 6px;
  }
  .stat-label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #a1a1aa;
  }

  /* Tables */
  table.data-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    font-size: 13px;
  }
  table.data-table th {
    background: #18181b;
    color: #8F801B;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 10px 14px;
    text-align: left;
    border-bottom: 2px solid #27272a;
  }
  table.data-table td {
    padding: 10px 14px;
    border-bottom: 1px solid #27272a;
    color: #d4d4d8;
  }
  table.data-table tr:nth-child(even) td {
    background: rgba(255,255,255,0.02);
  }

  /* Bullet Lists */
  ul.bullet-list {
    margin: 0;
    padding-left: 20px;
  }
  ul.bullet-list li {
    font-size: 14px;
    color: #d4d4d8;
    margin-bottom: 8px;
    line-height: 1.5;
  }

  /* Cover Slide Special */
  .cover-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    padding: 0 40px;
  }
</style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <div class="slide">
    <div class="slide-header">
      <span class="brand-tag">FT SYNERGIST EXECUTIVE REPORT</span>
      <span class="badge">STRATEGIC INTELLIGENCE 2026</span>
    </div>
    <div class="slide-content">
      <div style="margin-bottom: 20px;">
        <span style="color: #8F801B; font-weight: 800; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase;">
          Macroeconmic Transformation & Defense Roadmap
        </span>
      </div>
      <h1 class="title" style="font-size: 52px; max-w: 90%;">
        The RTS Link &amp; Singapore Retail Defense Framework
      </h1>
      <h2 class="subtitle" style="font-size: 28px; color: #a1a1aa; font-weight: 400; max-width: 85%;">
        Countering S$2.1B Revenue Leakage, Optimizing Real Estate Portfolios, and Executing JS-SEZ Twinning Operations
      </h2>
      <div style="margin-top: 40px; border-t: 1px solid #27272a; pt: 20px; width: 100%; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <p style="font-size: 14px; color: #ffffff; font-weight: 700; margin: 0;">Prepared by Frederick Tan</p>
          <p style="font-size: 12px; color: #a1a1aa; margin: 4px 0 0 0;">Principal Advisor | FT Synergist Singapore</p>
        </div>
        <div style="text-align: right;">
          <p style="font-size: 12px; color: #8F801B; font-weight: 700; margin: 0;">Target Impact Period: 2026–2030</p>
          <p style="font-size: 11px; color: #71717a; margin: 4px 0 0 0;">Confidential Corporate Intelligence</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | WWW.FTSYNERGIST.COM</span>
      <span>SLIDE 1 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 2: EXECUTIVE SUMMARY -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">01. EXECUTIVE SYNTHESIS</span>
      <span class="badge">MACRO INFLECTION POINT</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">The RTS Link Macroeconomic Inflection Point</h2>
      <p class="lead">The January 2027 opening of the Johor Bahru–Singapore Rapid Transit System (RTS) Link permanently replaces historical border friction with a 5-minute, high-frequency transit corridor, catalyzing structural retail revenue outflow.</p>
      
      <div class="grid-4" style="margin-bottom: 20px;">
        <div class="stat-box">
          <div class="stat-number">51%</div>
          <div class="stat-label">Outbound Trip Surge</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">S$2.1B</div>
          <div class="stat-label">Max Gross Outflow</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">4.0%</div>
          <div class="stat-label">Total Retail Sales Loss</div>
        </div>
        <div class="stat-box">
          <div class="stat-number">5 MINS</div>
          <div class="stat-label">Co-located CIQ Transit</div>
        </div>
      </div>

      <div class="card-gold">
        <div class="card-header">Core Executive Takeaway</div>
        <div class="card-body" style="color: #e4e4e7; font-size: 14px;">
          Singaporean retail and F&amp;B merchants cannot survive by competing on price parity against Johor's 5x lower land and labor cost baseline. Survival demands immediate pivot to <strong>de-commoditization, premiumization, essential trade anchoring, and JS-SEZ operational twinning</strong>.
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | RTS RETAIL DEFENSE FRAMEWORK</span>
      <span>SLIDE 2 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 3: HISTORICAL CONTEXT -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">02. HISTORICAL CONTEXT</span>
      <span class="badge">THE CAUSEWAY FRICTION CAP</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Rise, Fall, and Resurgence of Cross-Border Arbitrage</h2>
      
      <div class="grid-2">
        <div class="card">
          <div class="card-header">Historical Baseline (1990s – 2020)</div>
          <ul class="bullet-list">
            <li><strong>Parity Era:</strong> Exchange rate hovered near RM1.50–RM2.00 to S$1.00; shopping was occasional and non-disruptive.</li>
            <li><strong>The Temporal Friction Cap:</strong> 1 to 3-hour unpredictable Causeway vehicular gridlocks acted as a natural protective ceiling for domestic retail.</li>
            <li><strong>Routine Protection:</strong> Inconvenience kept daily SGD grocery runs in Singapore, protecting suburban mall revenues.</li>
          </ul>
        </div>
        
        <div class="card">
          <div class="card-header">Modern Structural Shift (2024 – 2027+)</div>
          <ul class="bullet-list">
            <li><strong>Currency Arbitrage Explosion:</strong> Ringgit depreciation breached historic RM3.55+ per S$1.00, tripling purchasing power in JB.</li>
            <li><strong>Eradication of Friction:</strong> Fixed 5-minute rail transit eliminates border delay risk entirely.</li>
            <li><strong>Behavioral Shift:</strong> Occasional weekend leisure transforms into bi-weekly routine consumer spending leakage.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | HISTORICAL ANALYSIS</span>
      <span>SLIDE 3 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 4: INFRASTRUCTURE MECHANICS -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">03. INFRASTRUCTURE MECHANICS</span>
      <span class="badge">MASS TRANSIT SPECIFICATIONS</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">RTS Link Throughput &amp; Mobility Architecture</h2>
      <p class="lead">Connecting Woodlands North directly to Bukit Chagar via a 4km LRT bridge, integrated seamlessly into Singapore's Thomson-East Coast Line (TEL).</p>
      
      <table class="data-table">
        <thead>
          <tr>
            <th>Infrastructure Metric</th>
            <th>Operational Specification</th>
            <th>Strategic Impact on Retail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Co-Located CIQ Facilities</td>
            <td>Single-point simultaneous border clearance</td>
            <td>Eradicates double border friction; zero immigration queue upon arrival</td>
          </tr>
          <tr>
            <td>Transit Frequency</td>
            <td>3.6 mins (Peak) / 30 mins (Off-Peak)</td>
            <td>Operates like an internal MRT line rather than an international border</td>
          </tr>
          <tr>
            <td>System Capacity</td>
            <td>10,000 passengers/hr/direction</td>
            <td>Supports up to 140,000 daily riders at full maturation</td>
          </tr>
          <tr>
            <td>TEL Integration</td>
            <td>Orchard to Woodlands North in ~35 mins</td>
            <td>Connects SG premier shopping belt directly to JB City Centre in &lt;1 hour</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | INFRASTRUCTURE ANALYSIS</span>
      <span>SLIDE 4 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 5: QUANTITATIVE REVENUE LEAKAGE -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">04. QUANTITATIVE MODELING</span>
      <span class="badge">FINANCIAL IMPACT ANALYSIS</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Quantifying Revenue Outflow vs Inbound Spend</h2>
      
      <table class="data-table">
        <thead>
          <tr>
            <th>Economic Metric</th>
            <th>SBF / RAS / SRA Baseline Study</th>
            <th>DBS Equity Research Projection</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Current Outbound Spend (SG to JB)</td>
            <td>S$1.70 Billion / year</td>
            <td>S$1.70 Billion / year</td>
          </tr>
          <tr>
            <td>Projected Incremental Outbound Spend</td>
            <td>+ S$1.05 Billion / year (+51% trips)</td>
            <td>+ S$2.10 Billion / year (Aggressive gentrification)</td>
          </tr>
          <tr>
            <td>Current Inbound Spend (JB to SG)</td>
            <td>S$1.30 Billion / year</td>
            <td>S$1.30 Billion / year</td>
          </tr>
          <tr>
            <td>Projected Incremental Inbound Spend</td>
            <td>+ S$756 Million / year (+57% trips)</td>
            <td>+ S$756 Million / year</td>
          </tr>
          <tr>
            <td>Net Annual Structural Outflow</td>
            <td><strong>- S$290 Million / year</strong></td>
            <td><strong>- S$1.35 Billion to - S$1.80 Billion / year</strong></td>
          </tr>
          <tr>
            <td>Impact on Domestic SG Retail/F&amp;B</td>
            <td>0.4% total contribution contraction</td>
            <td><strong>3.0% to 4.0% total retail revenue contraction</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | FINANCIAL MODELING</span>
      <span>SLIDE 5 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 6: HONG KONG - SHENZHEN EQUILIBRIUM -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">05. BENCHMARK COMPARISON</span>
      <span class="badge">MACRO EQUILIBRIUM MODEL</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Lessons from the Hong Kong–Shenzhen Rail Corridor</h2>
      <p class="lead">Cross-border rail initial leakage shocks follow predictable long-term economic equilibrium cycles.</p>
      
      <div class="grid-3">
        <div class="card">
          <div class="card-header">Phase 1: Arbitrage Shock</div>
          <div class="card-title">Initial Outflow Surge</div>
          <div class="card-body">Mass day-tripping for low-end groceries, wellness, and routine dining due to immediate 30-50% price differentials.</div>
        </div>
        <div class="card">
          <div class="card-header">Phase 2: Border Gentrification</div>
          <div class="card-title">Cost Arbitrage Narrows</div>
          <div class="card-body">Heavy capital inflows push up border city commercial rents, wages, and retail prices, narrowing initial cost advantages over time.</div>
        </div>
        <div class="card-gold">
          <div class="card-header">Phase 3: Structural Equilibrium</div>
          <div class="card-title">Experiential Normalization</div>
          <div class="card-body">Shopping shifts from pure price arbitrage to specialized leisure excursions, while home market retains convenience &amp; essential trades.</div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | MACRO BENCHMARK</span>
      <span>SLIDE 6 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 7: SECTOR VULNERABILITY MATRIX -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">06. SECTORAL ANALYSIS</span>
      <span class="badge">VULNERABILITY MATRIX</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Asymmetrical Vulnerability Across Retail Categories</h2>
      
      <div class="grid-2">
        <div class="card" style="border-left: 4px solid #ef4444;">
          <div class="card-header" style="color: #ef4444;">HIGH-RISK ARBITRAGE VICTIMS</div>
          <ul class="bullet-list">
            <li><strong>Mass FMCG &amp; Supermarkets:</strong> Staple dry groceries, rice, diapers, household detergents (30-40% price gap).</li>
            <li><strong>Labor-Intensive Personal Services:</strong> Hair salons, basic manicures, routine dental/medical checkups, massage.</li>
            <li><strong>Casual Dining &amp; Mid-Tier F&amp;B:</strong> General western/asian cafes where price-to-rent ratio is unsustainably high in SG.</li>
          </ul>
        </div>
        
        <div class="card" style="border-left: 4px solid #22c55e;">
          <div class="card-header" style="color: #22c55e;">INSULATED &amp; HIGH-GROWTH DEFENDERS</div>
          <ul class="bullet-list">
            <li><strong>Immediate &amp; Urgent Services:</strong> Morning coffee, quick office lunches, express shoe/clothing repair, tuition centers.</li>
            <li><strong>Luxury &amp; High-Value Retail:</strong> Luxury fashion, flagship launches, fine dining, integrated resort entertainment.</li>
            <li><strong>Heavy Bulk Essentials:</strong> Bulk rice, fresh milk, daily perishable produce anchored by immediate convenience.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | SECTOR VULNERABILITY</span>
      <span>SLIDE 7 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 8: REGULATORY MOATS -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">07. REGULATORY DEFENSE</span>
      <span class="badge">IMPORT RESTRICTIONS &amp; TAX</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">The State Regulatory Moat: Statutory Import Ceilings</h2>
      <p class="lead">Singapore's strict border enforcement limits volume leakage and prevents large-scale commercial arbitrage by individual consumers.</p>
      
      <div class="grid-4">
        <div class="card">
          <div class="card-header">GST 9% Levy</div>
          <div class="card-title">S$100 Threshold</div>
          <div class="card-body">Travelers away &lt;48 hours enjoy only S$100 GST relief. Purchases exceeding S$100 incur 9% GST, eroding arbitrage gains.</div>
        </div>
        <div class="card">
          <div class="card-header">Zero Concession</div>
          <div class="card-title">Alcohol &amp; Tobacco</div>
          <div class="card-body">Zero duty-free allowance for cigarettes or alcohol imported from Malaysia. Full duty and GST enforced by Singapore Customs.</div>
        </div>
        <div class="card">
          <div class="card-header">SFA Food Quotas</div>
          <div class="card-title">15kg Max Import</div>
          <div class="card-body">Proposed 15kg total personal import cap. Strict ban on bak kwa, unapproved raw pork, and unapproved meat origins.</div>
        </div>
        <div class="card">
          <div class="card-header">HSA Controls</div>
          <div class="card-title">3-Month Rx Cap</div>
          <div class="card-body">Prescription drugs limited strictly to 3 months personal supply. Absolute ban on controlled substances and unregistered health items.</div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | REGULATORY ANALYSIS</span>
      <span>SLIDE 8 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 9: REGIONAL HEATMAP -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">08. GEOGRAPHIC IMPACT</span>
      <span class="badge">REGIONAL HEATMAP</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Suburban Corridor Squeeze vs. Central Capitalization</h2>
      
      <div class="grid-3">
        <div class="card">
          <div class="card-header">West Region (-S$103M Outflow)</div>
          <div class="card-title">Jurong / Clementi Squeeze</div>
          <div class="card-body">Highest incremental net leakage as TEL and AYE transit pathways make JB day trips highly accessible for western suburb households.</div>
        </div>
        <div class="card">
          <div class="card-header">North Region (-S$82M Outflow)</div>
          <div class="card-title">Woodlands / Yishun Catchment</div>
          <div class="card-body">High baseline outflow matures into regularized transit. Dominant suburban malls buffer impact via essential trade tenant mixes.</div>
        </div>
        <div class="card-gold">
          <div class="card-header">Central Region (+S$25M Net Boost)</div>
          <div class="card-title">Orchard / Marina Bay Net Gain</div>
          <div class="card-body">Capture affluent inbound Malaysian travelers seeking high-end luxury, Michelin dining, mega concerts, and premium healthcare.</div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | REGIONAL HEATMAP</span>
      <span>SLIDE 9 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 10: SUBURBAN REIT DEFENSE -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">09. REAL ESTATE ADVISORY</span>
      <span class="badge">REIT RESILIENCE PLAYBOOK</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Suburban REIT Defense: Frasers Centrepoint Trust (FCT) Case</h2>
      <p class="lead">How dominant suburban landlord portfolios stay resilient despite immediate geographical proximity to the Causeway.</p>
      
      <div class="grid-2">
        <div class="card">
          <div class="card-header">FCT Operational Metrics</div>
          <ul class="bullet-list">
            <li><strong>Portfolio Occupancy:</strong> Sustained high occupancy of 99.6%.</li>
            <li><strong>Rental Reversion:</strong> Robust average positive reversions of +6.5%.</li>
            <li><strong>Rent Projection:</strong> Suburban prime retail rents expanding 2%–4%.</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-header">Strategic Anchor Tenant Curation</div>
          <ul class="bullet-list">
            <li><strong>54% Essential Trade Base:</strong> Supermarkets, medical aesthetics, enrichment centers, and banking facilities.</li>
            <li><strong>Weight &amp; Convenience Moat:</strong> Consumers refuse to carry 10kg rice or 5L detergent on international rail transit.</li>
            <li><strong>Community Hub Transformation:</strong> Replacing low-margin retail with experiential lifestyle concepts.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | REIT ANALYSIS</span>
      <span>SLIDE 10 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 11: COST & WAGE DISPARITY -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">10. COST STRUCTURE DISPARITY</span>
      <span class="badge">SG VS JB OPERATING COSTS</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Unyielding Cost Asymmetries: Singapore vs. Johor Bahru</h2>
      
      <table class="data-table">
        <thead>
          <tr>
            <th>Cost Vector</th>
            <th>Singapore Baseline</th>
            <th>Johor Bahru Baseline</th>
            <th>Cost Asymmetry Ratio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Retail Leasing Rent (Monthly)</td>
            <td>S$15.00 psf / month (OCR average)</td>
            <td>RM3.00 – RM10.00 psf (~S$3.00 psf)</td>
            <td><strong>SG is 5x more expensive</strong></td>
          </tr>
          <tr>
            <td>Retail Assistant Minimum Wage</td>
            <td>S$2,435 / month (Mandated PWM 2026)</td>
            <td>RM1,700 / month (~S$480)</td>
            <td><strong>SG labor is 5x more expensive</strong></td>
          </tr>
          <tr>
            <td>Corporate Tax Incentives</td>
            <td>17% Standard Corporate Tax</td>
            <td>5% Corporate Tax (JS-SEZ Qualified)</td>
            <td><strong>70% tax reduction in JS-SEZ</strong></td>
          </tr>
          <tr>
            <td>F&amp;B Closure Risk</td>
            <td>~307 closure transactions per month</td>
            <td>Rapid expanding retail space demand</td>
            <td><strong>SG margins under severe pressure</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | COST STRUCTURE</span>
      <span>SLIDE 11 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 12: STRATEGIC FRAMEWORK 4 PILLARS -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">11. STRATEGIC FRAMEWORK</span>
      <span class="badge">THE 4-PILLAR DEFENSE MODEL</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">The FT Synergist 4-Pillar Retail Defense Model</h2>
      
      <div class="grid-4">
        <div class="card">
          <div class="card-header">Pillar 01</div>
          <div class="card-title">Product De-Commoditization</div>
          <div class="card-body">Deliberately purge easily substitutable FMCG. Curate exclusive SG product variants, regional brand collaborations, and high-warrantied ticket items.</div>
        </div>
        <div class="card">
          <div class="card-header">Pillar 02</div>
          <div class="card-title">JS-SEZ Twinning Operations</div>
          <div class="card-body">Relocate central kitchens and backend logistics to JS-SEZ to capture 5% CIT, lowering COGS while retaining front-end SG storefronts.</div>
        </div>
        <div class="card">
          <div class="card-header">Pillar 03</div>
          <div class="card-title">Essential Trade Anchoring</div>
          <div class="card-body">Pivoting retail floor space to high-frequency, non-exportable daily services, enrichment, medical, and immediate-use hawker dining.</div>
        </div>
        <div class="card">
          <div class="card-header">Pillar 04</div>
          <div class="card-title">Border-Agnostic Loyalty</div>
          <div class="card-body">Integrate PayNow-DuitNow cross-border payment QR codes and unified loyalty points redemption across dual-country brand branches.</div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | STRATEGIC FRAMEWORK</span>
      <span>SLIDE 12 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 13: THE JS-SEZ TWINNING PLAYBOOK -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">12. OPERATIONAL PLAYBOOK</span>
      <span class="badge">JS-SEZ TWINNING STRATEGY</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Capturing Escaped Revenue via JS-SEZ Operational Twinning</h2>
      <p class="lead">Leveraging Singapore's global HQ status and capital alongside Johor's low-cost land and labor infrastructure.</p>
      
      <div class="grid-2">
        <div class="card">
          <div class="card-header">Legislative &amp; Fiscal Incentives</div>
          <ul class="bullet-list">
            <li><strong>5% Corporate Income Tax (CIT):</strong> Up to 15 years tax relief for qualifying sectors within designated flagship zones.</li>
            <li><strong>100% Investment Tax Allowance (ITA):</strong> Offsets qualifying capital expenditures for machinery and facility fit-outs.</li>
            <li><strong>Enterprise Singapore Support:</strong> Utilize MRA grant pipelines to fund up to 50–70% of market expansion setup.</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-header">Corporate Case Proofs</div>
          <ul class="bullet-list">
            <li><strong>Old Chang Kee:</strong> Setia Business Park facility services 80+ SG outlets while running retail storefronts in JB.</li>
            <li><strong>Archisen:</strong> 52,000 sq ft smart vertical farm in Iskandar Puteri marries SG agritech IP with Malaysian agricultural scale.</li>
            <li><strong>Backend Migration:</strong> Moving central prep kitchens to JB cuts unit preparation costs by 45%.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | JS-SEZ TWINNING</span>
      <span>SLIDE 13 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 14: CROSS-BORDER EXPANSION PITFALLS -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">13. RISK MANAGEMENT</span>
      <span class="badge">CROSS-BORDER PITFALLS</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Avoiding the Graveyard of Failed Cross-Border Expansions</h2>
      
      <div class="grid-3">
        <div class="card" style="border-top: 3px solid #ef4444;">
          <div class="card-header" style="color: #ef4444;">Mistake 1: Blind Price Export</div>
          <div class="card-body">Exporting high Singapore price points directly into JB alienates local Malaysian buyers who form 80% of weekday demand. Must localize menu &amp; pricing.</div>
        </div>
        <div class="card" style="border-top: 3px solid #ef4444;">
          <div class="card-header" style="color: #ef4444;">Mistake 2: Talent Vacuum</div>
          <div class="card-body">Top local retail talent in JB commutes to SG to earn SGD. Expansions in JB face severe service staffing shortages if compensation isn't structured competitively.</div>
        </div>
        <div class="card" style="border-top: 3px solid #ef4444;">
          <div class="card-header" style="color: #ef4444;">Mistake 3: Regulatory Misstep</div>
          <div class="card-body">Failing to navigate state vs federal tax compliance, halal certifications, and dual-entity cross-border transfer pricing guidelines.</div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | RISK MANAGEMENT</span>
      <span>SLIDE 14 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 15: EXPERIENCE-DRIVEN RETAIL & HAWKER MOAT -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">14. MERCHANT ADVISORY</span>
      <span class="badge">DOMESTIC F&amp;B DEFENSE</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">The Hawker Center Price Moat &amp; Experiential F&amp;B</h2>
      
      <div class="grid-2">
        <div class="card">
          <div class="card-header">The Hawker Center Anchor Moat</div>
          <p class="card-body" style="font-size: 14px; color: #d4d4d8;">
            A standard SG hawker meal costs <strong>S$4.50 – S$6.00</strong>. It represents a "guilt-free" domestic dining option that outperforms mid-tier mall restaurants in price-to-value ratio. Casual restaurants fail when they cannot justify their price premium against local hawker centers, long before RTS competition touches them.
          </p>
        </div>
        <div class="card">
          <div class="card-header">Experiential Dining Transformation</div>
          <p class="card-body" style="font-size: 14px; color: #d4d4d8;">
            Domestic dining outlets must offer atmospheres, specialized chef culinary concepts, or high-touch hospitality that cannot be duplicated by a quick day-trip train ride. Elevate dining into a leisure destination rather than simple caloric sustenance.
          </p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | F&amp;B STRATEGY</span>
      <span>SLIDE 15 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 16: DIGITAL & PAYMENT INTEGRATION -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">15. DIGITAL TRANSFORMATION</span>
      <span class="badge">FINTECH &amp; PAYMENTS</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Bilateral QR Payments &amp; Border-Agnostic Loyalty</h2>
      <p class="lead">Using fintech linkages to maintain visibility and capture cross-border transaction data.</p>
      
      <div class="grid-2">
        <div class="card">
          <div class="card-header">PayNow-DuitNow Bilateral Linkage</div>
          <ul class="bullet-list">
            <li><strong>Instant Settlement:</strong> Enables instant cross-border QR payments between SG bank accounts and Malaysian DuitNow merchants.</li>
            <li><strong>Zero FX Friction:</strong> Removes cash exchange friction for consumers while providing corporate visibility over cash flows.</li>
            <li><strong>Transaction Efficiency:</strong> Lowers corporate payment gateway fees compared to credit card processing.</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-header">Unified Cross-Border Loyalty</div>
          <ul class="bullet-list">
            <li><strong>Single Points Engine:</strong> Points earned at JB retail outlets can be redeemed exclusively at SG flagship storefronts.</li>
            <li><strong>Ecosystem Lock-In:</strong> Keeps consumer spending within the brand ecosystem regardless of physical geographic location.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | FINTECH &amp; PAYMENTS</span>
      <span>SLIDE 16 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 17: RISK & MITIGATION MATRIX -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">16. RISK &amp; MITIGATION</span>
      <span class="badge">ENTERPRISE MITIGATION</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Enterprise Risk &amp; Tactical Mitigation Matrix</h2>
      
      <table class="data-table">
        <thead>
          <tr>
            <th>Risk Event</th>
            <th>Impact Severity</th>
            <th>Proactive Strategic Mitigation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mass FMCG Footfall Loss</td>
            <td>HIGH</td>
            <td>Pivot floor space to high-density essential services, medical aesthetics &amp; tuition centers.</td>
          </tr>
          <tr>
            <td>Mid-Tier F&amp;B Margin Compression</td>
            <td>HIGH</td>
            <td>Migrate central kitchen prep to JS-SEZ; lower COGS by 35-45% under 5% CIT incentives.</td>
          </tr>
          <tr>
            <td>Local Service Staff Defection</td>
            <td>MEDIUM</td>
            <td>Structure performance-based productivity incentives and clear career mobility paths in SG HQs.</td>
          </tr>
          <tr>
            <td>Cross-Border Import Enforcement</td>
            <td>LOW</td>
            <td>Focus SG marketing on duty-restricted goods (Alcohol, Tobacco, >S$100 items, strict SFA items).</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | RISK MATRIX</span>
      <span>SLIDE 17 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 18: STRATEGIC ROADMAP FOR SMES -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">17. ACTIONABLE PLAYBOOK</span>
      <span class="badge">SME ACTION PLAN</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">Strategic Action Blueprint for Singapore SMEs</h2>
      
      <div class="grid-3">
        <div class="card">
          <div class="card-header">Action 01: Audit SKU Vulnerability</div>
          <div class="card-body">Categorize inventory by cross-border price gap. Delist items with >30% arbitrage penalty and replace with exclusive regional SKUs.</div>
        </div>
        <div class="card">
          <div class="card-header">Action 02: Explore JS-SEZ Twinning</div>
          <div class="card-body">Conduct feasibility studies on moving heavy backend prep, logistics, and data processing to Iskandar Puteri / JB flagship zones.</div>
        </div>
        <div class="card-gold">
          <div class="card-header">Action 03: Leverage MRA &amp; EDG Grants</div>
          <div class="card-body">Apply for Enterprise Singapore grant funding (up to 50-70%) to subsidize consultancy, market entry, and IP registration costs.</div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | SME ACTION PLAN</span>
      <span>SLIDE 18 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 19: 3-YEAR IMPLEMENTATION TIMELINE -->
  <div class="slide">
    <div class="slide-header">
      <span class="slide-category">18. STRATEGIC TIMELINE</span>
      <span class="badge">3-YEAR HORIZON</span>
    </div>
    <div class="slide-content">
      <h2 class="subtitle">3-Year Strategic Implementation Horizon (2025–2027+)</h2>
      
      <div class="grid-3">
        <div class="card">
          <div class="card-header">Phase 1: Preparation (2025 – 2026)</div>
          <ul class="bullet-list">
            <li>Audit product inventory &amp; lease expiries.</li>
            <li>Incorporate JS-SEZ entity &amp; secure MRA grants.</li>
            <li>Redesign tenant mix toward essential services.</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-header">Phase 2: Launch &amp; Pivot (2027)</div>
          <ul class="bullet-list">
            <li>RTS Link passenger service begins (Jan 2027).</li>
            <li>Operationalize JS-SEZ backend central kitchen.</li>
            <li>Deploy bilateral PayNow-DuitNow loyalty app.</li>
          </ul>
        </div>
        <div class="card-gold">
          <div class="card-header">Phase 3: Dominance (2028+)</div>
          <ul class="bullet-list">
            <li>Achieve dual-node operational equilibrium.</li>
            <li>Capture inbound JB wealth traffic in SG HQs.</li>
            <li>Scale regional master franchise model.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | STRATEGIC TIMELINE</span>
      <span>SLIDE 19 OF 20</span>
    </div>
  </div>

  <!-- SLIDE 20: CALL TO ACTION -->
  <div class="slide">
    <div class="slide-header">
      <span class="brand-tag">FT SYNERGIST ADVISORY SERVICES</span>
      <span class="badge">IMMEDIATE ACTION REQUIRED</span>
    </div>
    <div class="slide-content" style="text-align: center; align-items: center;">
      <h1 class="title" style="font-size: 38px; color: #8F801B; margin-bottom: 16px;">
        Is Your Business Prepared for the RTS Inflection Point?
      </h1>
      <p class="lead" style="max-width: 80%; margin: 0 auto 30px auto; text-align: center;">
        Do not let structural revenue leakage erode your domestic market share. Claim your 60-Minute Executive Strategy Sprint with FT Synergist to audit your sectoral vulnerability and build your JS-SEZ twinning framework.
      </p>

      <div class="card-gold" style="max-width: 85%; width: 100%; text-align: left; margin-bottom: 30px;">
        <div class="card-header">IMPORTANT GRANT FUNDING NOTICE</div>
        <div class="card-body" style="color: #ffffff; font-size: 14px; line-height: 1.6;">
          Eligible Singapore-registered companies can secure <strong>up to 50% – 70% government funding support</strong> via the Enterprise Development Grant (EDG) and Market Readiness Assistance (MRA) grant to offset qualifying strategy consultancy, international market expansion, and IP protection costs.
        </div>
      </div>

      <div style="display: flex; gap: 40px; justify-content: center; align-items: center;">
        <div>
          <p style="font-size: 16px; font-weight: 800; color: #ffffff; margin: 0;">Frederick Tan | Lead Management Consultant</p>
          <p style="font-size: 13px; color: #a1a1aa; margin: 4px 0 0 0;">Certified SCMC Advisory Practitioner | FT Synergist</p>
        </div>
        <div style="border-left: 1px solid #27272a; padding-left: 40px; text-align: left;">
          <p style="font-size: 14px; font-weight: 700; color: #8F801B; margin: 0;">Website: www.ftsynergist.com</p>
          <p style="font-size: 13px; color: #a1a1aa; margin: 4px 0 0 0;">Direct Advisory Booking Available Online</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>FT SYNERGIST | EXCLUSIVE CORPORATE REPORT</span>
      <span>SLIDE 20 OF 20</span>
    </div>
  </div>

</body>
</html>
`;

fs.writeFileSync('/tmp/rts_report_slides.html', htmlContent);
console.log('Written /tmp/rts_report_slides.html successfully');

// Render to PDF using Chrome Headless
const chromePath = '"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"';
const outputPath = path.join(process.cwd(), 'public', 'ft-synergist-rts-link-singapore-retail-defense-report.pdf');

const cmd = `${chromePath} --headless --no-pdf-header-footer --print-to-pdf="${outputPath}" /tmp/rts_report_slides.html`;
execSync(cmd);
console.log(`Generated PDF at ${outputPath} with size ${fs.statSync(outputPath).size} bytes.`);
