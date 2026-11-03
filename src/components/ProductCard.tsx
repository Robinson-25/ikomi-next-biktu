import Link from "next/link";
import type { Producto } from "@/data/productos";

type Props = {
  producto: Producto;
};

export default function ProductCard({ producto }: Props) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-linea bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
      <p className="text-sm font-bold uppercase tracking-wide text-primary">
        {producto.categoria}
      </p>

      <h2 className="mt-4 text-2xl font-bold text-ink">
        {producto.nombre}
      </h2>

      <p className="mt-4 flex-1 leading-relaxed text-muted">
        {producto.descripcion}
      </p>

      <Link
        href={`/productos/${producto.slug}`}
        className="mt-6 inline-flex self-start rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Ver detalle
        <span className="sr-only"> de {producto.nombre}</span>
      </Link>
    </article>
  );
}