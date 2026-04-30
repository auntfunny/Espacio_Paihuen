import { useState } from "react";
import Comments from "../components/Comments";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import MainFeatures from "../components/MainFeatures";
import MainIntro from "../components/MainIntro";
import SeasonAlert from "../components/SeasonAlert";
import CommentModal from "../components/CommentModal";

const Home = () => {
  const [activeComment, setActiveComment] = useState(null);

  const closeModal = () => {
    setActiveComment(null);
  }

  const openModal = (comment) => {
    setActiveComment(comment);
  }
  
  return (
    <div>
      <Hero />
      <SeasonAlert />
      <MainFeatures />
      <MainIntro />
      <Comments openModal={openModal} />
      <ContactUs />
      {activeComment && <CommentModal comment={activeComment} closeModal={closeModal} />}
    </div>
  );
};

export default Home;
