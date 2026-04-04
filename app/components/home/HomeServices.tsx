"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    href: "/services/metal-roofing",
    label: "Core Specialty",
    title: "Metal Roofing",
    desc: "Standing seam and metal tiles. The only roofing material that genuinely lasts a lifetime — and we back that with a warranty to prove it.",
    specs: ["Standing Seam", "Metal Tiles", "50-Year Non-Prorated Warranty"],
    image: "/images/services/1F0A9C32-2383-4B3B-84F3-6E6839994207_1_105_c.jpeg",
    imageAlt: "Standing seam metal roofing — aerial close-up of panel system",
    imagePosition: "object-top",
    accent: true,
  },
  {
    href: "/services/metal-siding",
    label: "Exterior Cladding",
    title: "Metal Siding",
    desc: "Board and batten, horizontal lap, and corrugated panel — Kynar-coated steel and aluminum siding with a 40-year finish warranty. Coordinate your full exterior with your roof.",
    specs: ["Board & Batten", "Horizontal Lap Siding", "Soffit & Fascia Systems"],
    image: "/images/projects/77639C71-E973-4DFC-AC01-AA56931526CF_1_102_o.jpeg",
    imageAlt: "Metal siding installation — Etobicoke, ON",
    imagePosition: "object-[50%_37%]",
    accent: false,
  },
  {
    href: "/services/metal-fences",
    label: "Custom Fabrication",
    title: "Metal Fences",
    desc: "Powder-coated steel and aluminum fencing built to your exact dimensions and colour. Horizontal privacy panels, vertical picket, ornamental — zero maintenance, 50+ year lifespan.",
    specs: ["Custom Powder-Coat Colour", "Posts Set Below Frost Line", "Gates & Hardware Available"],
    image: "/images/projects/3EDB244D-24FF-4503-B02F-0D77DBCBE3D8.png",
    imageAlt: "Custom horizontal metal fence with powder-coated steel posts",
    imagePosition: "object-center",
    accent: false,
  },
  {
    href: "/services/roof-replacement",
    label: "Full Replacement",
    title: "Roof Replacement",
    desc: "Complete tear-off and installation. When repair isn't enough, we replace with a system engineered to outlast every other option available in Southern Ontario.",
    specs: ["Full Tear-off & Disposal", "Premium Metal Systems", "15+ Year Workmanship Warranty"],
    image: "/images/projects/F88A833F-F30B-4477-941C-F6D159B8199E_1_105_c.jpeg",
    imageAlt: "VAH crew installing metal roofing on residential property",
    imagePosition: "object-top",
    accent: false,
  },
];

export default function HomeServices() {
  return (
    <section className="bg-neutral-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.06]">
              Roofing Services Built
              <br />
              for Southern Ontario.
            </h2>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-amber-400 font-semibold transition-colors"
          >
            View all services
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative flex flex-col rounded-lg border overflow-hidden transition-all duration-300 cursor-pointer ${
                s.accent
                  ? "bg-amber-500/5 border-amber-500/30 hover:border-amber-500/60"
                  : "bg-[#111111] border-neutral-800 hover:border-neutral-700"
              }`}
            >
              <Link href={s.href} className="absolute inset-0 z-10" aria-label={s.title} />
              {/* Photo header */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className={`object-cover ${s.imagePosition} transition-transform duration-700 group-hover:scale-105`}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {s.accent && (
                  <div className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase bg-amber-500 text-black px-2.5 py-1 rounded-full">
                    Specialty
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3 block">
                  {s.label}
                </span>
                <h3 className="text-xl font-extrabold text-white mb-3">{s.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">{s.desc}</p>

                <ul className="space-y-2 mb-8 mt-auto">
                  {s.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2.5 text-xs text-neutral-400">
                      <span className="w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>

                <span
                  className={`relative z-20 inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 group-hover:gap-3 ${
                    s.accent ? "text-amber-500" : "text-white/70 group-hover:text-amber-400"
                  }`}
                >
                  Learn more
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                    <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
