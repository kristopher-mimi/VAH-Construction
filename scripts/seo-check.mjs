#!/usr/bin/env node
/**
 * SEO regression checks against a running build of the site.
 *
 * Usage:
 *   npm run build && npm run start   # in one shell
 *   npm run seo:check                # in another
 *
 * Override the target with BASE_URL=http://localhost:3000 npm run seo:check
 *
 * These checks read real rendered HTML, not the metadata configuration, so a
 * regression in title templates, canonicals, or structured data is caught the
 * way a crawler would see it.
 */

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const PROD_ORIGIN = "https://www.vahconstruction.com";
const BRAND = "VAH Construction";
const BUSINESS_ID = `${PROD_ORIGIN}/#business`;

let failures = 0;
let passes = 0;

function pass(msg) {
  passes++;
  console.log(`  ok   ${msg}`);
}
function fail(msg) {
  failures++;
  console.error(`  FAIL ${msg}`);
}
function section(name) {
  console.log(`\n${name}`);
}

async function get(path) {
  const url = path.startsWith("http") ? path : `${BASE}${path}`;
  const res = await fetch(url, { redirect: "manual" });
  const body = res.status >= 200 && res.status < 400 ? await res.text() : "";
  return { status: res.status, body, headers: res.headers };
}

function all(html, re) {
  return [...html.matchAll(re)];
}

/** Convert a production URL from the sitemap into a local path. */
function toPath(url) {
  return url.replace(PROD_ORIGIN, "") || "/";
}

