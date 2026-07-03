import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — 3D Printing Resin Insights & Industry Updates",
  description: "Technical articles, application guides, and industry insights on LCD 3D printing resins. Stay updated with RESIONE.",
};

const POSTS = [
  {
    slug: "nylon-like-vs-standard-resin",
    title: "Nylon-Like vs Standard Resin: When to Upgrade Your Material",
    excerpt: "Standard resin is fine for display models. But when your parts need to survive drops, bends, and outdoor use, nylon-like resin is the upgrade that pays for itself. We break down the real differences.",
    date: "2026-06-10",
    category: "Material Science",
    readTime: "6 min read",
  },
  {
    slug: "water-washable-resin-guide",
    title: "The Complete Guide to Water-Washable 3D Printing Resins",
    excerpt: "No IPA, no mess, no harsh chemicals. Water-washable resins are changing the game for home and education users. But are they right for professional applications?",
    date: "2026-06-05",
    category: "Product Guide",
    readTime: "8 min read",
  },
  {
    slug: "dental-3d-printing-resin-selection",
    title: "Choosing the Right Resin for Dental Models: A Lab Technician's Guide",
    excerpt: "From diagnostic casts to implant models to gingiva simulation — different dental applications demand different resin properties. Here's how to choose.",
    date: "2026-05-28",
    category: "Dental",
    readTime: "7 min read",
  },
  {
    slug: "3d-printing-resin-trends-2026",
    title: "3D Printing Resin Trends 2026: What's Next for Photopolymers",
    excerpt: "AI-optimized resins, bio-based materials, and the rise of end-use elastomers — the photopolymer landscape is evolving fast. Key trends shaping the industry.",
    date: "2026-05-20",
    category: "Industry Insights",
    readTime: "5 min read",
  },
  {
    slug: "post-processing-tips-professional",
    title: "Post-Processing Tips for Professional 3D Printed Resin Parts",
    excerpt: "The difference between amateur and professional prints is in the finishing. Washing, curing, sanding, and coating — our complete workflow for production-quality results.",
    date: "2026-05-15",
    category: "Tutorials",
    readTime: "9 min read",
  },
  {
    slug: "oem-resin-manufacturing-guide",
    title: "How to Launch Your Own 3D Printing Resin Brand: An OEM Guide",
    excerpt: "From formulation to packaging to compliance — everything you need to know about building a private-label resin brand with a contract manufacturer.",
    date: "2026-05-08",
    category: "Business",
    readTime: "10 min read",
  },
];

const CATEGORIES = ["All", "Material Science", "Product Guide", "Dental", "Industry Insights", "Tutorials", "Business"];

export default function BlogPage() {
  return (
    <div className="">
      <section className="bg-space-card border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">RESIONE Blog</h1>
          <p className="text-muted max-w-2xl">Technical articles, application guides, and industry insights on LCD 3D printing resins.</p>
        </div>
      </section>

      <section className="container-wide py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button key={cat} className="px-4 py-1.5 text-sm rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block p-6 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full">{post.category}</span>
                <span className="text-xs text-muted">{post.readTime}</span>
              </div>
              <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">{post.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-xs text-muted/60">{post.date}</span>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-2">Stay Updated on 3D Printing Resin Tech</h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">Get the latest articles, product updates, and industry insights delivered to your inbox.</p>
          <form action="https://formsubmit.co/1948128510jj@gmail.com" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="hidden" name="_subject" value="Blog Newsletter Subscription" />
            <input type="email" name="email" required placeholder="Your email address" className="flex-1 px-4 py-3 rounded-lg text-foreground text-sm border-0 focus:ring-2 focus:ring-white/30" />
            <button type="submit" className="px-6 py-3  text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
