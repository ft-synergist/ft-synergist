import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-neutral-950 py-16 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 md:grid-cols-4">

                    {/* Column 1: Identity */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/ft_synergist_logo_wo_background.png"
                                alt="FT Synergist Logo"
                                width={150}
                                height={50}
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Inspiring a Better World: Accelerating 100 Entrepreneurs to Impact 100 Million Lives in Asia.
                        </p>
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">About Us</Link></li>
                            <li><Link href="/#services" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Our Expertise</Link></li>
                            <li><Link href="/edg-grant#success-stories" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Success Stories</Link></li>
                            <li><Link href="/sustainability" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Our Sustainability Impact</Link></li>
                            <li><Link href="/partnership" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Partnership Opportunity</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Resources &amp; Grants</h3>
                        <ul className="space-y-3">
                            <li><Link href="/edge-grant" className="text-sm font-semibold text-[#C5A017] hover:text-white transition-colors">EDGE Grant 2026 (New)</Link></li>
                            <li><Link href="/insights/edg-mra-psg-vs-edge-comparison" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">EDG vs MRA vs PSG vs EDGE</Link></li>
                            <li><Link href="/insights/what-happens-to-psg-after-september-2026" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">PSG Transition Guide</Link></li>
                            <li><Link href="/edg-grant" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Enterprise Development Grant (EDG)</Link></li>
                            <li><Link href="/insights" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Insights &amp; Whitepapers</Link></li>
                            <li><Link href="/events" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Events &amp; Panels</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Connect</h3>
                        <div className="text-gray-400 text-sm mb-4 space-y-1">
                          <p>7 Temasek Boulevard,</p>
                          <p>#12-07 Suntec Tower One,</p>
                          <p>Singapore 038987</p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Link
                                href="https://www.linkedin.com/company/ftsynergist"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors flex items-center gap-2"
                            >
                                <Linkedin className="h-4 w-4" />
                                <span>FT Synergist on LinkedIn</span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/tanfrederick/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors flex items-center gap-2"
                            >
                                <Linkedin className="h-4 w-4" />
                                <span>Connect with Principal Advisor</span>
                            </Link>
                            <Link href="/contact" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Ecosystem & Strategic Network */}
                <div className="mt-12 border-t border-white/10 pt-8 grid gap-6 md:grid-cols-2 text-xs text-gray-400">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <span className="font-semibold text-gray-300 uppercase tracking-wider text-[11px]">Franchise Portal:</span>
                        <a
                            href="https://www.franchise.sg/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#8F801B] transition-colors underline decoration-white/20 underline-offset-4"
                        >
                            Franchise.sg – Singapore Franchise &amp; Business Opportunity Directory
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                        <span className="font-semibold text-gray-300 uppercase tracking-wider text-[11px]">Global Expansion:</span>
                        <a
                            href="https://www.growingbeyondborders.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#8F801B] transition-colors underline decoration-white/20 underline-offset-4"
                        >
                            Growing Beyond Borders – Global Master Franchise Licensing
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} FT Synergist Pte Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
