import { NavLink } from "react-router-dom";

const Header = () => {
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
            <li className="header__menu--item">
              <NavLink
                to={"/"}
                className="hover:text-light transition-all duration-300 text-md font-medium capitalize p-[1rem] header__menu--link"
              >
                Trang Chủ
              </NavLink>
            </li>

            <li className="header__menu--item">
              <NavLink
                to={"/products"}
                className="hover:text-light transition-all duration-300 text-md font-medium capitalize p-[1rem] header__menu--link "
              >
                Sản phẩm
              </NavLink>
            </li>

            <li className="header__menu--item">
              <NavLink
                to={"/service"}
                className="hover:text-light transition-all duration-300 text-md font-medium capitalize p-[1rem] header__menu--link"
              >
                Dịch Vụ
              </NavLink>
            </li>

            <li className="header__menu--item">
              <NavLink
                to={"/gallery"}
                className="hover:text-light transition-all duration-300 text-md font-medium capitalize p-[1rem] header__menu--link"
              >
                Thư Viện Ảnh
              </NavLink>
            </li>
            <li className="header__menu--item">
              <NavLink
                to={"/contact"}
                className="hover:text-light transition-all duration-300 text-md font-medium capitalize p-[1rem] header__menu--link"
              >
                Liên Hệ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
