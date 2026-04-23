import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { PhotoProvider } from "./context/PhotoContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <PhotoProvider>
          <App />
        </PhotoProvider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>,
);
