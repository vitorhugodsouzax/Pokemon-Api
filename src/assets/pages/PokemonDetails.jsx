import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importe Link
import axios from 'axios';

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    axios
      .get(apiUrl)
      .then(({ data }) => {
        setPokemon(data);
        setAbilities(data.abilities);
      })
      .catch(err => {
        alert('Erro ao buscar detalhes do Pokémon');
      });
  }, [name]);

  if (!pokemon) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>Detalhes do Pokémon {name}</h2>
      <p>Nome: {pokemon.name}</p>
      <h3>Características:</h3>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <Link to="/"> {}
        <button>Voltar</button>
      </Link>
    </div>
  );
}

export default PokemonDetails;
