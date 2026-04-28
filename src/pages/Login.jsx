import { useEffect, useRef, useState } from "react";
import PageHeader from "../components/PageHeader";
import enter from "../assets/svg/login.svg";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Login = () => {
  const { login, loading: authLoading } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [togglePassword, setTogglePassword] = useState(false);
  const [captchaToken, setCaptchaToken] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const captcha = useRef();
  const navigate = useNavigate();

  const setInfo = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    setIsSubmitting(true);

    captcha.current.execute();
  };

  useEffect(() => {
    const completeSubmission = async () => {
      if (!captchaToken || !isSubmitting) return;

      try {
        const profile = await login(credentials, captchaToken);

        console.log("Welcome ", profile?.username);
        navigate("/");
      } catch (err) {
        if (err.code === 400) {
          setError("Correo o contraseña incorrecto");
        } else {
          setError(err.message);
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    completeSubmission();
  }, [captchaToken, isSubmitting]);

  const headerInfo = {
    image: enter,
    label: "Inicia Sesión",
    title: "Login",
    message:
      "Ingresa tus datos para iniciar sesión y manejar la página de forma dinámica",
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-16 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full max-w-xl mt-12 bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <input
              type="email"
              value={credentials.email}
              name="email"
              placeholder="Correo Electrónico"
              onChange={setInfo}
              required
              className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
            />
            <div className="relative">
              <input
                type={togglePassword ? "text" : "password"}
                value={credentials.password}
                name="password"
                placeholder="Contraseña"
                onChange={setInfo}
                required
                className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
              />
              <button
                type="button"
                onClick={() => setTogglePassword(!togglePassword)}
                className="absolute top-3.25 right-6 text-accgreendark hover:text-accgreenlight hover:cursor-pointer transition-colors duration-300 ease-in-out"
              >
                {togglePassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <HCaptcha
            ref={captcha}
            sitekey="215ca736-033a-45b2-a1d2-02923b862fd2"
            onVerify={(token) => {
              setCaptchaToken(token);
            }}
            size="invisible"
          />

          {error && <p className="text-red-500 text-center italic">{error}</p>}
          <button
            type="submit"
            disabled={loading || authLoading}
            className="flex justify-center items-center w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
          >
            {loading || authLoading ? (
              <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
