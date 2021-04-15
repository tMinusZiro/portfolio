import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import cssLogo from "./svg/css3.svg";
import gitLogo from "./svg/git.svg";
import herokuLogo from "./svg/heroku.svg";
import htmlLogo from "./svg/html-5.svg";
import jsLogo from "./svg/javascript.svg";
import leafletLogo from "./svg/react-leaflet-icon.svg";
import mongoLogo from "./svg/mongodb.svg";
import nodeLogo from "./svg/nodejs.svg";
import reactLogo from "./svg/react.svg";
import vsCodeLogo from "./svg/visual-studio.svg";

const YelpModal = (props) => {
  return (
    <div className="portfolio-modal-wrapper">
      <h1>Yelpington</h1>
      <h3>Project Synopsis</h3>
      <p>
        A proof of concept application modeled after Yelp. The user can select
        from a directory of restaurants that correspond to markers on an
        in-browser interactive map. Individual restaurant pages are populated
        with the relevant data from an API endpoint via a fetch.
      </p>
      <h3 className="tech-stack">Skills Utilized:</h3>
      <ul>
        <li>AJAX</li>
        <li>ExpressJS</li>
        <li>JSON</li>
        <li>Leaflet Maps</li>
        <li>React Hooks</li>
      </ul>
      <h3 className="tech-stack">Tech Stack</h3>
      <div>
        <img className="stack-logos" src={htmlLogo} alt="HTML5 Logo" />
        <img className="stack-logos" src={cssLogo} alt="CSS Logo" />
        <img className="stack-logos" src={jsLogo} alt="JavaScript Logo" />
        <img className="stack-logos" src={reactLogo} alt="React Logo" />
        <img className="stack-logos" src={nodeLogo} alt="nodeJS" />
        <img className="stack-logos" src={gitLogo} alt="Git Logo" />
        <img className="stack-logos leaflet-logo" src={leafletLogo} alt="" />
        <img className="stack-logos" src={vsCodeLogo} alt="" />
      </div>
    </div>
  );
};

export default YelpModal;
