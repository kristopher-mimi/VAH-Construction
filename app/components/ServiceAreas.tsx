"use client";

import { motion } from "framer-motion";

const areas = [
  "Hamilton",
  "St. Catharines",
  "Niagara Falls",
  "Kitchener",
  "Cambridge",
  "Guelph",
  "Brantford",
  "Burlington",
  "Oakville",
  "Mississauga",
  "Muskoka",
];

export default function ServiceAreas() {
  return (
    <section className="bg-[#0e0e0e] border-t border-neutral-800/60 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16"
        >
          <div className="flex-shrink-0">
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-2 block">
              Where We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Serving Southern Ontario
            </h2>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {areas.map((area) => (
              <span
                key={area}
                className="text-sm text-neutral-300 bg-neutral-800/50 hover:bg-amber-500/10 hover:text-amber-400 hover:border-amber-500/30 border border-neutral-700/60 px-3.5 py-1.5 rounded-full transition-colors duration-200 cursor-default"
              >
                {area}
              </span>
            ))}
            <span className="text-sm text-neutral-500 border border-dashed border-neutral-700 px-3.5 py-1.5 rounded-full">
              + more — we&apos;re flexible
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
