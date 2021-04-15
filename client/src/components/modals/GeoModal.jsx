import React from "react";
import { useState } from "react";
import cssLogo from "./svg/css3.svg";
import gitLogo from "./svg/git.svg";
import herokuLogo from "./svg/heroku.svg";
import htmlLogo from "./svg/html-5.svg";
import jsLogo from "./svg/javascript.svg";
import leafletLogo from "./svg/leaflet.svg";
import nodeLogo from "./svg/nodejs.svg";
import reactLogo from "./svg/react.svg";
import vsCodeLogo from "./svg/visual-studio.svg";

const GeoModal = (props) => {
  return (
    <div className="portfolio-modal-wrapper">
      <h1>Geo-Vermonter</h1>
      <h3>Project Synopsis</h3>
      <p>
        Inspired by web based geo-guesser games powered with Google Maps. In
        this version the user must guess which Vermont county they are in. The
        application was my first using React and proved an enjoyable challenge
        integrating complex mapping components with React Leaflet.
      </p>
      <h3 className="tech-stack">Skills Utilized:</h3>
      <ul>
        <li>Web layout and UI with React</li>
        <li>Embedding map APIs</li>
        <li>Geocoding APIs</li>
        <li>React hooks based approach</li>
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

export default GeoModal;
