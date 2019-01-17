import { IState, UserReducerActions } from "./models";
import { ActionTypes } from "./actionTypes";

const initialState: IState = {
  token: "",
  isLoggedIn: false
};

const userReducers = (
  state: IState = initialState,
  action: UserReducerActions
): IState => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_FULFILLED: {
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true
      };
    }
    case ActionTypes.LOGIN_USER_PENDING: {
      return {
        ...state
      };
    }
    case ActionTypes.LOGIN_USER_REJECTED: {
      return {
        ...state,
        token: "",
        isLoggedIn: false
      };
    }
    default:
      return state;
  }
};

export default userReducers;
