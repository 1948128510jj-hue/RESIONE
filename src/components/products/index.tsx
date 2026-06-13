"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { useState } from "react";

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
    viscosity: "Viscosity",
    liquidDensity: "Liquid Density",
    solidDensity: "Solid Density",
    density: "Density",
    tensileStrength: "Tensile Strength",
    tensileModulus: "Tensile Modulus",
    elongationAtBreak: "Elongation at Break",
    flexuralStrength: "Flexural Strength",
    flexuralModulus: "Flexural Modulus",
    hardness: "Hardness",
    izodImpact: "Notched IZOD Impact",
    waterAbsorption: "Water Absorption (24hr)",
    hdt: "HDT (°C)",
    wavelength: "Wavelength",
    shrinkage: "Shrinkage",
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
      {/* Product poster image */}
      <div className="aspect-square bg-gradient-to-br from-surface to-gray-200 flex items-center justify-center relative overflow-hidden">
        <img
          src={`/images/products/${slug}_1.jpeg`}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).parentElement!.classList.add('fallback');
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 fallback-only">
          <div className="text-6xl opacity-30">🧪</div>
        </div>
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
