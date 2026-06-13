"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const FLAGSHIPS = [
  { slug: "anti-impact", name: "Anti-Impact", tag: "Nylon-Like · 93% Elongation", color: "#00c6c0" },
  { slug: "k-plus", name: "K+", tag: "Pure Black · Injection Feel", color: "#3b82f6" },
  { slug: "g217", name: "G217", tag: "Clear Tough · 62 MPa", color: "#8b5cf6" },
  { slug: "th-mini", name: "TH-MINI", tag: "Miniature · 66 J/m Impact", color: "#f59e0b" },
];

export default function ProductBurst() {
  const [phase, setPhase] = useState<"bounce" | "burst" | "show">("bounce");
  const locale = useLocale();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("burst"), 1800);
    const t2 = setTimeout(() => setPhase("show"), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto h-[300px] sm:h-[360px] flex items-center justify-center select-none">
      {/* ===== PHASE 1: Bouncing Molecule ===== */}
      <div className={`transition-all duration-700 ${phase !== "bounce" ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}>
        <div className="relative">
          {/* Main molecule */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-blue animate-bounce shadow-lg shadow-accent/30 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white/80" />
          </div>
          {/* Orbit particles */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full"
              style={{
                background: i % 2 === 0 ? "#00c6c0" : "#3b82f6",
                animation: `orbit 2s linear infinite`,
                animationDelay: `${i * 0.15}s`,
                transformOrigin: `-${30 + i * 5}px center`,
              }}
            />
          ))}
        </div>
        <p className="text-center text-muted text-sm mt-6 animate-pulse">Loading something amazing...</p>
      </div>

      {/* ===== PHASE 2: Burst ===== */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${phase === "burst" ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
        {/* Burst ring */}
        <div className="absolute w-48 h-48 rounded-full border-2 border-accent/30 animate-ping" />
        <div className="absolute w-36 h-36 rounded-full border border-accent/20 animate-ping" style={{ animationDelay: "0.2s" }} />
        {/* Sparkle particles */}
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent"
            style={{
              animation: `sparkle 0.8s ease-out forwards`,
              animationDelay: `${i * 0.04}s`,
              transform: `rotate(${i * 22.5}deg) translateY(-60px)`,
            }}
          />
        ))}
      </div>

      {/* ===== PHASE 3: Product Cards Reveal ===== */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-700 ${phase === "show" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xs text-muted-dim mb-2 tracking-widest uppercase">Explore Our Flagships</p>
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
          {FLAGSHIPS.map((p, i) => (
            <Link
              key={p.slug}
              href={`/${locale}/products/${p.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: p.color }} />
              <h3 className="font-bold text-sm text-foreground group-hover:text-accent transition-colors">{p.name}</h3>
              <p className="text-[10px] text-muted-dim mt-1 leading-relaxed">{p.tag}</p>
              <span className="text-accent text-[10px] font-medium mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">
                View →
              </span>
            </Link>
          ))}
        </div>
        <Link href={`/${locale}/products`} className="btn-primary text-sm mt-4 px-6 py-2.5">
          Browse All 32 Products →
        </Link>
      </div>

      {/* ===== Keyframe Styles ===== */}
      <style jsx>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        @keyframes sparkle {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0) translateY(-100px); }
        }
      `}</style>
    </div>
  );
}
