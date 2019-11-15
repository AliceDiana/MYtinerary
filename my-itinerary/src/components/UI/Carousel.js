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
            src="https://i.ibb.co/YPS1cG4/alexander-kagan-t9-Td0zf-DTw-I-unsplash.jpg"
            alt="alexander-kagan-t9-Td0zf-DTw-I-unsplash"
            border="0"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src="https://i.ibb.co/VLTL0ms/adam-jang-Molhe1q-QRWI-unsplash.jpg"
            alt="adam-jang-Molhe1q-QRWI-unsplash"
            border="0"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src="https://i.ibb.co/6gn57y5/newy.jpg"
            alt="newy"
            border="0"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="imgCarousel"
            src="https://i.ibb.co/dts9n4Z/christopher-czermak-7yb-Kmh-DTcz0-unsplash.jpg"
            alt="christopher-czermak-7yb-Kmh-DTcz0-unsplash"
            border="0"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
