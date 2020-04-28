import React from "react";

const Card = ({ name, url, id }) => {
  const PokeIndex = url.split("/")[url.split("/").length - 2];
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="pokemon"
        width="150"
        height="150"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokeIndex}.png`}
      />
      <div>
        <h2 className="ttc">{name}</h2>
        <p>#{PokeIndex}</p>
      </div>
    </div>
  );
};
export default Card;
