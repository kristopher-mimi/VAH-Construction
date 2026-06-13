"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" />
      </svg>
    ),
    title: "Metal Roofing",
    stat: 6,
    suffix: "%",
    prefix: "+",
    desc: "Average increase in home resale value",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M4 5h16v2H4V5zm0 4h16v2H4V9zm0 4h16v2H4v-2zm0 4h16v2H4v-2z" />
      </svg>
    ),
    title: "Metal Siding",
    stat: 4,
    suffix: "%",
    prefix: "+",
    desc: "Curb appeal and structural value added",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M3 3h2v18H3V3zm16 0h2v18h-2V3zM7 11h10v2H7v-2z" />
      </svg>
    ),
    title: "Metal Fencing",
    stat: 3,
    suffix: "%",
    prefix: "+",
    desc: "Property value uplift and buyer appeal",
  },
];

function CountUp({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function HomeValue() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] border-y border-neutral-800/60 py-16 lg:py-20 overflow-hidden relative"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(217,119,6,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">
            Investment Value
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.06]">
            Metal Upgrades
            <span className="text-amber-500"> Increase</span>
            <br />
            Your Home Value.
          </h2>
          <p className="text-neutral-400 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Every metal system we install adds measurable value to your property —
            documented at resale and recognized by insurers and appraisers across Ontario.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group bg-[#111111] border border-neutral-800 hover:border-amber-500/40 rounded-lg p-7 flex flex-col items-center text-center transition-all duration-300 cursor-default"
              whileHover={{ scale: 1.02 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-sm bg-amber-500/10 group-hover:bg-amber-500 border border-amber-500/20 group-hover:border-amber-500 flex items-center justify-center text-amber-500 group-hover:text-black transition-all duration-300 mb-5">
                {item.icon}
              </div>

              {/* Stat with glow ring on hover */}
              <div className="relative mb-1">
                <div className="text-5xl font-black text-amber-500 tracking-tight leading-none">
                  <CountUp target={item.stat} prefix={item.prefix} suffix={item.suffix} />
                </div>
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={{ opacity: [0, 0.15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
                  style={{
                    background: "radial-gradient(circle, rgba(217,119,6,0.6) 0%, transparent 70%)",
                    filter: "blur(8px)",
                  }}
                />
              </div>

              <div className="text-white font-bold text-lg mb-2">{item.title}</div>
              <div className="text-neutral-500 text-sm leading-snug">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="bg-amber-500/5 border border-amber-500/20 rounded-lg px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-neutral-300 text-sm sm:text-base font-medium text-center sm:text-left">
            A metal roof, siding, or fence is not just a home improvement —
            <span className="text-amber-400 font-bold"> it&apos;s a documented financial asset.</span>
          </p>
          <a
            href="/contact"
            className="flex-shrink-0 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-6 py-3 rounded-sm transition-colors duration-200 whitespace-nowrap"
          >
            Get Free Quote
          </a>
        </motion.div>

      </div>
    </section>
  );
}
