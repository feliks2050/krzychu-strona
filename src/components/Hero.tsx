import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(201,169,110,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(201,169,110,0.2) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-gold/5 rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-gold/5 rounded-full" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="gold-line mx-auto mb-8 animate-fade-in-up" />

        <p className="text-gold text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in-up">
          Mistrz Złotnictwa
        </p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animate-delay-200">
          <span className="text-gold-gradient">Krzychu</span>
          <br />
          <span className="text-foreground text-4xl md:text-5xl lg:text-6xl font-light">
            Jubiler
          </span>
        </h1>

        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animate-delay-400">
          Ekskluzywne wyroby jubilerskie tworzone z pasją, precyzją i
          wieloletnim doświadczeniem. Każdy element to unikalne dzieło sztuki.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-600">
          <Link
            href="/produkty"
            className="px-10 py-4 bg-gold text-background font-heading text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Odkryj kolekcję
          </Link>
          <Link
            href="/kontakt"
            className="px-10 py-4 border border-gold/40 text-gold font-heading text-sm tracking-[0.2em] uppercase hover:border-gold hover:bg-gold/5 transition-all duration-300"
          >
            Zamów wyrób
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-muted text-[10px] tracking-[0.3em] uppercase">
          Przewiń
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
