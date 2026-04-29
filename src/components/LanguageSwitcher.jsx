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
        className={`px-4 py-2 md:p-0 text-sm font-bold tracking-tighter transition-all duration-300 hover:cursor-pointer ${
          isActive("es")
            ? "text-accblue scale-110"
            : "text-accgray/50 hover:text-accgray"
        }`}
      >
        ES
      </button>
      
      <div className="w-px h-3 bg-accgray/20"></div>

      <button
        onClick={() => changeLanguage("en")}
        className={`px-4 py-2 md:p-0 text-sm font-bold tracking-tighter transition-all duration-300 hover:cursor-pointer ${
          isActive("en")
            ? "text-accblue scale-110"
            : "text-accgray/50 hover:text-accgray"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
