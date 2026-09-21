# FT Synergist — System Master Directives & Competitive Taxonomy

## Core Mission
1. **Page 1, Position 1 Dominance** across all 7 core consultant pillars.
2. **Qualified B2B Lead Generation & Conversion** into CRM pipeline.

---

## 1. Mandatory Data Verification Standard (41Labs Post-Mortem Rule)
- **Zero Unverified Data:** Never accept, cite, or track competitor entities or market claims from generic global directory scrapers.
- All competitor tracking, keyword rankings, and market data **MUST be grounded in verified, live Singapore evidence** (`.sg` domains, Google Singapore SERP results, EnterpriseSG/SBACC/IPOS registries).

---

## 2. The 7 Core Pillar Battleground Keywords & Routes
1. **EDG Consultant Singapore** ➔ `/edg-grant`
2. **MRA Consultant Singapore** ➔ `/mra-grant`
3. **IP Consultant Singapore** ➔ `/ip-consultant`
4. **Franchise Consultant Singapore** ➔ `/franchise-consultant`
5. **Brand Consultant Singapore** (Strategic Brand Marketing) ➔ `/strategic-brand-marketing-development`
6. **AI Digitalisation Consultant Singapore** ➔ `/ai-digitalisation`
7. **Sustainability Consultant Singapore** ➔ `/sustainability`

---

## 3. The 3-Tier Competitive Taxonomy (Official Benchmark Roster)

### Tier 1: Direct Commercial Peers (Proposals & Market Mandates)
- **FT Consulting** (`consultft.com`): Franchise, IP Monetization, EDG/MRA, Regional Disambiguation.
- **Asiawide Franchise** (`asiawidefranchise.com.sg`): China-to-SEA Inbound Pipeline, Cross-Border Advisory.
- **Astreem Consulting** (`astreem.com`): Franchise Systems, SOP Documentation, Licensing Networks.

### Tier 2: Topical & SERP Category Leaders (Search Ingestion Benchmarks)
- **AI & Digital Transformation:** **Webpuppies** (`webpuppies.com.sg`) — Enterprise AI workflows, automation, IMDA compliance.
- **Brand & Design EDG:** **Creativeans** (`creativeans.com`) — EDG Strategic Brand & Design SEO domination.
- **Grant Eligibility Ingestion:** **KCG Consulting** (`kcg.com.sg`) — Top-of-Funnel EDG eligibility & diagnostic search capture.

### Tier 3: Aspirational & Institutional Standards (Authority & Rigor)
- **Regional Aspirational:** **Consulus** (`consulus.com`) — Singapore-born Global Innovation & Transformation benchmark.
- **Global Aspirational:** **McKinsey & Company** (`mckinsey.com`) — Institutional whitepaper depth, 20-slide executive briefs, C-suite authority.

---

## 4. Quantitative Scoring Model (Weighted 4-Vector Threat Score)
$$\text{Threat Score} = (0.35 \times \text{SERP}) + (0.30 \times \text{Commercial}) + (0.20 \times \text{GEO}) + (0.15 \times \text{Asset Depth})$$

---

## 5. Measured Reporting & Quantitative Telemetry Standard
- **No Hyperbolic Terminology:** Strictly avoid unqualified promotional terms such as *"dominance"*, *"market leader"*, *"fully resolved"*, *"owns"*, or *"breakthrough"*.
- **Empirical Grounding:** All evaluation, status reporting, and trend analysis must use neutral, measured language tied directly to:
  1. Impression volume and click totals.
  2. Query count distributions.
  3. Weighted average positions and single-position movements.
  4. Explicit comparison baselines and fixed reporting windows (e.g., 7-day vs. prior 7-day periods).

---

## 6. Protected Keyword Verification Standard (Post-Incident Directive, Sep 2026)

### Purpose & Rationale
On 7 Sep 2026, a metadata rewrite on `/ip-consultant` silently removed high-value keyword terms (`"patent"`, `"trademark"`) while adding verified facts (the SCMC license number). The instruction did not authorize this removal. The agent complied with the letter ("ground in verifiable facts") while violating intent because no mechanism forced keyword removals to be surfaced as a distinct, reviewable event.

### Safety Model Notice (Swiss Cheese Model — Reason, 1990/1997)
This protocol is a defensive layer to reduce the probability and blast radius of accidental term removals. No single layer eliminates failure modes entirely. Fluency and accuracy are independent properties; professional phrasing is not evidence that essential keyword equity was preserved.

### The Mechanism: Deterministic Protected-Keyword Diffing
For every commercial page, maintain a `protected-keywords` list in that page's metadata configuration (based on the page's `keywords: []` array and confirmed GSC high-value queries).

Before ANY commit modifying a page's `<title>` or meta `description`:
1. **Extract** the protected-keywords list for that page.
2. **Check literal presence** of every listed term in the NEW title/description.
3. **Diff Enforcement:** If any protected term is in the OLD version but absent from the NEW version, **STOP. Do NOT commit.**
4. **Mandatory Reporting Format:**
   ```text
   KEPT: [terms present in both old and new]
   REMOVED: [terms present in old, absent in new]
   ADDED: [terms present in new, absent in old]
   ```
5. **Explicit Approval Gate:** If `REMOVED` is non-empty, require explicit human approval of that specific removal, **named term-by-term**. Whole-paragraph approval ("this reads well") is strictly insufficient.

### Post-Deployment Drift Check
In weekly scheduled audits, diff the **CURRENT LIVE** `<title>` and `<meta description>` on each commercial page against the **LAST KNOWN-GOOD** version on file. Any deviation between live production HTML and approved git records is treated as an incident requiring independent investigation.

### Structural Sprint Decoupling Rule
Never bundle a caution-flagged sprint with pre-approved sprints in a single instruction or approval. Each metadata-touching sprint must produce its own independent diff in the `KEPT / REMOVED / ADDED` format and be approved separately before generating the next.


