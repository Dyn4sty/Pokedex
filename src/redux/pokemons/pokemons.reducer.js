import PokemonsActionTypes from "./pokemons.types";

const INITAL_STATE = {
  Pokemons: [],
  searchfield: "",
  error: null,
};

const pokemonsReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case PokemonsActionTypes.SEARCH_POKEMONS:
      return {
        ...state,
        searchfield: action.payload,
      };
    case PokemonsActionTypes.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        Pokemons: action.payload,
      };
    case PokemonsActionTypes.FETCH_POKEMONS_FAILURE:
        return {
            ...state,
            error: action.payload
        }
    default:
      return state;
  }
};
export default pokemonsReducer;
