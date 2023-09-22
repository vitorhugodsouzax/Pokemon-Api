import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './assets/pages/Home';
import PokemonDetails from './assets/pages/PokemonDetails';

const App = () => (
  <BrowserRouter>
    <Routes> {}
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<PokemonDetails />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
