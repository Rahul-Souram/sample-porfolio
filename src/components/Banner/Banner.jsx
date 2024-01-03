import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ title, description, img }) => {
  return (
    <div className="banner-container">
      <div className="banner-container-image">
        <img src={img} alt={title} />
      </div>
      <div className="banner-container-details">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <Link to="/about">Know More</Link>
      </div>
    </div>
  );
};

export { Banner };
