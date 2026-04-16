"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const comparisons = [
  {
    wood: "Lasts 10–15 years before rotting",
    metal: "50+ year lifespan — no rot, ever",
  },
  {
    wood: "Needs staining or painting every 1–3 years",
    metal: "Zero maintenance — no paint, no sealing",
  },
  {
    wood: "Posts warp, lean, and heave with frost",
    metal: "Metal-clad posts in concrete — stays plumb forever",
  },
  {
    wood: "Termites, ants, and fungi destroy it from inside",
    metal: "No organic material — nothing for pests to touch",
  },
  {
    wood: "Cracks, splinters, turns grey in UV",
    metal: "Powder coat holds colour through decades of weather",
  },
  {
    wood: "You replace it every decade — $8,000–$12,000 each time",
    metal: "One investment. Done.",
  },
];

const styles = [
  {
    title: "Horizontal Privacy Panel",
    desc: "Full privacy at grade. Horizontal metal slats with controlled spacing give you a completely modern profile — clean, bold, and permanently sharp.",
    ideal: "Residential backyards, pool enclosures, modern homes",
  },
  {
    title: "Vertical Picket",
    desc: "A classic profile for front yards and driveway borders. Spacing is customized per project — from nearly open to near-privacy.",
    ideal: "Front yards, driveway borders, traditional homes",
  },
  {
    title: "Ornamental & Decorative",
    desc: "Custom profiles, cap details, and ornamental toppers. Fabricated to your specification, finished in any powder-coat colour.",
    ideal: "Luxury properties, heritage homes, commercial frontages",
  },
  {
    title: "Commercial & Industrial",
    desc: "High-gauge steel systems for commercial lots, secure perimeters, and industrial properties. Built for structural performance.",
    ideal: "Commercial properties, warehouses, secure perimeters",
  },
];

const faq = [
  {
    q: "How long does a metal fence actually last?",
    a: "50+ years in normal residential conditions. The steel is galvanized before powder coating — two layers of corrosion protection. In most cases, you will not need to replace or refinish this fence in your lifetime.",
  },
  {
    q: "What does it cost compared to a wood fence?",
    a: "Metal fencing typically costs 25–35% more upfront than pressure-treated wood. But a wood fence needs replacing every 10–15 years at $8,000–$12,000 each time. Over 50 years, wood costs 3–4x more in total. Metal is the cheaper option — it just doesn't look like it on day one.",
  },
  {
    q: "Do you install gates as well?",
    a: "Yes. Single and double swing gates, sliding gates, and pedestrian gates are all available as part of any fence installation. Hardware and locking mechanisms are matched to the fence system.",
  },
  {
    q: "What are the posts made of?",
    a: "Posts are either solid steel or structural wood wrapped in powder-coated metal cladding — both set in concrete footings below the frost line (minimum 48 inches in Southern Ontario). The metal cladding protects the post from moisture, UV, and frost regardless of what's underneath. The result looks identical and performs the same.",
  },
  {
    q: "Can I get a quote without a site visit?",
    a: "In most cases, yes. We can produce an accurate quote from your property dimensions — you can send a sketch, measurements, or a site plan by email and we'll work from that.",
  },
];

