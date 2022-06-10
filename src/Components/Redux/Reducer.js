import { useReducer } from "react";

const initialState = {
  navCloseStatus: false,
  RightNavCloseStatus: true
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAV_OPEN":
      return { ...state, navCloseStatus: false };
    case "NAV_CLOSE":
      return { ...state, navCloseStatus: true };
    case "RIGHT_NAV_OPEN":
      return { ...state, RightNavCloseStatus: false };
    case "RIGHT_NAV_CLOSE":
      return { ...state, RightNavCloseStatus: true };
    default:
      return state;
  }
};

export default Reducer;