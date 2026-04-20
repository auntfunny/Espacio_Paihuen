import { useState } from "react";

const PhotoCard = ({ image, setactivePhoto }) => {

  
  return (
    <div className="w-full max-h-52 overflow-hidden rounded-lg">
      <img
        src={`/images/${image}`}
        alt={`${image.split(".")[0].split("_").join(" ")}`}
        className="object-cover origin-center rounded-lg w-full h-full hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
        onClick={() => setactivePhoto(image)}
      />
    </div>
  );
};

export default PhotoCard;
