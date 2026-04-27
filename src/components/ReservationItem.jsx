import { useState, useEffect } from "react";

const ReservationItem = ({ reservation, setActiveReservation }) => {
  const formattedDates = {
    in: new Date(reservation.check_in.replace(/-/g, '/')).toUTCString().split(" ").slice(0,4),
    out: new Date(reservation.check_out.replace(/-/g, '/')).toUTCString().split(" ").slice(0,4),
  };
  console.log(reservation);
  console.log(formattedDates);

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