async function main() {
  console.log(`SEO checks against ${BASE}\n${"=".repeat(60)}`);

  // ---------------------------------------------------------------- robots
  section("robots.txt");
  const robots = await get("/robots.txt");
  if (robots.status !== 200) {
    fail(`robots.txt returned ${robots.status}`);
  } else {
    pass("robots.txt resolves");

    // Rendering resources must never be blocked, or pages cannot be rendered.
    const blocksNext = /Disallow:\s*\/_next/i.test(robots.body);
    blocksNext
      ? fail("robots.txt disallows /_next/ — blocks CSS, JS and optimized images")
      : pass("/_next/ is crawlable (CSS, JS, optimized images)");

    // A named user-agent group fully replaces the "*" group, so each group
    // must independently keep private routes out of the index.
    const groups = robots.body.split(/^User-Agent:/im).slice(1);
    const leaky = groups
      .filter((g) => !/Disallow:\s*\/admin/i.test(g))
      .map((g) => g.split("\n")[0].trim());
    leaky.length
      ? fail(`user-agent groups missing /admin disallow: ${leaky.join(", ")}`)
      : pass(`all ${groups.length} user-agent groups disallow /admin`);

    /sitemap:/i.test(robots.body)
      ? pass("robots.txt declares a sitemap")
      : fail("robots.txt has no Sitemap directive");
  }

  // --------------------------------------------------------------- sitemap
  section("sitemap.xml");
  const sitemap = await get("/sitemap.xml");
  let urls = [];
  if (sitemap.status !== 200) {
    fail(`sitemap.xml returned ${sitemap.status}`);
  } else {
    urls = all(sitemap.body, /<loc>([^<]+)<\/loc>/g).map((m) => m[1]);
    urls.length ? pass(`sitemap lists ${urls.length} URLs`) : fail("sitemap is empty");

    const wrongOrigin = urls.filter((u) => !u.startsWith(PROD_ORIGIN));
    wrongOrigin.length
      ? fail(`sitemap URLs not on ${PROD_ORIGIN}: ${wrongOrigin.slice(0, 3).join(", ")}`)
      : pass(`all sitemap URLs use ${PROD_ORIGIN}`);

    const dupes = urls.filter((u, i) => urls.indexOf(u) !== i);
    dupes.length ? fail(`duplicate sitemap URLs: ${dupes.join(", ")}`) : pass("no duplicate sitemap URLs");

    // Every sitemap URL must be a real 200 — never a redirect or a 404.
    const bad = [];
    for (const u of urls) {
      const r = await get(toPath(u));
      if (r.status !== 200) bad.push(`${toPath(u)} -> ${r.status}`);
    }
    bad.length
      ? fail(`sitemap URLs not returning 200:\n       ${bad.join("\n       ")}`)
      : pass(`all ${urls.length} sitemap URLs return 200`);
  }

  // ------------------------------------------------------------- page audit
  section("per-page metadata");
  const seenTitles = new Map();
  const internalLinks = new Set();

  for (const url of urls) {
    const path = toPath(url);
    const { status, body } = await get(path);
    if (status !== 200) continue;
    const label = path === "/" ? "/ (home)" : path;

    // --- title: exactly one, brand at most once
    const titles = all(body, /<title[^>]*>([\s\S]*?)<\/title>/g).map((m) => m[1].trim());
    if (titles.length !== 1) {
      fail(`${label}: expected 1 <title>, found ${titles.length}`);
    } else {
      const title = titles[0];
      const brandCount = title.split(BRAND).length - 1;
      if (brandCount > 1) fail(`${label}: brand appears ${brandCount}x in title — "${title}"`);
      if (!title.length) fail(`${label}: empty title`);
      if (seenTitles.has(title)) fail(`${label}: duplicate title, also on ${seenTitles.get(title)}`);
      seenTitles.set(title, label);
    }

    // --- description present and non-trivial
    const desc = body.match(/<meta name="description" content="([^"]*)"/);
    if (!desc || desc[1].trim().length < 50) {
      fail(`${label}: missing or too-short meta description`);
    }

    // --- canonical on the production origin, matching this path
    const canon = body.match(/<link rel="canonical" href="([^"]+)"/);
    if (!canon) {
      fail(`${label}: no canonical`);
    } else {
      const href = canon[1];
      if (!href.startsWith(PROD_ORIGIN)) fail(`${label}: canonical origin is ${href}`);
      else if (new URL(href).pathname.replace(/\/$/, "") !== path.replace(/\/$/, ""))
        fail(`${label}: canonical points at ${new URL(href).pathname}`);
    }

    // --- exactly one non-empty H1
    const h1s = all(body, /<h1[^>]*>([\s\S]*?)<\/h1>/g).map((m) =>
      m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
    );
    if (h1s.length !== 1) fail(`${label}: expected 1 <h1>, found ${h1s.length}`);
    else if (h1s[0].length < 3) fail(`${label}: H1 is empty or trivial`);

    // --- no accidental noindex on a page we are asking Google to index
    if (/<meta name="robots"[^>]*content="[^"]*noindex/i.test(body)) {
      fail(`${label}: has noindex but is listed in the sitemap`);
    }

    // --- every JSON-LD block must parse, and reference one business identity
    for (const [, raw] of all(
      body,
      /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    )) {
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (e) {
        fail(`${label}: JSON-LD does not parse — ${e.message}`);
        continue;
      }
      const json = JSON.stringify(parsed);
      // A second LocalBusiness/Organization without our canonical @id would
      // split the business identity across pages.
      if (/"@type":"(LocalBusiness|Organization|RoofingContractor)"/.test(json)) {
        if (!json.includes(BUSINESS_ID)) {
          fail(`${label}: declares a business entity without the ${BUSINESS_ID} @id`);
        }
      }
      // Self-serving review markup risks a manual action.
      if (/"@type":"AggregateRating"/.test(json)) {
        fail(`${label}: contains AggregateRating markup`);
      }
    }

    // collect internal links for the broken-link sweep
    for (const [, href] of all(body, /href="(\/[^"#?]*)"/g)) internalLinks.add(href);
  }
  if (!failures) pass("titles, descriptions, canonicals, H1s and JSON-LD are valid on all pages");

  // ------------------------------------------------- orphan / linking checks
  section("internal linking");
  const commercial = [
    "/services/metal-roofing",
    "/services/standing-seam-roofing",
    "/services/metal-tiles",
    "/services/metal-fences",
    "/services/luxury-metal-fences",
    "/services/custom-steel-fence",
    "/services/metal-siding",
    "/services/roof-replacement",
    "/services/residential-metal-roofing",
    "/services/commercial-metal-roofing",
    "/metal-roof-cost-ontario",
  ];
  const orphans = commercial.filter((p) => !internalLinks.has(p));
  orphans.length
    ? fail(`commercial pages not linked from anywhere: ${orphans.join(", ")}`)
    : pass(`all ${commercial.length} commercial pages are internally linked`);

  section("broken internal links");
  const broken = [];
  for (const href of internalLinks) {
    if (href.startsWith("/_next") || href.startsWith("/api")) continue;
    const r = await get(href);
    if (r.status !== 200) broken.push(`${href} -> ${r.status}`);
  }
  broken.length
    ? fail(`broken internal links:\n       ${broken.join("\n       ")}`)
    : pass(`all ${internalLinks.size} internal links resolve`);

  // ------------------------------------------------------------------ misc
  section("404 handling");
  const missing = await get("/this-page-does-not-exist-seo-check");
  missing.status === 404
    ? pass("unknown routes return a genuine 404")
    : fail(`unknown route returned ${missing.status}, expected 404`);

  section("assets");
  const ogImage = "/images/hero/945B6F87-E210-447A-BE3B-5905563CC77B_1_105_c.jpeg";
  const og = await get(ogImage);
  og.status === 200 ? pass("Open Graph image resolves") : fail(`OG image returned ${og.status}`);

  // ---------------------------------------------------------------- summary
  console.log(`\n${"=".repeat(60)}`);
  console.log(`${passes} passed, ${failures} failed`);
  process.exit(failures ? 1 : 0);
}

main().catch((err) => {
  console.error("\nseo:check crashed:", err.message);
  console.error("Is the server running? Try: npm run build && npm run start");
  process.exit(1);
});
