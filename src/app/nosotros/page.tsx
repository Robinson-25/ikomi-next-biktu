
import Link from "next/link";

export default function NosotrosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020725] text-white">

      {/* Fondo con cuadrícula */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">

        {/* Navegación */}
        <nav className="mb-10 flex gap-4 text-sm font-bold tracking-widest">
          <Link href="/" className="text-gray-500 hover:text-white">
            INICIO
          </Link>
          <span className="text-gray-500">/</span>
          <span>NOSOTROS</span>
        </nav>

        {/* Etiqueta */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-[2px] w-11 bg-[#ed1745]" />
          <span className="font-bold tracking-[0.15em] text-gray-300">
            QUIÉNES SOMOS
          </span>
        </div>

        {/* Título */}
        <h1 className="flex flex-col font-black uppercase leading-[0.88] tracking-[-0.04em]">
          <span className="text-[clamp(4rem,12vw,9.5rem)] text-[#ed1745]">
            17 AÑOS
          </span>

          <span className="mt-3 text-[clamp(3rem,10vw,8.5rem)] text-white">
            ACOMPAÑANDO
          </span>

          <span className="mt-3 text-[clamp(4rem,12vw,9.5rem)] text-[#ed1745]">
            TU RUTA
          </span>
        </h1>

        {/* Descripción */}
        <p className="mt-12 max-w-4xl text-lg leading-9 text-gray-300 md:text-2xl">
          Somos IKOMI PERÚ. Desde hace más de 17 años acompañamos a quienes
          mantienen el transporte en movimiento, ofreciendo repuestos de
          calidad para camiones y buses.
        </p>

      </div>
    </main>
  );
}
