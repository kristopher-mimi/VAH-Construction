import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metal Roofing Ontario — Standing Seam Specialists | VAH Construction",
  description:
    "Premium metal roofing systems for Ontario homes and businesses. Standing seam, hidden fastener, and metal tile roofing with 50-year non-prorated warranties. Niagara Region, Hamilton, Burlington, Oakville.",
  alternates: { canonical: "https://www.vahconstruction.com/services/metal-roofing" },
  openGraph: {
    title: "Metal Roofing Ontario | VAH Construction",
    description:
      "Standing seam and hidden fastener metal roofing with 50-year warranties. Class 4 hail-rated. Free satellite quote.",
    url: "https://www.vahconstruction.com/services/metal-roofing",
  },
};

export default function MetalRoofingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
