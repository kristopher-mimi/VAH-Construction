/**
 * Shared types for blog content.
 *
 * Lives in its own module so the per-topic seed files and lib/blog-posts.ts can
 * both import it without a circular dependency.
 */

export interface BlogSection {
  type: "h2" | "h3" | "p" | "ul" | "callout" | "faq";
  heading?: string;
  text?: string;
  items?: string[];
  faqs?: { q: string; a: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  content: BlogSection[];
}

/**
 * A post before a publication date is assigned.
 *
 * Seed files deliberately omit `date`: dates are assigned centrally in
 * lib/blog/index.ts so the sequence stays contiguous and collision-free no
 * matter how the seed files are reordered or extended.
 */
export type BlogPostSeed = Omit<BlogPost, "date">;
