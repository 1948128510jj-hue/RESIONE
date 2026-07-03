import { SITE_CONFIG } from "@/lib/constants";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

const WHY_KEYS = ['rd','qc','shipping','oem','productLine','appFocused'];
const WHY_ICONS: Record<string,string> = {rd:'🔬',qc:'✅',shipping:'🚢',oem:'🏭',productLine:'📚',appFocused:'🎯'};
const CERT_KEYS = ['rohs','reach','lab'];

export async function generateMetadata(): Promise<Metadata> {
  return { title: "About Us", description: "Learn about ShenShuo Tech — a professional LCD UV-curing resin manufacturer." };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  const th = await getTranslations("home");
  return (
    <div className="">
      <section className="bg-space-card border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t("title")}</h1>
          <p className="text-muted max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>
      <section className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t("whoWeAre")}</h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="/about-factory.mp4"
              controls
              preload="metadata"
              poster="/about-factory-poster.jpg"
            />
          </div>
        </div>
      </section>
      <section className="bg-space-card py-12">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-8">{t("whyPartner")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_KEYS.map((k) => (
              <div key={k} className=" p-6 rounded-xl border border-border">
                <div className="text-3xl mb-3">{WHY_ICONS[k]}</div>
                <h3 className="font-semibold mb-2">{th(`whyItems.${k}.title`)}</h3>
                <p className="text-sm text-muted leading-relaxed">{th(`whyItems.${k}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-wide py-12">
        <h2 className="text-2xl font-bold text-center mb-8">{t("certifications")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {CERT_KEYS.map((k) => (
            <div key={k} className="text-center p-4 bg-space-card rounded-xl border border-border">
              <div className="text-3xl mb-2">{k==='iso'?'✅':k==='rohs'?'🧪':k==='reach'?'📋':'🔬'}</div>
              <p className="font-semibold text-sm">{t(`cert.${k}.name`)}</p>
              <p className="text-xs text-muted">{t(`cert.${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
