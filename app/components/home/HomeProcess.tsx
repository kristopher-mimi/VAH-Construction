"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Remote Roof Measurement",
    body: "We measure 99% of roofs using satellite technology — no site visit required. This gives us exact dimensions, pitch, and surface area, allowing us to produce a precise quote without delay.",
  },
  {
    n: "02",
    title: "Written Quote",
    body: "A clear, itemized written quote with no hidden fees. We explain what system we recommend, why, and what the installation involves — so you can make an informed decision.",
  },
  {
    n: "03",
    title: "Scheduled Installation",
    body: "We commit to a start date and stick to it. Your materials are pre-ordered, the crew is briefed, and safety equipment is staged before we arrive.",
  },
  {
    n: "04",
    title: "Final Walkthrough",
    body: "Before we leave your property, a senior installer walks the roof with you, reviews the work, handles any last details, and confirms your warranty documentation.",
  },
];

export default function HomeProcess() {
  return (
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
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            From First Call to Final Roof.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800/40 rounded-lg overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="bg-[#0e0e0e] p-8 hover:bg-[#131313] transition-colors group"
            >
              <div className="text-5xl font-black text-neutral-800 group-hover:text-amber-500/20 transition-colors mb-5 leading-none">
                {step.n}
              </div>
              <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
