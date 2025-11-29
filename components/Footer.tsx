import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background py-12">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Column 1: Logo, Tagline, Address */}
                    <div>
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/ft_synergist_logo_wo_background.png"
                                alt="FT Synergist Logo"
                                width={150}
                                height={50}
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Inspiring a Better World: Accelerating 100 Entrepreneurs to Impact 100 Million Lives in Asia.
                        </p>
                        <div className="mt-4 text-gray-400 text-sm">
                            <p>6 Eu Tong Sen St, #10-20 The Central, Singapore 059817</p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links (formerly Services and Company) */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-[#8F801B] transition-colors">About Us</Link></li>
                            <li><Link href="/#services" className="text-gray-400 hover:text-[#8F801B] transition-colors">Services</Link></li>
                            <li><Link href="/insights" className="text-gray-400 hover:text-[#8F801B] transition-colors">Insights</Link></li>
                            <li><Link href="/events" className="text-gray-400 hover:text-[#8F801B] transition-colors">Events</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-[#8F801B] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>fredtan@ftsynergist.com</span>
                            </li>
                        </ul>
                        <div className="mt-4 flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} FT Synergist Pte Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
