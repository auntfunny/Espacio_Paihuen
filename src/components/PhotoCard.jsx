import { useState } from "react";

const PhotoCard = ({ image }) => {
  const [showImage, setShowImage] = useState(false);

  const hideImage = (event) => {
    const image = event.target.closest("img, video");
    if (!image) {
      setShowImage(false);
    }
  };
  return (
    <div className="w-full max-h-52 overflow-hidden rounded-lg">
      {showImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={hideImage}
        >
          {image.includes("Thumbnail") ? (
            <video
              src={`/videos/${image.split("_")[0]}.mp4`}
              alt={`${image.split(".")[0].split("_").join(" ")}`}
              className="max-w-7/8 max-h-7/8 object-contain rounded hover:cursor-default"
              controls
            />
          ) : (
            <img
              src={`/images/${image}`}
              alt={`${image.split(".")[0].split("_").join(" ")}`}
              className="max-w-7/8 max-h-7/8 object-contain rounded hover:cursor-default"
            />
          )}
        </div>
      )}
      <img
        src={`/images/${image}`}
        alt={`${image.split(".")[0].split("_").join(" ")}`}
        className="object-cover origin-center rounded-lg w-full h-full hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
        onClick={() => setShowImage(true)}
      />
    </div>
  );
};

export default PhotoCard;
