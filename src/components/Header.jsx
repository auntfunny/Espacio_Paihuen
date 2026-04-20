import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

const Header = () => {
  return (
    <header className="fixed top-2 z-40 w-full bg-linear-to-b from-acclighttransparent to-accgreendark/60 backdrop-blur-md border-b border-accgreendark/20 shadow-sm">
      <nav className="flex justify-between items-center py-4 px-6 lg:px-8 max-w-7xl mx-auto">
        <Link to="/" className="group">
          <img
            src="/images/Logo_sin_bg.png"
            alt="Espacio Paihuen"
            className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-linear-to-br from-acclight to-acclight/80 p-1 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-out"
          />
        </Link>
        <MenuMobile />
        <MenuDesktop />
      </nav>
    </header>
  );
};

export default Header;
