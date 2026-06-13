"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SpecificationTable } from "@/components/products";
import { SITE_CONFIG } from "@/lib/constants";
import { ALL_PRODUCTS } from "@/lib/products-data";
import { useState, use } from "react";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = useTranslations("products");
  const td = useTranslations("products_data");
  const { slug } = use(params);
  const [imgError, setImgError] = useState(false);

  const product = ALL_PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <div className="bg-white">
      <div className="container-wide py-8 sm:py-12">
        <nav className="flex items-center gap-2 text-sm text-muted mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Poster-style product image (half-page catalog crop) */}
          <div className="aspect-[3/4] bg-surface rounded-2xl flex items-center justify-center overflow-hidden border border-border">
            {!imgError ? (
              <img
                src={`/images/products/${product.slug}.png`}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <img
                src={`/images/products/${product.slug}_photo_1.jpeg`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          <div>
            <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{product.category}</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-2">{product.name}</h1>
            <p className="text-muted mb-6">{product.tagline}</p>

            <SpecificationTable specs={product.specs} />

            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="/inquiry" className="flex-1 sm:flex-none px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-center">{t("requestQuote")}</Link>
              <a href={`https://wa.me/${(SITE_CONFIG.whatsapp || '').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors text-center">{t("whatsappInquiry")}</a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3">{t("viewDetails")}</h2>
              <p className="text-muted leading-relaxed">{td(`${slug}.desc`)}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">{t("features")}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-primary mt-0.5 shrink-0">✓</span>
                    {td(`${slug}.feats.${i}`)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">{t("applications")}</h2>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((a, i) => (
                  <span key={i} className="px-3 py-1.5 bg-surface border border-border rounded-full text-xs text-muted">{td(`${slug}.apps.${i}`)}</span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">{t("compatibleWith")}</h2>
              <p className="text-sm text-muted">{product.compatibleWith.join(" · ")}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-xl p-5">
              <h3 className="font-semibold mb-3">{t("orderInfo")}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">{t("bottleSize")}</span>
                  <span className="font-medium">{product.bottleSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Min Order</span>
                  <span className="font-medium">{product.minOrder}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Lead Time</span>
                  <span className="font-medium">{product.leadTime}</span>
                </div>
              </div>
              <Link href="/inquiry" className="block text-center mt-4 px-4 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-sm">{t("requestQuote")}</Link>
            </div>

            <div className="bg-surface border border-border rounded-xl p-5">
              <h3 className="font-semibold mb-3">{t("techDocs")}</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline"><span>📄</span> {t("sds")}</a>
                <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline"><span>📊</span> {t("tds")}</a>
                <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline"><span>🖨️</span> Print Parameter Guide</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
