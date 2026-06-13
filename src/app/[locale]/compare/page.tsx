import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HeyGears vs RESIONE — Resin Comparison Tool",
  description: "Compare HeyGears and RESIONE photopolymer resins side by side. Find the best RESIONE alternative for your HeyGears resin with performance, color, and price comparisons.",
};

const COMPARISONS = [
  { rank: 1, hg: "PAP10", hgDesc: "Fine Miniature Resin — High precision, high stability, photosensitive", resione: "M58 / K+", color: "Gray / Black ↔ Rock Gray / Black", match: "★★★★", risk: "Very Low", notes: "Best-selling HeyGears resin. Direct color & spec match." },
  { rank: 2, hg: "PAF10", hgDesc: "Flexible PVC-like Resin — Soft parts, high transparency, aging resistant", resione: "Anti-impact (Gray only)", color: "High-Transparent / Gray ↔ White-Gray / Black", match: "★★", risk: "Medium-High", notes: "⚠️ Transparent version NOT replaceable. Gray only." },
  { rank: 3, hg: "PAS10", hgDesc: "Standard Model Resin — High strength, tough, high precision, ≤0.05mm tolerance", resione: "SP64", color: "Black/Pearl White/Purple ↔ Peach/Blue-gray/Med Gray/Black", match: "★★★☆", risk: "Low", notes: "Core B&W colors match. Pearl White & Purple are HeyGears exclusive." },
  { rank: 4, hg: "PARP10 (Purple)", hgDesc: "Rapid Prototyping Resin — Twilight Purple edition", resione: "Tough74 V2 / K+", color: "Twilight Purple ↔ Gray / Black", match: "★☆", risk: "High", notes: "⚠️ Color mismatch. Purple is HeyGears exclusive. Only if color not required." },
  { rank: 5, hg: "PAU10 / PAU11", hgDesc: "ABS-like Engineering Resin — Low odor, high strength, high precision", resione: "Tough74 V2 / M58", color: "Gray ↔ Gray", match: "★★★★", risk: "Very Low", notes: "Direct match. Structural parts, enclosures, functional components." },
  { rank: 6, hg: "PAT10", hgDesc: "General Clear Resin — Low odor, high precision, photocurable", resione: "G217", color: "Clear ↔ Clear (slightly bluish)", match: "★★★★", risk: "Very Low", notes: "Both high-transparency + low odor. Near-perfect match." },
  { rank: 7, hg: "PAWR10", hgDesc: "Wear-Resistant Anti-Yellowing — High precision, drop-resistant, application-grade", resione: "TH-BJD / M68", color: "Cream White/Yellow ↔ Pure White/Cream White/Cream Pink", match: "★★★", risk: "High", notes: "⚠️ Impact strength gap. Not for high-impact articulated parts." },
  { rank: 8, hg: "PARP10 (Red Wax)", hgDesc: "Rapid Prototyping Resin — Red wax texture, high toughness", resione: "TH-HR", color: "Red Wax ↔ Red Clay / White Clay", match: "★★★☆", risk: "Low", notes: "Red Clay ≈ Red Wax. White Clay is bonus option." },
];

export default function ComparePage() {
  return (
    <div className="bg-white">
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">HeyGears vs RESIONE — Resin Comparison</h1>
          <p className="text-muted max-w-2xl">Find the right RESIONE alternative for your HeyGears resin. Based on performance data, color matching, price analysis, and real-world usage across 8 popular HeyGears resins.</p>
          <p className="text-xs text-muted/60 mt-2">Data sources: Taobao · Amazon US · HeyGears Store (US/EU) · RESIONE Official | Report date: 2026-06-08</p>
        </div>
      </section>

      <section className="container-wide py-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-primary-dark text-white">
                <th className="p-3 text-left w-8">#</th>
                <th className="p-3 text-left">HeyGears</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">RESIONE Match</th>
                <th className="p-3 text-left">Color Match</th>
                <th className="p-3 text-center">Match</th>
                <th className="p-3 text-center">Risk</th>
                <th className="p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((c) => (
                <tr key={c.rank} className="border-b border-border hover:bg-surface/50 transition-colors">
                  <td className="p-3 font-bold text-muted">{c.rank}</td>
                  <td className="p-3 font-semibold text-primary">{c.hg}</td>
                  <td className="p-3 text-xs text-muted max-w-[200px]">{c.hgDesc}</td>
                  <td className="p-3">
                    {c.resione.split(" / ").map((r) => (
                      <Link key={r} href={`/products/${r.toLowerCase().replace(/[^a-z0-9-]/g, "")}`} className="inline-block bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-semibold mr-1 mb-1 hover:bg-primary/20 transition-colors">
                        {r}
                      </Link>
                    ))}
                  </td>
                  <td className="p-3 text-xs">{c.color}</td>
                  <td className="p-3 text-center">{c.match}</td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${c.risk === "Very Low" ? "bg-green-100 text-green-700" : c.risk === "Low" ? "bg-blue-100 text-blue-700" : c.risk === "Medium-High" ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"}`}>
                      {c.risk}
                    </span>
                  </td>
                  <td className="p-3 text-xs text-muted max-w-[250px]">{c.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Important Notes</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Amazon US data is limited (HeyGears store recently launched, incomplete product range) — for reference only</li>
            <li>• Color matching is approximate. Exact color codes may differ between brands.</li>
            <li>• Always test a sample before switching to a new resin for production use.</li>
            <li>• Mechanical properties listed are per manufacturer specs. Real-world results depend on printer, settings, and post-processing.</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted mb-4">Need help finding the right match? We can help with custom recommendations.</p>
          <Link href="/inquiry" className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors">
            Request Custom Recommendation →
          </Link>
        </div>
      </section>
    </div>
  );
}
