"use client";

/* ================================================================
   Resi — RESIONE resin droplet mascot
   Inspired by Fuwa / forest sprites. Cute, bouncy, hand-drawn feel.
   ================================================================ */
export default function ResiMascot() {
  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto select-none">
      <style>{`
        @keyframes resi-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25%  { transform: translateY(-12px) rotate(-3deg); }
          50%  { transform: translateY(-6px) rotate(0deg); }
          75%  { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes resi-arm-left {
          0%, 100% { transform: rotate(-15deg) translateY(0); }
          50%  { transform: rotate(-35deg) translateY(-4px); }
        }
        @keyframes resi-arm-right {
          0%, 100% { transform: rotate(15deg) translateY(0); }
          50%  { transform: rotate(35deg) translateY(-4px); }
        }
        @keyframes resi-leg-left {
          0%, 100% { transform: rotate(-5deg); }
          50%  { transform: rotate(12deg); }
        }
        @keyframes resi-leg-right {
          0%, 100% { transform: rotate(5deg); }
          50%  { transform: rotate(-12deg); }
        }
        @keyframes resi-eye-blink {
          0%, 94%, 100% { transform: scaleY(1); }
          96%  { transform: scaleY(0.1); }
        }
        @keyframes resi-sparkle {
          0%, 100% { opacity: 0.4; transform: scale(0.8); }
          50%  { opacity: 1; transform: scale(1.3); }
        }
        @keyframes resi-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%  { opacity: 0.8; transform: scale(1.08); }
        }
        @keyframes resi-rainbow-shift {
          0%  { stop-color: #ff6b6b; }
          17% { stop-color: #feca57; }
          33% { stop-color: #48dbfb; }
          50% { stop-color: #ff9ff3; }
          67% { stop-color: #54a0ff; }
          83% { stop-color: #5f27cd; }
          100%{ stop-color: #ff6b6b; }
        }
        .resi-body    { animation: resi-float 3.2s ease-in-out infinite; transform-origin: center 60%; }
        .resi-arm-l   { animation: resi-arm-left 2.4s ease-in-out infinite; transform-origin: top center; }
        .resi-arm-r   { animation: resi-arm-right 2.4s ease-in-out infinite; transform-origin: top center; }
        .resi-leg-l   { animation: resi-leg-left 1.8s ease-in-out infinite; transform-origin: top center; }
        .resi-leg-r   { animation: resi-leg-right 1.8s ease-in-out infinite; transform-origin: top center; }
        .resi-eye     { animation: resi-eye-blink 4s ease-in-out infinite; transform-origin: center; }
        .resi-sparkle { animation: resi-sparkle 2s ease-in-out infinite; }
        .resi-glow-bg { animation: resi-glow 2.8s ease-in-out infinite; }
        .resi-rainbow-stop { animation: resi-rainbow-shift 4s linear infinite; }
      `}</style>

      <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

        {/* ===== Rainbow definitions ===== */}
        <defs>
          <radialGradient id="resiGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#00c6c0" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#0d1325" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="resiCheekL" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff9ff3" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff9ff3" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="resiCheekR" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff9ff3" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff9ff3" stopOpacity="0" />
          </radialGradient>
          {/* Rainbow body gradient */}
          <linearGradient id="resiRainbow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#54a0ff">
              <animate attributeName="stop-color" values="#ff6b6b;#feca57;#48dbfb;#ff9ff3;#54a0ff;#5f27cd;#ff6b6b" dur="5s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#00c6c0">
              <animate attributeName="stop-color" values="#feca57;#48dbfb;#ff9ff3;#54a0ff;#5f27cd;#ff6b6b;#feca57" dur="5s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#5f27cd">
              <animate attributeName="stop-color" values="#48dbfb;#ff9ff3;#54a0ff;#5f27cd;#ff6b6b;#feca57;#48dbfb" dur="5s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* ===== Ambient glow behind mascot ===== */}
        <circle cx="140" cy="160" r="100" fill="url(#resiGlow)" className="resi-glow-bg" />

        {/* ===== Body group (floats + spins) ===== */}
        <g className="resi-body">
          {/* Shadow on ground */}
          <ellipse cx="140" cy="285" rx="55" ry="8" fill="rgba(0,0,0,0.2)">
            <animate attributeName="rx" values="55;48;55" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0.15;0.2" dur="3.2s" repeatCount="indefinite" />
          </ellipse>

          {/* === LEGS === */}
          <g className="resi-leg-l">
            <path d="M110 260 Q105 285 95 292" stroke="url(#resiRainbow)" strokeWidth="7" strokeLinecap="round" fill="none" />
            {/* Little shoe */}
            <ellipse cx="93" cy="293" rx="10" ry="5" fill="#00c6c0" opacity="0.7" />
          </g>
          <g className="resi-leg-r">
            <path d="M170 260 Q175 285 185 292" stroke="url(#resiRainbow)" strokeWidth="7" strokeLinecap="round" fill="none" />
            <ellipse cx="187" cy="293" rx="10" ry="5" fill="#00c6c0" opacity="0.7" />
          </g>

          {/* === BODY (teardrop/droplet shape) === */}
          <path
            d="M140 100 C180 150 200 200 190 240 C180 275 160 280 140 280 C120 280 100 275 90 240 C80 200 100 150 140 100Z"
            fill="url(#resiRainbow)"
            opacity="0.85"
            stroke="#fff"
            strokeWidth="1.5"
            strokeOpacity="0.15"
          />

          {/* === ARMS === */}
          <g className="resi-arm-l">
            <path d="M100 210 Q75 195 60 175" stroke="url(#resiRainbow)" strokeWidth="7" strokeLinecap="round" fill="none" />
            {/* Little hand */}
            <circle cx="57" cy="172" r="6" fill="#ff9ff3" opacity="0.8" />
            <circle cx="54" cy="168" r="3" fill="#ff9ff3" opacity="0.6" />
            <circle cx="60" cy="167" r="3" fill="#ff9ff3" opacity="0.6" />
            <circle cx="62" cy="172" r="2.5" fill="#ff9ff3" opacity="0.6" />
          </g>
          <g className="resi-arm-r">
            <path d="M180 210 Q205 195 220 175" stroke="url(#resiRainbow)" strokeWidth="7" strokeLinecap="round" fill="none" />
            <circle cx="223" cy="172" r="6" fill="#ff9ff3" opacity="0.8" />
            <circle cx="220" cy="168" r="3" fill="#ff9ff3" opacity="0.6" />
            <circle cx="226" cy="167" r="3" fill="#ff9ff3" opacity="0.6" />
            <circle cx="228" cy="172" r="2.5" fill="#ff9ff3" opacity="0.6" />
          </g>

          {/* === FACE === */}
          {/* Eyes — big, sparkly */}
          <g className="resi-eye">
            {/* Left eye */}
            <ellipse cx="122" cy="175" rx="13" ry="16" fill="white" />
            <ellipse cx="124" cy="174" rx="8" ry="11" fill="#1a1f2e" />
            <circle cx="127" cy="170" r="3.5" fill="white" />
            <circle cx="120" cy="178" r="1.5" fill="white" opacity="0.6" />
            {/* Right eye */}
            <ellipse cx="158" cy="175" rx="13" ry="16" fill="white" />
            <ellipse cx="156" cy="174" rx="8" ry="11" fill="#1a1f2e" />
            <circle cx="159" cy="170" r="3.5" fill="white" />
            <circle cx="152" cy="178" r="1.5" fill="white" opacity="0.6" />
          </g>

          {/* Sparkle next to eyes */}
          <g className="resi-sparkle">
            <path d="M100 155 L102 150 L104 155 L109 157 L104 159 L102 164 L100 159 L95 157 Z" fill="#feca57" opacity="0.8" />
            <path d="M175 148 L176.5 144 L178 148 L182 149.5 L178 151 L176.5 155 L175 151 L171 149.5 Z" fill="#48dbfb" opacity="0.7" />
          </g>

          {/* Blush cheeks */}
          <ellipse cx="108" cy="195" rx="12" ry="7" fill="url(#resiCheekL)" />
          <ellipse cx="172" cy="195" rx="12" ry="7" fill="url(#resiCheekR)" />

          {/* Mouth — cute smile */}
          <path d="M132 198 Q140 210 148 198" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9" />

          {/* === RESIONE logo on belly === */}
          <text x="140" y="245" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="2" opacity="0.55">
            RESIONE
          </text>
        </g>

        {/* ===== Floating particles around mascot ===== */}
        <circle cx="50" cy="130" r="3" fill="#ff6b6b" opacity="0.6">
          <animate attributeName="cy" values="130;110;130" dur="2.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="230" cy="100" r="2.5" fill="#48dbfb" opacity="0.5">
          <animate attributeName="cy" values="100;80;100" dur="3.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.15;0.5" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="220" r="2" fill="#feca57" opacity="0.5">
          <animate attributeName="cy" values="220;200;220" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="220" cy="230" r="2.5" fill="#ff9ff3" opacity="0.45">
          <animate attributeName="cy" values="230;212;230" dur="3.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="70" r="2" fill="#00c6c0" opacity="0.5">
          <animate attributeName="cy" values="70;55;70" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
