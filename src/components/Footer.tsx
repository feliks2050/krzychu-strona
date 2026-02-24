import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-gold flex items-center justify-center">
                <span className="font-heading text-gold text-xl font-bold">K</span>
              </div>
              <div>
                <span className="font-heading text-lg tracking-[0.2em] text-foreground">
                  KRZYCHU
                </span>
                <span className="block text-[10px] tracking-[0.3em] text-muted uppercase">
                  Jubiler
                </span>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Ekskluzywne wyroby jubilerskie tworzone z pasją i precyzją przez
              mistrza złotnictwa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.2em] uppercase text-gold mb-6">
              Nawigacja
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/#o-nas", label: "O nas" },
                { href: "/produkty", label: "Kolekcja" },
                { href: "/#uslugi", label: "Usługi" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.2em] uppercase text-gold mb-6">
              Usługi
            </h4>
            <ul className="space-y-3 text-muted text-sm">
              <li>Oprawa kamieni szlachetnych</li>
              <li>Obrączki na zamówienie</li>
              <li>Grawerowanie</li>
              <li>Naprawa biżuterii</li>
              <li>Wycena biżuterii</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.2em] uppercase text-gold mb-6">
              Kontakt
            </h4>
            <ul className="space-y-3 text-muted text-sm">
              <li>ul. Złota 15</li>
              <li>00-001 Warszawa</li>
              <li className="pt-2">
                <a
                  href="tel:+48123456789"
                  className="hover:text-gold transition-colors"
                >
                  +48 123 456 789
                </a>
              </li>
              <li>
                <a
                  href="mailto:kontakt@krzychu-jubiler.pl"
                  className="hover:text-gold transition-colors"
                >
                  kontakt@krzychu-jubiler.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Krzychu Jubiler. Wszelkie prawa
            zastrzeżone.
          </p>
          <div className="flex gap-6 text-muted text-xs">
            <Link href="#" className="hover:text-gold transition-colors">
              Polityka prywatności
            </Link>
            <Link href="#" className="hover:text-gold transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
