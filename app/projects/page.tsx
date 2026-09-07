import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABanner from "@/app/components/CTABanner";
import projectsData from "@/data/projects.json";
import ProjectsGallery, { ProjectsStats } from "./ProjectsGallery";
import type { Project, ProjectCategory } from "./ProjectsGallery";

const projects = projectsData as Project[];

// Mirrors the `categories` list in ProjectsGallery. Declared here (rather than
// imported) because a Server Component cannot read plain values out of a
// "use client" module. `satisfies` makes TypeScript catch any drift.
const CATEGORIES = [
  "All",
  "Standing Seam",
  "Metal Tiles",
  "Metal Fence",
  "Metal Siding",
] as const satisfies readonly ProjectCategory[];

function resolveCategory(raw: string | undefined): ProjectCategory {
  return CATEGORIES.find((cat) => cat === raw) ?? "All";
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const raw = typeof params.category === "string" ? params.category : undefined;
  const initialCategory = resolveCategory(raw);

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
        <ProjectsStats />

        {/* Portfolio intro — server-rendered copy and internal links */}
        <section className="bg-[#0a0a0a] border-b border-neutral-800/60 py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 tracking-tight">
                Completed Metal Roofing, Siding &amp; Fencing Installations
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-4">
                Every project below is finished work — standing seam metal roofing, metal tile
                roofing, metal siding and metal fencing installed on properties across Southern
                Ontario. Each entry lists the system we installed, the finished area, and the exact
                colour specified, so you can judge how a profile and finish actually reads on a real
                roofline before choosing your own.
              </p>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Use the filters to compare a single system side by side, or read the full
                specification for{" "}
                <Link
                  href="/services/standing-seam-roofing"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  standing seam roofing
                </Link>
                ,{" "}
                <Link
                  href="/services/metal-tiles"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  metal tiles
                </Link>
                ,{" "}
                <Link
                  href="/services/metal-siding"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  metal siding
                </Link>{" "}
                and{" "}
                <Link
                  href="/services/metal-fences"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  metal fences
                </Link>
                .
              </p>
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 text-amber-500 hover:text-amber-400 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
              >
                See every city and region we serve
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <ProjectsGallery
          key={initialCategory}
          projects={projects}
          initialCategory={initialCategory}
        />

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
