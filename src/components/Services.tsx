import Link from "next/link";

const services = [
  {
    icon: "💎",
    title: "Oprawa kamieni szlachetnych",
    description:
      "Precyzyjna oprawa diamentów, szafirów, rubinów i szmaragdów pod mikroskopem. Gwarantujemy najwyższą jakość osadzenia każdego kamienia.",
  },
  {
    icon: "💍",
    title: "Obrączki i pierścionki",
    description:
      "Ręcznie wykonane obrączki ślubne i pierścionki zaręczynowe. Projektujemy według indywidualnych życzeń klienta.",
  },
  {
    icon: "✨",
    title: "Grawerowanie",
    description:
      "Ręczne grawerowanie dedykacji, dat, symboli i dowolnych wzorów na biżuterii. Personalizacja na najwyższym poziomie.",
  },
  {
    icon: "🔧",
    title: "Naprawa i renowacja",
    description:
      "Profesjonalna naprawa i renowacja biżuterii. Przywracamy blask rodzinnym pamiątkom i cennym wyrobom jubilerskim.",
  },
  {
    icon: "📐",
    title: "Projekty na zamówienie",
    description:
      "Realizujemy indywidualne projekty od koncepcji do gotowego wyrobu. Twoja wizja, nasza precyzja i doświadczenie.",
  },
  {
    icon: "📋",
    title: "Wycena biżuterii",
    description:
      "Profesjonalna wycena biżuterii i kamieni szlachetnych. Certyfikowane opinie rzeczoznawcze dla celów ubezpieczeniowych.",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-8" />
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Czym się zajmujemy
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nasze <span className="text-gold-gradient">usługi</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Oferujemy pełen zakres usług jubilerskich na najwyższym poziomie,
            od projektowania po realizację.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-surface border border-border hover:border-gold/30 transition-all duration-500"
            >
              <span className="text-3xl mb-6 block">{service.icon}</span>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/kontakt"
            className="inline-block px-10 py-4 bg-gold text-background font-heading text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </section>
  );
}
