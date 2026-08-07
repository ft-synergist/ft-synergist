'use client';
import { useState } from 'react';

export default function SprintConversionSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: 'business-strategy'
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // Mapped URLs from your official Google Calendar embeds
    const calendarUrls: Record<string, string> = {
        "business-strategy": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ10AGX_rEknl0J6WvWhScBFx2JXg6UZ0IKZIgHP7-sHFa0gy2WM_1KUR5eVStUACnbWx356zhbB?gv=true",
        "strategic-brand": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1KtH1PGLFwfzWLr0MYr_Q9O4FLI78uRKX8FpNv0Z7A-NHMgYz2aPOT841cBzNPM8CquHvgBeAV?gv=true",
        "innovation-productivity": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3qr3SmjWpxiA6xfoBwO1uTYv4_dX4UkWMSWHn-yY2Z5X-EsSVJiiNeFfvowWLuxBrK0kLJYrTi?gv=true",
        "market-readiness": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2bP4LZ2IUL4kFaw3NW0IYE78GyJIplsadYgcYz4hTWFTVirByvmt9n9rH47vM0W39IbCZqyZJw?gv=true",
        "franchise-licensing": "https://calendar.google.com/calendar/appointments/schedules/AcZssZ06H3HVfxJ_qIDCDbf-kOxlt7ufKnq0lLsBwSDvnJ_sIkgaNV5_0cjxSDnw4p7iPWtsvR2kHfnw?gv=true"
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Mark form as submitted
        setIsFormSubmitted(true);

        // 2. Direct Instant Execution: Open target calendar URL immediately in new tab
        const targetUrl = calendarUrls[formData.service];
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* HEADLINE & SUB-HEAD */}
                <div className="text-center space-y-4">
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        Scale Asian Market Share Through Defensible IP Moats, AI Systems, and Sustainable Innovation
                    </h1>
                    <p className="text-xl sm:text-2xl text-amber-400 font-medium max-w-3xl mx-auto">
                        Book Your 60-Minute Executive Sprint with a TÜV SÜD Accredited SCMC Consultant.
                    </p>
                </div>

                {/* PROOF GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-300">
                    <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-2">
                        <p className="text-sm italic">"We partnered with FT Synergist to franchise our banmian business and within two years, our outlets grew from 4 to over 30."</p>
                        <p className="text-xs font-bold text-amber-400">— Brandon Toh, Branwood Holdings</p>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-2">
                        <p className="text-sm italic">"FT Synergist guided us in charting a 5-year growth strategy for my agrochemical business and overseas expansion and monetization of our IP."</p>
                        <p className="text-xs font-bold text-amber-400">— Paul Chen, Sundat (S) Pte Ltd</p>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-2">
                        <p className="text-sm italic">"FT Synergist helped us spin off three hybrid models under our Saigon Legend Express brand and positioned our brand for sustainable, multi-market growth."</p>
                        <p className="text-xs font-bold text-amber-400">— Thina Nguyen, Mei Le Pte Ltd</p>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-2">
                        <p className="text-sm italic">"With FT Synergist’s help, we developed a clear vision and a bold strategic plan to scale our business to $3 million in revenue over the next five years."</p>
                        <p className="text-xs font-bold text-amber-400">— Rosemary Kwa, Petale Tea</p>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl space-y-2 md:col-span-2 lg:col-span-2">
                        <p className="text-sm italic">"If you’re a founder who wants to scale with purpose, structure, and confidence, Frederick is the kind of consultant you want in your corner. We’re grateful for the journey and proud of what we’ve built together."</p>
                        <p className="text-xs font-bold text-amber-400">— Hidayah, Nanay’s Kitchen</p>
                    </div>
                </div>

                {/* CONVERSION FORM & EMBEDDED FALLBACK */}
                <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto border border-amber-500/20">
                    {!isFormSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <h3 className="text-xl font-bold text-slate-900 border-b pb-3">
                                Select Your Strategic Sprint
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Full Name *</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.name}
                                        placeholder="Frederick Tan"
                                        className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Corporate Email *</label>
                                    <input
                                        required
                                        type="email"
                                        value={formData.email}
                                        placeholder="john@company.com"
                                        className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Company Name *</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.company}
                                    placeholder="Your Company Pte Ltd"
                                    className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Select Sprint Focus *</label>
                                <select
                                    required
                                    value={formData.service}
                                    className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-amber-500 outline-none bg-white"
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="business-strategy">Business Strategy Sprint</option>
                                    <option value="strategic-brand">Brand Strategy Sprint</option>
                                    <option value="innovation-productivity">Innovation & Productivity Sprint</option>
                                    <option value="market-readiness">Market Readiness Assistance (MRA) Sprint</option>
                                    <option value="franchise-licensing">Franchise & IP Strategy Sprint</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 rounded-lg text-base transition-colors shadow-lg cursor-pointer"
                            >
                                Submit Inquiry & Launch Calendar →
                            </button>
                        </form>
                    ) : (
                        <div className="text-center space-y-6">
                            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                                ✓
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Inquiry Received for {formData.company}
                            </h3>
                            <p className="text-sm text-slate-600">
                                A calendar window has opened in a new tab. You can also pick your 60-minute time slot directly below:
                            </p>

                            {/* Direct Reliable Inline Calendar Embed */}
                            <div className="w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner min-h-[600px]">
                                <iframe
                                    src={calendarUrls[formData.service]}
                                    style={{ border: 0 }}
                                    width="100%"
                                    height="600"
                                    frameBorder="0"
                                />
                            </div>

                            <a
                                href={calendarUrls[formData.service]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg text-sm transition-all"
                            >
                                Re-open Calendar in New Window
                            </a>
                        </div>
                    )}
                </div>

                {/* TRUST FOOTER */}
                <div className="text-center text-xs text-slate-400 space-y-1">
                    <p>FT Synergist Pte Ltd | 7 Temasek Boulevard, #12-07 Suntec Tower One, Singapore 038987</p>
                    <p>TÜV SÜD Accredited Management Consultancy | Listed on IPOS IP Grow Directory</p>
                </div>

            </div>
        </section>
    );
}