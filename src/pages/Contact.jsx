import { useRef, useState } from "react";
import SectionHeaderDesign from "../components/SectionHeaderDesign";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import PageHeader from "../components/PageHeader";
import whatsapp from "../assets/svg/whatsapp.svg";
import email from "../assets/svg/email.svg";
import phone from "../assets/svg/phone.svg";
import envelope from "../assets/svg/envelope.svg";
import instagram from "../assets/svg/instagram.svg";
import facebook from "../assets/svg/facebook.svg";
import form from "../assets/svg/form.svg";
import emailjs from "@emailjs/browser";

const contacts = [
  {
    id: 1,
    title: "WhatsApp",
    svg: whatsapp,
    color: "accgreenlight",
    message:
      "Chatea con nosotros de forma instantánea para respuestas rápidas y personalizadas",
    button: "Iniciar Chat",
    link: "https://wa.me/56996284956",
  },
  {
    id: 2,
    title: "Teléfono",
    svg: phone,
    color: "accblue",
    message:
      "Llámanos directamente para una conversación inmediata y detallada",
    button: "Llamar Ahora",
    link: "tel:+56996284956",
  },
  {
    id: 3,
    title: "Email",
    svg: envelope,
    color: "accblue",
    message:
      "Envíanos un correo electrónico para consultas detalladas o reservas",
    button: "Enviar Email",
    link: "mailto:info@espaciopaihuen.com",
  },
  {
    id: 4,
    title: "Instagram",
    svg: instagram,
    color: "pink-500",
    message:
      "Síguenos en Instagram para ver nuestras últimas fotos y actualizaciones",
    button: "@espacio_paihuen",
    link: "https://instagram.com/espacio_paihuen",
  },
  {
    id: 5,
    title: "Facebook",
    svg: facebook,
    color: "blue-500",
    message: "Únete a nuestra comunidad en Facebook y mantente informado",
    button: "Visitar Página",
    link: "https://facebook.com/espaciopaihuen",
  },
  {
    id: 6,
    title: "Formulario",
    svg: form,
    color: "accgreendark",
    message: "Completa nuestro formulario detallado para consultas específicas",
    button: "Completar Formulario",
    link: "",
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      await emailjs.sendForm(
        "service_f9xjam3",
        "template_o97373x",
        e.target,
        "kM7ObbbSchyISyCRg",
      );

      setMessage("Enviado!");
      setLoading(false);
      e.target.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const headerInfo = {
    image: email,
    label: "Contacto",
    title: "Contáctanos",
    message:
      "Estamos aquí para tus dudas y consultas. Hablános con una de las opciones y estaremos en contacto pronto.",
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 gap-16 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {contacts.map((contact) =>
            contact.title === "Formulario" ? (
              <ContactCard
                key={contact.id}
                contact={contact}
                sectionRef={sectionRef}
              />
            ) : (
              <ContactCard
                key={contact.id}
                contact={contact}
                sectionRef={null}
              />
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
              onSubmit={sendEmail}
              className="bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl space-y-5"
            >
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    required
                    className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Número de Teléfono (Opcional)"
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Título"
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                />

                <textarea
                  name="message"
                  id="message"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                ></textarea>
              </div>

              {setMessage && <p className="text-center italic font-semibold text-accgray">{message}</p>}

              <button
                type="submit"
                disabled={loading}
                className="flex justify-center items-center w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
              >
                {loading ? (
                  <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
                ) : (
                  "Enviar Mensaje"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
