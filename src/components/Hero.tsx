
import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  titulo: string;
  descripcion: string;
  imagen?: string;
  alt?: string;
  enlace?: string;
  textoBoton?: string;
};

export default function Hero({
  titulo,
  descripcion,
  imagen = "/hero.png",
  alt = "Camión Hyundai y repuestos originales",
  enlace = "/productos",
  textoBoton = "Ver productos",
}: HeroProps) {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-[#00164D] md:min-h-[650px]">

      {/* Imagen de fondo */}
      <Image
        src={imagen}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Capa de protección para el texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00164D]/70 via-[#00164D]/20 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-10">

        <div className="max-w-xl">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            IKOMI PERÚ
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {titulo}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-200 md:text-lg">
            {descripcion}
          </p>

          <div className="mt-9">
            <Link
              href={enlace}
              className="inline-flex items-center rounded-lg bg-red-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
            >
              {textoBoton}
              <span className="ml-3">→</span>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}
