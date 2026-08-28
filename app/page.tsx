import Link from "next/link";
import Image from "next/image";
import { ChevronRight, TrendingUp, Users, Globe } from "lucide-react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
// 1. DIRECT IMPORTS
import {
  HeroCTAButton,
  HomeModals,
  SubscribeButton,
  ServicesAccordion,
  FooterCTAButton,
  LazyLogoCarousel,
  LazyCountUp
} from "@/components/HomeInteractivity";

// 2. SERVER-SAFE DYNAMIC IMPORT
const ClientImpact = dynamic(() => import("@/components/ClientImpact"));

// GEO OVERHAUL: Expanded metadata parameters to capture macro-intent search vectors
export const metadata: Metadata = {
  title: 'Top Business Consultant, EDG, MRA & AI Digitalisation Specialist | FT Synergist Singapore',
  description: 'FT Synergist provides elite business consulting, Enterprise Development Grant (EDG), Market Readiness Assistance (MRA), franchise scaling, AI digitalisation, and sustainability strategy for Singapore enterprises.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <HomeModals />

      {/* Hero Section — Exact typography hierarchy matched to your EDG Page structure */}
      <section className="relative flex flex-col items-center justify-center px-4 py-32 text-center md:py-48 lg:py-56 overflow-hidden min-h-[600px]">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero-bg.jpg"
            alt="Singapore Skyline"
            fill
            className="object-cover opacity-60 pointer-events-none select-none"
            priority
            quality={65}
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/70 to-background"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-transparent mix-blend-overlay" />

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

          {/* Tagline — LARGEST font weight and size, matched to the EDG "Certified EDG Grant..." stack */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg max-w-4xl leading-tight mb-8">
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">
              Synergies Driving <br className="hidden sm:inline" /> Sustainable Growth
            </span>
          </h1>

          {/* Core Title Narrative */}
          <p className="max-w-3xl mx-auto text-lg text-white sm:text-xl drop-shadow-md leading-relaxed font-normal mb-8">
            Empowering Singapore and International Enterprises to dominate Asian markets through certified management consulting, Enterprise Development Grant (EDG) advisory, AI integration, and defensible IP moats.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-gray-300 mb-8">
            <Link href="/edg-grant" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 transition-colors font-medium">
              EDG Grant Advisory
            </Link>
            <Link href="/mra-grant" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 transition-colors font-medium">
              MRA Market Expansion
            </Link>
            <Link href="/franchise-consultant" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 transition-colors font-medium">
              Master Franchising
            </Link>
            <Link href="/ip-consultant" className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 transition-colors font-medium">
              IP Strategy
            </Link>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <HeroCTAButton />
          </div>
        </div>
      </section>

      {/* Strategic Intelligence Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Strategic Intelligence
            </h2>
            <p className="mt-4 text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Market-defining research and case studies to guide your expansion. Stay ahead of the curve with priority alerts.
            </p>
            <SubscribeButton />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Report 1: State of AI */}
            <div className="flex flex-col rounded-2xl bg-white overflow-hidden shadow-sm border border-gray-200 group hover:shadow-lg transition-shadow">
              <div className="card-image-container relative h-64 sm:h-72">
                <Image
                  src="/report-ai-cover.png"
                  alt="State of AI in Southeast Asia 2026 Report Cover"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-bold text-white mb-2">
                    New Release
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">State of AI in Southeast Asia 2026</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  A comprehensive analysis of AI adoption trends across Singapore, Indonesia, and Vietnam. Discover how leading firms are leveraging generative AI to redefine productivity from pilot to utility.
                </p>
                <Link href="/insights" className="inline-flex items-center text-primary font-bold hover:underline group-hover:text-primary/80 transition-colors">
                  Read the Report <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Report 2: Wang Lao Ji */}
            <div className="flex flex-col rounded-2xl bg-white overflow-hidden shadow-sm border border-gray-200 group hover:shadow-lg transition-shadow">
              <div className="card-image-container relative h-64 sm:h-72">
                <Image
                  src="/report-wlj-cover.png"
                  alt="Global Expansion Roadmap: Wang Lao Ji to Global Brand"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-bold text-white mb-2 border border-white/30">
                    Case Study
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">Global Expansion Roadmap: Wang Lao Ji</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  5 Scaling Lessons from Wang Lao Ji for SMEs. Learn how a 197-year legacy brand transformed into a global lifestyle icon, offering a blueprint for brand resilience and market adaptation.
                </p>
                <Link href="/insights" className="inline-flex items-center text-primary font-bold hover:underline group-hover:text-primary/80 transition-colors">
                  Read the Case Study <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Market-defining capabilities designed to turn operational gaps into competitive moats.
            </p>
          </div>
          <ServicesAccordion />
        </div>
      </section>

      {/* PROVEN TRACK RECORD / IMPACT */}
      <ClientImpact />

      {/* Impact Stats Section */}
      <section className="relative flex flex-col items-center justify-center py-20 text-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/hero-bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            quality={40}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/80"></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-white drop-shadow-lg">Inspiring a Better World:</span>
              <br className="hidden sm:inline" />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">
                Accelerating 100 Entrepreneurs to Impact 100 Million Lives in Asia.
              </span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Entrepreneurs Supported", value: 218, icon: Users, suffix: "" },
              { label: "Quality of Lives Improved", value: 138, icon: Globe, suffix: " M" },
              { label: "Strategic Roadmaps Delivered", value: 513, icon: TrendingUp, suffix: "" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm border border-white/10"
              >
                <div className="mb-4 rounded-full bg-primary/20 p-4 ring-1 ring-primary/50">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  <span className="tabular-nums tracking-tight">
                    <LazyCountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  </span>
                </div>
                <div className="text-sm font-bold uppercase tracking-wider text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-12">
            Partnership Driving 138M Impact
          </p>
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center justify-center">
              <LazyLogoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Scale Your Business Dominance?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/90 mb-10">
            Join over 200 market leaders who have transformed their operations and secured defensible IP assets with FT Synergist. Your roadmap to expansion begins here.
          </p>
          <FooterCTAButton />
        </div>
      </section>
    </div>
  );
}