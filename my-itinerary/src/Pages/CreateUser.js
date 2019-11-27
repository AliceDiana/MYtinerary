import React from "react";
import NavBarV2 from "../components/UI/NavbarV2";
import RegisterForm from "../components/UI/Auth/RegisterForm";
import { Container, Row, Col } from "react-bootstrap";
import Toolbar from "../components/UI/Toolbar";

const CreateUserPage = props => (
  <React.Fragment>
    <NavBarV2 />
    <Container id="containerLandingV2">
      <Row className="cityDisplayContainer">
        <Col xs={{ span: 12, offset: 0 }}>
          <h2>Register here</h2>
          <RegisterForm />
        </Col>
      </Row>
      <Toolbar />
    </Container>
  </React.Fragment>
);

export default CreateUserPage;
