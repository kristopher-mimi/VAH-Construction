"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, PHONE, PHONE_HREF } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDesktopDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setDesktopDropdownOpen(false), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-neutral-950/97 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="flex items-center justify-center w-9 h-9 bg-amber-500 rounded-sm font-black text-black text-lg leading-none transition-colors group-hover:bg-amber-400">
              V
            </div>
            <div className="leading-none">
              <span className="block text-white font-extrabold text-base tracking-tight">
                VAH Construction
              </span>
              <span className="block text-amber-500 text-[9px] font-bold tracking-[0.2em] uppercase">
                Metal Roofing Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                      isActive(link.href) ? "text-amber-400" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className={`w-3 h-3 transition-transform duration-200 ${desktopDropdownOpen ? "rotate-180" : ""}`}
                    >
                      <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z" />
                    </svg>
                  </Link>

                  {desktopDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl py-2 z-50">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
                        <div className="w-3 h-3 bg-neutral-900 border-l border-t border-neutral-800 rotate-45 mx-auto mt-1" />
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex flex-col px-4 py-3 hover:bg-neutral-800/60 transition-colors group/item ${
                            isActive(child.href) && child.href !== "/services" ? "bg-neutral-800/40" : ""
                          }`}
                        >
                          <span className={`text-sm font-semibold transition-colors ${isActive(child.href) && child.href !== "/services" ? "text-amber-400" : "text-white group-hover/item:text-amber-400"}`}>
                            {child.label}
                          </span>
                          <span className="text-xs text-neutral-500 mt-0.5">{child.sub}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href) ? "text-amber-400" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-white font-semibold text-sm hover:text-amber-400 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500 flex-shrink-0">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm px-5 py-2.5 rounded-sm transition-colors duration-200"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-3">
            <a href={PHONE_HREF} aria-label="Call VAH Construction" className="text-amber-500">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-1"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? (
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-800 bg-neutral-950/98 backdrop-blur-md">
          <div className="px-5 py-4 flex flex-col">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.href} className="border-b border-neutral-800">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-3.5 text-base font-medium text-neutral-300"
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    >
                      <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 011.06 0L8 8.94l2.72-2.72a.75.75 0 111.06 1.06l-3.25 3.25a.75.75 0 01-1.06 0L4.22 7.28a.75.75 0 010-1.06z" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="pb-2 pl-4 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2.5 text-sm text-neutral-400 hover:text-amber-400 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3.5 text-base font-medium text-neutral-300 hover:text-white border-b border-neutral-800 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="mt-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-center py-3.5 rounded-sm transition-colors"
            >
              Get a Free Quote
            </Link>
            <a href={PHONE_HREF} className="text-center text-amber-400 font-semibold py-2.5 text-sm">
              {PHONE}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
