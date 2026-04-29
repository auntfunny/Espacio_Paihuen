import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const MenuDesktop = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      <Link
        to="/reserve"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
      >
        {t("nav.reserve")}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
      </Link>
      <Link
        to="/about"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
      >
        {t("nav.about")}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
      </Link>
      <Link
        to="/attractions"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
      >
        {t("nav.attractions")}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
      </Link>
      <Link
        to="/location"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
      >
        {t("nav.location")}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
      </Link>
      <Link
        to="/photos"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
      >
        {t("nav.photos")}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
      </Link>
      {user?.role === "ADMIN" && (
        <Link
        to="/reservations"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
        >
          {t("nav.reservations")}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
      )}
      <LanguageSwitcher/>
    </nav>
  );
};

export default MenuDesktop;
