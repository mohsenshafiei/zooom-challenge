import { ActionTypes } from "./actionTypes";
import {
  ICloseNavigationDrawer,
  IOpenNavigationDrawer,
} from "./models";

export const openNavigationDrawer = (): IOpenNavigationDrawer => {
  return {
    type: ActionTypes.OPEN_NAVIGATION,
  }
};

export const closeNavigationDrawer = (): ICloseNavigationDrawer => {
  return {
    type: ActionTypes.CLOSE_NAVIGATION,
  }
};

