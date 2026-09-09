import type { BlogPost, BlogPostSeed } from "./types";
import { PROFILE_POSTS } from "./profiles";
import { MATERIAL_POSTS } from "./materials";
import { INSTALLATION_POSTS } from "./installation";
import { BUILDING_SCIENCE_POSTS } from "./building-science";
import { COATINGS_POSTS } from "./coatings-performance";
import { HOMEOWNER_POSTS } from "./homeowner";
import { SIDING_POSTS } from "./siding";
import { FENCING_POSTS } from "./fencing";
import { RAINWARE_PROCESS_POSTS } from "./rainware-process";
import { COMMERCIAL_POSTS } from "./commercial";
import { TROUBLESHOOTING_POSTS } from "./troubleshooting";
import { COMPARISON_DESIGN_POSTS } from "./comparisons-design";
import { ONTARIO_CLIMATE_POSTS } from "./ontario-climate";

/**
 * The most recent publication date. The newest article carries this date and
 * each subsequent article is dated one day earlier.
 */
const NEWEST_PUBLISHED = "2026-09-08";

/** Topic clusters, kept separate so they can be interleaved below. */
const CLUSTERS: BlogPostSeed[][] = [
  HOMEOWNER_POSTS,
  INSTALLATION_POSTS,
  FENCING_POSTS,
  COMPARISON_DESIGN_POSTS,
  SIDING_POSTS,
  BUILDING_SCIENCE_POSTS,
  TROUBLESHOOTING_POSTS,
  RAINWARE_PROCESS_POSTS,
  ONTARIO_CLIMATE_POSTS,
  COATINGS_POSTS,
  COMMERCIAL_POSTS,
  PROFILE_POSTS,
  MATERIAL_POSTS,
];

/**
 * Round-robin the clusters into a single ordered list.
 *
 * Without this the blog index would show twenty consecutive fencing posts and
 * then twenty consecutive siding posts, which reads as bulk-generated and is
 * worse for a reader browsing by date. Interleaving mixes topics throughout.
 */
function interleave(clusters: BlogPostSeed[][]): BlogPostSeed[] {
  const out: BlogPostSeed[] = [];
  const longest = Math.max(0, ...clusters.map((c) => c.length));
  for (let i = 0; i < longest; i++) {
    for (const cluster of clusters) {
      const post = cluster[i];
      if (post) out.push(post);
    }
  }
  return out;
}

/** Date `offset` days before NEWEST_PUBLISHED, as YYYY-MM-DD. */
function dateMinusDays(offset: number): string {
  const d = new Date(`${NEWEST_PUBLISHED}T00:00:00.000Z`);
  d.setUTCDate(d.getUTCDate() - offset);
  return d.toISOString().slice(0, 10);
}

const ORDERED_SEEDS = interleave(CLUSTERS);

// Two articles sharing a slug would silently collide on the same URL and break
// generateStaticParams, so fail loudly at build time instead.
const seen = new Set<string>();
const duplicates = ORDERED_SEEDS.map((p) => p.slug).filter((slug) => {
  if (seen.has(slug)) return true;
  seen.add(slug);
  return false;
});
if (duplicates.length > 0) {
  throw new Error(`Duplicate blog slugs: ${[...new Set(duplicates)].join(", ")}`);
}

/** Generated library articles, newest first, one day apart. */
export const GENERATED_POSTS: BlogPost[] = ORDERED_SEEDS.map((seed, i) => ({
  ...seed,
  date: dateMinusDays(i),
}));

export type { BlogPost, BlogPostSeed, BlogSection } from "./types";
