import React from "react";
import Card from './Card'
const PokemonList = ({ Pokemons }) => {
  return (
    <div>
      {Pokemons ? (
        <div className="row">
          {Pokemons.map((pokemon) => (
            <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          ))}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default React.memo(PokemonList);
