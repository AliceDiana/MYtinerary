import React, { Component } from "react";
import ActivityCarousel from "./ActivityCarousel";
import { connect } from "react-redux"; // connect component to  redux store.
import { fetchActivities } from "../../store/actions/activityAction";

class Toggle extends Component {
  state = {
    width: 353
  };

  componentDidMount() {
    this.props.fetchActivities(this.props.itinerary_id);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <div
          style={{
            width: this.state.width + "px"
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
