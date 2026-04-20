import React from "react";
import { Link } from "react-router-dom";

const SeasonAlert = () => {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-accgreendark via-accgray to-accblue opacity-90"></div>
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`}></div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-8 left-8 w-32 h-32 bg-accgreenlight/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-8 right-8 w-40 h-40 bg-accblue/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-acclight/5 rounded-full blur-lg"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-linear-to-br from-accgreenlight to-accgreendark rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-acclight" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-acclight drop-shadow-lg">
            ¡Oferta de Temporada!
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          <div className="bg-acclight/10 backdrop-blur-sm rounded-2xl p-8 border border-acclight/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="text-center md:text-left">
                <div className="text-6xl font-bold text-accgreenlight mb-2 drop-shadow-lg">
                  30%
                </div>
                <div className="text-xl text-acclight/90 font-medium">
                  de descuento
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-acclight/30"></div>
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold text-acclight mb-1">
                  Meses de Invierno
                </div>
                <div className="text-lg text-acclight/80">
                  Hasta el 31 de Octubre
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl text-acclight/90 max-w-2xl mx-auto leading-relaxed font-medium">
            Aprovecha esta temporada especial para disfrutar de nuestros espacios únicos
            con un descuento exclusivo en todas nuestras cabañas premium.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/reserva"
            className="group relative bg-linear-to-r from-accgreenlight to-accgreendark text-accgray font-bold text-xl py-5 px-10 rounded-full shadow-2xl hover:shadow-accgreenlight/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accgreenlight/50 transition-all duration-300 ease-out overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
              Reservar Ahora
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-accgreendark to-accgreenlight opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
          </Link>

          <div className="text-sm text-acclight/70 font-medium">
            Oferta limitada • Sujeta a disponibilidad
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accgreenlight/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-accblue/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default SeasonAlert;
