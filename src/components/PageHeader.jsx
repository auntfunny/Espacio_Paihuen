import SectionHeaderDesign from "./SectionHeaderDesign";

const PageHeader = ({info}) => {
  return (
    <div className="text-center space-y-6 max-w-4xl">
      <div className="inline-flex items-center gap-3 bg-linear-to-r from-accgreenlight/20 to-accblue/20 px-6 py-3 rounded-full border border-acclight/30">
        <img src={info.image} alt="Icon" className="size-5" />
        <span className="text-sm font-medium text-accgray">
          {info.label}
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-title2 bg-linear-to-r from-accblue via-accgreendark to-accgreenlight bg-clip-text text-transparent leading-tight">
        {info.title}
      </h1>
      <p className="text-lg/7 md:text-xl/7 text-accgray/80 max-w-3xl mx-auto">
        {info.message}
      </p>
      <SectionHeaderDesign />
    </div>
  );
};

export default PageHeader;
