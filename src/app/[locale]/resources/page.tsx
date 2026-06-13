import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Resources", description: "Technical resources, SDS/TDS downloads, print parameter guides." };

export default async function ResourcesPage() {
  const t = await getTranslations("resources");
  return (
    <div className="bg-white">
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Resources</h1>
          <p className="text-muted max-w-2xl">
            Technical documentation, guides, and insights to help you get the most out of our resins.
          </p>
        </div>
      </section>

      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SDS/TDS Downloads */}
          <div>
            <h2 className="text-xl font-bold mb-4">📄 Technical Documents</h2>
            <div className="space-y-3">
              {[
                { name: "SDS — Standard Resin", desc: "Safety Data Sheet" },
                { name: "SDS — Tough Resin", desc: "Safety Data Sheet" },
                { name: "TDS — Full Product Line", desc: "Technical Data Sheet" },
                { name: "Print Parameter Guide", desc: "For LCD/DLP printers" },
              ].map((doc) => (
                <div key={doc.name} className="p-4 bg-surface border border-border rounded-lg flex items-center justify-between group hover:border-primary/30 transition-colors">
                  <div>
                    <p className="font-medium text-sm">{doc.name}</p>
                    <p className="text-xs text-muted">{doc.desc}</p>
                  </div>
                  <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Download</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold mb-4">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "What wavelength do your resins cure at?", a: "Our standard resins cure at 385-405nm, compatible with most consumer and professional LCD/DLP 3D printers." },
                { q: "Do you offer sample orders?", a: "Yes! We offer sample kits (1-2 kg) so you can test our resins before placing bulk orders." },
                { q: "What is the shelf life?", a: "12 months when stored in a cool, dark place (15-30°C). Keep bottles sealed and away from UV light." },
                { q: "Can you match a competitor's resin?", a: "Yes, our R&D team can analyze and formulate resins matching or exceeding competitor specifications." },
                { q: "Do you offer private labeling?", a: "Absolutely. We provide full OEM/ODM services including custom bottle design, labels, and packaging." },
              ].map((faq) => (
                <details key={faq.q} className="p-4 bg-surface border border-border rounded-lg group">
                  <summary className="font-medium text-sm cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <span className="text-muted text-xs group-open:hidden">+</span>
                    <span className="text-muted text-xs hidden group-open:inline">−</span>
                  </summary>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Blog */}
          <div>
            <h2 className="text-xl font-bold mb-4">📝 Industry Insights</h2>
            <div className="space-y-4">
              {[
                { title: "How to Choose the Right 3D Printing Resin", date: "2026-05", excerpt: "A comprehensive guide to understanding resin properties and matching them to your application needs." },
                { title: "LCD vs DLP vs SLA: Resin Compatibility Guide", date: "2026-05", excerpt: "Understanding the differences in light sources and how they affect resin curing and print quality." },
                { title: "Post-Processing Best Practices for Resin Prints", date: "2026-04", excerpt: "Optimal washing, curing, and finishing techniques for professional-quality resin prints." },
              ].map((post) => (
                <div key={post.title} className="p-4 bg-surface border border-border rounded-lg">
                  <p className="text-xs text-muted mb-1">{post.date}</p>
                  <h3 className="font-semibold text-sm mb-1">{post.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{post.excerpt}</p>
                  <span className="text-primary text-xs font-medium mt-2 inline-block">Read more →</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
