"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const FLAGSHIPS = [
  { slug: "anti-impact", name: "Anti-Impact", emoji: "🦾", tag: "Nylon-Like · 93% Elongation", color: "#00a8a0" },
  { slug: "k-plus", name: "K+", emoji: "⚫", tag: "Pure Black · Injection Feel", color: "#2563eb" },
  { slug: "g217", name: "G217", emoji: "💎", tag: "Clear Tough · 62 MPa", color: "#7c3aed" },
  { slug: "th-mini", name: "TH-MINI", emoji: "🎮", tag: "Miniature · 66 J/m Impact", color: "#f59e0b" },
];

/* ================================================================
   Cute resin blob creatures
   ================================================================ */
function BlobCharacter({ index, phase }: { index: number; phase: string }) {
  const colors = ["#00a8a0", "#2563eb", "#7c3aed", "#f59e0b", "#ec4899", "#10b981"];
  const c = colors[index % colors.length];

  const animations = [
    "animate-bounce",                                    // 0: vertical bounce
    "animate-[spin_3s_linear_infinite]",                 // 1: spin
    "animate-[bounce_2s_ease-in-out_infinite]",          // 2: fast bounce
    "animate-[pulse_2s_ease-in-out_infinite]",           // 3: pulse
  ];

  const floatDelays = ["0s", "0.4s", "0.8s", "1.2s", "0.2s", "0.6s"];

  if (phase === "show") return null;

  return (
    <div
      className={`absolute transition-all duration-700 ${phase === "burst" ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
      style={{
        left: `${15 + index * 18}%`,
        top: phase === "bounce" ? `${25 + Math.sin(index * 1.5) * 20}%` : `${20 + index * 12}%`,
        animation: `float ${2.5 + index * 0.3}s ease-in-out infinite`,
        animationDelay: floatDelays[index],
      }}
    >
      {/* Body */}
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer"
        style={{ background: `linear-gradient(135deg, ${c}, ${c}dd)` }}
      >
        {/* Face */}
        <div className="flex flex-col items-center">
          <div className="flex gap-1.5 mb-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/90" />
          </div>
          <div className="w-3 h-1.5 rounded-full bg-white/80"
            style={{
              borderRadius: index % 2 === 0 ? "0 0 50% 50%" : "50% 50% 0 0",
            }}
          />
        </div>
      </div>
      {/* Shadow */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-black/10" />
    </div>
  );
}

/* ================================================================
   Burst particles
   ================================================================ */
function BurstParticles({ phase }: { phase: string }) {
  if (phase !== "burst") return null;
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
          style={{
            background: ["#00a8a0","#2563eb","#7c3aed","#f59e0b","#ec4899","#10b981"][i % 6],
            animation: `burstOut 0.7s ease-out forwards`,
            animationDelay: `${i * 0.03}s`,
            transformOrigin: "center",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes burstOut {
          0%   { opacity: 1; transform: rotate(0deg) translateY(0) scale(1); }
          100% { opacity: 0; transform: rotate(${Math.random() * 360}deg) translateY(-120px) scale(0); }
        }
      `}</style>
    </div>
  );
}

/* ================================================================
   Main Component
   ================================================================ */
export default function ProductBurst() {
  const [phase, setPhase] = useState<"bounce" | "burst" | "show">("bounce");
  const locale = useLocale();

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("burst"), 2200);
    const t2 = setTimeout(() => setPhase("show"), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const blobs = [0, 1, 2, 3, 4, 5];

  return (
    <div className="relative w-full max-w-md mx-auto h-[280px] sm:h-[340px] flex items-center justify-center select-none">
      {/* ===== PHASE 1 & 2: Characters ===== */}
      {phase !== "show" && (
        <>
          {/* Ripple ring when bursting */}
          {phase === "burst" && (
            <>
              <div className="absolute w-40 h-40 rounded-full border-2 border-accent/30 animate-ping" />
              <div className="absolute w-28 h-28 rounded-full border border-accent/20 animate-ping" style={{ animationDelay: "0.15s" }} />
            </>
          )}
          {/* Blob characters */}
          {blobs.map((i) => (
            <BlobCharacter key={i} index={i} phase={phase} />
          ))}
          {/* Cute text */}
          <p className={`absolute bottom-4 text-center text-sm text-muted transition-opacity duration-500 ${phase === "burst" ? "opacity-0" : "opacity-100"}`}>
            {phase === "bounce" ? "💡 3D Printing Resin Experts" : "💥"}
          </p>
        </>
      )}

      {/* Burst particles overlay */}
      <BurstParticles phase={phase} />

      {/* ===== PHASE 3: Product Cards ===== */}
      {phase === "show" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 animate-[fadeInUp_0.6s_ease-out]">
          <p className="text-xs text-muted-dim mb-1 font-medium tracking-wide">Explore Our Flagships</p>
          <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs">
            {FLAGSHIPS.map((p, i) => (
              <Link
                key={p.slug}
                href={`/${locale}/products/${p.slug}`}
                className="group card p-3.5 flex flex-col items-center text-center hover:-translate-y-0.5 transition-all duration-200"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <span className="text-2xl mb-1.5">{p.emoji}</span>
                <h3 className="font-bold text-sm text-foreground">{p.name}</h3>
                <p className="text-[10px] text-muted mt-0.5">{p.tag}</p>
              </Link>
            ))}
          </div>
          <Link href={`/${locale}/products`} className="btn-primary text-sm mt-3 px-6 py-2.5 text-white">
            Browse 32 Products →
          </Link>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25%  { transform: translateY(-18px) rotate(5deg); }
          50%  { transform: translateY(-6px) rotate(-3deg); }
          75%  { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
