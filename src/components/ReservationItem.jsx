import React from "react";
import { useTranslation } from "react-i18next";

const ReservationItem = ({ reservation, setActiveReservation }) => {
  const { t } = useTranslation();

  if (!reservation) return null;

  const dateOptions = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
  const locale = t('admin_reservations.item.date_locale');

  const formattedDates = {
    in: new Date(reservation.check_in.replace(/-/g, '/'))
      .toLocaleDateString(locale, dateOptions)
      .replace('.', ''), 
    out: new Date(reservation.check_out.replace(/-/g, '/'))
      .toLocaleDateString(locale, dateOptions)
      .replace('.', ''),
  };

  return (
    <tr
      onClick={() => setActiveReservation(reservation)}
      className="text-sm hover:bg-gray-100 hover:cursor-pointer border-b border-accblue/20 transition-colors"
    >
      <td className="p-2 text-center">
        {reservation.name || t('admin_reservations.item.no_name')}
      </td>
      <td className="p-2 text-center">
        {reservation.phone || t('admin_reservations.item.no_number')}
      </td>
      <td className="p-2 text-center capitalize">{formattedDates.in}</td>
      <td className="p-2 text-center capitalize">{formattedDates.out}</td>
      <td className="p-2 text-center">
        <span
          className={
            reservation.confirmed ? "text-green-600" : "text-amber-600"
          }
        >
          {reservation.confirmed 
            ? t('admin_reservations.item.status_confirmed') 
            : t('admin_reservations.item.status_pending')}
        </span>
      </td>
    </tr>
  );
};

export default ReservationItem;
