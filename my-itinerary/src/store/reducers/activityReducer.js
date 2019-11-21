import {
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_ERROR
} from "../actions/activityAction";

//defining the initial state
const initialState = {
  activities: [],
  error: null
};

export function activitiesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACTIVITY_SUCCESS:
      return {
        ...state,
        activities: action.activities
      };
    case FETCH_ACTIVITY_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default activitiesReducer;
