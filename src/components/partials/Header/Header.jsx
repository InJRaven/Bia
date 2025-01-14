import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TranslationContext } from "../../../context/TranslationContext"; // Adjust the import path
import { US, VN } from 'country-flag-icons/react/3x2'
const Header = () => {
  const { language, changeLanguage, t } = useContext(TranslationContext);
  const menuItems = [
    { to: "/", label: t("header.item1") },
    { to: "/products", label: t("header.item2") },
    { to: "/service", label: t("header.item3") },
    { to: "/gallery", label: t("header.item5") },
    { to: "/contact", label: t("header.item6") },
  ];
  return (
    <header className="w-full bg-dark shadow-header flex flex-col items-center header">
      <div className="w-full bg-dark flex items-center justify-center py-[0.8rem] border-b-[1px] border-gray-400 header__introduce">
        <span className="uppercase text-white font-medium text-xs">
          DARIUSPHAN CUSTOM CUES AND REPAIR SERVICE
        </span>
      </div>
      <div className="w-full grid grid-cols-6 gap-[4rem] py-[1.6rem] px-[3.2rem]">
        <div className="w-full col-start-2 col-span-4 inline-flex items-center justify-between header__container">
          <div className="logo">
            <span className="text-display-xs text-white">Logo</span>
          </div>
          <ul className="flex list-none items-center gap-[3.2rem] header__menu">
            {menuItems.map((item, index) => (
              <li key={index} className="header__menu--item">
                <NavLink
                  to={item.to}
                  className="hover:text-light transition-all duration-300 text-md font-medium capitalize p-[1rem] header__menu--link"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="inline-flex items-center w-fit transition duration-200 px-[1rem] py-[0.8rem] border-b border-dark rounded-[0.6rem] text-xs text-light-active font-medium hover:text-light hover:border-light"
            onClick={changeLanguage}
          >
            {language === "vi" ? (
              <span className="inline-flex gap-[0.5rem] items-center">
                <VN title="Vietnamese" className="h-[2rem] w-[2rem]" />
                Vietnamese
              </span>
            ) : (
              <span className="inline-flex gap-[0.5rem] items-center">
                <US title="United States" className="h-[2rem] w-[2rem]" />
                English
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
