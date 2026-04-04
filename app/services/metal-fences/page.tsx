"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABanner from "@/app/components/CTABanner";

const benefits = [
  {
    title: "50+ Year Lifespan",
    desc: "Powder-coated steel and aluminum fencing is engineered to outlast wood and vinyl by decades — no rot, no warping, no pest damage, no repainting.",
  },
  {
    title: "Custom Fabricated",
    desc: "Every fence is built to your exact dimensions, panel spacing, and post layout. We fabricate to fit your property — no stock sizes, no compromises.",
  },
  {
    title: "Matched to Your Roof",
    desc: "Choose from any RAL powder-coat colour to coordinate your fence with your metal roofing system. Charcoal, matte black, bronze, custom — we match it.",
  },
  {
    title: "Zero Maintenance",
    desc: "No annual sealing, painting, or staining. Powder-coated metal holds its finish through Canadian freeze-thaw cycles, UV exposure, and salt-air environments.",
  },
  {
    title: "Structurally Superior",
    desc: "Steel posts set in concrete footings. Panel connections are fastened — not glued. The result is a fence that doesn't shift, lean, or loosen over time.",
  },
  {
    title: "Fire & Impact Rated",
    desc: "Metal fencing is non-combustible and structurally resistant to impact damage. It does not fuel or spread fire — an important consideration for any property.",
  },
];

const styles = [
  {
    title: "Horizontal Privacy Panel",
    desc: "Our most requested residential style. Horizontal metal slats with controlled spacing deliver full privacy at grade while maintaining an open, modern profile above eye level. Steel posts finished in matching powder coat.",
    ideal: "Residential backyards, pool enclosures, modern and contemporary homes",
  },
  {
    title: "Vertical Picket",
    desc: "A clean, classic profile suited to front-yard applications, driveway borders, and properties where visibility and curb appeal are priorities. Spacing is customized per project.",
    ideal: "Front yards, driveway borders, heritage and traditional homes",
  },
  {
    title: "Ornamental & Decorative",
    desc: "For properties requiring an architectural statement — custom profiles, integrated cap details, and ornamental post toppers. Fabricated to specification and finished in your chosen colour.",
    ideal: "Luxury properties, heritage restorations, commercial frontages",
  },
  {
    title: "Commercial & Industrial",
    desc: "High-gauge steel panel systems for commercial lots, industrial properties, and secure perimeter applications. Engineered for structural performance, not just aesthetics.",
    ideal: "Commercial properties, warehouses, secure perimeter fencing",
  },
];

const faq = [
  {
    q: "How long does a metal fence last?",
    a: "Properly installed powder-coated steel fencing carries a service life well in excess of 50 years. The steel substrate is galvanized before powder coating, providing two layers of corrosion protection. In normal residential conditions, you should not need to replace or refinish the fence in your lifetime.",
  },
  {
    q: "Can the fence colour be matched to my metal roof?",
    a: "Yes. This is one of the most common requests we receive. We work in any RAL or standard powder-coat colour and can match an existing roof system precisely. Many clients choose to coordinate fence and roof as part of a single project.",
  },
  {
    q: "Do you install gates as well?",
    a: "Yes. Single and double swing gates, sliding gates, and pedestrian gates are all available as part of a fence installation. Gate hardware and locking mechanisms are selected to match the fence system.",
  },
  {
    q: "How are the posts installed?",
    a: "Steel posts are set in concrete footings below the frost line — a minimum of 48 inches in most Southern Ontario locations. This prevents frost heave and ensures the fence remains plumb and stable year-round.",
  },
  {
    q: "Can I get a quote without a site visit?",
    a: "In most cases, yes. We can produce an accurate quote based on your property dimensions, which we can typically obtain remotely. You can also provide a sketch or measurements by email and we'll work from those.",
  },
];

