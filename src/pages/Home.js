import React from "react";
import { Banner } from "../components";
import { Link } from "react-router-dom";

const Home = () => {
  const title = "Hello, This is John Doe";
  const description = "I'm a Front end Developer";
  const img =
    "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.webp?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=";

  return (
    <div className="container my-4">
      <Banner title={title} description={description} img={img} />
      <div className="text-center my-3">
        <h2>About Me</h2>
        <Link className="site-btn" to="/about">
          About me
        </Link>
      </div>
      <div className="text-center my-3">
        <h2>My Works</h2>
        <Link className="site-btn" to="/work">
          my work
        </Link>
      </div>
    </div>
  );
};

export default Home;
