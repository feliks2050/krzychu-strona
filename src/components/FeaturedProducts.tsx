import Link from "next/link";
import { products, formatPrice } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.available).slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-8" />
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Nasza kolekcja
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Wybrane <span className="text-gold-gradient">dzieła</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Każdy wyrób to unikalne dzieło sztuki jubilerskiej, stworzone z
            najwyższą starannością i dbałością o detal.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/produkty"
            className="inline-block px-10 py-4 border border-gold/40 text-gold font-heading text-sm tracking-[0.2em] uppercase hover:border-gold hover:bg-gold/5 transition-all duration-300"
          >
            Zobacz całą kolekcję
          </Link>
        </div>
      </div>
    </section>
  );
}
