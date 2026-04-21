import { useState } from "react";
import PhotoList from "../components/PhotoList";
import SectionHeaderDesign from "../components/SectionHeaderDesign";
import ContactUs from "../components/ContactUs";

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
  fauna = [
    "Colibri_Thumbnail.png",
    "Flamencos_Thumbnail.png",
    "Pajaros_Thumbnail.png",
  ];

const Photos = () => {
  const [activePhoto, setactivePhoto] = useState(null);

  const hideImage = (event) => {
    const image = event.target.closest("img, video");
    if (!image) {
      setactivePhoto(null);
    }
  };


  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      {activePhoto && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={hideImage}
        >
          {activePhoto.includes("Thumbnail") ? (
            <video
              src={`/videos/${activePhoto.split("_")[0]}.mp4`}
              alt={`${activePhoto.split(".")[0].split("_").join(" ")}`}
              className="max-w-7/8 max-h-7/8 object-contain rounded hover:cursor-default"
              controls
            />
          ) : (
            <img
              src={`/images/${activePhoto}`}
              alt={`${activePhoto.split(".")[0].split("_").join(" ")}`}
              className="max-w-7/8 max-h-7/8 object-contain rounded hover:cursor-default"
            />
          )}
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center pt-32 pb-12 px-4 md:px-8">
        <div className="text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-linear-to-r from-accgreenlight/20 to-accblue/20 px-6 py-3 rounded-full border border-acclight/30">
            <svg
              className="w-5 h-5 text-accgreendark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium text-accgray">
              Galería Visual
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-title2 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight bg-clip-text text-transparent leading-tight">
            Nuestras Fotos
          </h1>

          <p className="text-lg text-accgray/80 max-w-2xl mx-auto">
            Un recorrido visual por los rincones y la vida silvestre que hacen
            de Espacio Paihuen un lugar único.
          </p>
          <SectionHeaderDesign />
        </div>

        <div className="w-full max-w-7xl mt-16 space-y-20">
          <section className="space-y-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accgray">
                Las Cabañas
              </h2>
              <div className="w-20 h-1.5 bg-linear-to-r from-accblue to-accgreenlight rounded-full"></div>
              <p className="text-accgray/70 max-w-xl">
                Interiores acogedores y vistas diseñadas para el descanso total.
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-3xl border border-white/50 shadow-xl">
              <PhotoList images={cabin} setactivePhoto={setactivePhoto} />
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accgray">
                El Entorno
              </h2>
              <div className="w-20 h-1.5 bg-linear-to-r from-accgreenlight to-accgreendark rounded-full"></div>
              <p className="text-accgray/70 max-w-xl">
                Donde el bosque nativo se encuentra con la inmensidad del mar.
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-3xl border border-white/50 shadow-xl">
              <PhotoList images={environment} setactivePhoto={setactivePhoto} />
            </div>
          </section>

          <section className="space-y-8 pb-20">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accgray">
                La Fauna
              </h2>
              <div className="w-20 h-1.5 bg-linear-to-r from-accgreendark to-accblue rounded-full"></div>
              <p className="text-accgray/70 max-w-xl">
                Nuestros vecinos silvestres que visitan la propiedad a diario.
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-3xl border border-white/50 shadow-xl">
              <PhotoList images={fauna} setactivePhoto={setactivePhoto} />
            </div>
          </section>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Photos;
