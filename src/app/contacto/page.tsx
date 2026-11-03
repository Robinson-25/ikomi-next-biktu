import type { Metadata } from "next";
import Link from "next/link";
import { Anton } from "next/font/google";
import ContactForm from "../../components/ContactForm";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con IKOMI Perú por WhatsApp, teléfono o correo. Visítanos en avenida Nicolás Ayllón 3384, Ate, Lima.",
};

const whatsapp = "https://wa.me/51985068416";
const ubicacion = encodeURIComponent(
  "IKOMI PERÚ Avenida Nicolás Ayllón 3384 Ate Lima Perú"
);
const mapa = `https://www.google.com/maps?q=${ubicacion}&output=embed`;
const comoLlegar = `https://www.google.com/maps/search/?api=1&query=${ubicacion}`;

type IconoNombre = "whatsapp" | "telefono" | "correo" | "ubicacion";

function Icono({ nombre }: { nombre: IconoNombre }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      {nombre === "whatsapp" && (
        <>
          <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" />
          <path d="M9 8c-.7 0-1 1-.7 2 .7 2.1 2.3 3.7 4.4 4.4 1 .3 2 0 2-.7l-1.7-1-1 .7a7 7 0 0 1-2.4-2.4l.7-1L9 8Z" />
        </>
      )}

      {nombre === "telefono" && (
        <path d="m7 3 3 4-2 2a15 15 0 0 0 7 7l2-2 4 3-1 4C10 22 2 14 3 4l4-1Z" />
      )}

      {nombre === "correo" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="m3 6 9 7 9-7" />
        </>
      )}

      {nombre === "ubicacion" && (
        <>
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
    </svg>
  );
}

const datos: {
  titulo: string;
  texto: string;
  href: string;
  icono: IconoNombre;
  externo?: boolean;
}[] = [
  {
    titulo: "WhatsApp",
    texto: "+51 985 068 416",
    href: whatsapp,
    icono: "whatsapp",
    externo: true,
  },
  {
    titulo: "Teléfono",
    texto: "+51 985 068 416",
    href: "tel:+51985068416",
    icono: "telefono",
  },
  {
    titulo: "Correo",
    texto: "ventas@ikomiperu.com",
    href: "mailto:ventas@ikomiperu.com",
    icono: "correo",
  },
  {
    titulo: "Dirección",
    texto: "Avenida Nicolás Ayllón 3384, Ate, Lima, Perú",
    href: comoLlegar,
    icono: "ubicacion",
    externo: true,
  },
];

