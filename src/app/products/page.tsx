import Link from "next/link";
import { ProductCard } from "@/components/products";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - 3D Printing Resins",
  description: "Browse our complete range of LCD UV-curing 3D printing resins. Standard, tough, flexible, dental, casting, water-washable and specialty resins.",
};

// Sample product data — will be replaced with real data from product catalog
const SAMPLE_PRODUCTS = [
  {
    slug: "standard-plus-resin",
    name: "Standard Plus Resin",
    tagline: "High-precision standard resin with smooth surface finish and excellent detail reproduction",
    category: "standard",
    order: 1,
  },
  {
    slug: "tough-abs-like-resin",
    name: "Tough ABS-Like Resin",
    tagline: "Engineering-grade tough resin with superior impact resistance and durability",
    category: "tough",
    order: 2,
  },
  {
    slug: "flexible-resin",
    name: "Flexible Elastic Resin",
    tagline: "Rubber-like flexible resin ideal for soft-touch grips, gaskets, and wearable applications",
    category: "flexible",
    order: 3,
  },
  {
    slug: "high-temp-resin",
    name: "High Temperature Resin",
    tagline: "Heat-resistant resin with HDT up to 180°C, suitable for mold making and thermal applications",
    category: "high-temp",
    order: 4,
  },
  {
    slug: "dental-model-resin",
    name: "Dental Model Resin",
    tagline: "High-accuracy biocompatible resin for dental models, surgical guides, and orthodontic applications",
    category: "dental",
    order: 5,
  },
  {
    slug: "casting-resin",
    name: "Casting Resin",
    tagline: "Clean burnout resin for investment casting — jewelry, dental, and industrial applications",
    category: "casting",
    order: 6,
  },
  {
    slug: "water-washable-resin",
    name: "Water Washable Resin",
    tagline: "Easy post-processing — rinse with water, no IPA needed. Low odor and eco-friendly",
    category: "water-washable",
    order: 7,
  },
  {
    slug: "anti-impact-resin",
    name: "Anti-Impact Resin",
    tagline: "Ultra-tough resin engineered for parts that need to withstand drops and impacts",
    category: "tough",
    order: 8,
  },
];

export default function ProductsPage() {
  const featured = SAMPLE_PRODUCTS;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Our Resin Products</h1>
          <p className="text-muted max-w-2xl">
            Every resin is formulated in-house and rigorously tested to ensure batch-to-batch consistency.
            Find the perfect resin for your application below.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-border">
        <div className="container-wide py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <Link
              href="/products"
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full whitespace-nowrap"
            >
              All Products
            </Link>
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.key}
                href={`/products?category=${cat.key}`}
                className="px-4 py-2 border border-border text-sm font-medium rounded-full hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="container-wide py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              name={product.name}
              tagline={product.tagline}
              category={product.category}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container-wide pb-16 text-center">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-2">Can not find what you need?</h2>
          <p className="text-muted text-sm mb-4">We offer custom resin formulation to match your exact specifications.</p>
          <Link
            href="/inquiry"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
          >
            Request Custom Formulation →
          </Link>
        </div>
      </section>
    </div>
  );
}
