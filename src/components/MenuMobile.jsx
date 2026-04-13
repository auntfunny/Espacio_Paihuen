import { useState } from "react";
import { Link } from "react-router-dom";

const MenuMobile = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="md:hidden relative text-accgray">
      <button
        onClick={() => setMenuToggle(!menuToggle)}
        className="relative z-50 p-2 focus:outline-none text-acclighttransparent hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300 ease-in-out"
      >
        <div className="flex flex-col justify-between w-6 h-4.5 transition-all duration-300">
          <div className={`bg-current h-0.5 w-full rounded transition-all duration-300 origin-left ${menuToggle ? 'rotate-42' : ''}`}></div>
          <div className={`bg-current h-0.5 w-full rounded transition-all duration-300 ${menuToggle ? 'opacity-0 -translate-x-2' : ''}`}></div>
          <div className={`bg-current h-0.5 w-full rounded transition-all duration-300 origin-left ${menuToggle ? '-rotate-42' : ''}`}></div>
        </div>
      </button>
      <ul
        className={`absolute top-12 right-6 z-50 overflow-hidden flex flex-col w-40 bg-acclight rounded-lg text-xl  transition-all duration-500 ease-in-out ${menuToggle ? "max-h-96 shadow-2xl translate-y-0" : "max-h-0 -translate-y-4"} `}
      >
        
        <Link
          to="/reserve"
          onClick={() => setMenuToggle(false)}
          className="py-2 px-4 border-b border-accblue hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300 ease-in-out"
        >
          Reservar
        </Link>
        <Link
          to="/about"
          onClick={() => setMenuToggle(false)}
          className="py-2 px-4 border-b border-accblue hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300 ease-in-out"
        >
          Sobre
        </Link>
        <Link
          to="/location"
          onClick={() => setMenuToggle(false)}
          className="py-2 px-4 border-b border-accblue hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300 ease-in-out"
        >
          Ubicación
        </Link>
        <Link
          to="/photos"
          onClick={() => setMenuToggle(false)}
          className="py-2 px-4 hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300 ease-in-out"
        >
          Fotos
        </Link>
      </ul>
      {menuToggle && 
      <div onClick={() => setMenuToggle(false)} className="fixed inset-0 w-screen h-screen z-40"></div>
      }
    </div>
  );
};

export default MenuMobile;
