import React, { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
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

      <NavBar visible={display} />

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
