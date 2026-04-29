import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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

const Contact = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const contacts = [
    {
      id: 1,
      title: t("contact_page.cards.whatsapp.title"),
      svg: whatsapp,
      color: "accgreenlight",
      message: t("contact_page.cards.whatsapp.message"),
      button: t("contact_page.cards.whatsapp.button"),
      link: "https://wa.me/56996284956",
    },
    {
      id: 2,
      title: t("contact_page.cards.phone.title"),
      svg: phone,
      color: "accblue",
      message: t("contact_page.cards.phone.message"),
      button: t("contact_page.cards.phone.button"),
      link: "tel:+56996284956",
    },
    {
      id: 3,
      title: t("contact_page.cards.email.title"),
      svg: envelope,
      color: "accblue",
      message: t("contact_page.cards.email.message"),
      button: t("contact_page.cards.email.button"),
      link: "mailto:info@espaciopaihuen.com",
    },
    {
      id: 4,
      title: t("contact_page.cards.instagram.title"),
      svg: instagram,
      color: "pink-500",
      message: t("contact_page.cards.instagram.message"),
      button: t("contact_page.cards.instagram.button"),
      link: "https://instagram.com",
    },
    {
      id: 5,
      title: t("contact_page.cards.facebook.title"),
      svg: facebook,
      color: "blue-500",
      message: t("contact_page.cards.facebook.message"),
      button: t("contact_page.cards.facebook.button"),
      link: "https://facebook.com",
    },
    {
      id: 6,
      title: t("contact_page.cards.form_card.title"),
      svg: form,
      color: "accgreendark",
      message: t("contact_page.cards.form_card.message"),
      button: t("contact_page.cards.form_card.button"),
      link: "",
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_f9xjam3",
        "template_o97373x",
        e.target,
        "kM7ObbbSchyISyCRg",
      );
      setMessage(t("contact_page.form.success"));
      e.target.reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const headerInfo = {
    image: email,
    label: t("contact_page.header.label"),
    title: t("contact_page.header.title"),
    message: t("contact_page.header.message"),
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 gap-16 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              sectionRef={contact.id === 6 ? sectionRef : null}
            />
          ))}
        </div>

        <div ref={sectionRef} className="w-full max-w-2xl mx-auto">
          <div className="rounded-3xl bg-white/40 backdrop-blur-sm border border-acclight/50 shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold font-title2 text-accgray text-center mb-2">
              {t("contact_page.form.title")}
            </h2>
            <p className="text-center text-accgray/70 mb-8">
              {t("contact_page.form.subtitle")}
            </p>

            <form
              onSubmit={sendEmail}
              className="bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder={t("contact_page.form.placeholders.name")}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact_page.form.placeholders.email")}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t("contact_page.form.placeholders.phone")}
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
              <input
                type="text"
                name="title"
                placeholder={t("contact_page.form.placeholders.subject")}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
              <textarea
                name="message"
                placeholder={t("contact_page.form.placeholders.message")}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />

              {message && (
                <p className="text-center italic font-semibold text-accgray">
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex justify-center items-center w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
              >
                {loading ? (
                  <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin" />
                ) : (
                  t("contact_page.form.submit")
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
