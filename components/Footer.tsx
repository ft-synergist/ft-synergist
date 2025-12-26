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
                            <li><Link href="/partnership" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Partnership Opportunity</Link></li>
                            <li><Link href="/contact" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Contact</Link></li>
                            <li><Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/#services" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Our Expertise</Link></li>
                            <li><Link href="/edg-grant" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Enterprise Development Grant</Link></li>
                            <li><Link href="/insights" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Insights</Link></li>
                            <li><Link href="/events" className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors">Events</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">Connect</h3>
                        <div className="text-gray-400 text-sm mb-4 space-y-1">
                            <p>6 Eu Tong Sen St,</p>
                            <p>#10-20 The Central,</p>
                            <p>Singapore 059817</p>
                        </div>
                        <Link
                            href="https://www.linkedin.com/in/tanfrederick/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 hover:text-[#8F801B] transition-colors flex items-center gap-2"
                        >
                            <span>Connect on LinkedIn</span>
                            <Linkedin className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} FT Synergist Pte Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
