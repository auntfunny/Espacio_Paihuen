import PhotoList from "./PhotoList";

const PhotoSection = ({section}) => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-col items-center text-center gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-accgray">
                {section.name}
              </h2>
              <div className="w-20 h-1.5 bg-linear-to-r from-accblue to-accgreenlight rounded-full"></div>
              <p className="text-accgray/70 max-w-xl">
                {section.caption}
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-4 rounded-3xl border border-white/50 shadow-xl">
              <PhotoList section={section}/>
            </div>
          </section>
    );
}

export default PhotoSection;
