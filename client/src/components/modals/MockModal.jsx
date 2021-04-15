import React from "react";
import { useState } from "react";
import cssLogo from "./svg/css3.svg";
import gitLogo from "./svg/git.svg";
import herokuLogo from "./svg/heroku.svg";
import htmlLogo from "./svg/html-5.svg";
import jsLogo from "./svg/javascript.svg";

import nodeLogo from "./svg/nodejs.svg";

import vsCodeLogo from "./svg/visual-studio.svg";

const MockModal = (props) => {
  return (
    <div className="portfolio-modal-wrapper">
      <h1>Remock</h1>
      <h3>Project Synopsis</h3>
      <p>
        Implementing UI/UX methodology, the goal was to re-create several blog
        style web pages from a mock-up. Of course, I felt compelled to add my
        own cheeky humor to the project, combining my love for Sean Connery and
        Charcuterie...Sean Cuterie.
      </p>
      <h3 className="tech-stack">Skills Utilized:</h3>
      <ul>
        <li>CSS flexbox and grid</li>
        <li>Positioning, images, and white space</li>
        <li>Modifying CSS with event listeners and handlers</li>
        <li>Color pallet</li>
        <li>Matching typography</li>
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

export default MockModal;
