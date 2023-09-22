import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Note o uso de `Routes` em vez de `Route`
import Home from './assets/pages/Home';
import PokemonDetails from './assets/pages/PokemonDetails';

const App = () => (
  <BrowserRouter>
    <Routes> {/* Use o componente `<Routes>` para envolver suas rotas */}
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<PokemonDetails />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
