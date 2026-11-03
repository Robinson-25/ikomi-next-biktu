type SectionTitleProps = {
  titulo: string;
  descripcion?: string;
};

export default function SectionTitle({
  titulo,
  descripcion,
}: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-ink md:text-3xl">
        {titulo}
      </h2>
      <div aria-hidden="true" className="mt-3 h-1 w-16 bg-primary" />
      {descripcion && (
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {descripcion}
        </p>
      )}
    </div>
  );
}