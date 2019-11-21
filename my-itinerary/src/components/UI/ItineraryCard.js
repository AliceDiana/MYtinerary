// Itinerary Card

import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import Toggle from "../UI/Toggle";

const ItineraryCard = props => (
  <React.Fragment>
    <Container>
      <Row>
        <Col xs={{ span: 12 }}>
          <Card className="itineraryCard">
            <Card.Body>
              <Row>
                <Col xs={{ span: 4 }}>
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src={props.itinerary.img}
                    />
                    <Figure.Caption>{props.itinerary.host} </Figure.Caption>
                  </Figure>
                </Col>

                <Col xs={{ span: 8 }}>
                  <Card.Title className="titleTag">
                    {props.itinerary.title}
                  </Card.Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text className="ratingTag">
                    {props.itinerary.rating}
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="durationTag">
                    {props.itinerary.duration}
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className="priceTag">
                    {props.itinerary.price}
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text className="hashTags">
                    {props.itinerary.hashtags}
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Toggle itinerary_id={props.itinerary._id} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default ItineraryCard;
