import { useState } from "react";
import SectionHeaderDesign from "../components/SectionHeaderDesign";

const NewComment = () => {
  const [commentInfo, setCommentInfo] = useState({
    name: "",
    email: "",
    title: "",
    content: "",
    rating: "",
    createdAt: new Date()
  });
  const [stayReserved, setStayReserved] = useState(false);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    console.log(commentInfo);
    setStayReserved(true);
    setCommentInfo({
      name: "",
      email: "",
      title: "",
      content: "",
      rating: "",
    });
  };
  const [coords, setCoords] = useState(0);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setCoords(((event.clientX - rect.left) / 32).toFixed(1));
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      {stayReserved && (
        <div
          onClick={() => setStayReserved(false)}
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
                ¡Gracias por tu commentario!
              </h3>
              <p className="text-accgray/70">
                Te lo agradecemos y revisaremos tu experiencia en Espacio
                Paihuen
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
      )}

      <div className="relative z-10 flex flex-col items-center pt-32 pb-20 px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-3 bg-linear-to-r from-accgreenlight/20 to-accblue/20 px-6 py-3 rounded-full border border-acclight/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-accgreendark"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>

            <span className="text-sm font-medium text-accgray">
              Comentarios
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-title2 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight bg-clip-text text-transparent leading-tight">
            Cuentanos Tu Experiencia
          </h1>

          <p className="text-lg/7 text-accgray/80 max-w-2xl">
            Completa el formulario y dejanos un comentario sobre tu experiencia
            en nuestro Espacio Paihuen.
          </p>

          <SectionHeaderDesign />
        </div>

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

            <button
              type="submit"
              className="w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
            >
              Enviar Comentario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
