import { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabase";
import { useTranslation } from "react-i18next";

export const useReservation = (pageData) => {
  const { t } = useTranslation();
  const { user, loading: authLoading, anonSignIn } = useAuth();

  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    check_in: "",
    check_out: "",
    phone: "",
    guests: 0,
    with_hot_tub: false,
    hot_tub_dates: [],
    user_id: null,
  });

  const [stayReserved, setStayReserved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [captchaToken, setCaptchaToken] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalNights, setTotalNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const captcha = useRef();
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (user?.id) {
      setClientInfo((prev) => ({ ...prev, user_id: user.id }));
    }
  }, [user]);

  useEffect(() => {
    if (clientInfo.check_in && clientInfo.check_out) {
      const dateIn = new Date(clientInfo.check_in);
      const dateOut = new Date(clientInfo.check_out);
      setTotalNights((dateOut - dateIn) / 86400000);
    }
  }, [clientInfo.check_in, clientInfo.check_out]);

  useEffect(() => {
    if (pageData) {
      setTotalPrice(
        Number(pageData?.night) *
          totalNights *
          Math.ceil(clientInfo.guests / 3) +
          Number(pageData?.hot_tub) * clientInfo.hot_tub_dates.length,
      );
    }
  }, [totalNights, clientInfo.hot_tub_dates, clientInfo.guests, pageData]);

  const setInfo = (event) => {
    const { name, value, checked, type } = event.target;

    if (type === "checkbox") {
      setClientInfo((prev) => ({ ...prev, [name]: checked }));
    } else {
      setClientInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (clientInfo.guests === 0) {
      setError(t("reserve.errors.no_guests"));
      return;
    }

    setError(null);
    setLoading(true);
    setIsSubmitting(true);
    captcha.current.execute();
  };

  useEffect(() => {
    const completeSubmission = async () => {
      if (!isSubmitting || !captchaToken) return;

      try {
        let payload = { ...clientInfo, total: totalPrice };

        if (!user && !authLoading) {
          const { data, loginError } = await anonSignIn(captchaToken);
          if (loginError) {
            captcha.current.resetCaptcha();
            throw loginError;
          }
          payload = { ...payload, user_id: data.user.id };
        }

        const { data, error: dberror } = await supabase
          .from("reservations")
          .insert([payload])
          .select();

        if (dberror) {
          throw dberror;
        } else {
          setStayReserved(true);
          resetForm(payload.user_id);
        }

        captcha.current.resetCaptcha();
      } catch (err) {
        if (err?.code === "42501") {
          setError(t("reserve.errors.limit_reached"));
        } else {
          setError(err.message || t("reserve.errors.unexpected"));
        }
      } finally {
        setLoading(false);
        setIsSubmitting(false);
        setCaptchaToken(null);
      }
    };

    completeSubmission();
  }, [captchaToken, isSubmitting, user, authLoading, t]);

  const resetForm = (uid) => {
    setClientInfo({
      name: "",
      email: "",
      check_in: "",
      check_out: "",
      phone: "",
      guests: 0,
      with_hot_tub: false,
      hot_tub_dates: [],
      user_id: uid,
    });
  };

  const closeModal = () => {
    setStayReserved(false);
  };

  return {
    clientInfo,
    setClientInfo,
    stayReserved,
    loading,
    error,
    setError,
    setCaptchaToken,
    totalNights,
    totalPrice,
    captcha,
    today,
    authLoading,
    setInfo,
    handleSubmit,
    closeModal,
  };
};
