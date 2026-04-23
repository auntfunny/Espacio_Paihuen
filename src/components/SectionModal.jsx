import { useState } from "react";
import { supabase } from "../lib/supabase";

const SectionModal = ({ setNewSection, setPhotoData }) => {
  const [form, setForm] = useState({ name: "", caption: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const setInfo = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.caption || !form.name) {
      setError("Por favor, revisa los campos");
      return;
    }

    setLoading(true);
    try {
      const { data, error: sectionError } = await supabase
        .from("sections")
        .insert([form])
        .select()
        .single();

      if (sectionError) {
        setError(sectionError.message);
        throw sectionError;
      }
      data.media = [];
      setPhotoData((prev) => [...prev, data])
      setNewSection(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleBlur = (event) => {
    setForm({ ...form, [event.target.name]: form[event.target.name].trim() });
  };

  const handleClick = (event) => {
    const current = event.target.closest("form");

    if (!current) {
      setNewSection(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 flex justify-center items-center bg-black/60 z-45"
    >
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col gap-5 z-50 w-xs md:w-md lg:w-lg bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl "
      >
        <h3 className="w-full text-center text-4xl p-1 font-bold font-title2 text-transparent bg-clip-text bg-linear-to-r from-accblue to-accgreendark">
          Nueva Sección
        </h3>
        {error && <p className="italic text-red-500">{error}</p>}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={form.name}
            name="name"
            placeholder="Título"
            onChange={setInfo}
            onBlur={handleBlur}
            required
            className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
          />
          <input
            type="text"
            value={form.caption}
            name="caption"
            placeholder="Subtítulo"
            onChange={setInfo}
            onBlur={handleBlur}
            required
            className="w-full bg-white/60 border border-accgray/10 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-accgreenlight/50 transition-all text-accgray placeholder:text-accgray/40"
          />
        </div>

        <button
          type="submit"
          className="flex justify-center items-center w-full mt-4 bg-linear-to-r from-accblue to-accgreendark text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:cursor-pointer hover:shadow-accblue/20 hover:scale-[1.02] transition-all duration-300"
        >
          {loading ? (
            <div className="w-10 h-10 rounded-full border-4 border-acclight border-t-accgray animate-spin"></div>
          ) : (
            "Agrega"
          )}
        </button>
      </form>
    </div>
  );
};

export default SectionModal;
