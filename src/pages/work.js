import React from "react";
import { workBio } from "../static/data";
import { truncate } from "../utils";

const Work = () => {
  const workData = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "https://news.blr.com/app/uploads/sites/3/2019/10/Team-project.jpg",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-11/data-science-projects.jpg",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-11/data-science-projects.jpg",
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "https://news.blr.com/app/uploads/sites/3/2019/10/Team-project.jpg",
    },
  ];
  return (
    <div className="container">
      <div className="my-4">
        <h2 className="text-center">My Work</h2>
        <ul className="about-bio-container">
          {workBio.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <div className="work-container">
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
        </div>
      </div>
    </div>
  );
};

export default Work;
