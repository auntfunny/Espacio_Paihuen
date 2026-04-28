import React from "react";
import { useInfo } from "../context/InfoContext";
import EditButton from "./EditButton";

const PricesSection = () => {
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
    <div className="w-full self-center flex flex-col items-center max-w-lg bg-linear-to-br p-4 rounded-2xl from-accgreendark/20 to-acclight/70 shadow-md">
      {error && <p className="text-red-500 text-center italic">{error}</p>}
      <ul className="w-full text-accgray">
        <li className="flex flex-col md:flex-row gap-2 p-2 w-full justify-between items-center border-b border-accgreendark">
          <span className="italic">
            Precio por noche para hasta 3 personas:
          </span>
          <div className="relative">
            {activeEdit.night_active ? (
              <input
                autoFocus
                type="number"
                step={0.001}
                min={0}
                name="night"
                id="night"
                value={pageData?.night}
                onChange={setInfo}
                onBlur={resetActiveEdit}
                className="w-30 bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
            ) : (
              <span className="text-xl">
                ${loading ? "--.---" : Number(pageData?.night).toFixed(3)} CLP
              </span>
            )}
            <EditButton
              activeEdit={activeEdit}
              edit={"night_active"}
              position={" top-0 -right-16"}
              setEdit={setEdit}
            />
          </div>
        </li>
        <li className="flex flex-col md:flex-row gap-2 p-2 w-full justify-between items-center border-b border-accgreendark">
          <span className="italic">Precio para la tinaja rústica:</span>
          <div className="relative">
            {activeEdit.hot_tub_active ? (
              <input
                autoFocus
                type="number"
                step={0.001}
                min={0}
                name="hot_tub"
                id="hot_tub"
                value={pageData?.hot_tub}
                onChange={setInfo}
                onBlur={resetActiveEdit}
                className="w-30 bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
            ) : (
              <span className="text-xl">
                ${loading ? "--.---" : Number(pageData?.hot_tub).toFixed(3)} CLP
              </span>
            )}
            <EditButton
              activeEdit={activeEdit}
              edit={"hot_tub_active"}
              position={" top-0 -right-16"}
              setEdit={setEdit}
            />
          </div>
        </li>
        <li className="flex flex-col md:flex-row gap-2 p-2 w-full justify-between items-center">
          <span className="italic">
            Precio por hora de uso de kayak por persona:
          </span>
          <div className="relative">
            {activeEdit.kayak_active ? (
              <input
              type="number"
              step={0.001}
                min={0}
                autoFocus
                name="kayak"
                id="kayak"
                value={pageData?.kayak}
                onChange={setInfo}
                onBlur={resetActiveEdit}
                className="w-30 bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
            ) : (
              <span className="text-xl">
                ${loading ? "--.---" : Number(pageData?.kayak).toFixed(3)} CLP
              </span>
            )}
            <EditButton
              activeEdit={activeEdit}
              edit={"kayak_active"}
              position={" top-0 -right-16"}
              setEdit={setEdit}
            />
          </div>
        </li>
      </ul>
      {hasEdited && (
        <button
          onClick={handleConfirmEdit}
          className="flex justify-center items-center w-50 mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
        >
          {editLoading ? (
            <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
          ) : (
            "Guardar Cambios"
          )}
        </button>
      )}
    </div>
  );
};

export default PricesSection;
