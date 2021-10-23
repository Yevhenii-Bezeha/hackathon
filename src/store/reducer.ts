import { combineReducers } from 'redux';
import pokemonReducer from 'containers/pokemon/logic';
import pokemonsReducer from 'containers/pokemons/logic';

const reducer = combineReducers({ pokemon: pokemonReducer, pokemons: pokemonsReducer });

export default reducer;
