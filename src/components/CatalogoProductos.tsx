
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { productos } from "@/data/productos";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  LayoutGrid,
  Grid2X2,
  Menu,
} from "lucide-react";

export default function CatalogoProductos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [columnas, setColumnas] = useState(3);
  const [orden, setOrden] = useState("popularidad");

  const categorias = [
    "Todos",
    "Motor",
    "Embrague",
    "Distribución",
    "Filtros",
    "Transmisión",
    "Frenos",
    "Suspensión",
    "Dirección",
    "Refrigeración",
  ];

  const productosFiltrados = useMemo(() => {
    let resultado = productos.filter((producto) => {
      const coincideBusqueda =
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase());

      const coincideCategoria =
        categoria === "Todos" || producto.categoria === categoria;

      return coincideBusqueda && coincideCategoria;
    });

    if (orden === "nombre") {
      resultado = [...resultado].sort((a, b) =>
        a.nombre.localeCompare(b.nombre)
      );
    }

    return resultado;
  }, [busqueda, categoria, orden]);

  return (
    <main className="min-h-screen bg-[#eef0f8] text-[#080d42]">

      {/* ENCABEZADO */}
      <section className="border-b-4 border-[#ed1745] bg-[#03082f]">
        <div className="mx-auto max-w-[1600px] px-6 py-5 md:px-10">
          <h1 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
            Catálogo
          </h1>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="mx-auto max-w-[1600px] px-5 py-8 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[310px_1fr]">

          {/* SIDEBAR */}
          <aside className="h-fit bg-white">
            <div className="flex items-center gap-3 border-b border-gray-200 px-5 py-5">
              <SlidersHorizontal size={18} className="text-[#ed1745]" />
              <h2 className="font-extrabold tracking-widest">
                FILTRAR
              </h2>
            </div>

            <div className="bg-[#03082f] px-5 py-4 text-sm font-bold tracking-widest text-white">
              CATEGORÍAS
            </div>

            {categorias.map((cat) => {
              const cantidad =
                cat === "Todos"
                  ? productos.length
                  : productos.filter((p) => p.categoria === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`flex w-full items-center justify-between border-b border-gray-200 px-5 py-4 text-left text-sm font-semibold transition hover:bg-gray-100 ${
                    categoria === cat
                      ? "border-l-[3px] border-l-[#ed1745] bg-white text-[#ed1745]"
                      : "text-[#555d91]"
                  }`}
                >
                  <span>{cat === "Todos" ? "VER TODO" : cat}</span>
                  <span>{cantidad}</span>
                </button>
              );
            })}
          </aside>

          {/* PRODUCTOS */}
          <div className="min-w-0">

            {/* BARRA SUPERIOR */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b border-gray-300 pb-4">
              <p className="text-sm font-semibold tracking-wider">
                INICIO <span className="mx-2">/</span> PRODUCTOS
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setColumnas(2)}
                  className={`p-2 ${columnas === 2 ? "bg-[#dce0ef]" : ""}`}
                  aria-label="Dos columnas"
                >
                  <LayoutGrid size={21} />
                </button>

                <button
                  onClick={() => setColumnas(3)}
                  className={`p-2 ${columnas === 3 ? "bg-[#dce0ef]" : ""}`}
                  aria-label="Tres columnas"
                >
                  <Grid2X2 size={21} />
                </button>

                <button
                  onClick={() => setColumnas(4)}
                  className={`p-2 ${columnas === 4 ? "bg-[#dce0ef]" : ""}`}
                  aria-label="Cuatro columnas"
                >
                  <Menu size={21} />
                </button>

                <select
                  value={orden}
                  onChange={(e) => setOrden(e.target.value)}
                  className="ml-2 border-b border-gray-300 bg-transparent px-3 py-2 text-sm font-semibold outline-none"
                >
                  <option value="popularidad">Ordenar por popularidad</option>
                  <option value="nombre">Ordenar por nombre</option>
                </select>
              </div>
            </div>

            {/* BUSCADOR */}
            <div className="mb-4 flex items-center gap-4 border border-gray-300 bg-white px-5 py-4">
              <Search size={22} className="text-[#555d91]" />

              <input
                type="text"
                placeholder="Buscar por nombre, código o modelo..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#7b82a5] md:text-base"
              />
            </div>

            {/* CONTADOR */}
            <p className="mb-4 text-sm font-bold tracking-widest text-[#555d91]">
              {productosFiltrados.length} PRODUCTOS
            </p>

            {/* GRID */}
            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns: `repeat(${columnas}, minmax(0, 1fr))`,
              }}
            >
              {productosFiltrados.map((producto) => (
                <article
                  key={producto.slug}
                  className="group overflow-hidden border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* IMAGEN */}
                  <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-white p-6">
                    <span className="absolute left-0 top-0 bg-[#ed1745] px-4 py-2 text-xs font-black tracking-widest text-white">
                      PRODUCTO
                    </span>

                    <div className="flex h-full w-full items-center justify-center bg-[#f7f7fa] text-center">
                      <div>
                        <div className="mb-3 text-5xl text-[#a6abc1]">
                          ⚙
                        </div>
                        <p className="text-xs font-semibold text-gray-400">
                          IMAGEN DEL PRODUCTO
                        </p>
                      </div>
                    </div>

                    <span className="absolute bottom-3 right-3 border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-green-700">
                      ● DISPONIBLE
                    </span>
                  </div>

                  {/* INFORMACIÓN */}
                  <div className="bg-[#f5f6fa] p-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#ed1745]">
                      {producto.categoria}
                    </p>

                    <h3 className="mb-3 text-lg font-extrabold leading-snug text-[#080d42]">
                      {producto.nombre}
                    </h3>

                    <p className="mb-5 text-sm leading-6 text-[#70789c]">
                      {producto.descripcion}
                    </p>

                    <Link
                      href={`/productos/${producto.slug}`}
                      className="block border border-[#080d42] px-4 py-3 text-center text-xs font-extrabold tracking-widest text-[#080d42] transition hover:bg-[#080d42] hover:text-white"
                    >
                      VER PRODUCTO →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {productosFiltrados.length === 0 && (
              <div className="bg-white py-16 text-center">
                <Search className="mx-auto mb-4 text-gray-400" size={35} />
                <h3 className="text-xl font-bold">
                  No se encontraron productos
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Intenta buscar con otro nombre o categoría.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
