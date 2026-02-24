"use client";

import { useState } from "react";
import { products, categories, type Category } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProduktyPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Wszystkie");

  const filtered =
    activeCategory === "Wszystkie"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="gold-line mx-auto mb-8" />
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Nasze wyroby
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            Kolekcja
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Odkryj naszą kolekcję ekskluzywnej biżuterii. Każdy wyrób jest
            unikany i ręcznie wykonany z najwyższą precyzją.
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-[11px] tracking-[0.2em] uppercase border transition-all duration-300 ${
                  activeCategory === category
                    ? "border-gold bg-gold text-background"
                    : "border-border text-muted hover:border-gold/40 hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">
                Brak produktów w tej kategorii.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
