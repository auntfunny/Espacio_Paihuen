import { useState } from "react";
import { usePhoto } from "../context/PhotoContext";

const PhotoCard = ({ image }) => {
  const {setActivePhoto} = usePhoto();

  return (
    <div className="w-full max-h-52 overflow-hidden rounded-lg">
      <img
        src={image.thumb_url}
        alt={`Image`}
        className="object-cover origin-center rounded-lg w-full h-full hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
        onClick={() => setActivePhoto(image)}
      />
    </div>
  );
};

export default PhotoCard;
