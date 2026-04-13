import { useState } from "react";

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
    <div className="flex flex-col items-center pt-34 md:pt-40 gap-8">
      {stayReserved && (
        <div
          onClick={() => setStayReserved(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
        >
          <div className="flex flex-col items-center gap-2 bg-acclight px-4 py-2 rounded-lg">
            <h3 className="text-accblue font-bold text-2xl">
              ¡Gracias por tu reserva!
            </h3>
            <img
              src="/images/Logo.jpeg"
              alt="Espacio Paihuen"
              className="size-42"
            />
            <p className="text-accgreendark italic">
              En breve nos comunicaremos con usted.
            </p>
          </div>
        </div>
      )}
      <h2 className="text-2xl md:text-4xl font-bold text-accblue">
        Reserva Una Noche
      </h2>
      <form
        action="POST"
        className="flex flex-col gap-3 w-2xs bg-white rounded-lg inset-shadow-xs p-3 md:w-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={clientInfo.reserveName}
          id="reserveName"
          name="reserveName"
          placeholder="Nombre"
          onChange={setInfo}
          required
          className="border-2 border-gray-200 rounded-lg p-2 w-full focus:outline-none  focus:border-accgreendark caret-accgreendark text-accgreendark"
        />
        <input
          type="email"
          value={clientInfo.reserveEmail}
          id="reserveEmail"
          name="reserveEmail"
          placeholder="Correo Electrónico"
          onChange={setInfo}
          required
          className="border-2 border-gray-200  rounded-lg p-2 w-full focus:outline-none focus:border-accgreendark caret-accgreendark text-accgreendark"
        />
        <input
          type="tel"
          value={clientInfo.reserveTel}
          id="reserveTel"
          name="reserveTel"
          placeholder="Número de Teléfono"
          onChange={setInfo}
          required
          className="border-2 border-gray-200  rounded-lg p-2 w-full focus:outline-none focus:border-accgreendark caret-accgreendark text-accgreendark"
        />
        <label
          htmlFor="reserveCheckIn"
          className="text-accgreendark font-semibold"
        >
          Fecha de Entrada
        </label>
        <input
          type="date"
          value={clientInfo.reserveCheckIn}
          id="reserveCheckIn"
          name="reserveCheckIn"
          onChange={setInfo}
          min={today}
          required
          className="border-2 border-gray-200  rounded-lg p-2 w-full focus:outline-none focus:border-accgreendark text-accgreendark"
        />
        <label
          htmlFor="reserveCheckOut"
          className="text-accgreendark font-semibold"
        >
          Fecha de Salida
        </label>
        <input
          type="date"
          value={clientInfo.reserveCheckOut}
          id="reserveCheckOut"
          name="reserveCheckOut"
          onChange={setInfo}
          min={clientInfo.reserveCheckIn || today}
          required
          className="border-2 border-gray-200  rounded-lg p-2 w-full focus:outline-none focus:border-accgreendark text-accgreendark"
        />
        <button
          type="submit"
          className="bg-accgreendark text-white py-2 px-4 rounded-lg hover:bg-accblue hover:cursor-pointer transition-colors duration-300 ease-in-out"
        >
          Reservar
        </button>
      </form>
    </div>
  );
};

export default Reserve;
