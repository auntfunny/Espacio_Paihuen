const Location = () => {
  return (
    <div className="flex flex-col items-center pt-34 pb-10 md:pt-40 gap-8">
      <h2 className="text-2xl md:text-4xl font-bold text-accblue">
        Donde encontrarnos
      </h2>
      <p className="text-accgray text-center w-full md:w-1/2 px-3 text-lg">
        Estamos ubicados en el principio de la hermosa Carratera Austral de
        Chile. Estamos en el kilometro 21.8, tan solo 25 minutos afuera de
        Puerto Montt. Ven a visitarnos y disfruta de la belleza natural que nos
        rodea.
      </p>
      <h3 className="text-accgreendark text-xl md:text-3xl font-bold">
        Direcciones
      </h3>
      <ul className="text-accgray  w-full md:w-1/2 pl-8 pr-3 list-disc">
        <li>Sal de Puerto Montt con direccion a la Carrera Austral</li>
        <li>
          Continua por la Carrera Austral por 25 minutos, hasta llegar a
          Quillaipe
        </li>
        <li>
          Gira a la derecha en el kilometro 21.8, donde hay un negocio que se
          llama Costa Quillaipe
        </li>
        <li>Continua hasta el fin de la calle y llegaste a tu destino</li>
      </ul>
      <h3 className="text-accgreendark text-xl md:text-3xl font-bold">
        Ubicación
      </h3>
      <p className="text-accgray text-center w-full md:w-1/2 px-3">
        Cooridnadas exactas:{" "}
        <a
          href="https://maps.app.goo.gl/PKQrzpyqPhRKEGe37"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accgreendark underline hover:text-accgreenlight hover:cursor-pointer transition-colors duration-200 ease-in-out"
        >
          41°32'23.2"S 72°44'11.0"W
        </a>
      </p>
      <iframe
        className="w-full md:w-1/2 h-64 md:h-96 rounded-lg border-0 shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11479.368631746427!2d-72.7390362784639!3d-41.536717946040575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9618350027ec227d%3A0x4dedaed2d7f4f83c!2sEspacio%20Paihuen!5e1!3m2!1sen!2scl!4v1775165722840!5m2!1sen!2scl"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p className="text-accgreendark text-center text-2xl italic w-full md:w-1/2 px-3">
        ¡No pierdas la oportunidad de visitarnos!
      </p>
    </div>
  );
};

export default Location;
