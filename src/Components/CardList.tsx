import React from "react";
import Card from "./Card";

export interface IRobot {
  url: string;
  name: string;
}
const PokemonList = ({ Pokemons }: {Pokemons: Array<IRobot>}) => {
  return (
    <div>
      {Pokemons ? (
        <div className="row">
          {Pokemons.map((pokemon, id) => (
            <Card key={id} url={pokemon.url} name={pokemon.name} />
          ))}
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default React.memo(PokemonList);
