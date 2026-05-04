import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (lng) => i18n.language.startsWith(lng);

  return (
    <div className="flex items-center justify-center gap-3 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-sm transition-all duration-300">
      <button
        onClick={() => changeLanguage("es")}
        className={`relative flex items-center justify-center px-4 py-2 md:p-0 text-sm font-bold tracking-tighter transition-all duration-300 hover:cursor-pointer ${
          isActive("es")
            ? "scale-125 drop-shadow-[0_0_8px_#BCCF50b0]"
            : "opacity-90 grayscale hover:opacity-100 hover:grayscale-0"
        }`}
      >
        <img src="/images/chile.png" alt="Español" className="w-6 rounded" />
      </button>
      <div className="w-px h-3 bg-accgray/20"></div>

      <button
        onClick={() => changeLanguage("en")}
        className={`relative flex items-center justify-center px-4 py-2 md:p-0 text-sm font-bold tracking-tighter transition-all duration-300 hover:cursor-pointer ${
          isActive("en")
            ? "scale-125 drop-shadow-[0_0_8px_#BCCF50b0]"
            : "opacity-90 grayscale hover:opacity-100 hover:grayscale-0"
        }`}
      >
        <img
          src="/images/united-states.png"
          alt="English"
          className="w-6 rounded"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
