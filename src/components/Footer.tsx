import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-2">
        <div>
          <p className="text-2xl font-bold">IKOMI PERÚ</p>
          <p className="mt-3 text-sm">
            Proyecto académico de Desarrollo Web Avanzado.
          </p>
        </div>

        <nav
          aria-label="Enlaces del pie de pagina"
          className="flex flex-wrap items-start gap-6 md:justify-end"
        >
          <Link href="/nosotros" className="hover:underline">
            Nosotros
          </Link>
          <Link href="/productos" className="hover:underline">
            Productos
          </Link>
          <Link href="/contacto" className="hover:underline">
            Contacto
          </Link>
        </nav>
      </div>

      <div className="border-t border-white/20 px-5 py-5 text-center text-sm">
        Sitio desarrollado con Next.js para fines educativos.
      </div>
    </footer>
  );
}