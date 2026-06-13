import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Resources", description: "Technical resources, SDS/TDS downloads, print parameter guides." };

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("resources");
  return (
    <div className="">
      <section className="bg-space-card border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t("title")}</h1>
          <p className="text-muted max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">{t("docsTitle")}</h2>
            <div className="space-y-3">
              {[ { k:"doc1" }, { k:"doc2" }, { k:"doc3" }, { k:"doc4" } ].map((d) => (
                <div key={d.k} className="p-4 bg-space-card border border-border rounded-lg flex items-center justify-between group hover:border-primary/30 transition-colors">
                  <div>
                    <p className="font-medium text-sm">{t(`${d.k}.name`)}</p>
                    <p className="text-xs text-muted">{t(`${d.k}.desc`)}</p>
                  </div>
                  <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{t("download")}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">{t("faqTitle")}</h2>
            <div className="space-y-3">
              {[ { k:"faq1" }, { k:"faq2" }, { k:"faq3" }, { k:"faq4" }, { k:"faq5" } ].map((f) => (
                <details key={f.k} className="p-4 bg-space-card border border-border rounded-lg group">
                  <summary className="font-medium text-sm cursor-pointer list-none flex items-center justify-between">
                    {t(`${f.k}.q`)}
                    <span className="text-muted text-xs group-open:hidden">+</span>
                    <span className="text-muted text-xs hidden group-open:inline">−</span>
                  </summary>
                  <p className="text-sm text-muted mt-3 leading-relaxed">{t(`${f.k}.a`)}</p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">{t("blogTitle")}</h2>
            <div className="space-y-4">
              {[ { k:"post1" }, { k:"post2" }, { k:"post3" } ].map((p) => (
                <div key={p.k} className="p-4 bg-space-card border border-border rounded-lg">
                  <p className="text-xs text-muted mb-1">{t(`${p.k}.date`)}</p>
                  <h3 className="font-semibold text-sm mb-1">{t(`${p.k}.title`)}</h3>
                  <p className="text-xs text-muted leading-relaxed">{t(`${p.k}.excerpt`)}</p>
                  <span className="text-primary text-xs font-medium mt-2 inline-block">{t("readMore")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
