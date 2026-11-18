import pypdf

W, H = 842, 474  # 16:9 widescreen
RED = "0.82 0.06 0.12"
GOLD = "0.85 0.72 0.22"
DARK = "0.10 0.10 0.12"
MUTED = "0.36 0.36 0.40"
LIGHT_BG = "0.96 0.96 0.965"
DECK_FOOTER = "The Continuity Paradox: 5 Hard Truths for Singapore SMEs | Frederick Tan, FT Synergist"

def esc(s):
    return s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")

def top_chrome(cmds, slide_title, kicker=None):
    cmds.append(f"1 1 1 rg 0 0 {W} {H} re f")
    cmds.append(f"{RED} rg 42 468 72 6 re f")
    cmds.append(f"BT /F2 10.5 Tf {RED} rg 42 444 Td (FT SYNERGIST) Tj ET")
    if kicker:
        cmds.append(f"BT /F2 8.5 Tf {MUTED} rg 135 444 Td (|   {esc(kicker)}) Tj ET")
    cmds.append(f"BT /F2 19.5 Tf {RED} rg 42 406 Td ({esc(slide_title)}) Tj ET")
    cmds.append("0.82 0.82 0.84 RG 0.6 w 42 395 m 800 395 l S")

def bottom_chrome(cmds, num, footer=None):
    f_text = footer if footer else (DECK_FOOTER if num not in (17, 18) else "The Continuity Paradox: 5 Hard Truths for Singapore SMEs | FT Synergist")
    cmds.append(f"BT /F1 8.2 Tf {MUTED} rg 42 18 Td ({esc(f_text)}) Tj ET")
    cmds.append(f"BT /F2 8.5 Tf {DARK} rg 790 18 Td ({num}) Tj ET")

def hard_truth_box(cmds, x, y, w, h, quote_line1, quote_line2="", tag="THE HARD TRUTH  |  FREDERICK TAN"):
    cmds.append(f"0.09 0.09 0.12 rg {x} {y} {w} {h} re f")
    cmds.append(f"{RED} rg {x} {y} 4.5 {h} re f")
    cmds.append(f"BT /F2 8.5 Tf {GOLD} rg {x+16} {y+h-16} Td ({tag}) Tj ET")
    if quote_line2:
        cmds.append(f"BT /F2 10.5 Tf 1 1 1 rg {x+16} {y+h-33} Td ({esc(quote_line1)}) Tj ET")
        cmds.append(f"BT /F2 10.5 Tf 1 1 1 rg {x+16} {y+h-48} Td ({esc(quote_line2)}) Tj ET")
    else:
        cmds.append(f"BT /F2 11 Tf 1 1 1 rg {x+16} {y+h-36} Td ({esc(quote_line1)}) Tj ET")

def grey_card_left_red(cmds, x, y, w, h, heading, lines):
    cmds.append(f"{LIGHT_BG} rg {x} {y} {w} {h} re f")
    cmds.append(f"{RED} rg {x} {y} 3.5 {h} re f")
    ty = y + h - 24
    cmds.append(f"BT /F2 12.5 Tf {DARK} rg {x+16} {ty} Td ({esc(heading)}) Tj ET")
    ty -= 20
    for ln in lines:
        if ln.startswith("[R]"):
            cmds.append(f"BT /F2 9.3 Tf {RED} rg {x+16} {ty} Td ({esc(ln[3:])}) Tj ET")
        elif ln.startswith("[B]"):
            cmds.append(f"BT /F2 9.3 Tf {DARK} rg {x+16} {ty} Td ({esc(ln[3:])}) Tj ET")
        else:
            cmds.append(f"BT /F1 9.3 Tf 0.20 0.20 0.23 rg {x+16} {ty} Td ({esc(ln)}) Tj ET")
        ty -= 14.2

def white_card_bottom_red(cmds, x, y, w, h, badge, heading, lines):
    cmds.append(f"0.985 0.985 0.99 rg {x} {y} {w} {h} re f")
    cmds.append(f"0.88 0.88 0.90 RG 0.6 w {x} {y} {w} {h} re S")
    cmds.append(f"{RED} rg {x} {y} {w} 3.5 re f")
    cmds.append(f"{RED} rg {x + w/2 - 20:.1f} {y + h - 40:.1f} 40 20 re f")
    cmds.append(f"BT /F2 8.5 Tf 1 1 1 rg {x + w/2 - 12:.1f} {y + h - 33:.1f} Td ({esc(badge)}) Tj ET")
    ty = y + h - 62
    cmds.append(f"BT /F2 11.5 Tf {DARK} rg {x+12} {ty} Td ({esc(heading)}) Tj ET")
    ty -= 18
    for ln in lines:
        font = "/F2" if ln.startswith("[R]") or ln.startswith("[B]") else "/F1"
        col = RED if ln.startswith("[R]") else (DARK if ln.startswith("[B]") else MUTED)
        txt = ln[3:] if ln[:3] in ("[R]", "[B]") else ln
        cmds.append(f"BT {font} 8.8 Tf {col} rg {x+12} {ty} Td ({esc(txt)}) Tj ET")
        ty -= 13.5

def divider_slide(title, subtitle, quote, num):
    cmds = []
    cmds.append(f"{RED} rg 0 0 {W} {H} re f")
    cmds.append("1 1 1 RG 2.2 w 370 315 m 472 315 l S")
    cmds.append(f"BT /F2 28 Tf 1 1 1 rg 135 265 Td ({esc(title)}) Tj ET")
    cmds.append(f"BT /F1 13 Tf 0.98 0.92 0.92 rg 165 228 Td ({esc(subtitle)}) Tj ET")
    cmds.append("0.12 0.02 0.04 rg 135 120 572 64 re f")
    cmds.append(f"BT /F2 10.5 Tf 1 1 1 rg 155 155 Td ({esc(quote)}) Tj ET")
    cmds.append("BT /F1 9 Tf 0.95 0.82 0.45 rg 155 134 Td (- Frederick Tan, Principal Management Consultant, FT Synergist) Tj ET")
    cmds.append(f"BT /F1 8.5 Tf 0.9 0.75 0.75 rg 42 18 Td ({esc(DECK_FOOTER)}) Tj ET")
    cmds.append(f"BT /F2 8.5 Tf 1 1 1 rg 790 18 Td ({num}) Tj ET")
    return "\n".join(cmds)

