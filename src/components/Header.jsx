import React, { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  const navList = [
    { title: "Home", path: "/space-tourism/" },
    { title: "Destination", path: "/space-tourism/destination" },
    { title: "Crew", path: "/space-tourism/crew" },
    { title: "Technology", path: "/space-tourism/technology" },
  ];
  const [display, setDisplay] = useState("flex");
  const [icon, setIcon] = useState("icon-hamburger.svg");

  const handleHamburger = () => {
    if (icon === "icon-hamburger.svg" && display === "hidden") {
      setIcon("icon-close.svg");
      setDisplay("flex");
    } else {
      setIcon("icon-hamburger.svg");
      setDisplay("hidden");
    }
  };

  return (
    <div className="header absolute flex w-full top-10 justify-between px-12 items-center">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
      </div>
      <nav
        className={`navBar flex gap-10 backdrop-blur-lg items-center px-14 ${display}`}
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
