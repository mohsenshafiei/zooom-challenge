import * as Axios from "axios";
import axios from 'axios'

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
};

interface IHttpClient {
  getBaseUrl(): string;
  request<T>(method: HttpMethod, url: string, data?: T): Promise<Axios.AxiosResponse>;
}


class HttpClient implements IHttpClient {
  private _baseUrl: string;
  private token: string;
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
    this.token = '';
  }

  public getBaseUrl() {
    return this._baseUrl;
  }

  public request<T>(method: HttpMethod, url: string, data?:T):Promise<Axios.AxiosResponse> {
    let instance = axios.create({
      url: url,
      method: method,
      baseURL: this._baseUrl,
      data: data,
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language':'fa-IR',
        'Authentication': process.env.MAPBOX_TOKEN
      }
    });

    const request = instance.request({
      url: url,
      method: method,
      baseURL: this._baseUrl,
      data: data,
    });
    return request
  }
}

const Client = new HttpClient(<string>process.env.BASE_API_URL);


export {
  HttpMethod,
  Client
}
