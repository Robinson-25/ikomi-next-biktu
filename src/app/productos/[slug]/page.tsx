import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productos } from "@/data/productos";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productos.map((producto) => ({
    slug: producto.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = productos.find((item) => item.slug === slug);

  if (!producto) {
    notFound();
  }

  return {
    title: producto.nombre,
    description: producto.descripcion,
  };
}

export default async function DetalleProductoPage({ params }: Props) {
  const { slug } = await params;
  const producto = productos.find((item) => item.slug === slug);

  if (!producto) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-12 md:px-8">
      <Link
        href="/productos"
        className="font-semibold text-primary hover:underline"
      >
        ← Volver al catálogo
      </Link>

      <article className="mt-8 rounded-2xl border border-linea bg-surface p-6 md:p-10">
        <p className="font-bold uppercase tracking-wider text-primary">
          {producto.categoria}
        </p>

        <h1 className="mt-4 text-3xl font-extrabold text-ink md:text-5xl">
          {producto.nombre}
        </h1>

        <p className="mt-6 text-xl text-muted">
          {producto.descripcion}
        </p>

        <p className="mt-5 leading-relaxed text-muted">
          {producto.detalle}
        </p>

        <Link
          href="/contacto"
          className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primary-dark"
        >
          Ir a contacto
        </Link>
      </article>
    </main>
  );
}