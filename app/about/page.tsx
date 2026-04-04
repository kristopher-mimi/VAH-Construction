"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABanner from "@/app/components/CTABanner";
import { SERVICE_AREAS } from "@/lib/constants";

const pillars = [
  {
    n: "01",
    title: "Safety",
    desc: "Every crew member uses proper tie-offs on every steep-pitch roof. No exceptions, no shortcuts. We hold ourselves to the highest site safety standards — because an incident on your property is a failure on our part, not just theirs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Quality",
    desc: "We partner with leading Canadian metal roofing manufacturers. Every installation follows current techniques and is executed by trained specialists — not generalists who occasionally install metal roofing between asphalt jobs.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Efficiency",
    desc: "We plan every project before we arrive. Materials are pre-ordered, the crew is briefed, and site access is confirmed. We work strategically to complete projects on schedule — not by cutting corners, but by eliminating waste.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Clean Up",
    desc: "We perform a magnetic sweep for fasteners after every job. Every scrap of material is removed from your property. A final walkthrough is completed with the client before we leave. You will not find our mess the morning after we finish.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z" />
      </svg>
    ),
  },
];

const differentiators = [
  {
    title: "We specialize. We don't generalize.",
    body: "VAH was built around metal — roofing, siding, and fencing. We don't offer asphalt, flat roofing, or general contracting as sidelines. Metal exterior systems are all we do — and that focus is the source of everything we do well.",
  },
  {
    title: "We built this business on a different premise.",
    body: "The roofing industry is dominated by companies that move fast, use the cheapest compliant materials, and hand out limited warranties knowing most customers won't invoke them. We built VAH on the premise that the opposite approach — slower, more careful, higher quality — would build a better business. It has.",
  },
  {
    title: "We're honest about what you need.",
    body: "If we review your roof and conclude that repair is the right answer, we'll tell you — even if replacement would be more profitable for us. Long-term client relationships are built on that kind of honesty, and those relationships are how we've grown.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="About VAH Construction"
          headline="A Different Kind"
          headlineAccent="of Roofing Company."
          subheadline="Based in Smithville, Ontario. Built on the belief that homeowners deserve a roofing contractor who tells them the truth, shows up when they say they will, and stands behind their work unconditionally."
          breadcrumbs={[{ label: "About" }]}
          ctaLabel="Work With Us"
          ctaHref="/contact"
        />

        {/* Our Story */}
        <section className="bg-neutral-950 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7"
              >
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-7">
                  We Chose a Different Path.
                </h2>
                <div className="space-y-4 text-neutral-400 text-base leading-relaxed">
                  <p>
                    VAH Construction was founded to address something the roofing industry in
                    Southern Ontario was getting consistently wrong: homeowners were being
                    handed short-lived products, opaque contracts, and warranties structured
                    to avoid being useful.
                  </p>
                  <p>
                    We recognized that the solution wasn&apos;t to compete in the same race —
                    faster installs, lower margins, next-best materials. The solution was to
                    build a company that explicitly chose the higher-cost path: better
                    materials, longer installation time, specialists rather than generalists,
                    and a warranty we&apos;re proud to hand over.
                  </p>
                  <p>
                    That decision led us to specialize exclusively in metal roofing.
                    Aluminum shingles have been protecting homes since 1948. Standing seam
                    metal has been the material of choice for commercial and premium
                    residential projects for decades. The evidence is undeniable — metal
                    simply outperforms every alternative available to Southern Ontario
                    homeowners.
                  </p>
                  <p>
                    We operate out of Smithville, Ontario and regularly work across Hamilton,
                    St. Catharines, Niagara Falls, Kitchener, Cambridge, Guelph, Brantford,
                    Burlington, Oakville, Mississauga, Muskoka, and surrounding areas. We&apos;re
                    flexible — for the right project, we&apos;ll go further.
                    Every project — regardless of size — is approached with the same standard:
                    the one that would earn the confidence of a client we&apos;d like to
                    keep for life.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:col-span-5 space-y-4"
              >
                {/* Company in action photo */}
                <div className="relative h-52 rounded-lg overflow-hidden">
                  <Image
                    src="/images/projects/04C26CF2-F48B-4832-BA14-59DB0D2F1564_1_105_c.jpeg"
                    alt="VAH Construction — crew and equipment on site in Southern Ontario"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs text-white/80 font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      Smithville, Ontario
                    </span>
                  </div>
                </div>

                <div className="bg-[#111111] border border-amber-500/20 rounded-lg p-6">
                  <div className="text-amber-500 font-extrabold text-4xl mb-1">Smithville</div>
                  <div className="text-neutral-400 text-sm mb-3">Ontario — Head Office</div>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    We&apos;re a Southern Ontario business. Our crew lives in the same
                    communities we work in. That accountability matters to us.
                  </p>
                </div>

                <div className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <div className="text-white font-extrabold text-2xl mb-1">Metal Only</div>
                  <div className="text-amber-500 text-sm font-semibold mb-3">Our Commitment</div>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    We don&apos;t install asphalt. We don&apos;t offer flat roofing or
                    general contracting. Metal exterior systems — roofing, siding, and fencing — are our entire business — and that
                    focus is the reason we do it better.
                  </p>
                </div>

                <div className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <div className="text-white font-extrabold text-2xl mb-1">50+ Years</div>
                  <div className="text-amber-500 text-sm font-semibold mb-3">Non-Prorated Warranty</div>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Our warranty is non-prorated and fully transferable.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The 4 Pillars */}
        <section className="bg-[#0e0e0e] border-y border-neutral-800/60 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="text-center mb-14 max-w-xl mx-auto"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Four Principles. Every Project.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                  className="bg-[#141414] border border-neutral-800 rounded-lg p-6 hover:border-amber-500/25 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-sm bg-amber-500/10 group-hover:bg-amber-500 border border-amber-500/20 group-hover:border-amber-500 flex items-center justify-center text-amber-500 group-hover:text-black transition-all duration-300 mb-4">
                    {p.icon}
                  </div>
                  <div className="text-neutral-700 text-xs font-bold tracking-widest mb-1">{p.n}</div>
                  <h3 className="text-white font-bold mb-2">{p.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What makes us different */}
        <section className="bg-neutral-950 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="max-w-xl mb-12"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                What Makes Us Different
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                It&apos;s a Philosophy, Not a Pitch.
              </h2>
            </motion.div>

            <div className="space-y-4">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="bg-[#111111] border border-neutral-800 rounded-lg p-7 flex gap-6"
                >
                  <div className="text-3xl font-black text-neutral-800 leading-none flex-shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">{d.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{d.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45 }}
              className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14"
            >
              <div className="flex-shrink-0">
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-2 block">
                  Where We Work
                </span>
                <h2 className="text-2xl font-extrabold text-white">Southern Ontario & Beyond</h2>
                <p className="text-neutral-500 text-sm mt-2 max-w-xs">
                  We&apos;re flexible — we regularly travel across Ontario for metal roofing projects and will go further for the right job. Not on the list? Reach out anyway.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="text-sm text-neutral-300 bg-neutral-800/50 border border-neutral-700/50 px-3.5 py-1.5 rounded-full"
                  >
                    {area}
                  </span>
                ))}
                <span className="text-sm text-neutral-600 border border-dashed border-neutral-700 px-3.5 py-1.5 rounded-full">
                  + more
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <CTABanner
          headline="Ready to Work With Us?"
          subtext="Request a free quote. We measure remotely using satellite technology and deliver a detailed, written quote by email — no site visit required, no obligation."
          primaryLabel="Get a Free Quote"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