slides = []

# SLIDE 1: COVER
c = []
c.append(f"1 1 1 rg 0 0 {W} {H} re f")
c.append(f"{RED} rg 42 468 72 6 re f")
c.append(f"BT /F2 12 Tf {RED} rg 42 440 Td (FT SYNERGIST) Tj ET")
c.append(f"BT /F2 31 Tf 0.08 0.08 0.1 rg 42 368 Td (The Continuity Paradox:) Tj ET")
c.append(f"BT /F2 28 Tf 0.08 0.08 0.1 rg 42 326 Td (Why \"Lean\" SMEs Break First When) Tj ET")
c.append(f"BT /F2 28 Tf 0.08 0.08 0.1 rg 42 286 Td (Cloud, Power & Borders Shut Down) Tj ET")
c.append(f"BT /F1 13.5 Tf {MUTED} rg 42 232 Td (5 Hard Lessons from the Outlook Outage, Equinix SG3 & ASEAN Export Bans) Tj ET")
c.append(f"BT /F1 13.5 Tf {MUTED} rg 42 210 Td (- And How Smart Founders Turn BCP into a S$55M Tender Weapon) Tj ET")
c.append(f"{RED} rg 42 192 72 3 re f")
hard_truth_box(c, 42, 105, 490, 68,
    "\"Big MNCs have balance sheets to survive a 48-hour blackout.",
    "Lean SMEs only have next month's payroll. Assuming BCP is 'only for big boys' is fatal.\"")
c.append(f"BT /F2 9.5 Tf {DARK} rg 42 72 Td (Authored by Frederick Tan, Principal Management Consultant | FT Synergist (TUV SUD SCMC-1810-P0236)) Tj ET")
# Right dark card
c.append(f"0.08 0.08 0.11 rg 558 72 242 325 re f")
c.append(f"{RED} rg 558 393 242 4 re f")
c.append(f"BT /F2 10.5 Tf {GOLD} rg 576 364 Td (INSIDE THIS 20-SLIDE BRIEFING) Tj ET")
c.append("BT /F2 9.5 Tf 1 1 1 rg 576 332 Td (01. The Cloud Monoculture Trap) Tj ET")
c.append("BT /F1 8.5 Tf 0.75 0.75 0.78 rg 576 317 Td (Why M365 going dark freezes cash flow) Tj ET")
c.append("BT /F2 9.5 Tf 1 1 1 rg 576 286 Td (02. When Data Centres Overheat) Tj ET")
c.append("BT /F1 8.5 Tf 0.75 0.75 0.78 rg 576 271 Td (Equinix SG3 & Saturday PayNow blackouts) Tj ET")
c.append("BT /F2 9.5 Tf 1 1 1 rg 576 240 Td (03. Midnight Border Closures) Tj ET")
c.append("BT /F1 8.5 Tf 0.75 0.75 0.78 rg 576 225 Td (Malaysia poultry & Indonesia palm oil bans) Tj ET")
c.append("BT /F2 9.5 Tf 1 1 1 rg 576 194 Td (04. The PCBC Escape Hatch) Tj ET")
c.append("BT /F1 8.5 Tf 0.75 0.75 0.78 rg 576 179 Td (Factory-in-Market tariff insulation) Tj ET")
c.append("BT /F2 9.5 Tf 1 1 1 rg 576 148 Td (05. Up to 50%-70% EDGE Co-Funding) Tj ET")
c.append("BT /F1 8.5 Tf 0.75 0.75 0.78 rg 576 133 Td (Let EnterpriseSG co-fund your ERM shield) Tj ET")
c.append(f"BT /F2 9 Tf {RED} rg 576 95 Td (FT SYNERGIST EXECUTIVE SERIES) Tj ET")
bottom_chrome(c, 1)
slides.append("\n".join(c))

# SLIDE 2: EXECUTIVE SUMMARY
c = []
top_chrome(c, "EXECUTIVE SUMMARY: MAKE HAY BEFORE THE STORM", "THE FOUNDER'S REALITY CHECK")
grey_card_left_red(c, 42, 145, 365, 232, "The \"It Won't Happen to Us\" Delusion", [
    "Every founder loves talking about top-line growth when the",
    "sun is shining. Nobody wants to talk about plumbing until",
    "the basement floods.",
    "",
    "[R]The Empirical Reality (QBE & SBF Data):",
    "74% to 77% of Singapore SMEs worry about business",
    "interruption killing their cash flow - yet only 22% to 23%",
    "have active protection, and 19% have zero digital safeguards.",
    "Hope is not a continuity strategy."
])
grey_card_left_red(c, 435, 145, 365, 232, "The Pivot: From Shelfware to Revenue Weapon", [
    "At FT Synergist, we refuse to write 200-page compliance",
    "binders that gather dust. We engineer lean, battle-tested",
    "ERM and BCP playbooks that do two things:",
    "",
    "[R]1. Keep Your Cash Register Ringing:",
    "Out-of-band comms, dual payment rails, and PCBC",
    "dual-origin supply chains when competitors freeze.",
    "[R]2. Qualify You for Multimillion-Dollar Tenders:",
    "How TNT Surveillance unlocked a S$55M enterprise channel."
])
hard_truth_box(c, 42, 55, 758, 72,
    "\"When a shock hits, big companies lose a quarter's bonus. Unprepared SMEs lose the company.",
    "Yet the same BCP manual that saves your downside is the exact ticket MNCs demand before awarding tenders.\"")
bottom_chrome(c, 2)
slides.append("\n".join(c))

