import React from "react";

import { NavLink } from "react-router-dom";

export default function NavBar({ list,handle }) {
  return (
    <>
      {list.map((item, index) => {
        const { title, path } = item;
        return (
          <NavLink
            key={index}
            to={path}
            end={path === "/space-tourism/"}
            onClick={handle}
            className={({ isActive }) =>
              `navs flex gap-2 uppercase text-slate-50 relative py-5 px-3 ${
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
