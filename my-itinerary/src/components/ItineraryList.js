import React from "react";
import { connect } from "react-redux"; // connect component to  redux store.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import Toggle from "./UI/Toggle";
import { fetchItineraries } from "../store/actions/itineraryAction";
import Button from "react-bootstrap/Button";
import BannerCity from "./UI/BannerCity";

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
    let city = this.props.cities;
    console.log(city);
    return (
      <React.Fragment>
        <div className="banner-image" key={this.props.city._id}>
          <BannerCity city={this.props.city} />
        </div>
        <div>
          <h5 className="itinerary-text">Available MYtineraries:</h5>
        </div>
        {itineraries.map(itinerary => (
          <div key={itinerary._id} className="card-container">
            <div className="itinerary-header">
              <div className="user">
                <Image src={itinerary.img} alt="host" />
              </div>
              <div className="itinerary-title">
                <h6>
                  <strong>{itinerary.title}</strong>
                </h6>

                <p>{itinerary.host} </p>
              </div>
            </div>
            <div className="detailsBox">
              <p>
                {itinerary.rating}{" "}
                <FontAwesomeIcon className="iStar" icon={faStar} />
              </p>

              <p>{itinerary.duration}</p>

              <p>{itinerary.price}</p>
            </div>
            <div className="hashtags">
              <p>{itinerary.hashtags}</p>
            </div>

            {this.state.selectedID === itinerary._id ? (
              <Toggle itinerary_id={itinerary._id} />
            ) : null}
            <div className="activity-toggle">
              <Button
                variant="light"
                id="view-all-button"
                onClick={() => this.changeSelectedID(itinerary._id)}
              >
                View Activities
              </Button>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  let path = window.location.pathname;
  console.log(path);
  return {
    itineraries: state.itineraries.itineraries,
    pending: state.cities.pending,

    city: state.cities.cities.find(city => "/itinerary/" + city._id === path)
  };
};

export default connect(mapStateToProps, { fetchItineraries })(ItineraryList);
