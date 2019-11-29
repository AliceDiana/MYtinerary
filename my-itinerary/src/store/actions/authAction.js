import axios from "axios";
import { returnErrors, clearErrors } from "./errorAction";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

//CHECK TOKEN AND LOAD USER

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  //fetch user
  axios
    .get("/auth/user", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      //if issue, we get error and dispatch AuthERROR
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// REGISTER A USER
export const register = user => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // // Request body
  // const body = JSON.stringify({ name, email, password });

  axios
    .post("/users", user, config)
    .then(res => {
      dispatch(clearErrors());
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

// LOGIN USER
export const login = ({ email, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  axios
    .post("/auth", body, config)
    .then(res => {
      dispatch(clearErrors());
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// LOGOUT USER
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

//SETUP CONFIG, HEADERS AND TOKEN

export const tokenConfig = getState => {
  // Get token from localStorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
