"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#o-nas", label: "O nas" },
  { href: "/produkty", label: "Kolekcja" },
  { href: "/#uslugi", label: "Usługi" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-gold flex items-center justify-center group-hover:bg-gold/10 transition-colors">
              <span className="font-heading text-gold text-xl font-bold">K</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-lg tracking-[0.2em] text-foreground">
                KRZYCHU
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-muted uppercase">
                Jubiler
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Links */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/logowanie"
              className="text-sm tracking-[0.1em] uppercase text-muted hover:text-foreground transition-colors"
            >
              Zaloguj się
            </Link>
            <Link
              href="/rejestracja"
              className="text-sm tracking-[0.1em] uppercase px-5 py-2 border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300"
            >
              Rejestracja
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-gold transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-gold transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-gold transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 border-t border-border" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 bg-background/95 backdrop-blur-md flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-border pt-4 flex flex-col gap-3">
            <Link
              href="/logowanie"
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-[0.1em] uppercase text-muted hover:text-foreground transition-colors py-2"
            >
              Zaloguj się
            </Link>
            <Link
              href="/rejestracja"
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-[0.1em] uppercase px-5 py-2 border border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300 text-center"
            >
              Rejestracja
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
