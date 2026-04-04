"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  label: string;
  headline: string;
  headlineAccent?: string;
  subheadline: string;
  breadcrumbs?: Crumb[];
  ctaLabel?: string;
  ctaHref?: string;
  size?: "default" | "large";
}

export default function PageHero({
  label,
  headline,
  headlineAccent,
  subheadline,
  breadcrumbs,
  ctaLabel,
  ctaHref = "#contact-section",
  size = "default",
}: PageHeroProps) {
  return (
    <section
      className={`relative bg-neutral-950 overflow-hidden flex items-end ${
        size === "large" ? "min-h-[70vh]" : "min-h-[52vh]"
      }`}
    >
      {/* Background photo */}
      <Image
        src="/images/hero/5965F2DB-0262-4966-9379-092C7E6DA345_1_105_c.jpeg"
        alt=""
        fill
        className="object-cover object-center"
        priority
        quality={85}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-neutral-950/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent" />

      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-amber-500/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pb-16 pt-36 lg:pb-20 lg:pt-40">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs text-neutral-600 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-neutral-400 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {crumb.href && i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-neutral-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-neutral-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block"
        >
          {label}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`font-extrabold text-white tracking-tight leading-[1.06] mb-5 ${
            size === "large"
              ? "text-5xl sm:text-6xl lg:text-7xl"
              : "text-4xl sm:text-5xl lg:text-[58px]"
          }`}
        >
          {headline}
          {headlineAccent && (
            <>
              <br />
              <span className="text-amber-500">{headlineAccent}</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-neutral-400 text-lg leading-relaxed max-w-2xl mb-8"
        >
          {subheadline}
        </motion.p>

        {ctaLabel && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.26 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3.5 rounded-sm text-sm transition-colors duration-200"
            >
              {ctaLabel}
            </Link>
            <a
              href="tel:+14372473371"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-3.5 rounded-sm border border-white/15 hover:border-white/30 transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              (437) 247-3371
            </a>
          </motion.div>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
    </section>
  );
}
