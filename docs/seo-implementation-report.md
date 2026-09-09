# SEO implementation report

Work carried out against the VAH Construction website
(`https://www.vahconstruction.com`), Next.js 16.2.2 App Router.

## Baseline

Captured before any edit:

| Item | Value |
| --- | --- |
| Branch / remote | `main` → `origin` (`kristopher-mimi/VAH-Construction`) |
| HEAD at start | `12bceb2` (in sync with `origin/main`) |
| Public routes | 20 page routes → 38 indexable URLs after `generateStaticParams` |
| Production build | **Failing** — see "pre-existing failure" below |
| Type check | Passing |
| Lint | No ESLint config in the repo — not run |
| Test suite | No test framework in the repo — none to run |

Three uncommitted fixes were already present in the working tree and were
preserved rather than reverted: `/_next/` unblocked in `robots.ts`,
`/services/metal-tiles` added to the sitemap, and `SearchAction` removed plus
`lang="en-CA"` set in `app/layout.tsx`.

### Pre-existing build failure (fixed)

`npx next build` failed before any of this work began:

```
Error: Missing credentials. Please pass an `apiKey`, or set the
OPENAI_API_KEY environment variable.
> Build error occurred
Error: Failed to collect page data for /api/chat
```

`app/api/chat/route.ts` constructed the OpenAI client at module scope, so
collecting page data required the key. The client is now created lazily inside
the handler. Runtime behaviour is unchanged; the build no longer needs the key.

## Audit findings — verified status

The 22 August 2026 SEODACH findings were re-checked against the current
repository and the running build. Status is what was actually observed, not what
the audit asserted.

| # | Finding | Status | Resolution |
| --- | --- | --- | --- |
| 1 | robots.txt blocked `/_next/` | Already fixed (uncommitted) | Preserved; `seo:check` now asserts it |
| 2 | Brand twice in 26 titles | **Confirmed — 26 pages** | 16 page/layout files + 10 locations + 10 blog posts fixed |
| 3 | Titles/descriptions too long | Confirmed | Rewritten while removing the brand |
| 4 | Homepage/service H1s were slogans | **Confirmed** | Home H1 now "Metal Roofing Built to Last." — slogan kept |
| 5 | Service→location linking missing | **Confirmed — zero links** | Service grid added to every city page |
| 6 | Location→location linking missing | **Confirmed** | Nearby areas now link where a page exists |
| 7 | "Nearby areas" chips plain text | **Confirmed** | Now real `<Link>` anchors |
| 8 | Luxury/custom fence pages orphaned | **Confirmed** | Added to services hub + nav |
| 9 | `/services/metal-tiles` missing from sitemap | Already fixed (uncommitted) | Preserved |
| 10 | Services hub missing service pages | **Confirmed — 4 of 11** | Full service index added |
| 11 | Location pages repetitive | Partly confirmed | Services + links added; no fake local proof invented |
| 12 | `/projects` little server-rendered text | **Confirmed — 0 cards in HTML** | Refactored to server render |
| 13 | SearchAction pointed at no route | Already fixed (uncommitted) | Preserved |
| 14 | Location pages duplicate business entity | **Confirmed** | Now a `Service` referencing `#business` by `@id` |
| 15 | `sameAs` / GBP incomplete | Confirmed, **blocked** | No URLs available — see owner-input doc |
| 16 | No metal-roof pricing page | **Confirmed** | `/metal-roof-cost-ontario` created |
| 17 | Blog content and authorship | Partly confirmed | Author/publisher now reference `#business` |
| 18 | Core Web Vitals not measured | Confirmed | **Still not measured — see limitations** |

Additional defects found that the audit did not report:

- All 10 blog posts also carried the doubled brand **and** declared an anonymous
  `Organization` as author and publisher. Caught by the new `seo:check`.
- Two service pages (`metal-tiles`, `standing-seam-roofing`) declared a second
  anonymous `LocalBusiness` as service provider.
- Named user-agent groups in `robots.txt` (Googlebot, GPTBot, and 15 others)
  had no `Disallow`, so `/admin` and `/api/` were crawlable for those bots. A
  named group fully replaces the `*` group.
- Structured data declared the logo as 260×60; the file is actually 4000×800.
- The Open Graph image was the 260×60-declared logo rather than a photograph.
- Contact form labels had no `htmlFor` and inputs no `id`, so no label was
  programmatically associated. No `autoComplete` attributes either.
- No `prefers-reduced-motion` handling anywhere, on a site using both CSS
  keyframe animations and Framer Motion.

## Changes implemented

### Crawling and indexing
- `app/robots.ts` — every named user-agent group now repeats the `/admin`,
  `/api/` disallow; `/_next/` stays crawlable; `SITE_URL` used as the origin.

