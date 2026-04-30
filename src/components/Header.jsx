import { Link } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import { useAuth } from "../context/AuthContext";
import ProfileLink from "./ProfileLink";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="fixed top-2 z-40 w-full bg-linear-to-b from-acclighttransparent to-accgreendark/60 backdrop-blur-md  shadow-sm">
      <nav className="flex justify-between items-center py-4 px-6 lg:px-8 max-w-7xl mx-auto">
        <Link to="/" className="group">
          <img
            src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1776871508/Logo_sin_bg_zaejfz.png"
            alt="Espacio Paihuen"
            className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-linear-to-br from-acclight to-acclight/80 p-1 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-out"
          />
        </Link>
        <div className="flex gap-2">
          <MenuDesktop />
          {(user?.role === "ADMIN" || user?.role === "USER") && <ProfileLink />}
          <MenuMobile />
        </div>
      </nav>
    </header>
  );
};

export default Header;
