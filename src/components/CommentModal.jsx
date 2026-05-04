import { useTranslation } from "react-i18next";

const CommentModal = ({ closeModal, comment }) => {
  if (!comment) return null;

  const { t } = useTranslation();
  const initials = comment.name.split(' ').map(n => n[0]).join('').toUpperCase();

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

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

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 flex justify-center items-center bg-black/60 z-50 backdrop-blur-sm p-4"
    >
      <article className="relative flex flex-col gap-6 w-full max-w-2xl bg-linear-to-br from-white/90 via-acclight/80 to-acclighttransparent p-8 md:p-10 rounded-[2.5rem] border border-white shadow-2xl overflow-hidden">
        
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-linear-to-br from-accgreenlight/20 to-accblue/20 rounded-full blur-3xl"></div>

        <button 
          onClick={closeModal}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors hover:cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-linear-to-br from-accblue to-accgreendark rounded-full flex items-center justify-center text-acclight font-bold text-2xl shadow-lg">
            {initials}
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-xl">{comment.name}</h3>
            <h4 className="text-gray-600">{comment.email}</h4>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="font-bold text-gray-800 text-2xl leading-tight">
            {comment.title}
          </h5>
          
          <div className="relative overflow-y-auto max-h-100">
             <svg className="absolute -top-3 -left-4 w-10 h-10 text-accgreenlight/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
            <p className="text-gray-700 leading-relaxed text-wrap italic text-lg pl-4 md:pl-8 pt-2">
              {comment.content}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-acclight/50">
          <p className="text-gray-500 font-medium capitalize">{formatDate(comment.created_at.split("T")[0])}</p>
          
          <div className="flex items-center gap-3 bg-white/50 px-4 py-2 rounded-full border border-acclight/30 shadow-sm">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-5 ${comment.rating >= star ? "text-yellow-400" : "text-gray-300"}`}
                >
                  <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-gray-800 text-lg">{comment.rating.toFixed(1)}</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CommentModal;
