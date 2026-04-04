"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AddressAutocomplete from "@/app/components/AddressAutocomplete";

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx1Mfb1XjvPt2pfgSj9fNnP4hcsvMK7TpDnPazvuH60HZesjoFkrGuEiASmQXG5PkD0PQ/exec";

export default function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [address, setAddress] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      city: (form.elements.namedItem("city") as HTMLInputElement).value,
      address,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("success");
      form.reset();
      setAddress("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-[#0e0e0e] py-20 lg:py-28 overflow-hidden">

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(217,119,6,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Top border line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-amber-500/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">
            Ready to Get Started?
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.06] mb-6">
            Your Home Deserves
            <br />
            <span className="text-amber-500">A Roof That Lasts.</span>
          </h2>

          <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Get a free, no-pressure quote from Southern Ontario&apos;s metal roofing
            specialists. We measure your roof remotely using satellite technology and deliver
            a detailed, accurate written quote — no site visit required, zero obligation.
          </p>

          {/* Contact form */}
          <div className="bg-[#111111] border border-neutral-800 rounded-lg p-6 sm:p-8 text-left max-w-2xl mx-auto mb-10">

            {status === "success" ? (
              <div className="py-10 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6 text-amber-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-white font-extrabold text-xl mb-2">Quote Request Sent</h3>
                <p className="text-neutral-400 text-sm">We&apos;ll get back to you within the hour.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    className="bg-neutral-900 border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="(905) 555-0100"
                    className="bg-neutral-900 border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    className="bg-neutral-900 border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    City / Town
                  </label>
                  <input
                    name="city"
                    type="text"
                    placeholder="St. Catharines"
                    className="bg-neutral-900 border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200"
                  />
                </div>
                <div className="sm:col-span-2">
                  <AddressAutocomplete
                    label="Property Address"
                    required
                    value={address}
                    onChange={setAddress}
                  />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    What do you need? (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Standing seam replacement, metal tiles, metal siding, general inquiry..."
                    className="bg-neutral-900 border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold py-4 rounded-sm transition-colors duration-200 text-base"
                    style={{ boxShadow: "0 0 30px rgba(217,119,6,0.2)" }}
                  >
                    {status === "loading" ? "Sending..." : "Send My Free Quote Request"}
                  </button>
                  {status === "error" && (
                    <p className="text-center text-red-400 text-xs mt-3">
                      Something went wrong. Please call us directly or try again.
                    </p>
                  )}
                  {status === "idle" && (
                    <p className="text-center text-neutral-600 text-xs mt-3">
                      We typically respond within the same hour. No spam, no pressure.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* Alt: call us */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <span className="text-neutral-600">Prefer to talk directly?</span>
            <a
              href="tel:+14372473371"
              className="flex items-center gap-2 text-white font-semibold hover:text-amber-400 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              (437) 247-3371
            </a>
            <span className="hidden sm:block text-neutral-700">•</span>
            <a
              href="mailto:info@vahconstruction.com"
              className="flex items-center gap-2 text-white font-semibold hover:text-amber-400 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-500">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              info@vahconstruction.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