# SLIDE 3: SITUATION
c = []
top_chrome(c, "THE EFFICIENCY PARADOX: WHY LEAN SMES BREAK FIRST", "STRUCTURAL FRAGILITY")
c.append(f"BT /F2 13.5 Tf {DARK} rg 42 356 Td (For 15 years, SMEs were told to \"cut fat\" and consolidate onto single vendors. Here is the bill:) Tj ET")
grey_card_left_red(c, 42, 145, 465, 195, "Four Single-Point Time Bombs Sitting Inside Your SME", [
    "[R]1. One Cloud Login Rules Everything:",
    "   Email, Teams, SharePoint, and CRM sit behind one authentication gate.",
    "[R]2. One Bank Acquirer Runs Your Checkout:",
    "   When one data centre overheats, your PayNow and terminal rails go blind.",
    "[R]3. One Neighbouring Country Feeds Your Kitchen or Factory:",
    "   34% of Singapore's poultry came from one border until 1 June 2022.",
    "[R]4. 30-to-60-Day Working Capital Runway:",
    "   Unlike listed giants, a 7-day operational freeze triggers payroll distress."
])
grey_card_left_red(c, 528, 145, 272, 195, "The Numbers Don't Lie", [
    "[R]74% - 77%",
    "SG SMEs fearing interruption loss",
    "",
    "[R]22% - 23%",
    "Actually protected (54-pt gap)",
    "",
    "[R]19% (Nearly 1 in 5)",
    "Zero digital outage processes"
])
hard_truth_box(c, 42, 55, 758, 72,
    "\"Hyper-efficiency without redundancy is just disguised fragility. When you put 100% of your eggs in",
    "one cloud basket or one cross-border supplier, you hand them the kill-switch to your business.\"")
bottom_chrome(c, 3)
slides.append("\n".join(c))

# SLIDE 4: COMPLICATION
c = []
top_chrome(c, "THE BACKUP DELUSION: HISTORY VS. FRIDAY'S REVENUE", "LESSONS FROM THE OUTLOOK OUTAGE")
c.append(f"BT /F2 22 Tf {RED} rg 88 300 Td (\"A cloud backup saves your history. It does absolutely) Tj ET")
c.append(f"BT /F2 22 Tf {RED} rg 112 268 Td (nothing to save your Friday afternoon revenue.\") Tj ET")
c.append(f"BT /F2 11 Tf {MUTED} rg 275 235 Td (- Frederick Tan, Principal Management Consultant, FT Synergist) Tj ET")
c.append(f"BT /F1 10.5 Tf 0.2 0.2 0.23 rg 95 182 Td (When Microsoft 365 and Outlook went down across 74 countries, thousands of SME bosses discovered) Tj ET")
c.append(f"BT /F1 10.5 Tf 0.2 0.2 0.23 rg 95 162 Td (a painful truth highlighted by NTU Professor Boh Wai Fong: backing up old files to the cloud protects) Tj ET")
c.append(f"BT /F1 10.5 Tf 0.2 0.2 0.23 rg 95 142 Td (you from deletion, but when the live platform dies, you cannot send quotes, approve POs, or bill clients.) Tj ET")
bottom_chrome(c, 4)
slides.append("\n".join(c))

# SLIDE 5: DIVIDER
slides.append(divider_slide(
    "CAUGHT COLD: 4 REAL SHOCKS",
    "When IT, Air-Conditioning, Politics & Tariffs Ambush Unprepared Businesses",
    "\"Stop thinking BCP is an IT problem. The last four crises that hit Singapore SMEs came from four different directions.\"",
    5
))

# SLIDE 6: 4-VECTOR MODEL
c = []
top_chrome(c, "THE 4-VECTOR AMBUSH: WHERE SMES GET CAUGHT COLD", "MULTI-VECTOR RISK ARCHITECTURE")
white_card_bottom_red(c, 42, 140, 176, 235, "01", "The Cloud Trap", [
    "[R]IT Monoculture",
    "Microsoft 365 / Outlook",
    "(74 countries) &",
    "CrowdStrike (8.5M PCs).",
    "[B]What Froze:",
    "Live quotes, dispatches,",
    "and customer support."
])
white_card_bottom_red(c, 236, 140, 176, 235, "02", "The Chiller Trap", [
    "[R]Facility & Energy",
    "Equinix SG3 cooling failure",
    "(14 Oct 2023) & Vietnam",
    "industrial grid blackouts.",
    "[B]What Froze:",
    "DBS/Citibank, PayNow,",
    "and factory assembly lines."
])
white_card_bottom_red(c, 430, 140, 176, 235, "03", "The Border Trap", [
    "[R]Export Nationalism",
    "Malaysia live chicken ban",
    "(Jun 2022, 34% SG supply)",
    "& ID palm oil ban.",
    "[B]What Froze:",
    "F&B stalls, central kitchens,",
    "and food manufacturers."
])
white_card_bottom_red(c, 624, 140, 176, 235, "04", "The Tariff Trap", [
    "[R]Chokepoints & Duties",
    "Red Sea rerouting (+200%",
    "to 300% spot freight) &",
    "tariff walls.",
    "[B]What Froze:",
    "Margins on fixed-price",
    "B2B delivery contracts."
])
hard_truth_box(c, 42, 52, 758, 72,
    "\"Your customers don't care whether your delivery failed because of a Microsoft bug, a broken water chiller,",
    "or a politician's export ban. They only remember whether you delivered when your competitor couldn't.\"")
bottom_chrome(c, 6)
slides.append("\n".join(c))

