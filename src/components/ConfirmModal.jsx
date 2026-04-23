import React from "react";

const ConfirmModal = ({close, title, caption}) => {
  return (
    <div
      onClick={close}
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
            {title}
          </h3>
          <p className="text-accgray/70">
            {caption}
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
  );
};

export default ConfirmModal;
