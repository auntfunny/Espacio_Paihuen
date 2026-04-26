import React from "react";

const ActivityCard = ({ title, info, image }) => {
  return (
    <div className="group relative w-full h-96 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-accgreenlight via-accblue to-accgreendark rounded-full z-20"></div>

      <div className="relative p-6 h-full w-full">
        <h3 className="text-xl md:text-2xl font-bold text-accgray group-hover:text-accgreendark transition-colors duration-300 mb-3">
          {title}
        </h3>

        <div className="float-right w-44 h-44 rounded-xl ml-2 overflow-hidden shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-bl from-transparent to-accgray/10"></div>
        </div>

        <p
          className={`text-accgray/80 text-sm md:text-base leading-relaxed flex-1 group-hover:text-accgray transition-colors duration-300`}
        >
          {info}
        </p>

        {/* <div className=" absolute bottom-5 flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-semibold text-accgreenlight">
            Descubre más
          </span>
          <svg
            className="w-4 h-4 text-accgreenlight group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default ActivityCard;
