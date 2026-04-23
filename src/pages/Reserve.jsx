import { useState } from "react";
import SectionHeaderDesign from "../components/SectionHeaderDesign";
import PageHeader from "../components/PageHeader";
import calendar from "../assets/svg/calendar.svg";
import ConfirmModal from "../components/ConfirmModal";

const Reserve = () => {
  const [clientInfo, setClientInfo] = useState({
    reserveName: "",
    reserveEmail: "",
    reserveCheckIn: "",
    reserveCheckOut: "",
    reserveTel: "",
  });
  const [stayReserved, setStayReserved] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const setInfo = (event) => {
    setClientInfo({ ...clientInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    console.log(clientInfo);
    setStayReserved(true);
    setClientInfo({
      reserveName: "",
      reserveEmail: "",
      reserveCheckIn: "",
      reserveCheckOut: "",
      reserveTel: "",
    });
  };

  const closeModal = () => {
    setStayReserved(false);
  };

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
        <ConfirmModal
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
          <form
            onSubmit={handleSubmit}
            className="bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl space-y-5"
          >
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={clientInfo.reserveName}
                  name="reserveName"
                  placeholder="Nombre Completo"
                  onChange={setInfo}
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                />
              </div>

              <input
                type="email"
                value={clientInfo.reserveEmail}
                name="reserveEmail"
                placeholder="Correo Electrónico"
                onChange={setInfo}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />

              <input
                type="tel"
                value={clientInfo.reserveTel}
                name="reserveTel"
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
                  value={clientInfo.reserveCheckIn}
                  name="reserveCheckIn"
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
                  value={clientInfo.reserveCheckOut}
                  name="reserveCheckOut"
                  onChange={setInfo}
                  min={clientInfo.reserveCheckIn || today}
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none text-accgray"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
            >
              Confirmar Solicitud
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
