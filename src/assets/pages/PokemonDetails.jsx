import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    axios
      .get(apiUrl)
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch(err => {
        alert('Erro ao buscar detalhes do Pokémon');
      });
  }, [name]);

  if (!pokemon) {
    return <div>Carregando...</div>;
  }

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div>
      <h2>Detalhes do Pokémon {name}</h2>
      <img src={imageUrl} alt={pokemon.name} /> {/* Exibe a imagem do Pokémon */}
      <p>Nome: {pokemon.name}</p>
      <p>Peso: {pokemon.weight / 10} kg</p> {/* Convertendo de decigramas para quilogramas */}
      <p>Altura: {pokemon.height / 10} m</p> {/* Convertendo de decímetros para metros */}
      <h3>Habilidades:</h3>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </div>
  );
}

export default PokemonDetails;
