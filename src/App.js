import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        const results = response.data.results;

        const pokemonData = await Promise.all(
          results.map(async (pokemon) => {
            const id = pokemon.url.split('/')[6];
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            return {
              id,
              name: pokemon.name,
              image,
            };
          })
        );

        setPokemonList(pokemonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="app">
      <h1 className="title">Pokémon Dex</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      
      <div className="pokemon-grid">
        {filteredPokemon.length === 0 ? (
          <div className="no-results">No Pokémon found!</div>
        ) : (
          filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;