import React from "react";
import { bio } from "../static/data";
import { Link } from "react-router-dom";
import { SlideUpTitle } from "../animations/SlideUpTitle";
import { SlideVertical } from "../animations/SlideVertical";
import { scrollTop } from "../utils";

const About = () => {
  return (
    <div className="container">
      <div className="my-4">
        <SlideUpTitle delaySec={0.2} durationTime={0.8}>
          <h2 className="text-center">About Me</h2>
        </SlideUpTitle>
        <ul className="about-bio-container">
          <SlideVertical delaySec={0.3} durationTime={0.8}>
            {bio.map((item) => {
              return <li>{item}</li>;
            })}
          </SlideVertical>
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
          <Link className="site-btn" to="/my-work" onClick={() => scrollTop()}>
            my work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
