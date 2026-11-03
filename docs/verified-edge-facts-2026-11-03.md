# Locked Verified Data — EDGE Grant (Enterprise Singapore)

**Lock date:** 3 November 2026 (fetched ~15:22 SGT)
**Single source of truth:** `https://www.enterprisesg.gov.sg/financial-support/edge-grant` (main page), with the official FAQ `https://www.enterprisesg.gov.sg/resources/all-faqs/edge-grant` used for detail the main page defers to.
**Standard:** AGENTS.md §1 (zero unverified data). Anything not listed under "LOCKED" below is NOT verified and must not be published as fact.
**Raw evidence (hash-pinned):** `docs/source-snapshots/` — files suffixed `2026-11-03` (HTML and extracted text for both URLs).

| Snapshot file | SHA-256 |
|---|---|
| enterprisesg-edge-grant-main-2026-11-03.html | d2b4d0cb76d1168f7daa5d960dbac3fa2e2e936540a40a38b17feb91d7170058 |
| enterprisesg-edge-grant-main-2026-11-03.txt | 208a6560d64e8c11543b8302267d0d0eaa59b90b5131347b2874d4c316571e11 |
| enterprisesg-edge-grant-faq-2026-11-03.html | b3b166f6ce7d828d0fb076f3d67c355ffc4d526dc45a870767351e5f0f428515 |
| enterprisesg-edge-grant-faq-2026-11-03.txt | dfc0dfb9d7c5e06edce8905669e35ad6742465f75c6fa598a2bdd6dd482d0e46 |

Supersedes/extends `docs/verified-edge-facts.md` (19 Oct 2026). Corrections to that file are in section D.

---

## A. LOCKED facts (verbatim from source)

### A1. Status and timeline
| Fact | Official wording | Source |
|---|---|---|
| EDG/MRA/PSG ended | "EDG, MRA and PSG ceased on 29 September 2026. From 30 September onwards, apply for business grant support under the EDGE Grant." | Main |
| EDGE live | "EDGE has launched on 30 September 2026." | FAQ |
| Legacy projects | "If you have ongoing EDG, MRA or PSG submissions or projects, these will continue to be processed and you may submit your claims upon project completion." | Main |
| Legacy applications | "Applications submitted for EDG, MRA, and PSG before 30 September 2026 will continue to be assessed based on the requirements of the relevant scheme… After 30 September 2026, no new application will be accepted under these schemes." | FAQ |
| SFEC | SFEC-supported programmes under EDG/MRA/PSG: final claims by **30 November 2026**. "EDGE will not be supportable under SFEC." | FAQ |
| EDGE claim window opens | Claims from **1 December 2026** (single-function digital solutions and pre-scoped equipment) and **1 January 2027** (other activities). | FAQ |

### A2. Scope
| Fact | Official wording | Source |
|---|---|---|
| Scale | "8 business areas, and over 150 activities" | Main |
| The 8 areas (icon grid on official page, screenshot 3 Nov 2026) | 1 Automation, 2 Digitalisation, 3 Business Strategy, 4 Financial Management, 5 Innovation, 6 Internationalisation, 7 Standards, 8 Sustainability. (Page prose merges 1 and 2 as "Automation & Digitalisation"; the icon grid shows them separately.) | Main (screenshot) |
| Purpose | "For Singapore companies starting new projects to upgrade capabilities, improve efficiency and expand overseas" | Main |
| New projects only | "EDGE grant support is intended for new projects." Projects already supported under EDG/MRA/PSG should not seek EDGE support for the same project. | FAQ |
| Application unit | One application per activity; multiple applications can run concurrently. Applications are made via BGP links on each activity page. | FAQ |

### A3. Funding levels — TWO official statements, both locked, read together
| Statement | Wording | Source |
|---|---|---|
| Headline (main page) | "Receive up to **70% for SMEs** and up to **50% for non-SMEs**. Support levels differ by activity. Refer to each activity for more details." | Main |
| Detailed split (FAQ) | "up to **50%** support for SMEs and up to **30%** support for non-SMEs (up to **70%** support for **internationalisation and sustainability** activities for SMEs and up to **50%** support for non-SMEs)." | FAQ |

**Publishable reading:** 70% / 50% are the *maximum* rates and apply to internationalisation and sustainability activities. General activities are up to 50% (SMEs) / 30% (non-SMEs). Never state 70%/50% as a flat rate across all activities. Activity-level rates must be taken from the individual activity page.

### A4. Caps
| Fact | Official wording | Source |
|---|---|---|
| Annual cap | "up to S$100,000 in total grant support per year, across all activities… shared across all activities and refreshed on 1 April each year." | Main |
| Cap period | 1 April to 31 March the following year | FAQ |
| Digital sub-cap | Within the S$100,000, up to **S$30,000** on single-function digital solutions, integrated enterprise systems and pre-scoped equipment (one FAQ answer says "selected automation activities" in place of "pre-scoped equipment") | FAQ |
| Prior utilisation | Caps "do not take into account previous grant utilisation under EDG, MRA and PSG." | FAQ |
| Cap exhausted | No further support in that cap period; may apply in the next period. | FAQ |

