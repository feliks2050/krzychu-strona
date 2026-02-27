import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

const isRealImage = (src: string) => !src.includes("placeholder");

export default function ProductCard({ product }: ProductCardProps) {
  const hasImage = isRealImage(product.image);

  return (
    <div className="group bg-background border border-border hover:border-gold/30 transition-all duration-500">
      {/* Image */}
      <div className="aspect-square bg-surface-light relative overflow-hidden">
        {hasImage ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:border-gold/40 transition-colors">
                <svg
                  className="w-8 h-8 text-gold/40 group-hover:text-gold/60 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <p className="text-muted/50 text-xs">Zdjęcie produktu</p>
            </div>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
        {/* Badge */}
        {!product.available && (
          <div className="absolute top-4 right-4 bg-surface text-gold text-[10px] tracking-[0.2em] uppercase px-3 py-1 border border-gold/30 z-10">
            Na zamówienie
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gold/60 text-[11px] tracking-[0.2em] uppercase mb-2">
          {product.category}
        </p>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-muted text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <p className="font-heading text-lg text-gold font-semibold">
            {formatPrice(product.price)}
          </p>
          <Link
            href={`/kontakt?produkt=${encodeURIComponent(product.name)}`}
            className="text-[11px] tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors"
          >
            Zamów →
          </Link>
        </div>
      </div>
    </div>
  );
}
