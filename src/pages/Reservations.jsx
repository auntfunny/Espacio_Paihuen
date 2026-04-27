import { useEffect, useState } from "react";
import reservation from "../assets/svg/reservation.svg";
import PageHeader from "../components/PageHeader";
import { supabase } from "../lib/supabase";
import ReservationItem from "../components/ReservationItem";
import ReservationInfoModal from "../components/ReservationInfoModal";

const Reservations = () => {
  const [reservationData, setReservationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeReservation, setActiveReservation] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    console.log(today > "2026-05-03");
    const getReservations = async () => {
      setLoading(true);
      try {
        const { data, error: dberror } = await supabase
          .from("reservations")
          .select("*")
          .gte('check_in', today)
          .order("check_in", { ascending: true });

        if (dberror) throw dberror;
        setReservationData(data || []);
      } catch (err) {
        setError("Ocurrió un error inesperado");
      } finally {
        setLoading(false);
      }
    };

    getReservations();
  }, []);

  const toggleStatus = async ({ resId, resStatus }) => {
    setUpdateLoading(true);
    try {
      const { data, error: dberror } = await supabase
        .from("reservations")
        .update({ confirmed: resStatus })
        .eq("reservation_id", resId)
        .select()
        .single();

      if (dberror) {
        setError("Ocurrió un error inesperado");
        throw dberror;
      }

      setReservationData((prev) =>
        prev.map((item) => (item.reservation_id === resId ? data : item)),
      );
    } catch (err) {
      setError("Ocurrió un error inesperado");
      console.error(err);
    } finally {
      setUpdateLoading(false);
    }
  };

  const closeModal = () => {
    setActiveReservation(null);
  };

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
              <thead className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-linear-to-r after:from-accblue after:via-accgreendark after:to-accgreenlight">
                <tr>
                  {["Nombre", "Número", "Entrada", "Salida", "Estatus"].map(
                    (header) => (
                      <th
                        key={header}
                        className="font-title2 text-lg italic text-accgray pb-4 px-2 text-center font-medium"
                      >
                        {header}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {!loading && reservationData?.length > 0 ? (
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
      {activeReservation && (
        <ReservationInfoModal
          reservation={activeReservation}
          onClose={closeModal}
          onToggleConfirm={toggleStatus}
          loading={updateLoading}
        />
      )}
    </div>
  );
};

export default Reservations;
