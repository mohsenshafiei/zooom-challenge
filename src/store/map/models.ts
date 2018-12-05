import {ActionTypes} from "./actionTypes";
import { LngLatLike } from 'mapbox-gl';


// SAGA ACTIONS =================================
export interface ISetLocation {
  type: ActionTypes.SET_LOCATION,
  coordination: LngLatLike
}

export interface ISetFilter {
  type: ActionTypes.SET_FILTER,
  option: number
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

export interface ISetFilterFulfilled {
  type: ActionTypes.SET_FILTER_FULFILLED,
  payload: number,
}

export interface ISetFilterPending {
  type: ActionTypes.SET_FILTER_PENDING,
}

export interface ISetFilterRejected {
  type: ActionTypes.SET_FILTER_REJECTED,
}

export type MapReducerActions = ISetLocationFulfilled |
  ISetLocationPending |
  ISetLocationRejected |
  ISetFilterFulfilled |
  ISetFilterPending |
  ISetFilterRejected;


export interface IPlace {
  headline: string;
  description: string;
  address: string;
  zip: string;
  country: string;
  startDate: string;
  endDate: string;
  category: number;
  location: LngLatLike;
}
// STATE ===============================
export interface IState {
  mapCenter: LngLatLike;
  locations: Array<IPlace>
  firstCategory: boolean,
  secondCategory: boolean,
}


// PAYLOADS ===============================
export interface ISetLocationPayload {
  coordination: LngLatLike
}
