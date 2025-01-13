import { NavLink } from "react-router-dom";
import { ChevronRightIcon } from "../../ui/Icon/Icon";
import './SideBar.scss'
const SideBar = () => {
  return (
    <aside className="w-full min-h-[70vh] h-fit col-start-1 col-span-1 px-[2rem] py-[1.2rem] bg-light border border-light-active flex flex-col items-stretch gap-[0.5rem] rounded-[0.6rem] sidebar">
      <NavLink
        to="/"
        className="inline-flex w-full items-center justify-between text-md text-gray-600 font-semibold transition duration-200 hover:text-dark sidebar-link"
      >
        Dịch Vụ
        <ChevronRightIcon className="h-[1.8rem] w-[1.8rem] text-gray-600 transition duration-200" />
      </NavLink>

      <NavLink
        to="/..c"
        className="inline-flex w-full items-center justify-between text-md text-gray-600 font-semibold transition duration-200 hover:text-dark sidebar-link"
      >
        Dịch Vụ
        <ChevronRightIcon className="h-[1.8rem] w-[1.8rem] text-gray-600 transition duration-200" />
      </NavLink>

      <NavLink
        to="/..c"
        className="inline-flex w-full items-center justify-between text-md text-gray-600 font-semibold transition duration-200 hover:text-dark sidebar-link"
      >
        Dịch Vụ
        <ChevronRightIcon className="h-[1.8rem] w-[1.8rem] text-gray-600 transition duration-200" />
      </NavLink>


      <NavLink
        to="/..c"
        className="inline-flex w-full items-center justify-between text-md text-gray-600 font-semibold transition duration-200 hover:text-dark sidebar-link"
      >
        Dịch Vụ
        <ChevronRightIcon className="h-[1.8rem] w-[1.8rem] text-gray-600 transition duration-200" />
      </NavLink>

      <NavLink
        to="/..c"
        className="inline-flex w-full items-center justify-between text-md text-gray-600 font-semibold transition duration-200 hover:text-dark sidebar-link"
      >
        Dịch Vụ
        <ChevronRightIcon className="h-[1.8rem] w-[1.8rem] text-gray-600 transition duration-200" />
      </NavLink>
      <NavLink
        to="/..c"
        className="inline-flex w-full items-center justify-between text-md text-gray-600 font-semibold transition duration-200 hover:text-dark sidebar-link"
      >
        Dịch Vụ
        <ChevronRightIcon className="h-[1.8rem] w-[1.8rem] text-gray-600 transition duration-200" />
      </NavLink>
      <NavLink
        to="/..c"
        className="inline-flex w-full items-center justify-between text-md text-gray-600 font-semibold transition duration-200 hover:text-dark sidebar-link"
      >
        Dịch Vụ
        <ChevronRightIcon className="h-[1.8rem] w-[1.8rem] text-gray-600 transition duration-200" />
      </NavLink>
      <NavLink
        to="/..c"
        className="inline-flex w-full items-center justify-between text-md text-gray-600 font-semibold transition duration-200 hover:text-dark sidebar-link"
      >
        Dịch Vụ
        <ChevronRightIcon className="h-[1.8rem] w-[1.8rem] text-gray-600 transition duration-200" />
      </NavLink>
      
    </aside>
  );
};

export default SideBar;
