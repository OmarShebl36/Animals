import './AnimalShow.css'
import { useState } from 'react';
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

interface AnimalShowProps {
	type: string;
}

interface SvgMap {
	[key: string]: string;
	bird: string;
	cat: string;
	cow: string;
	dog: string;
	gator: string;
	horse: string;
}

const svgMap: SvgMap = {
	bird,
	cat,
	cow,
	dog,
	gator,
	horse,
};

function AnimalShow({ type }: AnimalShowProps) {
	const [clicks, setClicks] = useState(0);

	const handleClick = () => {
		setClicks(clicks + 1);
	};

	return (
		<>
			<div className='animal-show' onClick={handleClick}>
				<img className='animal' src={svgMap[type]} alt={type} />
				<img className='heart' src={heart} alt={`${type}-heart`} style={{ width: 10 + 10 * clicks }} />
			</div>
		</>
	);
}

export default AnimalShow;
