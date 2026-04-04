import Link from "next/link";
import {
  COMPANY,
  TAGLINE,
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS,
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  SERVICE_AREAS,
} from "@/lib/constants";

const serviceLinks = [
  { label: "All Services", href: "/services" },
  { label: "Metal Roofing", href: "/services/metal-roofing" },
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Metal Fences", href: "/services/metal-fences" },
  { label: "Metal Siding", href: "/services/metal-siding" },
];

const companyLinks = [
  { label: "About VAH", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-neutral-800/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8 lg:pt-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/50">

          {/* Brand — span 4 cols */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-9 h-9 bg-amber-500 rounded-sm font-black text-black text-lg leading-none">
                V
              </div>
              <div className="leading-none">
                <span className="block text-white font-extrabold text-base tracking-tight">
                  {COMPANY}
                </span>
                <span className="block text-amber-500 text-[9px] font-bold tracking-[0.2em] uppercase">
                  {TAGLINE}
                </span>
              </div>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5 max-w-xs">
              Southern Ontario&apos;s dedicated metal roofing specialists. We
              install standing seam and metal tiles — every job
              backed by a lifetime, non-prorated, transferable warranty.
            </p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          {/* Services — span 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-neutral-500 hover:text-amber-400 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — span 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-neutral-500 hover:text-amber-400 text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas — span 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Where We Work
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_AREAS.slice(0, 7).map((a) => (
                <li key={a} className="text-neutral-500 text-sm">{a}</li>
              ))}
              <li className="text-neutral-600 text-sm">+ surrounding ON</li>
            </ul>
          </div>

          {/* Contact — span 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href={PHONE_HREF} className="flex items-start gap-2.5 text-sm text-neutral-400 hover:text-amber-400 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="flex items-start gap-2.5 text-sm text-neutral-400 hover:text-amber-400 transition-colors break-all">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-neutral-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {ADDRESS}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} {COMPANY} Services. All rights reserved.</p>
          <p>Licensed &amp; Insured · WSIB Covered · Smithville, Ontario</p>
        </div>
      </div>
    </footer>
  );
}
