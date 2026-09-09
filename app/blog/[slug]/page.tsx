import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BLOG_POSTS, getBlogPostBySlug, type BlogSection } from "@/lib/blog-posts";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

/**
 * Service pages linked from each article, chosen by category. Gives every
 * article a contextual route into the commercial pages instead of leaving the
 * library as a dead end.
 */
const SERVICE_LINKS: Record<string, { href: string; label: string }[]> = {
  "Metal Roofing": [
    { href: "/services/metal-roofing", label: "Metal roofing systems" },
    { href: "/services/standing-seam-roofing", label: "Standing seam roofing" },
    { href: "/services/metal-tiles", label: "Metal tile roofing" },
    { href: "/metal-roof-cost-ontario", label: "How metal roofing is priced" },
  ],
  "Metal Fencing": [
    { href: "/services/metal-fences", label: "Metal fencing" },
    { href: "/services/luxury-metal-fences", label: "Luxury metal fences" },
    { href: "/services/custom-steel-fence", label: "Custom steel fences" },
    { href: "/projects", label: "Completed projects" },
  ],
  "Metal Siding": [
    { href: "/services/metal-siding", label: "Metal siding" },
    { href: "/services/metal-roofing", label: "Metal roofing systems" },
    { href: "/projects", label: "Completed projects" },
    { href: "/contact", label: "Request a quote" },
  ],
  "Buying Guide": [
    { href: "/metal-roof-cost-ontario", label: "How metal roofing is priced" },
    { href: "/services/metal-roofing", label: "Metal roofing systems" },
    { href: "/projects", label: "Completed projects" },
    { href: "/contact", label: "Request a free quote" },
  ],
  "Luxury Exteriors": [
    { href: "/services/metal-roofing", label: "Metal roofing systems" },
    { href: "/services/metal-siding", label: "Metal siding" },
    { href: "/services/luxury-metal-fences", label: "Luxury metal fences" },
    { href: "/projects", label: "Completed projects" },
  ],
  default: [
    { href: "/services", label: "All services" },
    { href: "/metal-roof-cost-ontario", label: "How metal roofing is priced" },
    { href: "/projects", label: "Completed projects" },
    { href: "/contact", label: "Request a quote" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://www.vahconstruction.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.vahconstruction.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    // Heading sections carry their own body copy in `text`. Rendering only the
    // heading silently dropped most of the prose in every article.
    case "h2":
      return (
        <div key={idx}>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-10 mb-4">
            {section.heading}
          </h2>
          {section.text && <p className="text-neutral-400 leading-relaxed mb-5">{section.text}</p>}
        </div>
      );
    case "h3":
      return (
        <div key={idx}>
          <h3 className="text-xl font-bold text-white mt-8 mb-3">{section.heading}</h3>
          {section.text && <p className="text-neutral-400 leading-relaxed mb-5">{section.text}</p>}
        </div>
      );
    case "p":
      return (
        <p key={idx} className="text-neutral-400 leading-relaxed mb-5">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} className="space-y-3 mb-6 ml-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm leading-relaxed">
              <span className="w-4 h-4 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-500 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div key={idx} className="my-6 bg-amber-500/5 border border-amber-500/20 rounded-lg p-5">
          <p className="text-amber-200/80 text-sm leading-relaxed">{section.text}</p>
        </div>
      );
    case "faq":
      return (
        <div key={idx} className="mt-10">
          <h2 className="text-2xl font-extrabold text-white tracking-tight mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {section.faqs?.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-neutral-800/60 rounded-sm p-5">
                <h3 className="text-white font-bold text-sm mb-2">{faq.q}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  // Prefer articles from the same category, and start from this post's own
  // position in the list so each article surfaces a different set. Slicing the
  // first three of every list would give all articles identical "related" links
  // and produce a very poor internal link graph.
  const sameCategory = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== slug);
  const pool = sameCategory.length >= 3 ? sameCategory : BLOG_POSTS.filter((p) => p.slug !== slug);
  const startAt = Math.max(0, pool.findIndex((p) => p.date < post.date));
  const relatedPosts = [...pool.slice(startAt), ...pool.slice(0, startAt)].slice(0, 3);

  // Contextual links from every article into the commercial pages.
  const relatedServices = SERVICE_LINKS[post.category] ?? SERVICE_LINKS.default;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    // Honest organizational authorship — no individual author is established
    // for these posts. Both reference the single business entity by @id.
    author: { "@id": "https://www.vahconstruction.com/#business" },
    publisher: { "@id": "https://www.vahconstruction.com/#business" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.vahconstruction.com/blog/${post.slug}`,
    },
  };

  const faqSection = post.content.find((s) => s.type === "faq");
  const faqSchema = faqSection?.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSection.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vahconstruction.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.vahconstruction.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.vahconstruction.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-neutral-950 pt-32 pb-12 lg:pt-40 lg:pb-14">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <nav className="flex items-center gap-2 text-xs text-neutral-600 mb-6">
              <Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-neutral-400 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-neutral-500 line-clamp-1">{post.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/20">
                {post.category}
              </span>
              <span className="text-neutral-600 text-xs">{post.readTime}</span>
              <span className="text-neutral-700 text-xs">
                {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.06] mb-5">
              {post.title}
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-neutral-950 py-10 border-t border-neutral-800/40">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            {post.content.map((section, i) => renderSection(section, i))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-14">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-4 block">
              Ready to Get Started?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Get a Free Metal Roofing Quote.
            </h2>
            <p className="text-neutral-400 mb-7">
              We measure your roof remotely by satellite and deliver a written, itemized quote — same day, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3.5 rounded-sm text-sm transition-colors"
                style={{ boxShadow: "0 0 20px rgba(217,119,6,0.18)" }}
              >
                Request a Free Quote
              </Link>
              <a href={PHONE_HREF} className="text-white font-semibold hover:text-amber-400 transition-colors text-sm">
                {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* Related services — contextual internal links */}
        <section className="bg-neutral-950 border-t border-neutral-800/60 py-12">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">
              Related services
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm font-semibold text-neutral-300 bg-[#111111] border border-neutral-800 hover:border-amber-500/40 hover:text-amber-400 px-4 py-2.5 rounded-sm transition-colors"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        {relatedPosts.length > 0 && (
          <section className="bg-neutral-950 border-t border-neutral-800/60 py-14">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <h2 className="text-xl font-extrabold text-white mb-8">More Articles</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group bg-[#111111] border border-neutral-800 hover:border-amber-500/30 rounded-lg p-5 transition-all duration-300"
                  >
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/20 mb-3 inline-block">
                      {related.category}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-snug group-hover:text-amber-400 transition-colors">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
