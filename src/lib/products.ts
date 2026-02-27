export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  details: string;
  image: string;
  material: string;
  available: boolean;
}

export const categories = [
  "Wszystkie",
  "Pierścionki",
  "Obrączki",
  "Naszyjniki",
  "Kolczyki",
  "Bransoletki",
  "Na zamówienie",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    id: "1",
    name: "Pierścionek Celestia",
    category: "Pierścionki",
    price: 8500,
    description: "Złoty pierścionek z brylantem 0.5ct w oprawie typu halo",
    details:
      "Ręcznie wykonany pierścionek z 18-karatowego złota z centralnym brylantem otoczonym drobnymi diamentami. Każdy kamień osadzony pod mikroskopem z najwyższą precyzją.",
    image: "/images/ring-celestia.jpeg",
    material: "Złoto 18K, brylant 0.5ct",
    available: true,
  },
  {
    id: "2",
    name: "Obrączka Harmonia",
    category: "Obrączki",
    price: 4200,
    description: "Klasyczna obrączka z białego złota z diamentowym wykończeniem",
    details:
      "Para obrączek ślubnych wykonanych z 14-karatowego białego złota. Delikatna linia diamentów na obwodzie damskiej obrączki. Możliwość grawerowania dedykacji.",
    image: "/images/pendant-harmonia.png",
    material: "Białe złoto 14K, diamenty",
    available: true,
  },
  {
    id: "3",
    name: "Naszyjnik Aurora",
    category: "Naszyjniki",
    price: 12000,
    description: "Elegancki naszyjnik z szafirem i oprawą z platyny",
    details:
      "Ekskluzywny naszyjnik z naturalnym szafirem cejlońskim o masie 2ct, osadzony w platynowej oprawie. Łańcuszek z białego złota 18K. Unikalne dzieło mistrza złotnictwa.",
    image: "/images/necklace-aurora.png",
    material: "Platyna, białe złoto 18K, szafir 2ct",
    available: true,
  },
  {
    id: "4",
    name: "Kolczyki Stella",
    category: "Kolczyki",
    price: 6800,
    description: "Wiszące kolczyki z rubinami i diamentami",
    details:
      "Subtelne kolczyki z 18-karatowego złota z naturalnymi rubinami i drobnymi diamentami. Kaskadowy design nadaje im wyjątkowej elegancji. Idealne na specjalne okazje.",
    image: "/images/earrings-stella.png",
    material: "Złoto 18K, rubiny, diamenty",
    available: true,
  },
  {
    id: "5",
    name: "Bransoletka Riviera",
    category: "Bransoletki",
    price: 15000,
    description: "Tennisowa bransoletka z brylantami",
    details:
      "Klasyczna bransoletka tenisowa z 42 brylantami o łącznej masie 3ct, osadzonymi w 18-karatowym białym złocie. Bezpieczne zapięcie z podwójnym zabezpieczeniem.",
    image: "/images/bracelet-riviera.png",
    material: "Białe złoto 18K, brylanty 3ct",
    available: true,
  },
  {
    id: "6",
    name: "Pierścionek Enigma",
    category: "Pierścionki",
    price: 22000,
    description: "Artystyczny pierścionek z szmaragdem kolumbijskim",
    details:
      "Unikatowy pierścionek zaprojektowany i wykonany na zamówienie. Centralny szmaragd kolumbijski 1.8ct otoczony asymetryczną oprawą z diamentów. Dzieło sztuki jubilerskiej.",
    image: "/images/ring-enigma.png",
    material: "Złoto 18K, szmaragd 1.8ct, diamenty",
    available: false,
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    minimumFractionDigits: 0,
  }).format(price);
}
