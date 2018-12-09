import {takeEvery, put, call, takeLatest} from 'redux-saga/effects';
import  { ActionTypes } from './actionTypes';
import {
  ICloseDetails,
  ISetFilter,
  ISetLocation,
  ISearchLocation,
  ISetMarker
} from "./models";
import Map from "services/api/map";

function* setLocation(action: ISetLocation) {
  yield put({ type: ActionTypes.SET_LOCATION_PENDING });
  yield put({ type: ActionTypes.SET_LOCATION_FULFILLED, payload: action.coordination });
  yield put({ type: ActionTypes.SHOW_DETAILS_FULFILLED });
  yield put({ type: "CLOSE_NAVIGATION" });
}

function* setFilter(action: ISetFilter) {
  yield put({ type: ActionTypes.SET_FILTER_PENDING });
  yield put({ type: ActionTypes.SET_FILTER_FULFILLED, payload: action.option});
  yield put({ type: ActionTypes.CLOSE_DETAILS_FULFILLED });
}

function* closeDetails(action: ICloseDetails) {
  yield put({ type: ActionTypes.CLOSE_DETAILS_FULFILLED });
}

function* search(action: ISearchLocation) {
  yield put({ type: ActionTypes.SEARCH_LOCATIONS_PENDING});
  const response = yield call(Map.search, {
    location: action.payload,
  });
  if (response.status === 200) {
    yield put({
      type: ActionTypes.SEARCH_LOCATIONS_FULFILLED,
      payload: response.data.features
    });
  } else {
    yield put({
      type: ActionTypes.SEARCH_LOCATIONS_REJECTED,
    });
  }
}

function* setMarker(action: ISetMarker) {
  yield put({ type: ActionTypes.SET_MARKER_PENDING });
  yield put({
    type: ActionTypes.SET_MARKER_FULFILLED,
    payload: action.payload
  });
}

export default [
  takeEvery(ActionTypes.SET_LOCATION, setLocation),
  takeEvery(ActionTypes.SET_FILTER, setFilter),
  takeEvery(ActionTypes.CLOSE_DETAILS, closeDetails),
  takeEvery(ActionTypes.SET_MARKER, setMarker),
  takeLatest(ActionTypes.SEARCH_LOCATIONS, search),
];