### A5. Eligibility
| Fact | Official wording | Source |
|---|---|---|
| Who can apply | "a business entity registered in Singapore with at least 30% Singaporean(s) and/or Singapore PR(s) ownership. Other requirements may apply, depending on the supportable activity." | FAQ |
| Excluded | Non-profit organisations, societies, religious entities, VWOs, statutory boards, government subsidiaries — "will be rejected". | FAQ |
| SME definition | Group annual sales turnover not more than S$100 million, or group employment of no more than 200 workers. | FAQ |
| No retrospective | Applicants "must not have started work or made any payment or deposit to a supplier, vendor, or third party prior to application submission." | FAQ |
| Who submits | Applicant company only, via BGP users with Corppass Preparer/Acceptor roles; not vendors or third parties. | FAQ |

### A6. Disbursement and other
| Fact | Official wording | Source |
|---|---|---|
| Reimbursement | "disbursed on a reimbursement basis. Claims can be submitted once the activity is completed and full payment has been made." No advance payments. | Main / FAQ |
| DTDi | Companies may claim DTDi on the same expenses; qualifying expenses computed net of the EDGE grant. | FAQ |
| Consultant standard | Consultancy costs supported only if the consultant has **SS 680** certification (SAC-accredited), proposed upfront in the application. Example SAC-accredited certifiers: Institute of Management Consultants (Singapore), Singapore Business Advisors and Consultants Council Ltd, TUV SUD PSB Pte Ltd. | FAQ |
| Help | SME Centres, BizSG recommender | Main / FAQ |

---

## B. Site claims vs locked data (audit only — no site files changed)

| Site location | Current claim | Status vs locked data |
|---|---|---|
| `app/edge-grant/page.tsx` metadata (title, description) | "70% Funding" / "up to 70% support" | **Overstated as a flat rate.** 70% applies to internationalisation and sustainability only (A3). |
| `app/edge-grant/page.tsx` FAQ JSON-LD | "up to 70% of qualifying costs for SMEs and up to 50% for non-SMEs" (applied generally) | **Needs qualification** (A3). |
| `components/ClientEDGEPage.tsx` key-facts cards | "up to 70% … SMEs, up to 50% … non-SMEs" | **Needs qualification** (A3). |
| ClientEDGEPage "Unconfirmed" section | "confirmed 70% SME / 50% non-SME headline rates"; says activity details "not yet published" | **Stale.** Activity-level details are now on activity pages (A3, A2). |
| ClientEDGEPage hero + "Apply Now or Wait" | Future tense; "will cease on 29 September"; "before 30 September" | **Stale.** EDGE has been live since 30 Sep (A1). |
| ClientEDGEPage scenario B | "raises overseas expansion support from 50% to 70% for SMEs"; "removes new market restriction" | **Not verified** in fetched sources. Remove or re-source. |
| ClientEDGEPage / FAQ | "100+ activities" | **Understated.** Official: "over 150 activities" (A2). |
| ClientEDGEPage | 8 business areas incl. Automation and Digitalisation separately | **Consistent** with the official icon grid (A2). |
| Cap, reset 1 April, 30% shareholding, reimbursement, S$100k, S$30k | as stated | **Consistent** with A4–A6. |
| EDG/MRA/PSG cessation 29 Sep | as stated | **Consistent** (A1), but tense stale. |

---

## C. Not verified — do not publish as fact
- Specific percentage for any individual activity beyond what that activity's own page states (this file does not capture activity pages beyond those in the 19 Oct file).
- Any claim that EDGE "removed the new-market requirement" or "raised overseas support from 50% to 70%".
- Processing times (official: vary by activity, see activity page).
- Any ranking, SERP or competitor claim (no Google SG SERP evidence captured yet; AGENTS.md §1).

## D. Corrections to `docs/verified-edge-facts.md` (19 Oct)
1. **Section 3, business area list:** "Automation & Digitalisation" is shown as two areas (Automation, Digitalisation) and #8 is Sustainability. "(Specialised Sector Capability)" is not on the official page and should be disregarded.
2. **Section 4, "Approved Personnel Certification Bodies … Must be certified by":** the FAQ says "**Examples** of SAC-accredited personnel certification bodies include…" — the three bodies are examples, not an exclusive list. SAC-accredited bodies (or ILAC/IAF/APAC MRA-recognised bodies, per FAQ) qualify.
3. **Section 1 funding table:** the 50/30 and 70/50 split matches the FAQ. It omits the main page headline "up to 70% / 50%; support levels differ by activity" (A3 above).
4. Items not re-fetched today (AI Accounting Automation, International Branding, "no central consultant directory", LOF approval, related-party rules) are carried forward from 19 Oct and not re-locked here.

## E. Re-verification protocol
Re-fetch both URLs and diff against the hashed snapshots before any edit to funding, cap, eligibility or timeline copy, and at least monthly. Any change in the source text is logged here with a new dated file; do not overwrite this one.
