import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function App() {
	const existingAnimals = ['cat', 'dog', 'cow', 'bird', 'gator', 'horse'];
	const [animals, setAnimals] = useState<Array<string>>([]);

	function getRandomAnimal() {
		return existingAnimals[Math.floor(Math.random() * animals.length)];
	}
	const handleClick = () => {
		setAnimals([...animals, getRandomAnimal()]);
	};

	const renderedAnimals = animals.map((animal, index) => {
		return <AnimalShow type={animal} key={index} />;
	});

	return (
		<div className='app'>
			<button onClick={handleClick}>Add Animal</button>
			<div className='animal-list'>{renderedAnimals}</div>
		</div>
	);
}

export default App;
