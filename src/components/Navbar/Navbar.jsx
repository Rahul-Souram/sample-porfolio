import React, { useState, useEffect } from "react";
// import Logo from "assets/Icons/logo.png"
import { menuItems } from "../../static/data";
import { Menu } from "../Menu";
import { scrollTop } from "../../utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuDisplay = isMenuOpen ? "active" : "";

  const MenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="header-logo">
          {/* <img src={Logo} alt="logo" /> */}
          Logo
        </Link>
        <div className="header-menu-container">
          {menuItems.map((item) => {
            const { title, link } = item;
            return (
              <Link to={link} onClick={() => scrollTop()}>
                {title}
              </Link>
            );
          })}
        </div>
        <div className="menu-bar">
          <button
            type="button"
            className={`${menuDisplay}`}
            onClick={MenuHandler}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div
        className={isMenuOpen ? "active menu-wrapper" : "inactive menu-wrapper"}
      >
        <Menu setIsMenuOpen={setIsMenuOpen} mainNav={menuItems} />
      </div>
    </header>
  );
};

export { Navbar };
