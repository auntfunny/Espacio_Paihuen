import React from "react";
import { useTranslation } from "react-i18next";

const MainIntro = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-24 px-6 bg-linear-to-r from-accblue to-accgray overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accgreenlight/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accblue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accgreendark/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-80 h-80 flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-br from-accgreendark/30 to-accgreenlight/40 rounded-full blur-2xl"></div>
            <div className="absolute inset-2 bg-linear-to-br from-accgreenlight/30 to-accgreendark/30 rounded-full blur-xl"></div>
            <img
              src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085713/Logo_he7dxc.jpg"
              alt={t('intro.logo_alt')}
              className="w-60 h-60 z-10 rounded-full mask-image-[linear-linear(to_bottom,black_80%,transparent)]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 max-w-2xl">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold font-title2 text-acclight mb-4 leading-tight">
              {t('intro.title')}
            </h2>
            <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-acclight/80 max-w-xl">
            {t('intro.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainIntro;
