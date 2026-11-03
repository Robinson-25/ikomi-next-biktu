import type { Metadata } from "next";
import Hero from "../components/Hero";

export const metadata: Metadata = {
  title: "Inicio",
  description: "IKOMI Perú: repuestos para camiones y buses.",
};

export default function InicioPage() {
  return (
    <main>
      <Hero
        titulo="Repuestos que mueven al Perú"
        descripcion="Importación y venta de repuestos para camiones y buses. Encuentra lo que necesitas para mantener tu vehículo en movimiento."
        imagen="/hero.png"
        alt="Camión y repuestos para camiones y buses"
        enlace="/productos"
        textoBoton="Ver productos"
      />
    </main>
  );
}