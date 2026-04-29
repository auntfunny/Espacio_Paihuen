import React from "react";
import { useTranslation } from "react-i18next";

const MainFeatures = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-20 px-6 bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accgreenlight/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accblue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accgreendark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-wrap justify-center items-center gap-12 lg:gap-8 w-full max-w-7xl mx-auto">
        <div className="group flex flex-col gap-6 w-full max-w-sm text-center lg:text-left transform hover:scale-105 transition-all duration-500 ease-out">
          <div className="relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 ease-out">
            <img
              src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085842/Cama_Naranja_gt74bq.jpg"
              alt={t("features.cabin.alt")}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 w-12 h-12 text-acclight bg-linear-to-br from-accblue to-accgreendark rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl lg:text-3xl font-bold font-title2 text-accgray group-hover:text-accblue transition-colors duration-300 ease-out">
              {t("features.cabin.title")}
            </h2>
            <p className="text-accgray/70 leading-relaxed text-base lg:text-lg">
              {t("features.cabin.description")}
            </p>
          </div>
        </div>

        <div className="group flex flex-col gap-6 w-full max-w-sm text-center lg:text-left transform hover:scale-105 transition-all duration-500 ease-out">
          <div className="relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 ease-out">
            <img
              src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085842/De_Frente_zdlitz.jpg"
              alt={t("features.environment.alt")}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 w-12 h-12 bg-linear-to-br from-accblue to-accgreendark rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-acclight"
                height="200px"
                width="200px"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                fill="currentColor"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      className="st0"
                      d="M257.447,404.678c-0.426-0.667-0.925-1.425-1.444-2.194c-0.518,0.769-1.019,1.519-1.445,2.185 c-5.926,9.037-16.981,25.879-39.499,25.879c-3.518,0-6.666-0.519-9.629-1.251V512h101.127v-82.692 c-2.982,0.722-6.111,1.241-9.611,1.241C274.428,430.549,263.392,413.716,257.447,404.678z"
                    ></path>{" "}
                    <path
                      className="st0"
                      d="M485.372,374.967l-86.007-100.1c-19.314-0.203-28.717-13.907-33.772-21.304 c-0.518-0.769-1.148-1.686-1.778-2.574c-0.63,0.88-1.259,1.796-1.778,2.555c-5.092,7.445-14.593,21.305-34.167,21.305 c-19.592-0.019-29.054-13.879-34.146-21.323c-0.519-0.778-1.148-1.694-1.778-2.584c-0.648,0.88-1.259,1.797-1.796,2.574 c-5.092,7.444-14.592,21.286-34.147,21.286c-19.592-0.018-29.055-13.88-34.148-21.333c-0.518-0.768-1.148-1.685-1.778-2.584 c-0.648,0.899-1.278,1.816-1.796,2.584c-5.093,7.435-14.611,21.296-34.184,21.296c-19.592-0.019-29.055-13.888-34.148-21.342 c-0.518-0.768-1.148-1.685-1.778-2.564c-0.611,0.87-1.24,1.787-1.759,2.555c-5.056,7.37-14.445,21-33.629,21.259L26.62,374.967 c-12.203,14.24-5.981,25.888,13.907,25.888c21.555,0,31.24-20.472,51.702-20.472c20.482,0,20.482,31.204,40.944,31.204 c20.48,0,20.48-31.204,40.944-31.204c20.48,0,20.48,31.204,40.943,31.204c20.481,0,20.481-31.204,40.944-31.204 c20.48,0,20.48,31.204,40.943,31.204c20.481,0,20.481-31.204,40.925-31.204c20.499,0,20.499,31.204,40.921,31.204 c20.48,0,20.48-31.204,40.942-31.204c20.482,0,30.194,20.472,51.731,20.472C491.353,400.854,497.594,389.207,485.372,374.967z"
                    ></path>{" "}
                    <path
                      className="st0"
                      d="M112.248,255.063c17.98,0,17.98-26.268,35.943-26.25c17.981,0,17.944,26.287,35.906,26.305 c17.999,0,18.018-26.277,35.999-26.249c17.962,0,17.943,26.268,35.906,26.286c17.962,0,17.981-26.276,35.943-26.239 c17.981,0,17.962,26.268,35.924,26.286c17.981,0,17.981-26.268,35.944-26.24c17.976,0,17.958,26.269,35.92,26.287 c19.87,0,26-11.537,13.611-25.656l-72.252-82.47c-2.945,0.454-6.019,0.759-9.26,0.759c-12.889,0-20.647-6.741-25.277-12.268 c-4.648,5.528-12.388,12.268-25.277,12.268c-12.87,0-20.629-6.741-25.277-12.268c-4.648,5.528-12.407,12.268-25.296,12.268 c-12.87,0-20.629-6.732-25.277-12.259c-4.63,5.528-12.389,12.259-25.259,12.259c-3.241,0-6.296-0.305-9.24-0.759l-72.276,82.257 C86.248,243.489,92.359,255.044,112.248,255.063z"
                    ></path>{" "}
                    <path
                      className="st0"
                      d="M180.19,128.232c12.629,0,12.629-17.518,25.258-17.518c12.63,0,12.63,17.518,25.278,17.518 c12.666,0,12.666-17.518,25.277-17.518c12.648,0,12.648,17.518,25.295,17.518c12.611,0,12.611-17.518,25.278-17.518 c12.629,0,12.629,17.518,25.258,17.518c19.87,0,26.74-12.083,15.277-26.824l-70.276-90.34c-11.425-14.758-30.221-14.758-41.702,0 l-70.239,90.34C153.414,116.149,160.284,128.232,180.19,128.232z"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl lg:text-3xl font-bold font-title2 text-accgray group-hover:text-accblue transition-colors duration-300 ease-out">
              {t("features.environment.title")}
            </h2>
            <p className="text-accgray/70 leading-relaxed text-base lg:text-lg">
              {t("features.environment.description")}
            </p>
          </div>
        </div>

        <div className="group flex flex-col gap-6 w-full max-w-sm text-center lg:text-left transform hover:scale-105 transition-all duration-500 ease-out">
          <div className="relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 ease-out">
            <img
              src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085844/Playa_x9nqzl.jpg"
              alt={t("features.hot_tubs.alt")}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 w-12 h-12 bg-linear-to-br from-accgreendark to-accblue rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl lg:text-3xl font-bold font-title2 text-accgray group-hover:text-accblue transition-colors duration-300 ease-out">
              {t("features.hot_tubs.title")}
            </h2>
            <p className="text-accgray/70 leading-relaxed text-base lg:text-lg">
              {t("features.hot_tubs.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeatures;
