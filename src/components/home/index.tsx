"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { SITE_CONFIG, WHY_CHOOSE_US, OEM_SERVICES } from "@/lib/constants";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export function HeroBanner() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-64 h-64 border-2 border-white/20 rounded-full translate-x-1/3" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 border-2 border-white/10 rounded-full translate-y-1/3" />
      </div>
      <div className="container-wide relative py-16 sm:py-24">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-white/15 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
            {t("badge")}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            {t("title")}{" "}
            <span className="text-accent-light">{t("titleHighlight")}</span>
          </h1>
          <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={`/${locale}/products`} className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              {t("exploreProducts")}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href={`/${locale}/inquiry`} className="inline-flex items-center px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              {t("requestQuote")}
            </Link>
            <a href={`https://wa.me/${(SITE_CONFIG.whatsapp || '').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              {t("chatWhatsApp")}
            </a>
          </div>
          <div className="flex flex-wrap gap-6 mt-10 text-xs text-white/60">
            <span>{t("trustISO")}</span>
            <span>{t("trustCountries")}</span>
            <span>{t("trustRD")}</span>
            <span>{t("trustOEM")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductCategoriesSection() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{t("productsTitle")}</h2>
          <p className="text-muted max-w-xl mx-auto">{t("productsSub")}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCT_CATEGORIES.map((cat) => (
            <Link key={cat.key} href={`/${locale}/products?category=${cat.key}`} className="group p-5 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all bg-surface/50 hover:bg-surface">
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
              <p className="text-xs text-muted mt-1 leading-relaxed">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY_KEYS = ['rd','qc','shipping','oem','productLine','appFocused'];
const WHY_ICONS: Record<string,string> = {rd:'🔬',qc:'✅',shipping:'🚢',oem:'🏭',productLine:'📚',appFocused:'🎯'};

export function WhyChooseUsSection() {
  const t = useTranslations("home");
  return (
    <section className="py-16 bg-surface">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{t("whyUsTitle")}</h2>
          <p className="text-muted max-w-xl mx-auto">{t("whyUsSub")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_KEYS.map((k) => (
            <div key={k} className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{WHY_ICONS[k]}</div>
              <h3 className="font-semibold text-foreground mb-2">{t(`whyItems.${k}.title`)}</h3>
              <p className="text-sm text-muted leading-relaxed">{t(`whyItems.${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const OEM_KEYS = ['formulation','labeling','packaging','techDoc'];
const OEM_ICONS: Record<string,string> = {formulation:'🧪',labeling:'🏷️',packaging:'📦',techDoc:'📋'};

export function OEMServicesSection() {
  const t = useTranslations("home");
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{t("oemTitle")}</h2>
          <p className="text-muted max-w-xl mx-auto">{t("oemSub")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OEM_KEYS.map((k) => (
            <div key={k} className="p-6 bg-surface rounded-xl text-center border border-border hover:border-primary/30 transition-colors">
              <div className="text-4xl mb-4">{OEM_ICONS[k]}</div>
              <h3 className="font-semibold text-foreground mb-2">{t(`whyItems.${k}.title`)}</h3>
              <p className="text-sm text-muted leading-relaxed">{t(`whyItems.${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container-wide text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8 text-lg">{t("ctaSub")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={`/${locale}/inquiry`} className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg">
            {t("sendInquiry")}
          </Link>
          <a href={`https://wa.me/${(SITE_CONFIG.whatsapp || '').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl text-lg">
            WhatsApp Chat
          </a>
        </div>
        <p className="text-white/50 text-sm mt-6">{t("respondTime")}</p>
      </div>
    </section>
  );
}
