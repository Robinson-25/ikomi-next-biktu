import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
  enlace?: string;
  textoBoton?: string;
};

export default function Hero({
  titulo,
  descripcion,
  imagen,
  alt,
  enlace = "/productos",
  textoBoton = "Ver productos",
}: HeroProps) {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-4 font-semibold text-primary">IKOMI PERÚ</p>
          <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
            {titulo}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {descripcion}
          </p>
          <Link
            href={enlace}
            className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            {textoBoton}
          </Link>
        </div>

        <Image
          src={imagen}
          alt={alt}
          width={1200}
          height={800}
          sizes="(max-width: 767px) 100vw, 50vw"
          className="aspect-[3/2] w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}