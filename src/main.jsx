import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/scss/index.scss";
import App from "./views/App.jsx";
import { TranslationProvider } from "./context/TranslationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TranslationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TranslationProvider>
  </StrictMode>
);
