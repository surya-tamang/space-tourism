import React, { useState } from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navList = [
    { title: "Home", path: "/space-tourism/" },
    { title: "Destination", path: "/space-tourism/destination" },
    { title: "Crew", path: "/space-tourism/crew" },
    { title: "Technology", path: "/space-tourism/technology" },
  ];
  const [isShown, setIsShown] = useState(false);
  const [icon, setIcon] = useState("icon-hamburger.svg");

  const handleHamburger = () => {
    if (icon === "icon-hamburger.svg") {
      setIcon("icon-close.svg");
      setIsShown(true);
    } else {
      setIcon("icon-hamburger.svg");
      setIsShown(false);
    }
  };

  return (
    <div className="header absolute flex w-full top-10 justify-between px-12 items-center z-10">
      <NavLink className="logo" to={"/space-tourism/"}>
        <img src="logo.svg" alt="logo" />
      </NavLink>
      <nav
        className={`navBar flex gap-6 backdrop-blur-lg items-center px-14 ${
          isShown ? "showNavBar" : ""
        }`}
      >
        <NavBar list={navList} />
      </nav>
      <div className="hamburger">
        <img
          src={icon}
          alt="icon-hamburger"
          id="open"
          onClick={handleHamburger}
        />
      </div>
    </div>
  );
};

export default Header;
