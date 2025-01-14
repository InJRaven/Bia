import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/partials/Header/Header";
import Footer from "../../components/partials/Footer/Footer";
import SideBar from "../../components/partials/SideBar/SideBar";
import Breadcrumb from "../../components/ui/Breadcrumb/Breadcrumb";

import { AppRoutesConfig } from "../../routes/AppRoutes";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const hidden =
    (location.pathname === "/") | (location.pathname === "/service");
  let hiddenTitle = "";
  if (location.pathname === "/contact" || location.pathname === "/detail") {
    hiddenTitle = "title";
  }

  return (
    <div
      className={`grid grid-cols-1 ${
        hidden ? "grid-rows-[auto_1fr_auto]" : "grid-rows-[auto_auto_1fr_auto]"
      } min-h-screen`}
    >
      <Header />
      {!hidden && (
        <Breadcrumb routes={AppRoutesConfig()} hidden={hiddenTitle} />
      )}

      <div className="row-start-3 row-span-1 col-start-1 w-full grid grid-cols-6 gap-[2rem] px-[3.2rem] py-[2rem]">
        {isHomePage && <SideBar />}
        <main className="w-full col-start-2 col-span-4 flex flex-col gap-[2rem]">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
