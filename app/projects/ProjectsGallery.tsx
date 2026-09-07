"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export type ProjectCategory = "All" | "Standing Seam" | "Metal Tiles" | "Metal Fence" | "Metal Siding";

export const categories: ProjectCategory[] = ["All", "Standing Seam", "Metal Tiles", "Metal Fence", "Metal Siding"];

export interface Project {
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

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "30+", label: "Locations Across Ontario" },
  { value: "270+", label: "Roofing Projects Delivered" },
  { value: "100%", label: "Projects Completed on Schedule" },
  { value: "50+", label: "Warranty on Every Project" },
];

/**
 * Animated stats bar. Kept as a Client Component because it uses Framer Motion,
 * but it renders no request-time APIs so it is still server-rendered into the HTML.
 */
export function ProjectsStats() {
  return (
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
  );
}

interface ProjectsGalleryProps {
  projects: Project[];
  initialCategory: ProjectCategory;
}

export default function ProjectsGallery({ projects, initialCategory }: ProjectsGalleryProps) {
  const [active, setActive] = useState<ProjectCategory>(initialCategory);
  const [lightbox, setLightbox] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (!lightbox) { document.body.style.overflow = ""; return; }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, lightboxIndex]);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active || p.extraCategory === active);

  const openLightbox = (project: Project) => {
    const idx = filtered.findIndex((p) => p.id === project.id);
    setLightboxIndex(idx);
    setLightbox(project);
  };

  const navigate = (dir: 1 | -1) => {
    const next = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightboxIndex(next);
    setLightbox(filtered[next]);
  };

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
            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-3 sm:left-6 z-10 w-11 h-11 flex items-center justify-center bg-black/60 hover:bg-black/90 rounded-full text-white transition-colors border border-white/10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.div
              key={lightbox.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full mx-14"
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
              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-9 h-9 flex items-center justify-center bg-neutral-800 hover:bg-neutral-700 rounded-full text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Counter */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 text-xs">
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-3 sm:right-6 z-10 w-11 h-11 flex items-center justify-center bg-black/60 hover:bg-black/90 rounded-full text-white transition-colors border border-white/10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
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
                    onClick={() => openLightbox(project)}
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
