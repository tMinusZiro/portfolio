import React from "react";
import leftBracket from "./images/left-bracket.svg";
import rightBracket from "./images/right-bracket.svg";

const Home = () => {
  return (
    <div>
      <section id="title-wrapper">
        <h1 id="title">Tristan Nelson</h1>
        <div id="subTitle-flex">
          <img className="title-bracket-left" src={leftBracket} />
          <h2 id="home-subTitle">Full Stack Software Developer</h2>
          <img className="title-bracket-right" src={rightBracket} />
        </div>
      </section>
    </div>
  );
};

export default Home;
