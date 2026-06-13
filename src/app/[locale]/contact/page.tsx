import { SITE_CONFIG } from "@/lib/constants";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Contact Us", description: "Get in touch with ShenShuo Tech for resin inquiries, OEM services, or technical support." };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");
  return (
    <div className="bg-white">
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t("title")}</h1>
          <p className="text-muted max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4">{t("formTitle")}</h2>
            <form action="https://formsubmit.co/1948128510jj@gmail.com" method="POST" className="space-y-4">
              <div><label className="block text-sm font-medium mb-1.5">{t("name")} *</label><input type="text" name="name" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
              <div><label className="block text-sm font-medium mb-1.5">{t("email")} *</label><input type="email" name="email" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
              <div><label className="block text-sm font-medium mb-1.5">{t("subject")}</label><input type="text" name="subject" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
              <div><label className="block text-sm font-medium mb-1.5">{t("message")} *</label><textarea name="message" required rows={4} className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y" /></div>
              <button type="submit" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors">{t("send")} →</button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">{t("info")}</h2>
            <div className="space-y-5">
              {[{ icon: "📧", label: "Email", value: SITE_CONFIG.email, link: `mailto:${SITE_CONFIG.email}` },{ icon: "📱", label: t("whatsapp"), value: SITE_CONFIG.whatsapp, link: `https://wa.me/${(SITE_CONFIG.whatsapp || '').replace(/[^0-9]/g, '')}` },{ icon: "💬", label: t("wechat"), value: SITE_CONFIG.wechat },{ icon: "📍", label: t("address"), value: SITE_CONFIG.address }].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-border">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div><p className="text-xs text-muted mb-0.5">{item.label}</p>
                    {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">{item.value}</a> : <p className="font-medium text-foreground">{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
