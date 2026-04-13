const About = () => {
  return (
    <div className="flex flex-col items-center pt-34 pb-10 md:pt-40 gap-8">
      <h2 className="text-2xl md:text-4xl font-bold text-accblue">
        Sobre Nosotros
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <p className="text-center lg:text-end text-accgray md:text-lg md:max-w-lg lg:max-w-xl px-4">
          Espacio Paihuen se encuentra en la hermosa Carretera Austral del sur
          de Chile, rodeado de naturaleza y paisajes impresionantes y situado
          frente al mar. Nuestro objetivo es ofrecer a los viajeros una
          experiencia única, combinando la comodidad de un alojamiento acogedor
          con la belleza natural que nos rodea. En Espacio Paihuen, creemos en
          la importancia de conectar con la naturaleza y disfrutar de momentos
          de tranquilidad en un entorno inspirador. Ven y descubre todo lo que
          tenemos para ofrecerte en este rincón especial del mundo.
        </p>
        <img
          src="/images/Reja_de_Frente_2.jpeg"
          alt="Vista al mar de la propiedad"
          className="w-2xs md:w-md rounded-lg shadow-lg border-4 border-accgray/80"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-accgreendark underline">
        Nuestro Espacio
      </h3>
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-8">
        <p className="text-center lg:text-start text-accgray md:max-w-lg lg:max-w-xl px-4">
          Contamos con una vista preciosa del mar, y con tres cabañas equipadas
          con todo lo necesario para una estancia cómoda y relajante. Cada
          cabaña está diseñada para brindar un ambiente acogedor y armonioso,
          permitiéndote disfrutar de la belleza natural que nos rodea. Además,
          ofrecemos áreas comunes donde puedes compartir momentos especiales con
          otros viajeros o simplemente relajarte mientras contemplas el paisaje
          marino. En Espacio Paihuen, nos esforzamos por crear un ambiente
          cálido y acogedor para que cada huésped se sienta como en casa durante
          su estancia con nosotros.
        </p>
        <img
          src="/images/Playa.jpeg"
          alt="Vista al mar de la propiedad"
          className="w-2xs md:w-md rounded-lg shadow-lg border-4 border-accgray/80 mb-4"
        />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-accgreendark underline">
        Nuestras Cabañas
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <p className="text-center lg:text-end text-accgray md:max-w-lg lg:max-w-xl px-4">
          Nuestras cabañas están diseñadas para ofrecerte una experiencia de
          alojamiento única y confortable. Cada cabaña cuenta con una decoración
          acogedora y moderna, equipada con todas las comodidades necesarias
          para que tu estancia sea inolvidable. Están hechas con un solo
          ambiente adentro, con un espacio amplio y bien iluminado. Cada una
          tiene un ventanal que da a la naturaleza y al mar. También tienen una
          terraza para poder estar rodeado de la naturaleza, con una tinaja
          rústica por cada cabaña. Disfruta de la tranquilidad del entorno
          natural mientras te relajas en tu cabaña, con vistas impresionantes al
          mar y a la naturaleza circundante. En Espacio Paihuen, nos esforzamos
          por brindarte un espacio donde puedas desconectar, recargar energías y
          crear recuerdos inolvidables durante tu visita a la Carretera Austral.
        </p>
        <img
          src="/images/Cama_Naranja_2.jpeg"
          alt="Cama de la cabaña"
          className="w-2xs md:w-md rounded-lg shadow-lg border-4 border-accgray/80 mb-4"
        />
      </div>
    </div>
  );
};

export default About;
