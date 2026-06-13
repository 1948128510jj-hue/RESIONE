"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { PRODUCT_CATEGORIES } from "@/lib/products";

/* ================================================================
   HeroBanner — Full-Screen Sci-Fi Hero
   ================================================================ */
export function HeroBanner() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-deep">
      {/* Background: gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-brand to-brand-surface" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(0,198,192,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,198,192,0.3) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px]" />
      {/* Geometric accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container-wide relative z-10 py-20 sm:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {t("badge")}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
            <span className="text-white">{t("title")}</span>{" "}
            <span className="text-gradient">{t("titleHighlight")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted max-w-xl mb-10 leading-relaxed font-light">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link href={`/${locale}/products`} className="btn-primary text-base px-8 py-4">
              {t("exploreProducts")}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href={`/${locale}/inquiry`} className="btn-outline text-base px-8 py-4">
              {t("requestQuote")}
            </Link>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-6 text-xs text-muted-dim">
            <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-accent/50" />{t("trustISO")}</span>
            <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-accent/50" />{t("trustCountries")}</span>
            <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-accent/50" />{t("trustRD")}</span>
            <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-accent/50" />{t("trustOEM")}</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}

/* ================================================================
   ProductCategoriesSection — Dark Grid
   ================================================================ */
const CAT_MAP: Record<string,string> = {'Anti-Impact / Nylon-Like':'antiimpact','Tough / ABS-Like':'tough','Flexible / Elastic':'flexible','Standard':'standard','High Temperature':'hightemp','Dental':'dental','Water Washable':'waterwash'};

export function ProductCategoriesSection() {
  const t = useTranslations("home");
  const tc = useTranslations("categories");
  const locale = useLocale();
  return (
    <section className="py-20 bg-bg">
      <div className="container-wide">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("productsTitle")}</h2>
          <p className="text-muted max-w-xl mx-auto text-lg">{t("productsSub")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCT_CATEGORIES.map((cat) => {
            const ck = CAT_MAP[cat.key] || 'standard';
            return (
              <Link key={cat.key} href={`/${locale}/products?category=${encodeURIComponent(cat.key)}`}
                className="group p-6 card-dark hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5">
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="font-semibold text-sm text-white group-hover:text-accent transition-colors">{tc(`${ck}.name`)}</h3>
                <p className="text-xs text-muted-dim mt-2 leading-relaxed">{tc(`${ck}.desc`)}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   WhyChooseUsSection
   ================================================================ */
const WHY_KEYS = ['rd','qc','shipping','oem','productLine','appFocused'];
const WHY_ICONS: Record<string,string> = {rd:'🔬',qc:'✅',shipping:'🚢',oem:'🏭',productLine:'📚',appFocused:'🎯'};

export function WhyChooseUsSection() {
  const t = useTranslations("home");
  return (
    <section className="py-20 bg-brand">
      <div className="container-wide">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("whyUsTitle")}</h2>
          <p className="text-muted max-w-xl mx-auto text-lg">{t("whyUsSub")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_KEYS.map((k) => (
            <div key={k} className="card-dark p-6 hover:border-accent/30 transition-all duration-300">
              <div className="text-3xl mb-4">{WHY_ICONS[k]}</div>
              <h3 className="font-semibold text-white mb-2">{t(`whyItems.${k}.title`)}</h3>
              <p className="text-sm text-muted-dim leading-relaxed">{t(`whyItems.${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   OEMServicesSection
   ================================================================ */
const OEM_KEYS = ['formulation','labeling','packaging','techDoc'];
const OEM_ICONS: Record<string,string> = {formulation:'🧪',labeling:'🏷️',packaging:'📦',techDoc:'📋'};

export function OEMServicesSection() {
  const t = useTranslations("home");
  return (
    <section className="py-20 bg-bg">
      <div className="container-wide">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("oemTitle")}</h2>
          <p className="text-muted max-w-xl mx-auto text-lg">{t("oemSub")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OEM_KEYS.map((k) => (
            <div key={k} className="card-dark p-6 text-center hover:border-accent/30 transition-all duration-300">
              <div className="text-4xl mb-4">{OEM_ICONS[k]}</div>
              <h3 className="font-semibold text-white mb-2">{t(`oemItems.${k}.title`)}</h3>
              <p className="text-sm text-muted-dim leading-relaxed">{t(`oemItems.${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CTASection
   ================================================================ */
export function CTASection() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <section className="relative py-24 overflow-hidden bg-brand-deep">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />
      <div className="container-wide relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
        <p className="text-muted max-w-lg mx-auto mb-10 text-lg">{t("ctaSub")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`/${locale}/inquiry`} className="btn-primary text-lg px-10 py-4">{t("sendInquiry")}</Link>
          <a href={`https://wa.me/${(SITE_CONFIG.whatsapp || '').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-10 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 text-lg">
            WhatsApp Chat
          </a>
        </div>
        <p className="text-muted-dim text-sm mt-8">{t("respondTime")}</p>
      </div>
    </section>
  );
}
