import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
// import Carousel from "react-bootstrap/Carousel";

const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true
};

const ActivityCarousel = props => {
  console.log(props.activity);

  return (
    <React.Fragment>
      <h6>Activities</h6>
      <Slider {...settings}>
        {props.activity.map(activity => {
          return (
            <div>
              {/* <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={activity.image} />
                <Carousel.Caption>
                  <h3>{activity.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={activity.image} />
                <Card.Body>
                  <Card.Title>{activity.title} </Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Slider>
    </React.Fragment>
  );
};

export default ActivityCarousel;
