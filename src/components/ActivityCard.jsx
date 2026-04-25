import React from 'react';

const ActivityCard = ({title, info}) => {
    return (
        <div className="relative flex flex-col gap-4 p-6 w-full h-80 shadow-md rounded-3xl bg-linear-to-br from-white/90 via-acclight/80 to-acclighttransparent border border-acclight/20 hover:shadow-2xl hover:scale-105 hover:border-accgreenlight/40 transition-all duration-500 ease-out cursor-pointer backdrop-blur-sm overflow-hidden">
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-accgreenlight via-accgreendark to-accblue rounded-full"></div>
              <h3>{title}</h3>
              <p>{info}</p>
            </div>
    );
}

export default ActivityCard;
