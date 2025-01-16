import { useContext, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { TranslationContext } from "../../../context/TranslationContext";

const Breadcrumb = ({ routes, hidden }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((route) => route);
  const { language } = useContext(TranslationContext);
  const findRoute = (routes, currentPath) => {
    for (let route of routes) {
      if (`/${route.path}` === currentPath) {
        return route;
      }

      if (route.children) {
        const found = findRoute(route.children, currentPath);
        if (found) return found;
      }
    }
    return null;
  };

  const { breadcrumbs, pageTitle } = useMemo(() => {
    let currentPath = "";
    let title = "";
    const breadcrumbList = [];

    // Tìm tất cả các breadcrumb từ cấu trúc routes
    pathnames.forEach((item) => {
      currentPath += `/${item}`;
      const foundRoute = findRoute(routes, currentPath);

      if (foundRoute) {
        breadcrumbList.push({ path: currentPath, name: foundRoute.name });
        if (currentPath === location.pathname) {
          title = foundRoute.name;
        }
      }
    });

    return { breadcrumbs: breadcrumbList, pageTitle: title };
  }, [location.pathname, routes]);
  return (
    <section className="rol-start-2 grid grid-cols-6 gap-[4rem] py-[2rem] bg-gray-200 heading ">
      <nav className="col-start-2 col-span-4 px-[2rem] gap breadcrumb" aria-label="Breadcrumb">
        <ol className="inline-flex items-center justify-start gap-[0.6rem] breadcrumb__menu">
          <li className="breadcrumb__menu--item">
            <NavLink to="/" className=" !text-md breadcrumb__menu--link">
              {language === "vi" ? "Trang Chủ" : "Home"}
            </NavLink>
          </li>
          {breadcrumbs.map((item) => (
            <li className="gap-[0.6rem] breadcrumb__menu--item" key={item.path}>
              <span className="flex items-center justify-center text-xs font-bold text-gray-700 icon">
                <i className="ki-duotone ki-right" />
              </span>
              <NavLink to={item.path} className="!text-md breadcrumb__menu--link">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
};

export default Breadcrumb;
