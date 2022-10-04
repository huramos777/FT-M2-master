import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div>
      <input type='text' placeholder='Ingrese la Ciudad'></input>
      <button onClick={() => onSearch('Buscando ciudad...')}>Agregar</button>
    </div>
  );
};