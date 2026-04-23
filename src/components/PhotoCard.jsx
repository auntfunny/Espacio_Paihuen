import { useState } from "react";
import { usePhoto } from "../context/PhotoContext";

const PhotoCard = ({ image }) => {
  const { setActivePhoto, deletePhoto } = usePhoto();

  return (
    <div className="relative w-full max-h-52 overflow-hidden rounded-lg">
      <img
        src={image.thumb_url}
        alt={image.title}
        className="object-cover origin-center rounded-lg w-full h-full hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
        onClick={() => setActivePhoto(image)}
      />
      {deletePhoto?.media_id === image.media_id && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default PhotoCard;
