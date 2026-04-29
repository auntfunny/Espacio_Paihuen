import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ContactUs from "../components/ContactUs";
import PageHeader from "../components/PageHeader";
import { supabase } from "../lib/supabase";
import { usePhoto } from "../context/PhotoContext";
import { useAuth } from "../context/AuthContext";
import PhotoSection from "../components/PhotoSection";
import { PhotoSectionSkeleton } from "../components/Skeletons";
import picture from "../assets/svg/picture.svg";
import PhotoModal from "../components/PhotoModal";
import SectionModal from "../components/SectionModal";
import ConfirmModal from "../components/ConfirmModal";

const Photos = () => {
  const { t } = useTranslation();
  const {
    activePhoto,
    setActivePhoto,
    newPhoto,
    deletePhoto,
    setDeletePhoto,
    confirmDeleteSection,
    setConfirmDeleteSection,
    handleDeleteSection,
  } = usePhoto();

  const { user } = useAuth();
  const [photoData, setPhotoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newSection, setNewSection] = useState(false);
  const [confirmDeletePhoto, setConfirmDeletePhoto] = useState(false);

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("sections").select(`
          section_id, name_es, created_at, caption_es, name_en, caption_en,
          media (
            media_id, section_id, media_type, thumb_url, created_at,
            video_details ( video_id, media_id, video_url, duration_seconds )
          )
        `);
        if (error) throw error;
        setPhotoData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    request();
  }, []);

  const hideImage = (event) => {
    const image = event.target.closest("img, video, button");
    if (!image) {
      setActivePhoto(null);
    }
  };

  const cancelPhoto = () => {
    setConfirmDeletePhoto(false);
  };
  const cancelSection = () => {
    setConfirmDeleteSection(false);
  };

  const deleteSection = async (section) => {
    try {
      const id = await handleDeleteSection(section);
      setPhotoData((prev) => prev.filter((item) => item.section_id !== id));
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleDelete = async (photo) => {
    setActivePhoto(null);
    setConfirmDeletePhoto(false);
    setDeletePhoto(photo);

    const urlParts = photo.thumb_url.split("/");
    const fileNameWithExtension = urlParts[urlParts.length - 1];
    const imagePublicId = fileNameWithExtension.split(".")[0];

    try {
      const { data, error: funcError } = await supabase.functions.invoke(
        "delete-cloudinary",
        {
          body: {
            publicId: imagePublicId,
            resourceType: "image",
          },
        },
      );
      if (photo.media_type === "video") {
        const videoUrlParts = photo.video_details[0].video_url.split("/");
        const videoFileNameWithExtension =
          videoUrlParts[videoUrlParts.length - 1];
        const videoPublicId = videoFileNameWithExtension.split(".")[0];

        const { data: videoData, error: videoError } =
          await supabase.functions.invoke("delete-cloudinary", {
            body: {
              publicId: videoPublicId,
              resourceType: "video",
            },
          });

        if (videoError) throw videoError;
      }

      if (funcError) throw funcError;

      const { error: dbError } = await supabase
        .from("media")
        .delete()
        .eq("media_id", photo.media_id);

      if (dbError) throw dbError;

      setPhotoData((prev) =>
        prev.map((section) => ({
          ...section,
          media: section.media.filter((m) => m.media_id !== photo.media_id),
        })),
      );
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeletePhoto(null);
    }
  };

  const headerInfo = {
    image: picture,
    label: t("photos.header.label"),
    title: t("photos.header.title"),
    message: t("photos.header.message"),
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-12 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <div className="flex flex-col items-center gap-20 w-full max-w-7xl mt-16">
          {error ? (
            <div className="w-full text-center text-xl md:text-2xl text-accblue">
              {t("photos.error_message")}
            </div>
          ) : loading ? (
            <PhotoSectionSkeleton />
          ) : (
            photoData.map((section) => (
              <PhotoSection
                key={section.section_id}
                section={section}
                setPhotoData={setPhotoData}
              />
            ))
          )}

          {user?.role === "ADMIN" && (
            <button
              onClick={() => setNewSection(true)}
              className="group flex items-center justify-center gap-2 md:w-1/2 relative bg-linear-to-r from-accblue to-accgreendark text-acclight text-xl font-semibold py-4 px-8 rounded-full shadow-2xl hover:cursor-pointer hover:shadow-accblue/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accblue/50 transition-all duration-300 ease-out overflow-hidden" // classes omitted for brevity
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8 lg:size-10 relative z-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="relative z-10">
                {t("photos.admin.add_section")}
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-accgreendark to-accblue opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
            </button>
          )}
        </div>
      </div>
      <ContactUs />

      {confirmDeletePhoto && (
        <ConfirmModal
          title={t("photos.admin.delete_photo_confirm.title")}
          message={t("photos.admin.delete_photo_confirm.message")}
          onCancel={() => setConfirmDeletePhoto(false)}
          onConfirm={handleDelete}
          item={activePhoto}
        />
      )}
      {confirmDeleteSection && (
        <ConfirmModal
          title={t("photos.admin.delete_section_confirm.title")}
          message={t("photos.admin.delete_section_confirm.message")}
          onCancel={() => setConfirmDeleteSection(false)}
          onConfirm={deleteSection}
          item={confirmDeleteSection}
        />
      )}
      {newPhoto && (
        <PhotoModal photoData={photoData} setPhotoData={setPhotoData} />
      )}
      {newSection && (
        <SectionModal
          setNewSection={setNewSection}
          setPhotoData={setPhotoData}
        />
      )}
      {activePhoto && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-40 cursor-pointer"
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
          {user?.role === "ADMIN" && (
            <button
              type="button"
              onClick={() => setConfirmDeletePhoto(true)}
              className="absolute top-10 right-10 text-acclight hover:text-red-500 hover:cursor-pointer active:scale-125 transition-colors duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          )}
        </div>
      )}

    </div>
  );
};

export default Photos;
