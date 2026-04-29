import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Ensure this is imported

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative flex justify-center items-center min-h-screen text-acclight overflow-hidden"
    >
      <img
        src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085843/De_Frente_2_na2oll.jpg"
        alt={t('hero.image_alt')}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center gap-8 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-4">
          <p className="text-lg md:text-xl font-light text-acclight/90 tracking-widest uppercase">
            {t('hero.top_text')}
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold font-title1 text-accgreenlight drop-shadow-2xl tracking-wider">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-light text-acclight/80 max-w-2xl leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            to="/reserve"
            className="group relative bg-linear-to-r from-accblue to-accgreendark text-acclight text-xl font-semibold py-4 px-8 rounded-full shadow-2xl hover:shadow-accblue/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accblue/50 transition-all duration-300 ease-out overflow-hidden"
          >
            <span className="relative z-10">{t('hero.buttons.reserve')}</span>
            <div className="absolute inset-0 bg-linear-to-r from-accgreendark to-accblue opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
          </Link>

          <Link
            to="/about"
            className="group border-2 border-acclight/60 text-acclight text-xl font-medium py-4 px-8 rounded-full hover:bg-acclight/10 hover:border-acclight focus:outline-none focus:ring-4 focus:ring-acclight/50 transition-all duration-300 ease-out backdrop-blur-sm"
          >
            {t('hero.buttons.learn_more')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
