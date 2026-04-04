"use client";

import { motion, type Variants } from "framer-motion";

const services = [
  {
    title: "Standing Seam Roofing",
    badge: "Most Popular",
    description:
      "The gold standard of metal roofing. Concealed fasteners, continuous panels from ridge to eave — no exposed screws, no leaks, no compromises. Built to handle Southern Ontario winters for 70+ years.",
    features: [
      "Concealed fastener system",
      "Zero exposed screws or clips",
      "Superior wind & snow resistance",
      "Lifetime manufacturer warranty",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.092 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
      </svg>
    ),
  },
  {
    title: "Metal Tiles",
    badge: "Class 4 Hail",
    description:
      "All the curb appeal of traditional tile. All the strength of steel. Our metal tile systems achieve Class 4 hail ratings and fire resistance, with a fraction of the maintenance of asphalt.",
    features: [
      "Class 4 hail impact rating",
      "Fire-resistant construction",
      "Energy Star certified options",
      "Traditional aesthetics, modern strength",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Metal Fences",
    badge: null,
    description:
      "Custom-fabricated metal fencing to complement your home's exterior. Durable, low-maintenance, and built with the same attention to craft as every VAH roofing project.",
    features: [
      "Custom design & fabrication",
      "Powder-coated finish options",
      "Complements metal roofing systems",
      "Zero-rot, zero-warp construction",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
      </svg>
    ),
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};
const card: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
            What We Install
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.08]">
            Metal Roofing Systems
            <br />
            Built for Ontario.
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            We specialize exclusively in metal — no asphalt, no shortcuts. Every
            system we install is designed to outlast every other option on the market.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={card}
              className="group relative bg-[#111111] hover:bg-[#161616] border border-neutral-800 hover:border-amber-500/35 rounded-lg p-6 transition-all duration-300 flex flex-col cursor-default"
            >
              {/* Badge */}
              {s.badge && (
                <span className="absolute top-4 right-4 text-[9px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/25 px-2 py-0.5 rounded-full">
                  {s.badge}
                </span>
              )}

              {/* Icon */}
              <div className="text-amber-500 mb-4 transition-transform duration-300 group-hover:scale-110 w-fit">
                {s.icon}
              </div>

              <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-5">{s.description}</p>

              <ul className="space-y-2 mt-auto mb-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-neutral-400">
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0">
                      <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-amber-500 hover:text-amber-400 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
              >
                Get a Quote
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