# SLIDE 7: VECTOR 1 DEEP DIVE
c = []
top_chrome(c, "THE CLOUD TRAP: WHY MICROSOFT GOING DOWN PARALYSES SMES", "VECTOR 1 DEEP DIVE (CNA / NTU ANALYSIS)")
grey_card_left_red(c, 42, 145, 238, 230, "1. One Plug, Four Blackouts", [
    "[R]Shared Plumbing:",
    "You think Outlook, Teams,",
    "SharePoint, and OneDrive",
    "are four separate tools.",
    "They aren't. They share core",
    "routing and login pipes.",
    "When one pipe bursts, your",
    "entire office goes mute."
])
grey_card_left_red(c, 301, 145, 238, 230, "2. Cached Mail != Cash Flow", [
    "[R]The Offline Mirage:",
    "Sure, desktop caching lets",
    "your sales team read last",
    "week's emails. But they",
    "cannot receive today's RFQ,",
    "send a time-sensitive quote,",
    "or issue a delivery order.",
    "Commerce stops cold."
])
grey_card_left_red(c, 560, 145, 240, 230, "3. The Monday Hangover", [
    "[R]The Backlog Traffic Jam:",
    "As NTU Prof. Boh Wai Fong",
    "warned, most BCPs forget",
    "the post-recovery flood:",
    "48 hours of jammed orders,",
    "missed SLAs, and angry",
    "clients hitting a 15-person",
    "team all at once."
])
hard_truth_box(c, 42, 52, 758, 74,
    "\"If your team's only backup plan when Outlook dies is 'wait and refresh the browser,' you don't have",
    "a business continuity plan. You have a spectator pass to your own revenue outage.\"")
bottom_chrome(c, 7)
slides.append("\n".join(c))

# SLIDE 8: VECTOR 2 DEEP DIVE
c = []
top_chrome(c, "WHEN CHILLERS FAIL: HOW A DATA CENTRE FROZE SATURDAY SALES", "VECTOR 2 DEEP DIVE (ENERGY & COOLING)")
grey_card_left_red(c, 42, 145, 365, 230, "Singapore: Equinix SG3 Cooling Failure (14 Oct 2023)", [
    "[R]A Water Chiller Took Down Cashless Commerce:",
    "It wasn't a hacker. A chilled-water cooling malfunction",
    "during a routine upgrade sent data-hall temperatures",
    "soaring at Equinix SG3, forcing servers to shut down.",
    "",
    "[B]What Happened on the Ground:",
    "- DBS and Citibank digital banking, ATMs, and PayNow/",
    "  card rails went down for 12 to 24 hours on a Saturday.",
    "- Retail and F&B SMEs relying on a single terminal acquirer",
    "  watched weekend walk-in customers walk away."
])
grey_card_left_red(c, 435, 145, 365, 230, "Vietnam: Northern Industrial Grid Blackouts (2023)", [
    "[R]When the Power Grid Rationed Factory Hours:",
    "Record heatwaves and low hydro reservoirs triggered",
    "unannounced rolling blackouts across Bac Ninh and",
    "Bac Giang industrial parks in May-June 2023.",
    "",
    "[B]What Happened to Regional SMEs:",
    "- Production shifts halted mid-run without backup power.",
    "- Singapore engineering and trading firms relying on",
    "  single-park suppliers missed downstream project milestones."
])
hard_truth_box(c, 42, 52, 758, 74,
    "\"Digital transformation still runs on electricity and chilled water. Always maintain a secondary",
    "bank acquirer QR/terminal at the counter and audit your key factory supplier's power redundancy.\"")
bottom_chrome(c, 8)
slides.append("\n".join(c))

# SLIDE 9: VECTOR 3 DEEP DIVE
c = []
top_chrome(c, "MIDNIGHT BORDER BANS: WHEN NEIGHBOURS SHUT THE TAP", "VECTOR 3 DEEP DIVE (POLITICAL EXPORT BANS)")
grey_card_left_red(c, 42, 145, 365, 230, "The Ambush: 3.6 Million Chickens Gone Overnight", [
    "[R]Malaysia Live Chicken Ban (1 Jun - Oct 2022):",
    "To fight domestic inflation, Malaysia banned live poultry",
    "exports overnight - cutting off 34% of Singapore's supply.",
    "",
    "[R]Indonesia Palm Oil Export Ban (Apr - May 2022):",
    "Overnight export freeze shocked regional bakeries, central",
    "kitchens, and food manufacturers.",
    "[B]The Casualty List:",
    "Single-source F&B operators had to shut stalls or swallow",
    "massive spot-price hikes while competitors with frozen/",
    "Thai/Brazilian supply took their market share."
])
grey_card_left_red(c, 435, 145, 365, 230, "The FT Synergist Playbook: Dual-Origin Architecture", [
    "[R]1. The 70/30 Dual-Origin Rule:",
    "Never let 100% of a critical input cross a single border.",
    "Keep 20%-30% warm with a pre-qualified secondary origin",
    "(e.g. Thailand, Brazil, Australia) even if it costs 3% more.",
    "",
    "[R]2. Recipe & Spec Engineering:",
    "Pre-test alternative-origin inputs in your central kitchen",
    "or assembly SOPs before a ban hits so taste/spec holds.",
    "",
    "[R]3. Cost-Escalation Clauses:",
    "Build sovereign export-ban triggers into B2B supply contracts."
])
hard_truth_box(c, 42, 52, 758, 74,
    "\"Saving 5% by buying 100% of your raw materials from one cross-border supplier looks smart on a",
    "spreadsheet - right up until a foreign ministry signs an export ban on a Tuesday night.\"")
bottom_chrome(c, 9)
slides.append("\n".join(c))

# SLIDE 10: VECTOR 4 DEEP DIVE
c = []
top_chrome(c, "TARIFF WALLS & THE PCBC \"FACTORY-IN-MARKET\" ESCAPE HATCH", "VECTOR 4 DEEP DIVE (GEOPOLITICAL SUPPLY)")
grey_card_left_red(c, 42, 145, 365, 230, "The Trap: Export-Only Manufacturing", [
    "[R]When Shipping Lanes & Tariffs Turn Hostile:",
    "- Red Sea rerouting spiked container spot rates by",
    "  200% to 300% and added 10-14 days to transit times.",
    "- Sudden US-China and regional tariff realignments",
    "  can wipe out a 15% net margin overnight.",
    "- SMEs shipping finished goods from a single home",
    "  factory bear 100% of the freight and duty shock."
])
grey_card_left_red(c, 435, 145, 365, 230, "The Solution: PCBC \"Factory-in-Market\"", [
    "[R]How Wang Lao Ji (WALOVI) Insulated ASEAN Growth:",
    "- Instead of exporting every can from China, Wang Lao Ji",
    "  partnered with Baosteel Packaging to run production",
    "  lines inside Malaysia and Vietnam.",
    "- Result: Captures CAFTA 3.0 tariff efficiency, slashes",
    "  ASEAN lead times, and ring-fences regional supply",
    "  from maritime chokepoints."
])
hard_truth_box(c, 42, 52, 758, 74,
    "\"Marketing sells your first container; supply-chain architecture protects your thousandth. Under EDGE",
    "Internationalisation (up to 70% SME grant), EnterpriseSG will co-fund your overseas partner matching.\"")
