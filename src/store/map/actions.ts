import { ActionTypes } from "./actionTypes";
import {
  ISetLocation,
  ISetLocationPayload,
  ISetFilter,
  ICloseDetails,
  ISearchLocationPayload,
  ISearchLocation,
  ISetMarkerOnMapPayload,
  ISetMarker
} from "./models";

export const setLocationAction = (payload: ISetLocationPayload): ISetLocation => {
  return {
    type: ActionTypes.SET_LOCATION,
    coordination: payload.coordination
  }
};

export const setFilteration = (option: number): ISetFilter => {
  return {
    type: ActionTypes.SET_FILTER,
    option: option
  }
};

export const closeDetails = (): ICloseDetails => {
  return {
    type: ActionTypes.CLOSE_DETAILS,
  }
};

export const searchLocation = (payload: string): ISearchLocation => {
  return {
    type: ActionTypes.SEARCH_LOCATIONS,
    payload: payload,
  }
};

export const setMarkerOnMap = (payload: ISetMarkerOnMapPayload): ISetMarker => {
  return {
    type: ActionTypes.SET_MARKER,
    payload: payload,
  }
};
