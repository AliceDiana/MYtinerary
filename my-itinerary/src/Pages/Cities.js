import React from "react";
import CityCard from "../components/UI/CityCard";
import NavBarV2 from "../components/UI/NavbarV2";
import { Container, Row, Col } from "react-bootstrap";

class CitiesPage extends React.Component {
  state = {
    cities: []
  };
  componentDidMount() {
    fetch("/cities/all")
      .then(response => response.json())
      .then(data => this.setState({ cities: data }));
  }

  render() {
    return (
      <React.Fragment>
        <NavBarV2 />
        <Container id="containerLandingV2">
          <Row>
            {this.state.cities.map(city => {
              return (
                <Col xs={{ span: 4, offset: 0 }} key={city._id}>
                  <CityCard city={city} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default CitiesPage;
