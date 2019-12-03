import Carousel from "react-bootstrap/Carousel";
import React from "react";

const CarouselSlider = props => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/yNR0SRb/eb.jpg[/img]"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/1dFwm1m/christopher-czermak-g-ZKz-Bhs-O6-KY-unsplash-1.jpg"
            alt="second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/9r7BgFG/tudor-stanica-581og-ZCh-CIs-unsplash.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/37cM77x/chris-karidis-nnzk-ZNYWHa-U-unsplash.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/f0bTFMK/window-1576548-1280.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/KqzPKp7/matt-seymour-0rza5-Mdhq3-A-unsplash.jpg"
            alt="Sixth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselSlider;
