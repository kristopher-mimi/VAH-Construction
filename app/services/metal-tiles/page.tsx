import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Metal Tile Roofing Ontario",
  description:
    "Class 4 hail-rated metal tile roofing for Ontario homes. Engineered steel shingles with the look of traditional tiles — 50-year non-prorated warranty. Serving Niagara, Hamilton, Burlington, Oakville.",
  alternates: { canonical: "https://www.vahconstruction.com/services/metal-tiles" },
  openGraph: {
    title: "Metal Tile Roofing Ontario | VAH Construction",
    description:
      "Metal tile systems that look like traditional shingles but last 50+ years. Class 4 impact rated, Energy Star certified. Free satellite quote.",
    url: "https://www.vahconstruction.com/services/metal-tiles",
  },
};

const faqs = [
  {
    q: "What is a metal tile roofing system?",
    a: "Metal tile systems are engineered steel or aluminum panels formed to mimic the profile of traditional architectural shingles, wood shakes, or slate tiles. Each panel interlocks with adjacent panels to create a fully sealed roofing system with the aesthetics of conventional roofing and the longevity of metal.",
  },
  {
    q: "How long do metal tiles last in Ontario?",
    a: "Metal tile systems are warrantied for 50 years non-prorated. In practice, properly installed metal tile roofing lasts the lifetime of the building. Unlike asphalt, there is no granule loss, no cracking from freeze-thaw cycling, and no organic material to degrade.",
  },
  {
    q: "Are metal tiles as hail-resistant as standing seam?",
    a: "Yes. VAH Construction's metal tile systems carry a Class 4 impact rating — the highest hail resistance classification available. The same rating as standing seam, tested against a 2\" steel ball dropped from 20 feet without penetrating the panel.",
  },
  {
    q: "Do metal tiles look like regular shingles?",
    a: "Metal tile panels are profiled to closely replicate the shadow lines and texture of dimensional asphalt shingles. From ground level, the visual difference is subtle. The difference in longevity and performance is not.",
  },
  {
    q: "Can I get metal tiles in different colours?",
    a: "Yes. VAH Construction offers metal tile systems in Matte Black, Slate Grey, Mocha Brown, Chocolate Brown, Burgundy Red, Tile Red, and Terra Cotta. All finishes use factory-applied Kynar coating — permanent colour that does not fade, chip, or require repainting.",
  },
  {
    q: "Are metal tiles more expensive than asphalt shingles?",
    a: "Metal tile systems cost more upfront than asphalt. However, over a 40-year period, metal eliminates 2–3 full asphalt replacements — tear-off, disposal, and labour included. The lifecycle cost of metal is typically lower, and the asset value on your home is higher.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Metal Tile Roofing",
  description:
    "Class 4 impact-rated metal tile roofing installation for residential properties in Ontario. 50-year non-prorated warranty.",
  // Reference the single business entity declared in the root layout rather
  // than declaring a second, competing one here.
  provider: { "@id": "https://www.vahconstruction.com/#business" },
  areaServed: "Southern Ontario, Canada",
  serviceType: "Metal Tile Roofing Installation",
};

export default function MetalTilesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <PageHero
          label="Metal Tile Systems"
          headline="The Performance of Metal."
          headlineAccent="The Look of Tradition."
          subheadline="Class 4 hail-rated steel panels engineered to replicate the profile of dimensional shingles — with a 50-year non-prorated warranty and zero maintenance cycles. The last roof you'll ever install."
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Metal Roofing", href: "/services/metal-roofing" }, { label: "Metal Tiles" }]}
          ctaLabel="Get a Metal Tile Quote"
          ctaHref="/contact"
        />

        {/* How It Works */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">How It Works</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                  Why Metal Tiles Outperform Asphalt.
                </h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                  <p>
                    Metal tile systems use interlocking steel or aluminum panels profiled to replicate the shadow lines of traditional architectural shingles. Each panel hooks onto the course below it and locks to the course above — creating a fully sealed system with no exposed fasteners on the panel face.
                  </p>
                  <p>
                    Asphalt shingles depend on organic mat and mineral granules. In Ontario&apos;s freeze-thaw climate, the mat contracts and cracks, granules wash off, and the system deteriorates from year one. Metal tile panels are dimensionally stable at −40°C and 50°C alike — the same thermal cycling that destroys asphalt simply has no effect.
                  </p>
                  <p>
                    The result: a roof that looks like the shingles your neighbours have, performs nothing like them, and will still be protecting your home when they&apos;ve replaced theirs twice over.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Class 4 Impact Rating",
                    body: "The highest hail resistance available. Certified to withstand a 2\" steel ball without cracking or penetrating — your roof insurance discount starts here.",
                  },
                  {
                    title: "Interlocking Panel System",
                    body: "Each panel mechanically interlocks with the course above and below. No exposed edges, no lifted corners, no wind-driven water infiltration.",
                  },
                  {
                    title: "Energy Star Certified",
                    body: "Factory-baked Kynar coating reflects solar energy, reducing cooling loads in summer. Certifiable for energy efficiency credits.",
                  },
                  {
                    title: "Dimensional Stability",
                    body: "Metal expands and contracts with temperature, but panels are designed with that movement built in — no warping, no cracking, no granule loss.",
                  },
                  {
                    title: "50-Year Non-Prorated Warranty",
                    body: "Full coverage for the complete warranty term, fully transferable to new owners. Not 50% coverage at year 25 — 100% coverage throughout.",
                  },
                  {
                    title: "Class A Fire Rating",
                    body: "The highest fire resistance classification. Non-combustible — unlike asphalt, metal tile cannot be ignited by windborne embers.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-[#111111] border border-neutral-800 rounded-lg p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-amber-500">
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Colour Options */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Finishes</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Colour Options.
              </h2>
              <p className="text-neutral-500 text-sm mt-2">
                Factory-applied Kynar coating — colour is permanent and does not fade, chip, or require repainting.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {[
                { name: "Matte Black", src: "/images/services/black.png" },
                { name: "Slate Grey", src: "/images/services/Slate Grey.png" },
                { name: "Mocha Brown", src: "/images/services/Mocha Brown.png" },
                { name: "Chocolate Brown", src: "/images/services/Chocolate Brown.png" },
                { name: "Burgundy Red", src: "/images/services/Burgundy Red.png" },
                { name: "Tile Red", src: "/images/services/Tile Red.png" },
                { name: "Terra Cotta", src: "/images/services/Terra Cotta.png" },
              ].map((colour) => (
                <div key={colour.name} className="flex flex-col items-center gap-2">
                  <div className="w-full aspect-square rounded-sm overflow-hidden border border-neutral-700/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={colour.src}
                      alt={colour.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium text-center leading-tight">{colour.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Ideal For</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Where Metal Tiles Make Sense.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Heritage & Traditional Homes",
                  body: "Preserve the visual character of a brick, stone, or heritage property without sacrificing performance. Metal tile profiles match the shadow lines of dimensional shingles exactly.",
                },
                {
                  title: "Asphalt Replacements",
                  body: "The most common upgrade path. If you're replacing a 20-year-old asphalt roof, metal tiles give you 50 more years without the look of an industrial metal building.",
                },
                {
                  title: "Neighbourhoods with Aesthetic Rules",
                  body: "Where standing seam may look out of place among traditional homes, metal tiles blend in completely while delivering full metal performance.",
                },
                {
                  title: "Hail-Prone Areas",
                  body: "Southern Ontario sees golf-ball-sized hail events regularly. Class 4 metal tiles are the only residential roofing material that survives these events without structural damage.",
                },
                {
                  title: "Energy-Conscious Homeowners",
                  body: "Energy Star certification, solar reflectance, and potential insurance discounts make metal tiles a financially smart choice beyond just longevity.",
                },
                {
                  title: "Resale-Focused Investments",
                  body: "A transferable 50-year warranty is a documented asset at sale. Buyers understand the value of never needing a roof replacement.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Metal Tiles</span>
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
              Get a Metal Tile Quote Today.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Free written quote — measured by satellite, delivered same day. No obligation, no sales pressure, no appointment needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-base transition-colors duration-200"
                style={{ boxShadow: "0 0 30px rgba(217,119,6,0.2)" }}
              >
                Get a Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-white font-semibold border border-white/15 hover:border-white/30 px-8 py-4 rounded-sm text-base transition-colors duration-200"
              >
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
