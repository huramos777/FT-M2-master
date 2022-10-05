import React from 'react';
import x from './Card.module.css'



export default function Card({ max, min, name, img, onClose}) { //se peude hacer destructuring porque es un objeto lo que se recibe
  // acá va tu código
  return (<div className={x.contenedorCard}>
    <button className={x.boton} onClick={onClose}>X</button>
    <h4>{name}</h4>
    <div className={x.contenedorTemperatura}>
    <div>
    <p className={x.temp}>Max</p>
    <p>{max}</p>
    </div>
    <div>
    <p className={x.temp}>Min</p>
    <p>{min}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt='icono clima' />    
    </div>
    
  </div>);
};