import { combineReducers } from 'redux';
import pokemonReducer from 'containers/pokemon/logic';
import pokemonsReducer from 'containers/pokemons/logic';
import userReducer from 'containers/user/logic';

const reducer = combineReducers({
  pokemon: pokemonReducer,
  pokemons: pokemonsReducer,
  user: userReducer,
});

export default reducer;
