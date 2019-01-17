import { IState, MapReducerActions } from "./models";
import { ActionTypes } from "./actionTypes";
import { locations } from "../../static/locations";
const initialState: IState = {
  mapCenter: { lng: 13.300021300000026, lat: 47.79544660000002 },
  firstCategory: true,
  secondCategory: true,
  showDetails: false,
  searchLocations: [],
  searchLocationsLoading: false,
  locations: locations
};

const mapReducers = (
  state: IState = initialState,
  action: MapReducerActions
): IState => {
  switch (action.type) {
    case ActionTypes.SET_LOCATION_FULFILLED: {
      return {
        ...state,
        mapCenter: action.payload,
        showDetails: true
      };
    }
    case ActionTypes.SET_LOCATION_PENDING: {
      return {
        ...state
      };
    }
    case ActionTypes.SET_LOCATION_REJECTED: {
      return {
        ...state
      };
    }
    case ActionTypes.SET_FILTER_FULFILLED: {
      if (action.payload === 1) {
        return {
          ...state,
          firstCategory: !state.firstCategory
        };
      }
      if (action.payload === 2) {
        return {
          ...state,
          secondCategory: !state.secondCategory
        };
      }
      return {
        ...state
      };
    }
    case ActionTypes.SET_FILTER_PENDING: {
      return {
        ...state
      };
    }
    case ActionTypes.SET_FILTER_REJECTED: {
      return {
        ...state
      };
    }
    case ActionTypes.SHOW_DETAILS_FULFILLED: {
      return {
        ...state,
        showDetails: true
      };
    }
    case ActionTypes.CLOSE_DETAILS_FULFILLED: {
      return {
        ...state,
        showDetails: false
      };
    }
    case ActionTypes.SEARCH_LOCATIONS_FULFILLED: {
      return {
        ...state,
        searchLocations: action.payload,
        searchLocationsLoading: false
      };
    }
    case ActionTypes.SEARCH_LOCATIONS_PENDING: {
      return {
        ...state,
        searchLocationsLoading: true
      };
    }
    case ActionTypes.SEARCH_LOCATIONS_REJECTED: {
      return {
        ...state,
        searchLocations: [],
        searchLocationsLoading: false
      };
    }
    case ActionTypes.SET_MARKER_FULFILLED: {
      return {
        ...state,
        locations: [
          ...state.locations,
          {
            headline: action.payload.headline,
            description: "",
            address: "",
            zip: "",
            country: "",
            startDate: "",
            endDate: "",
            category: 2,
            location: action.payload.location
          }
        ],
        showDetails: false
      };
    }
    case ActionTypes.SET_MARKER_PENDING: {
      return {
        ...state
      };
    }
    case ActionTypes.SET_MARKER_REJECTED: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
};

export default mapReducers;
