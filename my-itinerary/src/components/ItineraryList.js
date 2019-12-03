import React from "react";
import { connect } from "react-redux"; // connect component to  redux store.
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Toggle from "./UI/Toggle";
import { fetchItineraries } from "../store/actions/itineraryAction";

class ItineraryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itineraries: [],
      selectedID: ""
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

  changeSelectedID = itinerary_id => {
    console.log(itinerary_id);

    if (itinerary_id === this.state.selectedID) {
      this.setState({
        selectedID: ""
      });
    } else {
      this.setState({
        selectedID: itinerary_id
      });
    }
  };

  render() {
    let itineraries = this.state.itineraries;
    return (
      <React.Fragment>
        <Container>
          <div>
            <h5>Available MYtineraries:</h5>
          </div>
          <div>
            {itineraries.map(itinerary => (
              <div key={itinerary._id}>
                <React.Fragment>
                  <Container className="containerFlexbox">
                    <div className="itineraryHeader">
                      <Image
                        className="user"
                        roundedCircle
                        src={itinerary.img}
                      />
                      <div className="hostName">
                        <h6>{itinerary.title}</h6>
                        <p>{itinerary.host} </p>
                      </div>
                    </div>
                    <div className="detailsBox">
                      <p>{itinerary.rating}</p>

                      <p>{itinerary.duration}</p>

                      <p>{itinerary.price}</p>

                      <p>{itinerary.hashtags}</p>
                    </div>
                    <div className="activityToggle">
                      {this.state.selectedID === itinerary._id ? (
                        <Toggle itinerary_id={itinerary._id} />
                      ) : null}
                      <button
                        className="button"
                        onClick={() => this.changeSelectedID(itinerary._id)}
                      >
                        View All
                      </button>
                    </div>
                  </Container>
                </React.Fragment>
              </div>
            ))}
          </div>
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
