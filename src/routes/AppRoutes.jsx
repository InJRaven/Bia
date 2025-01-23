import { lazy } from "react";
import MainLayout from "../views/layout/MainLayout";

// Lazy load các component
const Home = lazy(() => import("../components/pages/Home/Home"));
const ListProducts = lazy(() =>
  import("../components/pages/ListProducts/ListProducts")
);
const Service = lazy(() => import("../components/pages/Service/Service"));
const Gallery = lazy(() => import("../components/pages/Gallery/Gallery"));
const Contact = lazy(() => import("../components/pages/Contact/Contact"));
const Detail = lazy(() => import("../components/pages/Detail/Detail"));

const AppRoutesConfig = (t, language, instance) => {
  return [
    {
      path: "/",
      name: t("header.item1"),
      element: <MainLayout />,
      children: [
        { path: "", name: t("header.item1"), element: <Home /> },
        {
          path: "products",
          name: t("header.item2"),
          element: (
            <ListProducts language={language} instance={instance} t={t} />
          ),
        },
        {
          path: "service",
          name: t("header.item3"),
          element: <Service language={language} instance={instance} />,
        },
        {
          path: "gallery",
          name: t("header.item5"),
          element: <Gallery language={language} instance={instance} />,
        },
        {
          path: "contact",
          name: t("header.item6"),
          element: <Contact t={t} />,
        },
        {
          path: "detail",
          name: t("header.item4"),
          element: <Detail />,
        },
      ],
    },
  ];
};

export { AppRoutesConfig };
