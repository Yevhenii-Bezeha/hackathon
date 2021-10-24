import { ApiRoutes, HttpMethods } from 'common';
import { callApi } from 'helpers';
import { ResponseError } from 'helpers';
import { ICredentials } from '../types';

class AuthService {
  static async signUp(credentials: ICredentials) {
    const response = await callApi({
      endpoint: ApiRoutes.SIGN_UP,
      body: credentials,
      method: HttpMethods.POST,
    })
      .then((response) => response.json())
      .then((response) => {
        return response.data;
      });

    if (response.error) {
      throw new ResponseError(response.error);
    }

    return response;
  }

  static async signIn(credentials: ICredentials) {
    const response = await callApi({
      endpoint: ApiRoutes.SIGN_IN,
      body: credentials,
      method: HttpMethods.POST,
    })
      .then((response) => response.json())
      .then((response) => response.data);

    if (response.error) {
      throw new ResponseError(response.error);
    }

    return response;
  }
}

export default AuthService;
