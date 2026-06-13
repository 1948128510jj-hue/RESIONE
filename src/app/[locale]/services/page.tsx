import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

const OEM_KEYS = ['formulation','labeling','packaging','techDoc'];
const OEM_ICONS: Record<string,string> = {formulation:'🧪',labeling:'🏷️',packaging:'📦',techDoc:'📋'};

export const metadata: Metadata = { title: "OEM & ODM Services", description: "Custom resin formulation, private labeling, and packaging solutions." };

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  return (
    <div className="">
      <section className="bg-space-card border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t("heroTitle")}</h1>
          <p className="text-muted max-w-2xl">{t("heroSub")}</p>
        </div>
      </section>
      <section className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OEM_KEYS.map((k) => (
            <div key={k} className="p-6 bg-space-card border border-border rounded-xl hover:border-primary/30 transition-colors">
              <div className="text-4xl mb-4">{OEM_ICONS[k]}</div>
              <h2 className="text-lg font-semibold mb-2">{t(`oemItems.${k}.title`)}</h2>
              <p className="text-sm text-muted leading-relaxed">{t(`oemItems.${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-space-card py-12">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-8">{t("processTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "1", tkey: "step1" },
              { step: "2", tkey: "step2" },
              { step: "3", tkey: "step3" },
              { step: "4", tkey: "step4" },
              { step: "5", tkey: "step5" },
            ].map((item) => (
              <div key={item.step} className="text-center p-5  rounded-xl border border-border">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm">{item.step}</div>
                <h3 className="font-semibold text-sm mb-1">{t(`${item.tkey}.title`)}</h3>
                <p className="text-xs text-muted leading-relaxed">{t(`${item.tkey}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-wide py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">{t("ctaTitle")}</h2>
        <p className="text-muted max-w-lg mx-auto mb-6">{t("ctaSub")}</p>
        <Link href={`/${locale}/inquiry`} className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors shadow-lg text-lg">
          {t("ctaButton")} →
        </Link>
      </section>
    </div>
  );
}
