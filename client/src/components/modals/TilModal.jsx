import React from "react";
import { useState } from "react";
import cssLogo from "./svg/css3.svg";
import gitLogo from "./svg/git.svg";
import herokuLogo from "./svg/heroku.svg";
import htmlLogo from "./svg/html-5.svg";
import jsLogo from "./svg/javascript.svg";

import mongoLogo from "./svg/mongodb.svg";
import nodeLogo from "./svg/nodejs.svg";
import reactLogo from "./svg/react.svg";
import vsCodeLogo from "./svg/visual-studio.svg";

const TilModal = (props) => {
  return (
    <div className="portfolio-modal-wrapper">
      <h1>Today I Learned</h1>
      <h3>Project Synopsis</h3>
      <p>
        A project built during my time at the Burlington Code Academy applying
        full CRUD functionality. This is a full-stack application built from the
        ground up using MongoDB, ExpressJS, and React. Users can submit daily
        journal entries, review past entries, update any of them, and delete if
        necessary. Working on a refactor that will allow for filtering search
        results.
      </p>
      <h3 className="tech-stack">Skills Utilized:</h3>
      <ul>
        <li>ExpressJS</li>
        <li>CRUD</li>
        <li>Mongoose</li>
        <li>MongoDB</li>
        <li>React</li>
      </ul>
      <h3 className="tech-stack til-stack">Tech Stack</h3>
      <div>
        <img
          className="stack-logos til-logos"
          src={htmlLogo}
          alt="HTML5 Logo"
        />
        <img className="stack-logos til-logos" src={cssLogo} alt="CSS Logo" />
        <img
          className="stack-logos til-logos"
          src={jsLogo}
          alt="JavaScript Logo"
        />
        <img
          className="stack-logos til-logos"
          src={reactLogo}
          alt="React Logo"
        />
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        <img className="stack-logos til-logos" src={nodeLogo} alt="nodeJS" />
        <img className="stack-logos til-logos" src={gitLogo} alt="Git Logo" />
        <img className="stack-logos til-logos" src={mongoLogo} alt="" />
        <img className="stack-logos til-logos" src={vsCodeLogo} alt="" />
      </div>
    </div>
  );
};

export default TilModal;
