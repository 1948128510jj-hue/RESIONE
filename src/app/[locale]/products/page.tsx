"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ProductCard } from "@/components/products";
import { PRODUCT_CATEGORIES } from "@/lib/products";
import { ALL_PRODUCTS } from "@/lib/products-data";

const CAT_KEY_MAP: Record<string, string> = {'Anti-Impact / Nylon-Like':'antiimpact','Tough / ABS-Like':'tough','Flexible / Elastic':'flexible','Standard':'standard','High Temperature':'hightemp','Dental':'dental','Water Washable':'waterwash'};

function ProductGrid() {
  const t = useTranslations("products");
  const tc = useTranslations("categories");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const categoryKey = searchParams.get("category");

  let filtered = ALL_PRODUCTS;
  if (categoryKey) {
    filtered = ALL_PRODUCTS.filter((p) => p.category === categoryKey);
  }

  return (
    <div className="bg-white">
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t("title")}</h1>
          <p className="text-muted max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-wide py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <Link href={`/${locale}/products`} className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${!categoryKey ? "bg-primary text-white" : "border border-border hover:border-primary hover:text-primary"}`}>
              {t("allCategories")}
            </Link>
            {PRODUCT_CATEGORIES.map((cat) => {
              const active = categoryKey === cat.key;
              return (
                <Link key={cat.key} href={`/${locale}/products?category=${encodeURIComponent(cat.key)}`} className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${active ? "bg-primary text-white" : "border border-border hover:border-primary hover:text-primary"}`}>
                  {tc(`${CAT_KEY_MAP[cat.key] || 'standard'}.name`)}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-wide py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted">
            <p className="text-lg">{t("noProducts")}</p>
            <Link href={`/${locale}/products`} className="text-primary mt-2 inline-block">{t("allCategories")} →</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.slug} slug={product.slug} name={product.name} tagline={product.tagline} category={product.category} />
            ))}
          </div>
        )}
      </section>

      <section className="container-wide pb-16 text-center">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-2">{t("notFound")}</h2>
          <p className="text-muted text-sm mb-4">{t("notFoundCta")}</p>
          <Link href={`/${locale}/inquiry`} className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors">{t("requestCustom")} →</Link>
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container-wide py-24 text-center text-muted">Loading...</div>}>
      <ProductGrid />
    </Suspense>
  );
}
