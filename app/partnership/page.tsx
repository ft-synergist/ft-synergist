import React from 'react';
import Link from 'next/link';

export default function PartnershipPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary/5 py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                        Partnership Opportunity
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl">
                        Be Part of Our Movement in Synergies Driving Sustainable Growth!
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                        <p>
                            FT Synergist is redefining market expansion. We have moved beyond manual consulting, positioning ourselves as the architects of a technology-enabled alternative investment class. Our system—the result of two decades of market mastery and successful multi-million dollar exit across ASEAN regions like Jakarta, Surabaya, and Ho Chi Minh—is our north star for scalable equity.
                        </p>
                        <p>
                            We invite established, high-integrity consulting firms and entrepreneurial experts in key international markets to partner with us, granting you the proprietary license necessary to transform your local practice.
                        </p>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Competitive Edge: Access to Proprietary Disruption</h2>
                            <p>
                                By joining our Global Partner Network, you gain immediate, exclusive access to the FT Synergist ecosystem, allowing you to bypass traditional bottlenecks and offer your local clients unparalleled value:
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 mt-8">
                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-3">Licensed DVF Arbitrage</h3>
                                <p className="text-base">
                                    You are empowered to promise a verified 50% reduction in time and operational cost for franchisor development. This is achieved by licensing our &quot;Beyond Borders FMS&quot;—a proprietary system that leverages AI integration to impose rapid standardization, instantly giving you a massive advantage over local manual consulting models.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-3">Institutional Compliance Gateway</h3>
                                <p className="text-base">
                                    Anchor your local deals to Singapore&apos;s high-trust regulatory environment. You gain the exclusive authority to prepare assets using our rigorous G-Score (Governance Score) and LACF (Longevity-Adjusted Cash Flow) Index. This rigor ensures your local clients meet the verifiable due diligence standards required to attract the institutional capital (Funds, Family Offices) actively seeking deals through our platform.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-3">Accelerated Capital Flow</h3>
                                <p className="text-base">
                                    Transition your high-potential local franchisors from mere prospects to investable assets ready for cross-border liquidity. You become the critical regional conduit for the vision of Transforming Local Hero to Regional Icons: One Franchise at a Time.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-3">Operational Confidence</h3>
                                <p className="text-base">
                                    Leverage our video-optimized Operational Kits, which guarantee measurable outcomes—including the 30% reduction in training time—instantly raising the consistency and reliability of your clients&apos; expanding networks.
                                </p>
                            </div>
                        </div>

                        <div className="bg-primary/5 p-8 rounded-lg mt-12 border-l-4 border-primary">
                            <p className="font-medium text-lg mb-4">
                                We seek partners who are prepared to enforce a new standard of financial and operational governance.
                            </p>
                            <p>
                                If your ambition is to lead your market through verifiable data and proprietary methodology, engage us to discuss the requirements for partnership accreditation.
                            </p>
                            <div className="mt-6">
                                <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors">
                                    Contact Us for Accreditation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
