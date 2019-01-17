import { ActionTypes } from "./actionTypes";
import { ILoginUser, ILoginUserPayload } from "./models";

export const loginUserAction = (payload: ILoginUserPayload): ILoginUser => {
  return {
    type: ActionTypes.LOGIN_USER,
    username: payload.username,
    password: payload.password
  };
};
