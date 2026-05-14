import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metal Fencing Ontario — Custom Powder-Coated Steel & Aluminum | VAH Construction",
  description:
    "Custom powder-coated steel and aluminum fencing for Ontario properties. Horizontal slat, privacy screen, and architectural profiles. Lasts 40+ years. Serving Niagara Region, Hamilton, Burlington, Oakville.",
  alternates: { canonical: "https://www.vahconstruction.com/services/metal-fences" },
  openGraph: {
    title: "Metal Fencing Ontario | VAH Construction",
    description:
      "Custom powder-coated steel and aluminum fencing. 40+ year lifespan, zero maintenance. Free written quote.",
    url: "https://www.vahconstruction.com/services/metal-fences",
  },
};

export default function MetalFencesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
