import MainLayout from "../views/layout/MainLayout";
import Home from "../components/pages/Home/Home";
import ListProducts from "../components/pages/ListProducts/ListProducts";
import Service from "../components/pages/Service/Service";
import Gallery from "../components/pages/Gallery/Gallery";
import Contact from "../components/pages/Contact/Contact";
import Detail from "../components/pages/Detail/Detail";
import { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext";

const AppRoutesConfig = () => {
  const {t} = useContext(TranslationContext)
  return [
    {
      path: "/",
      name: t("header.item1"),
      element: <MainLayout />,
      children: [
        { path: "", name: t("header.item1"), element: <Home /> },
        { path: "products", name: t("header.item2"), element: <ListProducts /> },
        { path: "service", name: t("header.item3"), element: <Service /> },
        { path: "gallery", name: t("header.item5"), element: <Gallery /> },
        { path: "contact", name: t("header.item6"), element: <Contact /> },
        { path: "detail", name: t("header.item4"), element: <Detail /> },
      ],
    },
  ];
}
export { AppRoutesConfig };
