import React from "react";
import Image from "react-bootstrap/Image";

const BannerCity = props => (
  <Image className="itinerary-banner" src={props.city.img} alt="city-name" />
);
export default BannerCity;
