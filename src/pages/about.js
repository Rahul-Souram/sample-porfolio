import React from "react";
import { bio } from "../static/data";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="my-4">
        <h2 className="text-center">About Me</h2>
        <ul className="about-bio-container">
          {bio.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <div className=" intro-card">
          <h2>My Works</h2>
          <div>
            <div>
              I have built multiple projects based on static, dynamic,
              e-commerce websites and commercial websites.
            </div>
            <p className="fw-bold">
              skills: React js, Redux, Gatsby, Scss, Javascript
            </p>
          </div>
          <Link className="site-btn" to="/my-work">
            my work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
