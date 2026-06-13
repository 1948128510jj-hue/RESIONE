import { SITE_CONFIG, WHY_CHOOSE_US } from "@/lib/constants";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "About Us", description: "Learn about ShenShuo Tech — a professional LCD UV-curing resin manufacturer." };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");
  return (
    <div className="bg-white">
      <section className="bg-surface border-b border-border">
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
          <div className="aspect-video bg-gradient-to-br from-surface to-gray-200 rounded-2xl flex items-center justify-center">
            <div className="text-center text-muted">
              <div className="text-6xl mb-3">🏭</div>
              <p className="text-sm">Factory / Lab photo placeholder</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface py-12">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-8">{t("whyPartner")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border border-border">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-wide py-12">
        <h2 className="text-2xl font-bold text-center mb-8">{t("certifications")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[{ icon: "✅", name: "ISO 9001", desc: "Quality Management" },{ icon: "🧪", name: "RoHS", desc: "Hazardous Substance Compliance" },{ icon: "📋", name: "REACH", desc: "EU Chemical Regulation" },{ icon: "🔬", name: "In-House Testing", desc: "Batch Quality Control" }].map((cert) => (
            <div key={cert.name} className="text-center p-4 bg-surface rounded-xl border border-border">
              <div className="text-3xl mb-2">{cert.icon}</div>
              <p className="font-semibold text-sm">{cert.name}</p>
              <p className="text-xs text-muted">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
