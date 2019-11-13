import React from "react";
import Card from "react-bootstrap/Card";

const CityCard = props => (
  <Card className="bg-dark text-white cityCard">
    <Card.Img src={require("../../Images/bcn.jpg")} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title className="text-white"> {props.city.name}</Card.Title>
      <Card.Text className="text-white"> {props.city.country}</Card.Text>
    </Card.ImgOverlay>
  </Card>
);

export default CityCard;
