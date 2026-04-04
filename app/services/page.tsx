"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABanner from "@/app/components/CTABanner";

const services = [
  {
    href: "/services/metal-roofing",
    image: "/images/services/1F0A9C32-2383-4B3B-84F3-6E6839994207_1_105_c.jpeg",
    imagePosition: "object-top",
    label: "Our Core Specialty",
    title: "Metal Roofing",
    intro:
      "The most durable, most weather-resistant roofing system available in Canada. We install three distinct metal roofing systems — each with a lifetime, non-prorated warranty.",
    systems: [
      {
        name: "Standing Seam",
        desc: "Concealed fastener panels that run continuously from ridge to eave. No exposed hardware, no penetrations through the metal surface — making it the least leak-prone roofing system ever engineered.",
      },
      {
        name: "Metal Tiles",
        desc: "Steel shingles engineered to achieve a Class 4 hail rating and Class A fire rating while maintaining the traditional aesthetic of architectural shingles.",
      },
    ],
    cta: "Explore Metal Roofing",
  },
  {
    href: "/services/metal-fences",
    image: "/images/projects/3EDB244D-24FF-4503-B02F-0D77DBCBE3D8.png",
    imagePosition: "object-center",
    label: "Custom Fabrication",
    title: "Metal Fences",
    intro:
      "Powder-coated steel and aluminum fencing — custom fabricated to your exact dimensions, finished in any colour, and built to the same standard as our roofing systems. No maintenance. No replacement.",
    systems: [
      {
        name: "Horizontal Privacy Panel",
        desc: "Our most popular residential style. Horizontal steel slats with custom spacing deliver privacy and a clean modern profile. Posts set below frost line in concrete footings.",
      },
      {
        name: "Vertical Picket",
        desc: "A classic profile for front yards, driveway borders, and properties where curb appeal and visibility are priorities. Fully custom fabricated in your chosen colour.",
      },
      {
        name: "Gates & Hardware",
        desc: "Single swing, double swing, and sliding gates — all fabricated to match your fence system with appropriate locking hardware and post reinforcement.",
      },
    ],
    cta: "Explore Metal Fencing",
  },
  {
    href: "/services/metal-siding",
    image: "/images/projects/77639C71-E973-4DFC-AC01-AA56931526CF_1_102_o.jpeg",
    imagePosition: "object-[50%_37%]",
    label: "Exterior Cladding",
    title: "Metal Siding",
    intro:
      "Kynar-coated steel and aluminum siding systems — board and batten, horizontal lap, corrugated panel, and soffit & fascia. Zero maintenance, Class A fire rating, coordinated with your roofing system.",
    systems: [
      {
        name: "Board & Batten",
        desc: "Vertical steel or aluminum panels with raised batten strips. Concealed fastener system throughout — no exposed screws. Available in 12\", 16\", and 24\" board widths.",
      },
      {
        name: "Horizontal Lap",
        desc: "Interlocking horizontal panels in 4\", 6\", and 8\" reveal widths. Class 4 impact rating and Class A fire rating. Factory Kynar 500 coating with a 40-year fade warranty.",
      },
      {
        name: "Soffit & Fascia",
        desc: "Coordinated metal soffit and fascia to complete the full exterior envelope. Vented and solid panel options, matched to your siding or roofing colour.",
      },
    ],
    cta: "Explore Metal Siding",
  },
  {
    href: "/services/roof-replacement",
    image: "/images/projects/F88A833F-F30B-4477-941C-F6D159B8199E_1_105_c.jpeg",
    imagePosition: "object-top",
    label: "Full Replacement",
    title: "Roof Replacement",
    intro:
      "When the roof has reached end of life — or when repair costs are compounding — a complete replacement with a modern metal system is the most cost-effective long-term solution.",
    systems: [
      {
        name: "Full Tear-Off",
        desc: "We remove all existing layers down to the deck, inspect for damage, and repair or reinforce the substrate before installing the new system.",
      },
      {
        name: "New System Installation",
        desc: "Your selected metal roofing system is installed to manufacturer specifications with proper ventilation, ice-and-water membrane protection, and all trims and flashing.",
      },
      {
        name: "Cleanup & Warranty",
        desc: "Complete debris removal including a magnetic sweep for fasteners. Final walkthrough with your written workmanship warranty documentation.",
      },
    ],
    cta: "Learn About Replacement",
  },
];

const whySpecialize = [
  {
    title: "Depth of Knowledge",
    desc: "Specialists understand the unique expansion properties, fastening requirements, and weatherproofing details of metal in a way that generalist roofers don't.",
  },
  {
    title: "Better Supplier Relationships",
    desc: "Because we only buy metal products, we have direct relationships with leading Canadian manufacturers — and access to materials that others can't source.",
  },
  {
    title: "Every Problem Solved Correctly",
    desc: "When metal is your only product, you learn to do it exactly right. We've seen every failure mode and built our installation process to prevent all of them.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="What We Do"
          headline="Metal Systems"
          headlineAccent="Built to Last Generations."
          subheadline="VAH Construction specializes in metal roofing, siding, and fencing — standing seam, metal tiles, board and batten siding, and powder-coated steel fences — because metal simply outperforms every alternative available to Ontario homeowners."
          breadcrumbs={[{ label: "Services" }]}
          ctaLabel="Get a Free Quote"
          ctaHref="/contact"
        />

        {/* Services deep-dive */}
        <section className="bg-neutral-950 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-6">
            {services.map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#111111] border border-neutral-800 rounded-lg overflow-hidden"
              >
                {/* Card header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-8 border-b border-neutral-800/60">
                  <div className="max-w-xl">
                    <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2 block">
                      {s.label}
                    </span>
                    <h2 className="text-2xl font-extrabold text-white mb-3">{s.title}</h2>
                    <p className="text-neutral-400 text-sm leading-relaxed">{s.intro}</p>
                  </div>
                  {/* Thumbnail */}
                  <div className="relative w-full lg:w-56 h-40 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className={`object-cover ${s.imagePosition}`}
                      sizes="(max-width: 1024px) 100vw, 224px"
                    />
                  </div>
                  <Link
                    href={s.href}
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black font-bold text-sm px-5 py-3 rounded-sm border border-amber-500/30 hover:border-amber-500 transition-all duration-200"
                  >
                    {s.cta}
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
                    </svg>
                  </Link>
                </div>

                {/* Sub-services */}
                <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800/60">
                  {s.systems.map((sys) => (
                    <div key={sys.name} className="p-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mb-3" />
                      <h4 className="text-white font-bold text-sm mb-2">{sys.name}</h4>
                      <p className="text-neutral-500 text-xs leading-relaxed">{sys.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why specialize */}
        <section className="bg-[#0e0e0e] border-y border-neutral-800/60 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="max-w-xl mb-12"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Why We Specialize
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                We Only Do Metal.
                <br />
                That&apos;s Not a Limitation.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whySpecialize.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="bg-[#141414] border border-neutral-800 rounded-lg p-6"
                >
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Not sure which service you need?"
          subtext="Call us or send a message — we'll ask a few questions and point you in the right direction. No sales pressure."
          primaryLabel="Talk to a Specialist"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
