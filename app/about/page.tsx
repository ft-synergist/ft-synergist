import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About FT Synergist | Strategic SME Consultants Singapore",
  description: "Founded by Frederick Tan (SCMC). We go beyond grant applications to build the strategic roadmaps that scaled brands like Adam Khoo Learning Centre across Asia.",
  openGraph: {
    title: "About FT Synergist | Strategic SME Consultants Singapore",
    description: "We don't just fill forms. We build the roadmap I wish I had 10 years ago.",
    url: "https://www.ftsynergist.com/about",
    siteName: "FT Synergist",
    images: [
      {
        url: "/frederick-tan-scmc-certified-edg-consultant.jpg", // Using your existing image
        width: 1200,
        height: 630,
        alt: "Frederick Tan - Principal Consultant",
      },
    ],
    locale: "en_SG",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      
      {/* --- JSON-LD SCHEMA (The Invisible SEO Boost) --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Frederick Tan",
              "jobTitle": "Principal Consultant",
              "honorificSuffix": "SCMC",
              "image": "https://www.ftsynergist.com/frederick-tan-scmc-certified-edg-consultant.jpg",
              "description": "Strategic consultant specializing in SME scale-up and Enterprise Singapore grants.",
              "sameAs": [
                "https://www.linkedin.com/in/tanfrederick/",
                "https://www.ftsynergist.com"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "FT Synergist"
              },
              "hasCredential": {
                "@type": "EducationalOccupationalCredential",
                "name": "Singapore Certified Management Consultant (SCMC)",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "TÜV SÜD PSB"
                }
              }
            }
          }),
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative py-20 md:py-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C5A017]/20 via-black to-black"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Strategic SME Consultants <br className="hidden md:inline" />
            <span className="text-[#C5A017]">Singapore</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We are not just grant writers. We are entrepreneurs who have navigated the chaos of scaling up.
          </p>
        </div>
      </section>

      {/* --- THE FOUNDER'S PHILOSOPHY (Your New Content) --- */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            {/* Image Column */}
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#C5A017]/30 shadow-2xl">
                {/* Ensure this image path matches your public folder */}
                <Image
                  src="/frederick-tan-scmc-certified-edg-consultant.jpg"
                  alt="Frederick Tan Principal Consultant"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-white font-bold text-lg">Frederick Tan</p>
                  <p className="text-[#C5A017] text-sm">Principal Consultant (SCMC)</p>
                </div>
              </div>
            </div>

            {/* Text Column (The Manifesto) */}
            <div className="w-full md:w-2/3">
              <div className="inline-block px-4 py-1.5 mb-6 border border-[#C5A017]/30 rounded-full bg-[#C5A017]/10">
                <span className="text-sm font-bold text-[#C5A017] uppercase tracking-wider">
                  The Founder's Reality
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Why "Grants" Are Not Enough
              </h2>

              <div className="prose prose-lg prose-invert text-gray-300">
                <p className="mb-6">
                  "I used to think 'Grants' were just free money. Then I tried to scale <strong>Adam Khoo Learning Centre</strong> into Vietnam.
                </p>
                <p className="mb-6 font-medium text-white">
                  We didn't need cash. We needed a roadmap.
                </p>
                <p className="mb-6">
                  Money without strategy just accelerates chaos. That is why when business owners come to me asking for 'the max 
                  <Link href="/edg-grant" className="text-[#C5A017] hover:underline font-bold mx-1">
                     grant
                  </Link>,' 
                  I often tell them to pause. If you cannot explain your 3-year plan on a napkin, the grant won't save you—it will drown you.
                </p>
                <p className="mb-8 border-l-4 border-[#C5A017] pl-6 italic text-gray-400">
                  "At FT Synergist, we don't just fill forms. We build the roadmap I wish I had 10 years ago."
                </p>
                
                <div className="flex items-center gap-4 mt-8">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="opacity-70"
                  />
                  <span className="text-sm text-gray-500">Connect with Frederick on LinkedIn</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CREDENTIALS / TRUST SIGNALS --- */}
      <section className="py-20 border-y border-white/10 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Authority & Track Record</h2>
            <p className="text-gray-400">Why enterprise leaders partner with us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#C5A017]/50 transition-colors">
              <Award className="w-10 h-10 text-[#C5A017] mb-6" />
              <h3 className="text-xl font-bold mb-3">TÜV SÜD Certified</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We hold the <strong>SCMC (Singapore Certified Management Consultant)</strong> credential, meeting the strict mandatory requirement set by Enterprise Singapore for grant consultancy.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#C5A017]/50 transition-colors">
              <MapPin className="w-10 h-10 text-[#C5A017] mb-6" />
              <h3 className="text-xl font-bold mb-3">Regional Experience</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Real-world experience scaling brands into complex markets like <strong>Indonesia (Jakarta, Surabaya)</strong> and <strong>Vietnam (Ho Chi Minh)</strong>.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-[#C5A017]/50 transition-colors">
              <CheckCircle2 className="w-10 h-10 text-[#C5A017] mb-6" />
              <h3 className="text-xl font-bold mb-3">Proven Exits</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our strategies are designed for valuation. We have helped clients build systems that led to successful <strong>Franchise Models</strong> and <strong>Commercial Exits</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C5A017] -z-10"></div>
        <div className="container mx-auto px-4 text-center text-black">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Build Your Roadmap?</h2>
          <p className="text-xl font-medium opacity-80 mb-10 max-w-2xl mx-auto">
            Stop chasing free money. Start building a defensible business strategy that gets funded.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Speak to a Consultant
            </Link>
            <Link 
              href="/edg-grant" 
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Explore EDG Grant <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
