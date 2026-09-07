import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Metal Roofing Cost in Ontario: What to Expect",
  description:
    "How metal roof quotes are calculated in Ontario — roof area vs. floor area, system choice, complexity, tear-off and deck work, and what estimates include.",
  alternates: { canonical: "https://www.vahconstruction.com/metal-roof-cost-ontario" },
  openGraph: {
    title: "Metal Roofing Cost in Ontario | VAH Construction",
    description:
      "An honest guide to how metal roofing quotes are built in Ontario: roof surface area, system type, complexity, and the scope items that move the number.",
    url: "https://www.vahconstruction.com/metal-roof-cost-ontario",
  },
};

const faqs = [
  {
    q: "Why won't a roofing contractor give a price over the phone?",
    a: "Because the three inputs that decide the number — measured roof surface area, the roofing system you choose, and the complexity of the roof — are all unknown until someone measures. A figure quoted before measurement is a guess, and guesses get revised upward once the crew is on site. A written quote built from real measurements is the only number worth comparing.",
  },
  {
    q: "Does a 2,000 sq ft house need 2,000 sq ft of roofing?",
    a: "No. Floor area and roof surface area are different measurements. A pitched roof covers the same footprint with a sloped plane, and that plane is always larger than the footprint beneath it. Overhangs, dormers, porches and attached garages add more. This is why quotes are measured from the roof itself rather than calculated from the size of the house.",
  },
  {
    q: "What is a roofing square?",
    a: "A square is the standard unit of measure in roofing: 100 square feet of roof surface. Contractors quote materials and labour by the square rather than by the square foot, so when a quote references squares it is describing the measured area of the roof plane, not the floor area of the home.",
  },
  {
    q: "Is metal roofing more expensive than asphalt shingles?",
    a: "Metal roofing systems generally carry a higher upfront cost than an asphalt shingle re-roof. How much higher depends entirely on the roof — its measured area, its complexity, the system selected, and the condition of the deck underneath. That is why we publish no figures here and provide a written quote instead.",
  },
  {
    q: "Does standing seam cost more to install than metal tile?",
    a: "The two systems are priced differently because the work is different. Standing seam uses long custom-formed panels that are fabricated to the exact run of each roof plane and fastened with concealed clips, which generally means more fabrication and more labour hours per square. Metal tile is supplied in shorter interlocking panels that install in courses. Which one is the better value on a given roof depends on the roof.",
  },
  {
    q: "Will removing the old roof change the price?",
    a: "Yes. Tear-off is labour, and the material that comes off has to be disposed of — bin rental and landfill tipping fees are real line items. The number of existing layers matters as well. Ask whether tear-off and disposal are included in the quote or billed separately.",
  },
  {
    q: "What happens if the crew finds rotten decking?",
    a: "Deck condition cannot be fully assessed until the old roofing is removed, so most quotes handle it as a contingency: an agreed rate for sheathing replacement, applied only to what is actually replaced. Ask how deck repairs are priced and how they will be documented before the work starts, so there is no dispute later.",
  },
  {
    q: "Can a metal roof be quoted without a site visit?",
    a: "Measurements can be taken from aerial and satellite imagery, which is accurate enough to establish roof area, pitch and layout for a written quote. Some details — deck condition, access, and existing flashing conditions — are confirmed on site or on the day of tear-off. A good contractor will tell you which parts of the quote are measured and which are contingent.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vahconstruction.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Metal Roofing Cost in Ontario",
      item: "https://www.vahconstruction.com/metal-roof-cost-ontario",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Metal Roofing Cost in Ontario",
  description:
    "A guide to how metal roofing quotes are calculated in Ontario: measured roof surface area, system selection, roof complexity, and the scope items that determine the final number.",
  url: "https://www.vahconstruction.com/metal-roof-cost-ontario",
  inLanguage: "en-CA",
  publisher: { "@id": "https://www.vahconstruction.com/#business" },
  author: { "@id": "https://www.vahconstruction.com/#business" },
  about: "Metal roofing cost factors in Ontario",
};

const quoteInputs = [
  {
    title: "Measured Roof Surface Area",
    body: "Not the floor area of your home — the actual area of every roof plane, measured from the roof itself. This is the single largest driver of both material quantity and labour hours.",
  },
  {
    title: "The Roofing System You Choose",
    body: "Standing seam, metal tile and exposed-fastener panels are fabricated differently and installed differently. The system decides how much shop work, how much site labour, and which accessories the roof needs.",
  },
  {
    title: "Roof Complexity",
    body: "Two roofs of identical area can require very different amounts of work. Hips, valleys, dormers, chimneys and changes in plane all add cutting, flashing and detail labour that a simple gable roof never needs.",
  },
  {
    title: "Condition of What Is Already There",
    body: "How many layers come off, what the sheathing looks like underneath, and whether flashings and eavestrough are being reused or replaced. Some of this is only knowable once the old roof is removed.",
  },
];

const scopeFactors = [
  {
    title: "Roof Complexity",
    body: "A simple gable roof is mostly open field area — long, uninterrupted runs of panel. A cut-up roof with multiple planes, dormers and changes in direction is mostly edges and details, and details are where the hours go.",
  },
  {
    title: "Pitch and Slope",
    body: "Steeper roofs increase surface area for the same footprint and slow the crew down. Above a certain pitch, work requires roof jacks, staging and fall-arrest anchoring, which adds setup time to every day on site.",
  },
  {
    title: "Hips and Valleys",
    body: "Every hip and valley is a cut line. Panels must be measured, cut on the angle and closed with formed flashing. A roof with many valleys carries far more fabrication and flashing labour than its area suggests.",
  },
  {
    title: "Tear-Off and Disposal",
    body: "Removing existing roofing is labour, and the debris has to go somewhere. Bin rental and landfill tipping fees are genuine costs, and multiple existing layers multiply both.",
  },
  {
    title: "Underlayment",
    body: "The membrane between the deck and the metal. Synthetic underlayment, self-adhered ice-and-water membrane at eaves and valleys, and the coverage area specified all change the material and labour in this layer.",
  },
  {
    title: "Deck Condition and Repairs",
    body: "Sheathing that is delaminated, water-damaged or rotten has to be replaced before metal goes down. This is usually quoted as a unit rate rather than a fixed sum, because the extent is unknown until the roof is open.",
  },
  {
    title: "Flashings and Trim",
    body: "Drip edge, rake trim, ridge caps, valley pans, sidewall and headwall flashing, and transitions to other roof surfaces. On a metal roof these are formed components, and they are a real portion of the material list.",
  },
  {
    title: "Penetrations",
    body: "Chimneys, skylights, plumbing stacks, bathroom and range vents, satellite mounts and attic ventilation. Each one has to be flashed and sealed individually, and masonry chimneys are the most labour-intensive of them.",
  },
  {
    title: "Eavestrough and Accessories",
    body: "Whether eavestrough, downspouts, soffit, fascia, snow retention or ventilation upgrades are part of the project. These are often quoted as separate lines, and they should be.",
  },
  {
    title: "Colour and Profile Choice",
    body: "Coating systems, finishes and panel profiles are not all priced the same, and some colours and profiles carry longer lead times from the supplier — which affects scheduling as much as cost.",
  },
  {
    title: "Site Access",
    body: "Where the truck can park, whether a lift or crane is needed to get panels onto the roof, overhead wires, tight lot lines, landscaping to protect, and how far material has to be carried.",
  },
  {
    title: "Structural and Building Details",
    body: "Roof height and the number of storeys, attached garages and additions with their own roof planes, low-slope sections that need a different detail, and anything that changes how the crew works the roof.",
  },
];

const included = [
  "Removal of the existing roofing to the specified number of layers",
  "Disposal of removed material, including bin and tipping fees",
  "Metal roofing panels in the agreed system, profile and colour",
  "Underlayment, including ice-and-water membrane at the specified locations",
  "Fasteners, clips and closures required by the system",
  "Standard flashings, drip edge, ridge and valley detailing",
  "Flashing of existing roof penetrations and vents",
  "Labour, equipment, staging and fall protection",
  "Site cleanup and magnetic sweep for fasteners and debris",
  "Workmanship warranty and manufacturer material warranty documentation",
];

const excluded = [
  "Replacement of damaged or rotten roof sheathing (usually a separate unit rate)",
  "Structural repairs to rafters, trusses or framing",
  "Chimney masonry repair, rebuilding or repointing",
  "New skylights, or replacement of failed skylight units",
  "New eavestrough, downspouts, soffit and fascia unless itemized",
  "Attic insulation and ventilation upgrades beyond existing vent replacement",
  "Interior repairs to drywall or finishes from prior leaks",
  "Removal of unexpected additional roofing layers found during tear-off",
  "Permits, engineering or inspections where a municipality requires them",
  "Snow retention systems, solar mounts and other add-on accessories",
];

const questions = [
  {
    title: "Is the quote in writing?",
    body: "A verbal number is not a quote. Ask for a written document with the company name, contact details, scope and total. Compare written quotes to written quotes only.",
  },
  {
    title: "Is the scope itemized?",
    body: "Tear-off, disposal, underlayment, panels, flashings, accessories and labour should be identifiable as separate items. A single lump sum makes it impossible to tell what you are actually buying.",
  },
  {
    title: "How was the roof measured?",
    body: "Ask whether the area came from aerial imagery, a physical measurement, or an estimate from the size of the house. The last one is not a measurement.",
  },
  {
    title: "Are you covered by WSIB and liability insurance?",
    body: "Ask for a current WSIB clearance certificate and a certificate of liability insurance naming the contractor. Both should be produced without hesitation, and both should be current.",
  },
  {
    title: "What does the workmanship warranty cover, and for how long?",
    body: "The workmanship warranty is the contractor's own coverage of the installation. It is distinct from the manufacturer's material warranty. Ask for both in writing, and ask what each one excludes.",
  },
  {
    title: "How are deck repairs priced and documented?",
    body: "Ask for the unit rate for sheathing replacement before the job starts, and ask whether you will be shown and sent photographs of what was replaced.",
  },
  {
    title: "What is the timeline, and what happens if weather stops work?",
    body: "Ask for a realistic start window, the expected duration on site, and how the roof is protected overnight or if the job is paused mid-project.",
  },
  {
    title: "Who handles cleanup and disposal?",
    body: "Confirm that debris removal, bin placement and a magnetic sweep of the property are part of the price, and where the bin will sit while the work is underway.",
  },
  {
    title: "What is the payment schedule?",
    body: "Ask about the deposit, the milestones, and the holdback until completion. Be cautious of any request for full payment before the work is finished.",
  },
  {
    title: "Who is actually doing the work?",
    body: "Ask whether the crew is employed by the company or subcontracted, and who your point of contact is once the job is underway.",
  },
];

export default function MetalRoofCostOntarioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <PageHero
          label="Cost Guide"
          headline="Metal Roofing Cost"
          headlineAccent="in Ontario"
          subheadline="No two roofs price the same way. This guide explains how metal roofing quotes are actually built in Ontario — what gets measured, what changes the scope, and what to ask before you sign anything."
          breadcrumbs={[{ label: "Metal Roofing Cost in Ontario" }]}
          ctaLabel="Get a Free Written Quote"
          ctaHref="/contact"
        />

        {/* Why there is no flat rate */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                  How Pricing Works
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                  How a Metal Roofing Quote Is Actually Calculated.
                </h2>
                <div className="space-y-4 text-neutral-400 leading-relaxed">
                  <p>
                    There is no flat rate for a metal roof in Ontario, and any contractor who offers one before
                    measuring is quoting a number they will need to revise. Roofing is priced from the roof — its
                    measured surface area, the system going on it, and how complicated it is to work.
                  </p>
                  <p>
                    A quote is built by taking the measured area of every roof plane, applying the material list for
                    the chosen system, adding the flashings and accessories that the roof&apos;s geometry requires,
                    and estimating the labour hours those details will take. Tear-off, disposal and any deck work are
                    layered on top. Change any one of those inputs and the total moves.
                  </p>
                  <p>
                    That is why we publish no figures on this page. A range pulled from a national average tells you
                    nothing about your roof, and a per-square-foot number that ignores pitch, valleys and deck
                    condition is not an estimate — it is a placeholder. What follows is the structure behind the
                    number, so that when you receive a{" "}
                    <Link href="/contact" className="text-amber-500 hover:text-amber-400 transition-colors">
                      written quote
                    </Link>{" "}
                    you can read it properly.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {quoteInputs.map((item) => (
                  <div key={item.title} className="bg-[#111111] border border-neutral-800 rounded-lg p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-amber-500">
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                        <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Roof area vs floor area */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                The Most Misunderstood Number
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Roof Surface Area Is Not the Same as Floor Area.
              </h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  This is the concept that causes more confusion than anything else in roofing, and it is worth
                  getting right before you compare a single quote.
                </p>
                <p>
                  A 2,000 sq ft house does not have a 2,000 sq ft roof. Floor area describes the space inside the
                  building. Roof surface area describes the sloped plane sitting on top of it — and a sloped plane is
                  always larger than the flat footprint underneath. The steeper the pitch, the larger that plane
                  becomes for exactly the same house.
                </p>
                <p>
                  Overhangs push the roof out past the walls on every side. Dormers add small planes with their own
                  faces and cheeks. Porches, additions, bay windows and attached garages each add roof that no floor
                  plan accounts for. And on a two-storey home, the floor area counts both levels while the roof only
                  covers the top one — so the roof can be smaller than the floor area, not larger. There is no
                  reliable way to work backwards from the size of a house to the size of its roof.
                </p>
                <p>
                  This is why a real quote is measured from the roof itself, plane by plane, whether that measurement
                  is taken from aerial imagery or on site. It is also why roofers quote in{" "}
                  <span className="text-neutral-300 font-semibold">squares</span> — the industry unit equal to 100
                  square feet of roof surface — rather than in the language of house size. When you see squares on a
                  quote, you are looking at measured roof, and that is the number that should be the same across
                  every quote you compare.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  n: "01",
                  title: "Pitch Adds Surface",
                  body: "The same footprint under a steeper roof produces a larger roof plane. Pitch is measured, not assumed.",
                },
                {
                  n: "02",
                  title: "Overhangs Add Surface",
                  body: "Eaves and rake overhangs extend the roof beyond the exterior walls on every side of the building.",
                },
                {
                  n: "03",
                  title: "Features Add Surface",
                  body: "Dormers, porches, bay windows, additions and attached garages all carry roof planes of their own.",
                },
                {
                  n: "04",
                  title: "Storeys Complicate It",
                  body: "A two-storey home counts both floors in its square footage but has only one roof over the top.",
                },
              ].map((item) => (
                <div key={item.n} className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <span className="text-2xl font-black text-neutral-700 leading-none block mb-3">{item.n}</span>
                  <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* System comparison */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                System Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Standing Seam vs. Metal Tile: Where the Difference Comes From.
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                The system you choose changes the material list, the amount of fabrication, and the number of labour
                hours on site. Neither is universally the right answer — they suit different roofs and different
                homes. Both are covered in more detail on our{" "}
                <Link
                  href="/services/metal-roofing"
                  className="text-amber-500 hover:text-amber-400 transition-colors"
                >
                  metal roofing
                </Link>{" "}
                overview.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-5">
              {[
                {
                  title: "Standing Seam",
                  href: "/services/standing-seam-roofing",
                  linkLabel: "Standing seam roofing",
                  body: "Long panels formed to the exact run of each roof plane, joined by raised vertical seams with all fastening hardware concealed beneath them.",
                  points: [
                    {
                      h: "Fabrication",
                      p: "Panels are cut and formed to the measured length of each plane, so fabrication is specific to your roof rather than pulled from stock lengths.",
                    },
                    {
                      h: "Installation labour",
                      p: "Panels are set individually with concealed clips and seamed. Handling long panels and detailing each seam takes more time per square than a coursed system.",
                    },
                    {
                      h: "Where it suits",
                      p: "Long, uninterrupted roof planes; contemporary and architectural homes; low-slope sections; and anywhere a clean, unbroken surface is the point.",
                    },
                  ],
                },
                {
                  title: "Metal Tile",
                  href: "/services/metal-tiles",
                  linkLabel: "Metal tile roofing",
                  body: "Shorter interlocking panels pressed into the profile of traditional shingles or tiles, installed in courses up the roof.",
                  points: [
                    {
                      h: "Fabrication",
                      p: "Panels arrive in standard sizes already profiled at the factory, so far less roof-specific fabrication is involved before installation begins.",
                    },
                    {
                      h: "Installation labour",
                      p: "Panels lock into the course below and install in rows. On cut-up roofs with many planes, shorter panels mean less waste and less awkward handling.",
                    },
                    {
                      h: "Where it suits",
                      p: "Traditional and heritage homes, complex roof shapes with many planes and hips, and neighbourhoods where a conventional shingle appearance matters.",
                    },
                  ],
                },
              ].map((system) => (
                <div key={system.title} className="bg-[#111111] border border-neutral-800 rounded-lg p-6 lg:p-8 flex flex-col">
                  <h3 className="text-white font-bold text-xl mb-3">{system.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">{system.body}</p>
                  <div className="space-y-4 flex-1 mb-6">
                    {system.points.map((point) => (
                      <div key={point.h} className="border-l-2 border-neutral-800 pl-4">
                        <h4 className="text-neutral-300 font-bold text-xs uppercase tracking-wider mb-1">
                          {point.h}
                        </h4>
                        <p className="text-neutral-500 text-sm leading-relaxed">{point.p}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={system.href}
                    className="text-amber-500 hover:text-amber-400 text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    {system.linkLabel}
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                      <path
                        fillRule="evenodd"
                        d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-neutral-600 text-sm mt-8">
              Seeing both systems installed on real Ontario homes is often more useful than reading about them —
              our{" "}
              <Link href="/projects" className="text-amber-500 hover:text-amber-400 transition-colors">
                completed projects
              </Link>{" "}
              show how each one looks on different roof shapes.
            </p>
          </div>
        </section>

        {/* Scope factors */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Scope Drivers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                What Changes the Scope of the Job.
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                These are the variables a contractor is assessing when they build your quote. If two quotes for the
                same roof differ significantly, the explanation is almost always here — one of them has scoped an
                item the other has left out, or assumed away.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {scopeFactors.map((factor) => (
                <div key={factor.title} className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <h3 className="text-white font-bold mb-2">{factor.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{factor.body}</p>
                </div>
              ))}
            </div>

            <p className="text-neutral-600 text-sm mt-8">
              If the existing roof is being removed entirely, our{" "}
              <Link
                href="/services/roof-replacement"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                roof replacement
              </Link>{" "}
              page walks through what a full tear-off and re-roof involves from start to finish.
            </p>
          </div>
        </section>

        {/* Included vs excluded */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Reading a Quote
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                What an Estimate Typically Includes — and Excludes.
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                This varies by contractor, and the word to hold onto is{" "}
                <span className="text-neutral-300 font-semibold">typically</span>. Nothing below is a rule. Use it as
                a checklist against the document in front of you: if an item appears on one quote and not another,
                the quotes are not describing the same job.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-5">
              <div className="bg-[#111111] border border-neutral-800 rounded-lg p-6 lg:p-8">
                <h3 className="text-white font-bold text-lg mb-5">Typically Included</h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-amber-500">
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                        </svg>
                      </div>
                      <span className="text-neutral-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#111111] border border-neutral-800 rounded-lg p-6 lg:p-8">
                <h3 className="text-white font-bold text-lg mb-5">Typically Excluded or Quoted Separately</h3>
                <ul className="space-y-3">
                  {excluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5 text-neutral-500">
                          <path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z" />
                        </svg>
                      </div>
                      <span className="text-neutral-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-neutral-600 text-sm mt-8">
              An excluded item is not a red flag on its own — no contractor can price rot they have not seen yet.
              What matters is that the exclusion is stated in writing, and that you know how it will be priced if it
              turns up.
            </p>
          </div>
        </section>

        {/* Questions to ask */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Homeowner Checklist
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                Questions to Ask Any Roofing Contractor.
              </h2>
              <p className="text-neutral-400 leading-relaxed">
                Ask every contractor you speak with the same questions, including us. The answers tell you more about
                who you are dealing with than the total at the bottom of the page does.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {questions.map((item, i) => (
                <div key={item.title} className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl font-black text-neutral-700 leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-white font-bold text-sm leading-tight pt-1">{item.title}</h3>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Cost Questions
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Common Questions About Metal Roofing Cost.
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-[#111111] border border-neutral-800/60 rounded-sm p-5">
                  <h3 className="text-white font-bold text-sm mb-2">{faq.q}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">
              Free Quote
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
              Get a Free Written Quote for Your Roof.
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              The only number that means anything is the one measured from your roof. Tell us the address and what
              you are considering, and we will put together a written, itemized quote — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-sm text-base transition-colors duration-200"
                style={{ boxShadow: "0 0 30px rgba(217,119,6,0.2)" }}
              >
                Get a Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-white font-semibold border border-white/15 hover:border-white/30 px-8 py-4 rounded-sm text-base transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                {PHONE}
              </a>
            </div>
            <p className="text-neutral-600 text-sm mt-8">
              VAH Construction installs metal roofing across Southern Ontario from Smithville, Ontario.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
