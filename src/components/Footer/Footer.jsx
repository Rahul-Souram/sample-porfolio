import React from "react";
import Icons from "../../assets/icons/icons.svg";
import { Link } from "react-router-dom";
import { footerLinks } from "../../static/data";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <Link to="/" className="footer-logo">
          My Portfolio
        </Link>
        <div className="footer-links-container">
          {footerLinks.map((item) => {
            const { icon, link } = item;
            return (
              <a href={link} target="_blank" rel="noreferrer" key={icon}>
                {" "}
                <svg className="icon-logo">
                  <use xlinkHref={`${Icons}#icon-${icon}`} />
                </svg>
              </a>
            );
          })}
        </div>
      </div>
      <div className="footer-copy">Copyright &copy; John Doe</div>
    </div>
  );
};

export { Footer };
