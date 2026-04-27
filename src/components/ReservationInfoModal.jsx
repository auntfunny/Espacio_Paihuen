import React from "react";

const ReservationInfoModal = ({
  reservation,
  onClose,
  onToggleConfirm,
  loading,
}) => {
  if (!reservation) return null;

  const dateIn = new Date(reservation.check_in);
  const dateOut = new Date(reservation.check_out);
  const days = (dateOut - dateIn) / 86400000;
  const price =
    60 * days * Math.ceil(reservation.guests / 3) +
    20 * reservation.hot_tub_dates.length;

  const statusInfo = {
    resId: reservation.reservation_id,
    resStatus: !reservation.confirmed,
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 flex justify-center items-center bg-black/60 z-45"
    >
      <div className="relative flex flex-col gap-3 w-xs md:w-full max-w-lg bg-white/40 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white shadow-2xl">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold font-title2 text-transparent bg-clip-text bg-linear-to-r from-accblue to-accgreendark">
            Reserva
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:gap-3 text-accgray">
          <div className="bg-white/60 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-accgray/10">
            <p className="text-xs font-bold uppercase tracking-wider text-accgreendark mb-1">
              Cliente
            </p>
            <p className="text-sm sm:text-base font-semibold">
              {reservation.name}
            </p>
            <p className="text-xs opacity-80">{reservation.email}</p>
            <p className="text-xs opacity-80">{reservation.phone}</p>
          </div>

          <div className="flex gap-2 sm:gap-3">
            <div className="flex-1 bg-white/60 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-accgray/10">
              <p className="text-xs font-bold text-accgreendark">LLEGADA</p>
              <p className="text-xs sm:text-sm font-medium capitalize">
                {dateIn
                  .toLocaleDateString("es-ES", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .replace(".", "")}
              </p>
            </div>
            <div className="flex-1 bg-white/60 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-accgray/10">
              <p className="text-xs font-bold text-accgreendark">SALIDA</p>
              <p className="text-xs sm:text-sm font-medium capitalize">
                {dateOut
                  .toLocaleDateString("es-ES", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                  .replace(".", "")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="bg-white/60 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-accgray/10">
              <p className="text-xs font-bold text-accgreendark">HUÉSPEDES</p>
              <p className="text-sm sm:text-base font-bold">
                {reservation.guests}
              </p>
            </div>
            <div className="bg-white/60 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-accgray/10">
              <p className="text-xs font-bold text-accgreendark">TINAJA</p>
              <p className="text-xs sm:text-sm font-medium">
                {reservation.with_hot_tub ? "Incluida" : "No Incluida"}
              </p>
            </div>
          </div>

          {reservation.with_hot_tub && reservation.hot_tub_dates && (
            <div className="bg-white/60 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-accgray/10">
              <p className="text-xs font-bold text-accgreendark mb-1">
                FECHAS TINAJA
              </p>
              <div className="flex flex-wrap gap-1">
                {reservation.hot_tub_dates.map((date, index) => {
                  const formattedDate = new Date(date).toDateString();
                  return (
                    <span
                      key={index}
                      className="text-xs bg-accblue/10 px-2 py-0.5 rounded-lg"
                    >
                      {formattedDate}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center w-full bg-white/60 border border-accgray/10 rounded-lg sm:rounded-xl p-2 sm:p-3 px-3 sm:px-6 hover:cursor-pointer transition-all">
            <p className="text-sm sm:text-base font-bold font-title2 text-accgray">
              Precio Total:
            </p>
            <p className="text-lg font-bold text-accgray">
              ${price.toFixed(3)}
            </p>
          </div>
          <label className="flex justify-between items-center w-full bg-white/60 border border-accgray/10 rounded-lg sm:rounded-xl p-2 sm:p-3 px-3 sm:px-6 hover:cursor-pointer transition-all">
            <span className="text-sm sm:text-base font-bold font-title2 text-accgray">
              Confirmada:
            </span>
            <input
              type="checkbox"
              defaultChecked={reservation.confirmed}
              onChange={() => onToggleConfirm(statusInfo)}
              className="sr-only peer"
            />
            <div className="group relative w-14 h-8 rounded-full bg-gray-400 transition-colors duration-300 ease-in-out peer-checked:bg-accgreendark">
              <div className="absolute w-full h-full rounded-full opacity-0 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight group-peer-checked:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute w-6 h-6 rounded-full left-1 top-1 bg-white transition-transform duration-300 shadow group-peer-checked:translate-x-6"></div>
            </div>
          </label>
        </div>

        <button
          onClick={onClose}
          disabled={loading}
          className="flex justify-center items-center w-full mt-1 bg-linear-to-r from-accblue to-accgreendark text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg hover:scale-[1.02] transition-all disabled:cursor-wait hover:cursor-pointer"
        >
          {loading ? (
            <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
          ) : (
            "Cerrar"
          )}
        </button>
      </div>
    </div>
  );
};

export default ReservationInfoModal;
