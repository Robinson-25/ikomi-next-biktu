import Image from "next/image";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function EnviosHero() {
  return (
    <section
      aria-labelledby="titulo-envios"
      className="relative isolate overflow-hidden bg-[#030637] text-white"
    >
      {/* Fotografía de fondo */}
      <Image
        src="/envio.png"
        alt="Trabajadores preparando un paquete de repuestos para envío"
        fill
        unoptimized
        sizes="100vw"
        className="z-0 object-cover object-right"
      />

      {/* Oscurecimiento suave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,6,55,0.65) 0%, rgba(3,6,55,0.35) 45%, rgba(3,6,55,0.12) 100%), linear-gradient(0deg, rgba(3,6,55,0.65), transparent 55%)",
        }}
      />

      {/* Cuadrícula */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1680px] px-6 py-10 md:px-10 lg:px-6 lg:py-12">
        {/* Navegación */}
        <nav
          aria-label="Ruta de navegación"
          className="flex items-center gap-3 text-xs font-bold tracking-widest md:text-sm"
        >
          <Link
            href="/"
            className="text-gray-400 transition-colors hover:text-white"
          >
            INICIO
          </Link>

          <span aria-hidden="true" className="text-gray-500">
            /
          </span>

          <span aria-current="page">ENVÍOS</span>
        </nav>

        {/* Subtítulo */}
        <div className="mt-8 flex items-center gap-4">
          <span
            aria-hidden="true"
            className="h-[2px] w-10 shrink-0 bg-[#ed1745]"
          />

          <p className="text-xs font-bold tracking-[0.12em] text-gray-300 md:text-sm">
            INFORMACIÓN SOBRE ENVÍOS
          </p>
        </div>

        {/* Letras más pequeñas para reducir la altura del banner */}
        <h1
          id="titulo-envios"
          className={`${anton.className} mt-6 text-[68px] font-normal uppercase leading-[1.08] tracking-[-0.02em] md:text-[96px] lg:text-[112px] xl:text-[128px]`}
        >
          <span className="block text-[#ed1745]">ENVÍOS</span>
          <span className="block">A TODO</span>
          <span className="block text-[#ed1745]">EL PERÚ</span>
        </h1>

        <p className="mt-8 max-w-[800px] text-base leading-relaxed text-gray-300 md:text-xl lg:text-[22px]">
          Tu pedido puede llegar hasta donde lo necesites. Conoce nuestras
          alternativas de entrega en Lima y las opciones de envío a provincias.
        </p>
      </div>
    </section>
  );
}