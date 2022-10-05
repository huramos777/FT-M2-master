import React from 'react';
import Card from './Card';
import x from './Cards.module.css'



export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  const ciudades = props.cities;
  return (<div className={x.contenedorCards}>
            {
              ciudades.map(obj => <Card
                                        key={obj.id} //  siempre pasarle un prop key para que react pueda diferenciarlos
                                        name={obj.name} 
                                        min={obj.main.temp_min}
                                        max={obj.main.temp_max}
                                        img={obj.weather[0].icon}
                                        boton={() => alert(obj.name)} />)
            }  
          </div>
  );
};