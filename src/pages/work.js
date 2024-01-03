import React from "react";
import { workBio, workData } from "../static/data";
import { truncate } from "../utils";
import { CardAnimation } from "../animations/CardAnimation";
import { SlideVertical } from "../animations/SlideVertical";
import { SlideUpTitle } from "../animations/SlideUpTitle";

const Work = () => {
  return (
    <div className="container">
      <div className="my-4">
        <SlideUpTitle delaySec={0.2} durationTime={0.8}>
          <h2 className="text-center">My Work</h2>
        </SlideUpTitle>
        <ul className="about-bio-container">
          <SlideVertical delaySec={0.5} durationTime={0.8}>
            {workBio.map((item) => {
              return <li>{item}</li>;
            })}
          </SlideVertical>{" "}
        </ul>
        <SlideUpTitle delaySec={0.5} durationTime={0.8}>
          <h4 className="text-center">My Projects</h4>
        </SlideUpTitle>
        <div className="work-container">
          <CardAnimation delaySec={0.3} durationTime={0.5}>
            {workData.map((item) => {
              const { title, description, img } = item;
              return (
                <div className="work-container-item">
                  <div className="work-container-item-details">
                    <h4>{title}</h4>
                    <div>{truncate(description, 200)}</div>
                  </div>
                  <div className="work-container-item-image">
                    <img src={img} alt={title} />
                  </div>
                </div>
              );
            })}
          </CardAnimation>
        </div>
      </div>
    </div>
  );
};

export default Work;
