import { Reducer } from "redux";
import { ActionTypes, RootState } from "./types";

const initialState: RootState = {
  data: {},
  loading: false,
  errors: null,
};

const rootReducer: Reducer<RootState, ActionTypes> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        loading: true,
        errors: null,
      };
    case "FETCH_ALL_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_ALL_FAILURE":
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
