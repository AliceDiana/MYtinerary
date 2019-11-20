//creating my three actions: loading fetch, fetch success or fetch error

export const FETCH_ITINERARY_SUCCESS = "FETCH_ITINERARY_SUCCESS";
export const FETCH_ITINERARY_ERROR = "FETCH_ITINERARY_ERROR";

export function fetchItinerarySuccess(itineraries) {
  return {
    type: FETCH_ITINERARY_SUCCESS,
    itineraries: itineraries
  };
}

export function fetchItineraryError(error) {
  return {
    type: FETCH_ITINERARY_ERROR,
    error: error
  };
}

// I am preparing my fetch to retrieve the itinerary list

export function fetchItineraries() {
  return dispatch => {
    // dispatch  pending action.
    fetch("/itineraries/all")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(json => {
        dispatch(fetchItinerarySuccess(json));
      })
      .catch(err => {
        dispatch(fetchItineraryError(err));
      });
  };
}
