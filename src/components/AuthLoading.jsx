import React from "react";
import { useTranslation } from "react-i18next";

const AuthLoading = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-16 px-4 md:px-8 gap-6">
        <img 
          src="https://res.cloudinary.com/djwnwvaq3/image/upload/q_auto/f_auto/v1775085713/Logo_he7dxc.jpg" 
          alt={t('auth_loading.image_alt')} 
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg"
        />
        <p className="text-accgray font-medium animate-pulse">
          {t('auth_loading.message')}
        </p>
      </div>
    </div>
  );
};

export default AuthLoading;
