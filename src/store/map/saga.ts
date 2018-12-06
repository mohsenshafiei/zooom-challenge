import {takeEvery, put} from 'redux-saga/effects';
import  { ActionTypes } from './actionTypes';
import {ICloseDetails, ISetFilter, ISetLocation} from "./models";

function* setLocation(action: ISetLocation) {
  yield put({ type: ActionTypes.SET_LOCATION_PENDING });
  yield put({ type: ActionTypes.SET_LOCATION_FULFILLED, payload: action.coordination });
  yield put({ type: ActionTypes.SHOW_DETAILS_FULFILLED });
}

function* setFilter(action: ISetFilter) {
  yield put({ type: ActionTypes.SET_FILTER_PENDING });
  yield put({ type: ActionTypes.SET_FILTER_FULFILLED, payload: action.option});
}

function* closeDetails(action: ICloseDetails) {
  yield put({ type: ActionTypes.CLOSE_DETAILS_FULFILLED });
}

export default [
  takeEvery(ActionTypes.SET_LOCATION, setLocation),
  takeEvery(ActionTypes.SET_FILTER, setFilter),
  takeEvery(ActionTypes.CLOSE_DETAILS, closeDetails),
];