export default function ContactoPage() {
  return (
    <main className="bg-[#030637] text-white">
      {/* Banner */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at top right, #11165b 0%, #030637 65%)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px),
              repeating-linear-gradient(135deg, transparent 0px, transparent 39px, rgba(237,23,69,0.06) 40px, transparent 41px)
            `,
            backgroundSize: "48px 48px, 48px 48px, auto",
          }}
        />

        <div className="mx-auto max-w-[1640px] px-6 py-10 md:px-10 lg:py-14">
          <nav
            aria-label="Ruta de navegación"
            className="mb-10 flex gap-3 text-xs font-bold tracking-widest"
          >
            <Link
              href="/"
              className="text-white/60 transition-colors hover:text-white"
            >
              INICIO
            </Link>
            <span aria-hidden="true" className="text-white/40">
              /
            </span>
            <span aria-current="page">CONTACTO</span>
          </nav>

          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-[#ed1745]"
            />
            <p className="text-sm font-bold tracking-[0.15em] text-white/65">
              HABLEMOS
            </p>
          </div>

          <h1
            className={`${anton.className} mt-7 text-[clamp(2.7rem,7.8vw,8.5rem)] font-normal uppercase leading-[1.12] tracking-tight`}
          >
            <span className="block text-[#ed1745]">ESTAMOS A</span>
            <span className="block">UN MENSAJE</span>
            <span className="block text-[#ed1745]">DE DISTANCIA.</span>
          </h1>

          <p className="mt-8 max-w-[870px] text-base leading-relaxed text-white/70 md:text-xl lg:text-2xl">
            No importa si tienes el código o una foto del repuesto, o si solo
            sabes qué vehículo tienes. Cuéntanos qué necesitas por llamada o
            WhatsApp y te ayudaremos a encontrar el repuesto adecuado.
          </p>
        </div>
      </section>

      {/* Tarjetas de contacto */}
      <section
        aria-label="Canales de contacto"
        className="mx-auto max-w-[1640px] px-6 py-8 md:px-10"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {datos.map((dato) => (
            <a
              key={dato.titulo}
              href={dato.href}
              target={dato.externo ? "_blank" : undefined}
              rel={dato.externo ? "noopener noreferrer" : undefined}
              className="group min-w-0 border border-white/15 p-7 transition-colors hover:border-[#ed1745] hover:bg-white/5 motion-reduce:transition-none"
            >
              <span className="flex h-14 w-14 items-center justify-center bg-[#cc0731]">
                <Icono nombre={dato.icono} />
              </span>

              <h2 className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-white/50">
                {dato.titulo}
              </h2>

              <p className="mt-2 break-words text-lg font-semibold leading-snug">
                {dato.texto}
              </p>
            </a>
          ))}
        </div>

        {/* Horario y acceso a WhatsApp */}
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <article className="border border-white/15 p-6 md:p-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[#ed1745]">
              Horario de atención
            </h2>

            <dl className="mt-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-white/15 py-4">
                <dt className="text-white/70">Lunes a viernes</dt>
                <dd className={`${anton.className} text-xl`}>
                  8:30 a.m. – 6:00 p.m.
                </dd>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 py-4">
                <dt className="text-white/70">Sábados</dt>
                <dd className={`${anton.className} text-xl`}>
                  8:30 a.m. – 3:00 p.m.
                </dd>
              </div>
            </dl>
          </article>

          <article className="flex flex-col items-start justify-center bg-[#cc0731] p-6 md:p-8">
            <h2
              className={`${anton.className} text-3xl uppercase leading-tight md:text-4xl`}
            >
              ¿Es urgente? Escríbenos directo.
            </h2>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-4 bg-white px-6 py-4 text-sm font-bold tracking-wide text-[#030637] transition-colors hover:bg-gray-200"
            >
              ABRIR WHATSAPP
              <Icono nombre="whatsapp" />
            </a>
          </article>
        </div>
      </section>

      {/* Ubicación */}
      <section
        aria-label="Ubicación de IKOMI Perú"
        className="mx-auto grid max-w-[1640px] gap-5 px-6 py-10 md:px-10 lg:grid-cols-[2fr_1fr]"
      >
        <iframe
          title="Mapa de IKOMI Perú en avenida Nicolás Ayllón 3384, Ate"
          src={mapa}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-[330px] w-full border-0 md:h-[440px]"
        />

        <div className="flex flex-col justify-center bg-[#cc0731] p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.15em]">
            Visítanos
          </p>

          <h2
            className={`${anton.className} mt-5 text-3xl uppercase leading-tight md:text-4xl`}
          >
            Avenida Nicolás Ayllón 3384, Ate
            <br />
            Lima, Perú
          </h2>

          <a
            href={comoLlegar}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 text-sm font-bold tracking-wide hover:underline"
          >
            CÓMO LLEGAR <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      {/* Formulario solicitado en la evaluación */}
      <section className="mx-auto max-w-[1640px] px-6 pb-16 pt-5 md:px-10">
        <div className="rounded-lg bg-white p-6 text-[#17212f] md:p-10">
          <h2 className={`${anton.className} text-3xl uppercase md:text-4xl`}>
            Cuéntanos qué necesitas
          </h2>

          <p className="mb-8 mt-3 text-gray-600">
            Formulario de demostración académica. No envía mensajes; para
            comunicarte utiliza los canales anteriores.
          </p>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}