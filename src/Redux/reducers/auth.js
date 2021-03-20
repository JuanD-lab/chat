import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
  } from "../actions/auth";
  
  
  const initialState = user
    ? { access: true, user }
    : { access: false, user: null };
  
  export const auth = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: payload.user,
        };
  
      case REGISTER_FAIL:
        return {
          ...state,
          access: false,
        };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: payload.user,
        };
  
      case LOGIN_FAIL:
        return {
          ...state,
          access: false,
          user: null,
        };
  
      default:
        return state;
    }
  };
  