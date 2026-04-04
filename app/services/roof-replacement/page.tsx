"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABanner from "@/app/components/CTABanner";

const signs = [
  {
    title: "Age over 20 years",
    desc: "Asphalt shingles have a practical lifespan of 15–20 years in Ontario's climate. If your roof is approaching or past this age, replacement is almost always more economical than ongoing repair.",
  },
  {
    title: "Multiple leak sources",
    desc: "A single isolated leak is typically a repair. Multiple leaks, or leaks recurring after previous repairs, indicate a system-wide failure that only replacement will resolve.",
  },
  {
    title: "Granule loss & bare patches",
    desc: "When asphalt shingles lose their granule coating, the underlying substrate is exposed to UV and moisture. Once this degradation begins, it accelerates rapidly.",
  },
  {
    title: "Sagging deck or soft spots",
    desc: "If the decking beneath the shingles is soft, bouncy, or visibly sagging, there is likely long-term water infiltration damaging the structural substrate.",
  },
  {
    title: "Interior moisture or staining",
    desc: "Water stains on ceilings, mold in the attic, or frost on roof sheathing in winter are signs of active moisture infiltration that requires immediate assessment.",
  },
  {
    title: "Failed previous repairs",
    desc: "If repairs have been made in the last two years and the same areas are leaking again, the problem is the system — not the repair technique.",
  },
];

const processSteps = [
  {
    n: "01",
    title: "Remote Measurement & Quote",
    body: "We measure your roof using satellite technology — precise dimensions, pitch, and surface area without a site visit. You receive a detailed written quote by email, typically within the same hour.",
  },
  {
    n: "02",
    title: "System Recommendation",
    body: "Based on your roof geometry, pitch, current structure, and budget, we recommend the appropriate metal system. We explain why we're recommending it — not just what the price is.",
  },
  {
    n: "03",
    title: "Full Tear-Off",
    body: "All existing materials are stripped to the decking. We inspect every sheet for rot, delamination, and fastener failure. Damaged sections are repaired or replaced before the new system goes on.",
  },
  {
    n: "04",
    title: "Waterproofing Membrane",
    body: "Ice-and-water shield is applied to eaves, valleys, and penetrations. This secondary barrier is what separates a professionally installed roof from a field-installed one.",
  },
  {
    n: "05",
    title: "Metal System Installation",
    body: "Your selected metal roofing system is installed to manufacturer specifications. Trims, flashing, ridge caps, and all penetration details are completed.",
  },
  {
    n: "06",
    title: "Cleanup & Walkthrough",
    body: "Complete site cleanup including magnetic sweep. Final walkthrough with a senior installer before we leave your property. Warranty documentation provided on completion.",
  },
];

const materials = [
  {
    name: "Galvalume Steel",
    note: "Industry standard",
    desc: "Zinc-aluminum coated steel. Outstanding corrosion resistance, excellent paint adhesion, and proven performance across Canadian climates.",
  },
  {
    name: "Kynar-Coated Steel",
    note: "Premium finish",
    desc: "Factory-applied PVDF coating with 25-year colour warranty. The coating used on commercial buildings and luxury residential projects.",
  },
  {
    name: "Aluminum",
    note: "Coastal & lakeside properties",
    desc: "Where salt air, lakeside moisture, or high humidity is a factor, aluminum is the appropriate choice — naturally corrosion-resistant with no coating required.",
  },
];

export default function RoofReplacementPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Roof Replacement"
          headline="Full Replacement."
          headlineAccent="Done Once. Done Right."
          subheadline="When your roof has reached the end of its service life, we replace it with a system engineered to genuinely last — not one that will need replacing again in 15 years."
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Roof Replacement" }]}
          ctaLabel="Get a Replacement Quote"
          ctaHref="/contact"
        />

        {/* Signs you need replacement */}
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
                When to Replace
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Six Signs Your Roof
                <br />
                Needs Replacement — Not Repair.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {signs.map((sign, i) => (
                <motion.div
                  key={sign.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="bg-[#111111] border border-neutral-800 rounded-lg p-6 hover:border-amber-500/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-black text-neutral-700 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-bold text-sm leading-tight">{sign.title}</h3>
                  </div>
                  <p className="text-neutral-500 text-xs leading-relaxed">{sign.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="text-neutral-600 text-sm mt-8 text-center"
            >
              Not sure if you need replacement or repair?{" "}
              <Link href="/contact" className="text-amber-500 hover:text-amber-400 transition-colors">
                Get a free remote quote — no visit needed.
              </Link>
            </motion.p>
          </div>
        </section>

        {/* Our process */}
        <section className="bg-[#0e0e0e] border-y border-neutral-800/60 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="text-center mb-14"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Every Step. No Shortcuts.
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connecting line — desktop */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-neutral-800/60 z-0" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.n}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="bg-[#0e0e0e] border border-neutral-800 rounded-lg p-6"
                  >
                    <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-black text-sm mb-4">
                      {step.n}
                    </div>
                    <h3 className="text-white font-bold mb-2 text-sm">{step.title}</h3>
                    <p className="text-neutral-500 text-xs leading-relaxed">{step.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="max-w-xl mb-10"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                What We Use
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Premium Canadian-Sourced Materials.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {materials.map((mat, i) => (
                <motion.div
                  key={mat.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.09 }}
                  className="bg-[#111111] border border-neutral-800 rounded-lg p-6"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-white font-bold text-sm">{mat.name}</h3>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                      {mat.note}
                    </span>
                  </div>
                  <p className="text-neutral-500 text-xs leading-relaxed">{mat.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#111111] border border-amber-500/20 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-amber-500/10 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-500">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm mb-1">
                  Lifetime Non-Prorated Warranty Included
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  All replacement projects come with a 50 years, fully transferable warranty on the roofing system — plus our own 15-year workmanship warranty on installation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          headline="Get a Free Roof Replacement Quote"
          subtext="We measure remotely using satellite technology and deliver a precise, written quote by email — no site visit required. Most quotes are returned within the same hour."
          primaryLabel="Request Your Assessment"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
