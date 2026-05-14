import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/locations";
import { BLOG_POSTS } from "@/lib/blog-posts";

const BASE = "https://www.vahconstruction.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/services/metal-roofing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/services/standing-seam-roofing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/services/residential-metal-roofing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/services/commercial-metal-roofing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/services/roof-replacement`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/services/metal-fences`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/services/luxury-metal-fences`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/services/custom-steel-fence`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/services/metal-siding`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE}/locations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${BASE}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...locationPages, ...blogPages];
}
