"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    src: "/images/projects/F925D882-1DBE-44F3-B990-68554A328A6C_1_201_a.jpeg",
    alt: "Standing seam metal roof — VAH Construction project",
    position: "object-center",
    large: true,
  },
  {
    src: "/images/projects/5965F2DB-0262-4966-9379-092C7E6DA345_1_105_c.jpeg",
    alt: "Contemporary standing seam roofline — Southern Ontario",
    position: "object-top",
    large: false,
  },
  {
    src: "/images/projects/2F08072E-E307-4A65-A595-37D076267522_1_105_c.jpeg",
    alt: "Custom metal roof by VAH Construction",
    position: "object-top",
    large: false,
  },
  {
    src: "/images/projects/F88A833F-F30B-4477-941C-F6D159B8199E_1_105_c.jpeg",
    alt: "Heritage district chocolate brown metal tile roof — Guelph, ON",
    position: "object-top",
    large: false,
  },
  {
    src: "/images/projects/3EDB244D-24FF-4503-B02F-0D77DBCBE3D8.png",
    alt: "Custom horizontal metal privacy fence — VAH Construction",
    position: "object-center",
    large: false,
  },
];

export default function HomeFeaturedWork() {
  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
              Recent Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.06]">
              Projects Completed
              <br />
              Across the Region.
            </h2>
          </motion.div>
          <Link
            href="/projects"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-amber-400 font-semibold transition-colors pb-1"
          >
            View all projects
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
            </svg>
          </Link>
        </div>

        {/* Photo grid — editorial layout */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">

          {/* Large left — spans 2 rows on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="relative col-span-2 lg:col-span-1 lg:row-span-2 group rounded-lg overflow-hidden"
            style={{ minHeight: "320px" }}
          >
            <div className="relative h-72 lg:h-full lg:min-h-[500px] overflow-hidden rounded-lg">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                className={`object-cover ${photos[0].position} transition-transform duration-700 group-hover:scale-105`}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Three smaller images on the right */}
          {photos.slice(1).map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.08 }}
              className="group relative rounded-lg overflow-hidden"
            >
              <div className="relative h-48 lg:h-60 overflow-hidden rounded-lg">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`object-cover ${photo.position} transition-transform duration-700 group-hover:scale-105`}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 22vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800/60 pt-8"
        >
          <p className="text-neutral-500 text-sm">
            250+ completed projects across Southern Ontario — standing seam, metal tiles, siding, and custom fencing.
          </p>
          <Link
            href="/projects"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
          >
            See Full Portfolio
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
