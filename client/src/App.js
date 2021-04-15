import "./index.css";
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
//--------Menu Imports------//
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Passion from "./components/Passion.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Resume from "./components/Resume.jsx";
import Menu from "./components/Menu.jsx";

import { useState } from "react";

function App() {
  //state for toggling burger menu
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  return (
    <div id="body-container">
      <div>
        <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/passion" component={Passion} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
