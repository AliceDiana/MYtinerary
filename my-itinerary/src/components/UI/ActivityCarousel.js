import React from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";

const settings = {
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true
};

const ActivityCarousel = props => {
  return (
    <React.Fragment>
      <Slider className="activity-slider" {...settings}>
        {props.activity.map(activity => {
          return (
            <div key={activity._id} className="activity-card">
              <Card className="card" style={{ width: "6rem" }}>
                <Card.Img variant="top" src={activity.image} alt="activity" />
              </Card>
            </div>
          );
        })}
      </Slider>
    </React.Fragment>
  );
};

export default ActivityCarousel;
