import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <h3 className="pokemon-name">{pokemon.name}</h3>
      <p className="pokemon-id">#{pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;