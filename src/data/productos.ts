export type Producto = {
  slug: string;
  nombre: string;
  descripcion: string;
  detalle: string;
  categoria: string;
};

export const productos: Producto[] = [
  {
    slug: "filtro-de-aceite",
    nombre: "Filtro de aceite",
    descripcion: "Elemento del sistema de lubricación.",
    detalle:
      "Ayuda a retener impurezas del aceite. La referencia y compatibilidad deben verificarse según el motor.",
    categoria: "Filtros",
  },
  {
    slug: "disco-de-embrague",
    nombre: "Disco de embrague",
    descripcion: "Componente del sistema de transmisión.",
    detalle:
      "Participa en la transmisión del movimiento entre el motor y la caja de cambios. Su referencia depende del vehículo.",
    categoria: "Transmisión",
  },
  {
    slug: "pastillas-de-freno",
    nombre: "Pastillas de freno",
    descripcion: "Componentes del sistema de frenado.",
    detalle:
      "Actúan sobre el disco para contribuir a reducir la velocidad. Se debe comprobar su compatibilidad con el vehículo.",
    categoria: "Frenos",
  },
];