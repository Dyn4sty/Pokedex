import PokemonsActionTypes from "./pokemons.types";

const INITAL_STATE = {
  Pokemons: [],
  searchfield: "",
  error: null,
  loading: true,
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
        loading: false,
      };
    case PokemonsActionTypes.FETCH_POKEMONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default pokemonsReducer;
