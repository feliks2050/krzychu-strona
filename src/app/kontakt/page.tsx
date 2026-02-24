"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const produktParam = searchParams.get("produkt") ?? "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: produktParam
      ? `Zapytanie o: ${produktParam}`
      : "",
    message: produktParam
      ? `Jestem zainteresowany/a wyrobem "${produktParam}". Proszę o kontakt w sprawie szczegółów i dostępności.`
      : "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 border border-gold rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-gold text-3xl">✓</span>
        </div>
        <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
          Dziękujemy za wiadomość
        </h3>
        <p className="text-muted text-lg max-w-md mx-auto">
          Otrzymaliśmy Twoje zapytanie. Skontaktujemy się z Tobą najszybciej
          jak to możliwe.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
            Imię i nazwisko *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
            placeholder="Jan Kowalski"
          />
        </div>
        <div>
          <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
            Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
            placeholder="jan@example.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
            Telefon
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
            placeholder="+48 123 456 789"
          />
        </div>
        <div>
          <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
            Temat
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
            placeholder="Zamówienie / Wycena / Pytanie"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
          Wiadomość *
        </label>
        <textarea
          required
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors resize-none"
          placeholder="Opisz swoje oczekiwania, pytanie lub szczegóły zamówienia..."
        />
      </div>
      <button
        type="submit"
        className="w-full md:w-auto px-12 py-4 bg-gold text-background font-heading text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
      >
        Wyślij wiadomość
      </button>
    </form>
  );
}

export default function KontaktPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="gold-line mx-auto mb-8" />
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Skontaktuj się
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">
            Kontakt & Zamówienia
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Chętnie odpowiemy na Twoje pytania i pomożemy w wyborze
            idealnego wyrobu jubilerskiego.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-gold mb-3">
                  Pracownia
                </h3>
                <p className="text-muted">ul. Złota 15</p>
                <p className="text-muted">00-001 Warszawa</p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-gold mb-3">
                  Telefon
                </h3>
                <a
                  href="tel:+48123456789"
                  className="text-muted hover:text-gold transition-colors"
                >
                  +48 123 456 789
                </a>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-gold mb-3">
                  Email
                </h3>
                <a
                  href="mailto:kontakt@krzychu-jubiler.pl"
                  className="text-muted hover:text-gold transition-colors"
                >
                  kontakt@krzychu-jubiler.pl
                </a>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-gold mb-3">
                  Godziny otwarcia
                </h3>
                <p className="text-muted">Pon - Pt: 10:00 - 18:00</p>
                <p className="text-muted">Sob: 10:00 - 14:00</p>
                <p className="text-muted">Nd: Zamknięte</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Suspense
                fallback={
                  <div className="text-muted text-center py-12">
                    Ładowanie formularza...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
