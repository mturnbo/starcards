import React from 'react';
import Card from '../Card';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Star Cards</h1>
				<hr />
				<Card resource="films" id="1" />
			</div>);
	}
}

export default App;
