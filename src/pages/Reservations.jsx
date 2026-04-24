import { useEffect, useState } from "react";
import reservation from "../assets/svg/reservation.svg";
import PageHeader from "../components/PageHeader";
import { supabase } from "../lib/supabase";
import ReservationItem from "../components/ReservationItem";

const Reservations = () => {
  const [reservationData, setReservationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeReservation, setActiveReservation] = useState(null);

  useEffect(() => {
    const getReservations = async () => {
      setLoading(true);
      try {
        const { data, error: dberror } = await supabase
          .from("reservations")
          .select("*")
          .order("created_at", { ascending: false });

        if (dberror) {
          setError(dberror.message);
          throw dberror;
        }
        setReservationData(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
        console.error(err.message);
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
          <table className="w-full border-collapse">
            <thead>
              <tr className="relative">
                {["Nombre", "Número", "Entrada", "Salida", "Estatus"].map(
                  (header) => (
                    <th
                      key={header}
                      className="font-title2 text-lg italic text-accgray pb-4 px-2 text-center font-medium"
                    >
                      {header}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight" />
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="before:block before:h-2s">
              {reservationData &&
                reservationData.map((item) => (
                  <ReservationItem
                    key={item.reservation_id}
                    reservation={item}
                    setActiveReservation={setActiveReservation}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
