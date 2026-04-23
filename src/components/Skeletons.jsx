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

export const CommentCardSkeleton = () => {
  return (
    <div className="relative flex flex-col gap-4 p-6 w-full h-80 shadow-md rounded-3xl bg-linear-to-br from-white/90 via-acclight/80 to-acclighttransparent border border-acclight/20 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-accgreenlight/10 to-accblue/10 rounded-full blur-xl"></div>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-400 rounded-full animate-pulse"></div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="w-32 h-4 bg-gray-400 rounded-full animate-pulse"></div>
          <div className="w-24 h-3 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="w-48 h-5 bg-gray-400 rounded-full animate-pulse"></div>

      <div className="relative flex-1">
        <div className="space-y-2">
          <div className="w-full h-3 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-full h-3 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-full h-3 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-5/6 h-3 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="absolute bottom-3 flex justify-between w-5/6 items-center text-sm border-t border-acclight/30 pt-3">
        <div className="w-16 h-3 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-4 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-8 h-3 bg-gray-300 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
