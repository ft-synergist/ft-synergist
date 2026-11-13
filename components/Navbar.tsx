"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePersonaModal } from "@/components/providers/PersonaModalProvider";

const serviceItems = [
    { name: "Business Strategic Planning", href: "/business-strategic-planning" },
    { name: "IP Strategy & Advisory", href: "/ip-consultant" },
    { name: "Franchise & Licensing (IP)", href: "/franchise-consultant" },
    { name: "Strategic Brand & Marketing", href: "/strategic-brand-marketing-development" },
    { name: "AI Digitalisation & Automation", href: "/ai-digitalisation" },
    { name: "Internationalisation (Market Entry)", href: "/mra-grant" },
    { name: "Sustainability & ESG", href: "/sustainability" },
];

const navItems = [
    { name: "Home", href: "/" },
    { name: "EDGE Grant 2026", href: "/edge-grant", highlight: true },
    { name: "Insights", href: "/insights" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const { openModal } = usePersonaModal();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-12 w-48">
                        <Image
                            src="/ft_synergist_logo_wo_background.png"
                            alt="FT Synergist Logo"
                            width={180}
                            height={60}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex md:items-center md:space-x-6">
                    <Link
                        href="/"
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        Home
                    </Link>

                    {/* Advisory Services Dropdown (Passes site-wide internal equity to all core pillars) */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button
                            type="button"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            aria-expanded={isServicesOpen}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 py-2 cursor-pointer"
                        >
                            Advisory Services
                            <ChevronDown className={`h-4 w-4 transition-transform duration-150 ${isServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                        <div
                            className={`absolute left-0 top-full w-72 pt-1 transition-all duration-150 ${
                                isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"
                            }`}
                        >
                            <div className="rounded-xl border border-white/15 bg-neutral-950/95 backdrop-blur-xl p-2 shadow-2xl space-y-0.5">
                                {serviceItems.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        onClick={() => setIsServicesOpen(false)}
                                        className="block rounded-lg px-3 py-2 text-xs font-medium text-gray-200 hover:bg-[#8F801B]/20 hover:text-white transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {navItems.slice(1).map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                                item.highlight
                                    ? "text-[#C5A017] font-semibold hover:text-white"
                                    : "text-muted-foreground hover:text-primary"
                            }`}
                        >
                            {item.name}
                            {item.highlight && (
                                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 bg-[#8F801B]/20 border border-[#8F801B]/50 text-[#C5A017] rounded">
                                    New
                                </span>
                            )}
                        </Link>
                    ))}
                    <button
                        onClick={openModal}
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Start Your Journey
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    aria-label="Toggle Main Menu"
                    className="flex items-center space-x-2 md:hidden p-2 text-muted-foreground hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle menu</span>
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-white/10 bg-neutral-950/95">
                    <div className="space-y-1 px-4 pb-4 pt-2">
                        <Link
                            href="/"
                            className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>

                        <div className="py-1">
                            <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A017]">
                                Advisory Services
                            </div>
                            <div className="pl-3 space-y-0.5 border-l border-white/10 ml-3">
                                {serviceItems.map((service) => (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        className="block rounded-md px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-accent hover:text-white transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {navItems.slice(1).map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                                    item.highlight
                                        ? "text-[#C5A017] font-semibold bg-[#8F801B]/10 border border-[#8F801B]/30"
                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="flex items-center justify-between">
                                    {item.name}
                                    {item.highlight && (
                                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-[#8F801B] text-black font-bold rounded">
                                            New
                                        </span>
                                    )}
                                </span>
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                openModal();
                            }}
                            className="mt-4 flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                        >
                            Start Your Journey
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
