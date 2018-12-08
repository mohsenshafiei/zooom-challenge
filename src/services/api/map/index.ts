import { Client, HttpMethod } from 'utils/Api';
import {
  ISearchRequest,
} from "./model";

const search = (data: ISearchRequest) => {
  return Client.request<ISearchRequest>(HttpMethod.GET,
    `geocoding/v5/mapbox.places/${data.location}.json?access_token=${process.env.MAPBOX_TOKEN}`)
    .then(res => res)
    .catch(error => error);
};

const Map =  {
  search,
};

export default Map;
