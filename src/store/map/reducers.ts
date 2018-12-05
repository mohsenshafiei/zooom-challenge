import {IState, MapReducerActions} from "./models";
import { ActionTypes } from "./actionTypes";

const initialState: IState = {
  mapCenter: {lng: 13.300021300000026, lat: 47.79544660000002},
  locations: [
    {
      headline: 'Zooom Productions',
      description: 'Building Better Brands',
      address: 'Felderstraße 12, 5330 Fuschl am See, Austria',
      zip: '123-345-1231',
      country: 'Austria',
      startDate: '',
      endDate: '',
      category: '1',
      location: [13.3000213, 47.7954466]
    },
    {
      headline: 'Hauser Kaibling',
      description: 'CQ6H+JV Haus im Ennstal, Austria',
      address: 'Erzherzog-Johann-Straße 180, 8967 Haus, Austria',
      zip: '414-399-7878',
      country: 'Austria',
      startDate: '',
      endDate: '',
      category: '1',
      location: [13.7642618, 47.4108547]
    },
    {
      headline: 'Campo San Toma',
      description: 'Nice place to walk in area',
      address: '30100 Venice, Metropolitan City of Venice, Italy',
      zip: '455-333-889',
      country: 'Italy',
      startDate: '23 March 2018',
      endDate: '12 October 2017',
      category: '2',
      location: [12.3260093, 45.4359062]
    },
    {
      headline: 'Zoo Zurich',
      description: 'What a nice place to watch animals',
      address: 'Zürichbergstrasse 221, 8044 Zürich, Switzerland',
      zip: '567-123-4578',
      country: 'Switzerland',
      startDate: '12 June 2018',
      endDate: '23 October 2018',
      category: '1',
      location: [8.4666751, 47.3774337]
    },
    {
      headline: 'Hormozan Complex',
      description: '',
      address: '',
      zip: '',
      country: 'Iran',
      startDate: '12 July 2018',
      endDate: '3 November 2018',
      category: '1',
      location: [51.3656438, 35.7581167]
    },
    {
      headline: 'RedBull',
      description: 'QHJP+GC Atlanta, Georgia',
      address: '976 Brady Ave NW suite 400, Atlanta, GA 30318',
      zip: '717-838-4465',
      country: 'USA',
      startDate: '26 Oct 2018',
      endDate: '4 November 2018',
      category: '1',
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
