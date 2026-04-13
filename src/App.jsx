import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Location from "./pages/Location";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Reserve from "./pages/Reserve";
import WhatsappContact from "./components/WhatsappContact";

function App() {
  return (
    <>
      <div>
        <Header />
        <WhatsappContact />
        <main className="w-full min-h-screen bg-acclight">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/photos" element={<Photos />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
