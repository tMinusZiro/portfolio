import React from "react";
import { Link } from "react-router-dom";
import contactIcon from "./images/contact-icon.svg";
import homeIcon from "./images/home-icon.svg";
import passionIcon from "./images/passion-icon.svg";
import aboutIcon from "./images/about-icon.svg";
import portfolioIcon from "./images/portfolio-icon.svg";

const Menu = (props) => {
  function flipMenu() {
    props.openMenu
      ? props.setOpenMenu(!props.openMenu)
      : props.setOpenMenu(props.openMenu);
  }

  return (
    <div>
      {/*create ternary style to toggle the menu open and closed */}
      <section
        id="menu"
        style={
          props.openMenu
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-100%)" }
        }
      >
        <Link className="menu-link" onClick={flipMenu} to={`/`}>
          <img src={homeIcon} />
          Home
        </Link>
        <Link className="menu-link" onClick={flipMenu} to={`/portfolio`}>
          <img src={portfolioIcon} />
          Portfolio
        </Link>
        <Link className="menu-link" onClick={flipMenu} to={`/passion`}>
          <img src={passionIcon} />
          Passion
        </Link>

        <Link className="menu-link" onClick={flipMenu} to={`/about`}>
          <img src={aboutIcon} />
          About
        </Link>
        <Link className="menu-link" onClick={flipMenu} to={`contact`}>
          <img src={contactIcon} />
          Contact
        </Link>
      </section>
    </div>
  );
};

export default Menu;
