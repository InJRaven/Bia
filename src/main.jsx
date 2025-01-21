import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./views/App.jsx";
import { TranslationProvider } from "./context/TranslationContext.jsx";
import "./assets/scss/index.scss";

createRoot(document.getElementById("root")).render(
  <TranslationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TranslationProvider>
);
