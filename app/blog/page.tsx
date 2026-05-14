import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Metal Roofing & Fencing Blog — Ontario Homeowner Resources | VAH Construction",
  description:
    "Expert articles on standing seam metal roofing, metal fencing, Ontario weather protection, energy efficiency, and premium exterior upgrades from VAH Construction's metal roofing specialists.",
  alternates: { canonical: "https://www.vahconstruction.com/blog" },
  openGraph: {
    title: "Metal Roofing & Fencing Blog | VAH Construction",
    description:
      "Expert resources on metal roofing, metal fencing, and premium exterior upgrades for Ontario homeowners.",
    url: "https://www.vahconstruction.com/blog",
  },
};

const categoryColors: Record<string, string> = {
  "Metal Roofing": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Metal Fencing": "bg-neutral-700/50 text-neutral-300 border-neutral-600/30",
  "Luxury Exteriors": "bg-neutral-800 text-neutral-400 border-neutral-700",
};

export default function BlogIndexPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-neutral-950 overflow-hidden min-h-[38vh] flex items-end">
          <div className="absolute inset-0 bg-neutral-950/85" />
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-amber-500/60 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pb-14 pt-32 lg:pb-16 lg:pt-36">
            <nav className="flex items-center gap-2 text-xs text-neutral-600 mb-5">
              <Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-neutral-400">Blog</span>
            </nav>
            <span className="text-amber-500 text-xs font-bold tracking-[0.18em] uppercase mb-3 block">Expert Resources</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.06] mb-4">
              Metal Roofing &
              <br />
              <span className="text-amber-500">Fencing Insights.</span>
            </h1>
            <p className="text-neutral-400 text-lg max-w-2xl">
              Practical guides for Ontario homeowners on standing seam roofing, metal fencing, weather protection, and premium exterior upgrades.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-neutral-950 to-transparent" />
        </section>

        {/* Featured post */}
        <section className="bg-neutral-950 py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="text-xs font-bold text-neutral-600 uppercase tracking-widest mb-5">Featured Article</p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-[#111111] border border-neutral-800 hover:border-amber-500/30 rounded-lg p-8 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[featured.category] || categoryColors["Metal Roofing"]}`}>
                  {featured.category}
                </span>
                <span className="text-neutral-600 text-xs">{featured.readTime}</span>
                <span className="text-neutral-700 text-xs">
                  {new Date(featured.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3 group-hover:text-amber-400 transition-colors">
                {featured.title}
              </h2>
              <p className="text-neutral-400 leading-relaxed max-w-3xl mb-4">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-amber-500 text-sm font-semibold">
                Read article
                <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1">
                  <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
                </svg>
              </span>
            </Link>
          </div>
        </section>

        {/* All posts */}
        <section className="bg-[#0a0a0a] border-t border-neutral-800/60 py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-[#111111] border border-neutral-800 hover:border-amber-500/30 rounded-lg p-6 flex flex-col transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[post.category] || categoryColors["Metal Roofing"]}`}>
                      {post.category}
                    </span>
                    <span className="text-neutral-600 text-xs">{post.readTime}</span>
                  </div>
                  <h2 className="text-base font-bold text-white leading-snug mb-2 group-hover:text-amber-400 transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-800/60">
                    <span className="text-amber-500 text-xs font-semibold inline-flex items-center gap-1">
                      Read
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5">
                        <path fillRule="evenodd" d="M1.75 8a.75.75 0 01.75-.75h9.19L9.22 4.78a.75.75 0 011.06-1.06l3.5 3.5a.75.75 0 010 1.06l-3.5 3.5a.75.75 0 11-1.06-1.06l2.47-2.47H2.5A.75.75 0 011.75 8z" />
                      </svg>
                    </span>
                    <span className="text-neutral-700 text-xs">
                      {new Date(post.date).toLocaleDateString("en-CA", { month: "short", year: "numeric" })}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
