import { usePhoto } from "../context/PhotoContext";
import { useAuth } from "../context/AuthContext";
import PhotoCard from "./PhotoCard";

const PhotoList = ({ section }) => {
  const { user } =  useAuth();
  const { setNewPhoto } = usePhoto();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-content-center gap-4 p-4">
      {section.media.map((image) => (
        <PhotoCard key={image.media_id} image={image} />
      ))}
      {user?.role === "ADMIN" && <div className="flex justify-center items-center w-full">
        <button
          onClick={() => setNewPhoto(section)}
          type="button"
          className="group relative p-4 bg-linear-to-r from-accblue to-accgreendark text-acclight text-xl font-semibold rounded-full shadow-2xl hover:cursor-pointer hover:shadow-accblue/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accblue/50 transition-all duration-300 ease-out overflow-hidden"
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
          <div className="absolute inset-0 bg-linear-to-r from-accgreendark to-accblue opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
        </button>
      </div>}
    </div>
  );
};

export default PhotoList;
