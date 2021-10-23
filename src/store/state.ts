import { IPokemonState } from 'containers/pokemon/logic/state';
import { IPokemonsState } from 'containers/pokemons/logic/state';
import { IUserState } from 'containers/user/logic/state';

interface IRootState {
  pokemon: IPokemonState;
  pokemons: IPokemonsState;
  user: IUserState;
}

export default IRootState;
