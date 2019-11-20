import React from "react";
import NavBarV2 from "../components/UI/NavbarV2";
import CityList from "../components/CityList";
import { Container, Row, Col } from "react-bootstrap";
import Toolbar from "../components/UI/Toolbar";

const CitiesPage = props => (
  <React.Fragment>
    <NavBarV2 />
    <Container id="containerLandingV2">
      <Row className="cityDisplayContainer">
        <Col xs={{ span: 12, offset: 0 }}>
          <CityList />
        </Col>
      </Row>
      <Toolbar />
    </Container>
  </React.Fragment>
);

export default CitiesPage;
