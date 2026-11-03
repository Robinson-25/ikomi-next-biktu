"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/nosotros", texto: "Nosotros" },
  { href: "/servicios", texto: "Servicios" },
  { href: "/productos", texto: "Productos" },
  { href: "/marcas", texto: "Marcas" },
  { href: "/contacto", texto: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="border-b border-linea bg-white">
      <nav
        aria-label="Navegacion principal"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5"
      >
        <Link
          href="/"
          onClick={() => setAbierto(false)}
          className="text-2xl font-extrabold tracking-tight text-primary"
        >
          IKOMI PERÚ
        </Link>

        <button
          type="button"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto(!abierto)}
          className="rounded-lg border border-linea px-4 py-2 font-semibold lg:hidden"
        >
          {abierto ? "Cerrar" : "Menú"}
        </button>

        <ul
          id="menu-principal"
          className={`${abierto ? "flex" : "hidden"} w-full flex-col gap-2 lg:flex lg:w-auto lg:flex-row`}
        >
          {enlaces.map(({ href, texto }) => {
            const activo =
              pathname === href ||
              (href !== "/" && pathname.startsWith(`${href}/`));

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={activo ? "page" : undefined}
                  onClick={() => setAbierto(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                    activo
                      ? "bg-primary text-white"
                      : "text-ink hover:bg-surface hover:text-primary"
                  }`}
                >
                  {texto}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}