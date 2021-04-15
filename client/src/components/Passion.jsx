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
            <p>
              If I’m not at the computer, programming or leveling up, then I’m
              thinking about where to climb next. What I love about the sport is
              that it combines all these great activities into one neat package:
              camping, hiking, adventuring, yoga, and more. To excel in climbing
              requires discipline and a willingness to overcome personal fears
              and mental blocks - through which an individual grows as a human.
            </p>
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
            <p>
              I got into cycling in my twenties and have absolutely loved it
              ever since. The excitement and thrill of hitting some single trac
              as the seasons change makes you keep coming back to the sport.
              Discovering new trails and forests to explore is part of the
              adventure. I prefer mountain biking but recently purchased a Surly
              Crosscheck and have enjoyed getting to know the amazing local
              network of roadways that connect our communities.
            </p>
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
              foster an inclusive and positive environment. Happy communities
              build happy futures.
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
            <p>
              The world calls it football, but we call it soccer. I grew up
              playing the sport and it taught me how to work together on a team
              to accomplish a shared goal. In football, the team is only as
              strong as its weakest player. I love waking up early on Saturday
              mornings to sip coffee and watch the English Premier League
              matches from the Fall to Spring. My favorite team is Manchester
              City.
            </p>
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
            <p>
              I have discovered a genuine passion in software development -
              tracing the nuances of a complex problem or collaborating within a
              team to quickly solve it - and wish to leverage my diversified
              past to provide real value for future clients. The excitement of
              building applications that enhance people’s lives never fades.
            </p>
          </div>
        </AliceCarousel>
      </section>
    </div>
  );
};

export default Passion;
