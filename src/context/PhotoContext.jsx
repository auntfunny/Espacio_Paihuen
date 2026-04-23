import { createContext, useContext, useState } from "react";
import { supabase } from "../lib/supabase";

const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [activePhoto, setActivePhoto] = useState(null);
  const [newPhoto, setNewPhoto] = useState(null);
  const [deletePhoto, setDeletePhoto] = useState(null);
  const [confirmDeleteSection, setConfirmDeleteSection] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteSection = async (section) => {
    setConfirmDeleteSection(null);
    setLoading(true);
    try {
      const { error: deleteError } = await supabase
        .from("sections")
        .delete()
        .eq("section_id", section.section_id);

      if (deleteError) {
        setError(deleteError.message);
        throw deleteError;
      }

      return section.section_id;
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PhotoContext.Provider
      value={{
        activePhoto,
        setActivePhoto,
        newPhoto,
        setNewPhoto,
        deletePhoto,
        setDeletePhoto,
        confirmDeleteSection,
        setConfirmDeleteSection,
        loading,
        error,
        handleDeleteSection,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => useContext(PhotoContext);
