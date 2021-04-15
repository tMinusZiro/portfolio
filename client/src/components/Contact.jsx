import React from "react";
import { Link } from "react-router-dom";
import linkdinSVG from "./images/linkedin.svg";
import githubSVG from "./images/github.svg";
import discordSVG from "./images/discord.svg";
import twitterSVG from "./images/outline-twitter.svg";
import emailSVG from "./images/gmail.svg";
import FileSaver from "file-saver";

const Contact = () => {
  // let downloadResume = function () {
  //   FileSaver.saveAs(
  //     process.env.PUBLIC_URL + "/resource/tristan-nelson-resume-2021.pdf",
  //     "tristan-nelson-resume.pdf"
  //   );
  // };

  return (
    <div>
      <header>
        <h1>Contact</h1>
      </header>
      <section id="contact-flex-container">
        <a href="https://twitter.com/tMinusZiro">
          <img
            className="contact-logos"
            src={twitterSVG}
            alt="Twitter Logo"
            rel="noreferrer noopener"
            target="_blank"
          />
        </a>
        <a href="https://discord.com/">
          <img
            className="contact-logos"
            src={discordSVG}
            alt="Discord Logo"
            rel="noreferrer noopener"
            target="_blank"
          />
        </a>
        <a href="https://github.com/tMinusZiro">
          <img
            className="contact-logos"
            src={githubSVG}
            alt="GitHub Logo"
            rel="noreferrer noopener"
            target="_blank"
          />
        </a>
        <a href="https://www.linkedin.com/in/tristan-nelson-63b4a1b2/">
          <img
            className="contact-logos"
            src={linkdinSVG}
            alt="LinkedIn Logo"
            rel="noreferrer noopener"
            target={"_blank"}
          />
        </a>
        <a href="mailto:tnelson380@gmail.com?subject=Mail from Tristan Nelson Site">
          <img
            className="contact-logos"
            src={emailSVG}
            rel="noreferrer noopener"
            alt="Gmail Logo"
          />
        </a>
      </section>
      <div id="resume-wrapper">
        <Link
          id="resume-link"
          to="/resource/tristan-nelson-resume-2021.pdf"
          rel="noreferrer noopener"
          target="_blank"
          download
        >
          Download Resume
        </Link>
      </div>

      {/* <form>
        <label htmlFor="name">Name</label>
        <input type="text" value="name" />
        <label htmlFor="email">Email</label>
        <input type="email" value="email" />
        <label htmlFor="comments">Comments</label>
        <textarea
          name="comments"
          id="comment-form-textArea"
          cols="30"
          rows="10"
        ></textarea>
      </form> */}
    </div>
  );
};

export default Contact;
