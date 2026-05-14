import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Standing Seam Metal Roofing Ontario | VAH Construction",
  description:
    "Ontario's standing seam metal roofing specialists. Concealed fastener, continuous panels, Class 4 hail-rated. 50-year non-prorated transferable warranty. Free satellite quote — Niagara, Hamilton, Burlington, Oakville.",
  alternates: { canonical: "https://www.vahconstruction.com/services/standing-seam-roofing" },
  openGraph: {
    title: "Standing Seam Metal Roofing Ontario | VAH Construction",
    description:
      "Concealed fastener standing seam roofing for Ontario homes and commercial buildings. Class 4 rated, 50-year warranty. Free remote quote.",
    url: "https://www.vahconstruction.com/services/standing-seam-roofing",
  },
};

const faqs = [
  {
    q: "What is standing seam metal roofing?",
    a: "Standing seam is a metal roofing system where panels run continuously from ridge to eave, with all fastening hardware concealed beneath raised vertical seams. There are no exposed screws, no penetrations through the panel face, and no points of water infiltration.",
  },
  {
    q: "How long does standing seam metal roofing last in Ontario?",
    a: "Standing seam metal roofing lasts 50–70+ years with minimal maintenance. VAH Construction's installations are backed by a 50-year non-prorated manufacturer warranty — full coverage throughout the entire term.",
  },
  {
    q: "Is standing seam better than regular metal roofing?",
    a: "Yes. Exposed fastener metal roofing requires rubber gaskets around every screw that harden and fail over 10–15 years. Standing seam eliminates all exposed fasteners — there is no maintenance required at the fastener level and no mechanism for water infiltration through fastener penetrations.",
  },
  {
    q: "What does standing seam metal roofing cost in Ontario?",
    a: "Costs vary by roof complexity, pitch, and square footage. VAH Construction provides free written, itemized quotes measured by satellite imagery. Contact us for a same-day quote with no obligation.",
  },
  {
    q: "Does VAH Construction install standing seam on residential homes?",
    a: "Yes. VAH Construction installs standing seam on residential homes, custom builds, and commercial properties throughout Niagara Region, Hamilton, Burlington, Oakville, and surrounding Southern Ontario.",
  },
  {
    q: "What colours are available for standing seam metal roofing?",
    a: "VAH Construction offers Matte Black, Charcoal Grey, Slate Grey, Forest Green, Burgundy, Terra Cotta, Galvalume (mill finish), and additional colours. PVDF paint coatings maintain colour and reflectivity for decades.",
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
  name: "Standing Seam Metal Roofing",
  description:
    "Concealed fastener standing seam metal roofing installation for residential and commercial properties in Ontario. Class 4 impact-rated, 50-year non-prorated warranty.",
  provider: {
    "@type": "LocalBusiness",
    name: "VAH Construction",
    url: "https://www.vahconstruction.com",
    telephone: "+14372473371",
  },
  areaServed: "Southern Ontario, Canada",
  serviceType: "Standing Seam Metal Roofing Installation",
};

export default function StandingSeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <PageHero
          label="Standing Seam Metal Roofing"
          headline="The Gold Standard of"
          headlineAccent="Metal Roofing."
          subheadline="Concealed fasteners. Continuous panels. Zero exposed screws. Standing seam is the most watertight, durable, and architecturally refined metal roofing system available — and VAH Construction are the specialists."
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Standing Seam Roofing" }]}
          ctaLabel="Get a Free Quote"
          ctaHref="/contact"
        />

        {/* What is it */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">How It Works</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                  What Makes Standing Seam Different.
                </h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                  <p>
                    Standing seam panels run continuously from the ridge of your roof to the eave — no horizontal seams, no mid-panel joins. Each panel connects to the next via a raised vertical seam that locks them together structurally and weatherproofs the connection completely.
                  </p>
                  <p>
                    The critical difference: all fastening hardware is hidden beneath these seams. Clips or brackets attach the panels to the roof deck at the seam line, never through the panel face. The result is a roof surface with zero exposed screws, zero exposed gaskets, and zero penetration points through which water can enter.
                  </p>
                  <p>
                    This is why standing seam metal roofing lasts 50–70+ years in Ontario&apos;s climate — the same conditions that destroy asphalt shingles and exposed-fastener metal in 12–18 years have no mechanism to damage it.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Concealed Fastener System",
                    body: "All hardware is hidden beneath the panel seam — no exposed screws, no rubber gaskets, no maintenance required at fastener points.",
                  },
                  {
                    title: "Thermal Floating",
                    body: "Hidden clips allow panels to expand and contract freely with temperature change, preventing panel distortion and fastener stress.",
                  },
                  {
                    title: "Class 4 Impact Resistance",
                    body: "The highest hail resistance rating available. Withstands a 2\" steel ball dropped from 20 feet without cracking or penetrating.",
                  },
                  {
                    title: "Wind Rating to 250 km/h",
                    body: "The structural seam-lock engagement transfers wind loads across the entire roof plane — far exceeding any Ontario wind event on record.",
                  },
                  {
                    title: "50-Year Non-Prorated Warranty",
                    body: "Full manufacturer coverage for the entire 50-year term. Transferable to new owners. No declining coverage.",
                  },
                  {
                    title: "Ice Dam Immunity",
                    body: "Smooth metal surface sheds snow and melt naturally. No mechanism for ice dam formation or ice-forced water infiltration.",
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

        {/* Applications */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Applications</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Where VAH Construction Installs Standing Seam.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Custom & Luxury Homes",
                  body: "Standing seam is the definitive choice for high-end residential construction. Clean profiles, architectural finishes, and permanent performance.",
                },
                {
                  title: "Roof Replacements",
                  body: "Replace your aging asphalt with a system that will outlast the building. Full tear-off, deck inspection, and premium metal installation.",
                },
                {
                  title: "Commercial Buildings",
                  body: "Low-slope and steep-slope commercial installations for warehouses, retail, industrial, and institutional properties.",
                },
                {
                  title: "Agricultural Structures",
                  body: "Long-span standing seam panels for barns, equipment storage, and farm buildings. Galvalume and painted systems.",
                },
                {
                  title: "Heritage Properties",
                  body: "Standing seam has a 150-year history in Ontario architecture. Ideal for heritage home renovations that require period-appropriate metal roofing.",
                },
                {
                  title: "Modern Architecture",
                  body: "Matte Black and Charcoal standing seam is the defining material of contemporary Ontario residential architecture.",
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

        {/* Colours */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Finishes</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Profiles & Colours.
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {[
                { color: "#1a1a1a", border: "#333", label: "Matte Black" },
                { color: "#3a3a3a", border: "#555", label: "Charcoal" },
                { color: "#5c6470", border: "#6b7280", label: "Slate Grey" },
                { color: "#2d4a2d", border: "#3d5c3d", label: "Forest Green" },
                { color: "#7c2d2d", border: "#9c3d3d", label: "Burgundy" },
                { color: "#8c7355", border: "#a08060", label: "Galvalume" },
              ].map((c) => (
                <div key={c.label} className="text-center">
                  <div
                    className="w-full h-16 rounded-md mb-2 border"
                    style={{ backgroundColor: c.color, borderColor: c.border }}
                  />
                  <span className="text-neutral-500 text-xs">{c.label}</span>
                </div>
              ))}
            </div>
            <p className="text-neutral-600 text-sm">
              Additional colours available. All finishes use PVDF paint systems for maximum colour retention and reflectivity.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Standing Seam</span>
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
              Ready for a Roof That Lasts 50 Years?
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Get a free, written standing seam quote — measured by satellite, delivered same day. No obligation, no appointment needed.
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
