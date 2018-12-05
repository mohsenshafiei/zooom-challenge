import {takeEvery, put} from 'redux-saga/effects';
import  { ActionTypes } from './actionTypes';
import {ISetFilter, ISetLocation} from "./models";

function* setLocation(action: ISetLocation) {
  yield put({ type: ActionTypes.SET_LOCATION_PENDING });
  yield put({ type: ActionTypes.SET_LOCATION_FULFILLED, payload: action.coordination });
}

function* setFilter(action: ISetFilter) {
  yield put({ type: ActionTypes.SET_FILTER_PENDING });
  yield put({ type: ActionTypes.SET_FILTER_FULFILLED, payload: action.option});
}

export default [
  takeEvery(ActionTypes.SET_LOCATION, setLocation),
  takeEvery(ActionTypes.SET_FILTER, setFilter),
];