### Sitemap
- `app/sitemap.ts` — rewritten. `lastModified` no longer uses build time; static
  pages use a single `CONTENT_UPDATED` constant and blog posts keep their real
  publication dates. `/metal-roof-cost-ontario` added. 38 URLs, all returning
  200.

### Metadata
- `app/layout.tsx` — homepage title now leads with the service; description
  shortened; Open Graph image switched to a real project photograph with correct
  dimensions; logo dimensions corrected to 4000×800.
- 16 page/layout files, 10 entries in `lib/locations.ts`, and 10 in
  `lib/blog-posts.ts` — brand removed from `title` so the root template supplies
  it exactly once. `openGraph.title` values keep the brand (the template does not
  apply to them).

### Structured data
- One business identity (`https://www.vahconstruction.com/#business`) is now
  referenced everywhere. Location pages emit a `Service` with a `provider`
  `@id` reference instead of a per-city `RoofingContractor`.
- `app/blog/[slug]/page.tsx` — `author` and `publisher` reference `#business`.
- No `Review` or `AggregateRating` markup anywhere.

### Internal linking
- `app/services/page.tsx` — full service index covering all 11 service pages.
- `app/locations/[city]/page.tsx` — service grid, cost-page link, and nearby
  areas as real anchors.
- `lib/constants.ts` — nav exposes metal roofing hub, metal tiles, luxury fences,
  custom steel fences, and the cost page.

### Content
- `app/metal-roof-cost-ontario/page.tsx` — new server-rendered cost guide:
  how quotes are calculated, roof surface area vs. floor area, system
  comparison, scope factors, inclusions/exclusions, contractor questions,
  FAQ, CTA. **Contains no dollar figures** — no approved pricing source exists.
- `app/projects/page.tsx` + `app/projects/ProjectsGallery.tsx` — split into a
  server page and a client gallery so project data renders server-side.
- `app/components/Hero.tsx` — H1 now names the service.

### Accessibility, forms, motion
- `app/contact/page.tsx` — `htmlFor`/`id` on every field, `autoComplete` and
  `inputMode` added, handler-level double-submit guard.
- `app/components/AddressAutocomplete.tsx` — label associated via `useId`,
  combobox ARIA added.
- `app/globals.css` + `app/components/MotionProvider.tsx` — reduced-motion
  support for both CSS animations and Framer Motion.
- `lib/analytics.ts` — new, reuses the existing GA4 tag. No-ops when the tag is
  absent. Sends no personal data. `generate_lead` fires only after the backend
  accepts the submission.

### Verification tooling
- `scripts/seo-check.mjs` + `npm run seo:check` — 13 checks against real
  rendered HTML.
- `npm run typecheck` added.

## Commands run and results

| Command | Result |
| --- | --- |
| `npx tsc --noEmit` | **exit 0** |
| `npx next build` | **exit 0** (was failing at baseline) |
| `npm run seo:check` | **13 passed, 0 failed** |
| `npx next start` + curl smoke tests | 200 on all sampled routes |

`seo:check` covers: robots resolves; `/_next/` crawlable; all user-agent groups
disallow `/admin`; sitemap declared; 38 sitemap URLs all 200; single production
origin; no duplicate URLs; exactly one `<title>` with the brand at most once; no
duplicate titles; description length; canonical origin and path; exactly one
non-empty `<h1>`; no unintended `noindex`; every JSON-LD block parses; no
business entity without the canonical `@id`; no `AggregateRating`; no orphaned
commercial pages; no broken internal links; genuine 404; OG image resolves.

### Before / after

| Measure | Before | After |
| --- | --- | --- |
| Production build | Failing | Passing |
| Pages with doubled brand | 26 | 0 |
| Service pages linked from hub | 4 of 11 | 11 of 11 |
| Service links on a city page | 0 | 6 + 4 contextual |
| Business entities in structured data | 4 distinct | 1 (`#business`) |
| `/projects` area values in HTML | 0 | 102 |
| `/projects` colour values in HTML | 0 | 72 |
| Sitemap URLs | 37 | 38 |
| Form fields with an associated label | 0 of 6 | 6 of 6 |

## Deployment and production verification

| Item | Value |
| --- | --- |
| Commit | `bdbe347` — *feat: strengthen VAH website SEO and conversions* |
| Branch / remote | `main` → `origin` (fast-forward, no force) |
| Push | `12bceb2..bdbe347` |
| Deploy | Vercel Git integration (no `vercel.json`, no CLI, no GitHub Actions) |
| Live after | ~60 s from push |
| Rollback needed | No |

Verified against `https://www.vahconstruction.com` after deploy:

- `npm run seo:check` against production: **13 passed, 0 failed**
- Home `<title>`: `VAH Construction | Metal Roofing Specialists — Southern Ontario`
  → `Metal Roofing Contractors in Southern Ontario | VAH Construction`
