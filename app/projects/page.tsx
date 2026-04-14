"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import CTABanner from "@/app/components/CTABanner";

type ProjectCategory = "All" | "Standing Seam" | "Metal Tiles" | "Metal Fence" | "Metal Siding";

const categories: ProjectCategory[] = ["All", "Standing Seam", "Metal Tiles", "Metal Fence", "Metal Siding"];

interface Project {
  id: string;
  category: ProjectCategory;
  extraCategory?: ProjectCategory;
  title: string;
  location: string;
  year: string;
  system: string;
  area: string;
  colour: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
}

const projects: Project[] = [
  { id: "contemporary-custom-build", category: "Metal Tiles", title: "Contemporary Custom Build", location: "Stoney Creek, ON", year: "2024", system: "Metal Tiles", area: "2,100 sq ft", colour: "Slate Grey", image: "/images/projects/49873DA8-BCD9-44BE-8B32-0BCD3F9FDAAD_1_105_c.jpeg", imageAlt: "Contemporary metal tile roof — Stoney Creek, ON", imagePosition: "object-top" },
  { id: "horizontal-privacy-fence", category: "Metal Fence", title: "Horizontal Privacy Fence", location: "Smithville, ON", year: "2024", system: "Metal Fence", area: "160 linear ft", colour: "Matte Black", image: "/images/projects/3EDB244D-24FF-4503-B02F-0D77DBCBE3D8.png", imageAlt: "Custom horizontal metal privacy fence — Smithville, ON", imagePosition: "object-center" },
  { id: "residential-standing-seam", category: "Standing Seam", title: "Residential Standing Seam", location: "Orillia, ON", year: "2024", system: "Standing Seam", area: "4,000 sq ft", colour: "Matte Black", image: "/images/projects/886E6DAC-D710-4799-A310-170D73314D9F_1_102_o.jpeg", imageAlt: "Residential standing seam metal roof — Orillia, ON", imagePosition: "object-top" },
  { id: "victorian-farmhouse", category: "Standing Seam", title: "Victorian Farmhouse Restoration", location: "Owen Sound, ON", year: "2024", system: "Standing Seam", area: "7,800 sq ft", colour: "Matte Black", image: "/images/projects/36D957EE-FB2A-4ADC-8CDA-D40BE32962E0_1_105_c.jpeg", imageAlt: "Victorian farmhouse standing seam metal roof — Owen Sound, ON", imagePosition: "object-center" },
  { id: "custom-home-new-build", category: "Standing Seam", title: "Custom Home New Build", location: "North York, ON", year: "2024", system: "Standing Seam", area: "2,500 sq ft", colour: "Matte Black", image: "/images/projects/1F0A9C32-2383-4B3B-84F3-6E6839994207_1_105_c.jpeg", imageAlt: "Custom home new build standing seam roof — North York, ON", imagePosition: "object-top" },
  { id: "bracebridge-standing-seam", category: "Standing Seam", title: "Bracebridge Residence", location: "Bracebridge, ON", year: "2024", system: "Standing Seam", area: "2,800 sq ft", colour: "Matte Black", image: "/images/projects/AE848632-5C20-4A83-90AF-F84C88AE8330_1_102_o.jpeg", imageAlt: "Standing seam metal roof — Bracebridge, ON", imagePosition: "object-center" },
  { id: "premium-metal-tiles", category: "Metal Tiles", title: "Premium Metal Tile Install", location: "Brampton, ON", year: "2024", system: "Metal Tiles", area: "7,500 sq ft", colour: "Slate Grey", image: "/images/projects/32745D57-2A76-4729-B69A-1805A8D1912E_1_105_c.jpeg", imageAlt: "Premium metal tile roof — Brampton, ON", imagePosition: "object-top" },
  { id: "lakeside-cottage", category: "Standing Seam", title: "Lakeside Cottage", location: "Dunnville, ON", year: "2023", system: "Standing Seam", area: "2,900 sq ft", colour: "Matte Black", image: "/images/projects/DF07CB0D-BEE3-43EC-90B8-F1462BC18BD4_1_105_c.jpeg", imageAlt: "Lakeside cottage standing seam metal roof — Dunnville, ON", imagePosition: "object-center" },
  { id: "suburban-executive-home", category: "Standing Seam", title: "Suburban Executive Home", location: "Hamilton, ON", year: "2023", system: "Standing Seam", area: "1,800 sq ft", colour: "Matte Black", image: "/images/projects/4C4D5362-3789-4E7C-A514-72632BB8CB22_1_105_c.jpeg", imageAlt: "Suburban executive home standing seam roof — Hamilton, ON", imagePosition: "object-top" },
  { id: "etobicoke-siding", category: "Metal Siding", title: "Modern Residential Siding", location: "Etobicoke, ON", year: "2023", system: "Metal Siding", area: "3,200 sq ft", colour: "Forest Green", image: "/images/projects/77639C71-E973-4DFC-AC01-AA56931526CF_1_102_o.jpeg", imageAlt: "Metal siding installation — Etobicoke, ON", imagePosition: "object-[50%_37%]" },
  { id: "metal-tile-residential", category: "Metal Tiles", title: "Metal Tile Residential", location: "Kitchener, ON", year: "2023", system: "Metal Tiles", area: "3,200 sq ft", colour: "Matte Black", image: "/images/projects/421C776E-0CC3-4EEA-8CBB-7DF585D5BD1E_1_105_c.jpeg", imageAlt: "Metal tile residential roof — Kitchener, ON", imagePosition: "object-bottom" },
  { id: "aluminum-perimeter-fence", category: "Metal Fence", title: "Aluminum Perimeter Fence", location: "Burlington, ON", year: "2023", system: "Metal Fence", area: "240 linear ft", colour: "Charcoal", image: "/images/projects/Aluminum-Fence-5-1536x1152.webp", imageAlt: "Aluminum perimeter fence — Burlington, ON", imagePosition: "object-center" },
  { id: "executive-estate-roof", category: "Standing Seam", title: "Executive Estate Roof", location: "Burlington, ON", year: "2023", system: "Standing Seam", area: "3,100 sq ft", colour: "Slate Grey", image: "/images/projects/AA75C944-565A-4546-80BF-1C3BFF200EA3_1_105_c.jpeg", imageAlt: "Executive estate standing seam roof — Burlington, ON", imagePosition: "object-bottom" },
  { id: "brampton-metal-tiles-2", category: "Metal Tiles", title: "Tile Roof System", location: "Brampton, ON", year: "2023", system: "Metal Tiles", area: "7,500 sq ft", colour: "Slate Grey", image: "/images/projects/651A69C4-5697-44F9-A84C-32F264471365_1_105_c.jpeg", imageAlt: "Metal tile roof — Brampton, ON", imagePosition: "object-top" },
  { id: "residential-siding-upgrade", category: "Metal Tiles", title: "Aluminum Roof Tiles", location: "Brantford, ON", year: "2023", system: "Metal Tiles", area: "2,100 sq ft", colour: "Chocolate Brown", image: "/images/projects/AA889F6C-B4F3-4DC5-B7E2-895553FC184D_1_102_o.jpeg", imageAlt: "Metal tile residential roof — Brantford, ON", imagePosition: "object-center" },
  { id: "modern-residential-ss", category: "Standing Seam", title: "Modern Residential Standing Seam", location: "Mississauga, ON", year: "2023", system: "Standing Seam", area: "4,400 sq ft", colour: "Matte Black", image: "/images/projects/2F08072E-E307-4A65-A595-37D076267522_1_105_c.jpeg", imageAlt: "Modern standing seam metal roof — Mississauga, ON", imagePosition: "object-top" },
  { id: "decorative-steel-fence", category: "Metal Fence", title: "Decorative Steel Fence", location: "Oakville, ON", year: "2023", system: "Metal Fence", area: "350 linear ft", colour: "Bronze", image: "/images/projects/zabor-galuzy.jpg", imageAlt: "Decorative steel fence — Oakville, ON", imagePosition: "object-center" },
  { id: "steep-pitch-tiles", category: "Metal Tiles", title: "Steel Roof Upgrade", location: "Brantford, ON", year: "2023", system: "Metal Tiles", area: "1,900 sq ft", colour: "Slate Grey", image: "/images/projects/9DA0D0FF-080A-4CB6-855B-6061D5551EBA_1_102_o.jpeg", imageAlt: "Steep pitch metal tile roof — Brantford, ON", imagePosition: "object-[25%_40%]" },
  { id: "tobermory-residence", category: "Standing Seam", title: "Residential Property", location: "Tobermory, ON", year: "2022", system: "Standing Seam", area: "2,400 sq ft", colour: "Matte Black", image: "/images/projects/04C26CF2-F48B-4832-BA14-59DB0D2F1564_1_105_c.jpeg", imageAlt: "Standing seam metal roof — Tobermory, ON", imagePosition: "object-center" },
  { id: "muskoka-residence", category: "Standing Seam", title: "Muskoka Residence", location: "Muskoka, ON", year: "2022", system: "Standing Seam", area: "4,000 sq ft", colour: "Galvalume", image: "/images/projects/EFC89D54-04E1-43F3-973C-39757040A96D_1_102_o.jpeg", imageAlt: "Standing seam metal roof — Muskoka, ON", imagePosition: "object-center" },
  { id: "notl-siding", category: "Metal Siding", title: "Modern Home Siding", location: "Niagara-on-the-Lake, ON", year: "2022", system: "Metal Siding", area: "3,600 sq ft", colour: "Matte Black", image: "/images/projects/7F7B9C54-C46B-41DE-B10B-E9A8A472C6AC_1_105_c.jpeg", imageAlt: "Metal siding installation — Niagara-on-the-Lake, ON", imagePosition: "object-center" },
  { id: "vertical-picket-fence", category: "Metal Fence", title: "Vertical Picket Estate Fence", location: "Hamilton, ON", year: "2022", system: "Metal Fence", area: "160 linear ft", colour: "Matte Black", image: "/images/projects/fence.jpg", imageAlt: "Vertical picket estate metal fence — Hamilton, ON", imagePosition: "object-center" },
  { id: "residential-metal-tile-upgrade", category: "Metal Tiles", title: "Residential Metal Tile Upgrade", location: "Kitchener, ON", year: "2022", system: "Metal Tiles", area: "2,600 sq ft", colour: "Matte Black", image: "/images/projects/B561B487-D2BE-44C7-AE09-C2B80726ADE7_1_105_c.jpeg", imageAlt: "Residential metal tile upgrade — Kitchener, ON", imagePosition: "object-bottom" },
  { id: "countryside-property", category: "Standing Seam", title: "Countryside Property", location: "Port Hope, ON", year: "2022", system: "Standing Seam", area: "5,700 sq ft", colour: "Matte Black", image: "/images/projects/F925D882-1DBE-44F3-B990-68554A328A6C_1_201_a.jpeg", imageAlt: "Countryside standing seam roof — Port Hope, ON", imagePosition: "object-center" },
  { id: "bracebridge-roofing", category: "Standing Seam", title: "Residential Roofing Project", location: "Bracebridge, ON", year: "2022", system: "Standing Seam", area: "2,200 sq ft", colour: "Matte Black", image: "/images/projects/61723584-2B3F-4ABA-9D02-36E52927617A_1_102_o.jpeg", imageAlt: "Residential standing seam roof — Bracebridge, ON", imagePosition: "object-top" },
  { id: "heritage-district-home", category: "Metal Tiles", title: "Heritage District Home", location: "Mississauga, ON", year: "2022", system: "Metal Tiles", area: "6,400 sq ft", colour: "Chocolate Brown", image: "/images/projects/F88A833F-F30B-4477-941C-F6D159B8199E_1_105_c.jpeg", imageAlt: "Heritage district metal tile roof — Mississauga, ON", imagePosition: "object-top" },
  { id: "roofing-detail-orillia", category: "Standing Seam", title: "Roofing Detail Work", location: "Orillia, ON", year: "2022", system: "Standing Seam", area: "4,000 sq ft", colour: "Slate Grey", image: "/images/projects/0437A243-E141-4C6B-A641-1B183CE5764F_1_102_o.jpeg", imageAlt: "Standing seam roofing detail — Orillia, ON", imagePosition: "object-center" },
  { id: "kawartha-lakes-ss", category: "Standing Seam", title: "Kawartha Lakes Residence", location: "Kawartha Lakes, ON", year: "2022", system: "Standing Seam", area: "4,200 sq ft", colour: "Matte Black", image: "/images/projects/324861FD-DBF9-4F88-BD30-FEF763F227F2_1_102_a.jpeg", imageAlt: "Standing seam installation — Kawartha Lakes, ON", imagePosition: "object-center" },
  { id: "custom-panel-fence", category: "Metal Fence", title: "Custom Panel Fence", location: "Mississauga, ON", year: "2023", system: "Metal Fence", area: "300 linear ft", colour: "Charcoal", image: "/images/projects/Дизайн без названия (17).png", imageAlt: "Custom metal panel fence — Mississauga, ON", imagePosition: "object-center" },
  { id: "luxury-estate-privacy-fence", category: "Metal Fence", title: "Luxury Estate Privacy Fence", location: "Toronto, ON", year: "2024", system: "Metal Fence", area: "280 linear ft", colour: "Matte Black", image: "/images/projects/fence6.jpg", imageAlt: "Luxury estate horizontal privacy fence — Toronto, ON", imagePosition: "object-center" },
  { id: "wood-grain-privacy-panel", category: "Metal Fence", title: "Wood-Grain Privacy Panel Fence", location: "Mississauga, ON", year: "2024", system: "Metal Fence", area: "320 linear ft", colour: "Cedar", image: "/images/projects/fence7.jpg", imageAlt: "Wood-grain metal privacy panel fence — Mississauga, ON", imagePosition: "object-center" },
  { id: "backyard-privacy-enclosure", category: "Metal Fence", title: "Backyard Privacy Enclosure", location: "Burlington, ON", year: "2024", system: "Metal Fence", area: "380 linear ft", colour: "Matte Black", image: "/images/projects/fence9.jpg", imageAlt: "Backyard metal privacy enclosure — Burlington, ON", imagePosition: "object-center" },
  { id: "backlit-outdoor-privacy-screen", category: "Metal Fence", title: "Backlit Outdoor Privacy Screen", location: "Toronto, ON", year: "2024", system: "Metal Fence", area: "120 linear ft", colour: "Bronze", image: "/images/projects/fence10.jpg", imageAlt: "Backlit outdoor metal privacy screen with firepit — Toronto, ON", imagePosition: "object-center" },
  { id: "notl-residence", category: "Standing Seam", title: "Missisauga Residence", location: "Mississauga, ON", year: "2022", system: "Standing Seam", area: "4,400 sq ft", colour: "Matte Black", image: "/images/projects/945B6F87-E210-447A-BE3B-5905563CC77B_1_105_c.jpeg", imageAlt: "Standing seam metal roof — Mississauga, ON", imagePosition: "object-top" },
  { id: "metal-tile-upgrade", category: "Standing Seam", extraCategory: "Metal Siding", title: "Standing Seam Siding&Roof", location: "Niagara-on-the-Lake, ON", year: "2022", system: "Standing Seam & Siding", area: "3,600 sq ft", colour: "Matte Black", image: "/images/projects/A2A64EF4-A76B-4F33-9B5E-5D07791F1A2A_1_105_c.jpeg", imageAlt: "Standing seam and metal siding — Niagara-on-the-Lake, ON", imagePosition: "object-[50%_60%]" },
  { id: "contemporary-roofline", category: "Standing Seam", title: "Contemporary Roofline", location: "Binbrook, ON", year: "2022", system: "Standing Seam", area: "4,800 sq ft", colour: "Slate Grey", image: "/images/projects/5965F2DB-0262-4966-9379-092C7E6DA345_1_105_c.jpeg", imageAlt: "Contemporary standing seam roofline — Binbrook, ON", imagePosition: "object-top" },
  { id: "etobicoke-lap-siding", category: "Metal Siding", title: "Horizontal Lap Siding", location: "Etobicoke, ON", year: "2022", system: "Metal Siding", area: "3,200 sq ft", colour: "Forest Green", image: "/images/projects/4C646812-4F56-4508-9B2E-55F7C7DAAA3F_1_102_a.jpeg", imageAlt: "Horizontal lap metal siding — Etobicoke, ON", imagePosition: "object-center" },
  { id: "cambridge-metal-tiles", category: "Metal Tiles", title: "On-Site Installation", location: "Cambridge, ON", year: "2023", system: "Metal Tiles", area: "2,200 sq ft", colour: "Chocolate Brown", image: "/images/projects/2EFF3A14-6384-46E4-A170-59690FE50460_4_5005_c.jpeg", imageAlt: "Metal tile installation — Cambridge, ON", imagePosition: "object-center" },
];

interface Stat {
  value: string;
  label: string;
  sub?: string;
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

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && (categories as string[]).includes(cat)) {
      setActive(cat as ProjectCategory);
    }
  }, [searchParams]);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active || p.extraCategory === active);

  return (
    <>
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
                    <div className="relative h-56 sm:h-60 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className={`object-cover ${project.imagePosition} transition-transform duration-700 group-hover:scale-105`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest bg-black/50 text-white/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                          {project.system}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-bold mb-1">{project.title}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-amber-500 flex-shrink-0">
                          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.034 3.048-4.374 3.048-6.827 0-4.075-3.15-7.5-7.5-7.5s-7.5 3.425-7.5 7.5c0 2.453 1.104 4.793 3.048 6.827a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-neutral-500 text-xs">{project.location}</span>
                      </div>
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
                  {"sub" in s && s.sub && (
                    <div className="text-neutral-600 text-xs mt-0.5">{s.sub}</div>
                  )}
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
