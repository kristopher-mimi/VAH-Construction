import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/locations";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/constants";

const BASE = SITE_URL;

/**
 * Date of the last substantive content revision to the static pages below.
 *
 * Deliberately a fixed constant rather than `new Date()`: stamping every URL
 * with the build time on every deploy tells search engines that all pages
 * changed when they did not. Bump this only when page content actually changes.
 */
const CONTENT_UPDATED = new Date("2026-09-07T00:00:00.000Z");

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const STATIC_ENTRIES: Entry[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },

  // Services hub + service pages
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/metal-roofing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/standing-seam-roofing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/metal-tiles", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/residential-metal-roofing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/commercial-metal-roofing", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/roof-replacement", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/metal-fences", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/luxury-metal-fences", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/custom-steel-fence", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/metal-siding", priority: 0.75, changeFrequency: "monthly" },

  // Buying guidance
  { path: "/metal-roof-cost-ontario", priority: 0.85, changeFrequency: "monthly" },

  // Hubs and company pages
  { path: "/locations", priority: 0.85, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.75, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = STATIC_ENTRIES.map((entry) => ({
    url: `${BASE}${entry.path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${BASE}/locations/${loc.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Blog posts carry their real publication dates.
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages, ...blogPages];
}
