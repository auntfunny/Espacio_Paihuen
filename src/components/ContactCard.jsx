import React from "react";

const ContactCard = ({ contact, sectionRef }) => {
  // Color mapping for consistent styling
  const colorClasses = {
    "accgreenlight": {
      iconBg: "from-accgreenlight/30 to-accgreenlight/10 group-hover:from-accgreenlight/50 group-hover:to-accgreenlight/20",
      iconColor: "text-accgreenlight",
      titleHover: "group-hover:text-accgreenlight",
      buttonBg: "from-accgreenlight to-accgreenlight/80",
      borderHover: "hover:border-accgreenlight/50"
    },
    "accblue": {
      iconBg: "from-accblue/30 to-accblue/10 group-hover:from-accblue/50 group-hover:to-accblue/20",
      iconColor: "text-accblue",
      titleHover: "group-hover:text-accblue",
      buttonBg: "from-accblue to-accblue/80",
      borderHover: "hover:border-accblue/50"
    },
    "pink-500": {
      iconBg: "from-pink-400/30 to-purple-400/10 group-hover:from-pink-400/50 group-hover:to-purple-400/20",
      iconColor: "text-pink-500",
      titleHover: "group-hover:text-pink-500",
      buttonBg: "from-pink-400 to-purple-500",
      borderHover: "hover:border-pink-400/50"
    },
    "blue-500": {
      iconBg: "from-blue-600/30 to-blue-400/10 group-hover:from-blue-600/50 group-hover:to-blue-400/20",
      iconColor: "text-blue-600",
      titleHover: "group-hover:text-blue-600",
      buttonBg: "from-blue-600 to-blue-700",
      borderHover: "hover:border-blue-600/50"
    },
    "accgreendark": {
      iconBg: "from-accgreendark/30 to-accgreendark/10 group-hover:from-accgreendark/50 group-hover:to-accgreendark/20",
      iconColor: "text-accgreendark",
      titleHover: "group-hover:text-accgreendark",
      buttonBg: "from-accgreendark to-accgreendark/80",
      borderHover: "hover:border-accgreendark/50"
    }
  };

  const colors = colorClasses[contact.color] || colorClasses["accblue"];

  return (
    <div
      className={`group relative flex flex-col items-center gap-6 p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-acclight/50 shadow-lg hover:shadow-2xl ${colors.borderHover} transform hover:scale-105 transition-all duration-500 ease-out overflow-hidden`}
    >

      <div
        className={`relative z-10 w-20 h-20 bg-linear-to-br ${colors.iconBg} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}
      >
        <img
          src={contact.svg}
          alt={`${contact.title} icon`}
          className={`size-10 ${colors.iconColor} drop-shadow-sm group-hover:drop-shadow-lg transition-all duration-300`}
        />
      </div>

      <div className="relative z-10 text-center space-y-4">
        <h3
          className={`text-2xl font-bold font-title2 text-accgray ${colors.titleHover} transition-colors duration-300`}
        >
          {contact.title}
        </h3>
        <p className="text-accgray/70 text-sm leading-relaxed max-w-xs">
          {contact.message}
        </p>

        {sectionRef ? (
          <button
            type="button"
            onClick={() => sectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className={`inline-flex items-center gap-2 mt-4 px-8 py-4 bg-linear-to-r ${colors.buttonBg} text-white font-semibold rounded-full hover:cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/button`}
          >
            <span>{contact.button}</span>
            <svg
              className="size-4 group-hover/button:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        ) : (
          <a
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 mt-4 px-8 py-4 bg-linear-to-r ${colors.buttonBg} text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/link`}
          >
            <span>{contact.button}</span>
            <svg
              className="size-4 group-hover/link:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
