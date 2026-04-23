import { useEffect, useRef, useState } from "react";
import SectionHeaderDesign from "../components/SectionHeaderDesign";
import PageHeader from "../components/PageHeader";
import edit from "../assets/svg/edit.svg";
import SuccessModal from "../components/SuccessModal";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const NewComment = () => {
  const { user, setUser, loading: authLoading } = useAuth();
  const [commentInfo, setCommentInfo] = useState({
    name: "",
    email: "",
    title: "",
    content: "",
    rating: "",
    user_id: "",
  });
  const [commentSaved, setCommentSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [captchaToken, setCaptchaToken] = useState();
  const captcha = useRef();

  const anonSignIn = async () => {
    setLoading(true);
    try {
      const { data, error: loginError } = await supabase.auth.signInAnonymously(
        {
          options: {
            captchaToken,
          },
        },
      );

      if (loginError) {
        setError(loginError.message);
        throw loginError;
      }

      setUser(data.user);
      console.log(data);
      return { data: data, loginError: loginError };
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.id) {
      setCommentInfo({ ...commentInfo, user_id: user.id });
    }
  }, [user]);

  const setInfo = (event) => {
    if (event.target.name === "rating" && event.target.value > 5) {
      event.target.value = 5;
      setCommentInfo({ ...commentInfo, rating: 5 });
    } else if (event.target.name === "rating" && event.target.value < 0) {
      event.target.value = 0;
      setCommentInfo({ ...commentInfo, rating: 0 });
    } else {
      setCommentInfo({
        ...commentInfo,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleStarClick = () => {
    setCommentInfo({
      ...commentInfo,
      rating: coords < 4 ? Number(coords) + 1 : 5,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    if (!captchaToken) {
      setError("Por favor, completa la captcha");
      setLoading(false);
      return;
    }

    try {
      let payload = commentInfo;

      if (!user && !authLoading) {
        const { data, loginError } = await anonSignIn();
        if (loginError) {
          console.error(loginError);
          captcha.current.resetCaptcha();
          throw loginError;
        }
        payload = { ...payload, user_id: data.user.id };
      }
      const { data, error: dberror } = await supabase
        .from("comments")
        .insert([payload]);

        console.log(dberror);
      if (dberror) {
        if (dberror.code === "42501") {
          setError("Has llegado al limite de comentarios por ahora");
          throw dberror;
        } else {
          console.error("An unexpected error occurred:", dberror.message);
          throw dberror
        }
      }

      setCommentSaved(true);
      setCommentInfo({
        name: "",
        email: "",
        title: "",
        content: "",
        rating: "",
        user_id: payload.user_id,
      });
      captcha.current.resetCaptcha();
    } catch (err) {
      if (err?.code === "42501") {
        setError("Has llegado al limite de comentarios por ahora");
        console.error("Comment limit: ", err.message);
      } else {
        setError(err.message);
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };
  const [coords, setCoords] = useState(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setCoords(((event.clientX - rect.left) / 32).toFixed(1));
  };

  const closeModal = () => {
    setCommentSaved(false);
  };

  const headerInfo = {
    image: edit,
    label: "Comentarios",
    title: "Cuentanos Tu Experiencia",
    message:
      "Completa el formulario y dejanos un comentario sobre tu experiencia en nuestro Espacio Paihuen.",
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      {commentSaved && (
        <SuccessModal
          close={closeModal}
          title={"¡Gracias por tu commentario!"}
          caption={
            "Te lo agradecemos y revisaremos tu experiencia en Espacio Paihuen"
          }
        />
      )}

      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <div className="w-full max-w-xl mt-12">
          <form
            onSubmit={handleSubmit}
            className="bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl space-y-5"
          >
            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="text"
                  value={commentInfo.name}
                  name="name"
                  placeholder="Nombre"
                  onChange={setInfo}
                  required
                  className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
                />
              </div>

              <input
                type="email"
                value={commentInfo.email}
                name="email"
                placeholder="Correo Electrónico"
                onChange={setInfo}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
              <input
                type="text"
                value={commentInfo.title}
                name="title"
                placeholder="Título"
                onChange={setInfo}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />

              <textarea
                name="content"
                id="content"
                value={commentInfo.content}
                placeholder="Agrega tu commentario"
                onChange={setInfo}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              ></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                name="rating"
                id="rating"
                onChange={setInfo}
                value={commentInfo.rating}
                required
                placeholder="0.0"
                className="w-15 bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <div
                className="group flex text-gray-300"
                onMouseMove={handleMouseMove}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onClick={handleStarClick}
                    className={`size-8 ${coords >= star - 1 ? "group-hover:text-yellow-400" : "group-hover:text-gray-300"} ${commentInfo.rating >= star ? "text-yellow-400" : "text-gray-300"} transition-colors duration-300 hover:cursor-pointer`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <HCaptcha
              ref={captcha}
              sitekey="215ca736-033a-45b2-a1d2-02923b862fd2"
              onVerify={(token) => {
                setCaptchaToken(token);
              }}
            />
            {error && (
              <p className="text-red-500 text-center italic">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading || authLoading}
              className="flex justify-center items-center w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
            >
              {loading || authLoading ? (
                <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
              ) : (
                "Enviar Commentario"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
