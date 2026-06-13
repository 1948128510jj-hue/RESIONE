import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingInquiry from "@/components/inquiry/FloatingInquiry";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "RESIONE — Professional LCD UV-Curing Resin Manufacturer | 3D Printing Resins",
      template: "%s | RESIONE",
    },
    description: "Premium 3D printing photopolymer resins for LCD/DLP/SLA printers. Standard, tough, flexible, dental, water-washable resins. OEM & ODM services. Global B2B supplier.",
    keywords: ["LCD resin", "UV curing resin", "3D printing resin", "photopolymer resin", "dental model resin", "casting resin", "tough resin", "water washable resin", "3D printer resin manufacturer", "OEM resin"],
    openGraph: {
      title: "RESIONE — Professional LCD Resin Manufacturer",
      description: "Premium 3D printing photopolymer resins. OEM & ODM services available.",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en' | 'zh' | 'ja')) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`antialiased ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-space font-sans">
        {/* Cosmic starfield layer */}
        <div className="cosmic-stars" aria-hidden="true" />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingInquiry />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
