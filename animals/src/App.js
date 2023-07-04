import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'gator', 'dog', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  var [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderAnims = animals.map((animal, index) => (
    <AnimalShow type={animal} key={index} />
  ));

  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderAnims}</div>
    </div>
  );
}

export default App;
