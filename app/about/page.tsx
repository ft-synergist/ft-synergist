import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About FT Synergist | Strategic SME Consultants Singapore",
  description: "Founded by Frederick Tan (SCMC). We go beyond grant applications to build the strategic roadmaps that scaled brands like Adam Khoo Learning Centre across Asia.",
  openGraph: {
    title: "About FT Synergist | Strategic SME Consultants Singapore",
    description: "We don't just fill forms. We build the roadmap I wish I had 20 years ago.",
    url: "https://www.ftsynergist.com/about",
    siteName: "FT Synergist",
    images: [
      {
        url: "/frederick-tan-scmc-certified-edg-consultant.jpg",
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
      
      {/* --- JSON-LD SCHEMA --- */}
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

      {/* --- THE FOUNDER'S PHILOSOPHY --- */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            
            {/* Image Column */}
            <div className="w-full md:w-1/3 sticky top-24">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#C5A017]/30 shadow-2xl">
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
              
              {/* LinkedIn Link Below Image */}
              <div className="flex items-center gap-3 mt-6 justify-center md:justify-start">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="opacity-70"
                  />
                  <a href="https://www.linkedin.com/in/tanfrederick/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-[#C5A017] hover:underline transition-colors">
                    Connect on LinkedIn
                  </a>
              </div>
            </div>

            {/* Text Column (The Founder's Note) */}
            <div className="w-full md:w-2/3">
              <div className="inline-block px-4 py-1.5 mb-6 border border-[#C5A017]/30 rounded-full bg-[#C5A017]/10">
                <span className="text-sm font-bold text-[#C5A017] uppercase tracking-wider">
                  The Founder's Reality
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Strategy First, Grants Second.
              </h2>

              {/* --- NEW DESIGN: LIGHT CARD WITH DEEP BLUE BORDER --- */}
              <div 
                id="founder-story" 
                className="bg-[#f8f9fa] text-[#333] p-8 md:p-10 rounded border-l-[5px] border-[#0f3460] shadow-lg"
              >
                <h3 className="text-[#0f3460] font-bold text-2xl mb-6 font-sans">
                  The Founder's Note: Why "Grants" Are Not Enough
                </h3>
                
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  "I left the derivatives industry to start an education brand in China because I believed it was the most direct way to give back to society. Later, I took on the challenge of scaling <strong>Adam Khoo Learning Centre</strong> into Indonesia, and subsequently Vietnam and Cambodia.
                </p>

                <p className="text-lg md:text-xl leading-relaxed font-bold text-black mb-6">
                  We didn't need cash. We needed a market entry roadmap.
                </p>

                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Money without strategy just accelerates chaos. That is why when business owners come to me asking for 'the max <Link href="/edg-grant" className="text-[#0f3460] font-bold underline decoration-2 hover:text-[#C5A017] transition-colors">EDG grant</Link>,' I often tell them to pause. If you cannot explain your 3-year plan on a napkin, the grant won't save you—it will drown you.
                </p>

                <p className="text-base md:text-lg leading-relaxed mb-8">
                  At FT Synergist, we don't just fill forms. We build the strategic roadmap I wish I had 20 years ago."
                </p>

                <div className="border-t border-gray-300 pt-6">
                    <p className="font-bold text-[#0f3460] text-lg margin-0">— Frederick Tan</p>
                    <p className="text-sm text-gray-600 margin-0">Principal Consultant (SCMC Certified)</p>
                </div>
              </div>
              {/* ---------------------------------------------------- */}

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
