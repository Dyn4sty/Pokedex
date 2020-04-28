import PokemonsActionTypes from "./pokemons.types";

export const setSearchField = (text) => ({
  type: PokemonsActionTypes.SEARCH_POKEMONS,
  payload: text,
});

export const requestPokemons = () => (dispatch) => {
  dispatch({ type: PokemonsActionTypes.FETCH_POKEMONS_START });
  fetch("https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0")
    .then((res) => res.json())
    .then(({ results }) => {
      dispatch({
        type: PokemonsActionTypes.FETCH_POKEMONS_SUCCESS,
        payload: results,
      });
    })
    .catch((err) =>
      dispatch({
        type: PokemonsActionTypes.FETCH_POKEMONS_FAILURE,
        payload: err,
      })
    );
};
