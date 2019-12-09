import React from "react";
import { Link } from "react-router-dom";

const CityCard = props => (
  <Link to={"/itinerary/" + props.city._id}>
    <div class="city-card">
      <div>
        <h5 className="card-title">{props.city.name}</h5>
      </div>
      <div>
        <p className="card-subtitle">{props.city.country}</p>
      </div>
    </div>
  </Link>
);

export default CityCard;