- `/metal-roof-cost-ontario`: 404 → **200**
- `/projects`: 200, **102 area values** server-rendered (was 0)
- `/locations/hamilton`: title `Metal Roofing in Hamilton, Ontario | VAH Construction`,
  3 references to the `#business` `@id`, nearby-area anchors live
- `https://vahconstruction.com` → `https://www.vahconstruction.com` (single 307, no loop)
- `/contact`: 200, rendered only — **no test submission was sent**

### Trade-off: `/projects` is now request-rendered

Reading `searchParams` on the server is a request-time API, so `/projects` moved
from prerendered (○) to server-rendered on demand (ƒ). Content is fully in the
HTML on every request, so the SEO objective holds, and the page reads a static
JSON import with no database call. The alternative — prerendering only the "All"
view — would have broken the existing `/projects?category=Metal+Fence` link from
the metal fences page, so the query-param support was kept.

## Content library (second phase)

216 new technical articles were added, taking the blog from 10 to 226 posts and
the sitemap from 38 to 254 URLs.

### How the risk was managed

The owner asked for 200–500 articles for SEO traffic. Google's **scaled content
abuse** policy targets mass-produced pages made primarily for ranking, and a
manual action under it would undo the technical work above. The mitigation was
to make every article genuinely distinct rather than template-spun:

- 216 separate topics were assigned across 13 clusters, each written against its
  own brief. No article shares a title or slug with another.
- One genuine near-duplicate slipped through (two clusters were both assigned
  barn/agricultural roofing). The build-time duplicate-slug guard in
  `lib/blog/index.ts` caught it; the weaker of the two was deleted rather than
  renamed, because renaming would have left two near-identical articles.
- Articles run roughly 1,000–1,900 words and explain mechanism (cryosuction and
  ice-lens growth in frost heave, Faraday-cage coverage in powder coating,
  UL 2218 test methodology, dew point and vapour drive) rather than restating
  benefits.
- Comparison articles name cases where a non-metal product is the better choice.

### Claim compliance (independently audited, not self-reported)

Verified by scanning the generated files directly:

| Check | Result |
| --- | --- |
| Dollar figures in new articles | **0** |
| `metaTitle` containing the brand | **0** (would have doubled it) |
| Articles missing a meta description | **0** |
| Duplicate slugs / titles across all 226 posts | **0** |
| "50-year", "lifetime warranty", "transferable warranty" | **0** |
| "insurance discount", "24-hour" | **0** |
| "non-prorated" | 5 — all generic explanations of the industry distinction |
| "maintenance-free" | 9 — all negations ("it is **not** maintenance-free") |

No invented municipal bylaws, frost depths, snow loads, climate statistics, or
building-code clause numbers. Where a fact depends on jurisdiction, articles
defer to the local building department or a qualified engineer.

### Renderer bug found and fixed

`renderSection` in `app/blog/[slug]/page.tsx` rendered only `section.heading`
for `h2` and `h3` and never rendered `section.text`. Since the content model
puts body copy on heading sections, **most prose in every article — including
the 10 pre-existing ones — was invisible on the page**. This was pre-existing
and would have silently swallowed the bulk of the new library. Fixed; a sample
article now serves ~9.6 KB of visible prose across 11 sections.

### Supporting changes

- `lib/blog/` — 13 topic seed files plus `types.ts` and `index.ts`. Seeds omit
  `date`; dates are assigned centrally so the sequence stays contiguous.
- Publication dates run from 2026-09-08 backwards one day per article to
  2026-02-05, as requested by the owner. This is a staggered rollout of content
  written in one sitting, not a record of when each piece was authored.
- Clusters are interleaved rather than concatenated, so the index does not show
  twenty consecutive fencing posts.
- `app/blog/page.tsx` — pagination (24/page) and category filters as real
  crawlable anchors. An off-by-one that duplicated one post across pages 1 and 2
  was found and fixed; page overlap is now verified at 0.
- `app/blog/[slug]/page.tsx` — related posts now drawn from the same category
  and offset per article (previously every article linked the same three), plus
  a per-category "Related services" block giving all 226 articles a contextual
  route into the commercial pages.

## Limitations

- **Core Web Vitals: NOT MEASURED.** No Lighthouse or headless browser was
  available in this environment. No lab or field performance numbers are
  claimed. Image `sizes`/`priority` were left as found rather than changed
  without measurement.
- **Lint: NOT RUN.** The repository has no ESLint configuration.
- **Automated tests: NOT RUN.** The repository has no test framework. The new
  `seo:check` is the only automated suite.
- **Browser smoke tests: NOT RUN** beyond HTTP-level checks. No screenshots,
  console-error inspection, or mobile viewport testing was possible without
  browser tooling.
- **Form submission was never exercised end to end.** No test lead was sent, to
  avoid reaching the real business. Only the client-side logic was reviewed.
- Unsupported marketing claims that predate this work were left in place rather
  than rewritten wholesale; they are itemised in `seo-owner-input-needed.md`.
