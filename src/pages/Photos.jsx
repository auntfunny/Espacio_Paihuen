import PhotoList from "../components/PhotoList";

const cabin = [
    "De_Frente.jpeg",
    "De_Frente_2.jpeg",
    "De_Frente_3.jpeg",
    "Bano.jpeg",
    "Cama_Azul.jpeg",
    "Cama_Naranja.jpeg",
    "Cama_Naranja_2.jpeg",
    "Cocina.jpeg",
    "Lavamanos.jpeg",
  ],
  environment = [
    "Humedal_1.jpeg",
    "Humedal_2.jpeg",
    "Humedal_3.jpeg",
    "Playa.jpeg",
    "Reja_de_Frente.jpeg",
    "Reja_de_Frente_2.jpeg",
    "Gente.jpeg",
    "Gente_de_Frente.jpeg",
    "Playa_Thumbnail.png",
  ],
  fauna = ["Colibri_Thumbnail.png", "Flamencos_Thumbnail.png", "Pajaros_Thumbnail.png"];

const Photos = () => {
  return (
    <div className="flex flex-col items-center pt-34 pb-10 md:pt-40 gap-8">
      <h2 className="text-2xl md:text-4xl font-bold text-accblue">
        Nuestras Fotos
      </h2>
      <h3 className="text-accgreendark text-xl md:text-3xl font-bold">
        Las Cabañas
      </h3>
      <PhotoList images={cabin} />
      <h3 className="text-accgreendark text-xl md:text-3xl font-bold">
        El Entorno
      </h3>
        <PhotoList images={environment} />
      <h3 className="text-accgreendark text-xl md:text-3xl font-bold">
        La Fauna
      </h3>
        <PhotoList images={fauna} />
    </div>
  );
};

export default Photos;
