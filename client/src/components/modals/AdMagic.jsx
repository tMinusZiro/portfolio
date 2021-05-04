import React from "react";
import { useState } from "react";
import cssLogo from "./svg/css3.svg";
import gitLogo from "./svg/git.svg";
import herokuLogo from "./svg/heroku.svg";
import htmlLogo from "./svg/html-5.svg";
import jsLogo from "./svg/javascript.svg";
import leafletLogo from "./svg/react-leaflet-icon.svg";
import nodeLogo from "./svg/nodejs.svg";
import reactLogo from "./svg/react.svg";
import vsCodeLogo from "./svg/visual-studio.svg";

const AdMagic = (props) => {
  return (
    <div className="portfolio-modal-wrapper">
      <h1>AdMagic Sales Dashboard</h1>
      <h3>Project Synopsis</h3>
      <p>
        Member of a 3-person team tasked with creating from scratch an Executive
        Sales Dashboard to solve a big data challenge for a company which lacked
        a centralized sales data repository. The application will also provide
        sales reporting solutions to company’s clients. To show sales analysis,
        the dashboard hosts a variety of filter tools which are responsive to
        real-time database updates and user input.
      </p>
      <h3 className="tech-stack">Skills Utilized:</h3>
      <ul>
        <li>MongoDB and Atlas Cluster</li>
        <li>Interactive map to convey national and global sales numbers</li>
        <li>Apex Charts for data displays</li>
        <li>Advanced functions to query the database based on user input</li>
        <li>Front-end styling from scratch/hand-rolled</li>
      </ul>
      <h3 className="tech-stack">Tech Stack</h3>
      <div className="tech-stack-wrapper">
        <img className="stack-logos" src={htmlLogo} alt="HTML5 Logo" />
        <img className="stack-logos" src={cssLogo} alt="CSS Logo" />
        <img className="stack-logos" src={jsLogo} alt="JavaScript Logo" />
        <img className="stack-logos" src={reactLogo} alt="React Logo" />
        <img className="stack-logos" src={nodeLogo} alt="nodeJS" />
        <img className="stack-logos" src={gitLogo} alt="Git Logo" />
        <img className="stack-logos" src={herokuLogo} alt="Heroku Logo" />
        <img className="stack-logos leaflet-logo" src={leafletLogo} alt="" />
        <img className="stack-logos" src={vsCodeLogo} alt="" />
      </div>
    </div>
  );
};

export default AdMagic;
