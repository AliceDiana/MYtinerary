import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../components/UI/Logo";
import LogIn from "../components/UI/LogIn";
import CreateAccount from "../components/UI/CreateAcc";
import ToolBar from "../components/UI/Toolbar";
import { Link } from "react-router-dom";

const LandingPage = props => (
  <React.Fragment>
    <Container id="containerLandingV1">
      <Row>
        <Col xs={{ span: 12, offset: 0 }}>
          <Logo className="logoHeader" />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, offset: 0 }}>
          <h6 className="LandingFirstText">
            Find your perfect trip, designed by insiders who know and love their
            cities.
          </h6>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, offset: 0 }}>
          <h3 className="LandingSecondText"> Start Browsing</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 9, offset: 3 }}>
          <img
            className="arrowImage"
            src={require("../Images/circled.png")}
            alt="arrow"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, offset: 0 }}>
          <p className="LandingThirdText">Want to build your own MYtinerary?</p>
        </Col>
      </Row>
      <Row id="accessLinks">
        <Col xs={{ span: 4, offset: 2 }}>
          <Link to="/logging">
            {" "}
            <LogIn />
          </Link>
        </Col>
        <Col xs={{ span: 6, offset: 0 }}>
          <Link to="/creating">
            {" "}
            <CreateAccount />
          </Link>
        </Col>
      </Row>
    </Container>
    <ToolBar />
  </React.Fragment>
);

export default LandingPage;
