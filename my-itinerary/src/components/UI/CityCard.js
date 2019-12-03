import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CityCard = props => (
  <Link to={"/itinerary/" + props.city._id}>
    <Card className="cityCard">
      <Card.Img variant="top" src={props.city.img} />
      <Card.Body>
        <Card.Title className="cardTitle">
          {" "}
          {props.city.name},{props.city.country}{" "}
        </Card.Title>
      </Card.Body>
    </Card>
  </Link>
);

export default CityCard;
