import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

const Header = () => {
  return (
    <header className="absolute top-6 z-30 flex justify-center items-center w-full bg-accgreendarktransparent">
      <nav className="flex justify-between items-center py-2 px-4 w-full lg:max-w-5xl">
        <Link to="/">
          <img
            src="/images/Logo_sin_background.png"
            alt="Espacio Paihuen"
            className="size-16 md:size-24 bg-acclighttransparent rounded-full hover:bg-acclight hover:cursor-pointer transition-colors duration-300 ease-in-out"
          />
        </Link>
        <MenuMobile />
        <MenuDesktop />
      </nav>
    </header>
  );
};

export default Header;
