import React from 'react';
import x from './App.module.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';

function App() {
  return (
    <div className={x.app}>
      <div className={x.header}>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <hr />  
      <div className={x.main}>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div className={x.main}>
        <Cards
          cities={data}
        />
      </div>
          
    </div>
  );
}

export default App;
