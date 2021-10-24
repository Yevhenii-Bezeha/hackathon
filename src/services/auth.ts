import { ApiRoutes } from 'common';
import { callApi } from 'helpers';
import { ResponseError } from 'helpers';
import { ICredentials } from '../types';

class AuthService {
  static async signUpUser(credentials: ICredentials) {
    console.log('AuthService.signUpUser, credentials', credentials);
    const response = await callApi({ endpoint: ApiRoutes.SIGN_UP })
      .then((response) => response.json())
      .then((response) => {
        console.log('response.data', response.data);
        return response.data
      });

    if (response.error) {
      throw new ResponseError(response.error);
    }

    return response;
  }

  static async signInUser(credentials: ICredentials) {
    const response = await callApi({ endpoint: ApiRoutes.SIGN_IN })
      .then((response) => response.json())
      .then((response) => response.data);

    if (response.error) {
      throw new ResponseError(response.error);
    }

    return response;
  }

}

export default AuthService;
