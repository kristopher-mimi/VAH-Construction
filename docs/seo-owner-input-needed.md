# Owner input needed

Short list of things code cannot resolve. Nothing here blocked the rest of the
implementation — every item below was worked around by using neutral wording or
by omitting the unverifiable element rather than inventing one.

## 1. Warranty and rating claims (highest priority)

These claims appear throughout the existing site copy and structured data:

- "50-year non-prorated, transferable warranty"
- "Class 4 hail-rated" / "every roof is Class 4"
- "Lifetime warranty" / "Backed for Life"
- "Wind rating to 250 km/h"
- "Energy Star certified"

**What is needed:** the manufacturer warranty document and product data sheets
that support each claim, and confirmation of which systems each applies to (all
systems, or only specific profiles).

**What was done meanwhile:** these claims were left exactly where they already
existed — they were not removed, but they were also not copied into any new
page. The new cost page and the new location service sections were written
without them. If the documents do not support a claim, the wording needs an
editorial pass across the existing pages.

## 2. Approved pricing

There is no approved pricing source in the repository.

**What is needed:** a current, approved price list or range, with currency,
units (per square foot of roof surface vs. per square), what scope it covers,
and whether HST is included.

**What was done meanwhile:** `/metal-roof-cost-ontario` was written as a
complete cost *guide* with zero dollar figures. It explains how quotes are
calculated and what drives scope, and routes to the existing quote form.

**Also flagged:** existing blog posts already publish dollar figures (for
example `lib/blog-posts.ts` contains an "$8,000–$25,000" range and percentage
comparisons). These predate this work and were left untouched, but they should
be reviewed against an approved source, since they read as VAH's own pricing.

## 3. Per-city project evidence

`data/projects.json` has no city field, so no project can be truthfully
attributed to a location page.

**What is needed:** a city (and ideally year) recorded against each project that
is approved for publication.

**What was done meanwhile:** location pages link to services and nearby areas
and carry local context, but no project-proof module was added — inventing a
city for an existing photo would have been fabrication. No "coming soon" section
was published either.

## 4. Experience claim

The site states "23+ Years" in the trust bar. The founding date is not recorded
anywhere in the repository, and no `foundingDate` was added to structured data.

**What is needed:** the actual year the business started operating.

## 5. Business profiles for `sameAs`

Structured data currently lists only the Instagram profile, which is verified in
`lib/constants.ts`.

**What is needed:** the Google Business Profile URL, and any Facebook, LinkedIn,
or trade-association profile URLs.

**What was done meanwhile:** no profile URLs were guessed. `sameAs` still
contains only Instagram.

## 6. Reviews

No approved, attributable customer reviews exist in the repository.

**What is needed:** review text with provenance and permission to publish.

**What was done meanwhile:** no `Review` or `AggregateRating` structured data
was added. Google's guidelines prohibit self-serving review markup on your own
Organization/LocalBusiness, so even once reviews are supplied they should be
displayed as visible testimonials without rating markup.
