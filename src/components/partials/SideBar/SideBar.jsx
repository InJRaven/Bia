import { NavLink } from "react-router-dom";
import { ChevronRightIcon } from "../../ui/Icon/Icon";
import "./SideBar.scss";
import { TranslationContext } from "../../../context/TranslationContext";
import { useContext } from "react";

const SideBar = () => {
  const { language } = useContext(TranslationContext);

  const menuItems = [
    {
      to: "/",
      label: `${language === "vi" ? "Trang Chủ" : "Home"}`,
    },
    {
      to: "/service",
      label: `${language === "vi" ? "Dịch Vụ 1" : "Service 1"}`,
    },
    {
      to: "/service",
      label: `${language === "vi" ? "Dịch Vụ 1" : "Service 1"}`,
    },
    {
      to: "/service",
      label: `${language === "vi" ? "Dịch Vụ 1" : "Service 1"}`,
    },
    {
      to: "/service",
      label: `${language === "vi" ? "Dịch Vụ 1" : "Service 1"}`,
    },
    {
      to: "/service",
      label: `${language === "vi" ? "Dịch Vụ 1" : "Service 1"}`,
    },
    {
      to: "/service",
      label: `${language === "vi" ? "Dịch Vụ 1" : "Service 1"}`,
    },
    {
      to: "/service",
      label: `${language === "vi" ? "Dịch Vụ 1" : "Service 1"}`,
    },
  ];
  return (
    <aside className="w-full h-fit col-start-1 col-span-1 bg-light border border-light-active flex flex-col items-stretch rounded-[0.6rem] sidebar">
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          target="_blank"
          className="inline-flex w-full items-center justify-between text-md xs:text-xs text-gray-600 font-semibold transition duration-200 hover:text-dark hover:bg-gray-200 sidebar-link"
        >
          {item.label}
          <ChevronRightIcon className="h-7 w-7 text-gray-600 transition duration-200" />
        </NavLink>
      ))}
    </aside>
  );
};

export default SideBar;
