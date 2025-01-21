import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { AppRoutesConfig } from "../routes/AppRoutes";
import ScrollToTop from "../utils/ScrollToTop/ScrollToTop";
import AppProvider from "../context/AppContext";


function App() {

  const routes = useRoutes(AppRoutesConfig());

  return (
    <AppProvider>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </AppProvider>
  );
}

export default App;
