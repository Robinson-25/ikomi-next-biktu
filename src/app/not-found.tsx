import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 text-center">
      <p className="text-7xl font-extrabold text-primary">404</p>

      <h1 className="mt-6 text-3xl font-bold text-ink">
        Página no encontrada
      </h1>

      <p className="mt-4 text-muted">
        La página o el producto que buscas no existe.
      </p>

      <Link
        href="/productos"
        className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white"
      >
        Volver a productos
      </Link>
    </main>
  );
}