import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About VAH Construction | Metal Roofing Specialists — Ontario",
  description:
    "20+ years of metal roofing expertise. VAH Construction is Ontario's dedicated standing seam metal roofing and custom metal fencing specialist, serving Niagara Region, Hamilton, Burlington, and Oakville.",
  alternates: { canonical: "https://www.vahconstruction.com/about" },
  openGraph: {
    title: "About VAH Construction | Metal Roofing Specialists",
    description:
      "20+ years experience. Ontario's dedicated standing seam metal roofing and custom metal fencing company.",
    url: "https://www.vahconstruction.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
