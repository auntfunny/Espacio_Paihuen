import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Reserve from "./pages/Reserve";
import MainLayout from "./layouts/MainLayout";
import Attractions from "./pages/Attractions";
import NewComment from "./pages/NewComment";
import { useEffect } from "react";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Reservations from "./pages/Reservations";
import ProtectedAdmin from "./routes/ProtectedAdmin";

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
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/newcomment" element={<NewComment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route /* element={<ProtectedAdmin />} */>
            <Route path="/reservations" element={<Reservations />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
