import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const MenuMobile = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = () => {
    setMenuToggle(false);
  };

  const handleLogout = () => {
    setMenuToggle(false);
    logout();
  };

  return (
    <div className="lg:hidden relative">
      <button
        onClick={() => setMenuToggle(!menuToggle)}
        className="relative z-50 p-2 focus:outline-none focus:ring-2 focus:ring-accblue/50 text-accgray hover:text-accblue transition-colors duration-300 ease-out rounded-md cursor-pointer"
        aria-label={t("nav.aria_label")}
      >
        <div className="flex flex-col justify-between w-5 h-4 transition-all duration-300">
          <div
            className={`bg-current h-0.5 w-full rounded transition-all duration-300 origin-left ${menuToggle ? "translate-x-0.75 rotate-46" : ""}`}
          ></div>
          <div
            className={`bg-current h-0.5 w-full rounded transition-all duration-300 ${menuToggle ? "opacity-0 -translate-x-2" : ""}`}
          ></div>
          <div
            className={`bg-current h-0.5 w-full rounded transition-all duration-300 origin-left ${menuToggle ? "translate-x-0.75 -rotate-46" : ""}`}
          ></div>
        </div>
      </button>

      <nav
        className={`absolute top-12 right-6 z-50 overflow-hidden flex flex-col w-48 bg-acclight rounded-xl shadow-lg border border-acclight/20 transition-all duration-500 ease-out ${menuToggle ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}`}
      >
        <Link
          to="/reserve"
          onClick={handleClick}
          className="relative py-3 px-4 border-b border-acclight/30 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 transition-all duration-300 group"
        >
          {t("nav.reserve")}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
        <Link
          to="/about"
          onClick={handleClick}
          className="relative py-3 px-4 border-b border-acclight/30 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 transition-all duration-300 group"
        >
          {t("nav.about")}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
        <Link
          to="/attractions"
          onClick={handleClick}
          className="relative py-3 px-4 border-b border-acclight/30 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 transition-all duration-300 group"
        >
          {t("nav.attractions")}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
        <Link
          to="/location"
          onClick={handleClick}
          className="relative py-3 px-4 border-b border-acclight/30 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 transition-all duration-300 group"
        >
          {t("nav.location")}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
        <Link
          to="/photos"
          onClick={handleClick}
          className="relative py-3 px-4 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 transition-all duration-300 group"
        >
          {t("nav.photos")}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
        {user?.role === "ADMIN" && (
          <Link
            to="/reservations"
            onClick={handleClick}
            className="relative py-3 px-4 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 transition-all duration-300 group"
          >
            {t("nav.reservations")}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
        )}
        {user?.role === "ADMIN" || user?.role === "USER" ? (
          <Link
            to="/login"
            onClick={handleLogout}
            className="relative py-3 px-4 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 transition-all duration-300 group"
          >
            {t("nav.logout")}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
        ) : (
          <Link
            to="/login"
            onClick={handleClick}
            className="relative py-3 px-4 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 transition-all duration-300 group"
          >
            {t("nav.login")}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
        )}
         <LanguageSwitcher />
      </nav>
      {menuToggle && (
        <div
          onClick={() => setMenuToggle(false)}
          className="fixed inset-0 h-screen z-45 bg-black/50"
        ></div>
      )}
    </div>
  );
};

export default MenuMobile;
