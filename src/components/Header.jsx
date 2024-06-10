import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navList = [
    { title: "Home", path: "/space-tourism/" },
    { title: "Destination", path: "/space-tourism/destination" },
    { title: "Crew", path: "/space-tourism/crew" },
    { title: "Technology", path: "/space-tourism/technology" },
  ];

  return (
    <div className="absolute flex w-full top-10 justify-between px-12">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
      </div>

      <nav className="flex gap-10 backdrop-blur-lg items-center px-12">
        {navList.map((item, index) => {
          const { title, path } = item;
          return (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `navs flex gap-2 uppercase text-slate-50 relative py-5 ${
                  isActive ? "navs_active" : ""
                }`
              }
            >
              <span>0{index}</span>
              <p>{title}</p>
            </NavLink>
          );
        })}
      </nav>
      <div className="sm:hidden"> 
        <img src="icon-hamburger.svg" alt="icon-hamburger" />
        <img src="icon-close.svg" alt="icon-close" />
      </div>
    </div>
  );
};

export default Header;
