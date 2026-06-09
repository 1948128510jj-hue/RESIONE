"use client";

import Link from "next/link";
import { SITE_CONFIG, WHY_CHOOSE_US, OEM_SERVICES } from "@/lib/constants";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-64 h-64 border-2 border-white/20 rounded-full translate-x-1/3" />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 border-2 border-white/10 rounded-full translate-y-1/3" />
      </div>
      <div className="container-wide relative py-16 sm:py-24">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 bg-white/15 rounded-full text-xs font-medium mb-4 backdrop-blur-sm">
            🏭 Factory Direct · OEM/ODM Available
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Premium LCD UV-Curing Resins for{" "}
            <span className="text-accent-light">Professional 3D Printing</span>
          </h1>
          <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
            High-performance photopolymer resins engineered for precision, durability, and
            consistency. Trusted by 3D printing professionals in 50+ countries.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Products
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/inquiry"
              className="inline-flex items-center px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href={`https://wa.me/${(SITE_CONFIG.whatsapp || '').replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              Chat on WhatsApp
            </a>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-10 text-xs text-white/60">
            <span>✅ ISO 9001 Certified</span>
            <span>🚢 50+ Countries</span>
            <span>🔬 In-House R&D</span>
            <span>📦 OEM/ODM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Our Product Range</h2>
          <p className="text-muted max-w-xl mx-auto">
            Comprehensive portfolio of photopolymer resins for every application — from rapid prototyping to end-use parts
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCT_CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              href={`/products?category=${cat.key}`}
              className="group p-5 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all bg-surface/50 hover:bg-surface"
            >
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

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-surface">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Why Partner With Us</h2>
          <p className="text-muted max-w-xl mx-auto">
            We go beyond supplying resins — we help you grow your 3D printing business
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-xl border border-border hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OEMServices() {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">OEM & ODM Services</h2>
          <p className="text-muted max-w-xl mx-auto">
            Build your own resin brand with our end-to-end custom manufacturing services
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OEM_SERVICES.map((item) => (
            <div key={item.title} className="p-6 bg-surface rounded-xl text-center border border-border hover:border-primary/30 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container-wide text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-white/80 max-w-lg mx-auto mb-8 text-lg">
          Tell us your requirements — we will get back with a quote within 24 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/inquiry"
            className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Send Inquiry Now →
          </Link>
          <a
            href={`https://wa.me/${(SITE_CONFIG.whatsapp || '').replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-xl text-lg"
          >
            WhatsApp Chat
          </a>
        </div>
        <p className="text-white/50 text-sm mt-6">Typically respond within 2 hours during business hours</p>
      </div>
    </section>
  );
}
