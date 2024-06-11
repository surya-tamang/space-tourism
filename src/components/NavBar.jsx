import React from "react";

import { NavLink } from "react-router-dom";

export default function NavBar({ visible }) {
  const navList = [
    { title: "Home", path: "/space-tourism/" },
    { title: "Destination", path: "/space-tourism/destination" },
    { title: "Crew", path: "/space-tourism/crew" },
    { title: "Technology", path: "/space-tourism/technology" },
  ];

  return (
    <nav
      className={`navBar flex gap-10 backdrop-blur-lg items-center px-14 ${visible}`}
    >
      {navList.map((item, index) => {
        const { title, path } = item;
        return (
          <NavLink
            key={index}
            to={path}
            end={path === "/space-tourism/"}
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
  );
}
