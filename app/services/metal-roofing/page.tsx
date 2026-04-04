"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABanner from "@/app/components/CTABanner";

const systems = [
  {
    title: "Standing Seam Metal Roofing",
    badge: "Most Specified",
    image: "/images/services/1F0A9C32-2383-4B3B-84F3-6E6839994207_1_105_c.jpeg",
    imageAlt: "Standing seam metal roofing — aerial close-up of panel system",
    imagePosition: "object-top",
    desc: "The benchmark of commercial and residential metal roofing. Panels run continuously from ridge to eave, connected by raised interlocking seams. All fasteners are hidden beneath the panels — no exposed screws, no exposed penetrations, no potential leak points.",
    details: [
      "Panels expand and contract freely with temperature swings — no fastener fatigue",
      "Available in Galvalume, Kynar-coated steel, and aluminum",
      "Compatible with solar panel mounting systems",
      "Ideal for pitches from 1:12 to 20:12",
      "Available in 12\" to 18\" panel widths",
    ],
    ideal: "Modern homes, high-pitch roofs, architectural statements, premium builds",
  },
  {
    title: "Metal Tile Systems",
    badge: "Class 4 Hail",
    image: "/images/services/F88A833F-F30B-4477-941C-F6D159B8199E_1_105_c.jpeg",
    imageAlt: "Metal tile roofing — aerial view of completed residential installation",
    imagePosition: "object-top",
    desc: "Engineered steel shingles that combine the traditional aesthetics of architectural shingles with the performance of metal. Each panel interlocks with adjacent panels for a watertight system rated for the harshest conditions in Southern Ontario.",
    details: [
      "Class 4 impact rating — highest hail resistance available",
      "Class A fire rating",
      "Energy Star certified for solar reflectance",
      "Galvanized steel with factory-baked Kynar coating",
      "Aluminum and stone-coated steel options available",
    ],
    ideal: "Traditional home styles, heritage properties, residential upgrades from asphalt",
  },
];

const warrantyItems = [
  {
    title: "Lifetime Coverage",
    desc: "The warranty covers your roof for the life of the structure — with no deductible and no expiry date.",
  },
  {
    title: "Non-Prorated",
    desc: "Unlike most warranties that pay a smaller percentage as time passes, ours pays 100% of covered costs at year 1 and year 50.",
  },
  {
    title: "Fully Transferable",
    desc: "When you sell your home, the warranty transfers to the new owner — a documented, valuable asset at sale time.",
  },
  {
    title: "Workmanship Included",
    desc: "Beyond the manufacturer's product warranty, VAH's own workmanship warranty covers our installation for 15 years.",
  },
];

const faq = [
  {
    q: "How long does a metal roof actually last?",
    a: "Standing seam metal roofing has a documented service life of 50–70+ years. The metal itself doesn't deteriorate the way organic roofing materials do — no cracking, no granule loss, no organic decay.",
  },
  {
    q: "Is metal roofing noisy in rain?",
    a: "No. Properly installed metal roofing with standard attic insulation and decking is no louder than asphalt — often quieter. The \"noise\" concern comes from metal installed over open framing without solid decking, which is not how we install.",
  },
  {
    q: "Will a metal roof increase my home insurance?",
    a: "In most cases, yes — in the form of a discount. Many insurers reduce premiums for Class 4 impact-rated and Class A fire-rated metal roofing. Contact your insurer before and after installation.",
  },
  {
    q: "Can metal roofing be installed in winter?",
    a: "Yes. Metal installation is not temperature-dependent the way asphalt shingle installation is. We work year-round across Southern Ontario.",
  },
  {
    q: "Does metal roofing attract lightning?",
    a: "No more than any other roofing material. Metal is non-combustible, so if lightning were to strike, it would not ignite. Most lightning protection professionals actually recommend metal roofing.",
  },
  {
    q: "What happens to the cost difference vs. asphalt over time?",
    a: "A quality metal roof costs more upfront but eliminates 2–3 asphalt replacements over the same period. When you factor in lifecycle cost — including tear-off, disposal, and labour — metal is typically less expensive over 40+ years.",
  },
];

