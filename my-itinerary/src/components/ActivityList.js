import React from "react";
import { connect } from "react-redux"; // connect component to  redux store.
import ActivitiesSlider from "./UI/ActivitiesSlider";
import { fetchActivities } from "../store/actions/activityAction";
import { Container, Row, Col } from "react-bootstrap";

class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: []
    };
  }

  componentDidMount() {
    const { fetchActivities } = this.props;
    fetchActivities(this.props.itineraryId);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      activities: nextProps.activities
    });
  }

  render() {
    let activities = this.state.activities;
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={{ span: 12, offset: 0 }}>
              {activities.map(activity => (
                <div key={activity._id}>
                  <ActivitiesSlider activity={activity} />
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
  activities: state.activities.activities
});

export default connect(mapStateToProps, { fetchActivities })(ActivityList);
