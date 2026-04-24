import { useEffect, useState } from "react";
import reservation from "../assets/svg/reservation.svg";
import PageHeader from "../components/PageHeader";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
import AuthLoading from "../components/AuthLoading";
import ReservationItem from "../components/ReservationItem";

const Reservations = () => {
  const { loading: authLoading } = useAuth();
  const [reservationData, setReservationData] = useState([]); // Default to empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeReservation, setActiveReservation] = useState(null);

  if (authLoading) return <AuthLoading />;

  useEffect(() => {
    const getReservations = async () => {
      setLoading(true);
      try {
        const { data, error: dberror } = await supabase
          .from("reservations")
          .select("*")
          .order("created_at", { ascending: false });

        if (dberror) throw dberror;
        setReservationData(data || []);
      } catch (err) {
        setError(err.message || "Ocurrió un error inesperado");
      } finally {
        setLoading(false);
      }
    };

    getReservations();
  }, []);

  const headerInfo = {
    image: reservation,
    label: "Maneja Reservaciones",
    title: "Reservaciones",
    message:
      "Consulta los datos de las reservaciones solicitadas y gestiona su estado",
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-16 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <div className="w-full max-w-3xl mt-12 bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl space-y-5">
          {error && (
            <div className="text-red-500 text-center font-bold">{error}</div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="relative">
                <tr>
                  {["Nombre", "Número", "Entrada", "Salida", "Estatus"].map(
                    (header) => (
                      <th
                        key={header}
                        className="font-title2 text-lg italic text-accgray pb-4 px-2 text-center font-medium"
                      >
                        <span className="relative z-10">{header}</span>
                      </th>
                    ),
                  )}
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight" />
                </tr>
              </thead>
              <tbody>
                {!loading && reservationData.length > 0 ? (
                  reservationData.map((item) => (
                    <ReservationItem
                      key={item.reservation_id}
                      reservation={item}
                      setActiveReservation={setActiveReservation}
                    />
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="py-10 text-center text-accgray italic"
                    >
                      {loading
                        ? "Cargando..."
                        : "No hay reservaciones disponibles"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
