import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Reserve from "./pages/Reserve";
import MainLayout from "./layouts/MainLayout";
import Atractions from "./pages/Atractions";
import NewComment from "./pages/NewComment";
import { useEffect } from "react";
import Contact from "./pages/Contact";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/atractions" element={<Atractions />} />
          <Route path="/newcomment" element={<NewComment />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
