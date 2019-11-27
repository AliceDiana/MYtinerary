import React from "react";
import NavBarV2 from "../components/UI/NavbarV2";
import LogInForm from "../components/UI/Auth/LogInForm";
import { Container, Row, Col } from "react-bootstrap";
import Toolbar from "../components/UI/Toolbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const LogInPage = props => (
  <React.Fragment>
    <NavBarV2 />
    <Container id="containerLandingV2">
      <Row className="cityDisplayContainer">
        <Col xs={{ span: 12, offset: 0 }}>
          <h2>Log In here:</h2>
          <LogInForm />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12, offset: 0 }}>
          <h2>Not registered yet, registered now:</h2>
          <Link to={"/users"}>
            {" "}
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Link>
        </Col>
      </Row>
      <Toolbar />
    </Container>
  </React.Fragment>
);

export default LogInPage;
