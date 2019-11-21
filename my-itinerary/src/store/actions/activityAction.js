export const FETCH_ACTIVITY_SUCCESS = "FETCH_ACTIVITY_SUCCESS";
export const FETCH_ACTIVITY_ERROR = "FETCH_ACTIVITY_ERROR";

export function fetchActivitySuccess(activities) {
  return {
    type: FETCH_ACTIVITY_SUCCESS,
    itineraries: activities
  };
}

export function fetchActivityError(error) {
  return {
    type: FETCH_ACTIVITY_ERROR,
    error: error
  };
}

export function fetchActivities(itinerary_id) {
  return dispatch => {
    // dispatch  pending action.
    fetch("/activities/" + itinerary_id)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(json => {
        dispatch(fetchActivitySuccess(json));
      })
      .catch(err => {
        dispatch(fetchActivityError(err));
      });
  };
}
