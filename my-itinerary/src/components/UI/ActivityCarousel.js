import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true
};

const ActivityCarousel = props => {
  console.log(props.activity);

  return (
    <React.Fragment>
      <h6>Activities</h6>

      {props.activity.map(activity => {
        return (
          <div>
            <Slider {...settings}>
              <img className="ActivityPic" src={activity.image1} alt="city" />
              <img className="ActivityPic" src={activity.image2} alt="city" />
              <img className="ActivityPic" src={activity.image3} alt="city" />
            </Slider>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ActivityCarousel;
