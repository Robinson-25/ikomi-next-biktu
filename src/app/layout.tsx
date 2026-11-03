
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IKOMI PERÚ | Más que repuestos",
    template: "%s | IKOMI PERÚ",
  },
  description:
    "Importación y venta de repuestos de calidad para camiones y buses Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan.",
  keywords: [
    "IKOMI PERÚ",
    "repuestos para camiones",
    "repuestos Hyundai",
    "repuestos Kia",
    "repuestos Mitsubishi",
    "repuestos Hino",
    "repuestos Isuzu",
    "repuestos Nissan",
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geist.className} flex min-h-screen flex-col bg-white text-ink`}
      >
        {/* Barra de navegación */}
        <Navbar />

        {/* Contenido principal */}
        <main className="flex-1">
          {children}
        </main>

        {/* Pie de página */}
        <Footer />
      </body>
    </html>
  );
}
