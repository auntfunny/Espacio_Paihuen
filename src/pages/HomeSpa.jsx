import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import MainFeatures from "../components/MainFeatures";
import MainIntro from "../components/MainIntro";
import SeasonAlert from "../components/SeasonAlert";

const HomeSpa = () => {
  return (
    <div>
      <Hero />
      <SeasonAlert />
      <MainFeatures />
      <MainIntro />
      <ContactUs />
    </div>
  );
};

export default HomeSpa;
