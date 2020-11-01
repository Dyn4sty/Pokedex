import React, { Suspense, lazy, useEffect, FunctionComponent } from "react";
import { connect } from "react-redux";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundary from "../Components/ErrorBoundary";
import Spinner from "../Components/Spinner/Spinner";
import "./app.css";
import {
  setSearchField,
  requestPokemons,
} from "../redux/pokemons/pokemons.actions";
const PokemonList = lazy(() => import("../Components/CardList"));

export interface IRobot {
  name: string;
  url: string;
}

interface IAppProps {
  Pokemons: Array<{ name: string; url: string }>;
  searchfield: string;
  loading: boolean;
  setSearchField: (text: string) => void;
  requestPokemons: () => void;
}

const App: FunctionComponent<IAppProps> = ({
  searchfield,
  Pokemons,
  setSearchField,
  requestPokemons,
  loading,
}) => {
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    requestPokemons();
  }, [requestPokemons]);

  const filteredPokemons = Pokemons.filter((Pokemon) => {
    return Pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="tc">
        <h1 className="f1">Pokedex</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <PokemonList Pokemons={filteredPokemons} />
            </Suspense>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
};
const mapDispatchToProps = (dispatch: any) => ({
  setSearchField: (text: string) => dispatch(setSearchField(text)),
  requestPokemons: () => dispatch(requestPokemons()),
});

const mapStateToProps = ({ pokemons }: { pokemons: any }) => ({
  searchfield: pokemons.searchfield,
  Pokemons: pokemons.Pokemons,
  loading: pokemons.loading,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
