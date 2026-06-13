"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABanner from "@/app/components/CTABanner";
import projectsData from "@/data/projects.json";

type ProjectCategory = "All" | "Standing Seam" | "Metal Tiles" | "Metal Fence" | "Metal Siding";

const categories: ProjectCategory[] = ["All", "Standing Seam", "Metal Tiles", "Metal Fence", "Metal Siding"];

interface Project {
  id: string;
  category: Exclude<ProjectCategory, "All">;
  extraCategory?: Exclude<ProjectCategory, "All">;
  title: string;
  system: string;
  area: string;
  colour: string;
  image: string;
  imageAlt: string;
  objectPosition: string;
}

const projects = projectsData as Project[];

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "30+", label: "Locations Across Ontario" },
  { value: "250+", label: "Roofing Projects Delivered" },
  { value: "100%", label: "Projects Completed on Schedule" },
  { value: "50+", label: "Warranty on Every Project" },
];

function ProjectsGallery() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<ProjectCategory>(() => {
    const cat = searchParams.get("category");
    return (categories as string[]).includes(cat ?? "") ? (cat as ProjectCategory) : "All";
  });
  const [lightbox, setLightbox] = useState<Project | null>(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && (categories as string[]).includes(cat)) {
      setActive(cat as ProjectCategory);
    }
  }, [searchParams]);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active || p.extraCategory === active);

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.image}
                alt={lightbox.imageAlt}
                width={1600}
                height={1200}
                className="object-contain w-full max-h-[85vh] rounded-lg"
                style={{ maxHeight: "85vh" }}
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 rounded-full text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter + grid */}
      <section className="bg-neutral-950 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm font-semibold px-4 py-2 rounded-sm border transition-all duration-200 ${
                  active === cat
                    ? "bg-amber-500 border-amber-500 text-black"
                    : "bg-transparent border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-[#111111] border border-neutral-800 hover:border-neutral-700 rounded-lg overflow-hidden transition-colors"
                >
                  <div
                    className="relative h-56 sm:h-60 overflow-hidden cursor-zoom-in"
                    onClick={() => setLightbox(project)}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: project.objectPosition }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-black/50 text-white/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {project.system}
                      </span>
                      <span className="text-[10px] text-white/50 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                        tap to expand
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold mb-4">{project.title}</h3>
                    <div className="flex items-center gap-4 flex-wrap border-t border-neutral-800/60 pt-4">
                      {[
                        { label: "Area", value: project.area },
                        { label: "Colour", value: project.colour },
                      ].map((spec) => (
                        <div key={spec.label}>
                          <div className="text-xs font-bold text-white">{spec.value}</div>
                          <div className="text-[10px] text-neutral-600 uppercase tracking-wider">{spec.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Work"
          headline="Built Across"
          headlineAccent="Southern Ontario."
          subheadline="A selection of completed metal roofing projects — standing seam, metal tile, siding, and fencing installations across Hamilton, St. Catharines, Kitchener, Muskoka, and beyond."
          breadcrumbs={[{ label: "Projects" }]}
          ctaLabel="Start Your Project"
          ctaHref="/contact"
        />

        {/* Stats bar */}
        <section className="bg-[#0e0e0e] border-y border-neutral-800/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="text-center"
                >
                  <div className="text-3xl font-extrabold text-amber-500 mb-1">{s.value}</div>
                  <div className="text-neutral-500 text-xs">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="bg-neutral-950 py-20" />}>
          <ProjectsGallery />
        </Suspense>

        <CTABanner
          headline="Your Home Deserves the Same."
          subtext="Get a detailed written quote — material options, timeline, and full warranty breakdown included. No site visit needed, no obligation."
          primaryLabel="Start Your Project"
          primaryHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
