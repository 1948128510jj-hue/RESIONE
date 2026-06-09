import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-lg mb-3">{SITE_CONFIG.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Professional manufacturer of LCD UV-curing 3D printing resins.
              Serving customers in 50+ countries worldwide.
            </p>
            <div className="flex gap-3">
              {/* WhatsApp */}
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
              </a>
              {/* LinkedIn */}
              <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {SITE_CONFIG.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-3">Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/products" className="hover:text-white transition-colors">Standard Resin</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Tough / ABS-Like Resin</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Water Washable Resin</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Dental Model Resin</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Casting Resin</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">All Products →</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📧 {SITE_CONFIG.email}</li>
              <li>📱 {SITE_CONFIG.whatsapp}</li>
              <li>💬 WeChat: {SITE_CONFIG.wechat}</li>
              <li>📍 {SITE_CONFIG.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