bottom_chrome(c, 10)
slides.append("\n".join(c))

# SLIDE 11: MINDSET SHIFT
c = []
top_chrome(c, "THE TENDER PARADOX: WHY \"BORING\" MANUALS WIN BIG DEALS", "COMMERCIAL REPOSITIONING")
c.append("0.98 0.98 0.985 rg 42 140 365 230 re f")
c.append("0.85 0.15 0.15 rg 42 140 365 4 re f")
c.append(f"BT /F2 13.5 Tf {RED} rg 58 342 Td (How Typical SME Bosses See BCP) Tj ET")
c.append(f"BT /F1 10.5 Tf {DARK} rg 58 302 Td (\"It's red tape. Why spend money writing Risk) Tj ET")
c.append(f"BT /F1 10.5 Tf {DARK} rg 58 282 Td (Registers and ERM Manuals when I could hire) Tj ET")
c.append(f"BT /F1 10.5 Tf {DARK} rg 58 262 Td (another salesperson?\") Tj ET")
c.append(f"BT /F2 10 Tf {RED} rg 58 210 Td (The Hidden Cost:) Tj ET")
c.append(f"BT /F1 9.5 Tf {DARK} rg 58 190 Td (Your salesperson brings back an MNC or Changi) Tj ET")
c.append(f"BT /F1 9.5 Tf {DARK} rg 58 172 Td (tender - and procurement disqualifies you at Gate 1.) Tj ET")

c.append("0.98 0.98 0.985 rg 435 140 365 230 re f")
c.append("0.08 0.58 0.32 rg 435 140 365 4 re f")
c.append("BT /F2 13.5 Tf 0.08 0.58 0.32 rg 452 342 Td (How Institutional Buyers See BCP) Tj ET")
c.append(f"BT /F1 10.5 Tf {DARK} rg 452 302 Td (\"If we award a S$10M contract to this SME) Tj ET")
c.append(f"BT /F1 10.5 Tf {DARK} rg 452 282 Td (and their cloud or supplier fails, our own) Tj ET")
c.append(f"BT /F1 10.5 Tf {DARK} rg 452 262 Td (operations stop. Show us their ERM Manual.\") Tj ET")
c.append("BT /F2 10 Tf 0.08 0.58 0.32 rg 452 210 Td (The Commercial Prize:) Tj ET")
c.append(f"BT /F1 9.5 Tf {DARK} rg 452 190 Td (An audited ERM & SQC posture vaults you past) Tj ET")
c.append(f"BT /F1 9.5 Tf {DARK} rg 452 172 Td (cheaper competitors into tier-one contract pools.) Tj ET")

hard_truth_box(c, 42, 52, 758, 72,
    "\"MNCs and government agencies don't buy from the cheapest SME anymore; they buy from the safest",
    "SME. Your Business Continuity Plan is the ultimate B2B sales credential.\"")
bottom_chrome(c, 11)
slides.append("\n".join(c))

# SLIDE 12: DIVIDER
slides.append(divider_slide(
    "REAL SKIN IN THE GAME",
    "How Three Enterprises Turned Continuity & Diversification into Bankable Growth",
    "\"Don't take my word for it. Look at what happened when we built continuity into real Singapore operations.\"",
    12
))

# SLIDE 13: PORTFOLIO PROOF
c = []
top_chrome(c, "PROOF IN THE P&L: THREE VERIFIED CLIENT OUTCOMES", "FT SYNERGIST CASE TRACK RECORD")
white_card_bottom_red(c, 42, 140, 238, 235, "S$55M", "TNT Surveillance Pte Ltd", [
    "[R]The Bottleneck:",
    "Breaking into tier-one public",
    "and enterprise security tenders.",
    "[B]What We Built:",
    "Architected formal Business",
    "Continuity Plans & EnterpriseSG",
    "Singapore Quality Class (SQC)",
    "systems - unlocking a S$55M",
    "new enterprise sales channel."
])
white_card_bottom_red(c, 301, 140, 238, 235, "3 MKTS", "Sundat (S) Pte Ltd", [
    "[R]The Bottleneck:",
    "Climate & regulatory concentration",
    "in regional agrochemical trade.",
    "[B]What We Built:",
    "Engineered a 5-year multi-market",
    "diversification roadmap across",
    "Australia, Vietnam & Taiwan -",
    "turning opportunistic trade into",
    "a resilient regional portfolio."
])
white_card_bottom_red(c, 560, 140, 240, 235, "CHANGI", "Bestway Cleaning (T2)", [
    "[R]The Bottleneck:",
    "Rigid manual patrol schedules",
    "in a high-surge airport terminal.",
    "[B]What We Built:",
    "Independent process architect",
    "for predictive analytics &",
    "9-module human-in-the-loop",
    "operational visibility at",
    "Changi Airport Terminal 2."
])
hard_truth_box(c, 42, 52, 758, 72,
    "\"TNT Surveillance didn't build a Business Continuity Plan because they loved paperwork. They built",
    "it because S$55 million in enterprise contracts was sitting on the other side of that qualification gate.\"")
bottom_chrome(c, 13)
slides.append("\n".join(c))

