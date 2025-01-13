import MainLayout from "../views/layout/MainLayout";
import Home from "../components/pages/Home/Home";
import ListProducts from "../components/pages/ListProducts/ListProducts";
import Service from "../components/pages/Service/Service";
import Gallery from "../components/pages/Gallery/Gallery";
import Contact from "../components/pages/Contact/Contact";
import Detail from "../components/pages/Detail/Detail";

const AppRoutesConfig = [
  {
    path: "/",
    name: "Trang Chủ",
    element: <MainLayout />,
    children: [
      { path: "", name: "Trang Chủ", element: <Home /> },
      { path: "products", name: "Sản Phẩm", element: <ListProducts /> },
      { path: "service", name: "Dịch Vụ", element: <Service /> },
      { path: "gallery", name: "Phòng Trưng Bày", element: <Gallery /> },
      { path: "contact", name: "Liên hệ", element: <Contact /> },
      { path: "detail", name: "Thông Tin Sản Phẩm", element: <Detail /> },
    ],
  },
];
export { AppRoutesConfig };
