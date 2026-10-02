"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Script from 'next/script';
import {
    ArrowRight,
    ExternalLink,
    ShieldCheck,
    TrendingUp,
    Globe,
    X,
    Calendar,
    Plus,
    Minus,
    Award,
    CheckCircle2,
    Briefcase
} from 'lucide-react';

// Dynamic imports with SSR disabled to prevent React Error 482 hydration crashes
const CitationFootnotes = dynamic(() => import('@/app/components/CitationFootnotes'), { ssr: false });
const GeoSemanticAnchors = dynamic(() => import('@/app/components/GeoSemanticAnchors'), { ssr: false });
const QuantitativeSuccessTable = dynamic(() => import('@/app/components/QuantitativeSuccessTable'), { ssr: false });

const faqItems = [
    {
        q: "What are the core prerequisites to join the FT Synergist Global Partner Network?",
        a: "We partner with established boutique consulting practices, corporate advisory firms, and high-integrity enterprise specialists across Singapore and ASEAN key markets. Prospective partners undergo accreditation to ensure strict alignment with our governance frameworks (G-Score, LACF Index) and demonstrate a track record in managing client transformation projects."
    },
    {
        q: "How does the Licensed DVF Arbitrage model reduce operational costs for client franchise development?",
        a: "By licensing our proprietary 'Beyond Borders FMS' (Franchise Management System) integrated with automated AI standardization, partners deliver up to a verified 50% reduction in time and operational cost for franchisor development. This transforms manual, labor-intensive SOP authoring into scalable digital assets."
    },
    {
        q: "What institutional compliance frameworks (G-Score & LACF) are licensed to partners?",
        a: "Partners gain licensed access to our proprietary G-Score (Governance Score) and LACF (Longevity-Adjusted Cash Flow) Index. These rigorous diagnostic instruments evaluate client assets against institutional private equity and family office due diligence benchmarks, anchoring transactions to Singapore's high-trust regulatory environment."
    },
    {
        q: "How does cross-border deal flow syndication work across Singapore, Indonesia, and Vietnam?",
        a: "Partners act as the regional conduits for our cross-border expansion platform. Local enterprises with validated single-unit economics are structured into investable, multi-market franchise and licensing assets, tapping into capital syndication networks and master licensees across Southeast Asia."
    },
    {
        q: "How do we schedule a strategic partnership exploration session and begin accreditation?",
        a: "You can book a direct 60-minute Partnership Exploration Call using our contextualized Google Calendar booking tool on this page. In this session, Principal Management Consultant Frederick Tan will walk through the licensing curriculum, accreditation requirements, and regional deal-flow mechanics."
    }
];

