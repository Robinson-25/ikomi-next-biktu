import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  producto: {
    slug: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    alt: string;
  };
};

export default function ProductCard({ producto }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-linea bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
      <Image
        src={producto.imagen}
        alt={producto.alt}
        width={640}
        height={480}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        className="aspect-[4/3] w-full bg-surface object-contain p-6"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">{producto.nombre}</h3>
        <p className="mt-3 leading-relaxed text-muted">
          {producto.descripcion}
        </p>
        <Link
          href={`/productos/${producto.slug}`}
          className="mt-5 inline-flex font-semibold text-primary underline-offset-4 hover:underline"
        >
          Ver detalle de {producto.nombre}
        </Link>
      </div>
    </article>
  );
}