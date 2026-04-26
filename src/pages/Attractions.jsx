import ContactUs from "../components/ContactUs";
import PageHeader from "../components/PageHeader";
import SectionHeaderDesign from "../components/SectionHeaderDesign";
import map from "../assets/svg/map.svg"
import AttractionSection from "../components/AttractionSection";

const attract = [
  {
    id: 1,
    title: "Parque Nacional Alerce Andino",
    content: "A tan solo 30 minutos de Espacio Paihuen. Disfruta de senderos de trekking rodeados de alerces milenarios y descubre la magia de los Saltos de Chaica. Un encuentro directo con la selva valdiviana.",
    image: "/images/Alerce_Andino.jpg",
    distance: "30 MIN",
    link: "https://www.conaf.cl/parque_nacionales/parque-nacional-alerce-andino/",
  },
  {
    id: 2,
    title: "Caleta La Arena",
    content: "Caleta La Arena es el punto de partida de la Carretera Austral, ubicado a 45 km de Puerto Montt. Destaca por su conexión clave mediante el ferry hacia Caleta Puelche y su famosa merluza frita en puestos locales. Es una parada estratégica e icónica que combina logística de viaje con auténtico sabor marino.",
    image: "/images/Caleta.jpg",
    distance: "30 MIN",
    link: "",
  },
  {
    id: 3,
    title: "Ruta de las Tradiciones",
    content: "Durante los meses de verano en la Carretera Austral, disfruta de la cultura y las tradiciones del sur al visitar las ferias costumbristas que se llevan a cabo en distintos pueblos cada fin de semana. Siempre hay rica comida, como asado de cordero y empanadas al horno y fritas, y entretención de música típica en viva y bailes todo el día",
    image: "/images/Costumbrista.webp",
    distance: "5-30 MIN",
    link: "",
  },
  {
    id: 4,
    title: "Puerto Varas",
    content: 'La "Ciudad de las Rosas" te espera a orillas del Lago Llanquihue. Famosa por su arquitectura de influencia alemana y sus vistas inigualables a los volcanes Osorno y Calbuco. Ideal para una tarde de gastronomía y paseo.',
    image: "/images/Puerto_Varas.jpg",
    distance: "50 MIN",
    link: "",
  },
  {
    id: 5,
    title: "Lago Chapo",
    content: "Un impresionante cuerpo de agua cordillerano a los pies del imponente Volcán Calbuco. Es el lugar perfecto para quienes buscan una belleza natural más salvaje, rodeada de bosques vírgenes y aire puro de montaña.",
    image: "/images/Lago_Chapo.jpg",
    distance: "50 MIN",
    link: "",
  },
  {
    id: 6,
    title: "Termas de Pichicolo",
    content: "Las Termas de Pichicolo son un santuario natural de relajación ubicado a unos 9 km antes de llegar a Hornopirén. Este destino es ideal para quienes buscan desconectarse del ruido y sumergirse en un entorno de bosque nativo.",
    image: "/images/Pichicolo.jpeg",
    distance: "1 H 40 MIN",
    link: "https://termasdepichicolo.cl/",
  },
  {
    id: 7,
    title: "Hornopiren",
    content: 'Hornopirén es la capital de la comuna de Hualaihué y es mundialmente conocida como la "Puerta de Entrada Norte a la Carretera Austral". Esta localidad combina la majestuosidad de la cordillera de los Andes con el mar de los fiordos patagónicos.',
    image: "/images/Hornopiren.webp",
    distance: "1 H 50 MIN",
    link: "",
  },
  {
    id: 8,
    title: "Saltos de Petrohúe",
    content: 'Los Saltos de Petrohué son uno de los atractivos naturales más emblemáticos de Chile, ubicados en el corazón del Parque Nacional Vicente Pérez Rosales, el más antiguo del país. Estas cascadas destacan por sus aguas de un intenso color esmeralda y turquesa que fluyen sobre formaciones de lava basáltica originadas por las erupciones del volcán Osorno.',
    image: "/images/Petrohue.jpg",
    distance: "1 H 30 MIN",
    link: "https://www.conaf.cl/parque_nacionales/parque-nacional-vicente-perez-rosales/",
  },
  {
    id: 9,
    title: "Termas de Cochamó",
    content: 'Las Termas Cochamó destacan por su innovadora talasoterapia, que fusiona aguas termales con agua de mar mineralizada frente al estuario. Ofrecen una experiencia premium con piscinas y tinajas privadas insertas en un bosque nativo, garantizando tranquilidad mediante cupos limitados. Su acceso es directo por ruta pavimentada, siendo el refugio ideal para relajarse con total comodidad tras explorar la zona.',
    image: "/images/Cochamo.jpg",
    distance: "2 H",
    link: "https://termascochamo.com/",
  },
  {
    id: 10,
    title: "Chiloe",
    content: 'Chiloé es un archipiélago mágico famoso por su identidad cultural única, que mezcla mitología, tradiciones madereras y paisajes de colinas verdes frente al mar. Sus puntos fuertes son las iglesias de madera (Patrimonio de la Humanidad), los pintorescos palafitos de colores y una gastronomía icónica basada en el curanto. Es un destino donde la naturaleza salvaje de sus parques nacionales convive con una atmósfera espiritual y legendaria inigualable.',
    image: "/images/Chiloe.jpg",
    distance: "2 H",
    link: "",
  },
]

const Attractions = () => {

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
          
          {attract.map((item, index) => (
            <AttractionSection key={item.id} attraction={item} style={index % 2} />
          ))}

        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Attractions;