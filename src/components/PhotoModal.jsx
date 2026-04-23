import { useEffect, useState } from "react";
import { usePhoto } from "../context/PhotoContext";
import picture from "../assets/svg/picture.svg";
import axios from "axios";
import { supabase } from "../lib/supabase";

const PhotoModal = ({ photoData, setPhotoData }) => {
  const { newPhoto, setNewPhoto } = usePhoto();
  const [form, setForm] = useState({
    title: "",
    thumb: "",
    isVideo: "",
    video: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;

  const setInfo = (event) => {
    const { name, value } = event.target;
    if (name === "isVideo") {
      setForm({ ...form, [name]: event.target.checked });
    } else if (event.target.type === "file") {
      setForm({ ...form, [name]: event.target.files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleBlur = () => {
    setForm({ ...form, title: form.title.trim() });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.title || !form.thumb) {
      setError("Por favor, revisa los campos");
      return;
    }
    setLoading(true);
    const thumb = new FormData();
    thumb.append("file", form.thumb);
    thumb.append("upload_preset", "my_preset");
    try {
      const { data, error: imageError } = await axios.post(CLOUDINARY_URL, thumb);
      const thumbUrl = data.secure_url;

      if(imageError){
          console.error(imageError);
          setError(imageError.message);
        }

      let videoUrl = "";

      if (form.isVideo && form.video) {
        const videoData = new FormData();
        videoData.append("file", form.video);
        videoData.append("upload_preset", "my_preset");

        const videoEndpoint = CLOUDINARY_URL.replace("/image/", "/video/");
        const {data: videoUpload, error: videoError} = await axios.post(videoEndpoint, videoData);

        if(videoError){
          console.error(videoError);
          setError(videoError.message);
        }
        videoUrl = videoUpload.secure_url;
      }


      const payload = [
        {
          section_id: newPhoto.section_id,
          media_type: form.isVideo ? "video" : "image",
          thumb_url: thumbUrl,
          title: form.title,
        },
      ];

      const { data: mediaData, error: mediaError } = await supabase
        .from("media")
        .insert(payload)
        .select()
        .single();

      if (mediaError) {
        console.log(mediaError.message);
        console.error(mediaError);
        throw mediaError;
      }


      if (form.isVideo && videoUrl) {
        const videoPayload = [
          {
            media_id: mediaData.media_id,
            video_url: videoUrl,
          },
        ];

        const { data: videoData, error: videoError } = await supabase
          .from("video_details")
          .insert(videoPayload)
          .select();

        if (videoError) {
          console.error(videoError);
          throw videoError;
        }
        mediaData.video_details = videoData;
      }

      const index = photoData.findIndex(
        (section) => section.section_id === newPhoto.section_id,
      );

      photoData[index].media.push(mediaData);
      setNewPhoto(null);
    } catch (err) {
      console.error("Something went wrong: ", err);
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (event) => {
    const current = event.target.closest("form");

    if (!current) {
      setNewPhoto(null);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 flex justify-center items-center bg-black/60 z-45"
    >
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-5 z-50 w-xs md:w-md lg:w-lg bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl "
      >
        <h3 className="w-full text-center text-4xl p-1 font-bold font-title2 text-transparent bg-clip-text bg-linear-to-r from-accblue to-accgreendark">
          Agrega Photo
        </h3>
        {error && <p className="text-red-500 italic text-center">{error}</p>}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={form.title}
            name="title"
            placeholder="Título"
            onChange={setInfo}
            onBlur={handleBlur}
            required
            className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
          />
          <label
            htmlFor="thumb"
            className=" flex items-center justify-center w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgreendark hover:cursor-pointer"
          >
            {form.thumb ? (
              <div className="flex gap-2 items-center justify-center">
                <img
                  src={URL.createObjectURL(form.thumb)}
                  alt={form.thumb.name}
                  className="max-h-20 self-center"
                />
                <div className="flex flex-col gap-2s">
                  <p className="text-sm font-medium truncate w-full text-center">
                    {form.thumb.name}
                  </p>
                  <span className="text-xs text-accgreendark/60">
                    Pincha para cambiar
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 ">
                <img src={picture} alt="Picture Icon" className="size-5" />
                <span>Selecciona una imagen</span>
              </div>
            )}
            <input
              type="file"
              name="thumb"
              id="thumb"
              onChange={setInfo}
              accept="image/*"
              required
              className="sr-only"
            />
          </label>
          <label
            htmlFor="isVideo"
            className="flex justify-between items-center w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 px-8 focus:outline-none hover:cursor-pointer focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
          >
            <span className="text-xl font-bold font-title2 text-accgray">
              Video:
            </span>
            <input
              onChange={setInfo}
              type="checkbox"
              name="isVideo"
              id="isVideo"
              className="sr-only peer"
            />
            <div className="group relative w-10 h-6 md:w-14 md:h-8 rounded-full bg-gray-400 transition-colors duration-300 ease-in-out peer-hover:bg-gray-500 peer-checked:bg-acc4">
              <div className="absolute w-full h-full rounded-full opacity-0 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight group-peer-checked:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              <div className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full left-1 top-1 bg-white transition-transform duration-300 ease-in-out shadow group-peer-checked:translate-x-4 md:group-peer-checked:translate-x-6"></div>
            </div>
          </label>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${form.isVideo ? "max-h-96" : "max-h-0"}`}
          >
            <label
              htmlFor="video"
              className="flex items-center justify-center w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgreendark "
            >
              {form.video ? (
                <div className="flex items-center justify-center gap-2 w-full">
                  {/* Video Preview */}
                  <video
                    src={URL.createObjectURL(form.video)}
                    className=" max-h-20 rounded-lg object-cover"
                    controls={false}
                    muted
                    onMouseOver={(e) => e.target.play()}
                    onMouseOut={(e) => e.target.pause()}
                  />
                  <div className="flex flex-col gap-2s">
                    <p className="text-sm font-medium truncate w-full text-center">
                      {form.video.name}
                    </p>
                    <span className="text-xs text-accgreendark/60">
                      Pincha para cambiar
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  <span>Selecciona un video</span>
                </div>
              )}

              <input
                type="file"
                name="video"
                id="video"
                onChange={setInfo}
                accept="video/*"
                disabled={!form.isVideo}
                required={form.isVideo}
                className="sr-only"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="flex justify-center items-center w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
        >
          {loading ? (
            <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
          ) : (
            "Subir Foto"
          )}
        </button>
      </form>
    </div>
  );
};

export default PhotoModal;
