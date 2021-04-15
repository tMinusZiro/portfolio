import React from "react";
import { useState } from "react";
import YelpModal from "./modals/YelpModal.jsx";
import ZorkModal from "./modals/ZorkModal.jsx";
import GeoModal from "./modals/GeoModal.jsx";
import TicModal from "./modals/TicModal.jsx";
import TilModal from "./modals/TilModal.jsx";
import MockModal from "./modals/MockModal.jsx";
const Portfolio = () => {
  return (
    <div>
      <header>
        <h1>Portfolio</h1>
      </header>
      <div id="align-port-grid">
        <main className="port-modal-grid">
          <section className="port-modal ">
            <div className="port-img-wrapper">
              <a href="https://github.com/tMinusZiro/geo-vermonter-tristan-jack-cortney">
                <img
                  src={
                    "https://res.cloudinary.com/tjn-personal/image/upload/v1616452793/personal-site/geo-vermonter_ssr7bo.png"
                  }
                  alt=""
                />
              </a>

              <a href="https://github.com/tMinusZiro/geo-vermonter-tristan-jack-cortney">
                <h3 className="github-link">GitHub Repo</h3>
              </a>
            </div>
            <div className="gen-modal-wrapper">
              <GeoModal />
            </div>
          </section>
          <section className="port-modal flip-port-modal">
            <div className="gen-modal-wrapper">
              <TilModal />
            </div>
            <div className="port-img-wrapper">
              <a href="https://github.com/tMinusZiro/til-tMinusZiro">
                <img
                  src={
                    "https://res.cloudinary.com/tjn-personal/image/upload/v1616452792/personal-site/til_x8qykk.png"
                  }
                  alt=""
                />
              </a>

              <a href="https://github.com/tMinusZiro/til-tMinusZiro">
                <h3 className="github-link">GitHub Repo</h3>
              </a>
            </div>
          </section>
          <section className="port-modal">
            <div className="port-img-wrapper">
              <a href="https://github.com/tMinusZiro/yelpington-tMinusZiro">
                <img
                  src={
                    "https://res.cloudinary.com/tjn-personal/image/upload/v1616452794/personal-site/yelpington_lnxsxf.png"
                  }
                  alt=""
                />
              </a>

              <a href="https://github.com/tMinusZiro/yelpington-tMinusZiro">
                <h3 className="github-link">GitHub Repo</h3>
              </a>
            </div>
            <div className="gen-modal-wrapper">
              <YelpModal />
            </div>
          </section>
          <section className="port-modal flip-port-modal">
            <div className="gen-modal-wrapper">
              <TicModal />
            </div>
            <div className="port-img-wrapper">
              <a href="https://github.com/tMinusZiro/tic-tac-toe-megan-tristan">
                <img
                  src={
                    "https://res.cloudinary.com/tjn-personal/image/upload/v1616452787/personal-site/tic_vyemnm.png"
                  }
                  alt=""
                />
              </a>

              <a href="https://github.com/tMinusZiro/tic-tac-toe-megan-tristan">
                <h3 className="github-link">GitHub Repo</h3>
              </a>
            </div>
          </section>
          <section className="port-modal">
            <div className="port-img-wrapper">
              <a href="https://github.com/tMinusZiro/remock-tMinusZiro">
                <img
                  src={
                    "https://res.cloudinary.com/tjn-personal/image/upload/v1616452792/personal-site/remock_tajrhv.png"
                  }
                  alt=""
                />
              </a>

              <a href="https://github.com/tMinusZiro/remock-tMinusZiro">
                <h3 className="github-link">GitHub Repo</h3>
              </a>
            </div>
            <div className="gen-modal-wrapper">
              <MockModal />
            </div>
          </section>
          <section className="port-modal flip-port-modal">
            <div className="gen-modal-wrapper">
              <ZorkModal />
            </div>
            <div className="port-img-wrapper">
              <a href="https://github.com/tMinusZiro/zorkington-senou-tristan">
                <img
                  src={
                    "https://res.cloudinary.com/tjn-personal/image/upload/v1616452786/personal-site/zork_mq2gwu.png"
                  }
                  alt=""
                />
              </a>

              <a href="https://github.com/tMinusZiro/zorkington-senou-tristan">
                <h3 className="github-link">GitHub Repo</h3>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
