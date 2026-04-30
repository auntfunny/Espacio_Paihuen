import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editLoading, setEditLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasEdited, setHasEdited] = useState(false);
  const [activeEdit, setActiveEdit] = useState({
    title_active: false,
    discount_active: false,
    time_active: false,
    limit_active: false,
    message_active: false,
    night_active: false,
    hot_tub_active: false,
    kayak_active: false,
  });

  useEffect(() => {
    const getPageInfo = async () => {
      setLoading(true);
      try {
        const { data, error: dberror } = await supabase
          .from("page_info")
          .select("*")
          .single();

        if (dberror) {
          throw dberror;
        }

        setPageData(data);
      } catch (err) {
        setError("Lo sentimos, algo falló. Por favor, intenta mas tarde.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getPageInfo();
  }, []);

  const setInfo = (event) => {
    if (event.target.name === "season_active") {
      setPageData({ ...pageData, season_active: event.target.checked });
    } else {
      setPageData({ ...pageData, [event.target.name]: event.target.value });
    }
    setHasEdited(true);
  };

  const handleBlur = (event) => {
    setPageData({ ...pageData, [event.target.name]: pageData[event.target.name].trim() });
  };

  const setEdit = (newEdit) => {
    setActiveEdit({
      title_active: false,
      discount_active: false,
      time_active: false,
      limit_active: false,
      message_active: false,
      night_active: false,
      hot_tub_active: false,
      kayak_active: false,
    });
    setActiveEdit({ ...activeEdit, [newEdit]: true });
  };

  const resetActiveEdit = () => {
    setActiveEdit({
      title_active: false,
      discount_active: false,
      time_active: false,
      limit_active: false,
      message_active: false,
      night_active: false,
      hot_tub_active: false,
      kayak_active: false,
    });
  };

  const handleConfirmEdit = async () => {
    setError(null);
    setEditLoading(true);
    try {
      const { error: dberror } = await supabase
        .from("page_info")
        .update({ ...pageData, edited_at: new Date().toISOString() })
        .eq("page_info_id", pageData.page_info_id);

      if (dberror) {
        throw dberror;
      }

      console.log("Updated correctly");
      setHasEdited(false);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <InfoContext.Provider
      value={{
        pageData,
        loading,
        error,
        hasEdited,
        activeEdit,
        setInfo,
        handleBlur,
        setEdit,
        resetActiveEdit,
        editLoading,
        handleConfirmEdit,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);
