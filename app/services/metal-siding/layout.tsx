import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metal Siding Ontario — Standing Seam & Corrugated Steel Cladding | VAH Construction",
  description:
    "Standing seam, corrugated, and board-and-batten metal siding for Ontario homes and commercial buildings. VAH Construction serves Niagara Region, Hamilton, Burlington, and Oakville.",
  alternates: { canonical: "https://www.vahconstruction.com/services/metal-siding" },
  openGraph: {
    title: "Metal Siding Ontario | VAH Construction",
    description:
      "Standing seam and corrugated metal siding for Ontario residential and commercial properties.",
    url: "https://www.vahconstruction.com/services/metal-siding",
  },
};

export default function MetalSidingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
