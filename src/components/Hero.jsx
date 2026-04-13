import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex justify-center items-center min-h-screen text-acclight text-4xl"
    >
      <img
        src="/images/De_Frente_2.jpeg"
        alt="Espacio Paihuen"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-40 flex flex-col justify-center items-center gap-4">
        <p>Tu espacio de descanso</p>
        <h1 className="text-accgreenlight font-bold">Paihuen</h1>
      </div>
      <Link to="/reserve" className="absolute bottom-24 bg-accblue text-acclight text-lg py-2 px-4 rounded-lg hover:bg-accgray hover:cursor-pointer transition-colors duration-300 ease-in-out">
        Reservar ahora
      </Link>
    </section>
  );
};

export default Hero;
