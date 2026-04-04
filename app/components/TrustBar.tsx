"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "50+",
    label: "Years Warranty",
    sub: "Non-prorated & fully transferable",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    value: "Class 4",
    label: "Hail Rating",
    sub: "Maximum impact resistance available",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.469 5.469 0 0112 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0122 15c0 1.65-1.35 3-3 3zm-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z" />
      </svg>
    ),
  },
  {
    value: "30+",
    label: "Cities Served",
    sub: "Hamilton, Kitchener, Muskoka & beyond",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
  },
  {
    value: "20+",
    label: "Years Experience",
    sub: "Metal roofing specialists since day one",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function TrustBar() {
  return (
    <section className="bg-[#0e0e0e] border-y border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 lg:py-14">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={item}
              className={`flex flex-col items-center text-center ${
                i < 3 ? "lg:border-r lg:border-neutral-800/60" : ""
              } lg:px-4`}
            >
              <div className="text-amber-500 mb-3">{s.icon}</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-0.5">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-white/90 mb-1">{s.label}</div>
              <div className="text-xs text-neutral-500 leading-snug">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
