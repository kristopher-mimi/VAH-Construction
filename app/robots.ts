import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Private routes kept out of search results. This is an indexing preference,
// not a security boundary — those routes enforce their own authorization.
const DISALLOW = ["/admin", "/api/"];

// A named user-agent group fully replaces the "*" group for that crawler, so
// every group must repeat DISALLOW or these bots would crawl /admin and /api/.
const NAMED_AGENTS = [
  // Search engines
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "DuckDuckBot",
  // AI assistants and answer engines
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "cohere-ai",
  // Social link previews
  "facebookexternalhit",
  "Twitterbot",
  "LinkedInBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Rendering resources (/_next/static, /_next/image) stay crawlable so
      // search engines can render pages and read optimized images.
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      ...NAMED_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: DISALLOW,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
