const ReservationItem = ({ reservation, setActiveReservation }) => {
  const dateIn = reservation.check_in ? new Date(reservation.check_in).toDateString() : "N/A";
  const dateOut = reservation.check_out ? new Date(reservation.check_out).toDateString() : "N/A";

  return (
    <tr 
      onClick={() => setActiveReservation(reservation)} 
      className="text-sm hover:bg-gray-100 hover:cursor-pointer border-b border-accblue/20"
    >
      <td className="p-2 text-center">{String(reservation.name)}</td>
      <td className="p-2 text-center">{String(reservation.phone)}</td>
      <td className="p-2 text-center">{dateIn}</td>
      <td className="p-2 text-center">{dateOut}</td>
      <td className="p-2 text-center">
        {reservation.confirmed ? "Confirmado" : "Pendiente"}
      </td>
    </tr>
  );
};
