"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const comparisons = [
  { label: "Lifespan", metal: "50–70 years", asphalt: "15–20 years" },
  { label: "Maintenance", metal: "Near zero", asphalt: "Regular resealing" },
  { label: "Warranty", metal: "50+ years", asphalt: "Limited prorated" },
  { label: "Hail Resistance", metal: "Class 4 (Maximum)", asphalt: "Class 1–2" },
  { label: "Fire Rating", metal: "Class A", asphalt: "Class C" },
  { label: "Energy Efficiency", metal: "Reflects solar heat", asphalt: "Absorbs heat" },

];

export default function HomeWhyMetal() {
  return (
    <section className="bg-neutral-950 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
              Metal vs. Asphalt
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.06] mb-5">
              Why We Only
              <br />
              <span className="text-amber-500">Install Metal.</span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              We chose to specialize entirely in metal because the data is clear: metal
              roofing outperforms asphalt on every metric that matters to a homeowner.
              Lifespan, weather resistance, energy efficiency, and long-term value.
            </p>
            <p className="text-neutral-500 text-base leading-relaxed mb-8">
              The average Southern Ontario homeowner replaces an asphalt roof 3–4 times
              in their lifetime. A VAH metal roof installed today may outlast the house.
              When you factor in lifetime cost, metal wins — and our warranty proves we
              stand behind that.
            </p>
            <Link
              href="/services/metal-roofing"
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-bold text-sm transition-colors group"
            >
              Explore metal roofing systems
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
              </svg>
            </Link>
          </motion.div>

          {/* Right: comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="bg-[#111111] border border-neutral-800 rounded-lg overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-3 border-b border-neutral-800">
                <div className="px-4 py-3 text-xs font-bold text-neutral-600 uppercase tracking-wider" />
                <div className="px-4 py-3 text-xs font-bold text-amber-500 uppercase tracking-wider text-center border-l border-neutral-800">
                  Metal Roof
                </div>
                <div className="px-4 py-3 text-xs font-bold text-neutral-500 uppercase tracking-wider text-center border-l border-neutral-800">
                  Asphalt
                </div>
              </div>

              {comparisons.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 border-b border-neutral-800/60 last:border-0 ${
                    i % 2 === 0 ? "" : "bg-white/[0.015]"
                  }`}
                >
                  <div className="px-4 py-3.5 text-xs font-semibold text-neutral-400">
                    {row.label}
                  </div>
                  <div className="px-4 py-3.5 text-xs text-amber-400 font-medium text-center border-l border-neutral-800/60">
                    {row.metal}
                  </div>
                  <div className="px-4 py-3.5 text-xs text-neutral-600 text-center border-l border-neutral-800/60">
                    {row.asphalt}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
