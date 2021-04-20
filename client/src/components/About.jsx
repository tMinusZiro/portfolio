import React from "react";
import { Link } from "react-router-dom";
import contactLink from "./images/placeholder.svg";
const About = () => {
  return (
    <div>
      <header>
        <h1>About</h1>
      </header>
      <main id="about-main-wrapper">
        <figure id="about-image-wrapper">
          <img
            src={
              "https://res.cloudinary.com/tjn-personal/image/upload/v1616452791/personal-site/graphic-tristan_uyrgea.png"
            }
            alt="Graphic Design of Tristan Nelson"
            title="Tristan Nelson"
          />
          {/* <figcaption style={{ color: "white" }}>Tristan Nelson</figcaption> */}
        </figure>
        <p>
          <br />
          I am Tristan. I'm 31 and grew up in Vermont. What defines me is my
          intense curiosity and passion for life. I get excited about the
          outdoors and in particular rock climbing. My background was in more
          academic historical research, but recently I pivoted and began a
          career in software development. What I enjoy most so far in this new
          field is the feeling you get when a particularly tough problem is
          finally solved.
          <br />
          <br />
          If you’re curious about my journey as a developer check out my
          portfolio. Feel free to reach out via social media or email. <br />
          <br />
          Links found here:
          <Link id="about-contact-link" to="/contact">
            <img src={contactLink} />
          </Link>
        </p>
      </main>
    </div>
  );
};

export default About;
