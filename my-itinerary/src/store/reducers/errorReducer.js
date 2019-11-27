import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

//create my initialState
const initialState = {
  msg: {},
  status: null,
  id: null
};

//reducer function

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      };
    case CLEAR_ERRORS: //i do not want the old error to stay in my state
      return {
        msg: {},
        status: null,
        id: null
      };
    default:
      return state;
  }
}
