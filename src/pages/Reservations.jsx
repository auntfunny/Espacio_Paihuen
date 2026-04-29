import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import reservation from "../assets/svg/reservation.svg";
import PageHeader from "../components/PageHeader";
import { supabase } from "../lib/supabase";
import ReservationItem from "../components/ReservationItem";
import ReservationInfoModal from "../components/ReservationInfoModal";

const Reservations = () => {
  const { t } = useTranslation();
  const [reservationData, setReservationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeReservation, setActiveReservation] = useState(null);
  const [updateLoading, setUpdateLoading] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const getReservations = async () => {
      setLoading(true);
      try {
        const { data, error: dberror } = await supabase
          .from("reservations")
          .select("*")
          .gte("check_in", today)
          .order("check_in", { ascending: true });

        if (dberror) throw dberror;
        setReservationData(data || []);
      } catch (err) {
        setError(t("admin_reservations.errors.unexpected"));
      } finally {
        setLoading(false);
      }
    };
    getReservations();
  }, [t]);

  const toggleStatus = async ({ resId, resStatus }) => {
    setUpdateLoading(true);
    try {
      const { data, error: dberror } = await supabase
        .from("reservations")
        .update({ confirmed: resStatus })
        .eq("reservation_id", resId)
        .select()
        .single();

      if (dberror) throw dberror;

      setReservationData((prev) =>
        prev.map((item) => (item.reservation_id === resId ? data : item)),
      );
    } catch (err) {
      setError(t("admin_reservations.errors.unexpected"));
    } finally {
      setUpdateLoading(false);
    }
  };

  const closeModal = () => {
    setActiveReservation(null);
  };

  const headerInfo = {
    image: reservation,
    label: t("admin_reservations.header.label"),
    title: t("admin_reservations.header.title"),
    message: t("admin_reservations.header.message"),
  };

  const tableHeaders = [
    t("admin_reservations.table.headers.name"),
    t("admin_reservations.table.headers.number"),
    t("admin_reservations.table.headers.check_in"),
    t("admin_reservations.table.headers.check_out"),
    t("admin_reservations.table.headers.status"),
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-b from-acclight via-acclight to-acclight/95 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center pt-32 pb-16 px-4 md:px-8">
        <PageHeader info={headerInfo} />

        <div className="w-full max-w-3xl mt-12 bg-white/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl space-y-5">
          <div className="w-full max-w-3xl mt-12 bg-white/40 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] border border-white shadow-2xl">
            {error && (
              <div className="text-red-500 text-center font-bold mb-4">
                {error}
              </div>
            )}

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-linear-to-r after:from-accblue after:via-accgreendark after:to-accgreenlight">
                  <tr>
                    {tableHeaders.map((header) => (
                      <th
                        key={header}
                        className="font-title2 text-lg italic text-accgray pb-4 px-2 text-center font-medium"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {!loading && reservationData.length > 0 ? (
                    reservationData.map((item) => (
                      <ReservationItem
                        key={item.reservation_id}
                        reservation={item}
                        setActiveReservation={setActiveReservation}
                        view="table"
                      />
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="5"
                        className="py-10 text-center text-accgray italic"
                      >
                        {loading
                          ? t("admin_reservations.table.states.loading")
                          : t("admin_reservations.table.states.empty")}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {!loading && reservationData.length > 0 ? (
                reservationData.map((item) => (
                  <ReservationItem
                    key={item.reservation_id}
                    reservation={item}
                    setActiveReservation={setActiveReservation}
                    view="card"
                  />
                ))
              ) : (
                <div className="py-10 text-center text-accgray italic">
                  {loading
                    ? t("admin_reservations.table.states.loading")
                    : t("admin_reservations.table.states.empty")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {activeReservation && (
        <ReservationInfoModal
          reservation={activeReservation}
          onClose={() => setActiveReservation(null)}
          onToggleConfirm={toggleStatus}
          loading={updateLoading}
        />
      )}
    </div>
  );
};

export default Reservations;