# SLIDE 14: TABLE SLIDE
c = []
top_chrome(c, "THE LITMUS TEST: PASSIVE IT BACKUP VS. ACTIVE ERM", "DIAGNOSTIC COMPARISON")
c.append(f"{RED} rg 42 325 758 34 re f")
c.append("BT /F2 10 Tf 1 1 1 rg 54 338 Td (When This Shock Hits...) Tj ET")
c.append("BT /F2 10 Tf 1 1 1 rg 255 338 Td (The \"We Have Cloud Backup\" SME) Tj ET")
c.append("BT /F2 10 Tf 1 1 1 rg 530 338 Td (The FT Synergist ERM-Ready SME) Tj ET")

rows = [
    ("1. Microsoft 365 / Outlook Dies", "Staff stare at screens; zero quotes or POs sent", "Switches to out-of-band comms & offline PO pack"),
    ("2. The Morning After Restoration", "48-hr email backlog causes missed SLAs & chaos", "Executes 12-hr priority triage (Key Accounts first)"),
    ("3. Bank / PayNow Rail Overheats", "Cashless checkout freezes; weekend sales lost", "Flips to secondary acquirer QR/terminal in 60 secs"),
    ("4. Neighbour Bans Raw Exports", "Panic buying on spot market; margins wiped out", "Activates pre-tested 70/30 dual-origin supplier"),
    ("5. MNC Audits Vendor Risk", "Disqualified at procurement pre-qualification", "Submits audited ERM Manual & Self-Assessment"),
]
y = 285
for idx, (col1, col2, col3) in enumerate(rows):
    bg = "0.93 0.94 0.96" if idx % 2 == 0 else "0.975 0.975 0.98"
    c.append(f"{bg} rg 42 {y} 758 38 re f")
    c.append(f"BT /F2 9.5 Tf {DARK} rg 54 {y+14} Td ({esc(col1)}) Tj ET")
    c.append(f"BT /F1 9.5 Tf 0.25 0.25 0.28 rg 255 {y+14} Td ({esc(col2)}) Tj ET")
    c.append(f"BT /F2 9.5 Tf {DARK} rg 530 {y+14} Td ({esc(col3)}) Tj ET")
    y -= 40

c.append(f"BT /F1 8 Tf {MUTED} rg 42 62 Td (*Aligned with Enterprise Singapore EDGE Grant 'Enterprise Risk Management and Internal Controls' prescribed deliverables.) Tj ET")
bottom_chrome(c, 14)
slides.append("\n".join(c))

# SLIDE 15: CHART SLIDE
c = []
top_chrome(c, "THE 54-POINT BLIND SPOT: EVERYONE WORRIES, FEW ACT", "SINGAPORE SME EMPIRICAL DATA")
c.append(f"BT /F2 13 Tf {DARK} rg 42 354 Td (Why 3 out of 4 Singapore SMEs Are Losing Sleep - But Leaving the Barn Door Open) Tj ET")
bars = [
    ("SMEs Worried About Business Interruption Income Loss (QBE)", 77, RED, "77% (Know the Risk)"),
    ("SMEs Hit by Macro & Supply-Chain Volatility (SBF NBS)", 43, "0.561 0.502 0.106", "43% (Feeling the Squeeze)"),
    ("SMEs Holding Active Business Interruption Protection (QBE)", 23, "0.25 0.35 0.48", "23% (Actually Protected)"),
    ("SMEs With ZERO Formal Cyber / Outage Safeguards (QBE)", 19, "0.45 0.12 0.15", "19% (Flying Blind)"),
]
by = 292
for label, pct, col, val_txt in bars:
    c.append(f"BT /F2 9.5 Tf {DARK} rg 42 {by+16} Td ({esc(label)}) Tj ET")
    c.append(f"0.92 0.92 0.94 rg 42 {by-4} 520 15 re f")
    bw = int(520 * (pct / 100.0))
    c.append(f"{col} rg 42 {by-4} {bw} 15 re f")
    c.append(f"BT /F2 9.5 Tf {col} rg 575 {by-1} Td ({esc(val_txt)}) Tj ET")
    by -= 50

hard_truth_box(c, 42, 50, 758, 66,
    "\"77% of SME bosses know an interruption could cripple them, yet only 23% have built the shield.",
    "In a downturn, closing that 54-point gap is how you take market share from competitors who freeze.\"")
bottom_chrome(c, 15)
slides.append("\n".join(c))

# SLIDE 16: EDGE GRANT MATRIX
c = []
top_chrome(c, "DON'T PAY 100% OUT OF POCKET: THE EDGE GRANT PLAYBOOK", "ENTERPRISE SINGAPORE CO-FUNDING (POST-30 SEP 2026)")
c.append(f"{RED} rg 42 325 758 34 re f")
c.append("BT /F2 9.5 Tf 1 1 1 rg 52 338 Td (Prescribed EDGE Grant Activity) Tj ET")
c.append("BT /F2 9.5 Tf 1 1 1 rg 275 338 Td (Co-Funding (SME / Non-SME)) Tj ET")
c.append("BT /F2 9.5 Tf 1 1 1 rg 445 338 Td (Outcome / Window) Tj ET")
c.append("BT /F2 9.5 Tf 1 1 1 rg 565 338 Td (What EnterpriseSG Co-Funds You to Build) Tj ET")

g_rows = [
    ("Enterprise Risk Management & Internal Controls", "Up to 50% / Up to 30%", "10 wks / 12 mos", "Risk Report, Template, ERM Manuals, Control Self-Assessment (SS 680)"),
    ("Business Strategic Planning", "Up to 50% / Up to 30%", "10 wks / 12 mos", "Internal/External Analysis, Growth Strategy & IP Management (SS 680)"),
    ("Identification of Overseas Partnerships", "Up to 70% / Up to 50%", "6 wks / 12 mos", "Vetted 1-to-1 in-premises overseas supplier/partner meetings"),
    ("Market Entry Setup (Internationalisation)", "Up to 70% / Up to 50%", "6 wks / 18 mos", "Overseas entity (>50%), bespoke contracts, overseas IP & tax setup"),
]
y = 280
for idx, (r1, r2, r3, r4) in enumerate(g_rows):
    bg = "0.93 0.94 0.96" if idx % 2 == 0 else "0.975 0.975 0.98"
    c.append(f"{bg} rg 42 {y} 758 42 re f")
    c.append(f"BT /F2 8.8 Tf {DARK} rg 52 {y+16} Td ({esc(r1)}) Tj ET")
    c.append(f"BT /F2 8.8 Tf {RED} rg 275 {y+16} Td ({esc(r2)}) Tj ET")
    c.append(f"BT /F1 8.8 Tf {DARK} rg 445 {y+16} Td ({esc(r3)}) Tj ET")
    c.append(f"BT /F1 8.2 Tf 0.2 0.2 0.23 rg 565 {y+16} Td ({esc(r4)}) Tj ET")
    y -= 45

