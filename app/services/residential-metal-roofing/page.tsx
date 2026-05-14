import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Metal Roofing Ontario | VAH Construction",
  description:
    "Premium residential metal roofing for Ontario homes. Standing seam, metal tile, and hidden fastener systems with 50-year non-prorated warranties. Serving Niagara Region, Hamilton, Burlington, Oakville.",
  alternates: { canonical: "https://www.vahconstruction.com/services/residential-metal-roofing" },
  openGraph: {
    title: "Residential Metal Roofing Ontario | VAH Construction",
    description:
      "Premium residential metal roofing for Ontario homes. Class 4 rated, 50-year warranty, free satellite quote.",
    url: "https://www.vahconstruction.com/services/residential-metal-roofing",
  },
};

const faqs = [
  {
    q: "Is metal roofing good for residential homes in Ontario?",
    a: "Metal roofing is the best long-term choice for Ontario homes. It handles freeze-thaw cycling, heavy snow loads, lake-effect precipitation, and severe hail better than any other residential roofing material. It lasts 50–70+ years versus 12–18 years for asphalt.",
  },
  {
    q: "Does a metal roof increase my home's value in Ontario?",
    a: "Yes. A 50-year non-prorated, transferable metal roof is a genuine selling point for Ontario real estate buyers. It eliminates roof replacement from their near-term capital expenditure and signals quality construction.",
  },
  {
    q: "Can I get a metal roof on any style of home?",
    a: "Yes. VAH Construction offers standing seam, metal tile, and hidden fastener profiles in a full range of colours. Whether your home is traditional, transitional, or contemporary, there is a metal profile that complements it.",
  },
  {
    q: "How long does it take to install a metal roof on a residential home?",
    a: "Most residential metal roof installations are completed in 2–5 days depending on roof complexity and square footage. VAH Construction provides a project timeline with every written quote.",
  },
  {
    q: "Is residential metal roofing loud in the rain?",
    a: "No. Properly installed metal roofing over a solid deck with quality underlayment is quieter than most asphalt shingles. The underlayment and attic insulation absorb rain impact effectively.",
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

export default function ResidentialMetalRoofingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <PageHero
          label="Residential Metal Roofing"
          headline="A Permanent Roof for"
          headlineAccent="Your Home."
          subheadline="Premium residential metal roofing for Ontario homeowners. Standing seam, metal tile, and hidden fastener systems — all backed by a 50-year non-prorated, transferable warranty."
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Residential Metal Roofing" }]}
          ctaLabel="Get a Free Quote"
          ctaHref="/contact"
        />

        {/* Why metal for homes */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                  The Case for Metal
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                  Stop Replacing Your Roof Every 15 Years.
                </h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                  <p>
                    Ontario homeowners spend $12,000–$22,000 replacing an asphalt roof — typically every 12–18 years in our climate. Most go through this cycle two or three times in their ownership of a home. Metal roofing changes the math entirely: install once, maintain minimally, and the roof outlasts your mortgage, your children&apos;s childhoods, and possibly your ownership of the property entirely.
                  </p>
                  <p>
                    VAH Construction specializes exclusively in residential metal roofing. We don&apos;t install asphalt on the side — metal is our entire business. This means deeper expertise, better materials selection, and more consistent outcomes on every project.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "50+", label: "Year Warranty" },
                  { metric: "Class 4", label: "Hail Rating" },
                  { metric: "250 km/h", label: "Wind Resistance" },
                  { metric: "$0", label: "Annual Maintenance" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#111111] border border-neutral-800 rounded-lg p-5 text-center">
                    <div className="text-3xl font-extrabold text-amber-500 mb-1">{s.metric}</div>
                    <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Residential roofing options */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Residential Profiles</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Metal Roofing Options for Ontario Homes.
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Standing Seam",
                  badge: "Most Popular",
                  href: "/services/standing-seam-roofing",
                  body: "The premium choice. Continuous panels from ridge to eave, all fasteners concealed. Clean, architectural profile. 50–70+ year lifespan. Ideal for contemporary and transitional homes.",
                  features: ["Concealed fasteners", "Architectural profile", "50-year warranty", "Class 4 hail rated"],
                },
                {
                  title: "Metal Tile",
                  badge: null,
                  href: "/services/metal-roofing",
                  body: "Standing seam performance in a tile-profile format. Ideal for traditional, Mediterranean, and heritage-style homes. All the durability of metal with a familiar aesthetic.",
                  features: ["Traditional appearance", "50-year warranty", "Class 4 hail rated", "Multiple colours"],
                },
                {
                  title: "Hidden Fastener Panels",
                  badge: null,
                  href: "/services/metal-roofing",
                  body: "Snap-lock and concealed-clip panel systems. Faster installation profile for re-roofing projects. Excellent weather performance and warranty coverage.",
                  features: ["Concealed fasteners", "Fast installation", "50-year warranty", "Wind rated"],
                },
              ].map((opt) => (
                <div key={opt.title} className="bg-[#111111] border border-neutral-800 rounded-lg p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-bold text-lg">{opt.title}</h3>
                    {opt.badge && (
                      <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/25 px-2 py-0.5 rounded-full">
                        {opt.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-5 flex-1">{opt.body}</p>
                  <ul className="space-y-2 mb-5">
                    {opt.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-neutral-400">
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-amber-500 flex-shrink-0">
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={opt.href} className="text-amber-500 hover:text-amber-400 text-sm font-semibold inline-flex items-center gap-1 transition-colors">
                    Learn more
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Process</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">How VAH Construction Installs Your Metal Roof.</h2>
            </div>
            <ol className="space-y-5">
              {[
                { n: "01", title: "Remote Satellite Quote", body: "We measure your roof using satellite imagery — precise dimensions, pitch, and surface area without a site visit. You receive a written, itemized quote by email within hours." },
                { n: "02", title: "Material Confirmation", body: "You select your profile, colour, and finish. We confirm the final specification in writing before ordering materials — no surprises." },
                { n: "03", title: "Installation Scheduling", body: "We schedule installation and confirm the timeline. Most residential installs are completed in 2–5 days." },
                { n: "04", title: "Complete Tear-Off", body: "We remove existing roofing, inspect the deck for rot or damage, and make any necessary repairs before installation begins." },
                { n: "05", title: "Metal Roof Installation", body: "Underlayment, thermal break, and metal panel installation. All work done by our own crews — no subcontracting." },
                { n: "06", title: "Inspection & Warranty", body: "Final inspection with the client. Warranty documentation provided. The 50-year non-prorated manufacturer warranty is registered in your name." },
              ].map((step) => (
                <li key={step.n} className="flex gap-5">
                  <span className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Residential Roofing</span>
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
              Ready to Stop Replacing Your Roof?
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Get a free written residential metal roofing quote — measured by satellite, delivered same day. No obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-base transition-colors duration-200"
                style={{ boxShadow: "0 0 30px rgba(217,119,6,0.2)" }}
              >
                Get a Free Quote
              </Link>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-white font-semibold border border-white/15 hover:border-white/30 px-8 py-4 rounded-sm text-base transition-colors duration-200">
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
