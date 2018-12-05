import {ActionTypes} from "./actionTypes";
import { LngLatLike } from 'mapbox-gl';


// SAGA ACTIONS =================================
export interface ISetLocation {
  type: ActionTypes.SET_LOCATION,
  coordination: LngLatLike
}

// REDUCERS ACTIONS =================================
export interface ISetLocationFulfilled {
  type: ActionTypes.SET_LOCATION_FULFILLED,
  payload: LngLatLike,
}

export interface ISetLocationPending {
  type: ActionTypes.SET_LOCATION_PENDING,
}

export interface ISetLocationRejected {
  type: ActionTypes.SET_LOCATION_REJECTED,
}

export type MapReducerActions = ISetLocationFulfilled |
  ISetLocationPending |
  ISetLocationRejected;
export interface IPlace {
  headline: string;
  description: string;
  address: string;
  zip: string;
  country: string;
  startDate: string;
  endDate: string;
  category: string;
  location: LngLatLike;
}
// STATE ===============================
export interface IState {
  mapCenter: LngLatLike;
  locations: Array<IPlace>
}


// PAYLOADS ===============================
export interface ISetLocationPayload {
  coordination: LngLatLike
}
