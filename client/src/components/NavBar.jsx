import React from "react";

const NavBar = (props) => {
  return (
    <section
      className="burger-menu"
      onClick={() => {
        props.setOpenMenu(!props.openMenu);
      }}
    >
      {/*Burger Menu Stack */}

      <div
        id="burger-line-one"
        style={
          props.openMenu
            ? { transform: "rotate(45deg)", background: "black" }
            : { transform: "rotate(0)", background: "rgb(239, 255, 250)" }
        }
      />
      <div
        id="burger-line-two"
        style={
          props.openMenu
            ? { opacity: 0, transform: "translateX(20px)", background: "black" }
            : {
                opacity: 1,
                transform: "translateX(0)",
                background: "rgb(239, 255, 250)",
              }
        }
      />
      <div
        id="burger-line-three"
        style={
          props.openMenu
            ? { transform: "rotate(-45deg)", background: "black" }
            : { transform: "rotate(0)", background: "rgb(239, 255, 250)" }
        }
      />
    </section>
  );
};

export default NavBar;
