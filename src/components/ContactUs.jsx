import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ContactUs = ({
  showSecondaryButton = true,
}) => {
  const { t } = useTranslation();
  
  // Mapping translations to variables
  const title = t('contact.title');
  const subtitle = t('contact.subtitle');
  const primaryButtonText = t('contact.primary_button');
  const secondaryButtonText = t('contact.secondary_button');

  return (
    <section className="flex items-center justify-center w-full py-16 px-4 bg-acclight">
      <div className="flex flex-col justify-center items-center gap-6 w-full max-w-6xl mx-auto p-4 bg-linear-to-br from-accgray via-accgraytransparent to-accgray rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out group">

        <div className="relative z-10 w-16 h-16 bg-linear-to-br from-accblue to-accgreendark rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ease-out">
          <svg className="w-8 h-8 text-acclight" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>

        <div className="relative z-10 text-center space-y-3">
          <h3 className="text-2xl lg:text-3xl font-bold text-acclight leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-acclight/80 text-sm lg:text-base leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full max-w-xl">
          <Link
            to="/contact"
            className="flex-1 bg-linear-to-r from-accblue to-accgreendark text-center text-acclight text-lg py-4 px-6 rounded-xl hover:from-accgreendark hover:to-accblue hover:cursor-pointer transition-all duration-300 ease-out font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            {primaryButtonText}
          </Link>

          {showSecondaryButton && (
            <Link
              to="/location"
              className="flex-1 border-2 border-acclight/30 text-acclight text-center text-lg py-4 px-6 rounded-xl hover:bg-acclight/10 hover:cursor-pointer transition-all duration-300 ease-out font-medium shadow-md hover:shadow-lg hover:scale-105 transform"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>

        <div className="relative z-10 flex items-center gap-6 pt-2">
          <div className="flex items-center gap-2 text-acclight/70 hover:text-acclight transition-colors duration-200 cursor-pointer group">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <a href="tel:+56996284956" className="text-sm font-medium">+56 9 9628 4956</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
