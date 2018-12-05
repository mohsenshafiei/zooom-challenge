import {IState, MapReducerActions} from "./models";
import { ActionTypes } from "./actionTypes";

const initialState: IState = {
  mapCenter: [13.3000213, 47.7954466],
  locations: [
    {
      headline: 'Zooom Productions',
      description: '',
      address: '',
      zip: '',
      country: 'Austria',
      startDate: '',
      endDate: '',
      category: '',
      location: [13.3000213, 47.7954466]
    },
    {
      headline: 'Hauser Kaibling',
      description: '',
      address: '',
      zip: '',
      country: 'Austria',
      startDate: '',
      endDate: '',
      category: '',
      location: [13.7642618, 47.4108547]
    },
    {
      headline: 'Campo San Toma',
      description: '',
      address: '',
      zip: '',
      country: 'Italy',
      startDate: '',
      endDate: '',
      category: '',
      location: [12.3260093, 45.4359062]
    },
    {
      headline: 'Zoo Zurich',
      description: '',
      address: '',
      zip: '',
      country: 'Switzerland',
      startDate: '',
      endDate: '',
      category: '',
      location: [8.4666751, 47.3774337]
    },
    {
      headline: 'Hormozan Complex',
      description: '',
      address: '',
      zip: '',
      country: 'Iran',
      startDate: '',
      endDate: '',
      category: '',
      location: [51.3656438, 35.7581167]
    },
    {
      headline: 'RedBull',
      description: '',
      address: '',
      zip: '',
      country: 'USA',
      startDate: '',
      endDate: '',
      category: '',
      location: [-84.4455918, 33.7896881]
    },
  ]
};

const mapReducers = (state: IState = initialState, action: MapReducerActions): IState => {
  switch (action.type) {
    case ActionTypes.SET_LOCATION_FULFILLED: {
      return {
        ...state,
        mapCenter: action.payload
      };
    }
    case ActionTypes.SET_LOCATION_PENDING: {
      return {
        ...state,
      };
    }
    case ActionTypes.SET_LOCATION_REJECTED: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default mapReducers;
