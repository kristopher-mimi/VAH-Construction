export const COMPANY = "VAH Construction";
export const TAGLINE = "Metal Roofing Specialists";
export const PHONE = "(437) 247-3371";
export const PHONE_HREF = "tel:+14372473371";
export const EMAIL = "info@vahconstruction.com";
export const EMAIL_HREF = "mailto:info@vahconstruction.com";
export const ADDRESS = "Smithville, Ontario";
export const INSTAGRAM = "https://www.instagram.com/vah_construction/";
export const INSTAGRAM_HANDLE = "@vah_construction";
export const SITE_URL = "https://www.vahconstruction.com";

export const SERVICE_AREAS = [
  "Niagara Falls",
  "St. Catharines",
  "Hamilton",
  "Burlington",
  "Oakville",
  "Welland",
  "Thorold",
  "Grimsby",
  "Fort Erie",
  "Niagara Region",
  "Kitchener",
  "Cambridge",
  "Guelph",
  "Brantford",
  "Mississauga",
  "Muskoka",
];

export const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        heading: "Roofing",
        items: [
          { label: "Standing Seam Roofing", href: "/services/standing-seam-roofing", sub: "The gold standard" },
          { label: "Residential Metal Roofing", href: "/services/residential-metal-roofing", sub: "For Ontario homes" },
          { label: "Commercial Metal Roofing", href: "/services/commercial-metal-roofing", sub: "Industrial & retail" },
          { label: "Roof Replacement", href: "/services/roof-replacement", sub: "Full tear-off & install" },
          { label: "Metal Siding", href: "/services/metal-siding", sub: "Board & batten, corrugated" },
        ],
      },
      {
        heading: "Fencing",
        items: [
          { label: "Metal Fences", href: "/services/metal-fences", sub: "All fencing systems" },
          { label: "Luxury Privacy Fences", href: "/services/luxury-metal-fences", sub: "Architectural privacy fencing" },
          { label: "Custom Steel Fence", href: "/services/custom-steel-fence", sub: "Bespoke fabricated fencing" },
        ],
      },
    ],
    children: null,
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "All Service Areas", href: "/locations", sub: "Southern Ontario coverage" },
      { label: "Niagara Region", href: "/locations/niagara-region", sub: "All 12 municipalities" },
      { label: "Niagara Falls", href: "/locations/niagara-falls", sub: "Metal roofing specialists" },
      { label: "St. Catharines", href: "/locations/st-catharines", sub: "Niagara's largest city" },
      { label: "Hamilton", href: "/locations/hamilton", sub: "Mountain & lower city" },
      { label: "Burlington", href: "/locations/burlington", sub: "Premium residential" },
      { label: "Oakville", href: "/locations/oakville", sub: "Luxury homes" },
      { label: "Welland", href: "/locations/welland", sub: "Niagara Peninsula" },
      { label: "Fort Erie", href: "/locations/fort-erie", sub: "Lake Erie shoreline" },
    ],
  },
  { label: "Projects", href: "/projects", children: null },
  { label: "Blog", href: "/blog", children: null },
  { label: "About", href: "/about", children: null },
  { label: "Contact", href: "/contact", children: null },
];
