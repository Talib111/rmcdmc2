import { useReducer } from "react";

const initialState = {
  navCloseStatus: false
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAV_OPEN":
      return { ...state, navCloseStatus: false };
    case "NAV_CLOSE":
      return { ...state, navCloseStatus: true };
    default:
      return state;
  }
};

export default Reducer;