c.append(f"BT /F2 8.5 Tf {DARK} rg 42 64 Td (Golden Rule: Do NOT start work or pay a deposit before applying on BGP via Corppass. Shared S$100,000 annual cap refreshes every 1 April.) Tj ET")
bottom_chrome(c, 16)
slides.append("\n".join(c))

# SLIDE 17: LESSONS 1 OF 2
c = []
top_chrome(c, "FT SYNERGIST'S 5 CONTINUITY RULES FOR SMES (1 OF 2)", "THE BOARDROOM PLAYBOOK")
grey_card_left_red(c, 42, 155, 365, 215, "Rule 1: Build an Out-of-Band Lifeboat", [
    "Never let Microsoft, Google, or a single bank acquirer hold",
    "a monopoly over your daily cash flow.",
    "",
    "[B]What to Put in Place This Month:",
    "- A secondary communication channel independent of your",
    "  primary cloud login.",
    "- Offline quotation, PO, and delivery-order templates.",
    "- A second bank/PayNow terminal acquirer at checkout."
])
grey_card_left_red(c, 435, 155, 365, 215, "Rule 2: Use Supply Chain as a Shield", [
    "Marketing wins your first customer; supply-chain",
    "resilience keeps your thousandth.",
    "",
    "[B]What to Put in Place This Quarter:",
    "- Apply the 70/30 Dual-Origin Rule for critical inputs.",
    "- Use our PCBC Model (Product, Channel, Brand, Culture)",
    "  to localise ASEAN production or licensing partners",
    "  and bypass tariff walls."
])
hard_truth_box(c, 42, 52, 758, 82,
    "\"Continuity is not about predicting whether the next shock is a cyber outage, a chiller failure,",
    "or a chicken ban. It is about making sure no single failure can stop your cash register.\"",
    tag="THE HARD TRUTH  |  FT SYNERGIST")
bottom_chrome(c, 17)
slides.append("\n".join(c))

# SLIDE 18: LESSONS 2 OF 2
c = []
top_chrome(c, "FT SYNERGIST'S 5 CONTINUITY RULES FOR SMES (2 OF 2)", "THE BOARDROOM PLAYBOOK")
grey_card_left_red(c, 42, 205, 365, 165, "Rule 3: Script the \"Morning After\" Triage", [
    "As the Outlook outage proved, the real chaos hits the hour",
    "systems come back online. Pre-assign a 12-hour triage protocol:",
    "Key Accounts & live dispatches first, statutory filings second,",
    "internal admin last."
])
grey_card_left_red(c, 435, 205, 365, 165, "Rule 4: Weaponise Your ERM in Sales Pitches", [
    "Don't hide your ERM Manual in HR. Hand your Control Self-",
    "Assessment and BCP summary to your BD team so they can",
    "prove to MNC and government buyers that you are a low-risk,",
    "tier-one vendor (just like TNT Surveillance did for S$55M)."
])
grey_card_left_red(c, 435, 52, 365, 138, "Rule 5: Ring-Fence Your IP Before You Diversify", [
    "Before you onboard a backup factory in Vietnam or Malaysia,",
    "lock down your trademarks, recipes, and bespoke contracts",
    "under IPOS GoBusiness IP Grow & EDGE Market Entry Setup",
    "so your backup supplier never becomes your knockoff competitor."
])
c.append("0.09 0.09 0.12 rg 42 52 365 138 re f")
c.append(f"{RED} rg 42 52 365 4 re f")
c.append(f"BT /F2 10 Tf {GOLD} rg 58 164 Td (IPOS GOBUSINESS IP GROW LISTED ADVISOR) Tj ET")
c.append("BT /F1 8.8 Tf 1 1 1 rg 58 142 Td (FT Synergist Pte Ltd is officially listed across 4 directories:) Tj ET")
c.append("BT /F2 8.8 Tf 0.92 0.92 0.95 rg 58 122 Td (1. IP Strategy Consulting (Strategy & Management)) Tj ET")
c.append("BT /F2 8.8 Tf 0.92 0.92 0.95 rg 58 106 Td (2. IP Brokerage and Licensing (Commercialisation)) Tj ET")
c.append("BT /F2 8.8 Tf 0.92 0.92 0.95 rg 58 90 Td (3. Innovation Consultancy (Strategy & Management)) Tj ET")
c.append("BT /F2 8.8 Tf 0.92 0.92 0.95 rg 58 74 Td (4. Branding Strategy (Strategy & Management)) Tj ET")
bottom_chrome(c, 18)
slides.append("\n".join(c))

# SLIDE 19: 12-MONTH HORIZON
c = []
top_chrome(c, "YOUR 12-MONTH ROADMAP: FROM FRAGILE TO TENDER-READY", "EXECUTION TIMELINE")
c.append(f"{RED} RG 1.8 w 42 265 m 800 265 l S")
c.append(f"BT /F2 15 Tf {RED} rg 68 282 Td (Months 1-2: Expose) Tj ET")
c.append(f"BT /F1 9.8 Tf {DARK} rg 62 238 Td (Submit BGP Grant Application.) Tj ET")
c.append(f"BT /F1 9.8 Tf {DARK} rg 62 220 Td (4-Vector Single-Point Audit.) Tj ET")
c.append(f"BT /F1 9.8 Tf {DARK} rg 62 202 Td (Build Enterprise Risk Register.) Tj ET")

