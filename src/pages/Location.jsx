import ContactUs from "../components/ContactUs";
import SectionHeaderDesign from "../components/SectionHeaderDesign";

const Location = () => {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-16 px-4 md:px-8">
        <div className="text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-linear-to-r from-accgreenlight/20 to-accblue/20 px-6 py-3 rounded-full border border-acclight/30">
            <svg
              className="w-5 h-5 text-accgreendark"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="text-sm font-medium text-accgray">
              Carretera Austral Km 21.8
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-title2 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight bg-clip-text text-transparent leading-tight">
            Dónde Encontrarnos
          </h1>
          <p className="text-lg/7 md:text-xl/7 text-accgray/80 max-w-2xl mx-auto">
            Estamos ubicados en el inicio de la hermosa Carretera Austral, a tan
            solo 25 minutos de Puerto Montt.
          </p>
          <SectionHeaderDesign />
        </div>

        <div className="w-full max-w-7xl mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center">
          <div className="bg-white/50 backdrop-blur-md p-8 rounded-3xl border border-acclight/50 shadow-xl space-y-6">
            <h2 className="text-2xl font-bold text-accgray flex items-center gap-2">
              <span className="w-8 h-8 bg-accblue/10 text-accblue rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              Cómo llegar
            </h2>
            <ol className="space-y-4">
              {[
                "Sal de Puerto Montt con dirección a la Carretera Austral.",
                "Continúa durante 25 minutos hasta llegar a Quillaipe.",
                "En el km 21.8, gira a la derecha (junto al negocio Costa Quillaipe).",
                "Sigue hasta el final de la calle para llegar a Espacio Paihuen.",
              ].map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-accgreenlight/20 text-accgreendark text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-accgray/80">{step}</p>
                </li>
              ))}
            </ol>
            <div className="pt-6 border-t border-accgray/10">
              <p className="text-accgray font-medium">Coordenadas Exactas:</p>
              <a
                href="https://maps.app.goo.gl/PKQrzpyqPhRKEGe37"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accblue hover:text-accgreendark font-bold underline transition-colors"
              >
                41°32'23.2"S 72°44'11.0"W
              </a>
            </div>
          </div>

          <div className="relative lg:row-span-2 group overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/Paihuen_Mapa.png"
              alt="Mapa de Ruta"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-accgray/40 to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-linear-to-br from-accblue/10 to-accgreenlight/10 p-6 rounded-3xl border border-white/40 shadow-lg">
              <h3 className="font-bold text-accgray mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-accblue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
                Transporte Público
              </h3>
              <p className="text-sm text-accgray/70">
                Toma las líneas <strong>Buses Vargas</strong> o{" "}
                <strong>Buses J.B.</strong> desde el{" "}
                <a href="https://terminalpm.cl/" className="underline">
                  Terminal de Buses
                </a>
                . Salidas frecuentes hacia Caleta La Arena; solicita bajar en{" "}
                <strong>Quillaipe</strong>.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/40 shadow-lg flex flex-col justify-center items-center text-center">
              <span className="text-xs font-bold text-accgreendark uppercase tracking-wider">
                Clima en Quillaipe
              </span>
              <div className="flex items-center gap-3 my-2">
                <svg
                  className="w-10 h-10 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.243 3.05a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-3.05 4.243a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zm-4.243-3.05a1 1 0 01-1.414 0l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 010 1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm3.05-4.243a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-3xl font-bold text-accgray">14°C</span>
              </div>
              <p className="text-xs text-accgray/60 italic">
                Parcialmente despejado
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 w-full max-w-7xl mt-8 ">
            <div className="h-112.5 w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                title="Google Maps Location"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11479.368631746427!2d-72.7390362784639!3d-41.536717946040575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9618350027ec227d%3A0x4dedaed2d7f4f83c!2sEspacio%20Paihuen!5e1!3m2!1sen!2scl!4v1775165722840!5m2!1sen!2scl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center mt-8">
              <a
                href="https://goo.gl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accblue text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-accgreendark transition-all transform hover:scale-105"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center">
          <p className="text-2xl md:text-3xl font-title2 italic bg-linear-to-r from-accblue to-accgreendark bg-clip-text text-transparent">
            ¡Te esperamos en este rincón del paraíso!
          </p>
        </div>
      </div>
      <ContactUs showSecondaryButton={false} />
    </div>
  );
};

export default Location;
