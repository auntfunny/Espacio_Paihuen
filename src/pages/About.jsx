import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ContactUs from "../components/ContactUs";
import PageHeader from "../components/PageHeader";
import about from "../assets/svg/about.svg";
import ActivityCard from "../components/ActivityCard";

const About = () => {
  const { t } = useTranslation();

  const activities = [
    {
      title: t("about.activities.items.tub.title"),
      info: t("about.activities.items.tub.info"),
      image: "https://gstatic.com",
    },
    {
      title: t("about.activities.items.kayak.title"),
      info: t("about.activities.items.kayak.info"),
      image: "https://gstatic.com",
    },
    {
      title: t("about.activities.items.central.title"),
      info: t("about.activities.items.central.info"),
      image:
        "https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085844/Reja_de_Frente_2_tdmugg.jpg",
    },
  ];

  const headerInfo = {
    image: about,
    label: t("about.header.label"),
    title: t("about.header.title"),
    message: t("about.header.subtitle"),
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 gap-16 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <section className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl/6 md:text-4xl/6 font-bold text-accgray">
                  {t("about.history.title")}
                </h2>
                <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
              </div>
              <p className="text-accgray/80 md:text-lg/7">
                {t("about.history.description_1")}
              </p>
              <p className="text-accgray/80 md:text-lg/7">
                {t("about.history.description_2")}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-acclight/50 px-4 py-2 rounded-full border border-acclight/30">
                  <svg
                    className="w-4 h-4 text-accgreendark"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm font-medium text-accgray">
                    {t("about.history.badge_nature")}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-acclight/50 px-4 py-2 rounded-full border border-acclight/30">
                  <svg
                    className="w-4 h-4 text-accblue"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-sm font-medium text-accgray">
                    {t("about.history.badge_comfort")}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085844/Reja_de_Frente_2_tdmugg.jpg"
                  alt={t("about.history.image_alt")}
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                <div className="absolute top-4 left-4 bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full border border-acclight/30">
                  <span className="text-sm font-medium text-accgray">
                    {t("about.history.image_badge")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085844/Playa_x9nqzl.jpg"
                  alt={t("about.space.image_alt")}
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                <div className="absolute bottom-4 left-4 bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full border border-acclight/30">
                  <span className="text-sm font-medium text-accgray">
                    {t("about.space.image_badge")}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl/6 md:text-4xl/6 font-bold text-accgray">
                  {t("about.space.title")}
                </h2>
                <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
              </div>
              <p className="text-accgray/80 md:text-lg/7">
                {t("about.space.description_1")}
              </p>
              <p className="text-accgray/80 md:text-lg/7">
                {t("about.space.description_2")}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-linear-to-br from-acclight to-acclight/80 p-4 rounded-2xl border border-acclight/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-accblue to-accgreendark rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-acclight"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13H5v-2h14v2z" />
                        <path d="M3 6v2h18V6H3zm0 12h18v-2H3v2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accgray">
                        {t("about.space.stats_cabins")}
                      </div>
                      <div className="text-xs text-accgray/70">
                        {t("about.space.stats_cabins_sub")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-acclight to-acclight/80 p-4 rounded-2xl border border-acclight/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-accgreendark to-accgreenlight rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-acclight"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accgray">
                        {t("about.space.stats_view")}
                      </div>
                      <div className="text-xs text-accgray/70">
                        {t("about.space.stats_view_sub")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl/6 md:text-4xl/6 font-bold text-accgray">
                  {t("about.cabins_detail.title")}
                </h2>
                <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
              </div>
              <p className="text-accgray/80 md:text-lg/7">
                {t("about.cabins_detail.description_1")}
              </p>
              <p className="text-accgray/80 md:text-lg/7">
                {t("about.cabins_detail.description_2")}
              </p>
              <p className="text-accgray/80 md:text-lg/7">
                {t("about.cabins_detail.description_3")}
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="bg-linear-to-r from-accgreenlight/20 to-accgreendark/20 px-4 py-2 rounded-full text-sm font-medium text-accgray border border-acclight/30">
                  {t("about.cabins_detail.tag_terrace")}
                </span>
                <span className="bg-linear-to-r from-accblue/20 to-accgreendark/20 px-4 py-2 rounded-full text-sm font-medium text-accgray border border-acclight/30">
                  {t("about.cabins_detail.tag_tub")}
                </span>
                <span className="bg-linear-to-r from-accgreendark/20 to-accgreenlight/20 px-4 py-2 rounded-full text-sm font-medium text-accgray border border-acclight/30">
                  {t("about.cabins_detail.tag_view")}
                </span>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085842/Cama_Naranja_2_ue1p4t.jpg"
                  alt={t("about.cabins_detail.image_alt")}
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                <div className="absolute top-4 right-4 bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full border border-acclight/30">
                  <span className="text-sm font-medium text-accgray">
                    {t("about.cabins_detail.image_badge")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

         <section className="w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085844/Reja_de_Frente_2_tdmugg.jpg"
                  alt={t("environmental_commitment.image_alt")}
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                <div className="absolute bottom-4 left-4 bg-acclight/90 backdrop-blur-sm px-4 py-2 rounded-full border border-acclight/30">
                  <span className="text-sm font-medium text-accgray">
                    {t("environmental_commitment.badge")}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl/6 md:text-4xl/6 font-bold text-accgray">
                  {t("environmental_commitment.title")}
                </h2>
                <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
              </div>

              <p className="text-accgray/80 md:text-lg/7">
                {t("environmental_commitment.description_1")}
              </p>

              <p className="text-accgray/80 md:text-lg/7">
                {t("environmental_commitment.description_2")}
              </p>

              <p className="text-accgray/80 md:text-lg/7">
                {t("environmental_commitment.description_3")}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-linear-to-br from-acclight to-acclight/80 p-4 rounded-2xl border border-acclight/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br text-acclight from-accgreenlight to-accgreendark rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accgray">
                        {t("environmental_commitment.features.solar.title")}
                      </div>
                      <div className="text-xs text-accgray/70">
                        {t("environmental_commitment.features.solar.subtitle")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-acclight to-acclight/80 p-4 rounded-2xl border border-acclight/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-accblue to-accgreendark rounded-full flex items-center justify-center">
                      <svg
                      className="text-acclight size-5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
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
                          <path d="M12,20a6,6,0,0,1-6-6c0-4,6-10.8,6-10.8S18,10,18,14A6,6,0,0,1,12,20Z"></path>{" "}
                          <rect width="24" height="24" fill="none"></rect>{" "}
                        </g>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-accgray">
                        {t("environmental_commitment.features.water.title")}
                      </div>
                      <div className="text-xs text-accgray/70">
                        {t("environmental_commitment.features.water.subtitle")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-12 items-center justify-center w-full">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl/6 md:text-4xl/6 font-bold text-accgray">
              {t("about.activities.title")}
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                title={activity.title}
                info={activity.info}
                image={activity.image}
              />
            ))}
          </div>
        </section>

        <section className="w-full max-w-4xl text-center space-y-8 pt-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-accgray">
              {t("about.cta.title")}
            </h2>
            <p className="text-accgray/80 md:text-lg max-w-2xl mx-auto">
              {t("about.cta.subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/reserve"
              className="bg-linear-to-r from-accblue to-accgreendark text-acclight px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out"
            >
              {t("about.cta.button")}
            </Link>
          </div>
        </section>
      </div>
      <ContactUs />
    </div>
  );
};

export default About;
