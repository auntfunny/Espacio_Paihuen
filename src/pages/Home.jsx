import Comments from "../components/Comments";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import MainFeatures from "../components/MainFeatures";
import MainIntro from "../components/MainIntro";
import SeasonAlert from "../components/SeasonAlert";

const Home = () => {
  return (
    <div>
      <Hero />
      <SeasonAlert />
      <MainFeatures />
      <MainIntro />
      <Comments />
      <ContactUs />
    </div>
  );
};

export default Home;
