"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { ProductCard } from "@/components/products";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import { ALL_PRODUCTS } from "@/lib/products-data";

// Map filter key to product category name
const FILTER_MAP: Record<string, string> = {
  "standard": "Standard",
  "tough": "Tough / ABS-Like",
  "flexible": "Flexible",
  "high-temp": "High Temperature",
  "dental": "Dental",
  "water-washable": "Water Washable",
};

function ProductGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryKey = searchParams.get("category");

  let filtered = ALL_PRODUCTS;
  if (categoryKey && FILTER_MAP[categoryKey]) {
    const catName = FILTER_MAP[categoryKey];
    filtered = ALL_PRODUCTS.filter((p) => p.category === catName);
  }

  const isAll = !categoryKey;

  const handleAllClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/products");
  };

  return (
    <div className="bg-white">
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">RESIONE Resin Products</h1>
          <p className="text-muted max-w-2xl">
            Every resin is formulated in-house at our R&D lab and rigorously tested under ASTM standards.
            Find the perfect resin for your application below.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-wide py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <a
              href="/products"
              onClick={handleAllClick}
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors cursor-pointer ${isAll ? "bg-primary text-white" : "border border-border hover:border-primary hover:text-primary"}`}
            >
              All Products
            </a>
            {PRODUCT_CATEGORIES.map((cat) => {
              const active = categoryKey === cat.key;
              return (
                <Link
                  key={cat.key}
                  href={`/products?category=${cat.key}`}
                  className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${active ? "bg-primary text-white" : "border border-border hover:border-primary hover:text-primary"}`}
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted">
            <p className="text-lg">No products found in this category.</p>
            <Link href="/products" className="text-primary mt-2 inline-block">View all products →</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                name={product.name}
                tagline={product.tagline}
                category={product.category}
              />
            ))}
          </div>
        )}
      </section>

      <section className="container-wide pb-16 text-center">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-2">Can not find what you need?</h2>
          <p className="text-muted text-sm mb-4">We offer custom resin formulation to match your exact specifications.</p>
          <Link href="/inquiry" className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors">Request Custom Formulation →</Link>
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-muted">Loading...</div>}>
      <ProductGrid />
    </Suspense>
  );
}
