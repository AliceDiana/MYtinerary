import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CityCard = props => (
  <Link to={"/" + props.city._id}>
    <Card className="border-0">
      <Card.Img
        src={props.city.img}
        className="bg-dark text-white cityCard rounded mb-0  border border-dark"
        alt="Card image"
      />

      <Card.ImgOverlay>
        <Card.Title className="text-white"> {props.city.name}</Card.Title>
        <Card.Text className="text-white"> {props.city.country}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  </Link>
);

export default CityCard;
