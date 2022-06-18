import { useReducer } from "react";

const initialState = {
  navCloseStatus: false, //define current status of sidebar to open or close
  navOriginalCloseStatus: false, //define permanent state of sidebar for hover open and close
  RightNavCloseStatus: true

};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAV_OPEN":
      return { ...state, navCloseStatus: false };
    case "NAV_CLOSE":
      return { ...state, navCloseStatus: true };
    case "NAV_OPEN_ORIGINAL_STATUS":
      return { ...state, navOriginalCloseStatus: false };
    case "NAV_CLOSE_ORIGINAL_STATUS":
      return { ...state, navOriginalCloseStatus: true };
    case "RIGHT_NAV_OPEN":
      return { ...state, RightNavCloseStatus: false };
    case "RIGHT_NAV_CLOSE":
      return { ...state, RightNavCloseStatus: true };
    default:
      return state;
  }
};

export default Reducer;