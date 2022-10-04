import React from 'react';

export default function Card({ max, min, name, img, onClose}) { //se peude hacer destructuring porque es un objeto lo que se recibe
  // acá va tu código
  return (<div>
    <button onClick={onClose}>X</button>
    <h4>{name}</h4>
    <div>
    <p>Max</p>
    <p>{max}</p>
    <p>Min</p>
    <p>{min}</p>
    
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt='icono clima' />
  </div>);
};