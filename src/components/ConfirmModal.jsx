const ConfirmModal = ({ title, message, onConfirm, onCancel, item }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-50">
      <div className="relative flex flex-col gap-5 z-50 w-xs md:w-md lg:w-lg bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl ">
        <h3 className="w-full text-center text-4xl p-1 font-bold font-title2 text-transparent bg-clip-text bg-linear-to-r from-accblue to-accgreendark">
          {title}
        </h3>
        <p className="text-center text-accgray italic">{message}</p>
        <div className="flex justify-between gap-2 w-full">
          <button
            onClick={onCancel}
            type="button"
            className="border-2 border-accgray/60 text-accgray text-xl font-medium py-4 px-8 rounded-full hover:cursor-pointer hover:bg-accgray/10 hover:border-accgray focus:outline-none focus:ring-4 focus:ring-accgray/50 transition-all duration-300 ease-out backdrop-blur-sm"
          >
            Cancelar
          </button>
          <button
            onClick={() => onConfirm(item)}
            type="button"
            className="border-2 border-red-500/60 text-red-500 text-xl font-medium py-4 px-8 rounded-full hover:cursor-pointer hover:bg-red-500/10 hover:border-red-500 focus:outline-none focus:ring-4 focus:ring-red-500/50 transition-all duration-300 ease-out backdrop-blur-sm"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
