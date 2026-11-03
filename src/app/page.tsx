
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <Hero
        titulo="Repuestos y soluciones para tu vehículo"
        descripcion="En IKOMI PERÚ encontrarás repuestos, accesorios y soluciones de calidad para mantener tus vehículos siempre en movimiento. Trabajamos para ofrecerte productos confiables y la mejor atención."
        imagen="/hero.png"
        alt="Camión Hyundai y repuestos"
        enlace="/productos"
        textoBoton="Ver nuestros productos"
      />

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 font-bold uppercase tracking-widest text-red-600">
            Bienvenidos a IKOMI PERÚ
          </p>

          <h2 className="text-3xl font-extrabold text-[#00164D] md:text-4xl">
            Calidad y confianza en cada repuesto
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Somos una empresa comprometida con brindar productos y
            servicios de calidad para el sector automotriz.
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border p-8 text-center shadow-sm">
            <div className="text-4xl">🚛</div>
            <h3 className="mt-4 text-xl font-bold text-[#00164D]">
              Calidad garantizada
            </h3>
            <p className="mt-3 text-gray-600">
              Productos seleccionados para brindar confianza y durabilidad.
            </p>
          </div>

          <div className="rounded-2xl border p-8 text-center shadow-sm">
            <div className="text-4xl">⚙️</div>
            <h3 className="mt-4 text-xl font-bold text-[#00164D]">
              Repuestos de calidad
            </h3>
            <p className="mt-3 text-gray-600">
              Soluciones para el mantenimiento de tus vehículos.
            </p>
          </div>

          <div className="rounded-2xl border p-8 text-center shadow-sm">
            <div className="text-4xl">🤝</div>
            <h3 className="mt-4 text-xl font-bold text-[#00164D]">
              Atención personalizada
            </h3>
            <p className="mt-3 text-gray-600">
              Estamos comprometidos con atender tus necesidades.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
