import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();

  return (
    <footer className="w-full bg-acclight backdrop-blur-md border-t-2 border-gray-200 shadow-sm mt-auto">
      <nav className="flex justify-between items-center py-6 px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          to="/"
          className="group focus:outline-none focus:ring-2 focus:ring-accblue/50 rounded-full"
        >
          <img
            src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1776871508/Logo_sin_bg_zaejfz.png"
            alt={t("footer.logo_alt")}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-linear-to-br from-acclight to-acclight/80 p-1 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-out"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/reserve"
            className="relative text-accgray font-medium hover:text-accblue transition-all duration-300 group"
          >
            {t("nav.reserve")}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>

          <Link
            to="/about"
            className="relative text-accgray font-medium hover:text-accblue transition-all duration-300 group"
          >
            {t("nav.about")}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>

          <Link
            to="/attractions"
            className="relative text-accgray font-medium hover:text-accblue transition-all duration-300 group"
          >
            {t("nav.attractions")}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>

          <Link
            to="/location"
            className="relative text-accgray font-medium hover:text-accblue transition-all duration-300 group"
          >
            {t("nav.location")}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>

          <Link
            to="/photos"
            className="relative text-accgray font-medium hover:text-accblue transition-all duration-300 group"
          >
            {t("nav.photos")}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>

          {user?.role === "ADMIN" || user?.role === "USER" ? (
            <Link
              onClick={logout}
              to="/login"
              className="relative text-accgray font-medium hover:text-accblue transition-all duration-300 group"
            >
              {t("nav.logout")}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="relative text-accgray font-medium hover:text-accblue transition-all duration-300 group"
            >
              {t("nav.login")}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
            </Link>
          )}
        </nav>

        <div className="text-right">
          <p className="text-xs text-accgray/70 font-medium">
            {t("footer.copyright")}
          </p>
          <p className="text-xs text-accgray/50">{t("footer.rights")}</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
