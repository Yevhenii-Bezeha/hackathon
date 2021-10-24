import { ApiRoutes } from 'common';
import { callApi } from 'helpers';
import { ResponseError } from 'helpers';

class AuthService {
  static async signUpUser() {
    const response = await callApi({ endpoint: ApiRoutes.SIGN_UP })
      .then((response) => response.json())
      .then((response) => response.data);

    if (response.error) {
      throw new ResponseError(response.error);
    }

    return response;
  }

  static async signInUser() {
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
