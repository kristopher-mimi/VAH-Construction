import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact VAH Construction | Free Metal Roofing Quote — Ontario",
  description:
    "Get a free, written metal roofing or fencing quote from VAH Construction. We measure your roof remotely by satellite — no site visit needed. Serving Niagara Region, Hamilton, Burlington, Oakville. Same-day response.",
  alternates: { canonical: "https://www.vahconstruction.com/contact" },
  openGraph: {
    title: "Contact VAH Construction | Free Metal Roofing Quote",
    description:
      "Free written metal roofing quote — measured by satellite, delivered same day. No appointment needed.",
    url: "https://www.vahconstruction.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
