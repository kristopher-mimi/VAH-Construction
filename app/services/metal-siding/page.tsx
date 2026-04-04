"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABanner from "@/app/components/CTABanner";

const profiles = [
  {
    title: "Board & Batten",
    badge: "Most Popular",
    desc: "Vertical steel or aluminum panels with raised batten strips covering the seams. Board and batten delivers a clean, architectural profile that reads as premium on both contemporary builds and farmhouse-style properties. Concealed fasteners throughout — no exposed screws on the face.",
    specs: [
      "Available in 12\", 16\", and 24\" board widths",
      "Concealed fastener system — no face screws",
      "Compatible with rainscreen and direct-attach installation",
      "Available in Galvalume, Kynar-coated steel, and aluminum",
      "Ideal for full cladding, accent walls, and gable ends",
    ],
    ideal: "Modern farmhouses, contemporary custom builds, full exterior cladding",
  },
  {
    title: "Horizontal Lap Siding",
    badge: "Classic Profile",
    desc: "The most widely specified metal siding profile in Ontario. Horizontal steel panels engineered to replicate the look of traditional lap siding with none of the maintenance. The interlocking panel system creates a continuous weathertight barrier from foundation to soffit.",
    specs: [
      "Interlocking panel design — no exposed seams",
      "Available in 4\", 6\", and 8\" reveal widths",
      "Class A fire rating and Class 4 impact resistance",
      "Factory-applied Kynar 500 coating with 40-year fade warranty",
      "Compatible with full wrap including corners and trim",
    ],
    ideal: "Residential full exterior, re-cladding over existing siding, heritage-adjacent properties",
  },
  {
    title: "Corrugated & Ribbed Panel",
    badge: "Agricultural & Commercial",
    desc: "Exposed-fastener corrugated and standing-rib steel panels for agricultural buildings, commercial exteriors, shop buildings, and accent applications. High-gauge Galvalume steel with exceptional structural rigidity — the most cost-effective metal cladding available.",
    specs: [
      "Available in 26 and 29 gauge Galvalume steel",
      "Standard corrugated and R-panel (PBR) profiles available",
      "Painted and Galvalume finish options",
      "Compatible with insulated wall assemblies",
      "Suitable for agricultural, commercial, and industrial use",
    ],
    ideal: "Agricultural buildings, commercial warehouses, shop buildings, accent cladding",
  },
  {
    title: "Soffit & Fascia Systems",
    badge: "Complete Envelope",
    desc: "Coordinated metal soffit and fascia profiles to complete the exterior envelope. Vented and solid soffit panels in steel and aluminum, finished to match your siding or roofing system — a detail that separates a complete installation from a partial one.",
    specs: [
      "Vented and solid panel options available",
      "Available in steel and aluminum",
      "Matches board and batten and horizontal lap colour palettes",
      "Compatible with all standard rafter tail and rafter-less fascia conditions",
      "Integrated J-channel and F-channel trim system",
    ],
    ideal: "Full exterior envelope projects, new builds, re-cladding with new soffit and fascia",
  },
];

const benefits = [
  {
    title: "50+ Year Service Life",
    desc: "Kynar-coated steel and aluminum siding does not rot, warp, crack, or absorb moisture. With proper installation, service life exceeds 50 years — significantly outlasting fiber cement, wood, and vinyl alternatives.",
  },
  {
    title: "Zero Maintenance",
    desc: "No painting, no staining, no sealing. The factory-applied Kynar 500 coating is self-cleaning in rain and UV-stable across the full colour range. Rinse with a garden hose if needed — that is the full maintenance requirement.",
  },
  {
    title: "Class A Fire Rated",
    desc: "Metal siding is non-combustible. It does not contribute fuel to a fire, does not melt at typical house-fire temperatures, and is specified by insurance companies as the highest-rated exterior cladding available.",
  },
  {
    title: "Class 4 Impact Rated",
    desc: "The same impact rating applied to our roofing systems. Steel siding meets the UL 2218 Class 4 standard — the highest hail resistance rating available — and qualifies for insurance premium reductions in most Ontario policies.",
  },
  {
    title: "Breathable Wall Assembly",
    desc: "Properly installed metal siding with a rainscreen gap allows the wall assembly to dry in both directions. This eliminates the moisture trapping that causes rot and mold behind vinyl and fiber cement cladding.",
  },
  {
    title: "Coordinated with Your Roof",
    desc: "We supply siding and roofing from the same manufacturer colour palettes. Your board and batten can be colour-matched or intentionally contrasted with your standing seam or metal tile roof — specified as a single cohesive project.",
  },
];

