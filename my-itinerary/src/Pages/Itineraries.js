// Itinerary Page

import React from "react";
import NavBarV2 from "../components/UI/NavbarV2";
import ItineraryList from "../components/ItineraryList";
import { Container, Row, Col } from "react-bootstrap";
import Toolbar from "../components/UI/Toolbar";
import { Link } from "react-router-dom";

const ItinerariesPage = ({ match }) => (
  <React.Fragment>
    <NavBarV2 />
    <Container id="containerLandingV2">
      <Row className="itineraryDisplayContainer">
        <Col xs={{ span: 12, offset: 0 }}>
          <ItineraryList />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 6, offset: 4 }}>
          <Link to="/cities">
            <h6 className="CheckAnotherCity">Check another city</h6>
          </Link>
        </Col>
      </Row>
    </Container>
    <Toolbar />
  </React.Fragment>
);

export default ItinerariesPage;
