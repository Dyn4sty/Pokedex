import React from "react";

interface CardStatelessProps {
  name: string;
  url: string;
};

const Card: React.FunctionComponent<CardStatelessProps> = ({ name, url }) => {
  const PokeIndex: string = url.split("/")[url.split("/").length - 2];
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="pokemon"
        width="150"
        height="150"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokeIndex}.png`}
        loading="lazy"
      />
      <div>
        <h2 className="ttc">{name}</h2>
        <p>#{PokeIndex}</p>
      </div>
    </div>
  );
};
export default Card;
