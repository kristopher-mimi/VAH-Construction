import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VAH Construction | Metal Roofing Specialists — Southern Ontario",
  description:
    "Ontario's metal roofing specialists. Standing seam, metal tiles, metal siding & custom fences. Lifetime non-prorated, transferable warranty. Serving Hamilton, St. Catharines, Kitchener, Burlington, Oakville, Mississauga, Muskoka & beyond — flexible travel for the right project.",
  keywords:
    "metal roofing Ontario, standing seam roofing, metal tiles, roofing Hamilton, roofing Kitchener, roofing Mississauga, roofing Muskoka, roofing Burlington, roofing Oakville, VAH Construction",
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
  },
  openGraph: {
    title: "VAH Construction | Metal Roofing Specialists",
    description:
      "Beautiful roofs that protect in style. Lifetime non-prorated warranty. Serving all of Southern Ontario.",
    type: "website",
    images: ["/icon.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
