import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Custom Steel Fence Installation Ontario | VAH Construction",
  description:
    "Custom-fabricated powder-coated steel fence installation in Ontario. Bespoke steel fence panels, gates, and privacy screens. Serving Niagara Region, Hamilton, Burlington, Oakville. Free written quote.",
  alternates: { canonical: "https://www.vahconstruction.com/services/custom-steel-fence" },
  openGraph: {
    title: "Custom Steel Fence Installation Ontario | VAH Construction",
    description:
      "Custom powder-coated steel fencing fabricated to your specifications. 40+ year lifespan, zero maintenance. Niagara Region, Hamilton, Burlington, Oakville.",
    url: "https://www.vahconstruction.com/services/custom-steel-fence",
  },
};

const faqs = [
  {
    q: "What is a custom steel fence?",
    a: "A custom steel fence is fabricated to the specific dimensions, design, and finish of each installation rather than being assembled from standard off-the-shelf components. VAH Construction fabricates fence panels, posts, and gates to your property's exact specifications.",
  },
  {
    q: "Does VAH Construction fabricate fence panels in-house?",
    a: "Yes. VAH Construction custom-fabricates steel fence panels and components to the specific design and dimensions of each project. This allows any profile, height, spacing, and configuration to be produced.",
  },
  {
    q: "What grades of steel are used for fencing?",
    a: "VAH Construction uses structural steel tube and flat bar in appropriate gauges for each application — heavier gauge for posts and structural elements, appropriate gauge for infill panels. All steel receives a phosphate wash and primer before powder coating for maximum corrosion resistance.",
  },
  {
    q: "How are steel fence posts installed?",
    a: "VAH Construction installs steel fence posts set in concrete footings below the frost line — critical for Ontario's freeze-thaw conditions. Post depth is determined by height, soil conditions, and wind exposure. All posts are structural steel or heavy-gauge square tube.",
  },
  {
    q: "Can a custom steel fence match my existing metal roofing?",
    a: "Yes. VAH Construction can match powder coat colours precisely between your steel fence and any existing metal roofing or cladding. This creates a cohesive exterior aesthetic across both the roof and the property boundary.",
  },
  {
    q: "How long does a custom steel fence installation take?",
    a: "Most residential custom steel fence projects are completed within 5–10 business days from installation start, depending on linear footage and design complexity. Post setting, curing, and panel installation are typically completed in separate phases.",
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

export default function CustomSteelFencePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <PageHero
          label="Custom Steel Fence Installation"
          headline="Built to Your Spec."
          headlineAccent="Built to Last."
          subheadline="Custom-fabricated powder-coated steel fencing for Ontario properties. Every panel, post, and gate made to your exact dimensions and design. Zero off-the-shelf components."
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Custom Steel Fence" }]}
          ctaLabel="Get a Custom Quote"
          ctaHref="/contact"
        />

        {/* What makes custom */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Custom Fabrication</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                  No Catalogue Limitations.
                </h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                  <p>
                    Off-the-shelf fencing forces your property to conform to standard panel widths, heights, and profiles. Custom fabrication means the fence conforms to your property — any height, any width, any slope, any design element.
                  </p>
                  <p>
                    VAH Construction fabricates every component of every fence we install. This means we can build a fence that follows your grade changes precisely, matches the exact spacing of an architectural drawing, incorporates custom decorative elements, and uses panel sizes that work with your property&apos;s specific geometry.
                  </p>
                  <p>
                    The result is a fence that looks designed — because it was, specifically for your property.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Custom Panel Dimensions", body: "Any width, height, and spacing. No standard panel constraints." },
                  { title: "Grade & Slope Accommodation", body: "Stair-stepped or raked panel configurations to follow any terrain." },
                  { title: "Integrated Gate Systems", body: "Custom-welded swing and sliding gates in matching profiles and finishes." },
                  { title: "Decorative Metalwork", body: "Laser-cut patterns, welded accents, and custom decorative elements available." },
                  { title: "Matching Powder Coat", body: "Precise colour matching to existing metalwork, roofing, or specified RAL colours." },
                  { title: "Deep-Set Concrete Footings", body: "All posts set below Ontario's frost line — permanent structural installation." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-amber-500">
                        <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-0.5">{item.title}</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Materials</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Steel & Aluminum Options.</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Structural Steel",
                  body: "Mild steel in tube, flat bar, and angle sections. Phosphate washed, primed, and powder coated for maximum corrosion resistance. The strongest and most weldable option — preferred for custom decorative work and heavy structural applications.",
                  pros: ["Maximum strength", "Weldable for decorative detail", "Cost-effective", "Powder coat compatible"],
                },
                {
                  title: "Aluminum",
                  body: "Extruded aluminum profiles in hollow tube and solid sections. Inherently corrosion-resistant even without coating. Preferred for coastal or high-humidity environments and for lightweight applications where post spacing is wide.",
                  pros: ["Inherent corrosion resistance", "Lightweight", "No rust even if scratched", "Premium option"],
                },
              ].map((mat) => (
                <div key={mat.title} className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <h3 className="text-white font-bold text-lg mb-3">{mat.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-5">{mat.body}</p>
                  <ul className="space-y-2">
                    {mat.pros.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-neutral-400">
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-amber-500">
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Custom Steel Fencing</span>
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
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">Free Quote</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
              Get a Custom Steel Fence Quote.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Describe your project — dimensions, design, finish — and VAH Construction will provide a written, itemized quote. Same-day response.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-base transition-colors"
                style={{ boxShadow: "0 0 30px rgba(217,119,6,0.2)" }}
              >
                Request a Custom Quote
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
