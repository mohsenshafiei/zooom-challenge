import { takeEvery, put } from "redux-saga/effects";
import { ActionTypes } from "./actionTypes";
import { ICloseNavigationDrawer, IOpenNavigationDrawer } from "./models";

function* openNavigation(action: IOpenNavigationDrawer) {
  yield put({ type: ActionTypes.OPEN_NAVIGATION_FULFILLED });
}

function* closeNavigation(action: ICloseNavigationDrawer) {
  yield put({ type: ActionTypes.CLOSE_NAVIGATION_FULFILLED });
}

export default [
  takeEvery(ActionTypes.OPEN_NAVIGATION, openNavigation),
  takeEvery(ActionTypes.CLOSE_NAVIGATION, closeNavigation)
];
