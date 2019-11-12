import React from "react";
import Card from "react-bootstrap/Card";

const CityCard = props => (
  <Card border="secondary" className="cityCard">
    <Card.Img variant="top" src={require("../../Images/bcn.jpg")} />
    <Card.Body>
      <Card.Title> {props.city.name}</Card.Title>
      <Card.Text> {props.city.country}</Card.Text>
    </Card.Body>
  </Card>
);

export default CityCard;
