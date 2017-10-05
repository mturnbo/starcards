import React from 'react';
import MovieCardCollection from '../MovieCardCollection';
import MovieScrollChart from '../MovieScrollChart';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Star Cards</h1>
				<hr />
				<MovieScrollChart />
				<MovieCardCollection />
			</div>);
	}
}

export default App;
