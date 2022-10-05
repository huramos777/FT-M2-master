import React from 'react';
import x from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div>
      <input 
              className={x.input} 
              type='text' 
              placeholder='Ciudad...'></input>
      <button 
              className={x.botonSearch} 
              onClick={() => onSearch('Buscando ciudad...')}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg></button>
    </div>
  );
};