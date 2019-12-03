// Itinerary Card

import React from "react";

import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Toggle from "../UI/Toggle";

class ItineraryCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container className="containerFlexbox">
          <div className="itineraryHeader">
            this.
            <Image
              className="user"
              roundedCircle
              src={this.props.itinerary.img}
            />
            <div className="hostName">
              <h6>{this.props.itinerary.title}</h6>
              <p>{this.props.itinerary.host} </p>
            </div>
          </div>
          <div className="detailsBox">
            <p>{this.props.itinerary.rating}</p>

            <p>{this.props.itinerary.duration}</p>

            <p>{this.props.itinerary.price}</p>

            <p>{this.props.itinerary.hashtags}</p>
          </div>
          <div className="activityToggle">
            <Toggle itinerary_id={this.props.itinerary._id} />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default ItineraryCard;
