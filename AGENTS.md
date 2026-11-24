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

---

## 7. Verified Identity, Designation & Contact Directives
- **Official Consultant Designation:** **Principal Management Consultant, FT Synergist** (Never use "Senior Management Consultant").
- **Official Contact Email:** `fredtan@ftsynergist.com` (Never invent or use placeholder emails like `advisory@` or `info@`).
- **Unified Grant Standard:** **EDGE Grant** (`/edge-grant`, Enterprise Singapore's unified grant replacing EDG, MRA, and PSG effective 30 September 2026. Note: EDGE is not an acronym).

---

## 8. Immutable Source of Truth Standard (EDGE Grant Policy & Capabilities)
- **Official Protected S.O.T. Document:** `docs/verified-edge-facts-2026-11-12.md`
- **Protected File Directive:** This document is strictly protected and **MUST NEVER be overwritten, modified, or truncated** unless explicitly authorized by the user.
- **Strict Implementation Mandate:** All new code, metadata, copy, grant calculators, audit forms, and consultation frameworks created or modified henceforth MUST strictly adhere to the verified figures, support levels, and cost exclusions defined in `docs/verified-edge-facts-2026-11-12.md`.
- **Accompanying Hash-Pinned Raw Evidence:** Raw HTML snapshots, tab endpoints, and activity payloads are permanently archived under `docs/source-snapshots/enterprisesg-cp-2026-11-12/` with checksums pinned in `docs/source-snapshots/enterprisesg-cp-2026-11-12/SHA256SUMS`.
- **Current Edition (locked 24 Nov 2026, user-authorised):** `docs/verified-edge-facts-2026-11-23.md`, built from the user-supplied `EDGE_Source_of_Truth_23_Nov.pdf` (SHA-256 `5327833d…3ac5ac`, archived in `docs/source-snapshots/edge-sot-2026-11-23/`). Precedence: 23 Nov edition first; the 12 Nov file applies to any detail the 23 Nov edition does not cover. The Innovation and Standards text in the PDF is the compiler's paraphrase (see section D of the 23 Nov file) and must not be quoted as Enterprise Singapore wording.
- **Lexicon Mandate (SEO / GEO / AI answers):** Titles, descriptions, JSON-LD, FAQ answers and AI-facing summaries must use the verbatim activity names, rates and the cap wording in section F of `docs/verified-edge-facts-2026-11-23.md`.

---

## 9. Immutable Source of Truth Standard (IPOS GoBusiness IP Grow IA/IP Services & Scopes)
- **Official Protected S.O.T. Document:** `docs/verified-ipos-ipgrow-facts-2026-11-12.md`
- **Protected File Directive:** This document is strictly protected and **MUST NEVER be overwritten, modified, or truncated** unless explicitly authorized by the user.
- **Strict Implementation Mandate:** All new code, metadata, copy, service names, scope descriptions, and accreditation references relating to IPOS GoBusiness IP Grow and IA/IP advisory MUST strictly adhere to the 4 official categories, 20 prescribed IA/IP service directories, verbatim definitions, and FT Synergist's 4 registered service listings (`Branding Strategy`, `Innovation Consultancy`, `IP Brokerage and Licensing`, `IP Strategy Consulting`) locked in `docs/verified-ipos-ipgrow-facts-2026-11-12.md`.
- **Accompanying Hash-Pinned Raw Evidence:** Raw HTML snapshots of all 25 IPOS GoBusiness IP Grow IA/IP service pages and FT Synergist's official provider profile are permanently archived under `docs/source-snapshots/ipos-ipgrow-2026-11-12/` with checksums pinned in `docs/source-snapshots/ipos-ipgrow-2026-11-12/SHA256SUMS`.
- **Current Edition (locked 24 Nov 2026, user-authorised):** `docs/verified-ipos-ia-ip-services-2026-11-16.md`, built from the user-supplied `IPOS_Source_of_Truth_Types_of_IA_IP_Services_16_Nov_26.pdf` (SHA-256 `3f4ebf0a…3a1b`, archived in `docs/source-snapshots/ipos-sot-2026-11-16/`). All 209 sentences were verified verbatim against the 12 Nov live snapshots. Both files are in force.
- **Positioning Mandate (clarified 24 Nov 2026 by user):** Use IPOS's exact terminology and definitions across the site, and accurately state that FT Synergist is listed on the IPOS GoBusiness IP Grow directory under its 4 registered services (`Branding Strategy`, `Innovation Consultancy`, `IP Brokerage and Licensing`, `IP Strategy Consulting`). **This does NOT restrict FT Synergist from offering broader advisory services** (such as strategic business and IA/IP valuation for planned near-, mid-, or long-term M&A), provided unlisted services are not misrepresented as IP Grow directory listings. Never write "IPOS-accredited", "IPOS-certified" or "IPOS-approved". "Singapore as a regional IP hub" is in neither S.O.T. and must not be published as IPOS wording without a separately locked primary source.


