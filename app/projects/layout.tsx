import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metal Roofing & Fencing Projects — Ontario | VAH Construction",
  description:
    "Gallery of VAH Construction's metal roofing and metal fencing installations across Ontario. Standing seam roofing, custom steel fencing, and metal siding projects in Niagara Region, Hamilton, Burlington, and Oakville.",
  alternates: { canonical: "https://www.vahconstruction.com/projects" },
  openGraph: {
    title: "Metal Roofing & Fencing Projects | VAH Construction",
    description:
      "Gallery of standing seam metal roofing and custom metal fencing installations across Southern Ontario.",
    url: "https://www.vahconstruction.com/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
