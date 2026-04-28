import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { PhotoProvider } from "./context/PhotoContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { InfoProvider } from "./context/InfoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <PhotoProvider>
          <InfoProvider>
            <App />
          </InfoProvider>
        </PhotoProvider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>,
);
