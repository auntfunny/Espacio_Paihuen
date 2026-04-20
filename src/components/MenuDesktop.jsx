import { Link } from "react-router-dom";

const MenuDesktop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="hidden md:flex items-center space-x-1">
      <Link
        onClick={scrollToTop}
        to="/reserva"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
      >
        Reservar
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
      </Link>
      <Link
        onClick={scrollToTop}
        to="/sobre"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
      >
        Sobre
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
      </Link>
      <Link
        onClick={scrollToTop}
        to="/atracciones"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
      >
        Atracciones
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
      </Link>
      <Link
        onClick={scrollToTop}
        to="/ubicacion"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
      >
        Ubicación
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
      </Link>
      <Link
        onClick={scrollToTop}
        to="/fotos"
        className="relative px-4 py-2 text-accgray font-medium rounded-lg hover:text-accblue hover:bg-accblue/5 transition-all duration-300 ease-out group"
      >
        Fotos
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
      </Link>
    </nav>
  );
};

export default MenuDesktop;
