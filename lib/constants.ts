export const COMPANY = "VAH Construction";
export const TAGLINE = "Metal Roofing Specialists";
export const PHONE = "(437) 247-3371";
export const PHONE_HREF = "tel:+14372473371";
export const EMAIL = "info@vahconstruction.com";
export const EMAIL_HREF = "mailto:info@vahconstruction.com";
export const ADDRESS = "Smithville, Ontario";
export const INSTAGRAM = "https://www.instagram.com/vah_construction/";
export const INSTAGRAM_HANDLE = "@vah_construction";

export const SERVICE_AREAS = [
  "Hamilton",
  "St. Catharines",
  "Niagara Falls",
  "Kitchener",
  "Cambridge",
  "Guelph",
  "Brantford",
  "Burlington",
  "Oakville",
  "Mississauga",
  "Muskoka",
];

export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services", sub: "Overview of everything we do" },
      { label: "Metal Roofing", href: "/services/metal-roofing", sub: "Our core specialty" },
      { label: "Roof Replacement", href: "/services/roof-replacement", sub: "Full tear-off & install" },
      { label: "Metal Fences", href: "/services/metal-fences", sub: "Custom powder-coated fencing" },
      { label: "Metal Siding", href: "/services/metal-siding", sub: "Board & batten, lap, corrugated" },
    ],
  },
  { label: "Projects", href: "/projects", children: null },
  { label: "About", href: "/about", children: null },
  { label: "Contact", href: "/contact", children: null },
];
