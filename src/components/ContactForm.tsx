export default function ContactForm() {
  const campo =
    "mt-2 w-full rounded-lg border border-linea bg-white px-4 py-3";

  return (
    <form
      aria-label="Formulario de contacto"
      aria-describedby="aviso-formulario"
      className="rounded-2xl border border-linea bg-surface p-5 md:p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="font-semibold">
            Nombre completo
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            className={campo}
          />
        </div>

        <div>
          <label htmlFor="correo" className="font-semibold">
            Correo electrónico
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            autoComplete="email"
            required
            className={campo}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="mensaje" className="font-semibold">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            required
            className={campo}
          />
        </div>
      </div>

      <p id="aviso-formulario" className="mt-5 text-sm text-muted">
        Formulario de demostración: el envío no está habilitado.
      </p>

      <button
        type="button"
        disabled
        className="mt-4 cursor-not-allowed rounded-lg bg-primary px-6 py-3 font-semibold text-white opacity-60"
      >
        Enviar mensaje
      </button>
    </form>
  );
}