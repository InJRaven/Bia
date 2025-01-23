import { Suspense, useContext } from "react";
import { useRoutes } from "react-router-dom";
import { AppRoutesConfig } from "../routes/AppRoutes";
import ScrollToTop from "../utils/ScrollToTop/ScrollToTop";
import { AppContext } from "../context/AppContext";

function App() {
  const {t, language, instance} = useContext(AppContext)
  const routes = useRoutes(AppRoutesConfig(t, language, instance));

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </>
  );
}

export default App;
