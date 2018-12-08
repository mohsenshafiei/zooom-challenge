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

export interface ICloseDetails {
  type: ActionTypes.CLOSE_DETAILS,
}

export interface ISearchLocation {
  type: ActionTypes.SEARCH_LOCATIONS,
  payload: string
}

export interface ISetMarker {
  type: ActionTypes.SET_MARKER,
  payload: {
    headline: string,
    location:LngLatLike,
  }
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

export interface IShowDetailsFulfilled {
  type: ActionTypes.SHOW_DETAILS_FULFILLED,
}

export interface ICloseDetailsFulfilled {
  type: ActionTypes.CLOSE_DETAILS_FULFILLED,
}

export interface ISearchLocationFulfilled {
  type: ActionTypes.SEARCH_LOCATIONS_FULFILLED,
  payload: Array<any>
}

export interface ISearchLocationPending {
  type: ActionTypes.SEARCH_LOCATIONS_PENDING,
}

export interface ISearchLocationRejected {
  type: ActionTypes.SEARCH_LOCATIONS_REJECTED,
}

export interface ISetMarkerFulfilled {
  type: ActionTypes.SET_MARKER_FULFILLED,
  payload: {
    headline: string,
    location: LngLatLike
  }
}

export interface ISetMarkerPending {
  type: ActionTypes.SET_MARKER_PENDING,
}

export interface ISetMarkerRejected {
  type: ActionTypes.SET_MARKER_REJECTED,
}

export type MapReducerActions = ISetLocationFulfilled |
  ISetLocationPending |
  ISetLocationRejected |
  ISetFilterFulfilled |
  ISetFilterPending |
  ISetFilterRejected |
  IShowDetailsFulfilled |
  ICloseDetailsFulfilled |
  ISearchLocationFulfilled |
  ISearchLocationPending |
  ISearchLocationRejected |
  ISetMarkerFulfilled |
  ISetMarkerPending |
  ISetMarkerRejected;

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
  showDetails: boolean,
  searchLocations: Array<any>,
  searchLocationsLoading: boolean,
}


// PAYLOADS ===============================
export interface ISetLocationPayload {
  coordination: LngLatLike
}

export interface ISearchLocationPayload {
  payload: string
}

export interface ISetMarkerOnMapPayload {
    location: LngLatLike,
    headline: string
}
