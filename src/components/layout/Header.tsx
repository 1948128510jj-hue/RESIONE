"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { SITE_CONFIG } from "@/lib/constants";

const LANG_LABELS: Record<string, string> = { en: "EN", zh: "中文", ja: "日本語" };
const LANG_NEXT: Record<string, string> = { en: "zh", zh: "ja", ja: "en" };

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  // Build switch URL: replace locale segment
  function switchHref(target: string) {
    return pathname.replace(/^\/(en|zh|ja)/, `/${target}`);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container-wide flex items-center justify-between h-16 sm:h-[72px]">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center shrink-0">
          <img src="/images/logo/resione-logo.png" alt="RESIONE" className="h-14 sm:h-16 w-auto py-1" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {SITE_CONFIG.nav.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-surface rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-2.5 py-2 text-xs font-semibold border border-border rounded-md hover:border-primary hover:text-primary transition-colors"
            >
              {LANG_LABELS[locale] || "EN"}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-border rounded-lg shadow-lg py-1 z-50 min-w-[100px]">
                {Object.entries(LANG_LABELS).map(([code, label]) => (
                  <Link
                    key={code}
                    href={switchHref(code)}
                    onClick={() => setLangOpen(false)}
                    className={`block px-4 py-2 text-sm hover:bg-surface transition-colors ${locale === code ? 'font-bold text-primary' : 'text-foreground'}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>
            WhatsApp
          </a>
          {/* Get Quote */}
          <Link
            href={`/${locale}/inquiry`}
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg hover:bg-primary-light transition-colors shadow-sm"
          >
            Get Quote
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 -mr-2 text-foreground hover:bg-surface rounded-md"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-wide py-4 flex flex-col gap-1">
            {SITE_CONFIG.nav.map((item) => (
              <Link key={item.href} href={`/${locale}${item.href}`} onClick={() => setMenuOpen(false)} className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-surface rounded-lg transition-colors">
                {item.label}
              </Link>
            ))}
            {/* Mobile language switcher */}
            <div className="flex gap-2 px-4 py-3 border-t border-border">
              {Object.entries(LANG_LABELS).map(([code, label]) => (
                <Link key={code} href={switchHref(code)} onClick={() => setMenuOpen(false)} className={`px-3 py-1.5 text-xs rounded-full border ${locale === code ? 'border-primary bg-primary/10 text-primary font-bold' : 'border-border text-foreground/60'}`}>
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex gap-3 mt-2 px-4 pt-2 border-t border-border">
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2.5 text-sm font-semibold bg-green-500 text-white rounded-lg">WhatsApp</a>
              <Link href={`/${locale}/inquiry`} onClick={() => setMenuOpen(false)} className="flex-1 text-center px-4 py-2.5 text-sm font-semibold bg-primary text-white rounded-lg">Get Quote</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
