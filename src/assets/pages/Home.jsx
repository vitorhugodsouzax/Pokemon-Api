import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API = 'https://pokeapi.co/api/v2/pokemon';

export default function Home() {
  const [nome, setNome] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const buscarPokemon = () => {
    const apiUrl = `${API}/${nome}`;
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch(err => {
        alert('Pokemon não encontrado');
      });
  };

  const onChangeNome = ({ target }) => {
    setNome(target.value);
  };

  return (
    <>
      <h2>Procure seu Pokémon</h2>
      <input
        type="text"
        onChange={onChangeNome}
        placeholder="Ex: Pikachu"
        value={nome}
      />
      <button onClick={buscarPokemon}>Buscar</button>

      {pokemon && (
        <div>
          <Link to={`/pokemon/${pokemon.name}`}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt="Foto de um Pokemon" />
          </Link>
        </div>
      )}
    </>
  );
}
