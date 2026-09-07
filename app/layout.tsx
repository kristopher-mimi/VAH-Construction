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
  metadataBase: new URL("https://www.vahconstruction.com"),
  title: {
    // `default` is used as-is (the template is not applied to it), so the brand
    // is written out here exactly once.
    default: "Metal Roofing Contractors in Southern Ontario | VAH Construction",
    template: "%s | VAH Construction",
  },
  description:
    "Standing seam metal roofing, metal tile roofing and custom metal fencing across Southern Ontario. Serving Niagara Region, Hamilton, Burlington and Oakville. Request a free written quote.",
  keywords: [
    "metal roofing Ontario",
    "standing seam roofing Ontario",
    "standing seam roofing Niagara",
    "metal roofing Niagara Falls",
    "metal roofing St. Catharines",
    "metal roofing Hamilton",
    "metal roofing Burlington",
    "metal roofing Oakville",
    "metal roof installers Ontario",
    "premium metal roofing",
    "hidden fastener metal roofing",
    "custom metal fencing Ontario",
    "steel fence Ontario",
    "VAH Construction",
    "metal roofing company Ontario",
    "best metal roofing company Ontario",
  ],
  authors: [{ name: "VAH Construction", url: "https://www.vahconstruction.com" }],
  creator: "VAH Construction",
  publisher: "VAH Construction",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "VAH Construction | Metal Roofing & Metal Fencing — Southern Ontario",
    description:
      "Ontario's standing seam metal roofing specialists. Class 4 hail-rated, 50-year non-prorated warranty. Serving Niagara Region, Hamilton, Burlington, Oakville. Free remote quote.",
    type: "website",
    url: "https://www.vahconstruction.com",
    siteName: "VAH Construction",
    locale: "en_CA",
    images: [
      {
        // Real project photograph — landscape crop reads far better than the
        // logo in social/link previews.
        url: "/images/hero/945B6F87-E210-447A-BE3B-5905563CC77B_1_105_c.jpeg",
        width: 1182,
        height: 665,
        alt: "Standing seam metal roof installed by VAH Construction in Southern Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAH Construction | Metal Roofing Specialists — Southern Ontario",
    description:
      "Standing seam metal roofing and custom metal fencing. 50-year non-prorated warranty. Niagara Region, Hamilton, Burlington, Oakville.",
  },
  alternates: {
    canonical: "https://www.vahconstruction.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor", "HomeAndConstructionBusiness"],
  "@id": "https://www.vahconstruction.com/#business",
  name: "VAH Construction",
  alternateName: "VAH Metal Roofing",
  description:
    "Ontario's leading standing seam metal roofing and custom metal fencing specialists. Serving Niagara Region, Hamilton, Burlington, Oakville and all of Southern Ontario with Class 4 hail-rated metal roofing systems backed by 50-year non-prorated, transferable warranties.",
  url: "https://www.vahconstruction.com",
  telephone: "+14372473371",
  email: "info@vahconstruction.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Smithville",
    addressRegion: "ON",
    addressCountry: "CA",
    postalCode: "L0R 2A0",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.1014,
    longitude: -79.5542,
  },
  areaServed: [
    { "@type": "City", name: "Niagara Falls", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
    { "@type": "City", name: "St. Catharines", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
    { "@type": "City", name: "Hamilton", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
    { "@type": "City", name: "Burlington", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
    { "@type": "City", name: "Oakville", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
    { "@type": "City", name: "Welland", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
    { "@type": "City", name: "Thorold", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
    { "@type": "City", name: "Grimsby", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
    { "@type": "City", name: "Fort Erie", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
    { "@type": "AdministrativeArea", name: "Niagara Region" },
  ],
  priceRange: "$$$",
  image: "https://www.vahconstruction.com/images/logo25-transparent.png",
  logo: {
    "@type": "ImageObject",
    url: "https://www.vahconstruction.com/images/logo25-transparent.png",
    // Actual intrinsic dimensions of the source file.
    width: 4000,
    height: 800,
  },
  sameAs: ["https://www.instagram.com/vah_construction/"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Metal Roofing & Metal Fencing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Standing Seam Metal Roofing",
          description:
            "Concealed fastener standing seam metal roofing — the gold standard for Ontario residential and commercial properties. 50-year non-prorated transferable warranty.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hidden Fastener Steel Roofing",
          description:
            "Premium hidden fastener metal roofing systems. Class 4 hail-rated, wind-resistant to 250 km/h. Suitable for residential and commercial applications.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Metal Roofing",
          description:
            "Premium metal roofing for Ontario homes. Standing seam, metal tile, and hidden fastener profiles in a full range of colours and finishes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Metal Roofing",
          description:
            "Low-slope and steep-slope commercial metal roofing for industrial, retail, agricultural, and institutional buildings across Southern Ontario.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roof Replacement",
          description:
            "Full tear-off and replacement of aged asphalt or metal roofs with new premium standing seam metal roofing systems.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Metal Fencing",
          description:
            "Custom powder-coated steel and aluminum fencing. Horizontal slat, privacy screen, and architectural metal fence profiles. Lasts 40+ years.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Metal Siding",
          description:
            "Standing seam and corrugated steel siding, board-and-batten metal cladding for residential and commercial properties.",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.vahconstruction.com/#website",
  name: "VAH Construction",
  url: "https://www.vahconstruction.com",
  description:
    "Ontario's standing seam metal roofing and custom metal fencing specialists.",
  publisher: {
    "@id": "https://www.vahconstruction.com/#business",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`${geist.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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
