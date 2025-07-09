import { useState } from 'react';
import './searchbar.css';

export default function Searchbar() {
	const [termoPesquisa, setTermoPesquisa] = useState('');
	console.log(termoPesquisa);

	return (
		<input
			className='barra-pesquisa'
			type="search"
			placeholder='Digite o que você procura'
			value={termoPesquisa}
			onChange={(event) => setTermoPesquisa(event.target.value)}
		/>
	)
}
