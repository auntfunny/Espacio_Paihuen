import { useEffect, useState } from "react";
import reservation from "../assets/svg/reservation.svg";
import PageHeader from "../components/PageHeader";
import { supabase } from "../lib/supabase";
import ReservationItem from "../components/ReservationItem";

const Reservations = () => {
  const [reservationData, setReservationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReservations = async () => {
      setLoading(true);
      try {
        const { data, error: dberror } = await supabase
          .from("reservations")
          .select("*")
          .order("created_at", { ascending: false });

          if(dberror) {
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
          <div className="w-full">
            <div className="grid grid-cols-5 place-items-center">
              <p className="font-title2 text-lg italic text-accgray">Nombre</p>
              <p className="font-title2 text-lg italic text-accgray">Número</p>
              <p className="font-title2 text-lg italic text-accgray">Entrada</p>
              <p className="font-title2 text-lg italic text-accgray">Salida</p>
              <p className="font-title2 text-lg italic text-accgray">Estatus</p>
              <div className="col-span-5 w-full h-1 rounded-full bg-linear-to-r from-accblue via-accgreendark to-accgreenlight"></div>
            </div>
            {reservationData && reservationData.map((item) => (
              <ReservationItem key={item.reservation_id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
