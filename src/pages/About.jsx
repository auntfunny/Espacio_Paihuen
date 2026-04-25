import { Link } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import SectionHeaderDesign from "../components/SectionHeaderDesign";
import PageHeader from "../components/PageHeader";
import about from "../assets/svg/about.svg";
import ActivityCard from "../components/ActivityCard";

const About = () => {
  const activities = [
    {
      title: "Tinaja Rústica Personal",
      info: "Disfruta de un atardecer sentado en una tinaja caliente mirando al mar. Nuestras tinajas son calentadas a leña y personal por cada cabaña. Son perfectas para compartir un picadillo y un lindo puesto del sol",
    },
    {
      title: "Kayak Personal y Doble",
      info: "Explora el bahía Quillaipe en un kayak solo o con un compañero. Disfruta del lindo entorno y las aguas calmadas que tenemos aquí donde estamos protegidos de las olas fuertes."
    },
    {
      title: "Espacio Central",
      info: "Relajate en los espacios abiertos y pasea por nuestro hermoso Espacio Paihuen, disfrutando de los lindo pajaros como el Colibrí Chico que nos visitan todos los días",
    }
  ];
  const headerInfo = {
    image: about,
    label: "Carretera Austral, Chile",
    title: "Sobre Nosotros",
    message:
      "Descubre la esencia de Espacio Paihuen, donde la naturaleza se encuentra con el confort",
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 gap-16 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <section className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl/6 md:text-4xl/6 font-bold text-accgray">
                  Nuestra Historia
                </h2>
                <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
              </div>

              <p className="text-accgray/80 md:text-lg/7">
                Espacio Paihuen se encuentra en la hermosa Carretera Austral del
                sur de Chile, rodeado de naturaleza y paisajes impresionantes y
                situado frente al mar. Nuestro objetivo es ofrecer a los
                viajeros una experiencia única, combinando la comodidad de un
                alojamiento acogedor con la belleza natural que nos rodea.
              </p>

              <p className="text-accgray/80 md:text-lg/7">
                En Espacio Paihuen, creemos en la importancia de conectar con la
                naturaleza y disfrutar de momentos de tranquilidad en un entorno
                inspirador. Ven y descubre todo lo que tenemos para ofrecerte en
                este rincón especial del mundo.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-acclight/50 px-4 py-2 rounded-full border border-acclight/30">
                  <svg
                    className="w-4 h-4 text-accgreendark"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm font-medium text-accgray">
                    Naturaleza Pura
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-acclight/50 px-4 py-2 rounded-full border border-acclight/30">
                  <svg
                    className="w-4 h-4 text-accblue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-sm font-medium text-accgray">
                    Comodidad Total
                  </span>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085844/Reja_de_Frente_2_tdmugg.jpg"
                  alt="Vista al mar de la propiedad"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                <div className="absolute top-4 left-4 bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full border border-acclight/30">
                  <span className="text-sm font-medium text-accgray">
                    Vista Panorámica
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085844/Playa_x9nqzl.jpg"
                  alt="Vista al mar de la propiedad"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                <div className="absolute bottom-4 left-4 bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full border border-acclight/30">
                  <span className="text-sm font-medium text-accgray">
                    Costa Austral
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl/6 md:text-4xl/6 font-bold text-accgray">
                  Nuestro Espacio
                </h2>
                <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
              </div>

              <p className="text-accgray/80 md:text-lg/7">
                Contamos con una vista preciosa del mar, y con tres cabañas
                equipadas con todo lo necesario para una estancia cómoda y
                relajante. Cada cabaña está diseñada para brindar un ambiente
                acogedor y armonioso, permitiéndote disfrutar de la belleza
                natural que nos rodea.
              </p>

              <p className="text-accgray/80 md:text-lg/7">
                Además, ofrecemos áreas comunes donde puedes compartir momentos
                especiales con otros viajeros o simplemente relajarte mientras
                contemplas el paisaje marino. En Espacio Paihuen, nos esforzamos
                por crear un ambiente cálido y acogedor para que cada huésped se
                sienta como en casa durante su estancia con nosotros.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-linear-to-br from-acclight to-acclight/80 p-4 rounded-2xl border border-acclight/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-accblue to-accgreendark rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-acclight"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13H5v-2h14v2z" />
                        <path d="M3 6v2h18V6H3zm0 12h18v-2H3v2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accgray">
                        3 Cabañas
                      </div>
                      <div className="text-xs text-accgray/70">
                        Espacios Privados
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-acclight to-acclight/80 p-4 rounded-2xl border border-acclight/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-accgreendark to-accgreenlight rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-acclight"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accgray">
                        Vista al Mar
                      </div>
                      <div className="text-xs text-accgray/70">Panorámica</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl/6 md:text-4xl/6 font-bold text-accgray">
                  Nuestras Cabañas
                </h2>
                <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
              </div>

              <p className="text-accgray/80 md:text-lg/7">
                Nuestras cabañas están diseñadas para ofrecerte una experiencia
                de alojamiento única y confortable. Cada cabaña cuenta con una
                decoración acogedora y moderna, equipada con todas las
                comodidades necesarias para que tu estancia sea inolvidable.
              </p>

              <p className="text-accgray/80 md:text-lg/7">
                Están hechas con un solo ambiente adentro, con un espacio amplio
                y bien iluminado. Cada una tiene un ventanal que da a la
                naturaleza y al mar. También tienen una terraza para poder estar
                rodeado de la naturaleza, con una tinaja rústica por cada
                cabaña.
              </p>

              <p className="text-accgray/80 md:text-lg/7">
                Disfruta de la tranquilidad del entorno natural mientras te
                relajas en tu cabaña, con vistas impresionantes al mar y a la
                naturaleza circundante. En Espacio Paihuen, nos esforzamos por
                brindarte un espacio donde puedas desconectar, recargar energías
                y crear recuerdos inolvidables durante tu visita a la Carretera
                Austral.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="bg-linear-to-r from-accgreenlight/20 to-accgreendark/20 px-4 py-2 rounded-full text-sm font-medium text-accgray border border-acclight/30">
                  Terraza Privada
                </span>
                <span className="bg-linear-to-r from-accblue/20 to-accgreendark/20 px-4 py-2 rounded-full text-sm font-medium text-accgray border border-acclight/30">
                  Tinaja Rústica
                </span>
                <span className="bg-linear-to-r from-accgreendark/20 to-accgreenlight/20 px-4 py-2 rounded-full text-sm font-medium text-accgray border border-acclight/30">
                  Vista Panorámica
                </span>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085842/Cama_Naranja_2_ue1p4t.jpg"
                  alt="Cama de la cabaña"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                <div className="absolute top-4 right-4 bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full border border-acclight/30">
                  <span className="text-sm font-medium text-accgray">
                    Comodidad Interior
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-12 items-center justify-center w-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl/6 md:text-4xl/6 font-bold text-accgray">
              Nuestras Actividades
            </h2>
            <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
            {activities.map((activity, index) => (
              <ActivityCard key={index} title={activity.title} info={activity.info} />
            ))}
          </div>
        </section>

        <section className="w-full max-w-4xl text-center space-y-8 pt-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-accgray">
              ¿Listo para tu Escape Perfecto?
            </h2>
            <p className="text-accgray/80 md:text-lg max-w-2xl mx-auto">
              Ven y descubre la magia de Espacio Paihuen, donde cada momento se
              convierte en un recuerdo inolvidable
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/reserve"
              className="bg-linear-to-r from-accblue to-accgreendark text-acclight px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-out"
            >
              Reservar Ahora
            </Link>
          </div>
        </section>
      </div>
      <ContactUs />
    </div>
  );
};

export default About;
