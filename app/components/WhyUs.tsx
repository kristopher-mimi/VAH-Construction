"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Safety First. Always.",
    description:
      "Every crew member uses proper tie-offs on steep-pitch roofs. No exceptions. We hold ourselves to the highest safety standards so your project runs without incident — and your property is protected throughout.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Uncompromising Quality",
    description:
      "We partner exclusively with leading Canadian metal roofing manufacturers. Every install follows current industry techniques and is executed by trained specialists — not generalist roofers who dabble in metal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Efficient Execution",
    description:
      "We plan every project before we arrive. Materials are staged, crews are briefed, and work starts on the committed date. We move with purpose — delivering on schedule without cutting corners.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Spotless Cleanup",
    description:
      "We do a magnetic sweep for fasteners, haul away every scrap of material, and do a final walkthrough with you before we leave. You'll never find our mess in your yard the next morning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12z" />
      </svg>
    ),
  },
];

const additionalPoints = [
  "No subcontracting — your roof is installed by our own crew",
  "Transparent written quotes with zero hidden charges",
  "Full WSIB coverage + $5M liability insurance",
  "Direct communication — no call centers, no runaround",
  "We specialize in metal only — depth over breadth",
  "Lifetime warranty is non-prorated and fully transferable",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
            Why VAH Construction
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.08]">
            We Know How to Make
            <br />
            <span className="text-amber-500">Our Clients Happy.</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Our business was built on a single principle: if you chose a different path —
            one built on quality, honesty, and craftsmanship — everything else follows.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 mb-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group bg-[#111111] border border-neutral-800 hover:border-amber-500/30 rounded-lg p-7 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-300">
                  {p.icon}
                </div>
                <div>
                  <div className="text-amber-500/50 text-xs font-bold tracking-widest mb-1">{p.number}</div>
                  <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional points + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-10 items-center bg-[#111111] border border-neutral-800 rounded-lg p-8 lg:p-10"
        >
          <div>
            <h3 className="text-white font-bold text-xl mb-5">More reasons homeowners choose VAH:</h3>
            <ul className="space-y-3">
              {additionalPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-sm text-neutral-400">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-neutral-400 text-sm leading-relaxed">
              Ready to talk to someone who actually knows metal roofing? We answer our
              phones and respond to emails the same day.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 px-7 rounded-sm transition-colors duration-200"
            >
              Request a Free Quote
            </a>
            <a
              href="tel:+14372473371"
              className="inline-flex items-center justify-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              (437) 247-3371 — call us directly
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
