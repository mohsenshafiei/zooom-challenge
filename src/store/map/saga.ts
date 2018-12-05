import {takeEvery, put} from 'redux-saga/effects';
import  { ActionTypes } from './actionTypes';
import {ISetLocation} from "./models";

function* setLocation(action: ISetLocation) {
  yield put({ type: ActionTypes.SET_LOCATION_PENDING });
  yield put({ type: ActionTypes.SET_LOCATION_FULFILLED, payload: action.coordination });
}

export default [
  takeEvery(ActionTypes.SET_LOCATION, setLocation),
];
