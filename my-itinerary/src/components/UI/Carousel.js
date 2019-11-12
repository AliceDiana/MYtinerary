import React from "react";

import Carousel from "react-bootstrap/Carousel";

export default function Slideshow() {
  return (
    <div className="CarouselLanding">
      <h4> Popular MYtineraries</h4>
      <Carousel>
        <Carousel.Item>
          <img
            className="imgCarousel"
            src={require("../../Images/amst.jpg")}
            alt="x"
          />
          <Carousel.Caption>
            <h3>Amsterdam</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src={require("../../Images/athens.jpg")}
            alt="y"
          />
          <Carousel.Caption>
            <h3>Athens</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src={require("../../Images/bcn.jpg")}
            alt="z"
          />
          <Carousel.Caption>
            <h3>Barcelona</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src={require("../../Images/berlin.jpg")}
            alt="a"
          />
          <Carousel.Caption>
            <h3>Berlin</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src={require("../../Images/budapest.jpg")}
            alt="b"
          />
          <Carousel.Caption>
            <h3>Budapest</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src={require("../../Images/lisbon.jpg")}
            alt="d"
          />
          <Carousel.Caption>
            <h3>Lisbon</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src={require("../../Images/bcn.jpg")}
            alt="e"
          />
          <Carousel.Caption>
            <h3>Barcelona</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src={require("../../Images/london.jpg")}
            alt="f"
          />
          <Carousel.Caption>
            <h3>London</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src={require("../../Images/madrid.jpg")}
            alt="g"
          />
          <Carousel.Caption>
            <h3>Madrid</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src={require("../../Images/newy.jpg")}
            alt="l"
          />
          <Carousel.Caption>
            <h3>New York</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
