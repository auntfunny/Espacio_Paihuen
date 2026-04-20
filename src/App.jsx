import { Route, Routes } from "react-router-dom";
import HomeSpa from "./pages/HomeSpa";
import Ubicacion from "./pages/Ubicacion";
import Photos from "./pages/Fotos";
import Sobre from "./pages/Sobre";
import Reservar from "./pages/Reservar";
import MainLayout from "./layouts/MainLayout";
import Atracciones from "./pages/Atracciones";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeSpa />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/reserva" element={<Reservar />} />
          <Route path="/fotos" element={<Photos />} />
          <Route path="/atracciones" element={<Atracciones />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
