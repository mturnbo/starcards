import React from 'react';
import MovieCardCollection from '../MovieCardCollection';
import Config from 'Config';

class App extends React.Component {

	render() {
		return (
			<div>
				<h1>Star Cards</h1>
				<hr />
				<MovieCardCollection />
			</div>);
	}
}

export default App;
