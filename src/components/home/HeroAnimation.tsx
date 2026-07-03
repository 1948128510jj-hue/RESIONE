"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

/* ================================================================
   HeroAnimation — 6 droplets circle-spin fast → shrink → 4 cards burst
   Total cycle: ~2.5s
   ================================================================ */

const COLORS = ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff", "#5f27cd"];
const FEATURED = [
  { slug: "d01s",   label: "D01S",  desc: "Dental Model" },
  { slug: "m58",    label: "M58",   desc: "Gray Tough" },
  { slug: "ww-abs", label: "WW-ABS", desc: "Water Wash ABS" },
  { slug: "m70",    label: "M70",   desc: "High Precision" },
];

const N = 6;
const CIRCLE_R = 90; // single orbit radius for all droplets

export default function HeroAnimation() {
  const locale = useLocale();
  const [phase, setPhase] = useState<"spinning" | "burst">("spinning");
  const [elapsed, setElapsed] = useState(0);
  const TOTAL_MS = 700; // spin+shrink simultaneously for 0.7s then burst

  useEffect(() => {
    const t2 = setTimeout(() => setPhase("burst"), TOTAL_MS);
    return () => clearTimeout(t2);
  }, []);

  useEffect(() => {
    if (phase !== "spinning") return;
    const start = Date.now();
    const iv = setInterval(() => {
      const e = Date.now() - start;
      setElapsed(e);
      if (e >= TOTAL_MS) clearInterval(iv);
    }, 20);
    return () => clearInterval(iv);
  }, [phase]);

  // Progress: 0→1 over TOTAL_MS, then burst
  const p = Math.min(1, elapsed / TOTAL_MS);
  // Shrink curve: slow start, fast end (ease-in)
  const shrinkScale = phase === "spinning" ? (1 - p * p) : 0;
  const opacity = phase === "spinning" ? Math.max(0, 1 - p * 1.2) : 0;

  return (
    <div className="relative w-72 h-72 sm:w-80 sm:h-80">
      <style>{`
        @keyframes group-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes droplet-bob {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-3px) scale(1.05); }
        }
        @keyframes burst-in {
          0%   { opacity: 0; transform: scale(0) translateY(0); }
          60%  { opacity: 1; transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes sparkle-pop {
          0%   { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0); }
        }
        .spin-group { animation: group-spin 0.25s linear infinite; }
        .droplet-bob { animation: droplet-bob 0.3s ease-in-out infinite; }
        .burst-card  { animation: burst-in 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) both; }
      `}</style>

      {/* === Phase 1: Spin + shrink simultaneously → vanishes at center === */}
      {phase === "spinning" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="spin-group relative"
            style={{
              width: CIRCLE_R * 2,
              height: CIRCLE_R * 2,
              opacity,
              transform: `scale(${shrinkScale})`,
              transformOrigin: "center center",
            }}
          >
            {COLORS.map((color, i) => {
              const angle = (i / N) * 360;
              const rad = (angle * Math.PI) / 180;
              const x = CIRCLE_R + CIRCLE_R * Math.cos(rad) - 14;
              const y = CIRCLE_R + CIRCLE_R * Math.sin(rad) - 18;
              return (
                <div
                  key={i}
                  className="droplet-bob absolute"
                  style={{
                    left: x,
                    top: y,
                    width: 28,
                    height: 34,
                    animationDelay: `${i * 0.1}s`,
                    filter: `drop-shadow(0 0 5px ${color}66)`,
                  }}
                >
                  <svg viewBox="0 0 40 48" className="w-full h-full">
                    <path
                      d="M20 4 C28 14 36 24 34 34 C32 42 26 46 20 46 C14 46 8 42 6 34 C4 24 12 14 20 4Z"
                      fill={color} opacity="0.9"
                    />
                    <circle cx="15" cy="24" r="2.2" fill="white" />
                    <circle cx="25" cy="24" r="2.2" fill="white" />
                    <circle cx="15.5" cy="23.5" r="1" fill="#1a1f2e" />
                    <circle cx="25.5" cy="23.5" r="1" fill="#1a1f2e" />
                    <path d="M17 29 Q20 32 23 29" stroke="white" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.8" />
                  </svg>
                </div>
              );
            })}
          </div>
          {/* Center glow — pulses as droplets spiral in */}
          <div
            className="absolute rounded-full"
            style={{
              width: 10 + p * 40,
              height: 10 + p * 40,
              background: "#00c6c0",
              opacity: Math.max(0, 0.7 - p * 0.7),
              boxShadow: `0 0 ${16 + p * 50}px rgba(0,198,192,${0.5 - p * 0.5})`,
            }}
          />
        </div>
      )}

      {/* === Phase 3: Product burst — explode from center === */}
      {phase === "burst" && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Center flash */}
          <div
            className="absolute rounded-full bg-white"
            style={{
              width: 60, height: 60,
              opacity: 0,
              animation: "sparkle-pop 0.35s ease-out both",
              boxShadow: "0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(0,198,192,0.3)",
            }}
          />
          {/* Particle ring */}
          {[...Array(12)].map((_, i) => {
            const a = (i / 12) * 360;
            const r = 50 + Math.random() * 40;
            return (
              <div
                key={`p-${i}`}
                className="absolute rounded-full"
                style={{
                  width: 3, height: 3,
                  background: COLORS[i % 6],
                  left: `calc(50% + ${r * Math.cos(a * Math.PI / 180)}px)`,
                  top: `calc(50% + ${r * Math.sin(a * Math.PI / 180)}px)`,
                  animation: `sparkle-pop 0.5s ease-out ${0.02 * i}s both`,
                }}
              />
            );
          })}
          {/* 4 cards */}
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            {FEATURED.map((prod, i) => (
              <Link
                key={prod.slug}
                href={`/${locale}/products/${prod.slug}`}
                className="burst-card flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl border border-accent/15 bg-space-card/90 hover:border-accent/40 hover:shadow-md hover:shadow-accent/8 transition-all duration-200"
                style={{ animationDelay: `${0.06 + i * 0.08}s` }}
              >
                <div
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full mb-1.5"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS[i]}, ${COLORS[(i+2)%6]})`,
                    boxShadow: `0 0 10px ${COLORS[i]}33`,
                  }}
                />
                <span className="text-[11px] sm:text-sm font-bold text-foreground text-center leading-tight">
                  {prod.label}
                </span>
                <span className="text-[9px] sm:text-[11px] text-muted mt-0.5 text-center">
                  {prod.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
