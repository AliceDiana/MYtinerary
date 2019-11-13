import React from "react";
import CityCard from "../components/UI/CityCard";
import { Form, FormControl } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialCities: [],
      cities: []
    };
  }

  componentDidMount() {
    fetch("/cities/all")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          initialCities: data,
          cities: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  filterList = event => {
    let cities = this.state.initialCities;
    cities = cities.filter(city => {
      return (
        city.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ cities: cities });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={{ span: 12, offset: 0 }}>
              <Form inline>
                <h5>Filter our current cities:</h5>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  onChange={this.filterList}
                ></FormControl>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 12, offset: 0 }}>
              {this.state.cities.map(city => {
                return (
                  <div key={city._id}>
                    <CityCard city={city} />
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default CityList;
