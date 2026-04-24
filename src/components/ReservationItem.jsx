import React from "react";

const ReservationItem = ({reservation}) => {
  const dateIn = new Date(reservation.check_in).toDateString();
  const dateout = new Date(reservation.check_out).toDateString();

  return (
    <div className="grid grid-cols-5 place-items-center pt-2">
      <p>{reservation.name}</p>
      <p>{reservation.phone}</p>
      <p>{dateIn}</p>
      <p>{dateout}</p>
      <p>{reservation.confirmed ? "Confirmado" : "Pendiente"}</p>
    </div>
  );
};

export default ReservationItem;
