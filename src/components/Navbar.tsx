"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { productos } from "@/data/productos";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/productos", texto: "Productos" },
  { href: "/servicios", texto: "Servicios" },
  { href: "/nosotros", texto: "Nosotros" },
  { href: "/marcas", texto: "Marcas" },
  { href: "/contacto", texto: "Contacto" },
];

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const consulta = normalizar(busqueda.trim());

  const resultados = consulta
    ? productos.filter((producto) =>
        normalizar(
          `${producto.nombre} ${producto.categoria}`
        ).includes(consulta)
      )
    : [];

  function cerrar() {
    setMenuAbierto(false);
    setBusqueda("");
  }

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#030637] text-white">
      <div className="mx-auto flex max-w-[1800px] flex-wrap items-center gap-x-6 gap-y-4 px-5 py-5 lg:px-8">
        {/* Logo provisional hecho con texto */}
        <Link
          href="/"
          onClick={cerrar}
          aria-label="IKOMI Perú, ir al inicio"
          className="flex shrink-0 items-center gap-3"
        >
          <span
            aria-hidden="true"
            className="border-y-4 border-[#ec123d] px-1 font-serif text-[36px] font-black leading-none tracking-[-3px] sm:text-[46px]"
          >
            IKM
          </span>

          <span>
            <span className="block text-base font-extrabold tracking-[0.08em] sm:text-xl">
              IKOMI PERÚ
            </span>

            <span className="mt-1 block text-[8px] font-bold tracking-[0.22em] text-[#9296bd] sm:text-[10px]">
              MÁS QUE REPUESTOS
            </span>
          </span>
        </Link>

        {/* Botón del menú en celulares y tablets */}
        <button
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="navegacion-principal"
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 xl:hidden"
        >
          {menuAbierto ? (
            <span aria-hidden="true" className="text-3xl">
              ×
            </span>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-7 w-7"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Buscador de los productos del proyecto */}
        <div
          role="search"
          aria-label="Buscar productos"
          className="relative order-3 w-full xl:order-none xl:w-52 xl:shrink-0 2xl:w-64"
        >
          <label htmlFor="buscar-producto" className="sr-only">
            ¿Qué repuesto buscas?
          </label>

          <input
            id="buscar-producto"
            type="search"
            autoComplete="off"
            placeholder="¿Qué repuesto buscas?"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setBusqueda("");
              }
            }}
            className="h-12 w-full rounded-full border border-[#2b306b] bg-transparent py-3 pl-5 pr-12 text-sm text-white outline-none placeholder:text-[#9296bd] focus:border-[#ec123d]"
          />

          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pointer-events-none absolute right-4 top-3.5 h-5 w-5"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>

          {consulta && (
            <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-xl border border-[#2b306b] bg-[#080d46] shadow-xl">
              <p role="status" className="px-4 pt-3 text-xs text-white/65">
                {resultados.length === 0
                  ? "No se encontraron productos."
                  : `${resultados.length} productos encontrados`}
              </p>

              <ul className="py-2">
                {resultados.map((producto) => (
                  <li key={producto.slug}>
                    <Link
                      href={`/productos/${producto.slug}`}
                      onClick={cerrar}
                      className="block px-4 py-3 text-sm transition-colors hover:bg-white/10 focus:bg-white/10"
                    >
                      {producto.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Enlaces */}
        <nav
          id="navegacion-principal"
          aria-label="Navegación principal"
          className={`${
            menuAbierto ? "block" : "hidden"
          } order-4 w-full xl:order-none xl:ml-auto xl:block xl:w-auto`}
        >
          <ul className="flex flex-col gap-1 xl:flex-row xl:items-center xl:gap-4 2xl:gap-6">
            {enlaces.map(({ href, texto }) => {
              const activo =
                pathname === href ||
                (href !== "/" &&
                  pathname.startsWith(`${href}/`));

              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={cerrar}
                    aria-current={activo ? "page" : undefined}
                    className={`block border-b-2 py-3 text-sm font-bold uppercase tracking-[0.08em] transition-colors ${
                      activo
                        ? "border-[#ec123d] text-white"
                        : "border-transparent text-[#b7bad3] hover:border-[#ec123d] hover:text-white"
                    }`}
                  >
                    {texto}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Datos visibles en pantallas grandes */}
        <div className="hidden shrink-0 space-y-2 text-xs text-[#c0c3dc] 2xl:block">
          <a
            href="mailto:ventas@ikomiperu.com"
            className="flex items-center gap-2 hover:text-white"
          >
            <span aria-hidden="true" className="text-[#ec123d]">
              ✉
            </span>
            ventas@ikomiperu.com
          </a>

          <a
            href="tel:+51985068416"
            className="flex items-center gap-2 hover:text-white"
          >
            <span aria-hidden="true" className="text-[#ec123d]">
              ☎
            </span>
            +51 985 068 416
          </a>
        </div>
      </div>
    </header>
  );
}