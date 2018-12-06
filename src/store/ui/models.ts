import {ActionTypes} from "./actionTypes";

// SAGA ACTIONS =================================

export interface IOpenNavigationDrawer {
  type: ActionTypes.OPEN_NAVIGATION,
}

export interface ICloseNavigationDrawer {
  type: ActionTypes.CLOSE_NAVIGATION,
}

// REDUCERS ACTIONS =================================
export interface IOpenNavigaitonFulfilled {
  type: ActionTypes.OPEN_NAVIGATION_FULFILLED,
}

export interface ICloseNavigaitonFulfilled {
  type: ActionTypes.CLOSE_NAVIGATION_FULFILLED,
}

export type UiReducerActions = IOpenNavigaitonFulfilled |
  ICloseNavigaitonFulfilled;

// STATE ===============================
export interface IState {
  navigation: boolean,
}


// PAYLOADS ===============================
