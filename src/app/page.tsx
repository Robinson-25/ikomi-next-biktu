
export default function NosotrosPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#01042F] via-[#080D50] to-[#11166B] text-white">

      {/* Fondo con cuadrícula */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Efecto de iluminación */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,55,160,0.25),transparent_60%)]" />

      <section className="relative mx-auto min-h-screen max-w-7xl px-6 py-16 md:px-10">

        {/* Navegación */}
        <nav className="mb-10 flex items-center gap-4 text-sm font-bold tracking-widest">
          <a
            href="/"
            className="text-gray-400 transition-colors hover:text-white"
          >
            INICIO
          </a>

          <span className="text-gray-500">/</span>

          <span className="text-white">NOSOTROS</span>
        </nav>

        {/* Subtítulo */}
        <div className="mb-6 flex items-center gap-4">
          <span className="h-[2px] w-11 bg-[#ed1745]" />

          <span className="font-bold tracking-[0.15em] text-gray-300">
            QUIÉNES SOMOS
          </span>
        </div>

        {/* Título principal */}
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

      </section>
    </main>
  );
}
