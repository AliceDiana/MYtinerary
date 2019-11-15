import React from "react";
import { connect } from "react-redux"; // connect component to  redux store.

import { fetchCities } from "../store/actions/cityAction";
import LoadingSpinner from "./UI/LoadingSpinner";
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
    const { fetchCities } = this.props;
    fetchCities();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      cities: nextProps.cities
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

const mapStateToProps = state => ({
  error: state.cities.error,
  cities: state.cities.cities,
  pending: state.cities.pending
});

export default connect(mapStateToProps, { fetchCities })(CityList);
