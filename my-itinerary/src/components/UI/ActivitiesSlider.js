import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ActivitiesSlider extends Component {
  state = {
    display: true,
    width: 300
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,

      arrows: true
    };

    return (
      <div>
        <button
          className="button"
          onClick={() =>
            this.setState({
              display: !this.state.display
            })
          }
        >
          View All
        </button>

        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "none" : "block"
          }}
        >
          <h6>Activities</h6>
          <Slider {...settings}>
            <div>
              <img
                className="ActivityPic"
                src={
                  "https://i.ibb.co/DCCd4RX/kristijan-arsov-Pj-A3-S5-X3-FAg-unsplash.jpg"
                }
              />
            </div>
            <div>
              <img
                className="ActivityPic"
                src={
                  "https://i.ibb.co/R4BwCDk/alex-paganelli-r-YVm-Xecm64-Q-unsplash.jpg"
                }
              />
            </div>
            <div>
              <img
                className="ActivityPic"
                src={
                  "https://i.ibb.co/5KGQpp9/willian-west-Y5q-JKfg0h-J8-unsplash.jpg"
                }
              />
            </div>
            <div>
              <img
                className="ActivityPic"
                src={
                  "https://i.ibb.co/68nYgnH/xavier-coiffic-Eq0-Lw-Afw-HDI-unsplash.jpg"
                }
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
