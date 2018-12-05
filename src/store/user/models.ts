import {ActionTypes} from "./actionTypes";

// SAGA ACTIONS =================================
export interface ILoginUser {
  type: ActionTypes.LOGIN_USER,
  username: string,
  password: string,
}


// REDUCERS ACTIONS =================================
export interface ILoginUserFulfilled {
  type: ActionTypes.LOGIN_USER_FULFILLED,
  payload: string,
  isLoggedIn: boolean,
}

export interface ILoginUserPending {
  type: ActionTypes.LOGIN_USER_PENDING,
}

export interface ILoginUserRejected {
  type: ActionTypes.LOGIN_USER_REJECTED,
  message: string,
  token: '',
}

export type UserReducerActions = ILoginUserFulfilled |
  ILoginUserPending |
  ILoginUserRejected;

// STATE ===============================
export interface IState {
  token: string;
  isLoggedIn: boolean;
}


// PAYLOADS ===============================
export interface ILoginUserPayload {
  username: string,
  password: string,
}
