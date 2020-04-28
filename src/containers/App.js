import React, { Suspense, lazy, useEffect } from "react";
import { connect } from "react-redux";
// import PokemonList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import "./app.css";
import { setSearchField, requestPokemons } from "../redux/pokemons/pokemons.actions";
const PokemonList = lazy(() => import("../Components/CardList"));

const App = ({searchfield, Pokemons, setSearchField, requestPokemons}) => {
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    requestPokemons()
  }, [requestPokemons]);

  const filteredPokemons = Pokemons.filter((Pokemon) => {
    return Pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="tc">
      <h1 className="f1">Pokedex</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <Suspense fallback={<>Loading...</>}>
            <PokemonList Pokemons={filteredPokemons} />
          </Suspense>
        </ErrorBoundary>
      </Scroll>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setSearchField: (text) => dispatch(setSearchField(text)),
  requestPokemons: () => dispatch(requestPokemons()),
});

const mapStateToProps = ({ pokemons }) => ({
  searchfield: pokemons.searchfield,
  Pokemons: pokemons.Pokemons,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
