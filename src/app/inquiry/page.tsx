import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote - Inquiry Form",
  description: "Send us your resin requirements and get a quote within 24 hours. Custom formulation available.",
};

export default function InquiryPage() {
  return (
    <div className="bg-white">
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Request a Quote</h1>
          <p className="text-muted max-w-2xl">
            Fill out the form below and we will get back to you within 24 hours with pricing, samples, and technical recommendations.
          </p>
        </div>
      </section>

      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <input type="text" name="name" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company Name *</label>
                  <input type="text" name="company" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="Your company" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input type="email" name="email" required className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone / WhatsApp</label>
                  <input type="tel" name="phone" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="+1 234 567 8900" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Resin Type You Are Interested In</label>
                <select name="resin_type" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                  <option value="">Select a resin type...</option>
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
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Estimated Quantity</label>
                  <select name="quantity" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                    <option value="">Select quantity...</option>
                    <option value="sample">Samples (1-2 kg)</option>
                    <option value="small">Small batch (10-50 kg)</option>
                    <option value="medium">Medium batch (50-200 kg)</option>
                    <option value="large">Large batch (200-1000 kg)</option>
                    <option value="bulk">Bulk order (1000+ kg)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Target Price Range (per kg)</label>
                  <select name="price_range" className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                    <option value="">Select range...</option>
                    <option value="economy">$10-20/kg (Economy)</option>
                    <option value="mid">$20-40/kg (Mid-range)</option>
                    <option value="premium">$40-80/kg (Premium)</option>
                    <option value="custom">Custom / Negotiable</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Your Requirements / Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-y"
                  placeholder={"Please describe:\n• What type of resin do you need?\n• What printer(s) do you use?\n• What applications / end-use?\n• Any special requirements (color, viscosity, etc.)?\n• Do you need OEM/private label service?"}
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl text-base"
              >
                Submit Inquiry →
              </button>
              <p className="text-xs text-muted mt-3">
                We typically respond within 24 hours. For urgent inquiries, please contact us via WhatsApp.
              </p>
            </form>
          </div>

          {/* Sidebar: Contact info */}
          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Prefer Direct Contact?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📧</span>
                  <div>
                    <p className="text-muted text-xs">Email</p>
                    <p className="font-medium">{SITE_CONFIG.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📱</span>
                  <div>
                    <p className="text-muted text-xs">WhatsApp</p>
                    <a href={`https://wa.me/${(SITE_CONFIG.whatsapp || '').replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:underline">{SITE_CONFIG.whatsapp}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">💬</span>
                  <div>
                    <p className="text-muted text-xs">WeChat</p>
                    <p className="font-medium">{SITE_CONFIG.wechat}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">What Happens Next?</h3>
              <ol className="space-y-2 text-sm text-muted">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">1.</span>
                  We review your requirements within 24 hours
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">2.</span>
                  Technical team recommends the best resin match
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">3.</span>
                  We send pricing and arrange samples if needed
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">4.</span>
                  You test the samples — we adjust formula as needed
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">5.</span>
                  Confirm order and start production
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
