import { ApiRoutes, HttpMethods } from 'common';
import { callApi } from 'helpers';
import { ResponseError } from 'helpers';
import { useAppSelector } from 'store';
import { INewPokemon } from 'types';

class PokemonsService {
  static async getAll() {
    const response = await callApi({ endpoint: ApiRoutes.POKEMONS })
      .then((response) => response.json())
      .then((response) => response.data);

    if (response.error) {
      throw new ResponseError(response.error);
    }

    return response;
  }

  static async getOne(id: string) {
    const response = await callApi({ endpoint: ApiRoutes.POKEMON(id) })
      .then((response) => response.json())
      .then((response) => response.data);

    if (response.error) {
      throw new ResponseError(response.error);
    }

    return response;
  }

  static async create(pokemon: INewPokemon) {
    const response = await callApi({
      endpoint: ApiRoutes.POKEMONS,
      method: HttpMethods.POST,
      body: pokemon,
    })
      .then((response) => response.json())
      .then((response) => response.data);

    if (response.error) {
      throw new ResponseError(response.error);
    }

    return response;
  }
}

export default PokemonsService;
