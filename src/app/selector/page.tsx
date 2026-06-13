"use client";

import { useState } from "react";
import Link from "next/link";
import { ALL_PRODUCTS, type ProductData } from "@/lib/products-data";

interface SelectOption {
  label: string;
  value: string;
  match?: string[];
  categories?: string[];
  slugs?: string[];
}

const QUESTIONS: { id: string; question: string; options: SelectOption[] }[] = [
  {
    id: "application",
    question: "What are you printing?",
    options: [
      { label: "Miniatures / Figures / BJD", value: "miniatures", match: ["Miniatures", "BJD", "Action figure", "Figurine", "Garage kit", "GK"] },
      { label: "Functional / Mechanical Parts", value: "functional", match: ["Functional", "Mechanical", "Enclosure", "Tooling", "Gear"] },
      { label: "Dental / Medical Models", value: "dental", match: ["Dental", "Surgical", "Implant", "Crown"] },
      { label: "Jewelry / Casting", value: "casting", match: ["Casting", "Jewelry"] },
      { label: "Prototypes / Display", value: "prototype", match: ["Prototype", "Display", "Model", "Educational"] },
      { label: "Not Sure / General Use", value: "general" },
    ],
  },
  {
    id: "property",
    question: "What property matters most?",
    options: [
      { label: "Toughness / Impact Resistance", value: "tough", categories: ["Tough / ABS-Like"] },
      { label: "Heat Resistance", value: "hightemp", categories: ["High Temperature"] },
      { label: "Flexibility / Elasticity", value: "flexible", categories: ["Flexible"] },
      { label: "High Detail / Precision", value: "precision", categories: ["Standard"] },
      { label: "Easy Post-Processing (Water)", value: "waterwash", categories: ["Water Washable"] },
      { label: "No Preference", value: "any" },
    ],
  },
  {
    id: "special",
    question: "Any special requirements?",
    options: [
      { label: "Transparent / Clear", value: "transparent", slugs: ["g217", "f39t"] },
      { label: "Non-Yellowing", value: "nonyellow", slugs: ["th-bjd", "g217", "m68"] },
      { label: "Low Odor", value: "lowodor", slugs: ["ww123", "m58", "m68", "th-hr"] },
      { label: "Matte Finish", value: "matte", slugs: ["sp64", "m70", "th-hr"] },
      { label: "No Special Requirements", value: "none" },
    ],
  },
];

function scoreProduct(product: ProductData, answers: Record<string, string>): number {
  let score = 0;

  const appOpt = QUESTIONS[0].options.find((o) => o.value === answers.application);
  if (appOpt?.match) {
    for (const keyword of appOpt.match) {
      const k = keyword.toLowerCase();
      if (product.tagline.toLowerCase().includes(k) ||
          product.description.toLowerCase().includes(k) ||
          product.applications.some((a) => a.toLowerCase().includes(k))) {
        score += 3;
        break;
      }
    }
  }

  const propOpt = QUESTIONS[1].options.find((o) => o.value === answers.property);
  if (propOpt?.categories?.includes(product.category)) {
    score += 4;
  }

  const specOpt = QUESTIONS[2].options.find((o) => o.value === answers.special);
  if (specOpt) {
    if (specOpt.categories?.includes(product.category)) score += 3;
    if (specOpt.slugs?.includes(product.slug)) score += 3;
  }

  return score;
}

export default function SelectorPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<ProductData[]>([]);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [QUESTIONS[step].id]: value };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      const scored = ALL_PRODUCTS
        .map((p) => ({ product: p, score: scoreProduct(p, newAnswers) }))
        .filter((s) => s.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

      setResults(scored.map((s) => s.product));
      setStep(step + 1);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResults([]);
  };

  const currentQ = QUESTIONS[step];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-surface border-b border-border">
        <div className="container-wide py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Resin Selector</h1>
          <p className="text-muted max-w-xl">
            Answer a few questions and we will recommend the best resin for your application.
          </p>
        </div>
      </section>

      <div className="container-wide py-12 max-w-2xl mx-auto">
        {step < QUESTIONS.length ? (
          <div className="space-y-8">
            <div className="flex gap-1.5">
              {QUESTIONS.map((q, i) => (
                <div key={q.id} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-border"}`} />
              ))}
            </div>
            <p className="text-xs text-muted">Question {step + 1} of {QUESTIONS.length}</p>

            <h2 className="text-2xl font-bold text-foreground">{currentQ.question}</h2>

            <div className="grid gap-3">
              {currentQ.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="w-full text-left p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-foreground font-medium"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="text-4xl mb-3">🎯</div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {results.length > 0 ? "Here Are Your Recommendations" : "No Perfect Match Found"}
              </h2>
              <p className="text-muted">
                {results.length > 0
                  ? `Top ${results.length} resin${results.length > 1 ? "s" : ""} based on your requirements`
                  : "Try adjusting your requirements or browse all products"}
              </p>
            </div>

            {results.length > 0 && (
              <div className="space-y-4">
                {results.map((product, i) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="block p-5 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg shrink-0">#{i + 1}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                        <p className="text-sm text-muted mt-0.5">{product.tagline}</p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">{product.category}</span>
                          {product.specs.color && <span className="px-2 py-0.5 bg-surface text-muted text-xs rounded-full">{product.specs.color}</span>}
                        </div>
                      </div>
                      <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shrink-0">View →</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <button onClick={reset} className="px-6 py-2.5 border border-border rounded-lg hover:border-primary transition-colors font-medium text-sm">Start Over</button>
              <Link href="/products" className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-medium text-sm">Browse All Products</Link>
              <Link href="/inquiry" className="px-6 py-2.5 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors font-medium text-sm">Request Custom Help</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
