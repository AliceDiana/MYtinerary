import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itineraryReducer";
import activitiesReducer from "./activityReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  activities: activitiesReducer,
  error: errorReducer,
  auth: authReducer
});
export default rootReducer;