export default function MetalRoofingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Metal Roofing Systems"
          headline="The Last Roof"
          headlineAccent="You'll Ever Need."
          subheadline="Standing seam and metal tiles — installed by specialists who understand metal's unique properties, expansion characteristics, and the Ontario climate it has to survive."
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Metal Roofing" }]}
          ctaLabel="Get a Metal Roofing Quote"
          ctaHref="/contact"
          size="large"
        />

        {/* Systems */}
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
                Systems We Install
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Three Systems. One Standard of Craft.
              </h2>
            </motion.div>

            <div className="space-y-5">
              {systems.map((sys, i) => (
                <motion.div
                  key={sys.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="bg-[#111111] border border-neutral-800 hover:border-neutral-700 rounded-lg overflow-hidden transition-colors"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image — full height on desktop, fixed height on mobile */}
                    <div className="relative h-56 lg:h-auto lg:w-[320px] xl:w-[380px] flex-shrink-0 overflow-hidden">
                      <Image
                        src={sys.image}
                        alt={sys.imageAlt}
                        fill
                        className={`object-cover ${sys.imagePosition}`}
                        sizes="(max-width: 1024px) 100vw, 380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/25 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          {sys.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col lg:flex-row gap-8 p-8 flex-1">
                      <div className="lg:w-2/5">
                        <h3 className="text-xl font-extrabold text-white mb-3">{sys.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">{sys.desc}</p>
                        <div className="bg-neutral-800/40 rounded-sm px-4 py-3">
                          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-1">
                            Ideal for:
                          </span>
                          <span className="text-sm text-neutral-300">{sys.ideal}</span>
                        </div>
                      </div>
                      <div className="lg:w-3/5">
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">
                          Key specifications
                        </h4>
                        <ul className="space-y-3">
                          {sys.details.map((d) => (
                            <li key={d} className="flex items-start gap-3 text-sm text-neutral-400">
                              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0">
                                <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                              </svg>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Metal Tile Colour Options */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45 }}
              className="mt-14 bg-[#111111] border border-neutral-800 rounded-lg p-8"
            >
              <div className="mb-6">
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-2 block">
                  Metal Tile Colours
                </span>
                <h3 className="text-xl font-extrabold text-white">Available Colour Options</h3>
                <p className="text-neutral-500 text-sm mt-1">Factory-applied Kynar coating — colour is permanent and does not fade, chip, or require repainting.</p>
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
            </motion.div>
          </div>
        </section>

        {/* Ontario climate callout */}
        <section className="bg-[#0e0e0e] border-y border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                  Built for This Climate
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
                  Southern Ontario
                  <br />
                  Demands More.
                </h2>
                <p className="text-neutral-400 text-base leading-relaxed mb-4">
                  The Niagara Region and surrounding areas experience some of the most
                  demanding roofing conditions in Canada: heavy freeze-thaw cycles, ice
                  dams, Great Lakes-effect snow loads, spring hail, and summer heat.
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Asphalt shingles were designed for moderate climates. They crack in cold,
                  soften in heat, and deteriorate under freeze-thaw stress. Metal roofing was
                  designed for exactly these conditions — and our Class 4 hail rating is the
                  highest available, not an upgrade tier.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: "Class 4", label: "Hail Impact Rating", note: "Maximum available" },
                  { value: "Class A", label: "Fire Resistance", note: "Highest fire rating" },
                  { value: "250 km/h", label: "Wind Resistance", note: "Hurricane-rated" },
                  { value: "−40°C", label: "Cold Tolerance", note: "Designed for Canadian winters" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#141414] border border-neutral-800 rounded-lg p-5 text-center">
                    <div className="text-2xl font-extrabold text-amber-500 mb-1">{stat.value}</div>
                    <div className="text-white text-xs font-semibold mb-0.5">{stat.label}</div>
                    <div className="text-neutral-600 text-xs">{stat.note}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Warranty */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="text-center mb-12"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Our Warranty
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                What &ldquo;Lifetime Warranty&rdquo; Actually Means.
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {warrantyItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-[#111111] border border-neutral-800 rounded-lg p-6"
                >
                  <div className="w-8 h-8 rounded-sm bg-amber-500/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vendors */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="text-center mb-12"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Our Material Partners
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                World-Class Steel. Nothing Less.
              </h2>
              <p className="text-neutral-400 text-base max-w-2xl mx-auto leading-relaxed">
                To ensure top quality for our customers, we source exclusively from the world&apos;s leading steel manufacturers. The material behind your roof is as important as the installation.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  name: "Ruukki",
                  origin: "Finland",
                  logo: "/images/services/ruukki.png",
                  accent: "#E3501A",
                  scale: 1.4,
                  translateY: "0%",
                  desc: "Europe's leading steel solutions company. Ruukki's Pural and Purex coatings set the standard for durability in the world's harshest climates.",
                },
                {
                  name: "ThyssenKrupp",
                  origin: "Germany",
                  logo: "/images/services/thyssenkrupp.png",
                  accent: "#0099CC",
                  scale: 3.0,
                  translateY: "0%",
                  desc: "200+ years of industrial engineering heritage. ThyssenKrupp's coated flat steel is the benchmark for dimensional precision and coating adhesion.",
                },
                {
                  name: "ArcelorMittal",
                  origin: "Belgium / Global",
                  logo: "/images/services/ArcelorMital.png",
                  accent: "#F47920",
                  scale: 1.3,
                  translateY: "-10%",
                  desc: "The world's largest steel producer. ArcelorMittal's Magnelis® and Granite coatings deliver corrosion resistance that outlasts the building itself.",
                },
              ].map((vendor, i) => (
                <motion.div
                  key={vendor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="rounded-lg overflow-hidden flex flex-col"
                  style={{ border: `1px solid ${vendor.accent}55` }}
                >
                  {/* Logo area — white bg */}
                  <div className="bg-white flex items-center justify-center overflow-hidden" style={{ height: "160px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={vendor.logo}
                      alt={vendor.name}
                      className="object-contain"
                      style={{ width: "70%", height: "70%", transform: `scale(${vendor.scale}) translateY(${vendor.translateY})` }}
                    />
                  </div>
                  {/* Brand color bar */}
                  <div className="h-[3px]" style={{ backgroundColor: vendor.accent }} />
                  {/* Content */}
                  <div className="bg-[#111111] p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold text-sm">{vendor.name}</span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                        style={{ color: vendor.accent, borderColor: `${vendor.accent}40`, backgroundColor: `${vendor.accent}15` }}
                      >
                        {vendor.origin}
                      </span>
                    </div>
                    <p className="text-neutral-500 text-xs leading-relaxed">{vendor.desc}</p>
                  </div>
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
              className="mb-12"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Common Questions
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Metal Roofing FAQ
              </h2>
            </motion.div>

            <div className="space-y-px">
              {faq.map((item, i) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-[#111111] border border-neutral-800/60 rounded-sm first:rounded-t-lg last:rounded-b-lg p-6"
                >
                  <h3 className="text-white font-bold text-sm mb-2.5">{item.q}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Ready to Invest in Your Last Roof?"
          subtext="Get a detailed quote for a standing seam or metal tile system. We'll specify the right product for your home and budget."
          primaryLabel="Get a Free Metal Roofing Quote"
          primaryHref="/contact"
          variant="gold"
        />
      </main>
      <Footer />
    </>
  );
}
