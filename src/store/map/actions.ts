import { ActionTypes } from "./actionTypes";
import {
  ISetLocation,
  ISetLocationPayload,
} from "./models";

export const setLocationAction = (payload: ISetLocationPayload): ISetLocation => {
  return {
    type: ActionTypes.SET_LOCATION,
    coordination: payload.coordination
  }
};
