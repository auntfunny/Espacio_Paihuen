import { useState, useEffect } from "react";

const ReservationItem = ({ reservation, setActiveReservation }) => {
  const [formattedDates, setFormattedDates] = useState({
    in: "...",
    out: "...",
  });

  useEffect(() => {
    setFormattedDates({
      in: reservation.check_in
        ? new Date(reservation.check_in).toDateString()
        : "N/A",
      out: reservation.check_out
        ? new Date(reservation.check_out).toDateString()
        : "N/A",
    });
  }, [reservation.check_in, reservation.check_out]);

  if (!reservation) return null;

  return (
    <tr
      onClick={() => setActiveReservation(reservation)}
      className="text-sm hover:bg-gray-100 hover:cursor-pointer border-b border-accblue/20 transition-colors"
    >
      <td className="p-2 text-center">{reservation.name || "Sin nombre"}</td>
      <td className="p-2 text-center">{reservation.phone || "Sin número"}</td>
      <td className="p-2 text-center">{formattedDates.in}</td>
      <td className="p-2 text-center">{formattedDates.out}</td>
      <td className="p-2 text-center">
        <span
          className={
            reservation.confirmed ? "text-green-600" : "text-amber-600"
          }
        >
          {reservation.confirmed ? "Confirmada" : "Pendiente"}
        </span>
      </td>
    </tr>
  );
};

export default ReservationItem;
