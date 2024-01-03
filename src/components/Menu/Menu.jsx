import React from "react";
import { Link } from "react-router-dom";
import { scrollTop } from "../../utils";

const Menu = ({ setIsMenuOpen, mainNav }) => {
  const handleOpen = () => {
    setIsMenuOpen(false);
    scrollTop();
  };

  return (
    <div className="menu-list-wrapper">
      <ul className="menu-list">
        {mainNav.map((nav) => (
          <li className="menu-list-item">
            <Link to={nav.link} onClick={() => handleOpen()}>
              {nav.title}
            </Link>
          </li>
        ))}
        <div className="menu-list-donate">
          <Link
            to="/contact-us"
            className="contact-btn"
            onClick={() => handleOpen()}
          >
            Contact Us
          </Link>
        </div>
      </ul>
    </div>
  );
};

export { Menu };
