"use client";

import Link from "next/link";
import { useState } from "react";

export default function LogowaniePage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with authentication backend (e.g. NextAuth.js)
    alert("Funkcja logowania zostanie wkrótce uruchomiona.");
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
            Zaloguj się
          </h1>
          <p className="text-muted">
            Witamy ponownie w Krzychu Jubiler
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-muted mb-2 tracking-wider uppercase">
              Email
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
              Hasło
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:border-gold focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted cursor-pointer">
              <input
                type="checkbox"
                className="accent-gold"
              />
              Zapamiętaj mnie
            </label>
            <Link
              href="#"
              className="text-gold hover:text-gold-light transition-colors"
            >
              Zapomniałeś hasła?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gold text-background font-heading text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Zaloguj się
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-muted text-sm mt-8">
          Nie masz jeszcze konta?{" "}
          <Link
            href="/rejestracja"
            className="text-gold hover:text-gold-light transition-colors"
          >
            Zarejestruj się
          </Link>
        </p>
      </div>
    </div>
  );
}
