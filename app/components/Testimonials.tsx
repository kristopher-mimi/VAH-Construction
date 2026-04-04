"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Michael T.",
    location: "St. Catharines, ON",
    rating: 5,
    text: "VAH installed a standing seam roof on our home last fall. The crew was on time, professional, and cleaned up completely every single day. The roof looks incredible and we've had zero issues through the whole winter.",
    service: "Standing Seam Roofing",
  },
  {
    name: "Sandra K.",
    location: "Hamilton, ON",
    rating: 5,
    text: "I got three quotes for metal tiles and VAH was the only company that actually explained the difference between products and helped me choose what was right for my home — not just what was most expensive. Honest people.",
    service: "Metal Tiles",
  },
  {
    name: "David R.",
    location: "Niagara Falls, ON",
    rating: 5,
    text: "Went with the metal tile system on our older home and the difference is night and day. It looks incredible and the crew was professional from start to finish. VAH clearly knows what they're doing.",
    service: "Metal Tiles",
  },
  {
    name: "Jennifer L.",
    location: "Kitchener, ON",
    rating: 5,
    text: "What I appreciated most was the communication. I always knew where the project stood. No surprises, no excuses. The standing seam roof looks better than I imagined, and the lifetime warranty gives me real peace of mind.",
    service: "Standing Seam Roofing",
  },
  {
    name: "Robert M.",
    location: "Grimsby, ON",
    rating: 5,
    text: "Switched from asphalt to metal tiles after my third roof replacement in 20 years. VAH's team walked me through why metal made sense for my house. Three years later — zero maintenance, still perfect. Should have done it sooner.",
    service: "Metal Tiles",
  },
  {
    name: "Karen S.",
    location: "Brantford, ON",
    rating: 5,
    text: "They finished a day ahead of schedule, swept the entire yard with a magnet, and called me after the job to make sure I was satisfied. That kind of follow-through is rare. The workmanship is excellent.",
    service: "Standing Seam Roofing",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.48 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-neutral-950 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
              Client Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
              What Southern Ontario
              <br />
              Homeowners Say.
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-[#111111] border border-neutral-800 rounded-lg px-5 py-3 flex-shrink-0">
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-white font-bold text-sm">5.0 / 5.0</div>
            </div>
            <div className="w-px h-8 bg-neutral-700" />
            <div>
              <div className="text-white font-bold text-sm">Google Reviews</div>
              <div className="text-neutral-500 text-xs">Verified customers</div>
            </div>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.name}
              variants={card}
              className="bg-[#111111] border border-neutral-800 rounded-lg p-6 flex flex-col gap-4 hover:border-neutral-700 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-amber-400">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-300 text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                <div>
                  <div className="text-white font-semibold text-sm">{r.name}</div>
                  <div className="text-neutral-600 text-xs">{r.location}</div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-500/70 bg-amber-500/8 border border-amber-500/15 px-2 py-0.5 rounded-full">
                  {r.service}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
