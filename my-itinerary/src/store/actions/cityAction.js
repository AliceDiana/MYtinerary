//creating my three actions: loading fetch, fetch success or fetch error
// export const FETCH_CITIES_PENDING = "FETCH_CITIES_PENDING";
export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
export const FETCH_CITIES_ERROR = "FETCH_CITIES_ERROR";

// export function fetchCitiesPending() {
//   return {
//     type: FETCH_CITIES_PENDING
//   };
// }

export function fetchCitiesSuccess(cities) {
  return {
    type: FETCH_CITIES_SUCCESS,
    cities: cities
  };
}

export function fetchCitiesError(error) {
  return {
    type: FETCH_CITIES_ERROR,
    error: error
  };
}

// I am preparing my fetch to retrieve the cities list

export function fetchCities() {
  return dispatch => {
    // dispatch  pending action.
    // dispatch(fetchCitiesPending());
    fetch("/cities/all")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(json => {
        dispatch(fetchCitiesSuccess(json));
      })
      .catch(err => {
        dispatch(fetchCitiesError(err));
      });
  };
}
