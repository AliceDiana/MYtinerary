import React from "react";
import { connect } from "react-redux"; // connect component to  redux store.
import { fetchCities } from "../store/actions/cityAction";
import CityCard from "../components/UI/CityCard";
import { Form, FormControl } from "react-bootstrap";

class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      search: ""
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
    this.setState({ search: event.target.value.toLowerCase() });
  }; //saves in the status search the values that we digit in the search bar

  render() {
    var cities = this.state.cities.filter(city => {
      //filters the city based on the values entered in the search bar
      return city.name.toLowerCase().search(this.state.search) !== -1;
    });

    return (
      <React.Fragment>
        <div className="container">
          <div>
            <h5 className="cityHeaderTxt">Filter our current cities:</h5>{" "}
          </div>
          <Form inline>
            <FormControl
              id="search-bar"
              type="text"
              placeholder="Search"
              onChange={this.filterList}
            ></FormControl>
          </Form>

          {cities.map(city => (
            <div key={city._id} id="city-page">
              <CityCard city={city} />
            </div>
          ))}
        </div>
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
