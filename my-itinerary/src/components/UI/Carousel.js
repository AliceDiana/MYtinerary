import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 2
    };
    return (
      <div>
        <Slider {...settings}>
          <img
            src="https://i.ibb.co/YPS1cG4/alexander-kagan-t9-Td0zf-DTw-I-unsplash.jpg"
            alt="alexander-kagan-t9-Td0zf-DTw-I-unsplash"
            border="0"
          />

          <img
            src="https://i.ibb.co/VLTL0ms/adam-jang-Molhe1q-QRWI-unsplash.jpg"
            alt="adam-jang-Molhe1q-QRWI-unsplash"
            border="0"
          />

          <img
            src="https://i.ibb.co/dts9n4Z/christopher-czermak-7yb-Kmh-DTcz0-unsplash.jpg"
            alt="christopher-czermak-7yb-Kmh-DTcz0-unsplash"
            border="0"
          />

          <img src="https://i.ibb.co/6gn57y5/newy.jpg" alt="newy" border="0" />
          <img
            src="https://i.ibb.co/YPS1cG4/alexander-kagan-t9-Td0zf-DTw-I-unsplash.jpg"
            alt="alexander-kagan-t9-Td0zf-DTw-I-unsplash"
            border="0"
          />

          <img
            src="https://i.ibb.co/VLTL0ms/adam-jang-Molhe1q-QRWI-unsplash.jpg"
            alt="adam-jang-Molhe1q-QRWI-unsplash"
            border="0"
          />

          <img
            src="https://i.ibb.co/dts9n4Z/christopher-czermak-7yb-Kmh-DTcz0-unsplash.jpg"
            alt="christopher-czermak-7yb-Kmh-DTcz0-unsplash"
            border="0"
          />

          <img src="https://i.ibb.co/6gn57y5/newy.jpg" alt="newy" border="0" />
        </Slider>
      </div>
    );
  }
}
