import { takeEvery, call } from "redux-saga/effects";
import { ActionTypes } from "./actionTypes";
import User from "services/api/user";
import { ILoginUser } from "./models";

function* loginUser(action: ILoginUser) {
  const res = yield call(User.login, {
    username: action.username,
    password: action.password
  });
}

export default [takeEvery(ActionTypes.LOGIN_USER, loginUser)];
