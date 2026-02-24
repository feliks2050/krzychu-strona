import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krzychu | Jubiler — Ekskluzywna Biżuteria Ręcznie Robiona",
  description:
    "Ekskluzywne wyroby jubilerskie ręcznie tworzone przez mistrza złotnictwa. Pierścionki, obrączki, naszyjniki i kolczyki z najwyższej jakości materiałów.",
  keywords: [
    "jubiler",
    "biżuteria",
    "złotnik",
    "pierścionki",
    "obrączki",
    "ekskluzywna biżuteria",
    "ręcznie robiona biżuteria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${playfair.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
