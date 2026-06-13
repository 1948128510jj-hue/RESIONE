import { SITE_CONFIG } from "@/lib/constants";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return { title: "Request a Quote", description: "Send us your resin requirements and get a quote within 24 hours." };
}

export default async function InquiryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("inquiry");
  return (
    <div className="bg-white">
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">{t("title")}</h1>
          <p className="text-muted max-w-2xl">{t("heroSub")}</p>
        </div>
      </section>
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <form action="https://formsubmit.co/1948128510jj@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New RFQ from RESIONE Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://resione.top/thank-you" />
              <input type="text" name="_honey" style={{display:'none'}} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-foreground mb-1.5">{t("name")}</label><input type="text" name="name" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-1.5">{t("company")}</label><input type="text" name="company" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-foreground mb-1.5">{t("email")}</label><input type="email" name="email" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
                <div><label className="block text-sm font-medium text-foreground mb-1.5">{t("phone")}</label><input type="tel" name="phone" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" /></div>
              </div>
              <div><label className="block text-sm font-medium text-foreground mb-1.5">{t("resinType")}</label>
                <select name="resin_type" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-white">
                  <option value="">{t("selectResin")}</option>
                  <option value="standard">Standard Resin</option>
                  <option value="tough">Tough / ABS-Like Resin</option>
                  <option value="flexible">Flexible / Elastic Resin</option>
                  <option value="high-temp">High Temperature Resin</option>
                  <option value="dental">Dental Model Resin</option>
                  <option value="casting">Casting Resin</option>
                  <option value="water-washable">Water Washable Resin</option>
                  <option value="custom">Custom Formulation</option>
                  <option value="not-sure">Not Sure — Need Recommendation</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-foreground mb-1.5">{t("quantity")}</label>
                  <select name="quantity" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-white">
                    <option value="">{t("selectQuantity")}</option>
                    <option value="sample">Samples (1-2 kg)</option>
                    <option value="small">Small batch (10-50 kg)</option>
                    <option value="medium">Medium batch (50-200 kg)</option>
                    <option value="large">Large batch (200-1000 kg)</option>
                    <option value="bulk">Bulk order (1000+ kg)</option>
                  </select>
                </div>
                <div><label className="block text-sm font-medium text-foreground mb-1.5">{t("priceRange")}</label>
                  <select name="price_range" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-white">
                    <option value="">{t("selectRange")}</option>
                    <option value="economy">$10-20/kg (Economy)</option>
                    <option value="mid">$20-40/kg (Mid-range)</option>
                    <option value="premium">$40-80/kg (Premium)</option>
                    <option value="custom">Custom / Negotiable</option>
                  </select>
                </div>
              </div>
              <div><label className="block text-sm font-medium text-foreground mb-1.5">{t("requirements")}</label>
                <textarea name="message" required rows={5} className="w-full border border-border rounded-lg px-4 py-2.5 text-sm resize-y" />
              </div>
              <button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors shadow-lg text-base">{t("submit")} →</button>
              <p className="text-xs text-muted mt-3">We typically respond within 24 hours. For urgent inquiries, please contact us via WhatsApp.</p>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">{t("preferDirect")}</h3>
              <div className="space-y-3 text-sm">
                {[{icon:"📧",label:"Email",val:SITE_CONFIG.email},{icon:"📱",label:"WhatsApp",val:SITE_CONFIG.whatsapp},{icon:"💬",label:"WeChat",val:SITE_CONFIG.wechat}].map((i)=>(
                  <div key={i.label} className="flex items-center gap-3">
                    <span className="text-lg">{i.icon}</span>
                    <div><p className="text-muted text-xs">{i.label}</p><p className="font-medium">{i.val}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">{t("whatsNext")}</h3>
              <ol className="space-y-2 text-sm text-muted">
                {['step1','step2','step3','step4','step5'].map((s,i)=>(
                  <li key={s} className="flex gap-2"><span className="text-primary font-bold">{i+1}.</span>{t(s)}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
