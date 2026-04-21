import { useRef, useState } from "react";
import SectionHeaderDesign from "../components/SectionHeaderDesign";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";

const contacts = [
  {
    id: 1,
    title: "WhatsApp",
    svg: "/svg/whatsapp.svg",
    color: "accgreenlight",
    message: "Chatea con nosotros de forma instantánea para respuestas rápidas y personalizadas",
    button: "Iniciar Chat",
    link: "https://wa.me/56996284956",
  },
  {
    id: 2,
    title: "Teléfono",
    svg: "/svg/phone.svg",
    color: "accblue",
    message: "Llámanos directamente para una conversación inmediata y detallada",
    button: "Llamar Ahora",
    link: "tel:+56996284956",
  },
  {
    id: 3,
    title: "Email",
    svg: "/svg/envelope.svg",
    color: "accblue",
    message: "Envíanos un correo electrónico para consultas detalladas o reservas",
    button: "Enviar Email",
    link: "mailto:info@espaciopaihuen.com",
  },
  {
    id: 4,
    title: "Instagram",
    svg: "/svg/instagram.svg",
    color: "pink-500",
    message: "Síguenos en Instagram para ver nuestras últimas fotos y actualizaciones",
    button: "@espacio_paihuen",
    link: "https://instagram.com/espacio_paihuen",
  },
  {
    id: 5,
    title: "Facebook",
    svg: "/svg/facebook.svg",
    color: "blue-500",
    message: "Únete a nuestra comunidad en Facebook y mantente informado",
    button: "Visitar Página",
    link: "https://facebook.com/espaciopaihuen",
  },
  {
    id: 6,
    title: "Formulario",
    svg: "/svg/form.svg",
    color: "accgreendark",
    message: "Completa nuestro formulario detallado para consultas específicas",
    button: "Completar Formulario",
    link: "",
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const setInfo = (event) => {
    const { name, value } = event.target;
    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 gap-16 px-4 md:px-8">
        <div className="flex flex-col items-center gap-6 max-w-4xl">
          <div className="flex items-center gap-3 bg-linear-to-r from-accgreenlight/20 to-accblue/20 px-6 py-3 rounded-full border border-acclight/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-accgreendark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <span className="text-sm font-medium text-accgray">Contacto</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-title2 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight bg-clip-text text-transparent leading-tight">
            Contáctanos
          </h1>
          <p className="text-lg/7 md:text-xl/7 text-center text-accgray/80 max-w-3xl mx-auto">
            Estamos aquí para tus dudas y consultas. Hablános con una de las
            opciones y estaremos en contacto pronto.
          </p>
          <SectionHeaderDesign />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {contacts.map((contact) =>
            contact.title === "Formulario" ? (
              <ContactCard key={contact.id} contact={contact} sectionRef={sectionRef} />
            ) : (
              <ContactCard key={contact.id} contact={contact} sectionRef={null} />
            ),
          )}
        </div>

        <div ref={sectionRef} className="w-full max-w-2xl mx-auto">
          <div className="rounded-3xl bg-white/40 backdrop-blur-sm border border-acclight/50 shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold font-title2 text-accgray text-center mb-2">
              Formulario de Contacto
            </h2>
            <p className="text-center text-accgray/70 mb-8">
              Rellena el formulario y nos pondremos en contacto lo antes posible
            </p>

            <form
              onSubmit={handleSubmit}
              className="bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl space-y-5"
            >
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="text"
                    value={contactForm.name}
                    name="name"
                    placeholder="Nombre"
                    onChange={setInfo}
                    required
                    className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                  />
                </div>

                <input
                  type="email"
                  value={contactForm.email}
                  name="email"
                  placeholder="Correo Electrónico"
                  onChange={setInfo}
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                />
                <input
                  type="tel"
                  value={contactForm.phone}
                  name="phone"
                  placeholder="Número de Teléfono (Opcional)"
                  onChange={setInfo}
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                />

                <textarea
                  name="message"
                  id="message"
                  value={contactForm.message}
                  placeholder="Escribe tu mensaje aquí..."
                  onChange={setInfo}
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
              >
                Envia Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