export default function PartnershipPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState('general-partnership');
    const [showStickyBar, setShowStickyBar] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [modalViewMode, setModalViewMode] = useState<'picker' | 'embedded'>('picker');

    // Contextualized Google Calendar Booking URLs
    const primaryCalendarUrl = "https://calendar.app.google/TrSK256eEZBaWNtY6";
    const embedCalendarUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2vdYPjtuHM7cLBK4c55W60T9EHQ3iBApXSUxpjUMng5VsOHxxINrCn0T4P-chtxZOsH8_leCCP?gv=true";

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            if (window.scrollY > 600) {
                setShowStickyBar(true);
            } else {
                setShowStickyBar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const trackLead = (label: string = "partnership_booking_click") => {
        if (typeof window !== "undefined" && (window as any).gtag) {
            (window as any).gtag("event", "generate_lead", {
                event_category: "engagement",
                event_label: label,
                value: 1
            });
        }
    };

    const handleOpenBookingModal = (trackName?: string) => {
        if (trackName) {
            setSelectedTrack(trackName);
        }
        setModalViewMode('picker');
        setIsModalOpen(true);
        trackLead("partnership_modal_open");
    };

    const handleLaunchCalendar = (e: React.FormEvent) => {
        e.preventDefault();
        trackLead(`partnership_calendar_launch_${selectedTrack}`);
        if (typeof window !== "undefined") {
            setTimeout(() => {
                window.open(primaryCalendarUrl, '_blank', 'noopener,noreferrer');
            }, 100);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-black text-white antialiased font-sans w-full overflow-x-hidden relative">
            {/* GEO / AI SCHEMA MARKUP FOR FAQPAGE */}
            <Script id="partnership-faq-schema" type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqItems.map(item => ({
                        "@type": "Question",
                        "name": item.q,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": item.a
                        }
                    }))
                })}
            </Script>

            {/* HERO BANNER SECTION */}
            <header className="relative pt-36 pb-20 px-4 text-center max-w-5xl mx-auto space-y-8">
                {/* 1. EXACT MATCH H1 */}
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                    Partnership Opportunities <br className="hidden sm:inline" />
                    <span className="text-[#8F801B] bg-clip-text text-transparent bg-gradient-to-r from-[#8F801B] to-yellow-200">
                        Scale Your Consulting Practice
                    </span>
                </h1>

                {/* 2. SUBHEADER */}
                <p className="max-w-3xl mx-auto text-base sm:text-xl text-gray-300 leading-relaxed font-normal">
                    Partner with FT Synergist to transform your consulting practice into a technology-enabled alternative investment class. Access proprietary frameworks, institutional compliance tools, and high-value cross-border deal flow across Singapore and ASEAN.
                </p>

                {/* 3. VERIFIED EXPERT ADVISORY ALERT BOX */}
                <div className="p-6 md:p-8 bg-black/60 border border-[#8F801B]/50 rounded-xl max-w-3xl mx-auto text-left shadow-[0_0_30px_rgba(143,128,27,0.15)] backdrop-blur-md space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">Verified Institutional Advisory</h2>
                        <a
                            href="https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-[#8F801B] hover:text-white transition-colors font-semibold underline"
                        >
                            <span>Recognised IP Expert under IPOS&apos;s IP Grow programme</span>
                            <ExternalLink className="h-3 w-3" />
                        </a>
                    </div>
                    <p className="text-base md:text-lg leading-relaxed text-gray-200 font-medium">
                        The Global Partner Network is spearheaded by <strong>FT Synergist</strong>, led by Frederick Tan, <strong>Principal Management Consultant</strong>, a TÜV SÜD Certified Management Consultant (SCMC-1810-P0236) and a <a href="https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline hover:text-[#8F801B]">Recognised IP Expert under IPOS&apos;s IP Grow programme</a>. Drawing upon two decades of cross-border enterprise advisory across Singapore, Jakarta, Surabaya, and Ho Chi Minh City, we empower independent consulting practices with institutional methodologies.
                    </p>
                </div>

                {/* 4. HERO CTA BLOCK */}
                <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 pt-4">
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                        Ready to Scale Your Practice &amp; Access Cross-Border Equity?
                    </h2>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                        Schedule an executive partnership exploration call with our leadership team to evaluate<br className="hidden md:inline" /> partner accreditation, licensed FMS architectures, and regional capital syndication.
                    </p>
                    <div className="pt-2">
                        <button
                            onClick={() => handleOpenBookingModal('general-partnership')}
                            className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
                        >
                            Book Partnership Exploration Call
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN EDITORIAL HOUSING */}
            <main className="max-w-4xl mx-auto px-6 pb-24 space-y-20">

                {/* SECTION 1: PARTNERSHIP PILLARS */}
                <section className="space-y-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                        1. Your Competitive Edge: Access to Proprietary Disruption
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-base">
                        By joining our Global Partner Network, you gain immediate, exclusive access to the FT Synergist ecosystem, allowing you to bypass traditional consulting bottlenecks and offer your local clients unparalleled enterprise value:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pillar Card 1 */}
                        <div
                            onClick={() => handleOpenBookingModal('dvf-arbitrage')}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <ShieldCheck className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-heading font-bold text-white text-lg mb-2">Licensed DVF Arbitrage</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    You are empowered to promise a verified 50% reduction in time and operational cost for franchisor development. This is achieved by licensing our &quot;Beyond Borders FMS&quot;—a proprietary system that leverages AI integration to impose rapid standardization, instantly giving you a massive advantage over local manual consulting models.
                                </p>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Explore DVF Arbitrage Track <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>

                        {/* Pillar Card 2 */}
                        <div
                            onClick={() => handleOpenBookingModal('institutional-compliance')}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <Award className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-heading font-bold text-white text-lg mb-2">Institutional Compliance Gateway</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Anchor your local deals to Singapore&apos;s high-trust regulatory environment. You gain the exclusive authority to prepare assets using our rigorous G-Score (Governance Score) and LACF (Longevity-Adjusted Cash Flow) Index. This rigor ensures your clients meet verifiable due diligence standards required by institutional capital (Funds, Family Offices).
                                </p>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Explore Compliance Gateway <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>

                        {/* Pillar Card 3 */}
                        <div
                            onClick={() => handleOpenBookingModal('cross-border-dealflow')}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <Globe className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-heading font-bold text-white text-lg mb-2">Accelerated Capital Flow</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Transition your high-potential local franchisors from mere prospects to investable assets ready for cross-border liquidity. You become the critical regional conduit for the vision of Transforming Local Heroes to Regional Icons: One Franchise at a Time across Singapore, Indonesia, and Vietnam.
                                </p>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Explore Capital Flow Track <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>

                        {/* Pillar Card 4 */}
                        <div
                            onClick={() => handleOpenBookingModal('operational-kits')}
                            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:border-[#8F801B] hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between"
                        >
                            <div>
                                <TrendingUp className="h-8 w-8 text-[#8F801B] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-heading font-bold text-white text-lg mb-2">Operational Confidence</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Leverage our video-optimized Operational Kits, which guarantee measurable outcomes—including a 30% reduction in client training intervals—instantly raising the consistency and reliability of your clients&apos; expanding multi-unit enterprise networks.
                                </p>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#8F801B] group-hover:underline inline-flex items-center">
                                Explore Operational Kits <ArrowRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: TECHNOLOGY-ENABLED INVESTMENT CLASS */}
                <section className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
                    <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                        2. Transforming Advisory into a Scalable Asset Class
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                        FT Synergist is redefining market expansion. We have moved beyond manual consulting, positioning ourselves as the architects of a technology-enabled alternative investment class. Our system—the result of two decades of market mastery and successful multi-million dollar exits across ASEAN regions like Jakarta, Surabaya, and Ho Chi Minh City—is our north star for scalable equity.
                    </p>

                    {/* Statutory Rigor Callout Box */}
                    <div className="bg-slate-900/90 p-6 md:p-8 rounded-xl border border-[#8F801B]/40 shadow-xl space-y-6 mt-6">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-[10px] uppercase tracking-wider font-bold bg-[#8F801B]/20 text-[#8F801B] px-3 py-1 rounded border border-[#8F801B]/40">
                                Institutional Accreditation Standard
                            </span>
                            <span className="text-xs text-yellow-400/90 font-mono">
                                Singapore SS 680:2021 Compliant
                            </span>
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-white">
                            Singapore Regulatory Moat &amp; IPOS GoBusiness Directory Alignment
                        </h3>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Capability building frameworks must align with statutory rigor. FT Synergist is explicitly listed in the official government <a href="https://ipgrow.gobusiness.gov.sg/service-provider-directory/ft-synergist-pte-ltd#ia-ip-services" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline hover:text-[#8F801B] inline-flex items-center gap-1">IPOS GoBusiness Service Provider Directory <ExternalLink className="h-3 w-3" /></a> for Intellectual Property Strategy and Legal Commercialisation Compliance. Led by Principal Management Consultant Frederick Tan (TÜV SÜD SCMC License <strong>SCMC-1810-P0236</strong>), our methodologies ensure your clients withstand sovereign grant audits, cross-border M&amp;A due diligence, and capital allocations.
                        </p>

                        {/* Partner Advisory Feature */}
                        <div className="bg-black/70 p-5 rounded-lg border border-neutral-700 flex flex-col sm:flex-row items-center gap-5">
                            <div className="space-y-2 text-left w-full">
                                <span className="text-[11px] font-mono text-[#8F801B] uppercase font-bold tracking-wider">
                                    Regional Expansion Benchmark
                                </span>
                                <h4 className="text-white font-bold text-base hover:text-[#8F801B] transition-colors">
                                    <Link href="/insights/petale-tea-ip-growth-case-study">
                                        Asset-Light Cross-Border Playbook: Unbundling IP &amp; SOP Systems
                                    </Link>
                                </h4>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    Presented live on stage at Marina Bay Sands during IPOS IP Week. Learn how unbundling intangible assets, standardizing SOPs, and deploying predictive AI systems allowed local SMEs to secure multi-market ASEAN licensing and tier-one enterprise partnerships.
                                </p>
                                <div className="pt-1">
                                    <Link
                                        href="/insights/petale-tea-ip-growth-case-study"
                                        className="inline-flex items-center text-xs font-bold text-[#8F801B] hover:text-white uppercase tracking-wider transition-colors"
                                    >
                                        Explore Full Case Study <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: QUANTIFIABLE PERFORMANCE TABLE & FOMO BANNER */}
                <section className="space-y-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                        3. Quantifiable Track Record &amp; Client Outperformance
                    </h2>
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-2 shadow-sm text-white">
                        <QuantitativeSuccessTable />
                    </div>

                    {/* High-Converting Post-Table FOMO Banner */}
                    <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#8F801B]/20 border border-[#8F801B]/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                        <div className="space-y-2 text-center md:text-left">
                            <h3 className="font-heading text-xl font-extrabold text-white">
                                Ready to transform your practice into a high-yield institutional conduit?
                            </h3>
                            <p className="text-sm text-gray-300">
                                Assess partnership criteria and licensing eligibility with Principal Management Consultant Frederick Tan.
                            </p>
                        </div>
                        <button
                            onClick={() => handleOpenBookingModal('general-partnership')}
                            className="shrink-0 bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center"
                        >
                            Schedule Partnership Call
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                </section>

                {/* SECTION 4: CONTEXTUALIZED GOOGLE BOOKING FORM EMBED */}
                <section id="booking-section" className="bg-slate-900 border border-[#8F801B]/40 rounded-2xl p-6 sm:p-10 text-center space-y-6 shadow-2xl">
                    <div className="space-y-2 max-w-2xl mx-auto">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#8F801B]">
                            Direct Calendar Reservation
                        </span>
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                            FT Synergist X Partnership Exploration Call
                        </h2>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Select a convenient 60-minute time slot directly below to explore partnership models, licensing terms, and regional deal flow accreditation:
                        </p>
                    </div>

                    {/* Direct Embedded Google Booking Calendar */}
                    <div className="w-full rounded-xl overflow-hidden border border-[#8F801B]/30 shadow-inner bg-black/40 min-h-[640px]">
                        <iframe
                            src={embedCalendarUrl}
                            style={{ border: 0 }}
                            width="100%"
                            height="640"
                            frameBorder="0"
                            title="FT Synergist X Partnership Exploration Call"
                            loading="lazy"
                        />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-300">
                        <span>Prefer booking in a dedicated browser window?</span>
                        <a
                            href={primaryCalendarUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackLead("partnership_calendar_dedicated_click")}
                            className="inline-flex items-center gap-1.5 font-bold text-[#8F801B] hover:text-white underline transition-colors"
                        >
                            <span>Open Google Booking Form</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </section>

                {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
                <section className="space-y-8 pt-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center tracking-tight font-heading">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden transition-all duration-200 hover:border-[#8F801B]/50"
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                                >
                                    <span className="text-white font-semibold text-base md:text-lg pr-4 leading-snug">
                                        {item.q}
                                    </span>
                                    {openFaqIndex === index ? (
                                        <Minus className="h-5 w-5 flex-shrink-0 text-[#8F801B]" />
                                    ) : (
                                        <Plus className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                    )}
                                </button>

                                {openFaqIndex === index && (
                                    <div className="px-6 pb-6 text-sm md:text-base text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* BOTTOM CONVERSION BANNER */}
                <section className="bg-slate-900 border-t border-b border-[#8F801B]/30 py-16 px-6 rounded-2xl text-center space-y-6">
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                        Stop Operating in Silos. Scale Your Advisory Reach.
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg">
                        We seek partners who are prepared to enforce a new standard of financial and operational governance. Engage with FT Synergist to license proprietary methodology and access regional deal flow.
                    </p>
                    <button
                        onClick={() => handleOpenBookingModal('general-partnership')}
                        className="bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-xl hover:scale-105 cursor-pointer inline-flex items-center justify-center"
                    >
                        Book Partnership Exploration Call
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </section>
            </main>

            {/* STICKY BAR FOR MOBILE */}
            {mounted && showStickyBar && (
                <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-md border-t border-[#8F801B]/40 px-4 py-3 flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-[#8F801B]" />
                        <span className="text-xs font-bold text-white uppercase tracking-wide">Partnership Call</span>
                    </div>
                    <button
                        onClick={() => handleOpenBookingModal('general-partnership')}
                        className="bg-[#8F801B] text-white font-bold py-2 px-4 rounded text-xs transition-transform hover:scale-105 cursor-pointer flex items-center gap-1"
                    >
                        <span>Book Now</span>
                        <ArrowRight className="h-3 w-3" />
                    </button>
                </div>
            )}

            {/* MODAL WITH CONTEXTUALIZED GOOGLE CALENDAR EMBED / LAUNCHER */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative border border-[#8F801B]/30 max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-slate-900 p-2 rounded-full cursor-pointer z-10"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {modalViewMode === 'picker' ? (
                            <form onSubmit={handleLaunchCalendar} className="space-y-6">
                                <div>
                                    <h3 className="font-heading text-2xl font-bold text-slate-900">
                                        FT Synergist X Partnership Exploration Call
                                    </h3>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Select your partnership track to launch the Google Calendar booking tool.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">
                                        Partnership Track Focus *
                                    </label>
                                    <select
                                        required
                                        value={selectedTrack}
                                        className="w-full border border-slate-300 rounded-lg p-3.5 text-sm focus:ring-2 focus:ring-[#8F801B] outline-none bg-white text-slate-900 font-medium"
                                        onChange={(e) => setSelectedTrack(e.target.value)}
                                    >
                                        <option value="general-partnership">General Partnership &amp; Practice Transformation</option>
                                        <option value="dvf-arbitrage">Licensed DVF Arbitrage (Beyond Borders FMS)</option>
                                        <option value="institutional-compliance">Institutional Compliance Gateway (G-Score / LACF)</option>
                                        <option value="cross-border-dealflow">Accelerated Cross-Border Capital Flow &amp; Deal Syndication</option>
                                        <option value="operational-kits">Operational Confidence &amp; Video-Optimized SOP Kits</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#8F801B] hover:bg-[#7a6c16] text-white font-bold py-4 rounded-lg text-base transition-colors shadow-lg cursor-pointer flex items-center justify-center"
                                    >
                                        Launch Partnership Calendar
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setModalViewMode('embedded')}
                                        className="w-full py-3 text-xs text-slate-600 hover:text-slate-900 font-medium underline transition-colors cursor-pointer"
                                    >
                                        Or view calendar scheduling slots right here
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b pb-3">
                                    <h3 className="font-heading text-lg font-bold text-slate-900">
                                        Select Your 60-Minute Session
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={() => setModalViewMode('picker')}
                                        className="text-xs text-[#8F801B] font-semibold hover:underline"
                                    >
                                        ← Change Track
                                    </button>
                                </div>
                                <div className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner min-h-[500px]">
                                    <iframe
                                        src={embedCalendarUrl}
                                        style={{ border: 0 }}
                                        width="100%"
                                        height="500"
                                        frameBorder="0"
                                        title="Google Calendar Booking"
                                    />
                                </div>
                                <div className="text-center pt-2">
                                    <a
                                        href={primaryCalendarUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-[#8F801B] font-semibold underline hover:text-slate-900 inline-flex items-center gap-1"
                                    >
                                        <span>Open in new window</span>
                                        <ExternalLink className="h-3 w-3" />
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* FOOTER INFRASTRUCTURE */}
            <footer className="w-full border-t border-neutral-800 bg-neutral-900/50">
                <div className="max-w-4xl mx-auto px-6 py-10">
                    <CitationFootnotes />
                </div>
                <div className="w-full border-t border-neutral-800/40 py-6">
                    <GeoSemanticAnchors
                        primaryHeading="How does FT Synergist empower advisory partners across ASEAN?"
                        primaryDescription={
                            <>
                                Accredited under TÜV SÜD Singapore Certified Management Consultant standards (SCMC-1810-P0236) and listed on the IPOS GoBusiness directory, FT Synergist equips consulting practices with licensed DVF Arbitrage systems, G-Score governance frameworks, and cross-border master franchise syndication across Singapore, Indonesia, and Vietnam. Read our accredited{" "}
                                <Link href="/ip-consultant" className="text-white font-semibold underline hover:text-[#8F801B] transition-colors">
                                    IP Consultant Singapore
                                </Link>{" "}
                                and{" "}
                                <Link href="/franchise-consultant" className="text-white font-semibold underline hover:text-[#8F801B] transition-colors">
                                    Franchise Consultant Singapore
                                </Link>{" "}
                                frameworks.
                            </>
                        }
                    />
                </div>
            </footer>
        </div>
    );
}
