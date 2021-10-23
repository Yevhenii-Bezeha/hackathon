import { IPokemonState } from 'containers/pokemon/logic/state';
import { IPokemonsState } from 'containers/pokemons/logic/state';

interface IRootState {
  pokemon: IPokemonState;
  pokemons: IPokemonsState;
}

export default IRootState;
