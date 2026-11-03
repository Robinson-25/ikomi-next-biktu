
import type { Metadata } from "next";
import CatalogoProductos from "@/components/CatalogoProductos";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description: "Catálogo de repuestos IKOMI PERÚ.",
};

export default function ProductosPage() {
  return <CatalogoProductos />;
}
