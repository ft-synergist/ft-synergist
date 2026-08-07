import type { Metadata } from 'next';
import { MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact & Advisory Intake | FT Synergist Singapore',
    description: 'Schedule a strategic advisory consultation with TÜV SÜD certified management consultants. EnterpriseSG EDG & MRA grant alignment for Singapore SMEs.',
};

export default function ContactPage() {
    const testimonials = [
        {
            eyebrow: "IMPACT: ENTERPRISE CRISIS MANAGEMENT & SCALING",
            title: "Operational Continuity & Leadership",
            quote: "Frederick is a management consultant with a very authentic and positive personality that enabled him to very quickly build rapport and trust with my senior leadership team. Frederick far exceeded our expectations... and was quick and decisive in helping us to design and activate evolving business continuity plans.",
            author: "Joshua Tan",
            company: "TNT Surveillance Pte Ltd"
        },
        {
            eyebrow: "IMPACT: MASSIVE REGIONAL NETWORK GROWTH",
            title: "Franchise Architecture Deployment",
            quote: "We partnered with FT Synergist to franchise our banmian business and within two years, our outlets grew from 4 to over 30.",
            author: "Brandon Toh",
            company: "Branwood Holdings"
        },
        {
            eyebrow: "IMPACT: GLOBAL M&A STRATEGY",
            title: "Agrochemical Expansion & IP Monetization",
            quote: "FT Synergist guided us in charting a 5-year growth strategy for my agrochemical business and overseas expansion and monetization of our IP.",
            author: "Paul Chen",
            company: "Sundat (S) Pte Ltd"
        },
        {
            eyebrow: "IMPACT: MULTI-MARKET BRAND STRUCTURING",
            title: "Sustainable Hybrid Growth Models",
            quote: "FT Synergist helped us spin off three hybrid models under our Saigon Legend Express brand and positioned our brand for sustainable, multi-market growth.",
            author: "Thina Nguyen",
            company: "Mei Le Pte Ltd"
        },
        {
            eyebrow: "IMPACT: S$3M REVENUE SCALE UP",
            title: "Premiumization & Brand Positioning",
            quote: "With FT Synergist's help, we developed a clear vision and a bold strategic plan to scale our business to $3 million in revenue over the next five years.",
            author: "Rosemary Kwa",
            company: "Petale Tea"
        },
        {
            eyebrow: "IMPACT: FOUNDER CAPABILITY DEVELOPMENT",
            title: "Purpose-Driven Strategic Scaling",
            quote: "If you're a founder who wants to scale with purpose, structure, and confidence, Frederick is the kind of consultant you want in your corner. We're grateful for the journey and proud of what we've built together.",
            author: "Hidayah",
            company: "Nanay's Kitchen"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black font-sans pb-20">

            {/* 1. HERO HEADER (Exact match to EDG Hero typography & spacing) */}
            <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                        <span className="text-white block">Certified Advisory Sprint</span>
                        <span className="text-[#D4AF37] block mt-1">FT Synergist Singapore</span>
                    </h1>

                    {/* Frictionless Intake Form - Styled exactly like EDG "Verified Expert Answer" */}
                    <div className="w-full max-w-2xl bg-[#121212] border border-[#D4AF37]/40 rounded-xl p-6 md:p-8 text-left shadow-2xl relative mt-4">
                        <p className="text-[10px] sm:text-xs font-bold tracking-[0.15em] text-[#C5A059] uppercase mb-4">
                            DIRECT CALENDAR BOOKING
                        </p>
                        <p className="text-sm text-gray-300 leading-relaxed font-normal mb-6">
                            Bypass redundant data entry. Select your primary strategic focus below to launch our Google Calendar booking portal. Secure your 60-minute advisory sprint with a TÜV SÜD-certified SCMC consultant.
                        </p>

                        <form className="space-y-4">
                            <div>
                                <select
                                    required
                                    className="w-full bg-black/80 border border-white/20 rounded-lg px-4 py-3.5 text-sm text-gray-200 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
                                >
                                    <option value="">Select a Strategic Sprint Focus...</option>
                                    <option value="business-strategy">Business Strategy Sprint (EDG Aligned)</option>
                                    <option value="brand-marketing">Strategic Brand &amp; Marketing Development</option>
                                    <option value="ip-strategy">IP Strategy &amp; Commercial Monetisation</option>
                                    <option value="mra-expansion">Market Readiness Assistance (MRA Overseas)</option>
                                    <option value="franchise-licensing">Franchise Architecture &amp; Master Licensing</option>
                                    <option value="ai-productivity">AI Process Redesign &amp; Productivity</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#D4AF37] hover:bg-[#C5A059] text-black font-bold text-sm py-3.5 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
                            >
                                Launch Booking Calendar <ArrowRight className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 2. STATUTORY COMPLIANCE & OFFICE BAR */}
            <section className="py-8 px-4 max-w-5xl mx-auto">
                <div className="bg-[#121212] rounded-xl p-6 md:p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex-1">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-4">
                            HEADQUARTERS
                        </p>
                        <div className="flex items-start gap-4">
                            <MapPin className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold text-white text-sm">Suntec City Tower One</h3>
                                <p className="text-gray-400 text-xs leading-relaxed mt-1">
                                    7 Temasek Blvd, #12-07<br />
                                    Singapore 038987
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 md:border-l md:border-white/10 md:pl-8">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-4">
                            STATUTORY ASSURANCE
                        </p>
                        <ul className="space-y-3 text-xs text-gray-300">
                            <li className="flex items-center gap-3">
                                <ShieldCheck className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                                <span>TÜV SÜD SCMC-1810-P0236</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ShieldCheck className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                                <span>EnterpriseSG EDG &amp; MRA Aligned</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. TESTIMONIALS (Exact styling match to EDG "Success Stories" cards) */}
            <section className="py-16 px-4 max-w-6xl mx-auto border-t border-white/10 mt-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                        Success Stories
                    </h2>
                    <p className="text-gray-400 text-sm">Proven Impact across Enterprise Leaders.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-[#121212] rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-transparent hover:border-white/5 transition-colors"
                        >
                            <div>
                                <p className="text-[10px] sm:text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-4 leading-relaxed">
                                    {t.eyebrow}
                                </p>
                                <h3 className="text-lg font-bold text-white mb-4 leading-snug">
                                    {t.title}
                                </h3>
                                <p className="text-sm text-gray-300 italic leading-relaxed mb-8 border-l-2 border-[#D4AF37] pl-4">
                                    "{t.quote}"
                                </p>
                            </div>
                            <div className="pt-6 border-t border-white/10">
                                <p className="text-xs font-medium text-gray-400">— {t.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}