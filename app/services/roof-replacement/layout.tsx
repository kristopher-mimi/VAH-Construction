import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metal Roof Replacement Ontario — Replace Asphalt with Standing Seam | VAH Construction",
  description:
    "Replace your aging asphalt roof with a permanent standing seam metal roofing system. Full tear-off and installation with 50-year warranty. Serving Niagara Region, Hamilton, Burlington, Oakville, Ontario.",
  alternates: { canonical: "https://www.vahconstruction.com/services/roof-replacement" },
  openGraph: {
    title: "Metal Roof Replacement Ontario | VAH Construction",
    description:
      "Replace asphalt with standing seam metal. Full tear-off and premium metal installation with 50-year warranty.",
    url: "https://www.vahconstruction.com/services/roof-replacement",
  },
};

export default function RoofReplacementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