export default function MetalFencesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-neutral-950">

        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <Image
            src="/images/projects/3EDB244D-24FF-4503-B02F-0D77DBCBE3D8.png"
            alt="Custom metal fence by VAH Construction"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-amber-500/60 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pb-20 pt-44">
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs text-neutral-600 mb-6"
            >
              <Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-neutral-400 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-neutral-400">Metal Fences</span>
            </motion.nav>

            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block"
            >
              Metal Fencing · Southern Ontario
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.04] mb-6 max-w-4xl"
            >
              Stop Replacing
              <br />
              <span className="text-amber-500">The Same Fence</span>
              <br />
              Every 12 Years.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-300 text-xl leading-relaxed max-w-2xl mb-10"
            >
              Wood fences are the most expensive option — they just don't look like it on day one.
              Powder-coated metal is built once and lasts a lifetime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-sm transition-colors duration-200"
              >
                Get a Free Fence Quote
              </Link>
              <Link
                href="/projects?category=Metal+Fence"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-4 rounded-sm border border-white/15 hover:border-white/30 transition-colors duration-200"
              >
                View Fence Projects
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="tel:+14372473371"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-4 rounded-sm border border-white/15 hover:border-white/30 transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                (437) 247-3371
              </a>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
        </section>

        {/* THE MATH SECTION */}
        <section className="bg-neutral-950 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">
                  The Real Cost of Wood
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  You've Already Paid for a Metal Fence.
                  <br />
                  <span className="text-neutral-500">You Just Don't Have One.</span>
                </h2>
                <p className="text-neutral-400 text-base leading-relaxed mb-6">
                  The average homeowner installs a wood fence for $7,000–$10,000.
                  It looks great for 3–4 years. By year 8 it's grey, warped, and leaning.
                  By year 12–15, it's gone — and they do it all over again.
                </p>
                <p className="text-neutral-300 text-base leading-relaxed mb-8">
                  Over 50 years, that's <span className="text-white font-bold">$25,000–$40,000</span> spent on the same fence, replaced 3–4 times.
                  A metal fence costs 30% more upfront — and <span className="text-white font-bold">nothing after that.</span>
                </p>

                {/* Cost comparison boxes */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#111111] border border-neutral-800 rounded-lg p-5">
                    <div className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-2">Wood Fence</div>
                    <div className="text-white text-2xl font-extrabold mb-1">$8–10k</div>
                    <div className="text-neutral-600 text-xs">every 10–15 years</div>
                    <div className="mt-3 text-red-400 text-xs font-semibold">× 3–4 replacements over 50 yrs</div>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/40 rounded-lg p-5">
                    <div className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2">Metal Fence</div>
                    <div className="text-white text-2xl font-extrabold mb-1">~30% more</div>
                    <div className="text-neutral-400 text-xs">one time, upfront</div>
                    <div className="mt-3 text-amber-400 text-xs font-semibold">Zero replacements. 50+ year life.</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="space-y-3"
              >
                <div className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-5">Why wood loses. Every time.</div>
                {[
                  { icon: "💧", issue: "Moisture", text: "Wood absorbs water. It swells, warps, and rots from the inside out — starting at the posts, where you can't see it." },
                  { icon: "🐛", issue: "Pests", text: "Termites and carpenter ants don't touch metal. Wood gives them exactly what they need: organic material, moisture, darkness." },
                  { icon: "❄️", issue: "Frost Heave", text: "Wooden posts shift every freeze-thaw cycle. Over years, every post leans a little more — until the whole fence is crooked." },
                  { icon: "☀️", issue: "UV Degradation", text: "Sun bleaches wood grey within 2 years. The only fix is paint or stain — every 1–3 years, forever." },
                  { icon: "🔧", issue: "Constant Upkeep", text: "Nails pop. Boards split. Sections fall. A wood fence demands annual attention just to stay presentable." },
                ].map((item, i) => (
                  <motion.div
                    key={item.issue}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex gap-4 bg-[#111111] border border-neutral-800 rounded-lg p-4"
                  >
                    <span className="text-xl mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-white font-bold text-sm mb-1">{item.issue}</div>
                      <div className="text-neutral-500 text-xs leading-relaxed">{item.text}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* HEAD-TO-HEAD COMPARISON TABLE */}
        <section className="bg-[#0a0a0a] border-y border-neutral-800/60 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="text-center mb-14"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Side by Side
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Wood Fence vs. Metal Fence.
              </h2>
              <p className="text-neutral-500 mt-4 text-sm max-w-xl mx-auto">
                The comparison homeowners don't see until after they've replaced a wood fence twice.
              </p>
            </motion.div>

            {/* Table header */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-neutral-900 rounded-lg px-5 py-3 text-center">
                <span className="text-neutral-400 text-xs font-bold uppercase tracking-wider">Wood Fence</span>
              </div>
              <div className="bg-amber-500/15 border border-amber-500/30 rounded-lg px-5 py-3 text-center">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Metal Fence</span>
              </div>
            </div>

            <div className="space-y-2">
              {comparisons.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="grid grid-cols-2 gap-3"
                >
                  <div className="bg-[#111] border border-neutral-800 rounded-lg px-5 py-4 flex items-center gap-3">
                    <span className="text-red-500/60 text-sm flex-shrink-0">✕</span>
                    <span className="text-neutral-500 text-sm">{row.wood}</span>
                  </div>
                  <div className="bg-[#0f110a] border border-amber-500/20 rounded-lg px-5 py-4 flex items-center gap-3">
                    <span className="text-amber-500 text-sm flex-shrink-0">✓</span>
                    <span className="text-neutral-200 text-sm font-medium">{row.metal}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="bg-neutral-950 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl mb-14"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                What You Get
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Custom Fabricated.
                <br />
                Built for Your Property.
              </h2>
              <p className="text-neutral-400 text-sm mt-5 leading-relaxed">
                No stock panels. No adapters. Every fence is fabricated to your exact dimensions,
                post spacing, and style — then finished in any powder-coat colour you choose.
              </p>
            </motion.div>

            {/* Style reference */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="mb-12 rounded-lg overflow-hidden bg-white"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/projects/fencetemplate.png"
                alt="Metal fence style options — VAH Construction"
                className="w-full h-auto block"
                style={{ maxHeight: "500px", objectFit: "contain", objectPosition: "center" }}
              />
              <div className="bg-[#111111] border-t border-neutral-800 px-5 py-4">
                <span className="text-sm text-neutral-200 font-semibold">
                  Available fence profiles — all custom fabricated in powder-coated steel &amp; aluminum
                </span>
              </div>
            </motion.div>

            <div className="space-y-4 mb-16">
              {styles.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="bg-[#111111] border border-neutral-800 hover:border-amber-500/30 rounded-lg p-7 transition-colors duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-1/3">
                      <h3 className="text-white font-extrabold text-lg mb-3">{s.title}</h3>
                      <div className="bg-neutral-800/40 rounded-sm px-3 py-2 inline-block">
                        <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider block mb-0.5">Ideal for</span>
                        <span className="text-xs text-neutral-300">{s.ideal}</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed lg:w-2/3">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { src: "/images/projects/3EDB244D-24FF-4503-B02F-0D77DBCBE3D8.png", alt: "Horizontal metal privacy fence" },
                { src: "/images/projects/Aluminum-Fence-5-1536x1152.webp", alt: "Aluminum perimeter fence" },
                { src: "/images/projects/zabor-galuzy.jpg", alt: "Decorative steel fence" },
                { src: "/images/projects/fence.jpg", alt: "Vertical picket metal fence" },
                { src: "/images/projects/Дизайн без названия (17).png", alt: "Custom metal panel fence" },
                { src: "/images/projects/fence6.jpg", alt: "Metal fence installation" },
                { src: "/images/projects/fence7.jpg", alt: "Metal fence installation" },
                { src: "/images/projects/fence9.jpg", alt: "Metal fence installation" },
                { src: "/images/projects/fence10.jpg", alt: "Metal fence installation" },
              ].map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="relative h-52 lg:h-64 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-300" />
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
                Straight Answers.
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

        {/* FINAL CTA */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">
                Ready to Stop Replacing It?
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Get a Quote.
                <br />
                <span className="text-amber-500">Install It Once.</span>
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
                Tell us your property dimensions and the fence style you're looking for.
                We'll produce an accurate written quote — no site visit required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-sm transition-colors duration-200"
                >
                  Request a Free Quote
                </Link>
                <a
                  href="tel:+14372473371"
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-4 rounded-sm border border-white/15 hover:border-white/30 transition-colors duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  (437) 247-3371
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
