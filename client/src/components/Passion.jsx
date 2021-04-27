import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Passion = () => {
  return (
    <div>
      <header>
        <h1>Passion</h1>
      </header>
      <section
        id="carousel-flex-container"
        style={{ position: "relative", zIndex: 0 }}
      >
        <AliceCarousel
          autoplay={true}
          autoPlayInterval={2000}
          fadeOutAnimation={true}
          startIndex={1}
          duration={400}
          autoPlayActionDisabled={true}
        >
          <div className="carousel-img-wrapper">
            <img
              src={
                "https://res.cloudinary.com/tjn-personal/image/upload/v1616453183/personal-site/climbing_wzolfq.png"
              }
              className="imgCarousel"
              alt=""
            />
            <h2>Climbing</h2>

            <ul className="passion-list">
              <li>Favorite Style: Sport</li>
              <li>Most Memorable Trip: Red River Gorge, Ky</li>
              <li>Started: 2015</li>

              <li className="climbing-one">Dream Trip: Spain</li>
              <li>Shoes: LaSportiva Katana</li>
            </ul>
          </div>
          <div className="carousel-img-wrapper">
            <img
              src={
                "https://res.cloudinary.com/tjn-personal/image/upload/v1616453181/personal-site/biking_vh2o2b.png"
              }
              className="imgCarousel"
              alt=""
            />
            <h2>Biking</h2>
            <ul className="passion-list passion-bike-list">
              <li className="li-one">
                Current Mountain Bike: Cannondale Trail4
              </li>
              <li className="li-two">Current Road Bike: Surly Crosscheck</li>
              <li className="li-three">Dream Trip: Moab, UT</li>
              <li className="li-four">Started: 2016</li>
              <li className="li-five">
                Most Impressive Trail: Kingdom Trails, VT
              </li>
              <li className="li-six">Wish List: Santa Cruz Hightower</li>
            </ul>
          </div>
          <div className="carousel-img-wrapper">
            <img
              src={
                "https://res.cloudinary.com/tjn-personal/image/upload/v1616453192/personal-site/history_pvn2n5.png"
              }
              className="imgCarousel"
              alt=""
            />
            <h2>History</h2>
            <p>
              To me, history is about studying the lives of those who came
              before us to learn what lessons they can teach us. We do that to
              build a shared understanding of the past in an effort to foster an
              inclusive future and sense of place for our local, regional, and
              national communities.
            </p>
          </div>
          <div className="carousel-img-wrapper">
            <img
              src={
                "https://res.cloudinary.com/tjn-personal/image/upload/v1616453187/personal-site/community-image_qhkhko.jpg"
              }
              className="imgCarousel"
              alt=""
            />
            <h2>Community</h2>
            <p>
              This is an important concept for me. No matter where we live or
              what type of background you come from, we all reside within some
              type of community. I’ve always chosen to embrace my community and
              improve it in any way I can. My hope is to leverage the skills
              I’ve acquired as a full stack developer to help my local community
              foster an inclusive and positive environment.
            </p>
          </div>
          <div className="carousel-img-wrapper">
            <img
              src={
                "https://res.cloudinary.com/tjn-personal/image/upload/v1616453205/personal-site/soccer_w48qo8.png"
              }
              className="imgCarousel"
              alt=""
            />
            <h2>Football</h2>
            <ul className="passion-list passion-soccer-list">
              <li>Favorite League: English Premier League</li>
              <li>Exciting Young Player: Phil Foden</li>
              <li>Current Boot: Nike Mercurial Superfly 8 Elite</li>
              <li>Memorable Live Event: Copa America</li>
            </ul>
          </div>
          <div className="carousel-img-wrapper">
            <img
              src={
                "https://res.cloudinary.com/tjn-personal/image/upload/v1616452787/personal-site/code-background_npvkld.png"
              }
              className="imgCarousel"
              alt=""
            />
            <h2>Programming</h2>
            <ul className="passion-list">
              <li>Primary Language: JavaScript</li>
              <li className="program-one">Next Up: Python and AWS</li>
              <li>Biggest Challenge: Learning React in a week</li>
              <li className="program-two">
                Goals: Contribute to an open-source project
              </li>
              <li>Passion Projects: Adult Digital Coloring App</li>
            </ul>
          </div>
        </AliceCarousel>
      </section>
    </div>
  );
};

export default Passion;
