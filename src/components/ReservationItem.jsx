import React from "react";

const ReservationItem = ({reservation, setActiveReservation}) => {
  const dateIn = new Date(reservation.check_in).toDateString();
  const dateout = new Date(reservation.check_out).toDateString();

  return (
    <>
      <tr onClick={() => setActiveReservation(reservation)} className="text-sm hover:bg-gray-100 hover:cursor-pointer border-b border-accblue/20">
        <td className="p-2 text-center">{reservation.name}</td>
        <td className="p-2 text-center">{reservation.phone}</td>
        <td className="p-2 text-center">{dateIn}</td>
        <td className="p-2 text-center">{dateout}</td>
        <td className="p-2 text-center">{reservation.confirmed ? "Confirmado" : "Pendiente"}</td>
      </tr>
    </>
  );
};

export default ReservationItem;
