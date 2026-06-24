import React from "react";
import { NavLink } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";

const NavLinks = () => {
  const navClass = ({ isActive }) =>
    `relative font-medium text-[15px] tracking-wide transition-all duration-300
    ${
      isActive
        ? "text-black after:w-full"
        : "text-gray-600 hover:text-black after:w-0 hover:after:w-full"
    }
    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
    after:bg-black after:transition-all after:duration-300`;

  return (
    <div className="flex items-center gap-8">
      <NavLink to="/" className={navClass}>
        Home
      </NavLink>

      <NavLink to="/shop" className={navClass}>
        Shop
      </NavLink>

      <CategoryDropdown />

      <NavLink to="/new-arrivals" className={navClass}>
        New Arrivals
      </NavLink>

      <NavLink to="/contact" className={navClass}>
        Contact
      </NavLink>
    </div>
  );
};

export default NavLinks;