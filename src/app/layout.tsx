import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingInquiry from "@/components/inquiry/FloatingInquiry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ShenShuo Tech - Professional LCD UV-Curing Resin Manufacturer | 3D Printing Resins",
    template: "%s | ShenShuo Tech",
  },
  description:
    "Premium 3D printing photopolymer resins for LCD/DLP/SLA printers. Standard, tough, flexible, dental, casting, water-washable resins. OEM & ODM services. Global B2B supplier.",
  keywords: [
    "LCD resin", "UV curing resin", "3D printing resin", "photopolymer resin",
    "dental model resin", "casting resin", "tough resin", "water washable resin",
    "3D printer resin manufacturer", "OEM resin", "ShenShuo",
  ],
  openGraph: {
    title: "ShenShuo Tech - Professional LCD Resin Manufacturer",
    description: "Premium 3D printing photopolymer resins. OEM & ODM services available.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingInquiry />
      </body>
    </html>
  );
}
