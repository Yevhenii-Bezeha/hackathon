import { combineReducers } from 'redux';
import pokemonReducer from 'containers/pokemon/logic';

const reducer = combineReducers({ pokemon: pokemonReducer });

export default reducer;
