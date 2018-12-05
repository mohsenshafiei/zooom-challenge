import { ActionTypes } from "./actionTypes";
import {
  ISetLocation,
  ISetLocationPayload,
  ISetFilter,
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
