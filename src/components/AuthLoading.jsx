import React from "react";

const AuthLoading = () => {
  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-16 px-4 md:px-8">
        <img src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085713/Logo_he7dxc.jpg" alt="Espacio Paihuen" />
        <p>Cargando tu información, por favor espere</p>
      </div>
    </div>
  );
};

export default AuthLoading;
