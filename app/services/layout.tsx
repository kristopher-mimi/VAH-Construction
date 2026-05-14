import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metal Roofing & Fencing Services Ontario | VAH Construction",
  description:
    "Standing seam metal roofing, residential and commercial metal roofing, roof replacement, custom metal fencing, and metal siding in Ontario. VAH Construction serves Niagara Region, Hamilton, Burlington, and Oakville.",
  alternates: { canonical: "https://www.vahconstruction.com/services" },
  openGraph: {
    title: "Metal Roofing & Fencing Services Ontario | VAH Construction",
    description:
      "Standing seam metal roofing, commercial roofing, and custom metal fencing services across Southern Ontario.",
    url: "https://www.vahconstruction.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