const faq = [
  {
    q: "Can metal siding be installed over my existing siding?",
    a: "In most cases, yes. Metal siding can be installed over existing wood, vinyl, or fiber cement siding provided the substrate is structurally sound. A rainscreen strapping system is typically installed first to create a drainage plane and improve thermal performance.",
  },
  {
    q: "Is metal siding noisy in rain or hail?",
    a: "No more than any other cladding material when installed correctly with insulation and a solid sheathing substrate. The concern about noise applies primarily to uninsulated agricultural metal — not to properly assembled residential wall systems.",
  },
  {
    q: "What colours are available?",
    a: "We work with the full Kynar 500 colour palette from leading Canadian manufacturers. Standard colours include matte black, charcoal, slate, bronze, cream, barn red, and patina green, among others. Custom colour matching is available on larger projects.",
  },
  {
    q: "Can I mix metal siding with other cladding materials?",
    a: "Yes. Many of our projects use board and batten as an accent — gable ends, lower courses, or specific elevations — paired with another cladding material on the remainder. We detail the transitions to be watertight and visually intentional.",
  },
  {
    q: "Do you provide a quote remotely?",
    a: "Yes. We measure wall areas remotely using satellite and aerial imagery in most cases, and can produce a detailed written quote without a site visit. Send us your address and the elevations you're looking to clad.",
  },
];

export default function MetalSidingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Metal Siding"
          headline="Exterior Cladding That"
          headlineAccent="Never Needs Replacing."
          subheadline="Board and batten, horizontal lap, corrugated panel — steel and aluminum siding systems installed to the same standard as our metal roofing. Zero maintenance. Decades of performance."
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Metal Siding" }]}
          ctaLabel="Get a Siding Quote"
          ctaHref="/contact"
          size="large"
        />

        {/* Intro */}
        <section className="bg-neutral-950 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">
                  Why Metal Siding
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  The Exterior Your Home Was Designed to Have.
                </h2>
                <div className="space-y-4 text-neutral-400 text-sm leading-relaxed">
                  <p>
                    Vinyl siding degrades under UV exposure and becomes brittle in cold. Wood siding demands continuous maintenance and eventually rots. Fiber cement performs adequately for a decade before paint failure and moisture infiltration begin. None of these materials were engineered to last the life of the building.
                  </p>
                  <p>
                    Metal siding — Kynar-coated steel and aluminum — was. The same material logic that makes standing seam the definitive roofing choice applies directly to exterior wall cladding. It does not rot, crack, warp, or require repainting. It holds its colour. It sheds water. It resists fire and impact.
                  </p>
                  <p>
                    We install coordinated roofing and siding systems from the same manufacturer colour palettes, allowing you to specify the full exterior envelope as a single project — designed to look intentional and perform together for decades.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="relative rounded-lg overflow-hidden"
              >
                <div className="relative h-[360px] sm:h-[460px] lg:h-[520px]">
                  <Image
                    src="/images/projects/6A9842B0-A4CA-4F85-A7DB-44F08B174E17_1_105_c.jpeg"
                    alt="Metal siding installation — VAH Construction"
                    fill
                    className="object-cover object-left"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-white/80 font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      Metal Siding — VAH Construction
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Specs table below */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800/40 rounded-lg overflow-hidden"
            >
              {[
                { label: "Fire Rating", value: "Class A" },
                { label: "Impact Rating", value: "Class 4" },
                { label: "Finish Warranty", value: "40 Years" },
                { label: "Service Life", value: "50+ Years" },
              ].map((s) => (
                <div key={s.label} className="bg-[#111111] px-6 py-5 text-center">
                  <div className="text-white font-extrabold text-xl mb-1">{s.value}</div>
                  <div className="text-neutral-500 text-xs uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Profiles */}
        <section className="bg-[#0e0e0e] border-y border-neutral-800/60 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="max-w-xl mb-14"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Profiles We Install
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Four Systems. One Standard of Installation.
              </h2>
            </motion.div>

            <div className="space-y-4">
              {profiles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-[#111111] border border-neutral-800 hover:border-neutral-700 rounded-lg overflow-hidden transition-colors"
                >
                  <div className="flex flex-col lg:flex-row gap-8 p-8">
                    <div className="lg:w-2/5">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/25 px-2.5 py-1 rounded-full">
                          {p.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-white mb-3">{p.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                      <div className="bg-neutral-800/40 rounded-sm px-4 py-3">
                        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
                          Ideal for:
                        </span>
                        <span className="text-sm text-neutral-300">{p.ideal}</span>
                      </div>
                    </div>
                    <div className="lg:w-3/5">
                      <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">
                        Key specifications
                      </h4>
                      <ul className="space-y-3">
                        {p.specs.map((s) => (
                          <li key={s} className="flex items-start gap-3 text-sm text-neutral-400">
                            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0">
                              <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                            </svg>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-neutral-950 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="max-w-xl mb-14"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Why Metal
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Built to Outperform Every Alternative.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="bg-[#111111] border border-neutral-800 rounded-lg p-6"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mb-4" />
                  <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="mb-10"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Common Questions
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Metal Siding FAQs.
              </h2>
            </motion.div>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-[#111111] border border-neutral-800/60 rounded-sm p-5"
                >
                  <h3 className="text-white font-bold text-sm mb-2">{item.q}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Get a Free Metal Siding Quote"
          subtext="We measure remotely and deliver a detailed written quote by email — board and batten, horizontal lap, or full envelope. No site visit required."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
