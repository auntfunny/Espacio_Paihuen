import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-acclight backdrop-blur-md border-t-2 border-gray-200 shadow-sm mt-auto">
      <nav className="flex justify-between items-center py-6 px-6 lg:px-8 max-w-7xl mx-auto">
        <Link to="/" onClick={scrollToTop} className="group  focus:outline-none focus:ring-2 focus:ring-accblue/50 rounded-full">
          <img
            src="/images/Logo_sin_bg.png"
            alt="Espacio Paihuen"
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-linear-to-br from-acclight to-acclight/80 p-1 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300 ease-out"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            onClick={scrollToTop}
            to="/reserva"
            className="relative text-accgray font-medium hover:text-accblue focus:outline-none focus:ring-2 focus:ring-accblue/50 transition-all duration-300 ease-out group"
          >
            Reservar
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
          <Link
            onClick={scrollToTop}
            to="/sobre"
            className="relative text-accgray font-medium hover:text-accblue focus:outline-none focus:ring-2 focus:ring-accblue/50 transition-all duration-300 ease-out group"
          >
            Sobre
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
          <Link
            onClick={scrollToTop}
            to="/atracciones"
            className="relative text-accgray font-medium hover:text-accblue focus:outline-none focus:ring-2 focus:ring-accblue/50 transition-all duration-300 ease-out group"
          >
            Atracciones
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
          <Link
            onClick={scrollToTop}
            to="/ubicacion"
            className="relative text-accgray font-medium hover:text-accblue focus:outline-none focus:ring-2 focus:ring-accblue/50 transition-all duration-300 ease-out group"
          >
            Ubicación
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
          <Link
            onClick={scrollToTop}
            to="/fotos"
            className="relative text-accgray font-medium hover:text-accblue focus:outline-none focus:ring-2 focus:ring-accblue/50 transition-all duration-300 ease-out group"
          >
            Fotos
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
          </Link>
        </nav>
        <div className="text-right">
          <p className="text-xs text-accgray/70 font-medium">
            ©2026 Espacio Paihuen
          </p>
          <p className="text-xs text-accgray/50">
            Todos los derechos reservados
          </p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
