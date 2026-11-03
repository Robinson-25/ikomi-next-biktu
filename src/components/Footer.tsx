
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
  Camera,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020725] text-white">

      {/* Línea superior */}
      <div className="h-1.5 bg-[#e50936]" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">

        {/* INFORMACIÓN DE LA EMPRESA */}
        <div>
          <Link href="/" className="mb-8 inline-flex items-center gap-4">
            <span className="border-y-4 border-[#ed1745] px-2 text-3xl font-black tracking-tighter">
              IKM
            </span>

            <span>
              <span className="block text-2xl font-extrabold tracking-wider">
                IKOMI PERÚ
              </span>
              <span className="text-xs font-semibold tracking-[0.25em] text-gray-400">
                MÁS QUE REPUESTOS
              </span>
            </span>
          </Link>

          <p className="text-[15px] leading-8 text-gray-300">
            Importación y venta de repuestos de calidad para camiones y buses
            Hyundai, Kia, Mitsubishi, Hino, Isuzu y Nissan. Encuentra todo lo
            que tu camión, bus o flota necesita en un solo lugar.
          </p>

          <a
            href="https://wa.me/51985068416"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-3 border border-white/25 px-5 py-4 text-sm font-bold tracking-wider transition-all hover:border-[#ed1745] hover:bg-[#ed1745]"
          >
            <MessageCircle size={22} />
            ESCRÍBENOS POR WHATSAPP
            <ArrowUpRight size={18} />
          </a>

          {/* REDES SOCIALES */}
          <div className="mt-8 flex items-center gap-5 text-gray-400">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500/20 font-bold text-lg transition hover:bg-[#ed1745] hover:text-white"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-[#ed1745]"
            >
              <Camera size={27} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded bg-gray-500/20 text-sm font-bold transition hover:bg-[#ed1745] hover:text-white"
            >
              in
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-2xl font-bold transition hover:text-[#ed1745]"
            >
              ♪
            </a>

          </div>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h3 className="mb-7 text-base font-bold tracking-[0.18em] text-[#ed1745]">
            NAVEGACIÓN
          </h3>

          <nav className="flex flex-col gap-5 text-gray-300">
            <Link href="/" className="transition hover:translate-x-1 hover:text-white">
              Inicio
            </Link>

            <Link href="/productos" className="transition hover:translate-x-1 hover:text-white">
              Productos
            </Link>

            <Link href="/servicios" className="transition hover:translate-x-1 hover:text-white">
              Envíos
            </Link>

            <Link href="/nosotros" className="transition hover:translate-x-1 hover:text-white">
              Nosotros
            </Link>

            <Link href="/contacto" className="transition hover:translate-x-1 hover:text-white">
              Contacto
            </Link>
          </nav>
        </div>

        {/* CATEGORÍAS */}
        <div>
          <h3 className="mb-7 text-base font-bold tracking-[0.18em] text-[#ed1745]">
            CATEGORÍAS
          </h3>

          <nav className="flex flex-col gap-5 text-gray-300">
            {[
              "Motor",
              "Embrague",
              "Distribución",
              "Filtros",
              "Transmisión",
              "Frenos",
              "Suspensión",
              "Dirección",
              "Refrigeración",
            ].map((categoria) => (
              <Link
                key={categoria}
                href="/productos"
                className="transition hover:translate-x-1 hover:text-white"
              >
                {categoria}
              </Link>
            ))}
          </nav>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="mb-7 text-base font-bold tracking-[0.18em] text-[#ed1745]">
            CONTACTO
          </h3>

          <div className="flex flex-col gap-5 text-gray-300">

            <a
              href="tel:+51985068416"
              className="flex items-start gap-4 transition hover:text-white"
            >
              <Phone size={19} className="mt-1 shrink-0 text-[#ed1745]" />
              <span>+51 985 068 416</span>
            </a>

            <a
              href="mailto:ventas@ikomiperu.com"
              className="flex items-start gap-4 transition hover:text-white"
            >
              <Mail size={19} className="mt-1 shrink-0 text-[#ed1745]" />
              <span>ventas@ikomiperu.com</span>
            </a>

            <div className="flex items-start gap-4">
              <MapPin size={19} className="mt-1 shrink-0 text-[#ed1745]" />
              <span>
                Avenida Nicolás Ayllón 3384, Ate
                <br />
                Lima, Perú
              </span>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={19} className="mt-1 shrink-0 text-[#ed1745]" />
              <span>
                Lunes a Viernes: 8:30 a.m. – 6:00 p.m.
                <br />
                Sábados: 8:30 a.m. – 3:00 p.m.
              </span>
            </div>

          </div>
        </div>

      </div>

      

    </footer>
  );
}
