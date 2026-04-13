import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex flex-col justify-center items-center gap-6 pb-8 w-full min-h-48 bg-linear-to-r from-accgreendark to-accgreenlight text-accgray">
      <div className="flex justify-evenly items-center w-full p-3">
        <p className="text-xs md:text-sm">
          ©2026 Espacio Paihuen. Todos los derechos reservados.
        </p>
        <Link to="/" onClick={scrollToTop}>
          <img
            src="/images/Logo_sin_background.png"
            alt="Espacio Paihuen"
            className="size-18 rounded-full bg-acclighttransparent hover:bg-acclight hover:cursor-pointer transition-colors duration-200 ease-in-out"
          />
        </Link>
      </div>
      <nav className="w-full flex justify-center items-center">
        <ul className="flex gap-4">
          <li>
            <Link
              onClick={scrollToTop}
              to="/reserve"
              className="text-sm hover:underline hover:text-accblue transition-colors duration-200 ease-in-out"
            >
              Reservar
            </Link>
          </li>
          <li>
            <Link
              onClick={scrollToTop}
              to="/about"
              className="text-sm hover:underline hover:text-accblue transition-colors duration-200 ease-in-out"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              onClick={scrollToTop}
              to="/location"
              className="text-sm hover:underline hover:text-accblue transition-colors duration-200 ease-in-out"
            >
              Ubicación
            </Link>
          </li>
          <li>
            <Link
              onClick={scrollToTop}
              to="/photos"
              className="text-sm hover:underline hover:text-accblue transition-colors duration-200 ease-in-out"
            >
              Fotos
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
