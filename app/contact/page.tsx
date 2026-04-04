"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import PageHero from "@/app/components/PageHero";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, ADDRESS, SERVICE_AREAS } from "@/lib/constants";
import AddressAutocomplete from "@/app/components/AddressAutocomplete";

const services = [
  "Standing Seam Roofing",
  "Metal Tile Roofing",
  "Metal Fence",
  "Metal Siding",
  "Roof Replacement",

  "Remote Roof Assessment",
  "Not sure yet",
];

const faq = [
  {
    q: "How quickly do you respond to quote requests?",
    a: "Usually within the same hour — at most within 1 hour. In very rare cases it may take until the end of the day. For urgent issues, call us directly at (437) 247-3371.",
  },
  {
    q: "Do you charge for quotes?",
    a: "No. Our quotes are provided at no charge, with no obligation. In most cases, we measure your roof remotely using satellite imagery — so you receive an accurate, detailed quote without needing to schedule a visit.",
  },
  {
    q: "How far do you travel for projects?",
    a: "We regularly work across Hamilton, St. Catharines, Niagara Falls, Kitchener, Cambridge, Guelph, Brantford, Burlington, Oakville, Mississauga, Muskoka, and surrounding areas. We're flexible — for the right project, we'll travel further. Reach out and we'll make it work.",
  },
  {
    q: "Do you provide written quotes?",
    a: "Yes. Every quote is provided in writing, itemized, with no hidden fees. What we quote is what you pay — any changes require written approval from the client.",
  },
  {
    q: "Can I get an estimate over the phone or email?",
    a: "Yes — and in most cases, the quote we send is exact, not a ballpark. We measure 99% of roofs remotely using satellite technology, which gives us precise dimensions, pitch, and surface area without a site visit. You receive a detailed, written quote by email — no appointment needed.",
  },
];

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx1Mfb1XjvPt2pfgSj9fNnP4hcsvMK7TpDnPazvuH60HZesjoFkrGuEiASmQXG5PkD0PQ/exec";

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [address, setAddress] = useState("");

  const toggle = (s: string) =>
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

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
      message: `Services: ${selected.join(", ") || "—"}\n${(form.elements.namedItem("message") as HTMLTextAreaElement).value}`,
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
      setSelected([]);
      setAddress("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Contact Us"
          headline="Let's Talk About"
          headlineAccent="Your Roof."
          subheadline="Get a free, no-obligation quote from Southern Ontario's metal roofing specialists. We typically respond within the same hour — rarely longer than a day."
          breadcrumbs={[{ label: "Contact" }]}
        />

        <section className="bg-neutral-950 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">

              {/* Left: Form */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {status === "success" ? (
                    <div className="bg-[#111111] border border-amber-500/30 rounded-lg p-10 text-center">
                      <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-amber-500">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <h2 className="text-white font-extrabold text-2xl mb-3">Message Received</h2>
                      <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mx-auto">
                        We&apos;ll review your request and typically get back to you within the same hour. For urgent issues, call us directly at{" "}
                        <a href={PHONE_HREF} className="text-amber-500">{PHONE}</a>.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                            Full Name *
                          </label>
                          <input
                            name="name"
                            type="text"
                            required
                            placeholder="Sarah Johnson"
                            className="bg-[#111111] border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                            Phone *
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            required
                            placeholder="(905) 555-0100"
                            className="bg-[#111111] border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                            Email
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder="sarah@email.com"
                            className="bg-[#111111] border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                            City / Town
                          </label>
                          <input
                            name="city"
                            type="text"
                            placeholder="St. Catharines"
                            className="bg-[#111111] border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <AddressAutocomplete label="Property Address" required value={address} onChange={setAddress} />

                      {/* Service selector */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                          What Are You Inquiring About?
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {services.map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => toggle(s)}
                              className={`text-xs font-semibold px-3.5 py-2 rounded-sm border transition-all duration-200 ${
                                selected.includes(s)
                                  ? "bg-amber-500 border-amber-500 text-black"
                                  : "bg-transparent border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                          Additional Details
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Tell us about your property, current roof condition, any specific concerns, or questions you have..."
                          className="bg-[#111111] border border-neutral-700 focus:border-amber-500 text-white placeholder-neutral-600 rounded-sm px-4 py-3 text-sm outline-none transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-black font-extrabold py-4 rounded-sm transition-colors duration-200 text-base tracking-tight"
                        style={{ boxShadow: "0 0 30px rgba(217,119,6,0.18)" }}
                      >
                        {status === "loading" ? "Sending..." : "Send Quote Request"}
                      </button>
                      {status === "error" && (
                        <p className="text-center text-red-400 text-xs">
                          Something went wrong. Please call us directly or try again.
                        </p>
                      )}
                      {status !== "error" && (
                        <p className="text-center text-neutral-600 text-xs">
                          We typically respond within the same hour. No spam, no sales calls.
                        </p>
                      )}
                    </form>
                  )}
                </motion.div>
              </div>

              {/* Right: Contact info + details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="lg:col-span-2 space-y-5"
              >
                {/* Direct contact card */}
                <div className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <h3 className="text-white font-bold mb-4">Speak Directly With Us</h3>
                  <div className="space-y-4">
                    <a href={PHONE_HREF} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-sm bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11 21 3 13 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors">{PHONE}</div>
                        <div className="text-neutral-600 text-xs">Mon–Fri, 8am–6pm</div>
                      </div>
                    </a>
                    <a href={EMAIL_HREF} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-sm bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm group-hover:text-amber-400 transition-colors">{EMAIL}</div>
                        <div className="text-neutral-600 text-xs">Usually responds within the hour</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-sm bg-neutral-800 flex items-center justify-center text-neutral-500">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{ADDRESS}</div>
                        <div className="text-neutral-600 text-xs">Head Office</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <h3 className="text-white font-bold mb-4 text-sm">What Happens After You Send a Request</h3>
                  <ol className="space-y-3">
                    {[
                      "We review your request and any details you've shared",
                      "We contact you — typically within the same hour — to confirm your details and gather any additional information needed",
                      "We measure your roof remotely using satellite technology to obtain precise dimensions and pitch",
                      "You receive a written, itemized quote with no obligation",
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3 text-xs text-neutral-400">
                        <span className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Service areas mini */}
                <div className="bg-[#111111] border border-neutral-800 rounded-lg p-6">
                  <h3 className="text-white font-bold mb-3 text-sm">Areas We Serve</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {SERVICE_AREAS.slice(0, 10).map((area) => (
                      <span key={area} className="text-xs text-neutral-500 bg-neutral-800/50 px-2.5 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                    <span className="text-xs text-neutral-600 px-2.5 py-1">+ more</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="mb-10"
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">
                Before You Reach Out
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Common Questions.
              </h2>
            </motion.div>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="bg-[#111111] border border-neutral-800/60 rounded-sm p-5"
                >
                  <h3 className="text-white font-bold text-sm mb-2">{item.q}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
