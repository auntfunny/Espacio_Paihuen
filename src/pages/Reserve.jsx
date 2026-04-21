import { useState } from "react";
import SectionHeaderDesign from "../components/SectionHeaderDesign";

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

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      {stayReserved && (
        <div
          onClick={() => setStayReserved(false)}
          className="fixed inset-0 bg-accgray/60 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all"
        >
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white max-w-sm w-full text-center space-y-6 transform animate-in fade-in zoom-in duration-300">
            <div className="mx-auto w-20 h-20 bg-accgreenlight/20 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-accgreendark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-accgray">
                ¡Gracias por tu reserva!
              </h3>
              <p className="text-accgray/70">
                En breve nos comunicaremos con usted para confirmar los
                detalles.
              </p>
            </div>
            <img
              src="/images/Logo.jpeg"
              alt="Espacio Paihuen"
              className="w-32 mx-auto rounded-xl shadow-sm"
            />
            <button className="w-full py-3 bg-accblue text-white rounded-2xl font-bold hover:bg-accgreendark transition-colors hover:cursor-pointer">
              Cerrar
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-linear-to-r from-accgreenlight/20 to-accblue/20 px-6 py-3 rounded-full border border-acclight/30">
            <svg
              className="w-5 h-5 text-accgreendark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm font-medium text-accgray">
              Reservas en Línea
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-title2 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight bg-clip-text text-transparent leading-tight">
            Reserva Tu Estancia
          </h1>

          <p className="text-lg/7 text-accgray/80 max-w-2xl">
            Completa el formulario y nos pondremos en contacto contigo lo antes
            posible para confirmar tu visita a este paraíso austral.
          </p>

          <SectionHeaderDesign />
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
