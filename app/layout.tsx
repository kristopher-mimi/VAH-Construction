import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientProviders from "@/app/components/ClientProviders";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
      <body>
        <ClientProviders>{children}</ClientProviders>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-WGBE6PF5P0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WGBE6PF5P0');
        `}</Script>
      </body>
    </html>
  );
}
