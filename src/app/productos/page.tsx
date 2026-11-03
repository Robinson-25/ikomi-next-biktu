import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo académico de repuestos de filtros, transmisión y frenos.",
};

export default function ProductosPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8">
      <p className="font-bold uppercase tracking-wider text-primary">
        IKOMI PERÚ
      </p>

      <h1 className="mt-3 text-4xl font-extrabold text-ink">
        Nuestros productos
      </h1>

      <p className="mt-4 max-w-2xl text-muted">
        Selecciona un producto para conocer su detalle.
      </p>

      <p className="mt-4 text-sm text-muted">
        Datos de ejemplo para el proyecto académico.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {productos.map((producto) => (
          <ProductCard key={producto.slug} producto={producto} />
        ))}
      </div>
    </main>
  );
}