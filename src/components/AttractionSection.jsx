import React from "react";

const AttractionSection = ({ attraction, style }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div
        className={`flex flex-col gap-6 ${style === 0 ? "order-2 lg:order-1" : "lg:order-2"}`}
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-accgray">
            {attraction.title}
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
        </div>
        <p className="text-accgray/80 md:text-lg/7">{attraction.content}</p>
        {attraction.link && (
          <a
            href={attraction.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accblue font-semibold hover:text-accgreendark transition-colors"
          >
            Ver horarios e información oficial
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
      <div
        className={`relative ${style === 0 ? "order-1 lg:order-2" : "lg:order-1"} group`}
      >
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={attraction.image}
            alt={attraction.title}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div
          className={`absolute top-4 ${style === 0 ? "right-4" : "left-4"} bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-accgray`}
        >
          {attraction.distance} DE DISTANCIA
        </div>
      </div>
    </section>
  );
};

export default AttractionSection;
