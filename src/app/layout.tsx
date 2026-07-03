import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "RESIONE — Professional LCD UV-Curing 3D Printing Resins",
    template: "%s | RESIONE",
  },
  description: "Premium photopolymer resins for LCD/DLP/SLA 3D printers. OEM & ODM services. Trusted in 50+ countries worldwide.",
  openGraph: {
    title: "RESIONE — Professional 3D Printing Resins",
    description: "Premium photopolymer resins for LCD/DLP/SLA 3D printers. OEM & ODM services.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
