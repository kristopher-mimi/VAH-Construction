import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { LOCATIONS, getLocationBySlug } from "@/lib/locations";
import { PHONE, PHONE_HREF, EMAIL_HREF, EMAIL } from "@/lib/constants";
import Link from "next/link";

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ city: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocationBySlug(city);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: {
      canonical: `https://www.vahconstruction.com/locations/${loc.slug}`,
    },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://www.vahconstruction.com/locations/${loc.slug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = getLocationBySlug(city);
  if (!loc) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vahconstruction.com" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.vahconstruction.com/locations" },
      { "@type": "ListItem", position: 3, name: loc.name, item: `https://www.vahconstruction.com/locations/${loc.slug}` },
    ],
  };

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: "VAH Construction",
    description: `Standing seam metal roofing specialists serving ${loc.name}, ${loc.province}. Class 4 hail-rated, 50-year non-prorated warranty.`,
    url: `https://www.vahconstruction.com/locations/${loc.slug}`,
    telephone: "+14372473371",
    areaServed: {
      "@type": "City",
      name: loc.name,
      containedInPlace: { "@type": "AdministrativeArea", name: loc.province },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-neutral-950 overflow-hidden min-h-[52vh] flex items-end">
          <div className="absolute inset-0 bg-neutral-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/60 to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-amber-500/60 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pb-16 pt-36 lg:pb-20 lg:pt-40">
            <nav className="flex items-center gap-2 text-xs text-neutral-600 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-neutral-400 transition-colors">Locations</Link>
              <span>/</span>
              <span className="text-neutral-400">{loc.name}</span>
            </nav>

            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
              {loc.region} · {loc.province}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.06] mb-5">
              {loc.heroHeadline}
              <br />
              <span className="text-amber-500">{loc.heroAccent}</span>
            </h1>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl mb-8">
              {loc.heroSub}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-7 py-3.5 rounded-sm text-sm transition-colors duration-200"
              >
                Get a Free Quote
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-white font-semibold text-sm px-7 py-3.5 rounded-sm border border-white/15 hover:border-white/30 transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                {PHONE}
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
        </section>

        {/* Trust bar */}
        <section className="bg-neutral-900 border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {[
                { label: "50-Year Warranty", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "Class 4 Hail Rated", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
                { label: "Free Satellite Quote", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { label: "Fully Insured", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5 text-amber-500 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d={t.icon} />
                  </svg>
                  <span className="text-sm font-semibold text-white">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                  Metal Roofing in {loc.name}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
                  The Permanent Roofing Solution for {loc.name} Homeowners.
                </h2>
                <p className="text-neutral-400 leading-relaxed mb-5">{loc.intro}</p>
                <p className="text-neutral-400 leading-relaxed">{loc.weatherContext}</p>
              </div>
              <div className="space-y-4">
                {[
                  { title: "50-Year Non-Prorated Warranty", body: "Full coverage for the entire warranty term — not declining coverage. Transferable to new owners when you sell." },
                  { title: "Class 4 Hail & Wind Resistance", body: "The highest impact rating available. Rated to 250 km/h wind loads. Handles every storm Ontario produces." },
                  { title: "Remote Satellite Quoting", body: "We measure your roof by satellite — precise dimensions, no appointment needed. Written, itemized quote delivered same day." },
                  { title: "Steel Roofing Only", body: "VAH Construction does not install asphalt. Our entire focus is metal — standing seam, hidden fastener, premium systems." },
                ].map((item) => (
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

        {/* Services */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="mb-12">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">What We Install</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Metal Roofing Services in {loc.name}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Standing Seam Metal Roofing",
                  href: "/services/standing-seam-roofing",
                  body: "Continuous panels from ridge to eave. Concealed fasteners, zero exposed screws, zero leak points. The gold standard for Ontario homes.",
                },
                {
                  title: "Hidden Fastener Steel Roofing",
                  href: "/services/metal-roofing",
                  body: "All fastening hardware concealed beneath interlocking seams. Class 4 impact-rated, wind-resistant to 250 km/h.",
                },
                {
                  title: "Residential Metal Roofing",
                  href: "/services/residential-metal-roofing",
                  body: "Premium metal roofing for Ontario homes. Available in standing seam, metal tile, and multiple profiles and colours.",
                },
                {
                  title: "Commercial Metal Roofing",
                  href: "/services/commercial-metal-roofing",
                  body: "Low-slope and steep-slope metal roofing for industrial, retail, and institutional buildings in " + loc.name + ".",
                },
                {
                  title: "Roof Replacement",
                  href: "/services/roof-replacement",
                  body: "Full tear-off of existing asphalt or metal roofing. Deck inspection, repair, and new premium metal system installation.",
                },
                {
                  title: "Custom Metal Fencing",
                  href: "/services/metal-fences",
                  body: "Powder-coated steel and aluminum fencing. Horizontal slat, privacy screen, and custom architectural profiles.",
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="group bg-[#111111] border border-neutral-800 hover:border-amber-500/30 rounded-lg p-6 transition-all duration-300"
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-amber-400 transition-colors">{s.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-4">{s.body}</p>
                  <span className="text-amber-500 text-xs font-semibold inline-flex items-center gap-1">
                    Learn more
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                      <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Local knowledge */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="mb-8">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Local Expertise</span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                We Know {loc.name}.
              </h2>
            </div>
            <p className="text-neutral-400 leading-relaxed text-lg mb-8">{loc.localKnowledge}</p>

            {loc.nearbyAreas.length > 0 && (
              <div>
                <h3 className="text-white font-semibold text-sm mb-4">Also Serving Nearby Areas:</h3>
                <div className="flex flex-wrap gap-2">
                  {loc.nearbyAreas.map((area) => (
                    <span key={area} className="text-xs text-neutral-400 bg-neutral-800/60 border border-neutral-700/50 px-3 py-1.5 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                {loc.name} Questions
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Common Questions.</h2>
            </div>
            <div className="space-y-3">
              {loc.faqs.map((faq) => (
                <div key={faq.q} className="bg-[#111111] border border-neutral-800/60 rounded-sm p-5">
                  <h3 className="text-white font-bold text-sm mb-2">{faq.q}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">
              {loc.name} · Free Quote
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-5">
              Ready for a Permanent Roof in {loc.name}?
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Get a free, written quote — measured remotely by satellite, delivered same day. No appointment, no obligation.
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
              <a
                href={EMAIL_HREF}
                className="text-neutral-400 hover:text-white text-sm transition-colors"
              >
                {EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
