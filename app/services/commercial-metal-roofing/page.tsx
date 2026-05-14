import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Metal Roofing Ontario | VAH Construction",
  description:
    "Commercial metal roofing for industrial, retail, agricultural and institutional buildings in Ontario. Standing seam, low-slope and steep-slope systems. 50-year warranties. Niagara Region, Hamilton, Burlington.",
  alternates: { canonical: "https://www.vahconstruction.com/services/commercial-metal-roofing" },
  openGraph: {
    title: "Commercial Metal Roofing Ontario | VAH Construction",
    description:
      "Industrial, retail and institutional commercial metal roofing. Standing seam and low-slope systems with 50-year warranties across Southern Ontario.",
    url: "https://www.vahconstruction.com/services/commercial-metal-roofing",
  },
};

const faqs = [
  {
    q: "Does VAH Construction install commercial metal roofing in Ontario?",
    a: "Yes. VAH Construction installs commercial metal roofing for industrial warehouses, retail properties, agricultural buildings, institutional facilities, and multi-residential structures throughout Southern Ontario.",
  },
  {
    q: "What commercial metal roofing systems does VAH Construction install?",
    a: "VAH Construction installs standing seam, snap-lock, and mechanically seamed metal roofing for commercial applications. System selection depends on roof pitch, span, building use, and performance requirements.",
  },
  {
    q: "Is metal roofing appropriate for low-slope commercial roofs?",
    a: "Yes. VAH Construction installs standing seam and hidden fastener metal roofing on commercial roofs with pitches as low as 1:12 (approximately 5 degrees) using appropriately designed panel profiles and seaming methods for low-slope applications.",
  },
  {
    q: "What warranty does VAH Construction provide on commercial metal roofing?",
    a: "Commercial metal roofing installations are backed by manufacturer warranties of 25–50 years depending on the system selected, coating specifications, and building type. VAH Construction provides written warranty documentation with every installation.",
  },
  {
    q: "Do you serve Niagara Region commercial properties?",
    a: "Yes. VAH Construction serves commercial properties throughout the Niagara Region, Hamilton, Burlington, Oakville, and surrounding Southern Ontario. Contact us to discuss your commercial project.",
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

export default function CommercialMetalRoofingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <PageHero
          label="Commercial Metal Roofing"
          headline="Industrial Performance."
          headlineAccent="Commercial Precision."
          subheadline="Standing seam and hidden fastener metal roofing for Ontario's industrial, retail, agricultural, and institutional properties. Built to perform for decades with minimal maintenance."
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Commercial Metal Roofing" }]}
          ctaLabel="Get a Commercial Quote"
          ctaHref="/contact"
        />

        {/* Applications */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Commercial Applications</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Commercial Properties We Serve.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Industrial & Warehouses",
                  body: "Long-span standing seam and corrugated metal roofing for manufacturing facilities, distribution centres, and warehouses. Galvalume and painted systems.",
                  icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                },
                {
                  title: "Retail & Commercial",
                  body: "Steep-slope and low-slope metal roofing for retail plazas, commercial buildings, and mixed-use developments. Aesthetically appropriate profiles for commercial streetscapes.",
                  icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                },
                {
                  title: "Agricultural Buildings",
                  body: "Long-span agricultural metal roofing for barns, equipment storage, greenhouses, and farm buildings. Galvalume natural finish or painted steel.",
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                },
                {
                  title: "Institutional",
                  body: "Schools, municipal buildings, community centres, and healthcare facilities. Specified to institutional standards with appropriate warranty and documentation.",
                  icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
                },
                {
                  title: "Multi-Residential",
                  body: "Metal roofing for condominiums, townhouse complexes, and apartment buildings. Low-maintenance systems appropriate for strata-managed properties.",
                  icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M3 21h18",
                },
                {
                  title: "Re-Roofing Projects",
                  body: "Full tear-off and replacement of aging commercial roofing — TPO, modified bitumen, aging metal, and asphalt systems — with new premium metal installations.",
                  icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                },
              ].map((app) => (
                <div key={app.title} className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-amber-500 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d={app.icon} />
                  </svg>
                  <h3 className="text-white font-bold mb-2">{app.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{app.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why metal for commercial */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Commercial Advantage</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                  Why Commercial Properties Choose Metal.
                </h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                  <p>
                    For commercial property owners, roofing is a capital expenditure decision — not a maintenance budget item. Metal roofing delivers the lowest 30-year total cost of any commercial roofing system, eliminates periodic re-roofing disruption to tenants and operations, and qualifies for capital cost allowance treatment as a long-term building improvement.
                  </p>
                  <p>
                    VAH Construction works with commercial clients on projects ranging from single-building industrial facilities to multi-property portfolios. We provide written project specifications, formal warranty documentation, and coordinate installation schedules to minimize operational disruption.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "30-yr", label: "Lowest Total Cost" },
                  { metric: "25–50yr", label: "Warranty Options" },
                  { metric: "1:12", label: "Minimum Pitch" },
                  { metric: "250 km/h", label: "Wind Resistance" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#111111] border border-neutral-800 rounded-lg p-5 text-center">
                    <div className="text-2xl font-extrabold text-amber-500 mb-1">{s.metric}</div>
                    <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Commercial Roofing</span>
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
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">Commercial Quote</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
              Get a Commercial Metal Roofing Quote.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              VAH Construction provides written, itemized commercial roofing quotes with full specification documentation. Contact us to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-base transition-colors"
                style={{ boxShadow: "0 0 30px rgba(217,119,6,0.2)" }}
              >
                Request a Commercial Quote
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
