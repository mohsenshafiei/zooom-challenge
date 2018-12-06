import {IState, UiReducerActions} from "./models";
import { ActionTypes } from "./actionTypes";

const initialState: IState = {
  navigation: false,
};

const mapReducers = (state: IState = initialState, action: UiReducerActions): IState => {
  switch (action.type) {
    case ActionTypes.OPEN_NAVIGATION_FULFILLED: {
      return {
        ...state,
        navigation: true
      };
    }
    case ActionTypes.CLOSE_NAVIGATION_FULFILLED: {
      return {
        ...state,
        navigation: false
      };
    }
    default:
      return state;
  }
};

export default mapReducers;
