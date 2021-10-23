import { combineReducers } from 'redux';
import pokemonReducer from 'containers/pokemon/logic';

const reducer = combineReducers({ pockemon: pokemonReducer });

export default reducer;
