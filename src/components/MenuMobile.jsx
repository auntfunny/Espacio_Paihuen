import { useState } from "react";
import { Link } from "react-router-dom";

const MenuMobile = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleClick = () => {
    setMenuToggle(false)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setMenuToggle(!menuToggle)}
        className="relative z-50 p-2 focus:outline-none focus:ring-2 focus:ring-accblue/50 text-accgray hover:text-accblue transition-colors duration-300 ease-out rounded-md"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-between w-5 h-4 transition-all duration-300">
          <div className={`bg-current h-0.5 w-full rounded transition-all duration-300 origin-left ${menuToggle ? 'translate-x-0.75 rotate-46' : ''}`}></div>
          <div className={`bg-current h-0.5 w-full rounded transition-all duration-300 ${menuToggle ? 'opacity-0 -translate-x-2' : ''}`}></div>
          <div className={`bg-current h-0.5 w-full rounded transition-all duration-300 origin-left ${menuToggle ? 'translate-x-0.75 -rotate-46' : ''}`}></div>
        </div>
      </button>
      <nav
        className={`absolute top-12 right-6 z-50 overflow-hidden flex flex-col w-48 bg-acclight rounded-xl shadow-lg border border-acclight/20 transition-all duration-500 ease-out ${menuToggle ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}`}
      >
        <Link
          to="/reserva"
          onClick={handleClick}
          className="relative py-3 px-4 border-b border-acclight/30 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 focus:outline-none focus:ring-2 focus:ring-accblue/50 transition-all duration-300 ease-out group"
        >
          Reservar
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
        <Link
          to="/sobre"
          onClick={handleClick}
          className="relative py-3 px-4 border-b border-acclight/30 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 focus:outline-none focus:ring-2 focus:ring-accblue/50 transition-all duration-300 ease-out group"
        >
          Sobre
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
        <Link
          to="/atracciones"
          onClick={handleClick}
          className="relative py-3 px-4 border-b border-acclight/30 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 focus:outline-none focus:ring-2 focus:ring-accblue/50 transition-all duration-300 ease-out group"
        >
          Atracciones
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
        <Link
          to="/ubicacion"
          onClick={handleClick}
          className="relative py-3 px-4 border-b border-acclight/30 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 focus:outline-none focus:ring-2 focus:ring-accblue/50 transition-all duration-300 ease-out group"
        >
          Ubicación
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
        <Link
          to="/fotos"
          onClick={handleClick}
          className="relative py-3 px-4 text-accgray font-medium hover:text-accblue hover:bg-accblue/5 focus:outline-none focus:ring-2 focus:ring-accblue/50 transition-all duration-300 ease-out group"
        >
          Fotos
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-linear-to-r from-accblue to-accgreenlight group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
        </Link>
      </nav>
      {menuToggle &&
        <div onClick={() => setMenuToggle(false)} className="fixed inset-0 h-screen z-45 bg-black/50"></div>
      }
    </div>
  );
};

export default MenuMobile;
