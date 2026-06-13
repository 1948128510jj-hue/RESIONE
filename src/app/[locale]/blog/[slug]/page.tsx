import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const POST_DATA: Record<string, { title: string; date: string; category: string; readTime: string; body: string }> = {
  "nylon-like-vs-standard-resin": {
    title: "Nylon-Like vs Standard Resin: When to Upgrade Your Material",
    date: "2026-06-10", category: "Material Science", readTime: "6 min read",
    body: `Standard photopolymer resins are excellent for display models, miniatures, and prototyping — they deliver sharp details, smooth surfaces, and are generally easy to print. But standard resins share a fundamental weakness: <b>brittleness</b>. Drop a standard resin print from desk height, and it shatters.

<b>Enter nylon-like resins.</b> RESIONE's Anti-impact and TH72 are engineered to mimic the mechanical behavior of injection-molded nylon — high elongation (93%), exceptional impact resistance (46–98 J/m), and toughness that persists for months without embrittlement.

<b>Key Differences at a Glance:</b>
• <b>Elongation at Break:</b> Standard resin 5–10% vs Anti-impact 93% — nearly 10× more stretch before breaking
• <b>Impact Strength:</b> Standard resin 10–18 J/m vs Anti-impact 46–98 J/m — 5× more impact energy absorbed
• <b>Water Absorption:</b> Standard resin 1–3% vs Anti-impact 0.42% — significantly better moisture resistance
• <b>Longevity:</b> Standard resin becomes brittle in weeks; nylon-like retains toughness for 12+ months

<b>When to Upgrade:</b>
Ask yourself: "Will this part be handled? Dropped? Used outdoors? Expected to last more than a month?" If yes to any — upgrade. The price premium (typically 30–50%) is trivial compared to the cost of reprinting failed parts.

<b>Real Applications:</b>
• Drone frames and propeller guards → Anti-impact
• RC car suspension arms → Anti-impact
• Functional prototypes that get handled daily → TH72
• Outdoor signage and fixtures → Anti-impact (UV + moisture resistant)
• Thin, delicate cosplay props → TH72 (long-term flexibility)`
  },
  "water-washable-resin-guide": {
    title: "The Complete Guide to Water-Washable 3D Printing Resins",
    date: "2026-06-05", category: "Product Guide", readTime: "8 min read",
    body: `Water-washable resins eliminate the need for isopropyl alcohol (IPA) in post-processing. Instead of soaking prints in harsh chemicals, you simply rinse with water. This makes them ideal for home users, classrooms, and anyone sensitive to chemical odors.

<b>How They Work:</b>
Water-washable resins incorporate hydrophilic (water-loving) components into the polymer matrix. When exposed to water, these components allow uncured resin to be washed away. The trade-off: the same hydrophilicity means printed parts absorb more moisture from the air over time.

<b>Key Advantages:</b>
• No IPA required — significant cost savings and safety improvement
• Lower odor — better for home and classroom environments
• Faster workflow — rinse, dry, cure
• Beginner-friendly — lower barrier to entry

<b>Key Limitations:</b>
• Higher water absorption (WW123: 5.71% vs standard resin: 0.6–1.2%)
• NOT suitable for outdoor or high-humidity applications
• May swell or crack if exposed to water long-term
• Generally lower mechanical strength than solvent-washed equivalents

<b>RESIONE Water-Washable Lineup:</b>
• <b>WW123</b> — The everyday resin. Near-water viscosity (12 mPa·s), multiple colors, high-speed printing compatible. Best for beginners.
• <b>WW-ABS</b> — ABS-like toughness with water washability. REACH compliant. Non-brittle.
• <b>TH-WW</b> — Tough + water-washable. Crack-resistant with fine detail. For premium water-washable applications.

<b>Best Practices:</b>
1. Use warm water (30–40°C) for faster cleaning
2. Don't soak prints for more than 10 minutes
3. Dry completely before post-curing
4. Apply a clear coat if the part will be handled frequently
5. Store unused resin in a cool, dark place — water-washable resins are more sensitive to humidity`
  },
  "dental-3d-printing-resin-selection": {
    title: "Choosing the Right Resin for Dental Models: A Lab Technician's Guide",
    date: "2026-05-28", category: "Dental", readTime: "7 min read",
    body: `Dental 3D printing demands precision, reliability, and material properties matched to specific clinical workflows. Using the wrong resin for a dental application doesn't just waste time — it can compromise patient outcomes.

<b>RESIONE Dental Resin Lineup by Application:</b>

<b>1. Dental Models (D01 & D01S)</b>
• <b>D01</b> — Yellow-ochre, 85–90D hardness. The workhorse for everyday models: orthodontic study models, diagnostic casts, and restoration planning. 41 MPa tensile strength. Easy to clean, short-term heat resistance for vacuum forming.
• <b>D01S</b> — Shell-beige, 92D hardness. The premium choice. Contains inorganic fillers for gypsum-like matte texture. Extreme low shrinkage. For high-precision indirect models in restorative, implant, and diagnostic applications. 0.51% water absorption.

<b>2. Castable Resin (C01)</b>
• Transparent green. Designed for direct lost-wax casting of Ni-Cr and Co-Cr alloys. 100 mPa·s viscosity — extremely fluid for fast, detailed printing. No post-curing required. Clean burnout with minimal ash. Includes detailed casting guidance to avoid investment cracking.

<b>3. Gingiva Simulation (GM01 & F80)</b>
• <b>GM01</b> — 50A ultra-soft. Mimics real gingival tissue for accurate denture and implant testing. Never gets sticky. 0.515% water absorption — dimensionally stable.
• <b>F80 (Pink)</b> — 64A medium-soft. Alternative for gingiva simulation with more elasticity. Also available in Black for non-dental elastic applications.

<b>Selection Decision Tree:</b>
1. Are you printing a model for diagnosis/treatment planning? → D01 or D01S
2. Are you casting metal restorations? → C01
3. Are you simulating soft tissue? → GM01 (ultra-realistic) or F80 Pink (economic)
4. Need the absolute highest accuracy? → D01S (92D, lowest shrinkage)`
  },
};

// Default body for posts without full content
const DEFAULT_BODY = `<p>This article is being prepared. Check back soon for the full content, or <a href="/contact" style="color:#1565c0">contact us</a> for specific questions about this topic.</p>`;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POST_DATA[slug];
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} — RESIONE Blog`, description: post.body.slice(0, 160) };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POST_DATA[slug];

  if (!post) notFound();

  return (
    <div className="">
      <article className="container-wide py-12 max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full">{post.category}</span>
            <span className="text-xs text-muted">{post.date} · {post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{post.title}</h1>
        </div>
        <div className="prose prose-slate max-w-none text-foreground/85 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: post.body.replace(/\n\n/g, '</p><p>').replace(/\n• /g, '<br/>• ').replace(/<b>/g, '<strong>').replace(/<\/b>/g, '</strong>').replace(/^/, '<p>').replace(/$/, '</p>') }} />
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/blog" className="text-primary hover:text-primary-light font-semibold transition-colors">← Back to Blog</Link>
        </div>
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(POST_DATA).map((slug) => ({ slug }));
}
