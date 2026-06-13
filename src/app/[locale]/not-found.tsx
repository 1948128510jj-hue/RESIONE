"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("notfound");
  const c = useTranslations("common");
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="text-center px-6 py-16">
        <h1 className="text-7xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-3">{t("title")}</h2>
        <p className="text-muted max-w-md mx-auto mb-8">{t("msg")}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors">{c("backHome")}</Link>
          <Link href="/products" className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors">{c("browseProducts")}</Link>
          <Link href="/contact" className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors">{c("contactUs")}</Link>
        </div>
      </div>
    </div>
  );
}
