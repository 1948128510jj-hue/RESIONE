import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

interface SpecItemProps {
  label: string;
  value: string;
}

export function SpecItem({ label, value }: SpecItemProps) {
  return (
    <div className="flex justify-between py-2 border-b border-border last:border-0">
      <span className="text-sm text-muted">{label}</span>
      <span className="text-sm font-medium text-foreground text-right">{value || "—"}</span>
    </div>
  );
}

interface SpecTableProps {
  specs: Record<string, string>;
}

export function SpecificationTable({ specs }: SpecTableProps) {
  const labels: Record<string, string> = {
    color: "Color",
    viscosity: "Viscosity (cP @25°C)",
    density: "Density (g/cm³)",
    tensileStrength: "Tensile Strength (MPa)",
    elongationAtBreak: "Elongation at Break (%)",
    flexuralStrength: "Flexural Strength (MPa)",
    flexuralModulus: "Flexural Modulus (MPa)",
    hardness: "Hardness (Shore D)",
    hdt: "HDT (°C)",
    wavelength: "Wavelength",
    shrinkage: "Shrinkage (%)",
  };

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <div className="bg-surface px-4 py-3 border-b border-border">
        <h3 className="font-semibold text-foreground text-sm">Technical Specifications</h3>
      </div>
      <div className="px-4 py-2">
        {Object.entries(labels).map(([key, label]) => {
          if (!specs[key]) return null;
          return <SpecItem key={key} label={label} value={specs[key]} />;
        })}
      </div>
    </div>
  );
}

interface ProductCardProps {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image?: string;
}

export function ProductCard({ slug, name, tagline, category }: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block bg-white border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition-all"
    >
      {/* Product image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-surface to-gray-200 flex items-center justify-center relative overflow-hidden">
        <div className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">🧪</div>
        <div className="absolute top-3 left-3">
          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">{category}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-xs text-muted mt-1 line-clamp-2">{tagline}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-primary font-medium">View Details →</span>
        </div>
      </div>
    </Link>
  );
}
