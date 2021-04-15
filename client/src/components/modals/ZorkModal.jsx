import React from "react";
import { useState } from "react";

import gitLogo from "./svg/git.svg";

import jsLogo from "./svg/javascript.svg";

import nodeLogo from "./svg/nodejs.svg";

import vsCodeLogo from "./svg/visual-studio.svg";

const ZorkModal = (props) => {
  return (
    <div className="portfolio-modal-wrapper">
      <h1>Zorkington</h1>
      <h3>Project Synopsis</h3>
      <p>
        One of the first projects I completed at Burlington Code Academy,
        Zorkington is based on the classic text based adventure game popularized
        in the 1970s. Built with vanilla JavaScript in a NodeJS environment and
        runs on the Command Line Interface.
      </p>
      <h3 className="tech-stack">Skills Utilized:</h3>
      <ul>
        <li>Classes, methods, objects, and loops</li>
        <li>Encapsulation</li>
        <li>State and state transitions</li>
        <li>Data structures</li>
      </ul>
      <h3 className="tech-stack">Tech Stack</h3>
      <div>
        <img className="stack-logos" src={jsLogo} alt="JavaScript Logo" />
        <img className="stack-logos" src={nodeLogo} alt="nodeJS" />
        <img className="stack-logos" src={gitLogo} alt="Git Logo" />

        <img
          className="stack-logos"
          src={vsCodeLogo}
          alt="Visual Studio Code"
        />
      </div>
    </div>
  );
};

export default ZorkModal;
