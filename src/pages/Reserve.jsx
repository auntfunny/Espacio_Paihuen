import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PageHeader from "../components/PageHeader";
import calendar from "../assets/svg/calendar.svg";
import SuccessModal from "../components/SuccessModal";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useReservation } from "../hooks/useReservation";
import PricesSection from "../components/PricesSection";
import { useInfo } from "../context/InfoContext";
import { useLocation } from "react-router-dom";

const Reserve = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { pageData } = useInfo();

  const {
    clientInfo,
    setClientInfo,
    stayReserved,
    loading,
    error,
    setCaptchaToken,
    totalPrice,
    captcha,
    today,
    authLoading,
    setInfo,
    handleSubmit,
    closeModal,
  } = useReservation(pageData);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (window.hcaptcha) setIsReady(true);
  }, []);

  const headerInfo = {
    image: calendar,
    label: t("reserve.header.label"),
    title: t("reserve.header.title"),
    message: t("reserve.header.message"),
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      {stayReserved && (
        <SuccessModal
          close={closeModal}
          title={t("reserve.success_modal.title")}
          caption={t("reserve.success_modal.caption")}
        />
      )}

      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <div className="w-full max-w-xl mt-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accgray">
                {t("reserve.intro.title")}
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight rounded-full"></div>
            </div>
            <p className="text-accgray/80 md:text-lg/7">
              {t("reserve.intro.description")}
            </p>
            <PricesSection />
            <p className="text-accgray/50 italic text-xs text-center">
              {t("reserve.intro.disclaimer")}
            </p>
          </div>
        </div>

        <div className="w-full max-w-xl mt-12">
          <form
            onSubmit={handleSubmit}
            className="bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl space-y-5"
          >
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={clientInfo.name}
                placeholder={t("reserve.form.placeholders.name")}
                onChange={setInfo}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray"
              />
              <input
                type="email"
                name="email"
                value={clientInfo.email}
                placeholder={t("reserve.form.placeholders.email")}
                onChange={setInfo}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray"
              />
              <input
                type="tel"
                name="phone"
                value={clientInfo.phone}
                placeholder={t("reserve.form.placeholders.phone")}
                onChange={setInfo}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-accgreendark uppercase ml-2 tracking-wider">
                  {t("reserve.form.labels.check_in")}
                </label>
                <input
                  type="date"
                  name="check_in"
                  value={clientInfo.check_in}
                  onChange={setInfo}
                  min={today}
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 text-accgray"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-accgreendark uppercase ml-2 tracking-wider">
                  {t("reserve.form.labels.check_out")}
                </label>
                <input
                  type="date"
                  name="check_out"
                  value={clientInfo.check_out}
                  onChange={setInfo}
                  min={clientInfo.check_in || today}
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 text-accgray"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-accgreendark uppercase ml-2 tracking-wider">
                {t("reserve.form.labels.guests")}
              </label>
              <div className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() =>
                    clientInfo.guests > 1 &&
                    setClientInfo({
                      ...clientInfo,
                      guests: clientInfo.guests - 1,
                    })
                  }
                  disabled={clientInfo.guests <= 1}
                  className="w-10 h-10 rounded-lg bg-linear-to-r from-accblue to-accgreendark text-white font-bold text-lg cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-accgray">
                  {clientInfo.guests}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    clientInfo.guests < 9 &&
                    setClientInfo({
                      ...clientInfo,
                      guests: clientInfo.guests + 1,
                    })
                  }
                  disabled={clientInfo.guests >= 9}
                  className="w-10 h-10 rounded-lg bg-linear-to-r from-accblue to-accgreendark text-white font-bold text-lg cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>
              <p className="text-center text-xs text-accgray/50 italic pt-2">
                {t("reserve.form.guest_limit")}
              </p>
            </div>

            <label
              htmlFor="with_hot_tub"
              className="flex justify-between items-center w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 px-8 focus:outline-none hover:cursor-pointer focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
            >
              <span className="text-xl font-bold font-title2 text-accgray">
                {t("reserve.form.labels.hot_tub")}
              </span>
              <input
                checked={clientInfo.with_hot_tub}
                onChange={setInfo}
                type="checkbox"
                name="with_hot_tub"
                id="with_hot_tub"
                className="sr-only peer"
              />
              <div className="group relative w-10 h-6 md:w-14 md:h-8 rounded-full bg-gray-400 transition-colors duration-300 ease-in-out peer-hover:bg-gray-500 peer-checked:bg-acc4">
                <div className="absolute w-full h-full rounded-full opacity-0 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight group-peer-checked:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                <div className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full left-1 top-1 bg-white transition-transform duration-300 ease-in-out shadow group-peer-checked:translate-x-4 md:group-peer-checked:translate-x-6"></div>
              </div>
            </label>

            <div
              className={`w-full overflow-hidden transition-all duration-300 ${clientInfo.with_hot_tub ? "max-h-96" : "max-h-0"}`}
            >
              <Flatpickr
                options={{
                  mode: "multiple",
                  minDate: clientInfo.check_in || today,
                  maxDate: clientInfo.check_out || null,
                }}
                placeholder={t("reserve.form.placeholders.hot_tub_dates")}
                onChange={(selectedDates) =>
                  setClientInfo({ ...clientInfo, hot_tub_dates: selectedDates })
                }
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none text-accgray"
              />
            </div>

            <div className="flex items-center gap-6">
              <span className="text-xl italic font-title2 text-accgray">
                {t("reserve.form.labels.total")}
              </span>
              <span className="text-2xl font-bold text-accgray">
                ${totalPrice.toFixed(3)}
              </span>
            </div>

            <HCaptcha
              key={pathname}
              ref={captcha}
              sitekey="215ca736-033a-45b2-a1d2-02923b862fd2"
              onVerify={(token) => setCaptchaToken(token)}
              onLoad={() => setIsReady(true)}
              size="invisible"
            />
            {error && (
              <p className="text-red-500 text-center italic">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || authLoading || !isReady}
              className="flex justify-center items-center w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
            >
              {loading || authLoading || !isReady ? (
                <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin" />
              ) : (
                t("reserve.form.submit_button")
              )}
            </button>
            <p className="text-center text-xs text-accgray/50 italic pt-2">
              {t("reserve.form.confirmation_note")}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
