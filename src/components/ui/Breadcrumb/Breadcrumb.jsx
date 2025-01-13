import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumb = ({ routes, hidden }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((route) => route);

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

  if (hidden === 'heading') {
    return null;  // If 'hidden' is 'heading', we don't render the section
  }
  if (hidden === 'title'){
    return (
      <section className="w-full flex flex-col gap-[0.5rem] py-[2rem] heading">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="inline-flex items-center justify-start gap-[0.6rem] breadcrumb__menu">
          <li className="breadcrumb__menu--item">
            <NavLink to="/" className="breadcrumb__menu--link">
              Trang Chủ
            </NavLink>
          </li>
          {breadcrumbs.map((item) => (
            <li className="gap-[0.6rem] breadcrumb__menu--item" key={item.path}>
              <span className="flex items-center justify-center text-xs font-bold text-gray-700 icon">
                <i className="ki-duotone ki-right" />
              </span>
              <NavLink to={item.path} className="breadcrumb__menu--link">
                {item.name}
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
    </section>
    )
  }
  return (
    <section className="w-full flex flex-col gap-[0.5rem] py-[2rem] heading">
      <h1 className="text-display-md font-bold title">{pageTitle}</h1>
      {hidden !== 'breadcrumb'}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="inline-flex items-center justify-start gap-[0.6rem] breadcrumb__menu">
          <li className="breadcrumb__menu--item">
            <NavLink to="/" className="breadcrumb__menu--link">
              Trang Chủ
            </NavLink>
          </li>
          {breadcrumbs.map((item) => (
            <li className="gap-[0.6rem] breadcrumb__menu--item" key={item.path}>
              <span className="flex items-center justify-center text-xs font-bold text-gray-700 icon">
                <i className="ki-duotone ki-right" />
              </span>
              <NavLink to={item.path} className="breadcrumb__menu--link">
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
