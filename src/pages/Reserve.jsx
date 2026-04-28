import { useEffect, useRef, useState } from "react";
import SectionHeaderDesign from "../components/SectionHeaderDesign";
import PageHeader from "../components/PageHeader";
import calendar from "../assets/svg/calendar.svg";
import SuccessModal from "../components/SuccessModal";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useReservation } from "../hooks/useReservation";

const Reserve = () => {
  const {
    clientInfo,
    setClientInfo,
    stayReserved,
    loading,
    error,
    setError,
    setCaptchaToken,
    totalPrice,
    captcha,
    today,
    authLoading,
    setInfo,
    handleSubmit,
    closeModal,
  } = useReservation();

  const [prices, setPrices] = useState({
    night: 60.0,
    hot_tub: 20.0,
    kayak: 5.0,
  });

  const headerInfo = {
    image: calendar,
    label: "Reservas en Línea",
    title: "Reserva Tu Estancia",
    message:
      "Completa el formulario y nos pondremos en contacto contigo lo antes posible para confirmar tu visita a este paraíso austral.",
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      {stayReserved && (
        <SuccessModal
          close={closeModal}
          title={"¡Gracias por tu reserva!"}
          caption={
            "En breve nos comunicaremos con usted para confirmar los detalles."
          }
        />
      )}

      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <div className="w-full max-w-xl mt-12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accgray">
                Nuestras Reservaciones
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight rounded-full"></div>
            </div>
            <p className="text-accgray/80 md:text-lg/7">
              Nosotros ofrecemos varios servicios para nuestros clientes. Aquí
              puedes ver los precios antes de hacer tu reserva.
            </p>
            <div className="w-full self-center max-w-lg bg-linear-to-br p-4 rounded-2xl from-accgreendark/20 to-acclight/70 shadow-md">
              <ul className="w-full text-accgray">
                <li className="flex flex-col md:flex-row gap-2 p-2 w-full justify-between items-center border-b border-accgreendark">
                  <span className="italic">
                    Precio por noche para hasta 3 personas:
                  </span>
                  <span className="text-xl">
                    ${prices.night.toFixed(3)} CLP
                  </span>
                </li>
                <li className="flex flex-col md:flex-row gap-2 p-2 w-full justify-between items-center border-b border-accgreendark">
                  <span className="italic">Precio para la tinaja rústica:</span>
                  <span className="text-xl">
                    ${prices.hot_tub.toFixed(3)} CLP
                  </span>
                </li>
                <li className="flex flex-col md:flex-row gap-2 p-2 w-full justify-between items-center">
                  <span className="italic">
                    Precio por hora de uso de kayak por persona:
                  </span>
                  <span className="text-xl">
                    ${prices.kayak.toFixed(3)} CLP
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-accgray/50 italic text-xs text-center">
              *Los kayak estan sujeto a disponibilidad en el momento, no se
              pueden reservar
            </p>
          </div>
        </div>

        <div className="w-full max-w-xl mt-12">
          <form
            onSubmit={handleSubmit}
            className="bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl space-y-5"
          >
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={clientInfo.name}
                  name="name"
                  placeholder="Nombre Completo"
                  onChange={setInfo}
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                />
              </div>

              <input
                type="email"
                value={clientInfo.email}
                name="email"
                placeholder="Correo Electrónico"
                onChange={setInfo}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />

              <input
                type="tel"
                value={clientInfo.phone}
                name="phone"
                placeholder="Número de Teléfono (+56 9...)"
                onChange={setInfo}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-accgreendark uppercase ml-2 tracking-wider">
                  Llegada
                </label>
                <input
                  type="date"
                  value={clientInfo.check_in}
                  name="check_in"
                  onChange={setInfo}
                  min={today}
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none text-accgray"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-accgreendark uppercase ml-2 tracking-wider">
                  Salida
                </label>
                <input
                  type="date"
                  value={clientInfo.check_out}
                  name="check_out"
                  onChange={setInfo}
                  min={clientInfo.check_in || today}
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none text-accgray"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-accgreendark uppercase ml-2 tracking-wider">
                Huéspedes
              </label>
              <div className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    if (clientInfo.guests > 1) {
                      setClientInfo({
                        ...clientInfo,
                        guests: clientInfo.guests - 1,
                      });
                    }
                  }}
                  className="w-10 h-10 rounded-lg bg-linear-to-r from-accblue to-accgreendark text-white font-bold text-lg cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={clientInfo.guests <= 1}
                >
                  -
                </button>
                <span className="text-2xl font-bold text-accgray min-w-12 text-center">
                  {clientInfo.guests}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (clientInfo.guests < 9) {
                      setClientInfo({
                        ...clientInfo,
                        guests: clientInfo.guests + 1,
                      });
                    }
                  }}
                  disabled={clientInfo.guests >= 9}
                  className="w-10 h-10 rounded-lg bg-linear-to-r from-accblue to-accgreendark text-white font-bold text-lg cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>
              <p className="text-center text-xs text-accgray/50 italic pt-2">
                *Solo 3 húespedes por cabaña
              </p>
            </div>

            <label
              htmlFor="with_hot_tub"
              className="flex justify-between items-center w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 px-8 focus:outline-none hover:cursor-pointer focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
            >
              <span className="text-xl font-bold font-title2 text-accgray">
                Tinaja
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
              className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${clientInfo.with_hot_tub ? "max-h-96" : "max-h-0"}`}
            >
              <Flatpickr
                id="hot_tub_dates"
                value={clientInfo.hot_tub_dates}
                disabled={!clientInfo.with_hot_tub}
                options={{
                  mode: "multiple",
                  dateFormat: "Y-m-d",
                  minDate: clientInfo.check_in || today,
                  maxDate: clientInfo.check_out || null,
                  disableMobile: true,
                }}
                placeholder="Seleciona las fechas para la tinaja"
                onChange={(selectedDates) => {
                  setClientInfo({
                    ...clientInfo,
                    hot_tub_dates: selectedDates,
                  }); // Updates state with array of dates
                }}
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none text-accgray"
              />
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xl italic font-title2 text-accgray">
                Total:
              </span>
              <span className="text-2xl font-bold text-accgray">
                ${totalPrice.toFixed(3)}
              </span>
            </div>

            <HCaptcha
              ref={captcha}
              sitekey="215ca736-033a-45b2-a1d2-02923b862fd2"
              onVerify={(token) => {
                setCaptchaToken(token);
              }}
              size="invisible"
            />
            {error && (
              <p className="text-red-500 text-center italic">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading || authLoading}
              className="flex justify-center items-center w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
            >
              {loading || authLoading ? (
                <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
              ) : (
                "Confirmar Reserva"
              )}
            </button>

            <p className="text-center text-xs text-accgray/50 italic pt-2">
              * Tu reserva quedará confirmada una vez que te contactemos.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
