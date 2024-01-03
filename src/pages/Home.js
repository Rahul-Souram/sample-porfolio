import React from "react";
import { Banner } from "../components";
import { Link } from "react-router-dom";
import { SlideSide } from "../animations/SlideSide";
import { SlideVertical } from "../animations/SlideVertical";
import { scrollTop } from "../utils";

const Home = () => {
  const title = "Hello, This is John Doe";
  const description = "I'm a Front end Developer";
  const img =
    "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=";

  return (
    <div className="container my-4">
      <SlideVertical durationTime={0.8} delaySec={0.5} side="bottom">
        <Banner title={title} description={description} img={img} />
      </SlideVertical>
      <div className="d-flex justify-center flex-column">
        <SlideSide durationTime={0.8} delaySec={0.5} side="left">
          <div className=" intro-card">
            <h2>About Me</h2>
            <ul className="text-start">
              <li>John Doe</li>
              <li>Self Taught Developer</li>
              <li>2.5 Experience in React JS Developer role</li>
              <li>Hyderabad</li>
            </ul>
            <Link className="site-btn" to="/about" onClick={() => scrollTop()}>
              About me
            </Link>
          </div>
        </SlideSide>
        <SlideSide durationTime={0.8} delaySec={0.5} side="right">
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
            <Link
              className="site-btn"
              to="/my-work"
              onClick={() => scrollTop()}
            >
              my work
            </Link>
          </div>
        </SlideSide>
        <SlideSide durationTime={0.8} delaySec={0.5} side="left">
          <div className="intro-card text-center">
            <h3 className="text-center">Get In Touch</h3>
            <p>you can reach me out by clicking below</p>
            <Link
              to="/contact"
              className="site-btn"
              onClick={() => scrollTop()}
            >
              Contact
            </Link>
          </div>
        </SlideSide>
      </div>
    </div>
  );
};

export default Home;
