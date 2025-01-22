import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { AppRoutesConfig } from "../routes/AppRoutes";
import ScrollToTop from "../utils/ScrollToTop/ScrollToTop";



function App() {
  const routes = useRoutes(AppRoutesConfig());

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>{routes}</Suspense>
    </>
  );
}

export default App;
