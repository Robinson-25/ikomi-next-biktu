import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Interfaz de contacto del proyecto académico IKOMI Perú.",
};

export default function ContactoPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-12">
      <h1 className="mb-8 text-3xl font-extrabold md:text-4xl">
        Contacto
      </h1>
      <SectionTitle
        titulo="Escríbenos"
        descripcion="Completa tus datos y el motivo de tu consulta."
      />
      <ContactForm />
    </main>
  );
}