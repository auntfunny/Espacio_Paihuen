import { Link } from "react-router-dom";

const MenuDesktop = () => {
  return (
    <ul className="hidden md:flex text-acclighttransparent text-xl">
      <Link
        to="/reserve"
        className="py-2 px-4 hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300 ease-in-out"
      >
        Reservar
      </Link>
      <Link
        to="/about"
        className="py-2 px-4 hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300 ease-in-out"
      >
        Sobre
      </Link>
      <Link
        to="/location"
        className="py-2 px-4 hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300 ease-in-out"
      >
        Ubicación
      </Link>
      <Link
        to="/photos"
        className="py-2 px-4 hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300 ease-in-out"
      >
        Fotos
      </Link>
    </ul>
  );
};

export default MenuDesktop;