c.append(f"BT /F2 15 Tf {RED} rg 318 282 Td (Months 3-6: Engineer) Tj ET")
c.append(f"BT /F1 9.8 Tf {DARK} rg 312 238 Td (Draft ERM Manuals & Templates.) Tj ET")
c.append(f"BT /F1 9.8 Tf {DARK} rg 312 220 Td (Wire Out-of-Band & Payment Rails.) Tj ET")
c.append(f"BT /F1 9.8 Tf {DARK} rg 312 202 Td (Run Control Self-Assessment Drill.) Tj ET")

c.append(f"BT /F2 15 Tf {RED} rg 570 282 Td (Months 7-12: Monetise) Tj ET")
c.append(f"BT /F1 9.8 Tf {DARK} rg 565 238 Td (Qualify Dual-Origin Suppliers.) Tj ET")
c.append(f"BT /F1 9.8 Tf {DARK} rg 565 220 Td (Deploy ERM Pack in B2B Tenders.) Tj ET")
c.append(f"BT /F1 9.8 Tf {DARK} rg 565 202 Td (Audit & Claim Up to 50% Grant.) Tj ET")

c.append(f"BT /F2 12 Tf {RED} rg 42 132 Td (DID YOU KNOW?) Tj ET")
c.append(f"BT /F1 9.5 Tf {DARK} rg 42 112 Td (Eligible Singapore SMEs can obtain up to 50% Enterprise Singapore EDGE Grant support under Enterprise Risk Management) Tj ET")
c.append(f"BT /F1 9.5 Tf 0.2 0.2 0.23 rg 42 96 Td (and Internal Controls (or Business Strategic Planning) to defray the consulting costs of building this exact roadmap.) Tj ET")
c.append(f"BT /F2 9.5 Tf {DARK} rg 42 74 Td (Contact FT Synergist (fredtan@ftsynergist.com) to check your eligibility before starting work.) Tj ET")
bottom_chrome(c, 19)
slides.append("\n".join(c))

# SLIDE 20: CLOSING CTA SLIDE
c = []
c.append(f"1 1 1 rg 0 0 {W} {H} re f")
c.append(f"{RED} rg 42 468 72 6 re f")
c.append(f"BT /F2 12 Tf {RED} rg 42 440 Td (FT SYNERGIST) Tj ET")
c.append(f"BT /F2 24.5 Tf {RED} rg 52 342 Td (Is your business one cloud outage, one chiller failure,) Tj ET")
c.append(f"BT /F2 24.5 Tf {RED} rg 88 306 Td (or one midnight export ban away from a crisis?) Tj ET")
c.append(f"BT /F1 13.5 Tf 0.22 0.22 0.25 rg 82 252 Td (Claim your 60-Minute Business Sprint with us to build your ERM & Continuity shield!) Tj ET")
c.append("0.82 0.82 0.84 RG 0.8 w 52 205 m 790 205 l S")
c.append(f"BT /F2 12 Tf {RED} rg 325 172 Td (Frederick Tan | FT Synergist) Tj ET")
c.append(f"BT /F1 10 Tf {MUTED} rg 235 152 Td (Principal Management Consultant (TUV SUD License SCMC-1810-P0236 | SS 680:2021)) Tj ET")
c.append(f"BT /F1 11 Tf {MUTED} rg 320 132 Td (www.ftsynergist.com | fredtan@ftsynergist.com) Tj ET")

c.append(f"BT /F2 12 Tf {RED} rg 48 95 Td (IMPORTANT!) Tj ET")
c.append(f"BT /F1 9.5 Tf {DARK} rg 48 75 Td (Check if your company qualifies for up to 50%-70% EDGE Grant funding support for a similar roadmap.) Tj ET")
c.append(f"BT /F2 9.5 Tf {DARK} rg 48 56 Td (Contact FT Synergist to check your eligibility.) Tj ET")
bottom_chrome(c, 20)
slides.append("\n".join(c))

objs = []
def add_obj(content):
    objs.append(content)
    return len(objs)

font1_id = add_obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
font2_id = add_obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")

page_ids = []
for s in slides:
    stream_bytes = s.encode("cp1252", "replace")
    c_id = add_obj(f"<< /Length {len(stream_bytes)} >>\nstream\n{s}\nendstream")
    p_id = add_obj(f"<< /Type /Page /Parent PAGES_ID 0 R /MediaBox [0 0 {W} {H}] /Resources << /Font << /F1 {font1_id} 0 R /F2 {font2_id} 0 R >> >> /Contents {c_id} 0 R >>")
    page_ids.append(p_id)

kids_str = " ".join(f"{pid} 0 R" for pid in page_ids)
pages_id = add_obj(f"<< /Type /Pages /Kids [{kids_str}] /Count {len(page_ids)} >>")
catalog_id = add_obj(f"<< /Type /Catalog /Pages {pages_id} 0 R >>")

objs = [o.replace("PAGES_ID", str(pages_id)) for o in objs]

out = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
offsets = []
for idx, o in enumerate(objs, 1):
    offsets.append(len(out))
    out.extend(f"{idx} 0 obj\n{o}\nendobj\n".encode("cp1252"))

xref_pos = len(out)
out.extend(f"xref\n0 {len(objs)+1}\n0000000000 65535 f \n".encode("cp1252"))
for off in offsets:
    out.extend(f"{off:010d} 00000 n \n".encode("cp1252"))
out.extend(f"trailer\n<< /Size {len(objs)+1} /Root {catalog_id} 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode("cp1252"))

for p in ("public/ft-synergist-sme-bcp-erm-resilience-roadmap-2026.pdf", "ft-synergist-sme-bcp-erm-resilience-roadmap-2026.pdf"):
    with open(p, "wb") as f:
        f.write(out)

reader = pypdf.PdfReader("ft-synergist-sme-bcp-erm-resilience-roadmap-2026.pdf")
print("Updated PDF pages:", len(reader.pages), "| Slide 4 snippet:", reader.pages[3].extract_text()[:180])
