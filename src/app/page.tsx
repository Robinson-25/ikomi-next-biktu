
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <Hero
        titulo="Repuestos que mueven  al Perú"
        descripcion="En IKOMI PERÚ encontrarás repuestos, accesorios y soluciones de calidad para mantener tus vehículos siempre en movimiento. Trabajamos para ofrecerte productos confiables y la mejor atención."
        imagen="/hero.png"
        alt="Camión Hyundai y repuestos"
        enlace="/productos"
        textoBoton="Ver nuestros productos"
      />

      
    </main>
  );
}
