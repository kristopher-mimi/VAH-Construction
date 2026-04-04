"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950">

      {/* Full-bleed background photo */}
      <Image
        src="/images/hero/5965F2DB-0262-4966-9379-092C7E6DA345_1_105_c.jpeg"
        alt="VAH Construction — standing seam metal roofing on custom home"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Layered overlay — heavier at bottom for text legibility */}
      <div className="absolute inset-0 bg-neutral-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-neutral-950 to-transparent" />

      {/* Left edge accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-amber-500 to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full py-36 lg:py-0">
        <div className="max-w-3xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2.5 border border-amber-500/30 bg-black/30 backdrop-blur-sm rounded-full px-4 py-1.5 mb-7"
          >
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-[0.12em] uppercase">
              Southern Ontario&apos;s Metal Roofing Specialists
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold text-white leading-[1.04] tracking-tight mb-6"
          >
            Built to Last.
            <br />
            <span className="text-amber-500">Backed for Life.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-xl"
          >
            We install standing seam metal roofing, metal tiles,
            metal siding, and custom fencing across Ontario — every roof covered by a{" "}
            <span className="text-white font-semibold">
              50-year, non-prorated, transferable warranty.
            </span>
          </motion.p>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {[
              { label: "50+ Year Warranty", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" },
              { label: "Class 4 Hail Rating", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" },
              { label: "Fully Insured", icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" },
            ].map((pill) => (
              <motion.div
                key={pill.label}
                whileHover={{ y: -3, scale: 1.04, borderColor: "rgba(217,119,6,0.6)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="flex items-center gap-2 bg-black/40 border border-white/15 backdrop-blur-sm px-4 py-2 rounded-full cursor-default"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-amber-500 flex-shrink-0">
                  <path d={pill.icon} />
                </svg>
                <span className="text-white/90 text-xs font-medium">{pill.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03, boxShadow: "0 0 50px rgba(217,119,6,0.5)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center gap-2.5 bg-amber-500 text-black font-bold text-base px-8 py-4 rounded-sm"
              style={{ boxShadow: "0 0 30px rgba(217,119,6,0.3)" }}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Get a Free Quote
            </motion.a>
            <motion.a
              href="tel:+14372473371"
              whileHover={{ scale: 1.03, borderColor: "rgba(255,255,255,0.4)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center gap-2.5 text-white font-bold text-base px-8 py-4 rounded-sm border border-white/20 bg-black/20 backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              (437) 247-3371
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
