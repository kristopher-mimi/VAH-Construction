import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Luxury Metal Fencing Ontario | VAH Construction — Privacy & Architectural Fences",
  description:
    "Luxury powder-coated steel and aluminum privacy fencing for Ontario's premium properties. Custom architectural metal fences, privacy screens, and gate systems. Niagara Region, Hamilton, Oakville, Burlington.",
  alternates: { canonical: "https://www.vahconstruction.com/services/luxury-metal-fences" },
  openGraph: {
    title: "Luxury Metal Fencing Ontario | VAH Construction",
    description:
      "Custom architectural metal privacy fencing for Ontario's luxury homes. Powder-coated steel, 40+ year lifespan, no maintenance.",
    url: "https://www.vahconstruction.com/services/luxury-metal-fences",
  },
};

const faqs = [
  {
    q: "What makes metal fencing 'luxury' compared to standard metal fencing?",
    a: "Luxury metal fencing combines premium-gauge steel or aluminum, custom-fabricated architectural profiles (horizontal slats, perforated screens, geometric patterns), motorized gate systems, and premium powder coat finishes. The result is a fence that functions as an architectural element rather than a utility boundary.",
  },
  {
    q: "How long does luxury metal fencing last in Ontario?",
    a: "Powder-coated steel and aluminum fencing lasts 40–50+ years in Ontario's climate. The structural frame is essentially permanent. The powder coat finish lasts 15–25 years before fading may become noticeable, at which point the fence can be re-coated.",
  },
  {
    q: "Can luxury metal fencing be customized to my property?",
    a: "Yes. All VAH Construction fence panels, posts, and gates are custom-fabricated to your property's specific dimensions, grade changes, and design requirements. We work from architectural drawings or develop designs in collaboration with the client.",
  },
  {
    q: "Do you install motorized gates with luxury metal fencing?",
    a: "Yes. VAH Construction installs swing gate and sliding gate systems, motorized or manual, in matching powder-coated steel or aluminum. Gate systems are custom-fabricated to match the fence profile and finish.",
  },
  {
    q: "What is the cost of luxury metal fencing in Ontario?",
    a: "Luxury metal fencing costs vary significantly based on height, profile complexity, linear footage, and gate systems. VAH Construction provides free written quotes — contact us for a same-day response.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function LuxuryMetalFencesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <PageHero
          label="Luxury Metal Fencing"
          headline="Architectural Fencing."
          headlineAccent="Permanent. Precise."
          subheadline="Custom powder-coated steel and aluminum privacy fencing for Ontario's premium properties. Designed as an architectural element. Built to last 40+ years without maintenance."
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Luxury Metal Fences" }]}
          ctaLabel="Get a Fencing Quote"
          ctaHref="/contact"
        />

        {/* Intro */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">The Case for Metal</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                  Beyond the Wood Fence Cycle.
                </h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                  <p>
                    Ontario homeowners spend $8,000–$15,000 on a quality cedar fence. Twelve years later, they do it again. And again after that. Luxury metal fencing exits this cycle entirely — custom-fabricated in steel or aluminum, powder-coated in a permanent finish, and designed to look exceptional for the lifetime of the property.
                  </p>
                  <p>
                    For properties where the exterior appearance and permanence matter — where the fence is as much a design statement as a boundary — metal is the only material that delivers without compromise.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "40+", label: "Year Lifespan" },
                  { metric: "$0", label: "Annual Maintenance" },
                  { metric: "100%", label: "Custom Fabricated" },
                  { metric: "3–4×", label: "Less Than Wood Over 40 Years" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#111111] border border-neutral-800 rounded-lg p-5 text-center">
                    <div className="text-2xl font-extrabold text-amber-500 mb-1">{s.metric}</div>
                    <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fence styles */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Fence Profiles</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Luxury Fence Styles.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Horizontal Slat Privacy Fence",
                  body: "Equally spaced horizontal steel or aluminum slats on a structural post system. The contemporary standard for luxury residential fencing in Ontario. Full privacy or ventilated spacing options.",
                },
                {
                  title: "Solid Privacy Screen Panels",
                  body: "Flat steel or aluminum panels providing complete visual privacy. Popular for pool enclosures, patio screens, and urban properties. Available in any height and custom dimensions.",
                },
                {
                  title: "Perforated Architectural Panels",
                  body: "Decorative perforated steel or aluminum that provides filtered privacy while allowing light and air movement. Custom perforation patterns available — geometric, organic, and custom designs.",
                },
                {
                  title: "Cable & Steel Combined",
                  body: "Structural steel post framework with stainless cable infill. Contemporary architectural look with minimal visual obstruction. Popular for properties with premium views.",
                },
                {
                  title: "Decorative Steel Picket",
                  body: "Traditional and contemporary picket profiles in powder-coated steel. All the character of a classic fence with permanent material performance.",
                },
                {
                  title: "Custom Gate Systems",
                  body: "Swing and sliding gate systems in matching steel or aluminum. Manual or motorized. Custom-welded to match any fence profile. Electronic access control integration available.",
                },
              ].map((style) => (
                <div key={style.title} className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <h3 className="text-white font-bold mb-2">{style.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{style.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Colours */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-8">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Finishes</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Powder Coat Colours.</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { color: "#1a1a1a", border: "#333", label: "Matte Black" },
                { color: "#4a3728", border: "#6b5040", label: "Bronze" },
                { color: "#6b7280", border: "#9ca3af", label: "Silver" },
                { color: "#8B7355", border: "#a08060", label: "Cedar Wood-Grain" },
              ].map((c) => (
                <div key={c.label} className="text-center">
                  <div className="w-full h-20 rounded-md mb-2 border" style={{ backgroundColor: c.color, borderColor: c.border }} />
                  <span className="text-neutral-400 text-xs font-medium">{c.label}</span>
                </div>
              ))}
            </div>
            <p className="text-neutral-600 text-sm">Custom RAL colours available. All finishes are industrial-grade powder coat — chip-resistant, UV-stable, and colour-fast for decades.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Luxury Fencing</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Common Questions.</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-[#111111] border border-neutral-800/60 rounded-sm p-5">
                  <h3 className="text-white font-bold text-sm mb-2">{faq.q}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">Free Quote</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
              Ready for a Fence That Lasts a Lifetime?
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Contact VAH Construction for a free, written luxury metal fencing quote. Same-day response.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-base transition-colors"
                style={{ boxShadow: "0 0 30px rgba(217,119,6,0.2)" }}
              >
                Get a Free Fence Quote
              </Link>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-white font-semibold border border-white/15 hover:border-white/30 px-8 py-4 rounded-sm text-base transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
