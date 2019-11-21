import React, { Component } from "react";
import ActivityCarousel from "./ActivityCarousel";
import { connect } from "react-redux"; // connect component to  redux store.
import { fetchActivities } from "../../store/actions/activityAction";

class Toggle extends Component {
  state = {
    display: true,
    width: 300
  };

  componentDidMount() {
    this.props.fetchActivities(this.props.itinerary_id);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <button
          className="button"
          onClick={() =>
            this.setState({
              display: !this.state.display
            })
          }
        >
          View All
        </button>

        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "none" : "block"
          }}
        >
          <ActivityCarousel activity={this.props.activities} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  activities: state.activities.activities
});

export default connect(mapStateToProps, { fetchActivities })(Toggle);
