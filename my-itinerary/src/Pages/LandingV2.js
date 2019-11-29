import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../components/UI/Logo";
import NavBarV2 from "../components/UI/NavbarV2";

import Slideshow from "../components/UI/Carousel";

const LandingPageV2 = props => (
  <React.Fragment>
    <NavBarV2 />

    <Container id="containerLandingV2">
      <Row>
        <Col xs={{ span: 12, offset: 0 }}>
          <Logo />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, offset: 0 }}>
          <h6 className="LandingFirstTextV2">
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </h6>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 3, offset: 4 }}>
          <Link to="/cities" className="arrowImageV2">
            <img src={require("../Images/circled.png")} alt="arrow" />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, offset: 0 }}>
          <div>
            <Slideshow />
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default LandingPageV2;
