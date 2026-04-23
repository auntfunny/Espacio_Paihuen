const CommentCard = ({ comment }) => {
  const initials = comment.name.split(' ').map(n => n[0]).join('').toUpperCase();
  const date = new Date(comment.created_at).toDateString();

  return (
    <div className="relative flex flex-col gap-4 p-6 w-full h-80 shadow-md rounded-3xl bg-linear-to-br from-white/90 via-acclight/80 to-acclighttransparent border border-acclight/20 hover:shadow-2xl hover:scale-105 hover:border-accgreenlight/40 transition-all duration-500 ease-out cursor-pointer backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-accgreenlight/10 to-accblue/10 rounded-full blur-xl"></div>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-linear-to-br from-accblue to-accgreendark rounded-full flex items-center justify-center text-acclight font-bold text-lg shadow-md">
          {initials}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{comment.name}</h3>
          <h4 className="text-sm text-gray-600">{comment.email}</h4>
        </div>
      </div>

      <h5 className="font-medium text-gray-700 text-lg">{comment.title}</h5>

      <div className="relative flex-1">
        <svg className="absolute -top-2 -left-2 w-8 h-8 text-accgreenlight/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
        <p className="text-gray-600 leading-6 italic pl-6 pt-2 line-clamp-5">{comment.content}</p>
      </div>

      <div className="absolute bottom-3 flex justify-between w-5/6 items-center text-sm text-gray-500 border-t border-acclight/30 pt-3">
        <p>{date}</p>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`size-4 ${comment.rating >= star ? "text-yellow-400" : "text-gray-300"} transition-colors duration-300`}
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
          <span className="font-medium">{comment.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
