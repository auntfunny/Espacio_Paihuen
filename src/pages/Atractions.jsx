import ContactUs from "../components/ContactUs";
import PageHeader from "../components/PageHeader";
import SectionHeaderDesign from "../components/SectionHeaderDesign";
import map from "../assets/svg/map.svg"

const Atractions = () => {

  const headerInfo = {
    image: map,
    label: "Explora la Región de Los Lagos",
    title: "Atracciones Cercanas",
    message: "Ubicados estratégicamente en la Carretera Austral, somos el punto de partida perfecto para descubrir tesoros naturales."
  }

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      
      <div className="relative z-10 flex flex-col items-center pt-32 pb-16 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <div className="w-full max-w-7xl mt-20 space-y-24">
          
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-accgray">Parque Nacional Alerce Andino</h2>
                <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
              </div>
              <p className="text-accgray/80 md:text-lg/7">
                A tan solo 30 minutos de Espacio Paihuen. Disfruta de senderos de trekking 
                rodeados de alerces milenarios y descubre la magia de los Saltos de Chaica. 
                Un encuentro directo con la selva valdiviana.
              </p>
              <a 
                href="https://www.conaf.cl/parque_nacionales/parque-nacional-alerce-andino/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accblue font-semibold hover:text-accgreendark transition-colors"
              >
                Ver horarios e información oficial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
            <div className="relative order-1 lg:order-2 group">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img src="/images/Alerce_Andino.jpg" alt="Parque Alerce Andino" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute top-4 right-4 bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-accgray">30 MIN DE DISTANCIA</div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img src="/images/Puerto_Varas.jfif" alt="Puerto Varas" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute top-4 left-4 bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-accgray">50 MIN DE DISTANCIA</div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-accgray">Puerto Varas</h2>
                <div className="w-16 h-1 bg-linear-to-r from-accblue to-accgreendark rounded-full"></div>
              </div>
              <p className="text-accgray/80 md:text-lg/7">
                La "Ciudad de las Rosas" te espera a orillas del Lago Llanquihue. 
                Famosa por su arquitectura de influencia alemana y sus vistas inigualables 
                a los volcanes Osorno y Calbuco. Ideal para una tarde de gastronomía y paseo.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-20">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-accgray">Lago Chapo</h2>
                <div className="w-16 h-1 bg-linear-to-r from-accgreendark to-accgreenlight rounded-full"></div>
              </div>
              <p className="text-accgray/80 md:text-lg/7">
                Un impresionante cuerpo de agua cordillerano a los pies del imponente 
                Volcán Calbuco. Es el lugar perfecto para quienes buscan una belleza 
                natural más salvaje, rodeada de bosques vírgenes y aire puro de montaña.
              </p>
            </div>
            <div className="relative order-1 lg:order-2 group">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img src="/images/Lago_Chapo.jfif" alt="Lago Chapo" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute top-4 right-4 bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-accgray">50 MIN DE DISTANCIA</div>
            </div>
          </section>

        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Atractions;