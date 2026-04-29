const ReservationItem = ({ reservation, setActiveReservation, view }) => {
  const { t } = useTranslation();
  if (!reservation) return null;

  const dateOptions = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const locale = t("admin_reservations.item.date_locale");

  const formatDate = (dateStr) =>
    new Date(dateStr.replace(/-/g, "/"))
      .toLocaleDateString(locale, dateOptions)
      .replace(".", "");

  const statusColor = reservation.confirmed
    ? "text-green-600"
    : "text-amber-600";
  const statusText = reservation.confirmed
    ? t("admin_reservations.item.status_confirmed")
    : t("admin_reservations.item.status_pending");

  // Desktop Table Row
  if (view === "table") {
    return (
      <tr
        onClick={() => setActiveReservation(reservation)}
        className="text-sm hover:bg-gray-100 hover:cursor-pointer border-b border-accblue/20 transition-colors"
      >
        <td className="p-4 text-center">
          {reservation.name || t("admin_reservations.item.no_name")}
        </td>
        <td className="p-4 text-center">
          {reservation.phone || t("admin_reservations.item.no_number")}
        </td>
        <td className="p-4 text-center capitalize">
          {formatDate(reservation.check_in)}
        </td>
        <td className="p-4 text-center capitalize">
          {formatDate(reservation.check_out)}
        </td>
        <td className="p-4 text-center font-bold">
          <span className={statusColor}>{statusText}</span>
        </td>
      </tr>
    );
  }

  // Mobile Card
  return (
    <div
      onClick={() => setActiveReservation(reservation)}
      className="bg-white/60 border border-white p-5 rounded-2xl shadow-sm active:scale-95 transition-transform"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="font-bold text-accgray text-lg">
            {reservation.name || t("admin_reservations.item.no_name")}
          </p>
          <p className="text-sm text-accgray/70">
            {reservation.phone || t("admin_reservations.item.no_number")}
          </p>
        </div>
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full border ${reservation.confirmed ? "bg-green-50 border-green-200 text-green-600" : "bg-amber-50 border-amber-200 text-amber-600"}`}
        >
          {statusText}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-accblue/10">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-accgray/50">
            {t("admin_reservations.table.headers.check_in")}
          </p>
          <p className="text-sm font-medium capitalize">
            {formatDate(reservation.check_in)}
          </p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-wider text-accgray/50">
            {t("admin_reservations.table.headers.check_out")}
          </p>
          <p className="text-sm font-medium capitalize">
            {formatDate(reservation.check_out)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationItem;