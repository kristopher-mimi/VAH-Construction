import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { LOCATIONS } from "@/lib/locations";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Metal Roofing Service Areas — Southern Ontario | VAH Construction",
  description:
    "VAH Construction serves Niagara Region, Hamilton, Burlington, Oakville and all of Southern Ontario. Standing seam metal roofing specialists — free satellite quote anywhere we serve.",
  alternates: { canonical: "https://www.vahconstruction.com/locations" },
  openGraph: {
    title: "Metal Roofing Service Areas — Southern Ontario | VAH Construction",
    description:
      "VAH Construction serves Niagara Region, Hamilton, Burlington, Oakville and all of Southern Ontario with premium standing seam metal roofing.",
    url: "https://www.vahconstruction.com/locations",
  },
};

export default function LocationsIndexPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-neutral-950 overflow-hidden min-h-[42vh] flex items-end">
          <div className="absolute inset-0 bg-neutral-950/85" />
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-amber-500/60 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pb-14 pt-32 lg:pb-16 lg:pt-36">
            <nav className="flex items-center gap-2 text-xs text-neutral-600 mb-5">
              <Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-neutral-400">Locations</span>
            </nav>
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Service Areas</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.06] mb-4">
              Metal Roofing Across
              <br />
              <span className="text-amber-500">Southern Ontario.</span>
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
              VAH Construction serves Niagara Region, Hamilton, Burlington, Oakville, and surrounding Southern Ontario communities with standing seam metal roofing and custom metal fencing. Free remote quote — same-day response.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-950 to-transparent" />
        </section>

        {/* Location grid */}
        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group bg-[#111111] border border-neutral-800 hover:border-amber-500/30 rounded-lg p-7 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="text-white font-extrabold text-xl group-hover:text-amber-400 transition-colors">
                        {loc.name}
                      </h2>
                      <p className="text-neutral-600 text-xs mt-0.5">{loc.region} · {loc.province}</p>
                    </div>
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-amber-500/40 group-hover:text-amber-500 transition-colors mt-1 flex-shrink-0">
                      <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
                    </svg>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                    {loc.heroSub}
                  </p>
                  <div className="mt-4 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                    <span className="text-amber-500 text-xs font-semibold">View details</span>
                    <span className="text-neutral-600 text-xs">{loc.population}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-14">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <p className="text-neutral-400 mb-6">
              Don&apos;t see your city? VAH Construction serves all of Southern Ontario — contact us and we&apos;ll make it work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3.5 rounded-sm text-sm transition-colors"
              >
                Request a Quote
              </Link>
              <a href={PHONE_HREF} className="text-white font-semibold hover:text-amber-400 transition-colors text-sm">
                {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
