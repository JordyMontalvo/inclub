import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ribera del Río Club Resort | InResorts & Inclub",
  description: "Construye ingresos residuales y diversifica tu patrimonio en la primera cadena de Club Resorts del Perú. Membresías vitalicias, acciones y vacaciones familiares en Cieneguilla.",
  keywords: [
    "Inclub",
    "InResorts",
    "Ribera del Río",
    "Cieneguilla",
    "Club Resort Perú",
    "Membresías vitalicias",
    "Inversión inmobiliaria",
    "RCI",
    "Acciones hoteleras"
  ],
  authors: [{ name: "Inclub World" }],
  openGraph: {
    title: "Ribera del Río Club Resort | InResorts & Inclub",
    description: "Invierte en tu membresía vitalicia y sé copropietario con acciones en la primera cadena de Club Resorts del Perú.",
    url: "https://riberadelrio.inresorts.club",
    siteName: "Inclub / InResorts",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ribera del Río Club Resort en Cieneguilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ribera del Río Club Resort | InResorts",
    description: "Membresías vitalicias, copropiedad y vacaciones en la primera cadena de Club Resorts del Perú.",
    images: ["https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
