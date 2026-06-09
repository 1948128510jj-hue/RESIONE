import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ShenShuo Tech for resin inquiries, OEM services, or technical support.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Contact Us</h1>
          <p className="text-muted max-w-2xl">
            We would love to hear from you. Reach out for product inquiries, technical support, or partnership opportunities.
          </p>
        </div>
      </section>

      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Name *</label>
                <input type="text" name="name" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email *</label>
                <input type="email" name="email" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Subject</label>
                <input type="text" name="subject" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message *</label>
                <textarea name="message" required rows={4} className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-y" />
              </div>
              <button type="submit" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors">Send Message →</button>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-5">
              {[
                { icon: "📧", label: "Email", value: SITE_CONFIG.email, link: `mailto:${SITE_CONFIG.email}` },
                { icon: "📱", label: "WhatsApp", value: SITE_CONFIG.whatsapp, link: `https://wa.me/${(SITE_CONFIG.whatsapp || '').replace(/[^0-9]/g, '')}` },
                { icon: "💬", label: "WeChat", value: SITE_CONFIG.wechat },
                { icon: "📍", label: "Address", value: SITE_CONFIG.address },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-surface rounded-xl border border-border">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs text-muted mb-0.5">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-6 aspect-video bg-surface border border-border rounded-xl flex items-center justify-center">
              <div className="text-center text-muted text-sm">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Shenzhen, Guangdong, China</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
