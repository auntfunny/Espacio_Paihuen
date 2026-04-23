import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { CommentCardSkeleton } from "./Skeletons";


const Comments = () => {
  const [commentData, setCommentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      setLoading(true);
      try {
        const { data, error: dberror } = await supabase
          .from("comments")
          .select("*")
          .order("rating", { ascending: false })
          .order("created_at", { ascending: false })
          .limit(3);

        if (dberror) {
          setError(dberror.message);
          throw dberror;
        }
        setCommentData(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getComments();
  }, []);

  return (
    <section className="relative w-full py-20 px-6 bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accgreenlight/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accblue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accgreendark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto gap-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-transparent font-title2 font-bold bg-clip-text bg-linear-to-r from-accblue via-accgreendark to-accgreenlight">
            Comentarios
          </h2>
          <p className="text-lg md:text-xl text-accgray/70 max-w-2xl mx-auto leading-relaxed">
            Lo que dicen nuestros huéspedes sobre su experiencia en Espacio
            Paihuen
          </p>
          <div className="w-16 h-1 bg-linear-to-r from-accgreenlight to-accblue rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-center">
          {error ? (
            <p className="col-span-3 w-full text-center text-xl md:text-2xl text-accblue">
              Lo sentimos, algo falló. Por favor, intenta mas tarde.
            </p>
          ) : loading ? (
            Array(3)
              .fill()
              .map((_, index) => <CommentCardSkeleton key={index} />)
          ) : (
            commentData.map((comment) => (
              <div
                key={comment.comment_id}
                className="w-full transform hover:scale-105 transition-all duration-500 ease-out"
              >
                <CommentCard comment={comment} />
              </div>
            ))
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link
            to="/newcomment"
            className="bg-linear-to-r from-accblue to-accgreendark text-acclight px-12 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-out"
          >
            Agrega Tu Commentario
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Comments;
