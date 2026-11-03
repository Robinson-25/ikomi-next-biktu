import type { Metadata } from "next";
import EnviosHero from "../../components/EnviosHero";

export const metadata: Metadata = {
  title: "Envíos y servicios",
  description:
    "Consulta las alternativas de entrega de repuestos de IKOMI Perú en Lima y los envíos a provincias.",
};

export default function ServiciosPage() {
  return (
    <main>
      <EnviosHero />
    </main>
  );
}