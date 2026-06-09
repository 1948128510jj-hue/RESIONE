import Link from "next/link";
import { notFound } from "next/navigation";
import { SpecificationTable } from "@/components/products";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

// This will be replaced with real data loading from content files
const PRODUCTS: Record<string, {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  images: string[];
  features: string[];
  applications: string[];
  compatibleWith: string[];
  minOrder: string;
  leadTime: string;
  specs: Record<string, string>;
}> = {
  "standard-plus-resin": {
    slug: "standard-plus-resin",
    name: "Standard Plus Resin",
    tagline: "High-precision standard resin with smooth surface finish and excellent detail reproduction",
    category: "Standard",
    description: "A versatile general-purpose resin formulated for high-resolution LCD and DLP 3D printers. Delivers sharp details, smooth surface finish, and reliable print success rates. Ideal for prototypes, models, figurines, and functional parts that don't require extreme mechanical properties.",
    images: ["/images/products/placeholder.svg"],
    features: [
      "High resolution and fine detail reproduction",
      "Low shrinkage for dimensional accuracy",
      "Smooth surface finish with minimal layer lines",
      "Fast curing speed compatible with monochrome LCD screens",
      "Low odor formulation",
      "Excellent adhesion to build plate",
      "Balanced mechanical properties",
    ],
    applications: [
      "Concept models and prototypes",
      "Figurines and collectibles",
      "Educational models",
      "Functional parts with moderate requirements",
      "Display models",
    ],
    compatibleWith: [
      "All 405nm LCD printers (Elegoo, Anycubic, Phrozen, etc.)",
      "385nm DLP printers",
      "Most consumer and professional SLA printers",
    ],
    minOrder: "10 kg (sample orders available)",
    leadTime: "3-7 days for stock items; 2-4 weeks for bulk orders",
    specs: {
      color: "Gray / Black / White / Clear",
      viscosity: "200-400 cP @25°C",
      density: "1.10 g/cm³",
      tensileStrength: "40-55 MPa",
      elongationAtBreak: "5-10%",
      flexuralStrength: "60-80 MPa",
      flexuralModulus: "1500-2000 MPa",
      hardness: "80-85 Shore D",
      hdt: "55-65 °C",
      wavelength: "385-405 nm",
      shrinkage: "< 2%",
      bottleSize: "500ml, 1kg, 5kg, 25kg",
    },
  },
  "tough-abs-like-resin": {
    slug: "tough-abs-like-resin",
    name: "Tough ABS-Like Resin",
    tagline: "Engineering-grade tough resin with superior impact resistance and durability",
    category: "Tough / ABS-Like",
    description: "Engineered for parts that need to withstand mechanical stress. This ABS-like resin combines high impact strength with good stiffness, making it perfect for functional prototypes, tooling, and end-use parts that will be handled frequently.",
    images: ["/images/products/placeholder.svg"],
    features: [
      "High impact resistance (20-40 J/m)",
      "Excellent balance of strength and flexibility",
      "ABS-like feel and appearance",
      "Good machinability after curing",
      "Can be tapped and threaded",
      "Durable for repeated handling",
    ],
    applications: [
      "Functional prototypes",
      "Snap-fit assemblies",
      "Tooling and jigs",
      "Consumer product housings",
      "Mechanical parts",
      "Automotive components",
    ],
    compatibleWith: ["All 405nm LCD printers", "385nm DLP printers", "Professional SLA printers"],
    minOrder: "10 kg (sample orders available)",
    leadTime: "3-7 days for stock items; 2-4 weeks for bulk orders",
    specs: {
      color: "Gray / Black",
      viscosity: "300-500 cP @25°C",
      density: "1.12 g/cm³",
      tensileStrength: "45-55 MPa",
      elongationAtBreak: "15-25%",
      flexuralStrength: "65-85 MPa",
      flexuralModulus: "1400-1800 MPa",
      hardness: "78-85 Shore D",
      hdt: "50-60 °C",
      wavelength: "385-405 nm",
      shrinkage: "< 2.5%",
      bottleSize: "500ml, 1kg, 5kg, 25kg",
    },
  },
  "anti-impact-resin": {
    slug: "anti-impact-resin",
    name: "Anti-Impact Resin",
    tagline: "Ultra-tough resin engineered for parts that need to withstand drops and impacts",
    category: "Tough / ABS-Like",
    description: "Our toughest resin formulation. Designed for applications where parts are subject to impact, drops, and rough handling. Offers exceptional durability without sacrificing print quality.",
    images: ["/images/products/placeholder.svg"],
    features: [
      "Exceptional impact resistance (30+ J/m)",
      "High elongation for flexibility under stress",
      "Excellent inter-layer adhesion",
      "Durable under repetitive loading",
      "Good surface quality",
    ],
    applications: [
      "Drop-resistant enclosures",
      "Protective equipment",
      "High-wear mechanical parts",
      "Drone and RC components",
      "Sports equipment prototypes",
    ],
    compatibleWith: ["All 405nm LCD printers", "385nm DLP printers"],
    minOrder: "10 kg (sample orders available)",
    leadTime: "3-7 days for stock items; 2-4 weeks for bulk orders",
    specs: {
      color: "Gray / Black / White",
      viscosity: "350-550 cP @25°C",
      density: "1.11 g/cm³",
      tensileStrength: "35-50 MPa",
      elongationAtBreak: "25-40%",
      flexuralStrength: "55-75 MPa",
      flexuralModulus: "1000-1500 MPa",
      hardness: "75-82 Shore D",
      hdt: "45-55 °C",
      wavelength: "385-405 nm",
      shrinkage: "< 2.5%",
      bottleSize: "500ml, 1kg, 5kg, 25kg",
    },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} - ${product.tagline}`,
    description: product.description.substring(0, 160),
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS[slug];

  if (!product) notFound();

  return (
    <div className="bg-white">
      <div className="container-wide py-8 sm:py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Image placeholder */}
          <div className="aspect-square bg-gradient-to-br from-surface to-gray-200 rounded-2xl flex items-center justify-center">
            <div className="text-center text-muted">
              <div className="text-8xl mb-4">🧪</div>
              <p className="text-sm">Product image placeholder</p>
            </div>
          </div>

          {/* Right: Product info */}
          <div>
            <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{product.category}</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-2">{product.name}</h1>
            <p className="text-muted mb-6">{product.tagline}</p>

            {/* Specs quick view */}
            <SpecificationTable specs={product.specs} />

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href="/inquiry"
                className="flex-1 sm:flex-none px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-center"
              >
                Request a Quote
              </Link>
              <a
                href={`https://wa.me/${(SITE_CONFIG.whatsapp || '').replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors text-center"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Full details below */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description & Features */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-3">Product Description</h2>
              <p className="text-muted leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-primary mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Applications</h2>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((a, i) => (
                  <span key={i} className="px-3 py-1.5 bg-surface border border-border rounded-full text-xs text-muted">{a}</span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Compatible Printers</h2>
              <p className="text-sm text-muted">{product.compatibleWith.join(" · ")}</p>
            </div>
          </div>

          {/* Sidebar: Order info */}
          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-xl p-5">
              <h3 className="font-semibold mb-3">Order Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Bottle Sizes</span>
                  <span className="font-medium">{product.specs.bottleSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Min Order</span>
                  <span className="font-medium">{product.minOrder}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Lead Time</span>
                  <span className="font-medium">{product.leadTime}</span>
                </div>
              </div>
              <Link
                href="/inquiry"
                className="block text-center mt-4 px-4 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-sm"
              >
                Get Quote Now
              </Link>
            </div>

            {/* Download docs */}
            <div className="bg-surface border border-border rounded-xl p-5">
              <h3 className="font-semibold mb-3">Technical Documents</h3>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <span>📄</span> SDS (Safety Data Sheet)
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <span>📊</span> TDS (Technical Data Sheet)
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <span>🖨️</span> Print Parameter Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
