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
          Hi, <br />
          <br />
          My name is Tristan, I'm 31 and grew up in the wonderful state of
          Vermont. What defines me is my intense curiosity and passion for life.
          I have lots of hobbies and interests - from working on a novel to
          climbing some cliffs - I keep life interesting. My newest hobby is
          more of a life-long career type of thing, its called computer
          programming and I love it. <br />
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
