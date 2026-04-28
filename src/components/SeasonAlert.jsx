import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditButton from "../components/EditButton";
import { useAuth } from "../context/AuthContext";
import { useInfo } from "../context/InfoContext";

const SeasonAlert = () => {
  const { user } = useAuth();
  const {
    pageData,
    loading,
    error,
    hasEdited,
    activeEdit,
    setInfo,
    setEdit,
    resetActiveEdit,
    editLoading,
    handleConfirmEdit,
  } = useInfo();

  return (
    <div
      className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${!loading && (pageData?.season_active || user?.role === "ADMIN") ? "max-h-250" : "max-h-0"}`}
    >
      <section className={`relative w-full py-20 px-6`}>
        {error && <p className="text-red-500 text-center italic">{error}</p>}
        <div className="absolute inset-0 bg-linear-to-br from-accgreendark via-accgray to-accblue opacity-90"></div>
        <div
          className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`}
        ></div>

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-8 left-8 w-32 h-32 bg-accgreenlight/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 right-8 w-40 h-40 bg-accblue/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-acclight/5 rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="relative flex justify-center items-center gap-2 md:gap-4 mb-8">
            <div className="w-12 h-12 bg-linear-to-br from-accgreenlight to-accgreendark rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-acclight"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {activeEdit.title_active ? (
              <input
                autoFocus
                name="season_title"
                id="season_title"
                value={pageData?.season_title}
                onChange={setInfo}
                onBlur={resetActiveEdit}
                className="w-full max-w-xl bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
            ) : (
              <h2 className="text-2xl md:text-5xl font-bold font-title2 text-acclight drop-shadow-lg">
                {pageData?.season_title}
              </h2>
            )}
            <EditButton
              activeEdit={activeEdit}
              edit={"title_active"}
              position={"-top-6 md:top-2 right-0"}
              setEdit={setEdit}
            />
          </div>

          <div className="space-y-6 mb-12">
            <div className="bg-acclight/10 backdrop-blur-sm rounded-2xl p-8 border border-acclight/20 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="relative text-center md:text-left">
                  {activeEdit.discount_active ? (
                    <input
                      autoFocus
                      name="season_discount"
                      id="season_discount"
                      value={pageData?.season_discount}
                      onChange={setInfo}
                      onBlur={resetActiveEdit}
                      className="w-full max-w-20 bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                    />
                  ) : (
                    <div className="text-6xl font-bold text-accgreenlight mb-2 drop-shadow-lg">
                      {pageData?.season_discount}
                    </div>
                  )}
                  <div className="text-xl text-acclight/90 font-medium">
                    de descuento
                  </div>
                  <EditButton
                    activeEdit={activeEdit}
                    edit={"discount_active"}
                    position={"top-0 -left-10"}
                    setEdit={setEdit}
                  />
                </div>
                <div className="hidden md:block w-px h-16 bg-acclight/30"></div>
                <div className="relative text-center md:text-left">
                  {activeEdit.time_active ? (
                    <input
                      autoFocus
                      name="season_time"
                      id="season_time"
                      value={pageData?.season_time}
                      onChange={setInfo}
                      onBlur={resetActiveEdit}
                      className="w-full max-w-xs bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                    />
                  ) : (
                    <div className="text-2xl font-bold text-acclight mb-1">
                      {pageData?.season_time}
                    </div>
                  )}
                  {activeEdit.limit_active ? (
                    <input
                      autoFocus
                      name="season_limit"
                      id="season_limit"
                      value={pageData?.season_limit}
                      onChange={setInfo}
                      onBlur={resetActiveEdit}
                      className="w-full max-w-xs bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                    />
                  ) : (
                    <div className="text-lg text-acclight/80">
                      {pageData?.season_limit}
                    </div>
                  )}
                  <EditButton
                    activeEdit={activeEdit}
                    edit={"time_active"}
                    position={"-top-6 md:-top-8 -right-8 md:-right-10"}
                    setEdit={setEdit}
                  />
                  <EditButton
                    activeEdit={activeEdit}
                    edit={"limit_active"}
                    position={"-bottom-6 md:-bottom-8 -right-8 md:-right-10"}
                    setEdit={setEdit}
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              {activeEdit.message_active ? (
                <input
                  autoFocus
                  name="season_message"
                  id="season_message"
                  value={pageData?.season_message}
                  onChange={setInfo}
                  onBlur={resetActiveEdit}
                  className="w-full max-w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                />
              ) : (
                <p className="text-xl text-acclight/90 max-w-2xl mx-auto leading-relaxed font-medium">
                  {pageData?.season_message}
                </p>
              )}
              <EditButton
                activeEdit={activeEdit}
                edit={"message_active"}
                position={"-bottom-8 right-0 md:right-12"}
                setEdit={setEdit}
              />
            </div>
          </div>

          {hasEdited ? (
            <button
              onClick={handleConfirmEdit}
              className="flex justify-center items-center w-50 mx-auto my-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
            >
              {editLoading ? (
                <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
              ) : (
                "Guardar Cambios"
              )}
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/reserve"
                className="group relative bg-linear-to-r from-accgreenlight to-accgreendark text-accgray font-bold text-xl py-5 px-10 rounded-full shadow-2xl hover:shadow-accgreenlight/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accgreenlight/50 transition-all duration-300 ease-out overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reservar Ahora
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-accgreendark to-accgreenlight opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
              </Link>

              <div className="text-sm text-acclight/70 font-medium">
                Oferta limitada • Sujeta a disponibilidad
              </div>
            </div>
          )}
        </div>

        {user?.role === "ADMIN" && (
          <label
            htmlFor="season_active"
            className="absolute top-3 right-3 md:top-5 md:right-12 cursor-pointer"
          >
            <input
              checked={pageData?.season_active}
              onChange={setInfo}
              type="checkbox"
              name="season_active"
              id="season_active"
              className="sr-only peer"
            />
            <div className="group relative w-14 h-8 rounded-full bg-gray-400 transition-colors duration-300 ease-in-out peer-hover:bg-gray-500 peer-checked:bg-acc4">
              <div className="absolute w-full h-full rounded-full opacity-0 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight group-peer-checked:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              <div className="absolute w-6 h-6 rounded-full left-1 top-1 bg-white transition-transform duration-300 ease-in-out shadow group-peer-checked:translate-x-6"></div>
            </div>
          </label>
        )}
      </section>
    </div>
  );
};

export default SeasonAlert;
