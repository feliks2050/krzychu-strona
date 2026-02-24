export default function About() {
  return (
    <section id="o-nas" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-light border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-gold text-4xl">K</span>
                </div>
                <p className="text-muted text-sm">Zdjęcie mistrza jubilera</p>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />
          </div>

          {/* Content */}
          <div>
            <div className="gold-line mb-8" />
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Nasza historia
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Tradycja spotyka{" "}
              <span className="text-gold-gradient">nowoczesność</span>
            </h2>
            <div className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                Od ponad dwudziestu lat tworzę ekskluzywną biżuterię, łącząc
                tradycyjne techniki złotnicze z nowoczesnym designem.
                Każdy wyrób, który opuszcza mój warsztat, jest wynikiem
                wielogodzinnej pracy pod mikroskopem.
              </p>
              <p>
                Moja pasja do jubilerstwa rozpoczęła się w rodzinnym warsztacie,
                gdzie poznawałem tajniki rzemiosła od najlepszych mistrzów.
                Dziś, z dumą kontynuuję tę tradycję, tworząc unikalne
                dzieła dla najbardziej wymagających klientów.
              </p>
              <p>
                Specjalizuję się w oprawie kamieni szlachetnych pod
                mikroskopem, co gwarantuje najwyższą precyzję i jakość.
                Każdy kamień osadzam osobiście, dbając o każdy, nawet
                najdrobniejszy detal.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              {[
                { value: "20+", label: "Lat doświadczenia" },
                { value: "1000+", label: "Wykonanych wyrobów" },
                { value: "100%", label: "Ręczna praca" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold text-gold">
                    {stat.value}
                  </p>
                  <p className="text-muted text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
