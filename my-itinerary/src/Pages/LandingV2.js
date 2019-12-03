import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../components/UI/Logo";
import NavBarV2 from "../components/UI/NavbarV2";
import CarouselSlider from "../components/UI/CarouselSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
const LandingPageV2 = props => (
  <React.Fragment>
    <NavBarV2 />
    <Container id="containerLandingV2">
      <Row>
        <Col xs={{ span: 12 }}>
          <Logo />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12 }}>
          <h6 className="LandingFirstTextV2">
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </h6>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 3, offset: 4 }}>
          <Link to="/cities">
            <FontAwesomeIcon className="iArrow" icon={faArrowCircleRight} />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12 }}>
          <div>
            <CarouselSlider />
          </div>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default LandingPageV2;
