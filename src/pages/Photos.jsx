import { useEffect, useState } from "react";
import PhotoList from "../components/PhotoList";
import SectionHeaderDesign from "../components/SectionHeaderDesign";
import ContactUs from "../components/ContactUs";
import PageHeader from "../components/PageHeader";
import { supabase } from "../lib/supabase";
import { usePhoto } from "../context/PhotoContext";
import { useAuth } from "../context/AuthContext"
import PhotoSection from "../components/PhotoSection";
import { PhotoSectionSkeleton } from "../components/Skeletons";
import picture from "../assets/svg/picture.svg"
import PhotoModal from "../components/PhotoModal";

const Photos = () => {
  const { activePhoto, setActivePhoto, newPhoto } = usePhoto();
  const { user } = useAuth();
  const [photoData, setPhotoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("sections").select(
          `
            section_id,
            name,
            created_at,
            caption,
            media (
              media_id,
              section_id,
              media_type,
              thumb_url,
              created_at,
              video_details (
                video_id,
                media_id,
                video_url,
                duration_seconds,
                resolution
              )
            )
          `,
        );

        if (error) {
          setError(error);
          throw error;
        }
        setPhotoData(data);
      } catch (err) {
        console.error("Something went wrong: ", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    request();
  }, []);

  const hideImage = (event) => {
    const image = event.target.closest("img, video");
    if (!image) {
      setActivePhoto(null);
    }
  };

  

  const headerInfo = {
    image: picture,
    label: "Galería Visual",
    title: "Nuestras Fotos",
    message:
      "Un recorrido visual por los rincones y la vida silvestre que hacen de Espacio Paihuen un lugar único.",
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      {activePhoto && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={hideImage}
        >
          {activePhoto.media_type === "video" ? (
            <video
              src={activePhoto.video_details[0].video_url}
              alt={`Video Title`}
              className="max-w-7/8 max-h-7/8 object-contain rounded hover:cursor-default"
              controls
            />
          ) : (
            <img
              src={activePhoto.thumb_url}
              alt={`Image Name`}
              className="max-w-7/8 max-h-7/8 object-contain rounded hover:cursor-default"
            />
          )}
        </div>
      )}
      {newPhoto && <PhotoModal />}
      <div className="relative z-10 flex flex-col items-center pt-32 pb-12 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <div className="flex flex-col gap-20 w-full max-w-7xl mt-16 ">
          {error ? (
            <div className="w-full text-center text-xl md:text-2xl text-accblue">Lo sentimos, algo en nuestro sistema falló. Por favor, intenta mas tarde.</div>
          ) : loading ? (
            <PhotoSectionSkeleton />
          ) : (
            photoData.map((section) => (
              <PhotoSection key={section.section_id} section={section} />
            ))
          )}
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default Photos;
