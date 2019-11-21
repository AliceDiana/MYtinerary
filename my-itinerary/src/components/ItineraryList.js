//Itineraries container

import React from "react";
import { connect } from "react-redux"; // connect component to  redux store.
import ItineraryCard from "../components/UI/ItineraryCard";
import { fetchItineraries } from "../store/actions/itineraryAction";
import { Container, Row, Col } from "react-bootstrap";

class ItineraryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraries: []
    };
  }

  componentDidMount() {
    const { fetchItineraries } = this.props;
    fetchItineraries(this.props.cityId);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      itineraries: nextProps.itineraries
    });
  }

  render() {
    let itineraries = this.state.itineraries;
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={{ span: 12, offset: 0 }}></Col>
          </Row>
          <Row>
            <Col xs={{ span: 12, offset: 0 }}>
              <h5>Available MYtineraries:</h5>
            </Col>
          </Row>

          <Row>
            <Col xs={{ span: 12, offset: 0 }}>
              {itineraries.map(itinerary => (
                <div key={itinerary._id}>
                  <ItineraryCard itinerary={itinerary} />
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  itineraries: state.itineraries.itineraries,
  pending: state.cities.pending
});

export default connect(mapStateToProps, { fetchItineraries })(ItineraryList);