export default function MetalFencesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Metal Fencing"
          headline="Fences Built to the"
          headlineAccent="Same Standard as Your Roof."
          subheadline="Custom powder-coated steel and aluminum fencing — fabricated to your dimensions, finished in any colour, and engineered to last without maintenance."
          breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Metal Fences" }]}
          ctaLabel="Get a Fence Quote"
          ctaHref="/contact"
          size="large"
        />

        {/* Photo + intro */}
        <section className="bg-neutral-950 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">
                  Why Metal Fencing
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  The Same Logic That Makes Metal the Best Roof Makes It the Best Fence.
                </h2>
                <div className="space-y-4 text-neutral-400 text-sm leading-relaxed">
                  <p>
                    Wood fences rot. Vinyl cracks under UV exposure. Composite materials look
                    acceptable for a few years before they begin to degrade. Metal fencing —
                    powder-coated steel or aluminum — simply does not have these failure modes.
                  </p>
                  <p>
                    We bring the same material standards and installation discipline to fencing
                    that we apply to every metal roofing project. Posts set below the frost line.
                    Galvanized steel substrate before powder coating. Custom fabrication to your
                    exact dimensions — no stock panels, no adapters.
                  </p>
                  <p>
                    The result is a fence that coordinates with your home, holds its finish
                    through Southern Ontario winters, and requires nothing from you for decades.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="relative rounded-lg overflow-hidden"
              >
                <div className="relative h-[420px] lg:h-[500px]">
                  <Image
                    src="/images/projects/3EDB244D-24FF-4503-B02F-0D77DBCBE3D8.png"
                    alt="Custom horizontal metal fence with powder-coated steel posts — VAH Construction"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs text-white/80 font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      Horizontal Privacy Panel — Smithville, ON
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits grid */}
        <section className="bg-[#0e0e0e] border-y border-neutral-800/60 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="max-w-xl mb-14"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Why Metal
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Built to Outperform Every Alternative.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="bg-[#111111] border border-neutral-800 rounded-lg p-6"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mb-4" />
                  <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Styles */}
        <section className="bg-neutral-950 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="max-w-xl mb-10"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Fence Styles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Four Profiles. All Custom Fabricated.
              </h2>
            </motion.div>

            {/* Style reference image — full image, no cropping */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden mb-10 bg-neutral-900"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/projects/Класичний дерев'яний паркан у студії.png"
                alt="Fence profile types — VAH Construction style reference"
                className="w-full h-auto block"
                style={{ maxHeight: "600px", objectFit: "contain", objectPosition: "center" }}
              />
              <div className="px-4 py-3 border-t border-neutral-800">
                <span className="text-xs text-neutral-500 font-medium">
                  Fence profile reference — styles available in powder-coated steel &amp; aluminum
                </span>
              </div>
            </motion.div>

            <div className="space-y-4">
              {styles.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="bg-[#111111] border border-neutral-800 hover:border-neutral-700 rounded-lg p-7 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="lg:w-1/3">
                      <h3 className="text-white font-extrabold text-lg mb-2">{s.title}</h3>
                      <div className="bg-neutral-800/40 rounded-sm px-3 py-2 inline-block">
                        <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider block mb-0.5">Ideal for</span>
                        <span className="text-xs text-neutral-300">{s.ideal}</span>
                      </div>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed lg:w-2/3">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="mb-10"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Our Work
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Completed Fence Installations.
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { src: "/images/projects/3EDB244D-24FF-4503-B02F-0D77DBCBE3D8.png", alt: "Horizontal metal privacy fence", position: "object-center" },
                { src: "/images/projects/Aluminum-Fence-5-1536x1152.webp", alt: "Aluminum perimeter fence", position: "object-center" },
                { src: "/images/projects/zabor-galuzy.jpg", alt: "Decorative steel fence", position: "object-center" },
                { src: "/images/projects/fence.jpg", alt: "Vertical picket metal fence", position: "object-center" },
                { src: "/images/projects/Дизайн без названия (17).png", alt: "Custom metal panel fence", position: "object-center" },
              ].map((photo, i) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="relative h-52 lg:h-64 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className={`object-cover ${photo.position} transition-transform duration-700 group-hover:scale-105`}
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="mb-10"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Common Questions
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Metal Fence FAQs.
              </h2>
            </motion.div>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-[#111111] border border-neutral-800/60 rounded-sm p-5"
                >
                  <h3 className="text-white font-bold text-sm mb-2">{item.q}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Get a Free Metal Fence Quote"
          subtext="Tell us your property dimensions and fence style — we'll produce an accurate, written quote remotely. No site visit required."
          primaryLabel="Request a Quote"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
