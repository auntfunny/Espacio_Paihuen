import React from "react";

export const PhotoSectionSkeleton = () => {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-50 md:w-80 h-20 md:h-22 bg-gray-500 rounded-full animate-pulse"></div>
        <div className="w-20 h-1.5 bg-linear-to-r from-gray-300 to-gray-500 rounded-full animate-pulse"></div>
        <div className="w-80 md:w-140 h-16 rounded-full bg-gray-400 animate-pulse "></div>
      </div>
      <div className="bg-white/30 backdrop-blur-sm p-4 rounded-3xl border border-white/50 shadow-xl">
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-content-center gap-4 p-4"
        >
          {Array(4)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="w-full h-32 md:h-52 bg-gray-400 rounded-xl animate-pulse"
              ></div>
            ))}
        </div>
      </div>
    </section>
  );
};
