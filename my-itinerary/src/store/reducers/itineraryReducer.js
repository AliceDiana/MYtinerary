import {
  FETCH_ITINERARY_SUCCESS,
  FETCH_ITINERARY_ERROR
} from "../actions/itineraryAction";

//defining the initial state
const initialState = {
  pending: false,
  itineraries: [],
  error: null
};

export function itinerariesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITINERARY_SUCCESS:
      return {
        ...state,
        pending: false,
        itineraries: action.itineraries
      };
    case FETCH_ITINERARY_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default itinerariesReducer;
