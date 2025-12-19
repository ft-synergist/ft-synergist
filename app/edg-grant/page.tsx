import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Globe, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Enterprise Development Grant (EDG) Singapore | Up to 50% Funding",
    description: "Scale your business with the Enterprise Development Grant (EDG). Get up to 50% funding for Core Capabilities, Innovation, and Market Access projects. Expert consultancy by FT Synergist.",
    keywords: ["EDG Grant", "Enterprise Development Grant", "SME Grant Singapore", "Business Strategy Consultant", "Overseas Expansion Grant"],
    alternates: {
        canonical: "https://www.ftsynergist.com/edg-grant",
    },
};

export default function EdgGrantPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-background opacity-90 z-0" />
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                        Enterprise Development Grant (EDG)
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8 leading-relaxed">
                        Upgrade your business, innovate for the future, and venture overseas with up to <span className="text-secondary font-bold">50% funding support</span> from Enterprise Singapore.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-200"
                        >
                            Check Eligibility
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="#pillars"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-gray-600 rounded-full hover:bg-white/10 transition-all duration-200"
                        >
                            Explore Categories
                        </Link>
                    </div>
                </div>
            </section>

            {/* What is EDG Section */}
            <section className="py-16 bg-background">
                <div className="container px-4 mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-foreground">What is the EDG Grant?</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                The Enterprise Development Grant (EDG) helps Singapore companies grow and transform. It supports projects that help you upgrade your business, innovate, or venture overseas.
                            </p>
                            <p>
                                As announced at Budget 2024, the grant supports up to <strong>50% of qualified project costs</strong> for local SMEs. For sustainability-related projects, support may be up to 70% until March 2026.
                            </p>
                            <div className="flex items-center gap-2 mt-4 text-green-600 font-semibold">
                                <CheckCircle2 className="h-5 w-5" />
                                <span>Third-party Consultancy Fees</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-600 font-semibold">
                                <CheckCircle2 className="h-5 w-5" />
                                <span>Software & Equipment</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-600 font-semibold">
                                <CheckCircle2 className="h-5 w-5" />
                                <span>Internal Manpower Costs</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Eligibility Criteria</h3>
                        <ul className="space-y-4">
                            {[
                                "Registered and operating in Singapore",
                                "Running a viable and solvent business",
                                "Minimum 30% local shareholding",
                                "Group Annual Sales Turnover ≤ S$100m OR Group Employment Size ≤ 200 staff"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 bg-primary/10 p-1 rounded-full">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3 Pillars Section */}
            <section id="pillars" className="py-20 bg-secondary/5">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">Supportable Project Areas</h2>
                        <p className="text-muted-foreground">The EDG grant covers three main pillars of business transformation.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pillar 1 */}
                        <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300">
                            <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Core Capabilities</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Strengthen your business foundations to prepare for growth.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">• Strategic Brand & Marketing Development</li>
                                <li className="flex items-center gap-2">• Business Strategy Development</li>
                                <li className="flex items-center gap-2">• Human Capital Development</li>
                                <li className="flex items-center gap-2">• Service Excellence</li>
                                <li className="flex items-center gap-2">• Financial Management</li>
                            </ul>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300">
                            <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Innovation & Productivity</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Explore new areas of growth and improve efficiency.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">• Process Redesign & Automation</li>
                                <li className="flex items-center gap-2">• Product Development</li>
                                <li className="flex items-center gap-2">• Pilot Project & Commercialisation</li>
                            </ul>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-card p-8 rounded-xl border border-border hover:shadow-xl transition-all duration-300">
                            <div className="h-12 w-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Market Access</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Expand your footprint into overseas markets.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">• Overseas Marketing Presence (OMP)</li>
                                <li className="flex items-center gap-2">• Market Entry Strategy</li>
                                <li className="flex items-center gap-2">• Standards Adoption</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-background">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Why Apply with FT Synergist?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">Certified Consultants</h3>
                            <p className="text-sm text-muted-foreground">We work with PMC-certified management consultants, a requirement for EDG support.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">End-to-End Support</h3>
                            <p className="text-sm text-muted-foreground">From project scoping and proposal writing to final claims submission.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">High Approval Rate</h3>
                            <p className="text-sm text-muted-foreground">Proven track record of securing funding for SMEs across diverse industries.</p>
                        </div>
                        <div className="p-6">
                            <h3 className="font-bold text-lg mb-2">Strategic Focus</h3>
                            <p className="text-sm text-muted-foreground">We don&apos;t just get you a grant; we ensure the project drives real business ROI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-secondary/5 border-t border-border">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <HelpCircle className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-card p-6 rounded-lg border">
                            <h3 className="font-bold mb-2">How long does the EDG application process take?</h3>
                            <p className="text-sm text-muted-foreground">According to Enterprise Singapore, applications are typically processed within 8 to 12 weeks from the time of submission of complete information.</p>
                        </div>
                        <div className="bg-card p-6 rounded-lg border">
                            <h3 className="font-bold mb-2">Can I apply for EDG retrospectively?</h3>
                            <p className="text-sm text-muted-foreground">No. Projects must not have commenced before the application is approved. You significantly risk rejection if you start work, pay deposit, or sign agreements before the Letter of Offer.</p>
                        </div>
                        <div className="bg-card p-6 rounded-lg border">
                            <h3 className="font-bold mb-2">What is the difference between EDG and PSG?</h3>
                            <p className="text-sm text-muted-foreground">The Productivity Solutions Grant (PSG) supports the adoption of pre-scoped IT solutions and equipment. EDG supports customised projects that are tailored to your company&apos;s specific growth needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container px-4 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Scale Your Business?</h2>
                    <p className="max-w-xl mx-auto mb-8 text-primary-foreground/90">
                        Schedule a complimentary 30-minute discovery session to assess your project&apos;s eligibility and potential funding quantum.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-primary bg-white rounded-full hover:bg-gray-100 shadow-lg transition-transform hover:scale-105"
                    >
                        Book Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
