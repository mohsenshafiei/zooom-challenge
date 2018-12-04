import { Client, HttpMethod } from 'util/Api';
import {
  ILoginRequest,
} from "./model";

const login = (data: ILoginRequest) => {
  return Client.request<ILoginRequest>(HttpMethod.GET, 'user/login', data)
    .then(res => res)
    .catch(error => error);
};

const User =  {
  login,
};

export default User;
