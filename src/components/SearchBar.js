import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		onFormSubmit(term);
	};

	return (
		<div
			className="search-bar ui segment"
			style={{
				backgroundColor: '#E8EBF7',
				marginTop: '5px',
				border: '2px solid #ACBED8',
			}}
		>
			<form onSubmit={onSubmit} className="ui form">
				<div className="field">
					<label style={{ fontWeight: 'bold', fontSize: 15 }}>
						Video Search
					</label>
					<input
						type="text"
						value={term}
						onChange={(event) => setTerm(event.target.value)}
						style={{
							backgroundColor: '#E8EBF7',
							fontWeight: 'bold',
							fontSize: 13,
							border: '2px solid #ACBED8',
						}}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
