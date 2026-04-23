import { createContext, useContext, useState } from "react";

const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [activePhoto, setActivePhoto] = useState(null);
  const [newPhoto, setNewPhoto] = useState(null);

  return (
    <PhotoContext.Provider value={{ activePhoto, setActivePhoto, newPhoto, setNewPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => useContext(PhotoContext);
