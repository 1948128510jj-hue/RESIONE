import { OEM_SERVICES } from "@/lib/constants";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OEM & ODM Services",
  description: "Custom resin formulation, private labeling, and packaging solutions. Build your own 3D printing resin brand.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">OEM & ODM Services</h1>
          <p className="text-muted max-w-2xl">
            Build your own 3D printing resin brand with our end-to-end custom manufacturing services.
            From formulation to packaging — we handle everything.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OEM_SERVICES.map((item) => (
            <div key={item.title} className="p-6 bg-surface border border-border rounded-xl hover:border-primary/30 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface py-12">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-8">How Our OEM Process Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Discuss Needs", desc: "Tell us your requirements — resin type, properties, color, target price" },
              { step: "2", title: "Sample Development", desc: "Our R&D develops sample formulations for your testing and approval" },
              { step: "3", title: "Design & Branding", desc: "Custom labels, bottles, packaging designed with your brand" },
              { step: "4", title: "Production", desc: "ISO-certified manufacturing with strict quality control at every batch" },
              { step: "5", title: "Ship & Support", desc: "Global logistics + technical documentation support for your customers" },
            ].map((item) => (
              <div key={item.step} className="text-center p-5 bg-white rounded-xl border border-border">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm">{item.step}</div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Build Your Resin Brand?</h2>
        <p className="text-muted max-w-lg mx-auto mb-6">Let us discuss your OEM/ODM requirements.</p>
        <Link href="/inquiry" className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition-colors shadow-lg text-lg">
          Start Your OEM Project →
        </Link>
      </section>
    </div>
  );
}
