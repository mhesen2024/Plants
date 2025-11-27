import React from "react";
import {  NavLink } from "react-router-dom";

export default function NavLinks({ to, title, setIsMobileMenuOpen }) {
  return (
    <>
      
          <NavLink 
              to={to}
              className={({ isActive }) =>
                ` nav-link hover:text-green-600   text-shadow-emerald-100 text-shadow-lg  ${isActive ? " text-green-600 font-semibold  text-shadow-emerald-200 text-shadow-lg  " : "text-gray-700"}`
              }
            >
              <span className="text-lg ml-2">{title}</span> 
            </NavLink>
    </>
  );
}