import React from "react";
import { useTranslation } from "react-i18next";
import ContactUs from "../components/ContactUs";
import PageHeader from "../components/PageHeader";
import map from "../assets/svg/map.svg";
import AttractionSection from "../components/AttractionSection";

const Attractions = () => {
  const { t } = useTranslation();

  const attract = [
    {
      id: 1,
      title: t("attractions.items.alerce.title"),
      content: t("attractions.items.alerce.content"),
      image: "/images/Alerce_Andino.jpg",
      distance: t("attractions.items.alerce.distance"),
      link: "https://www.conaf.cl/parque_nacionales/parque-nacional-alerce-andino/",
    },
    {
      id: 2,
      title: t("attractions.items.caleta.title"),
      content: t("attractions.items.caleta.content"),
      image: "/images/Caleta.jpg",
      distance: t("attractions.items.caleta.distance"),
      link: "",
    },
    {
      id: 3,
      title: t("attractions.items.traditions.title"),
      content: t("attractions.items.traditions.content"),
      image: "/images/Costumbrista.webp",
      distance: t("attractions.items.traditions.distance"),
      link: "",
    },
    {
      id: 4,
      title: t("attractions.items.pvaras.title"),
      content: t("attractions.items.pvaras.content"),
      image: "/images/Puerto_Varas.jpg",
      distance: t("attractions.items.pvaras.distance"),
      link: "",
    },
    {
      id: 5,
      title: t("attractions.items.chapo.title"),
      content: t("attractions.items.chapo.content"),
      image: "/images/Lago_Chapo.jpg",
      distance: t("attractions.items.chapo.distance"),
      link: "",
    },
    {
      id: 6,
      title: t("attractions.items.pichicolo.title"),
      content: t("attractions.items.pichicolo.content"),
      image: "/images/Pichicolo.jpeg",
      distance: t("attractions.items.pichicolo.distance"),
      link: "https://termasdepichicolo.cl/",
    },
    {
      id: 7,
      title: t("attractions.items.hornopiren.title"),
      content: t("attractions.items.hornopiren.content"),
      image: "/images/Hornopiren.webp",
      distance: t("attractions.items.hornopiren.distance"),
      link: "",
    },
    {
      id: 8,
      title: t("attractions.items.petrohue.title"),
      content: t("attractions.items.petrohue.content"),
      image: "/images/Petrohue.jpg",
      distance: t("attractions.items.petrohue.distance"),
      link: "https://www.conaf.cl/parque_nacionales/parque-nacional-vicente-perez-rosales/",
    },
    {
      id: 9,
      title: t("attractions.items.cochamo.title"),
      content: t("attractions.items.cochamo.content"),
      image: "/images/Cochamo.jpg",
      distance: t("attractions.items.cochamo.distance"),
      link: "https://termascochamo.com/",
    },
    {
      id: 10,
      title: t("attractions.items.chiloe.title"),
      content: t("attractions.items.chiloe.content"),
      image: "/images/Chiloe.jpg",
      distance: t("attractions.items.chiloe.distance"),
      link: "",
    },
  ];

  const headerInfo = {
    image: map,
    label: t("attractions.header.label"),
    title: t("attractions.header.title"),
    message: t("attractions.header.message"),
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-16 px-4 md:px-8">
        <PageHeader info={headerInfo} />
        <div className="w-full max-w-7xl mt-20 space-y-24">
          {attract.map((item, index) => (
            <AttractionSection
              key={item.id}
              attraction={item}
              style={index % 2}
            />
          ))}
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Attractions;
