import React from "react";
import { useState } from "react";
import cssLogo from "./svg/css3.svg";
import gitLogo from "./svg/git.svg";

import htmlLogo from "./svg/html-5.svg";
import jsLogo from "./svg/javascript.svg";

import nodeLogo from "./svg/nodejs.svg";

import vsCodeLogo from "./svg/visual-studio.svg";

const TicModal = (props) => {
  return (
    <div className="portfolio-modal-wrapper">
      <h1>Tic Tac Toe</h1>
      <h3>Project Synopsis</h3>
      <p>
        The classic two player game brought to life in a web application with a
        UI reminiscent of an 80s arcade. Play against another human or the
        computer.
      </p>
      <h3 className="tech-stack">Skills Utilized:</h3>
      <ul>
        <li>Manipulating the DOM</li>
        <li>Event handlers and listeners</li>
        <li>Asynchronous javascript and loops</li>
        <li>Validation</li>
      </ul>
      <h3 className="tech-stack">Tech Stack</h3>
      <div>
        <img className="stack-logos" src={htmlLogo} alt="HTML5 Logo" />
        <img className="stack-logos" src={cssLogo} alt="CSS Logo" />
        <img className="stack-logos" src={jsLogo} alt="JavaScript Logo" />

        <img className="stack-logos" src={nodeLogo} alt="nodeJS" />
        <img className="stack-logos" src={gitLogo} alt="Git Logo" />

        <img className="stack-logos" src={vsCodeLogo} alt="" />
      </div>
    </div>
  );
};

export default TicModal;
