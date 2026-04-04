"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  variant?: "default" | "dark" | "gold";
}

export default function CTABanner({
  headline = "Ready to Get a Free Quote?",
  subtext = "Speak with a metal roofing specialist. No pressure, no obligation — just honest advice.",
  primaryLabel = "Request a Free Quote",
  primaryHref = "/contact",
  variant = "default",
}: CTABannerProps) {
  const bg =
    variant === "gold"
      ? "bg-amber-500"
      : variant === "dark"
      ? "bg-[#0e0e0e] border-y border-neutral-800/60"
      : "bg-[#111111] border-y border-neutral-800/60";

  const textColor = variant === "gold" ? "text-black" : "text-white";
  const subColor = variant === "gold" ? "text-black/70" : "text-neutral-400";
  const btnClass =
    variant === "gold"
      ? "bg-black hover:bg-neutral-900 text-white"
      : "bg-amber-500 hover:bg-amber-400 text-black";
  const secondaryClass =
    variant === "gold"
      ? "border border-black/20 text-black hover:bg-black/10"
      : "border border-white/15 text-white hover:border-white/30";

  return (
    <section className={`${bg} py-14 lg:py-16`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45 }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <h2 className={`text-2xl sm:text-3xl font-extrabold ${textColor} tracking-tight mb-2`}>
              {headline}
            </h2>
            <p className={`${subColor} text-base leading-relaxed`}>{subtext}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href={primaryHref}
              className={`inline-flex items-center justify-center gap-2 ${btnClass} font-bold px-7 py-3.5 rounded-sm text-sm transition-colors duration-200`}
            >
              {primaryLabel}
            </Link>
            <a
              href="tel:+14372473371"
              className={`inline-flex items-center justify-center gap-2 ${secondaryClass} font-semibold px-7 py-3.5 rounded-sm text-sm transition-colors duration-200`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 ${variant === "gold" ? "" : "text-amber-500"}`}>
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              (437) 247-3371
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
