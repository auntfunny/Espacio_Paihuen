import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import WhatsappContact from "../components/WhatsappContact";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-acclight flex flex-col font-body">
      <Header />
      <WhatsappContact />
      <main className="grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
