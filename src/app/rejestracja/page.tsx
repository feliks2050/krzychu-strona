"use client";

import Link from "next/link";
import { useState } from "react";

export default function RejestracjaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Hasła nie są identyczne.");
      return;
    }
    // TODO: integrate with authentication backend (e.g. NextAuth.js)
    alert("Funkcja rejestracji zostanie wkrótce uruchomiona.");
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-6">
            <span className="font-heading text-gold text-2xl font-bold">K</span>
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">
            Utwórz konto
          </h1>
          <p className="text-muted">
            Dołącz do grona klientów Krzychu Jubiler
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="twoj@email.pl"
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
              Hasło *
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
              placeholder="Min. 8 znaków"
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
              Potwierdź hasło *
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
              placeholder="Powtórz hasło"
            />
          </div>
          <label className="flex items-start gap-3 text-sm text-muted cursor-pointer">
            <input
              type="checkbox"
              required
              checked={formData.acceptTerms}
              onChange={(e) =>
                setFormData({ ...formData, acceptTerms: e.target.checked })
              }
              className="accent-gold mt-1"
            />
            <span>
              Akceptuję{" "}
              <Link href="#" className="text-gold hover:text-gold-light">
                regulamin
              </Link>{" "}
              oraz{" "}
              <Link href="#" className="text-gold hover:text-gold-light">
                politykę prywatności
              </Link>
            </span>
          </label>
          <button
            type="submit"
            className="w-full py-4 bg-gold text-background font-heading text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Zarejestruj się
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-muted text-sm mt-8">
          Masz już konto?{" "}
          <Link
            href="/logowanie"
            className="text-gold hover:text-gold-light transition-colors"
          >
            Zaloguj się
          </Link>
        </p>
      </div>
    </div>
  );
}
