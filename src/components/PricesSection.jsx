import React from "react";
import { useTranslation } from "react-i18next"; 
import { useInfo } from "../context/InfoContext";
import EditButton from "./EditButton";

const PricesSection = () => {
  const { t } = useTranslation();
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
            {t('prices.night_label')}
          </span>
          <div className="relative">
            {activeEdit.night_active ? (
              <input
                autoFocus
                type="number"
                step={0.001}
                min={0}
                name="night"
                value={pageData?.night}
                onChange={setInfo}
                onBlur={resetActiveEdit}
                className="w-30 bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            ) : (
              <span className="text-xl">
                ${loading ? "--.---" : Number(pageData?.night).toFixed(3)} {t('prices.currency')}
              </span>
            )}
            <EditButton activeEdit={activeEdit} edit={"night_active"} position={" top-0 -right-16"} setEdit={setEdit} />
          </div>
        </li>

        <li className="flex flex-col md:flex-row gap-2 p-2 w-full justify-between items-center border-b border-accgreendark">
          <span className="italic">{t('prices.hot_tub_label')}</span>
          <div className="relative">
            {activeEdit.hot_tub_active ? (
              <input
                autoFocus
                type="number"
                step={0.001}
                min={0}
                name="hot_tub"
                value={pageData?.hot_tub}
                onChange={setInfo}
                onBlur={resetActiveEdit}
                className="w-30 bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
              />
            ) : (
              <span className="text-xl">
                ${loading ? "--.---" : Number(pageData?.hot_tub).toFixed(3)} {t('prices.currency')}
              </span>
            )}
            <EditButton activeEdit={activeEdit} edit={"hot_tub_active"} position={" top-0 -right-16"} setEdit={setEdit} />
          </div>
        </li>

        <li className="flex flex-col md:flex-row gap-2 p-2 w-full justify-between items-center">
          <span className="italic">
            {t('prices.kayak_label')}
          </span>
          <div className="relative">
            {activeEdit.kayak_active ? (
              <input
                type="number"
                step={0.001}
                min={0}
                autoFocus
                name="kayak"
                value={pageData?.kayak}
                onChange={setInfo}
                onBlur={resetActiveEdit}
                className="w-30 bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
              />
            ) : (
              <span className="text-xl">
                ${loading ? "--.---" : Number(pageData?.kayak).toFixed(3)} {t('prices.currency')}
              </span>
            )}
            <EditButton activeEdit={activeEdit} edit={"kayak_active"} position={" top-0 -right-16"} setEdit={setEdit} />
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
            t('prices.save_changes')
          )}
        </button>
      )}
    </div>
  );
};

export default PricesSection;
