import React from "react";

import { NavLink } from "react-router-dom";

export default function NavBar({ list }) {
  return (
    <>
      {list.map((item, index) => {
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
    </>
  );
}
